# 通讯录样式的边栏字母导航

## 简介
创建一个通讯录边栏样式的字母导航

![瀵艰埅](https://github.com/coolzjy/alphabet-sidenav/raw/gh-pages/contacts.jpg)

## DEMO
请扫描二维码在移动设备上查看

![DEMO](http://zjy.name/lab/alphabet-nav/code.png)

## 使用
导入 alphabetNav.css 和 alphabetNav.js

```javascript
alphabetNav([navItem],{options})
```

其中，navItem 为对象数组，对象包括 display 和 id 两个属性，display 为导航显示名称，id 为对应页面锚点名称

options 鍙�夐厤缃寘鎷細
+ top锛氭暟瀛楁垨瀛楃涓诧紝璁剧疆杈规爮鐨� top 灞炴�с��
+ bottom锛氭暟瀛楁垨瀛楃涓诧紝璁剧疆杈规爮鐨� bottom 灞炴�э紝top 鍜� bottom 鍧囨病鏈夐厤缃椂锛宻lideNav 灏嗗眳涓樉绀恒��
+ showIndicator锛氬竷灏斿瀷锛岄粯璁ゅ�� true锛岃缃槸鍚︽樉绀哄瓧姣嶆寚绀哄櫒銆�
+ useHash锛氬竷灏斿瀷锛岄粯璁ゅ�� false锛屾槸鍚︿娇鐢� URLHash 杩涜璺宠浆銆傛敞鎰忎娇鐢� URLHash 杩涜璺宠浆鏃讹紝鍙湪 URLHash 鏀瑰彉鏃惰烦杞墠浼氬彂鐢燂紝杩欏皢瀵艰嚧鏌愪簺鎯呭喌涓嬩笉鑳借烦杞埌姝ｇ‘浣嶇疆銆�

```javascript
alphabetNav([{display:"A", id:"a"},
              {display:"B", id:"b"},
              {display:"C", id:"c"},
              {display:"D", id:"d"},
              {display:"E", id:"e"},
              {display:"F", id:"f"}],
			{top:20, showIndicator:true})
```