# ͨѶ¼��ʽ�ı�����ĸ����

## ���
����һ��ͨѶ¼������ʽ����ĸ����

![导航](https://github.com/coolzjy/alphabet-sidenav/raw/gh-pages/contacts.jpg)

## DEMO
��ɨ���ά�����ƶ��豸�ϲ鿴

![DEMO](http://zjy.name/lab/alphabet-nav/code.png)

## ʹ��
���� alphabetNav.css �� alphabetNav.js

### 调用方式 1（推荐）

```javascript
alphabetNav("attrName",{options})
```

其中，attrName 为属性名，options 为配置项。元素属性名的对应属性值将作为导航显示内容。该调用方式下 URL Hash 跳转特性不可用。

DEMO:
```html
<section nav="A">
<section nav="B">
……
<section nav="Z">

<script type="text/javascript">
alphabet("nav");
</script>
```

### 调用方式 2

```javascript
alphabetNav([navItem],{options})
```

其中，navItem 为对象数组，对象包括 display 和 id 两个属性，display 为导航显示名称，id 为对应页面锚点名称。

DEMO:
```html
<section id="a">
<section id="b">
<section id="c">

<script type="text/javascript">
alphabet([
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
+ useHash：布尔型，默认值 false，是否使用 URLHash 进行跳转。注意使用 URLHash 进行跳转时，只在 URLHash 改变时跳转才会发生，这将导致某些情况下不能跳转到正确位置。