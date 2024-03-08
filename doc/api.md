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

## Card 卡片

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

## CheckList 可勾选列表

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

## Collapse 折叠面板

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

## DatePicker日期选择器

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

## DateRangePicker 日期范围选择器

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

## DotLoading 点状加载图标

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

## Dropdown 下拉菜单

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
