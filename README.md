# 通讯录样式的边栏字母导航

## 简介
创建一个通讯录边栏样式的字母导航

![导航](https://github.com/coolzjy/alphabet-sidenav/raw/master/contacts.jpg)

## DEMO
请扫描二维码在移动设备上查看

![DEMO](http://zjy.name/lab/alphabet-nav/code.png)

## 使用
导入 alphabetNav.css 和 alphabetNav.js

```javascript
alphabetNav([navItem],{options})
```

其中，navItem 为对象数组，对象包括 display 和 id 两个属性，display 为导航显示名称，id 为对应页面锚点名称

options 可选配置包括 top：数字或字符串，设置边栏的 top 属性；bottom：数字或字符串，设置边栏的 bottom 属性；showIndicator：布尔型，设置是否显示字母指示器。

```javascript
alphabetNav([{display:"A", id:"a"},
              {display:"B", id:"b"},
              {display:"C", id:"c"},
              {display:"D", id:"d"},
              {display:"E", id:"e"},
              {display:"F", id:"f"}],
			{top:20, showIndicator:true})
```