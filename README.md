# ͨѶ¼��ʽ�ı�����ĸ����

## ���
����һ��ͨѶ¼������ʽ����ĸ����

![����](https://github.com/coolzjy/alphabet-sidenav/raw/master/contacts.jpg)

## DEMO
��ɨ���ά�����ƶ��豸�ϲ鿴

![DEMO](http://zjy.name/lab/alphabet-nav/code.png)

## ʹ��
���� alphabetNav.css �� alphabetNav.js

```javascript
alphabetNav([navItem],{options})
```

���У�navItem Ϊ�������飬������� display �� id �������ԣ�display Ϊ������ʾ���ƣ�id Ϊ��Ӧҳ��ê������

options 可选配置包括 top：数字或字符串，设置边栏的 top 属性；bottom：数字或字符串，设置边栏的 bottom 属性；showIndicator：布尔型，默认值 true，设置是否显示字母指示器；useHash：布尔型，默认值 false，是否使用 URLHash 进行跳转

```javascript
alphabetNav([{display:"A", id:"a"},
              {display:"B", id:"b"},
              {display:"C", id:"c"},
              {display:"D", id:"d"},
              {display:"E", id:"e"},
              {display:"F", id:"f"}],
			{top:20, showIndicator:true})
```