# 通讯录样式的边栏字母导航

## 简介
创建一个通讯录边栏样式的字母导航

![导航](https://github.com/coolzjy/alphabet-sidenav/raw/gh-pages/contacts.jpg)

## DEMO
请扫描二维码在移动设备上查看

![DEMO](http://zjy.name/lab/alphabet-nav/code.png)

## 使用
#### 1.模块化调用
使用 browserify 或 seajs 等模块加载器，引入alphabetnav

```javascript
var alphabetNav = require('alphabetnav');
alphabetNav.init("attrName");
```

#### 2.使用`script`标签全局引用

```html
<script type="text/javascript" src="script/alphabetNav.js"></script>
<script type="text/javascript">
	alphabetNav.init("attrName");
</script>
```

#### 3.方法调用1(推荐)

```javascript
alphabetNav.init("attrName",{options})
```

其中，attrName 为属性名，options 为配置项。元素属性名的对应属性值将作为导航显示内容。该调用方式下 URL Hash 跳转特性不可用。

DEMO:
```html
<section nav="A">
<section nav="B">
……
<section nav="Z">

<script type="text/javascript">
alphabetNav.init("nav");
</script>
```

#### 3.方法调用2

```javascript
alphabetNav.init([navItem],{options})
```

其中，navItem 为对象数组，对象包括 display 和 id 两个属性，display 为导航显示名称，id 为对应页面锚点名称。

DEMO:
```html
<section id="a">
<section id="b">
<section id="c">

<script type="text/javascript">
alphabetNav.init([
		{display:"A", id:"a"},
		{display:"B", id:"b"},
		{display:"C", id:"c"}
		]);
</script>
```

### 配置项
options 可选配置包括：
+ top：数字或字符串，设置边栏的 top 属性。
+ bottom：数字或字符串，设置边栏的 bottom 属性，top 和 bottom 均没有配置时，slideNav 将居中显示。
+ showIndicator：布尔型，默认值 true，设置是否显示字母指示器。
+ useHash：布尔型，默认值 false，是否使用 URLHash 进行跳转。注意使用 URLHash 进行跳转时，只在 URLHash 改变时跳转才会发生，**这将导致某些情况下不能跳转到正确位置**。