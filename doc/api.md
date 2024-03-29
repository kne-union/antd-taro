### Avatar 头像

#### 属性

| 属性名  | 说明                           | 类型     | 默认值 |
|------|------------------------------|--------|-----|
| src  | 头像的图片地址                      | string | -   |
| size | 大小，宽度和高度，等效于设置 --size CSS 变量 | number | 48  |

#### CSS 变量

| 属性名             | 说明       | 默认值  | 全局变量                       |
|-----------------|----------|------|----------------------------|
| --border-radius | 圆角       | 50%  | --adm-avatar-border-radius |
| --size          | 大小，宽度和高度 | 48px | --adm-avatar-size          |

### Badge 徽标

#### 属性

| 属性名              | 说明                                                         | 类型                                   | 默认值   |
|------------------|------------------------------------------------------------|--------------------------------------|-------|
| bordered         | 是否增加描边                                                     | boolean                              | false |
| color            | 徽标背景色，等效于设置 --color CSS 变量                                 | string                               | -     |
| content          | 徽标内容：如果传 null undefined '' 或不传，则不显示徽标；如果传 Badge.dot，会显示小红点 | React.ReactNode  \| typeof Badge.dot | -     |
| wrapperClassName | Badge wrap 自定义类名                                           | string                               | -     |
| wrapperStyle     | Badge wrap 自定义样式                                           | React.CSSProperties                  | -     |

#### CSS 变量

| 属性名     | 说明            | 默认值     | 全局变量              |
|---------|---------------|---------|-------------------|
| --color | 徽标背景色         | #ff411c | --adm-badge-color |
| --right | 相对于最右边，向左的偏移量 | 0       | -                 |
| --top   | 相对于最上边，向下的偏移量 | 0       | -                 |

### Button 按钮

#### 属性

| 属性名         | 说明                                                     | 类型                                                           | 默认值                                 |
|-------------|--------------------------------------------------------|--------------------------------------------------------------|-------------------------------------|
| block       | 是否是块级元素                                                | boolean                                                      | false                               |
| color       | 按钮的颜色                                                  | 'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' | 'default'                           |
| disabled    | 是否禁用                                                   | boolean                                                      | false                               |
| fill        | 填充模式                                                   | 'solid' \| 'outline' \| 'none'                               | 'solid'                             |
| loading     | 是否处于加载状态，'auto' 模式会监听 onClick 的 Promise 状态自动更新 loading | boolean \| 'auto'                                            | false                               |
| loadingIcon | 加载状态下的 icon 图标                                         | ReactNode                                                    | <DotLoading color='currentColor' /> |
| loadingText | 加载状态下额外展示的文字                                           | string                                                       | -                                   |
| shape       | 按钮的形状                                                  | 'default' \| 'rounded' \| 'rectangular'                      | 	'default'                          |
| size        | 大小                                                     | 'mini' \| 'small' \| 'middle' \| 'large'                     | 	'middle'                           |
| type        | 原生 button 元素的 type 属性                                  | 'submit' \| 'reset' \| 'button'                              | 	'button'                           |
| onClick     | 点击事件                                                   | (event: React.MouseEvent) => void \| Promise                 | -                                   |

***此外，还支持原生 button 元素的以下属性：onMouseDown onMouseUp onTouchStart onTouchEnd。***

#### CSS 变量

| 属性名                | 说明   | 默认值                                 | 全局变量                          |
|--------------------|------|-------------------------------------|-------------------------------|
| --background-color | 背景颜色 | var(--adm-color-background) #ffffff | --adm-button-background-color |
| --border-color     | 边框颜色 | var(--adm-color-border) #f1f1f1     | --adm-button-border-color     |
| --border-radius    | 圆角大小 | 8px                                 | --adm-button-border-radius    |
| --border-style     | 边框样式 | solid                               | --adm-button-border-style     |
| --border-width     | 边框样式 | 2px                                 | --adm-button-border-width     |
| --text-color       | 文字颜色 | var(--adm-color-text) '#333333'     | --adm-button-text-color       |

### Card 卡片

#### 属性

| 属性名             | 说明            | 类型                                | 默认值 |
|-----------------|---------------|-----------------------------------|-----|
| bodyClassName   | body 自定义类名    | string                            | -   |
| bodyStyle       | body 自定义样式    | React.CSSProperties               | -   |
| extra           | header 右边区域   | ReactNode                         | -   |
| headerClassName | header 自定义类名  | string                            | -   |
| headerStyle     | header 自定义样式  | React.CSSProperties               | -   |
| onBodyClick     | body 区域点击事件   | (event: React.MouseEvent) => void | -   |
| onClick         | 卡片点击事件        | (event: React.MouseEvent) => void | -   |
| onHeaderClick   | header 区域点击事件 | (event: React.MouseEvent) => void | -   |
| title           | header 左边区域   | ReactNode                         | -   |

### CheckList 可勾选列表

#### 属性

| 属性名          | 说明     | 类型                             | 默认值              |
|--------------|--------|--------------------------------|------------------|
| activeIcon   | 选中图标   | ReactNode                      | <CheckOutline /> |
| extra        | 列表右侧区域 | (active: boolean) => ReactNode | -                |
| defaultValue | 默认项    | string[]                       | []               |
| disabled     | 是否禁用   | boolean                        | false            |
| multiple     | 是否允许多选 | boolean                        | false            |
| onChange     | 选项改变时触 | (value: string[]) => void      | false            |
| readOnly     | 是否只读   | boolean                        | false            |
| value        | 选中项    | string[]                       | []               |

此外，还支持 List 的 mode 属性

### CheckListItem

#### 属性

| 属性名      | 说明   | 类型       | 默认值   |
|----------|------|----------|-------|
| disabled | 是否禁用 | boolean  | false |
| readOnly | 是否只读 | boolean  | false |
| value    | 选项值  | string[] | []    |

#### CSS 变量

***同 List.Item***

| 属性名                       | 说明                   | 默认值                               |
|---------------------------|----------------------|-----------------------------------|
| --active-background-color | 点击时的背景颜色             | var(--adm-color-border)           |
| --align-items             | 列表项的 align-item      | center                            |
| --border-bottom           | 列表容器底部的边框样式          | solid 2px var(--adm-color-border) |
| --border-inner            | 列表项底部的边框样式           | solid 2px var(--adm-color-border) |
| --border-top              | 列表容器顶部的边框样式          | solid 2px var(--adm-color-border) |
| --extra-max-width         | extra 部分的最大宽度        | 70%                               |
| --font-size               | Body 内容的字体大小         | var(--adm-font-size-9) 34px       |
| --header-font-size        | 头部的字体大小              | var(--adm-font-size-7) 30px       |
| --padding-left            | 列表项和列表头部左侧的 padding  | 24px                              |
| --padding-right           | 列表项和列表头部右侧的 padding  | 24px                              |
| --prefix-padding-right    | prefix 部分的右侧 padding | 24px                              |
| --prefix-width            | prefix 部分的宽度         | auto                              |

### Collapse 折叠面板

#### 属性

| 属性名              | 说明                                               | 类型                                                                                  | 默认值                                          |
|------------------|--------------------------------------------------|-------------------------------------------------------------------------------------|----------------------------------------------|
| accordion        | 是否开启手风琴模式                                        | boolean                                                                             | false                                        |
| activeKey        | 当前展开面板的 key                                      | 手风琴模式：string \| null<br/> 非手风琴模式：string[]                                           | -                                            |
| arrow            | 自定义箭头，如果是 ReactNode，那么 antd-mobile 会自动为你增加旋转动画效果 | ReactNode                                                                           | ((active: boolean) => React.ReactNode) \| [] | -|
| defaultActiveKey | 默认展开面板的 key                                      | 手风琴模式：string \| null<br/> 非手风琴模式：string[] \| []                                     | -                                            |
| onChange         | 切换面板时触发                                          | 手风琴模式：(activeKey: string \| null) => void<br/> 非手风琴模式：(activeKey: string[]) => void | -                                            |

#### Collapse.Panel

#### 属性

| 属性名            | 说明              | 类型                                                  | 默认值   |
|----------------|-----------------|-----------------------------------------------------|-------|
| arrow          | 自定义箭头           | ReactNode \| ((active: boolean) => React.ReactNode) | -     |
| destroyOnClose | 不可见时是否销毁 DOM 结构 | boolean                                             | false |
| disabled       | 是否为禁用状态         | boolean                                             | false |
| forceRender    | 被隐藏时是否渲染 DOM 结构 | boolean                                             | false |
| key            | 唯一标识符           | string                                              | -     |
| onClick        | 标题栏的点击事件        | (event: React.MouseEvent) => void                   | -     |
| title          | 标题栏左侧内容         | ReactNode                                           | -     |

### DatePicker日期选择器

#### 属性

| 属性名          | 说明                                                            | 类型                                                    | 默认值                    |
|--------------|---------------------------------------------------------------|-------------------------------------------------------|------------------------|
| defaultValue | 默认选中值                                                         | PickerDate                                            | new Date() 今天          |
| max          | 最大值                                                           | PickerDate                                            | new Date() 今天          |
| min          | 最小值                                                           | PickerDate                                            | new Date('1949-10-01') |
| onChange     | 确认时触发                                                         | (value: PickerDate) => void                           | -                      |
| precision    | 精度                                                            | 'month' \| 'day' \| 'hour' \| 'minute'                | -                      |
| renderLabel  | 自定义渲染每列展示的内容。其中 type 参数为 precision 中的任意值或 now，data 参数为默认渲染的数字 | (type: Precision \| 'now', data: number) => ReactNode | -                      |
| value        | 选中值                                                           | PickerDate                                            | -                      |

此外还支持 Picker 的以下属性：onCancel onClose confirmText cancelText title loading loadingContent。

### DateRangePicker 日期范围选择器

#### 属性

| 属性名          | 说明                                                            | 类型                                                    | 默认值                         |
|--------------|---------------------------------------------------------------|-------------------------------------------------------|-----------------------------|
| defaultValue | 默认选中值                                                         | [PickerDate, PickerDate]                              | [new Date(), new Date()] 今天 |
| max          | 最大值                                                           | PickerDate                                            | new Date() 今天               |
| min          | 最小值                                                           | PickerDate                                            | new Date('1949-10-01')      |
| onChange     | 确认时触发                                                         | (value: PickerDate) => void                           | -                           |
| precision    | 精度                                                            | 'month' \| 'day' \| 'hour' \| 'minute'                | -                           |
| renderLabel  | 自定义渲染每列展示的内容。其中 type 参数为 precision 中的任意值或 now，data 参数为默认渲染的数字 | (type: Precision \| 'now', data: number) => ReactNode | -                           |
| value        | 选中值                                                           | [PickerDate, PickerDate]                              | -                           |

此外还支持 Picker 的以下属性：onCancel onClose confirmText cancelText title loading loadingContent。

### DotLoading 点状加载图标

#### 属性

| 属性名   | 说明                          | 类型                                          | 默认值       |
|-------|-----------------------------|---------------------------------------------|-----------|
| color | 线条颜色，等效于手动设置 --color CSS 变量 | 'default' \| 'primary' \| 'white' \| string | 'default' |

DotLoading 的大小会自动根据当前的文字大小进行调整。

#### CSS 变量

| 属性名     | 说明   | 默认值                   |
|---------|------|-----------------------|
| --color | 线条颜色 | var(--adm-color-weak) |
| --size  | 大小   | 32px                  |

### Dropdown 下拉菜单

#### 属性

| 属性名      | 说明              | 类型                                 | 默认值 |
|----------|-----------------|------------------------------------|-----|
| arrow    | 自定义 arrow       | React.ReactNode                    | -   |
| onChange | activeKey 变化时触发 | (activeKey: string \| null)=> void | -   |
| items    | 列               | DropdownItem[]                     | -   |

#### Ref

| 属性    | 说明     | 类型         |
|-------|--------|------------|
| close | 关闭下拉菜单 | () => void |

### DropdownItem

#### 属性

| 属性名       | 说明        | 类型                                | 默认值   |
|-----------|-----------|-----------------------------------|-------|
| arrow     | 自定义 arrow | React.ReactNode                   | -     |
| highlight | 高亮        | boolean                           | false |
| key       | 唯一值       | string                            | -     |
| title     | 标题        | ReactNode                         | -     |
| onClick   | 点击事件      | (event: React.MouseEvent) => void | -     |

### Ellipsis 文本省略

#### 属性

| 属性名             | 说明         | 类型              | 默认值   |
|-----------------|------------|-----------------|-------|
| collapseText    | 收起操作的文案    | React.ReactNode | '收起'  |
| content         | 文本内容       | string          | -     |
| expandText      | 展开操作的文案    | ReactNode       | '展开'  |
| rows            | 展示几行       | number          | 1     |
| defaultExpanded | 是否默认展开     | boolean         | false |
| showAction      | 是否显示展开收起操作 | boolean         | false |

### Empty 空状态

#### 属性

| 属性名         | 说明                       | 类型            | 默认值 |
|-------------|--------------------------|---------------|-----|
| description | 图片下方的描述文字                | ReactNode     | -   |
| image       | 自定义图片，为 string 时表示图片 URL | ReactNode     | -   |
| imageStyle  | 图片样式                     | CSSProperties | -   |

### Grid 栅格

#### 属性

| 属性名     | 说明      | 类型                                                        | 默认值 |
|---------|---------|-----------------------------------------------------------|-----|
| columns | 列数      | number                                                    | -   |
| gap     | 格子之间的间距 | number \| string \| \[number \| string, number \| string] | 0   |

#### CSS 变量

| 属性名              | 说明        | 默认值        |
|------------------|-----------|------------|
| --gap            | 间距大小      | 0          |
| --gap-horizontal | 水平方向的间距大小 | var(--gap) |
| --gap-vertical   | 垂直方向的间距大小 | var(--gap) |

### Grid.Item

#### 属性

| 属性名     | 说明   | 类型                                | 默认值 |
|---------|------|-----------------------------------|-----|
| onClick | 点击事件 | (event: React.MouseEvent) => void | -   |
| span    | 跨度   | number                            | 1   |

### Icon 图标

#### 属性

| 属性名        | 说明                       | 类型            | 默认值 |
|------------|--------------------------|---------------|-----|
| type       | 图标类型                     | ReactNode     | -   |
| image      | 自定义图片，为 string 时表示图片 URL | ReactNode     | -   |
| imageStyle | 图片样式                     | CSSProperties | -   |

### Input 输入框

#### 属性

| 属性名                    | 说明                                                                                        | 类型                                                       | 默认值                 |
|------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------------|---------------------|
| value                  | 输入框的初始内容                                                                                  | string                                                   | -                   |
| type                   | input 的类型                                                                                 | "number" \| "text" \| "idcard" \| "digit"                | "text"              |
| password               | 是否是密码类型                                                                                   | boolean                                                  | -                   |
| placeholder            | 输入框为空时占位符                                                                                 | string                                                   | -                   |
| placeholderStyle       | 指定 placeholder 的样式                                                                        | string                                                   | -                   |
| placeholderClass       | 指定 placeholder 的样式类                                                                       | string                                                   | "input-placeholder" |
| disabled               | 是否禁用                                                                                      | boolean                                                  | false               |
| maxLength              | 最大输入长度，设置为 -1 的时候不限制最大长度                                                                  | number                                                   | 140                 |
| cursorSpacing          | 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离                     | number                                                   | 0                   |
| autoFocus              | (即将废弃，请直接使用 focus )自动聚焦，拉起键盘                                                              | boolean                                                  | false               |
| focus                  | 获取焦点                                                                                      | boolean                                                  | false               |
| confirmType            | 设置键盘右下角按钮的文字                                                                              | "send" \| "search" \| "next" \| "go" \| "done"           | done                |
| confirmHold            | 点击键盘右下角按钮时是否保持键盘不收起                                                                       | boolean                                                  | false               |
| cursor                 | 指定focus时的光标位置                                                                             | number                                                   |                     |
| selectionStart         | 光标起始位置，自动聚集时有效，需与selection-end搭配使用                                                        | number                                                   | -1                  |
| selectionEnd           | 光标结束位置，自动聚集时有效，需与selection-start搭配使用                                                      | number                                                   | -1                  |
| adjustPosition         | 键盘弹起时，是否自动上推页面                                                                            | boolean                                                  | true                |
| holdKeyboard           | focus 时，点击页面的时候不收起键盘                                                                      | boolean                                                  | false               |
| onInput                | 当键盘输入时，触发input事件，event.detail = {value, cursor, keyCode}，处理函数可以直接 return 一个字符串，将替换输入框的内容。 | BaseEventOrigFunction: inputEventDetail                  | -                   |
| onFocus                | 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度                                    | BaseEventOrigFunction: inputForceEventDetail             | -                   |
| onBlur                 | 输入框失去焦点时触发 event.detail = {value: value}                                                  | BaseEventOrigFunction: inputValueEventDetail             | -                   |
| onConfirm              | 点击完成按钮时触发 event.detail = {value: value}                                                   | BaseEventOrigFunction: inputValueEventDetail             | -                   |
| onKeyboardHeightChange | 键盘高度发生变化的时候触发此事件 event.detail = {height: height, duration:                                | BaseEventOrigFunction: onKeyboardHeightChangeEventDetail | -                   |

#### inputEventDetail

| 属性名     | 类型     | 说明   |
|---------|--------|------|
| value   | string | 输入值  |
| cursor  | number | 光标位置 |
| keyCode | number | 键值   |

#### inputForceEventDetail

| 属性名    | 类型     | 说明   |
|--------|--------|------|
| value  | string | 输入值  |
| height | number | 键盘高度 |

#### inputValueEventDetail

| 属性名   | 类型     | 说明  |
|-------|--------|-----|
| value | string | 输入值 |

#### onKeyboardHeightChangeEventDetail

| 属性名      | 类型     | 说明   |
|----------|--------|------|
| height   | number | 键盘高度 |
| duration | number | 持续时间 |

#### Ref

| 属性名   | 类型         | 说明       |
|-------|------------|----------|
| blur  | () => void | 让输入框失去焦点 |
| clear | () => void | 清空输入内容   |
| focus | () => void | 让输入框获得焦点 |

### List 列表

#### 属性

| 属性名    | 说明          | 类型                  | 默认值       |
|--------|-------------|---------------------|-----------|
| header | 标题内容        | ReactNode           | -         |
| mode   | 支持默认和卡片两种模式 | 'default' \| 'card' | 'default' |

#### CSS 变量

| 属性名                       | 说明                    | 默认值                               |
|---------------------------|-----------------------|-----------------------------------|
| --active-background-color | 点击时的背景颜色              | var(--adm-border-color)           |
| --align-items             | 列表项的 align-item       | center                            |
| --border-bottom           | 列表容器底部的边框样式           | solid 1px var(--adm-border-color) |
| --border-inner            | 列表项底部的边框样式            | solid 1px var(--adm-border-color) |
| --border-top              | 列表容器顶部的边框样式           | solid 1px var(--adm-border-color) |
| --extra-max-width         | extra 部分的最大宽度         | 70%                               |
| --font-size               | Body 内容的字体大小          | 34px                              |
| --header-font-size        | 头部的字体大小               | 30px                              |
| --padding-left            | 列表项和列表头部左侧的 padding	  | 24px                              |
| --padding-right           | 列表项和列表头部右侧的 padding	  | 24px                              |
| --prefix-padding-right    | prefix 部分的右侧 padding	 | 24px                              |
| --prefix-width            | prefix 部分的宽度	         | auto                              |

### List.Item

#### 属性

| 属性名         | 说明                                  | 类型                            | 默认值                                  |
|-------------|-------------------------------------|-------------------------------|--------------------------------------|
| arrow       | 右侧是否显示箭头图标，也支持传入 ReactNode 来自定义图标   | boolean \| ReactNode          | 默认和 clickable 的值保持一致                 |
| children    | 列表项中间的主内容区域                         | ReactNode                     | -                                    |
| clickable   | 是否显示点击效果                            | boolean                       | 当 onClick 属性存在时，默认为 true，否则默认为 false |
| description | 列表项中间下部的描述区域                        | ReactNode                     | -                                    |
| disabled    | 是否禁用                                | boolean                       | false                                |
| extra       | 列表项右侧区域                             | ReactNode                     | -                                    |
| onClick     | 列表项的点击事件，当设置了 onClick 属性时，列表项会有点击效果 | (e: React.MouseEvent) => void | -                                    |
| prefix      | 列表项左侧区域                             | ReactNode                     | -                                    |
| title       | 列表项中间上部的标题区域                        | ReactNode                     | -                                    |

#### CSS 变量

支持 List 中的 --prefix-width、--active-background-color、--align-items

### NavBar 导航栏

#### 属性

| 属性名       | 说明                                  | 类型                   | 默认值        |
|-----------|-------------------------------------|----------------------|------------|
| back      | 返回区域的文字，如果为 null 的话，backArrow 也不会渲染 | ReactNode \| null    | ''         |
| backArrow | 支持默认和卡片两种模式                         | boolean \| ReactNode | true       |
| children  | 标题                                  | ReactNode            | ReactNode  |
| left      | 左侧内容，渲染在返回区域的右侧                     | ReactNode            | -          |
| onBack    | 点击返回区域后的回调                          | ReactNode            | () => void |
| right     | 右侧内容                                | ReactNode            | ReactNode  |

#### CSS 变量

| 属性名             | 说明     | 默认值  |
|-----------------|--------|------|
| --border-bottom | 导航栏下边框 | none |
| --height        | 导航栏高度  | 90px |

### Picker 选择器

#### 属性

| 属性名            | 说明               | 类型                                                           | 默认值                  |
|----------------|------------------|--------------------------------------------------------------|----------------------|
| cancelText     | 取消按钮的文字          | ReactNode                                                    | '取消'                 |
| columns        | 配置每一列的选项         | PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[]) | -                    |
| confirmText    | 确定按钮的文字          | ReactNode                                                    | '确定'                 |
| defaultValue   | 默认选中项            | PickerValue[]                                                | []                   |
| onCancel       | 取消时触发            | () => void                                                   | -                    |
| onClose        | 确认和取消时都会触发关闭事件   | () => void                                                   | -                    |
| popupClassName | Popup 弹层容器的自定义类名 | string                                                       | -                    |
| popupStyle     | Popup 弹层容器的自定义样式 | React.CSSProperties                                          | -                    |
| renderLabel    | 自定义渲染每列展示的内容     | (item: PickerColumnItem) => ReactNode                        | (item) => item.label |
| title          | 标题               | PickerValue[]                                                | -                    |
| value          | 选中项              | PickerValue[]                                                | -                    |
| open           | 是否显示选择器          | boolean                                                      | false                |
| onOpenChange   | 确认时触发            | (value: boolean) => void                                     | -                    |
| loading        | 是否处于加载状态         | boolean                                                      | boolean              |

***此外还支持 Popup 的以下属性：getContainer onClick stopPropagation***

***请留意，columns 属性的类型是二级数组，第一级对应的是每一列，而第二级对应的是某一列中的每一个选项。因此，下面的这种写法是错误的：
***

```jsx
<Picker
  columns={[
    {label: 'Foo', value: 'foo'},
    {label: 'Bar', value: 'bar'},
  ]}
/>
```

***需要写成：***

```jsx
<Picker
  columns={[
    [
      {label: 'Foo', value: 'foo'},
      {label: 'Bar', value: 'bar'},
    ]
  ]}
/>
```

#### CSS 变量

| 属性名                       | 说明                       | 默认值  |
|---------------------------|--------------------------|------|
| --header-button-font-size | 确定和取消按钮的字号               | 30px |
| --item-font-size          | 选择项的字号                   | 32px |
| --item-height             | 选项的高度，仅支持 px rem 和 vw 单位 | 34px |
| --title-font-size         | 标题的字号                    | 30px |

### Popup 弹出层

#### 属性

| 属性名              | 说明              | 类型                                     | 默认值       |
|------------------|-----------------|----------------------------------------|-----------|
| afterClose       | 完全关闭后触发         | () => void                             | -         |
| afterShow        | 完全展示后触发         | () => void                             | -         |
| bodyClassName    | 内容区域类名          | string                                 | -         |
| bodyStyle        | 内容区域样式          | React.CSSProperties                    | -         |
| className        | 容器类名            | string                                 | -         |
| closeOnMaskClick | 点击背景蒙层后是否关闭     | boolean                                | false     |
| mask             | 是否展示蒙层          | boolean                                | true      |
| maskClassName    | 遮罩类名            | string                                 | -         |
| onClick          | 点击时触发，常用于阻止事件冒泡 | (event: React.MouseEvent) => void      | -         |
| onClose          | 关闭时触发           | () => void                             | -         |
| onMaskClick      | 点击蒙层触发          | (event: React.MouseEvent) => void      | -         |
| position         | 指定弹出的位置         | 'bottom' \| 'top' \| 'left' \| 'right' | 'bottom'  |
| showCloseButton  | 是否显示关闭按钮        | boolean                                | false     |
| stopPropagation  | 阻止某些事件的冒泡       | PropagationEvent[]                     | ['click'] |
| style            | 容器样式            | React.CSSProperties                    | -         |
| open             | 是否可见            | boolean                                | false     |

#### CSS 变量

| 属性名       | 说明           | 默认值  | 全局变量                |
|-----------|--------------|------|---------------------|
| --z-index | 	元素的 z-index | 1000 | --adm-popup-z-index |

### Result 结果

#### 属性

| 属性名         | 说明       | 类型                                                       | 默认值       |
|-------------|----------|----------------------------------------------------------|-----------|
| description | 描述       | ReactNode                                                | -         |
| icon        | 自定义 icon | ReactNode                                                | ReactNode |
| status      | 状态类型     | 'success' \| 'error' \| 'info' \| 'waiting' \| 'warning' | 'info'    |
| title       | 标题       | ReactNode                                                | -         |

### SafeArea 安全区

#### 属性

| 属性名      | 说明     | 类型    | 默认值      |
|----------|--------|-------|----------|
| position | 安全区的位置 | 'top' | 'bottom' |

#### CSS 变量

| 属性名        | 说明     | 默认值 | 全局变量                     |
|------------|--------|-----|--------------------------|
| --multiple | 	显示的倍数 | 1   | --adm-safe-area-multiple |

### ScrollHeader 滚动标头

#### 属性

| 属性名         | 说明       | 类型        | 默认值                                       |
|-------------|----------|-----------|-------------------------------------------|
| showMore    | 是否展示更多按钮 | boolean   | true                                      |
| icon        | 更多按钮     | ReactNode | Icon type="gengduo2" className="iconfont" |
| defaultOpen | 默认打开更多选项 | boolean   | false                                     |

### SearchBar 搜索框

#### 属性

| 属性名                    | 说明                                                       | 类型                                                      | 默认值                                                 |
|------------------------|----------------------------------------------------------|---------------------------------------------------------|-----------------------------------------------------|
| searchText             | 搜索按钮的文案                                                  | string                                                  | '搜索'                                                |
| clearOnCancel          | 点击取消按钮后是否清空输入框                                           | boolean                                                 | true                                                |
| clearable              | 是否启用清除图标，点击清除图标后会清空输入框                                   | boolean                                                 | true                                                |
| icon                   | 图标                                                       | ReactNode                                               | Icon type="searchOutline" className="adm-component" |
| maxLength              | 输入的最大字符数                                                 | number                                                  | -                                                   |
| onBlur                 | 输入框失去焦点时触发                                               | (e: React.FocusEvent) => void                           | -                                                   |
| onChange               | 输入框内容变化时触发                                               | (value: string) => void                                 | -                                                   |
| onClear                | 点击清除按钮后触发                                                | () => void                                              | -                                                   |
| onFocus                | 输入框获得焦点时触发                                               | (e: React.FocusEvent) => void                           | -                                                   |
| onSearch               | 输入框回车时触发或点击搜索按钮时触发                                       | (value: string) => void                                 | -                                                   |
| onlyShowClearWhenFocus | 如果 true，那么只有输入框聚焦时才会显示清除按钮；如果为 false，那么输入框失去焦点后依旧会显示清除按钮 | boolean                                                 | false                                               |
| placeholder            | 提示文本                                                     | string                                                  | -                                                   |
| showSearchButton       | 是否在搜索框右侧显示搜索按钮                                           | boolean \| ((focus: boolean, value: string) => boolean) | false                                               |
| value                  | 输入值                                                      | string                                                  | -                                                   |

#### CSS 变量

| 属性名                 | 说明               | 默认值                   |
|---------------------|------------------|-----------------------|
| --background        | 背景色              | #f5f5f5               |
| --border-radius     | 圆角               | 12px                  |
| --height            | 高度               | 64px                  |
| --padding-left      | 搜索框的左侧 padding   | 16x                   |
| --placeholder-color | placeholder 文字颜色 | var(--adm-color-weak) |

#### Ref

同Input。

### Selector 选择组

#### 属性

| 属性名           | 说明                         | 类型                                                                    | 默认值   |
|---------------|----------------------------|-----------------------------------------------------------------------|-------|
| columns       | 列数（注意 grid 布局在 IOS 9 下不支持） | number                                                                | -     |
| defaultValue  | 默认项                        | SelectorValue[]                                                       | []    |
| disabled      | 是否全部禁止选中                   | boolean                                                               | false |
| multiple      | 是否允许多选                     | boolean                                                               | false |
| onChange      | 选项改变时触发                    | (value: SelectorValue[], extend: { items: SelectorOption[] }) => void | -     |
| options       | 可选项                        | SelectorOption[]                                                      | -     |
| showCheckMark | 是否显示对勾角标                   | boolean                                                               | true  |
| value         | 选中项                        | SelectorValue[]                                                       | -     |

#### CSS 变量

| 属性名                  | 说明                          | 默认值                      |
|----------------------|-----------------------------|--------------------------|
| --border             | 边框样式                        | none                     |
| --border-radius      | 选项的圆角 	                     | 4px                      |
| --checked-border     | 选中时的边框样式                    | none                     |
| --checked-color      | 选中时的背景色                     | #e7f1ff                  |
| --checked-text-color | 选中时的文字颜色                    | var(--adm-color-primary) |
| --color              | 背景色                         | #f5f5f5                  |
| --padding            | 选项的 padding                 | 16px 32px                |
| --text-color         | 文字颜色                        | var(--adm-color-text)    |
| --gap                | 间距大小，仅在 columns 存在时生效       | 16px                     |
| --gap-horizontal     | 水平方向的间距大小，，仅在 columns 存在时生效 | var(--gap)               |
| --gap-vertical       | 垂直方向的间距大小，仅在 columns 存在时生效  | var(--gap)               |

#### 类型定义

#### SelectorValue

```md
type SelectorValue = string | number
```

#### 属性

| 属性名         | 说明   | 类型            | 默认值   |
|-------------|------|---------------|-------|
| description | 描述   | ReactNode     | -     |
| disabled    | 是否禁用 | boolean       | false |
| label       | 文字   | ReactNode     | -     |
| value       | 选项的值 | SelectorValue | -     |

#### 泛型

`Selector` 支持泛型，你可以通过下面的这种方式手动控制 `value` `onChange` 等属性的类型：

```jsx
<Selector
  options={options}
  defaultValue={['a']}
  onChange={arr => console.log(arr)}
/>
```

### Slider 滑动输入条

#### 属性

| 属性名             | 说明                            | 类型                                       | 默认值       |
|-----------------|-------------------------------|------------------------------------------|-----------|
| min             | 最小值                           | number                                   | 0         |
| max             | 最大值                           | number                                   | 100       |
| step            | 步长，取值必须大于 0，并且可被(max - min)整除 | number                                   | 1         |
| disabled        | 是否禁用                          | boolean                                  | false     |
| value           | 当前取值                          | number                                   | 0         |
| color           | 背景条的颜色（请使用 backgroundColor）   | string                                   | "#e9e9e9" |
| selectedColor   | 已选择的颜色（请使用 activeColor）       | string                                   | "#1aad19" |
| activeColor     | 已选择的颜色                        | string                                   | "#1aad19" |
| backgroundColor | 背景条的颜色                        | string                                   | "#1aad19" |
| blockSize       | 滑块的大小，取值范围为 12 - 28           | number                                   | 28        |
| blockColor      | 滑块的颜色                         | string                                   | "#ffffff" |
| showValue       | 是否显示当前 value                  | boolean                                  | false     |
| onChange        | 完成一次拖动后触发的事件                  | aseEventOrigFunction:onChangeEventDetail | -         |
| onChanging      | 拖动过程中触发的事件                    | aseEventOrigFunction:onChangeEventDetail | -         |

### Space 间距

#### 属性

| 属性名       | 说明                       | 类型                                                                             | 默认值          |
|-----------|--------------------------|--------------------------------------------------------------------------------|--------------|
| align     | 交叉轴对齐方式                  | 'start' \| 'end' \| 'center' \| 'baseline'                                     | -            |
| block     | 是否渲染为块级元素                | boolean                                                                        | false        |
| direction | 间距方向                     | 'vertical' \| 'horizontal'                                                     | 'horizontal' |
| justify   | 主轴对齐方式                   | 'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly' \| 'stretch' | -            |
| onClick   | 点击事件                     | (event: React.MouseEvent) => void                                              | -            |
| wrap      | 是否自动换行，仅在 horizontal 时有效 | boolean                                                                        | false        |

#### CSS 变量

| 属性名              | 说明          | 默认值        |
|------------------|-------------|------------|
| --gap            | 间距大小        | 16px       |
| --gap-horizontal | 水平方向的间距大小 	 | var(--gap) |
| --gap-vertical   | 垂直方向的间距大小 	 | var(--gap) |

### Steps 步骤条

#### 属性

| 属性名       | 说明                                             | 类型                         | 默认值          |
|-----------|------------------------------------------------|----------------------------|--------------|
| current   | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态 | number                     | 0            |
| direction | 指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向    | 'horizontal' \| 'vertical' | 'horizontal' |
| items     | 参数项                                            | StepsItem[]                | []           |

#### CSS 变量

| 属性名                      | 说明                    | 默认值  |
|--------------------------|-----------------------|------|
| --description-font-size  | 描述的字号                 | 24px |
| --icon-size              | 指示器上图标的大小 	           | 36px |
| --indicator-margin-right | 左边的指示器和右边的文字内容之间的额外间距 | 0    |
| --title-font-size        | 标题的字号                 | 26px |

#### StepsItem

| 属性名         | 说明         | 类型        | 默认值 |
|-------------|------------|-----------|-----|
| description | 步骤的详情描述，可选 | ReactNode | -   |
| title       | 标题         | ReactNode | -   |

### Switch 开关

#### 属性

| 属性名      | 说明                      | 类型                                        | 默认值      |
|----------|-------------------------|-------------------------------------------|----------|
| checked  | 是否选中                    | boolean                                   | false    |
| disabled | 是否禁用                    | boolean                                   | false    |
| type     | 样式，有效值：switch, checkbox | "switch" \| "checkbox"                    | "switch" |
| value    | checked 改变时触发 change 事件 | BaseEventOrigFunction:onChangeEventDetail | -        |

#### onChangeEventDetail

| 属性名   | 类型      |
|-------|---------|
| value | boolean |

### TabBar 标签栏

#### 属性

| 属性名              | 说明                                | 类型                    | 默认值                   |
|------------------|-----------------------------------|-----------------------|-----------------------|
| activeKey        | 当前激活 item 的 key                   | string \| null        | -                     |
| defaultActiveKey | 初始化选中 item 的 key，如果没有设置 activeKey | string \| null        | 第一个 TabBar.Item 的 key |
| onChange         | 切换面板的回调                           | (key: string) => void | -                     |
| safeArea         | 是否开启安全区适配                         | boolean               | false                 |
| items            | 参数项                               | TabBarItem[]          | []                    |

#### TabBarItem

| 属性名   | 说明                      | 类型                                            | 默认值 |
|-------|-------------------------|-----------------------------------------------|-----|
| badge | 徽标，同 Badge 的 content 属性 | React.ReactNode \| typeof Badge.dot           | -   |
| icon  | 图标                      | ReactNode \| ((active: boolean) => ReactNode) | -   |
| key   | 对应 activeKey            | string                                        | -   |
| title | 标题                      | ReactNode \| ((active: boolean) => ReactNode) | -   |

#### CSS 变量

| 属性名                   | 说明    | 默认值 |
|-----------------------|-------|-----|
| --tab-bar-padding-top | 距顶部间距 | 0   |

### Tabs 标签页

#### 属性

| 属性名              | 说明                            | 类型                    | 默认值        |
|------------------|-------------------------------|-----------------------|------------|
| activeKey        | 当前激活 tab 面板的 key              | string \| null        | -          |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string \| null        | 第一个面板的 key |
| onChange         | 切换面板的回调                       | (key: string) => void | -          |
| stretch          | 选项卡头部是否拉伸                     | boolean               | true       |
| swiperOpen       | 选项卡面板内容是否可滑动                  | boolean               | false      |
| showMore         | 选项卡是否展示更多按钮                   | boolean               | false      |
| items            | 标签项                           | TabsItem[]            | []         |

#### TabsItem

| 属性名      | 说明                      | 类型                  | 默认值   |
|----------|-------------------------|---------------------|-------|
| key      | 选项卡面板的唯一标识，对应 activeKey | string              | -     |
| title    | 选项卡头显示文字                | string \| ReactNode | -     |
| disabled | 是否禁用                    | boolean             | false |
| children | 选项卡面板内容                 | string \| ReactNode | -     |

#### CSS 变量

| 属性名                         | 说明               | 默认值                       |
|-----------------------------|------------------|---------------------------|
| --active-line-border-radius | 当前激活 tab 下划线的圆角  | var(--active-line-height) |
| --active-line-color         | 当前激活 tab 下划线的颜色  | var(--adm-color-primary)  |
| --active-line-height        | 当前激活 tab 下划线的高度  | 4px                       |
| --active-title-color        | 当前激活 tab 选项文字颜色  | var(--adm-color-primary)  |
| --content-padding           | tab 内容区的 padding | 24px                      |
| --title-font-size           | 选项卡头文字的大小        | 34px                      |

### Tabs.Header

#### 属性 extend TabsItem

| 属性名              | 说明                            | 类型                    | 默认值        |
|------------------|-------------------------------|-----------------------|------------|
| activeKey        | 当前激活 tab 面板的 key              | string \| null        | -          |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string \| null        | 第一个面板的 key |
| onChange         | 切换面板的回调                       | (key: string) => void | -          |
| stretch          | 选项卡头部是否拉伸                     | boolean               | false      |
| showMore         | 选项卡是否展示更多按钮                   | boolean               | false      |

### Tag 标签

#### 属性

| 属性名     | 说明     | 类型                                                                     | 默认值       |
|---------|--------|------------------------------------------------------------------------|-----------|
| color   | 标签色    | 'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| string | 'default' |
| fill    | 填充模式   | 'solid' \| 'outline'                                                   | 'solid'   |
| onClick | 标签点击事件 | (event: React.MouseEvent) => void                                      | -         |
| round   | 是否圆角   | boolean                                                                | false     |

#### CSS 变量

| 属性名                | 说明                 | 默认值                                                              | 全局变量                    |
|--------------------|--------------------|------------------------------------------------------------------|-------------------------|
| --background-color | 背景颜色               | 当 fill=solid 时，默认值为 color 属性对应的颜色；当 fill=outline 时，默认值为 #ffffff  | -                       |
| --border-color     | 边框颜色               | color 属性对应的颜色                                                    | -                       |
| --border-radius    | round=false 时的圆角大小 | 4px                                                              | --adm-tag-border-radius |
| --text-color       | 文字颜色               | 当 fill=solid 时，默认值为 #ffffff；当 fill=outline 时，默认值为 color 属性对应的颜色	 | -                       |

#### TextArea 多行输入框

#### 属性

| 属性名                    | 说明                                                                                               | 类型                                                      | 默认值                    |
|------------------------|--------------------------------------------------------------------------------------------------|---------------------------------------------------------|------------------------|
| value                  | 输入框的内容                                                                                           | string                                                  | -                      |
| placeholder            | 输入框为空时占位符                                                                                        | string                                                  | -                      |
| placeholderStyle       | 指定 placeholder 的样式                                                                               | string                                                  | -                      |
| placeholderClass       | 指定 placeholder 的样式类                                                                              | string                                                  | "textarea-placeholder" |
| disabled               | 是否禁用                                                                                             | boolean                                                 | false                  |
| maxLength              | 最大输入长度，设置为 -1 的时候不限制最大长度                                                                         | number                                                  | 140                    |
| autoFocus              | 自动聚焦，拉起键盘                                                                                        | boolean                                                 | false                  |
| focus                  | 获取焦点                                                                                             | boolean                                                 | false                  |
| autoHeight             | 是否自动增高，设置 autoHeight 时，style.height不生效                                                           | boolean                                                 | false                  |
| fixed                  | 如果 Textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true                                        | boolean                                                 | false                  |
| cursorSpacing          | 指定光标与键盘的距离，单位 px 。取 Textarea 距离底部的距离和 cursorSpacing 指定的距离的最小值作为光标与键盘的距离                          | number                                                  | 0                      |
| cursor                 | 指定 focus 时的光标位置                                                                                  | number                                                  | 1                      |
| showConfirmBar         | 是否显示键盘上方带有”完成“按钮那一栏                                                                              | boolean                                                 | true                   |
| selectionStart         | 光标起始位置，自动聚集时有效，需与 selectionEnd 搭配使用                                                              | number                                                  | -1                     |
| selectionEnd           | 光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用                                                            | number                                                  | -1                     |
| adjustPosition         | 键盘弹起时，是否自动上推页面                                                                                   | boolean                                                 | true                   |
| holdKeyboard           | focus 时，点击页面的时候不收起键盘                                                                             | boolean                                                 | false                  |
| disableDefaultPadding  | 是否去掉 iOS 下的默认内边距                                                                                 | boolean                                                 | false                  |
| onFocus                | 输入框聚焦时触发                                                                                         | BaseEventOrigFunction:onFocusEventDetail                | -                      |
| onBlur                 | 输入框失去焦点时触发                                                                                       | BaseEventOrigFunction:onBlurEventDetail                 | -                      |
| onLineChange           | 输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}                                | BaseEventOrigFunction:onLineChangeEventDetail           | -                      |
| onInput                | 当键盘输入时，触发 input 事件，event.detail = {value, cursor, keyCode} **onInput 处理函数的返回值并不会反映到 textarea 上** | BaseEventOrigFunction:onInputEventDetail                | -                      |
| onConfirm              | 点击完成时， 触发 confirm 事件，event.detail = {value: value}                                               | BaseEventOrigFunction:onConfirmEventDetail              | -                      |
| onKeyboardHeightChange | 键盘高度发生变化的时候触发此事件                                                                                 | BaseEventOrigFunction:onKeyboardHeightChangeEventDetail | -                      |

#### onFocusEventDetail

| 属性名    | 类型     | 说明   |
|--------|--------|------|
| value  | string | 输入值  |
| height | number | 键盘高度 |

#### onBlurEventDetail

| 属性名    | 类型     | 说明   |
|--------|--------|------|
| value  | string | 输入值  |
| cursor | number | 光标位置 |

#### onLineChangeEventDetail

| 属性名       | 类型     |
|-----------|--------|
| height    | string |
| heightRpx | number |
| lineCount | number |

#### onInputEventDetail

| 属性名     | 类型     | 说明   |
|---------|--------|------|
| value   | string | 输入值  |
| cursor  | number | 光标位置 |
| keyCode | number | 键值   |

#### onConfirmEventDetail

| 属性名   | 类型     | 说明  |
|-------|--------|-----|
| value | string | 输入值 |

#### onKeyboardHeightChangeEventDetail

| 属性名      | 类型     | 说明   |
|----------|--------|------|
| height   | number | 键盘高度 |
| duration | number | 持续时间 |
