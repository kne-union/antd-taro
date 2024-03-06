const {Avatar, Space} = antdTaro;
const {View, Text} = taroComponent;

const demoAvatarImages = [
  'https://github.githubassets.com/assets/app-icon-512-7f9c4ff2e960.png',
  'https://avatars.githubusercontent.com/u/37367461?v=4',
];

const BaseExample = ()=>{
    return (
      <Space direction={'vertical'} size={30}>
        <Space direction={'vertical'}>
          <View>基础用法</View>
          <Space>
            <Avatar src={demoAvatarImages[0]} />
            <Avatar src={demoAvatarImages[1]} />
          </Space>
        </Space>
        <Space direction={'vertical'}>
          <View>占位头像</View>
          <Avatar />
          <Text style={{color: '#666', fontSize: '14px'}}>如果你不传图片，或者不传性别，或者图片加载失败，那么会显示一个默认的图像</Text>
        </Space>
        <Space direction={'vertical'}>
          <View>性别默认头像</View>
          <Space>
            <Avatar gender={'F'} />
            <Avatar gender={'f'} />
            <Avatar gender={'female'} />
          </Space>
          <Space>
            <Avatar gender={'M'} />
            <Avatar gender={'m'} />
            <Avatar gender={'male'} />
          </Space>
        </Space>
        <Space direction={'vertical'}>
          <View>自定义尺寸</View>
          <Space>
            <Avatar gender={'F'} />
            <Avatar gender={'f'} size={64} />
            <Avatar gender={'female'} size={80} />
          </Space>
        </Space>
        <Space direction={'vertical'}>
          <View>自定义圆角</View>
          <Space>
            <Avatar src={demoAvatarImages[0]} style={{'--border-radius': '10%'}} />
            <Avatar src={demoAvatarImages[1]} style={{'--border-radius': '12px'}} />
          </Space>
        </Space>
      </Space>
    );
};

render(<BaseExample />);
