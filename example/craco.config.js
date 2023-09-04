const fs = require('fs-extra');
const chokidar = require('chokidar');
const {parse} = require('@kne/md-doc');
const get = require('lodash/get');
const uniqueId = require('lodash/uniqueId');
const spawn = require('cross-spawn-promise');

const createJsTemplate = async (readme) => {
    const list = get(readme, 'example.list') || [];
    const importList = [], packageList = [], mapping = {};

    list.forEach(({scope}) => {
        scope.forEach(({name, packageName}) => {
            if (!mapping[packageName]) {
                const key = uniqueId('component_');
                importList.push(name ? `import * as ${key} from '${packageName}';` : `import '${packageName}';`);
                if (name) {
                    mapping[packageName] = key;
                }
            }


            if (readme.name !== 'packageName' && packageList.indexOf(packageName) === -1) {
                packageList.push(packageName);
            }
        });
    });

    for (let name of packageList) {
        if (!name) {
            continue;
        }
        const splitList = name.split('/');
        let packageName = splitList[0];
        if (splitList[0].indexOf('@') === 0) {
            packageName = splitList[0] + '/' + splitList[1];
        }
        if (!await fs.exists(`./node_modules/${packageName}`)) {
            console.log(`>>>>>开始自动安装包${packageName}>>>>>>`);
            await spawn('npm', ['i', packageName, '--save'], {stdio: 'inherit'}).then(() => {
                console.log(`<<<<<<<<<<包${packageName}安装完成<<<<<<<<`);
            }, (e) => {
                console.log(e);
                console.log(`-------包${packageName}自动安装失败-------`);
            });
        }
    }

    return `${importList.join('\n')}
const readmeConfig = {
    name: \`${readme.name}\`,
    description: \`${readme.description}\`,
    summary: \`${readme.summary}\`,
    api: \`${readme.api}\`,
    example: {
        isFull: ${get(readme, 'example.isFull') || 'false'},
        className: \`${get(readme, 'example.className') || ''}\`,
        style: \`${get(readme, 'example.style') || ''}\`,
        list: [${(get(readme, 'example.list') || []).map((item) => {
        return `{
    title: \`${item.title}\`,
    description: \`${item.description}\`,
    code: \`${(item.code || '').replace(/\$/g, '\\$').replace(/`/g, '\\`')}\`,
    scope: [${(item.scope || []).map(({name, packageName}) => {
            return `{
    name: "${name}",
    packageName: "${packageName}",
    component: ${mapping[packageName] ? mapping[packageName] : null}
}`
        }).join(',')}]
}`
    }).join(',')}]
    }
};
export default readmeConfig;
`;
};

const ReadmePlugin = {
    overrideDevServerConfig: ({devServerConfig}) => {
        devServerConfig.onAfterSetupMiddleware = () => {
            chokidar.watch('../README.md').on('all', async () => {
                const packageJson = await fs.readJson('../package.json');
                const text = await fs.readFile('../README.md', 'utf8');
                const output = await createJsTemplate(Object.assign({}, parse(text), {
                    name: packageJson.name,
                    description: packageJson.description || ''
                }));
                await fs.writeFile('./src/readme.js', output);
            });
        };
        devServerConfig.watchFiles = ['./src/readme.js'];
        return devServerConfig;
    }
};

module.exports = {
    plugins: [
        {
            plugin: ReadmePlugin
        }
    ]
};
