const {parse} = require('@kne/md-doc');
const fs = require('fs-extra');
const path = require('path');
const baseDir = process.cwd();
const get = require("lodash/get");
const uniqueId = require("lodash/uniqueId");
const chokidar = require('chokidar');

const args = process.argv.slice(2);
const readmeGenerator = (readme) => {
    const importList = [], mapping = {};
    get(readme, 'example.list', []).forEach(({scope}) => {
        scope.forEach(({name, packageName}) => {
            if (!mapping[packageName]) {
                const key = uniqueId("component_");
                importList.push(name ? `import * as ${key} from '${packageName}';` : `import '${packageName}';`);
                if (name) {
                    mapping[packageName] = key;
                }
            }
        });
    });

    return `${importList.join("\n")}
import React from 'react';
const readmeConfig = {
    name: \`${readme.name || ''}\`,
    summary: \`${readme.summary}\`,
    api: \`${readme.api}\`,
    example: {
        isFull: ${get(readme, "example.isFull") || "false"},
        className: \`${get(readme, "example.className") || ""}\`,
        style: \`${get(readme, "example.style") || ""}\`,
        list: [${(get(readme, "example.list") || []).map((item) => {
        return `{
    title: \`${item.title}\`,
    description: \`${item.description}\`,
    code: \`${(item.code || "").toString().replace(/\$/g, "\\$").replace(/`/g, "\\`")}\`,
    scope: \`${(item.scope || []).filter(({name}) => !!name).map(({name, packageName}) => {
        return `import * as ${name} from '${packageName}';`;
        }).join("\n")}\`,
    component: ()=> {
    ${(item.scope || []).filter(({name}) => !!name).map(({name, packageName}) => {
            return `const ${name} = ${mapping[packageName]};`;
        }).join("\n")}
              let children = null;
              const render = (jsx)=> {
                children = jsx;
              };
              ${item.code}
              
              return children;
            }
}`;
    }).join(",")}]
    }
};
export default readmeConfig;
`;
};

const generator = async () => {
    const readmeString = await fs.readFile(path.resolve(baseDir, '../README.md'), 'utf8');
    const readmeJsonData = parse(readmeString);
    await fs.writeFile(path.resolve(baseDir, 'components-doc.js'), readmeGenerator(readmeJsonData));
};

generator();

if (args.indexOf('--watch') > -1) {
    chokidar.watch([path.resolve(baseDir, '../README.md'), path.resolve(process.cwd(), 'package.json')]).on('all', (event, path) => {
        generator().catch((e) => {
            console.error(e);
        });
    });
}


