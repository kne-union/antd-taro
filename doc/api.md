### Avatar

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

### Badge

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

### Button

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
