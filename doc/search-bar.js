const {SearchBar, Space, Button} = antdTaro;
const {View} = taroComponent;
const {useRef} = React;
const {showToast} = tarojsTaro;

const BaseExample = ()=>{
  const searchRef = useRef(null);
  return (
    <Space direction={'vertical'} size={30}>
      <Space direction={'vertical'}>
        <View>基础用法</View>
        <SearchBar placeholder='请输入内容' />
      </Space>
      <Space direction={'vertical'}>
        <View>不显示搜索按钮</View>
        <SearchBar showSearchButton={false} />
      </Space>
      <Space direction={'vertical'}>
        <View>自定义搜索按钮</View>
        <SearchBar autoFocus searchText='立即搜索' />
      </Space>
      <Space direction={'vertical'}>
        <View>搜索按钮长显</View>
        <SearchBar placeholder='请输入内容' showSearchButton={() => true} />
      </Space>
      <Space direction={'vertical'}>
        <View>事件监听和 Ref</View>
        <SearchBar
          ref={searchRef}
          placeholder='请输入内容'
          onSearch={val => {
            console.log('你搜索了')
            showToast({title: `你搜索了：${val}`, icon: 'none'})
          }}
          onFocus={() => {
            console.log('获得焦点')
            setTimeout(() => searchRef.current?.focus(), 300)

          }}
          onBlur={() => {
            console.log('失去焦点')
          }}
          onCancel={() => {
            console.log('取消搜索')
          }}
        />
        <Space>
          <Button
            onClick={() => {
              searchRef.current?.clear()
            }}
          >
            清空内容
          </Button>
          <Button
            onClick={() => {
              searchRef.current?.focus()
            }}
          >
            激活
          </Button>
        </Space>
      </Space>
    </Space>
  );
};

render(<BaseExample />);
