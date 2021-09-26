# 前端CSS规范

### 命名

* 命令规则: block-desc-modifier

  • block
  ```
  页面上逻辑和功能独立的，可复用的组件，可以嵌套并相互交互，但在语义上它们保持平等，可以存在页面上不同的位置或不同项目中，保持样式不变。
  ```
  • desc
  ```
  组成块的一部分，内部的任何元素都与块有关联，不能在块的外部使用。
  ```
  • modifier
  ```
  用来表示块或者元素的状态，外观或者行为，不必须，可以选择使用。
  ```
  • 常用CSS class名
    ```
      包裹类： container, wrapper, outer, inner, box, header, footer, main, content, aside, page, section, block
      状态类： primary, secondary, success, danger, warning, info, error, Link, light, dark, disabled, active, checked, loading
      尺寸类： large, middle, small, bigger, smaller
      组件类： card, list, picture, carousel, swiper, menu, navs, badge, hint, modal, dialog
      位置类： first, last, current, prev, next, forward, back
      文本类： title, desc, content, date, author, category，label，tag
      人物类： avatar, name, age, post, intro
    ```
* 类名使用小写字母，以中划线分隔
* id采用驼峰式命名
* scss/less中的变量、函数、混合、placeholder采用驼峰式命名

### 分号

* 每个属性声明末尾都要加分号。

### 缩进

* Tab （4个空格）

### 注释

注释统一用'/* */'（scss/less中也不要用'//'）

```less
/* Modal header */
.modal-header {
...
}

/*
 * Modal header
 */
.modal-header {
...
}
```

### 引号

* 最外层统一使用双引号；
* url的内容要用引号；
* 属性选择器中的属性值需要引号。

```less
.element:after {
  content: "";
  background-image: url("logo.png");
}

li[data-type="single"] {
...
}
```
