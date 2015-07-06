# Í¨Ñ¶Â¼ÑùÊ½µÄ±ßÀ¸×ÖÄ¸µ¼º½

## ¼ò½é
´´½¨Ò»¸öÍ¨Ñ¶Â¼±ßÀ¸ÑùÊ½µÄ×ÖÄ¸µ¼º½

![å¯¼èˆª](https://github.com/coolzjy/alphabet-sidenav/raw/gh-pages/contacts.jpg)

## DEMO
ÇëÉ¨Ãè¶şÎ¬ÂëÔÚÒÆ¶¯Éè±¸ÉÏ²é¿´

![DEMO](http://zjy.name/lab/alphabet-nav/code.png)

## Ê¹ÓÃ
µ¼Èë alphabetNav.css ºÍ alphabetNav.js

```javascript
alphabetNav([navItem],{options})
```

ÆäÖĞ£¬navItem Îª¶ÔÏóÊı×é£¬¶ÔÏó°üÀ¨ display ºÍ id Á½¸öÊôĞÔ£¬display Îªµ¼º½ÏÔÊ¾Ãû³Æ£¬id Îª¶ÔÓ¦Ò³ÃæÃªµãÃû³Æ

options å¯é€‰é…ç½®åŒ…æ‹¬ï¼š
+ topï¼šæ•°å­—æˆ–å­—ç¬¦ä¸²ï¼Œè®¾ç½®è¾¹æ çš„ top å±æ€§ã€‚
+ bottomï¼šæ•°å­—æˆ–å­—ç¬¦ä¸²ï¼Œè®¾ç½®è¾¹æ çš„ bottom å±æ€§ï¼Œtop å’Œ bottom å‡æ²¡æœ‰é…ç½®æ—¶ï¼ŒslideNav å°†å±…ä¸­æ˜¾ç¤ºã€‚
+ showIndicatorï¼šå¸ƒå°”å‹ï¼Œé»˜è®¤å€¼ trueï¼Œè®¾ç½®æ˜¯å¦æ˜¾ç¤ºå­—æ¯æŒ‡ç¤ºå™¨ã€‚
+ useHashï¼šå¸ƒå°”å‹ï¼Œé»˜è®¤å€¼ falseï¼Œæ˜¯å¦ä½¿ç”¨ URLHash è¿›è¡Œè·³è½¬ã€‚æ³¨æ„ä½¿ç”¨ URLHash è¿›è¡Œè·³è½¬æ—¶ï¼Œåªåœ¨ URLHash æ”¹å˜æ—¶è·³è½¬æ‰ä¼šå‘ç”Ÿï¼Œè¿™å°†å¯¼è‡´æŸäº›æƒ…å†µä¸‹ä¸èƒ½è·³è½¬åˆ°æ­£ç¡®ä½ç½®ã€‚

```javascript
alphabetNav([{display:"A", id:"a"},
              {display:"B", id:"b"},
              {display:"C", id:"c"},
              {display:"D", id:"d"},
              {display:"E", id:"e"},
              {display:"F", id:"f"}],
			{top:20, showIndicator:true})
```