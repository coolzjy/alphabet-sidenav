(function(d){
	var inited = false, // 是否初始化
		top, bottom, showIndicator = true, useHash = false, // 默认配置
		attrKey;
	
	/**
	 * 初始化方法
	 *
	 * @param {Array|string} 要添加导航的锚点列表，或要匹配的属性名称
	 * @param {Object} 配置选项
	 * 
	 * 配置项：top {int|string}、bottom {int|string}、showIndicator {boolean}、useHash {boolean}
	 *
	 */
	function init(pAnchorList, pOptions){
		var i, list, listUl, listLi, indicator, anchorList;
		
		// 如果已经初始化过，提醒并返回
		if(inited){
			console.log("alphabetList is already inited");
			return;
		}
		
		// 检查参数类型
		if(Object.prototype.toString.call(pAnchorList) !== "[object Array]" &&
				typeof pAnchorList !== "string"){
			throw new TypeError("first parameter of alphabet must be an Array or String");
		}
		if(typeof pOptions !== "undefined" && typeof pOptions !== "object"){
			throw new TypeError("second parameter of alphabet must be an Object");
		}
		
		// 读取配置
		if(typeof pOptions !== "undefined"){
			top = pOptions.top;
			bottom = pOptions.bottom;
			if(typeof pOptions.showIndicator !== "undefined"){
				showIndicator = pOptions.showIndicator;
			}
			if(typeof pOptions.useHash !== "undefined"){
				useHash = pOptions.useHash;
			}
		}
		
		// 新建列表
		list = myCreateElement("nav", "alphabetList")
		d.body.appendChild(list);
		listUl = myCreateElement("ul")
		list.appendChild(listUl);
		
		// 判断调用类型
		if(typeof pAnchorList === "string"){
			useHash = false; // 该调用类型下不允许 URL Hash 跳转
			attrKey = pAnchorList;
			
			// 根据传递的参数选择包含指定属性的元素
			anchorList = d.querySelectorAll("[" + pAnchorList + "]");
			
			// 添加导航项
			for(i = 0; i < anchorList.length; i++){
				listLi = myCreateElement("li", "alphabet", anchorList[i].getAttribute(attrKey));
				listUl.appendChild(listLi);
			}
		}
		else{	
			// 添加导航项
			for(i = 0; i < pAnchorList.length; i++){
				// 检测数组元素类型
				if(typeof pAnchorList[i] !== "object") continue;
				listLi = myCreateElement("li", "alphabet", pAnchorList[i].display);
				listLi.setAttribute("to", pAnchorList[i].id);
				listUl.appendChild(listLi);	
			}
		}
		
		// 处理位置属性
		if(typeof top !== "undefined"){
			if(typeof top === "number"){
				list.style.top = top + "px";
			}
			if(typeof top === "string"){
				list.style.top = top;
			}
		}
		if(typeof bottom !== "undefined"){
			if(typeof bottom === "number"){
				list.style.bottom = bottom + "px";
			}
			if(typeof bottom === "string"){
				list.style.bottom = bottom;
			}
		}
		if(typeof top === "undefined" &&
				typeof bottom === "undefined"){
			list.style.top = "50%";
			list.style.marginTop = "-" + list.clientHeight/2 + "px";
		}
		
		// 新建指示器
		indicator = d.createElement("div");
		indicator.className = "alphabetIndicator";
		d.body.appendChild(indicator);
		
		//绑定事件
		list.addEventListener("touchstart", function(e){
			alphabetMove(e.changedTouches[0].clientY);
		})
		
		list.addEventListener("touchmove",function(e){
			e.preventDefault();
			alphabetMove(e.changedTouches[0].clientY);
		});

		if(showIndicator){
			list.addEventListener("touchend", function(e){
				indicator.style.display = "none";
			});
		}
		
		function alphabetMove (pPositionY){
			var currentItem, targetItem;
			currentItem = d.elementFromPoint(d.body.clientWidth-1, pPositionY);
			if(!currentItem || currentItem.className.indexOf("alphabet") < 0) return;
			
			// 使用 url hash 进行跳转
			if(useHash){
				location.hash = currentItem.getAttribute("to");
			}
			// 不使用 url hash 进行跳转
			else{
				// 属性调用模式
				if(typeof attrKey !== "undefined"){
					targetItem = d.querySelector("[" + attrKey + "='" +
							currentItem.innerText + "']")
				}
				else{
					targetItem = d.getElementById(currentItem.getAttribute("to"));
				}
				if(targetItem){
					d.body.scrollTop += targetItem.getBoundingClientRect().top;
				}
			}
			
			// 显示指示器
			if(showIndicator){
				indicator.innerText = currentItem.innerText;
				indicator.style.display = "block";
			}

		}
		
		// 初始化完毕
		inited = true;
	}
	

	
	function myCreateElement(pTagName, pClassName, pInnerText){
		var newElement = d.createElement(pTagName);
		if(pClassName){
			newElement.className = pClassName;
		}
		if(pInnerText){
			newElement.innerText = pInnerText;
		}
		return newElement;
	}
	
	window.alphabetNav = init;
})(document)