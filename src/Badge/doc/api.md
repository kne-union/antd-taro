## Badge
#### 属性

|属性名| 说明    | 类型                                   | 默认值   |
|  ---  |-------|--------------------------------------|-------|
|  bordered  | 是否增加描边 | boolean                              | false |
|  color  | 徽标背景色，等效于设置 --color CSS 变量 | string                               | -     |
|  content  | 徽标内容：如果传 null undefined '' 或不传，则不显示徽标；如果传 Badge.dot，会显示小红点 | React.ReactNode  \| typeof Badge.dot | -     |
|  wrapperClassName  | Badge wrap 自定义类名 | string | -     |
|  wrapperStyle  | Badge wrap 自定义样式 | React.CSSProperties | -     |

#### CSS 变量

|属性名|说明| 默认值     | 全局变量                       |
|  ---  | ---  |---------|----------------------------|
|  --color  | 徽标背景色  | #ff411c | --adm-badge-color |
|  --right  | 相对于最右边，向左的偏移量  | 0       | - |
|  --top  | 相对于最上边，向下的偏移量  | 0       | - |
