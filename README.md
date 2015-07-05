# Í¨Ñ¶Â¼ÑùÊ½µÄ±ßÀ¸×ÖÄ¸µ¼º½

## ¼ò½é
´´½¨Ò»¸öÍ¨Ñ¶Â¼±ßÀ¸ÑùÊ½µÄ×ÖÄ¸µ¼º½

![µ¼º½](https://github.com/coolzjy/alphabet-sidenav/raw/master/contacts.jpg)

## DEMO
ÇëÉ¨Ãè¶şÎ¬ÂëÔÚÒÆ¶¯Éè±¸ÉÏ²é¿´

![DEMO](http://zjy.name/lab/alphabet-nav/code.png)

## Ê¹ÓÃ
µ¼Èë alphabetNav.css ºÍ alphabetNav.js

```javascript
alphabetNav([navItem],{options})
```

ÆäÖĞ£¬navItem Îª¶ÔÏóÊı×é£¬¶ÔÏó°üÀ¨ display ºÍ id Á½¸öÊôĞÔ£¬display Îªµ¼º½ÏÔÊ¾Ãû³Æ£¬id Îª¶ÔÓ¦Ò³ÃæÃªµãÃû³Æ

options å¯é€‰é…ç½®åŒ…æ‹¬ topï¼šæ•°å­—æˆ–å­—ç¬¦ä¸²ï¼Œè®¾ç½®è¾¹æ çš„ top å±æ€§ï¼›bottomï¼šæ•°å­—æˆ–å­—ç¬¦ä¸²ï¼Œè®¾ç½®è¾¹æ çš„ bottom å±æ€§ï¼›showIndicatorï¼šå¸ƒå°”å‹ï¼Œé»˜è®¤å€¼ trueï¼Œè®¾ç½®æ˜¯å¦æ˜¾ç¤ºå­—æ¯æŒ‡ç¤ºå™¨ï¼›useHashï¼šå¸ƒå°”å‹ï¼Œé»˜è®¤å€¼ falseï¼Œæ˜¯å¦ä½¿ç”¨ URLHash è¿›è¡Œè·³è½¬

```javascript
alphabetNav([{display:"A", id:"a"},
              {display:"B", id:"b"},
              {display:"C", id:"c"},
              {display:"D", id:"d"},
              {display:"E", id:"e"},
              {display:"F", id:"f"}],
			{top:20, showIndicator:true})
```