																																															(function(window, undefined){
																																																var doc = window.document
																																																	,undef = 'undefined'
																																																	,bod = 'body'
																																															
																																																	,documentHelper = function(method, node){
																																																		return doc[method](node);
																																																	}
																																															
																																																	,arrow = function(node){
																																																		return new Arrow(node);
																																																	}
																																															
																																																	,Arrow = function(node){
																																																		if(typeof node == undef || node === ''){
																																																			throw('You must define a class, id or a tag');
																																																		}
																																															
																																																		if(typeof node.nodeType != undef){
																																																			this.node = node;
																																															
																																																			return this;
																																																		}
																																															
																																																		if(node === bod && doc.body){
																																																			this.node = documentHelper('getElementsByTagName', bod)[0];
																																															
																																																			return this;
																																																		}
																																															
																																																		if(typeof node !== 'string'){
																																																			this.node = node;
																																																		}else{
																																																			var char = node.charAt(0)
																																																				,element;
																																															
																																																			if(char === '#'){
																																																				element = documentHelper('getElementById', node.substr(1));
																																																			}
																																																			if(char === '.'){
																																																				element = documentHelper('querySelectorAll', node);
																																																			}
																																																			if(typeof element == undef){
																																																				element = documentHelper('getElementsByTagName', node);
																																																			}
																																															
																																																			this.node = element;
																																															
																																																			return this;
																																																		}
																																															
																																																		return this;
																																																	};
																																															
																																																arrow.ar = Arrow.prototype = {
																																																	addClass : function(classname){
																																																		var nodeLength = this.node.length;
																																															
																																																		if(typeof nodeLength != undef && nodeLength > 0){
																																																			for(var i=0; i<nodeLength; i++){
																																																				if(!arrow(this.node[i]).hasClass(classname)){
																																																					this.node[i].classList.add(classname);
																																																				}
																																																			}
																																																		}else{
																																																			if(!arrow(this.node).hasClass(classname)){
																																																				this.node.classList.add(classname);
																																																			}
																																																		}
																																															
																																																		return this;
																																																	}
																																															
																																																	,removeClass : function(classname){
																																																		var nodeLength = this.node.length;
																																															
																																																		if(typeof nodeLength != undef && nodeLength > 0){
																																																			for(var i=nodeLength - 1; i>=0; i--){
																																																				if(arrow(this.node[i]).hasClass(classname)){
																																																					this.node[i].classList.remove(classname);
																																																				}
																																																			}
																																																		}else{
																																																			if(arrow(this.node).hasClass(classname)){
																																																				this.node.classList.remove(classname);
																																																			}
																																																		}
																																															
																																																		return this;
																																																	}
																																															
																																																	,hasClass : function(classname){
																																																		var nodeLength = this.node.length
																																																			,nodeHasClass = false;
																																															
																																																		if(typeof nodeLength != undef && nodeLength > 0){
																																																			for(var i=0; i<nodeLength; i++){
																																																				if(this.node[i].classList.contains(classname) === true){
																																																					nodeHasClass = true;
																																															
																																																					break;
																																																				}
																																																			}
																																																		}else{
																																																			nodeHasClass = this.node.classList.contains(classname);
																																																		}
																																															
																																																		return nodeHasClass;
																																																	}
																																															
																																																	,remove : function(){
																																																		var nodeLength = this.node.length;
																																															
																																																		if(typeof nodeLength != undef && nodeLength > 0){
																																																			for(var i=nodeLength - 1; i>=0; i--){
																																																				this.node[i].parentNode.removeChild(this.node[i]);
																																																			}
																																																		}else{
																																																			this.node.parentNode.removeChild(this.node);
																																																		}
																																															
																																																		return this;
																																																	}
																																															
																																																	,get : function(index){
																																																		var nodeLength = this.node.length;
																																															
																																																		if(typeof nodeLength == undef){
																																																			throw('This method requires a nodeList. Please provide a class or tag.');
																																																		}
																																															
																																																		this.node = this.node[index];
																																															
																																																		if(typeof this.node == undef){
																																																			throw('Element does not exist, please check your index that you provided and children available.');
																																																		}
																																															
																																																		return this;
																																																	}
																																															
																																																	,first : function(){
																																																		var nodeLength = this.node.length;
																																															
																																																		if(typeof nodeLength == undef){
																																																			throw('This method requires a nodeList. Please provide a class or tag.');
																																																		}
																																															
																																																		this.node = this.node[0];
																																															
																																																		return this;
																																																	}
																																															
																																																	,toggleClass : function(classname){
																																																		return this.node.classList.toggle(classname);
																																																	}
																																															
																																																	,data : function(name){
																																																		var nodeLength = this.node.length
																																																			,node = (typeof nodeLength != undef) ? this.node[0] : this.node;
																																															
																																																		return node.getAttribute('data-' + name);
																																																	}
																																																};
																																															
																																																arrow.merge = arrow.ar.merge = function(receiver, supplier) {
																																																	var key
																																																		,value;
																																															
																																																	for(key in supplier){
																																																		if (supplier.hasOwnProperty(key)){
																																																			value = supplier[key];
																																															
																																																			if(typeof value === 'object'){
																																																				var prev = receiver[key];
																																																				(typeof prev === 'object') || (prev = {});
																																															
																																																				value = arrow.merge(prev, value);
																																																			}
																																															
																																																			receiver[key] = value;
																																																		}
																																																	}
																																															
																																																	return receiver;
																																																};
																																															
																																																arrow.device = arrow.ar.device = function(){
																																																	var agent = navigator.userAgent
																																																		,android = /Android/i
																																																		,ipad = /iPad/i
																																																		,iphone = /iPhone/i
																																																		,blackberry = /BB10|BlackBerry|PlayBook/i
																																																		,opera = /Opera Mini/i
																																																		,windows = /Windows Phone|IEMobile/i;
																																															
																																																	if(android.test(agent)){
																																																		return 'android';
																																																	}
																																																	if(ipad.test(agent)){
																																																		return 'ipad';
																																																	}
																																																	if(iphone.test(agent)){
																																																		return 'iphone';
																																																	}
																																																	if(windows.test(agent)){
																																																		return 'windows';
																																																	}
																																																	if(opera.test(agent)){
																																																		return 'opera';
																																																	}
																																																	if(blackberry.test(agent)){
																																																		return 'blackberry';
																																																	}
																																																};
																																															
																																																arrow.browser = arrow.ar.browser = function(){
																																																	var agent = navigator.userAgent
																																																		,ie = /MSIE|Trident/i;
																																															
																																																	if(typeof InstallTrigger !== undef){
																																																		return 'firefox';
																																																	}
																																																	if(!!window.opera || agent.indexOf(' OPR/') >= 0){
																																																		return 'opera';
																																																	}
																																																	if(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')>0){
																																																		return 'safari';
																																																	}
																																																	if(window.chrome){
																																																		return 'chrome';
																																																	}
																																																	if(ie.test(agent)){
																																																		return 'ie';
																																																	}
																																																};
																																															
																																																arrow.getURLParameter = arrow.ar.getURLParameter = function(name){
																																																	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)')
																																																		.exec(location.search)||[,""])[1]
																																																		.replace(/\+/g, '%20'))||null;
																																																};
																																															
																																																arrow.percent = arrow.ar.percent = function(current, total){
																																																	var percent = current / total;
																																															
																																																	if(percent > 1){
																																																		return 1;
																																																	}
																																															
																																																	return percent;
																																																};
																																															
																																																arrow.convertToSeconds =  arrow.ar.convertToSeconds = function(timecode){
																																																	var time = timecode.split(':')
																																																		,hr = parseInt(time[0], 10)*60*60
																																																		,min = parseInt(time[1], 10)*60
																																																		,sec = Number(time[2]);
																																															
																																																	return hr + min + sec;
																																																};
																																															
																																																window.arrow = arrow;
																																															}(window, undefined));
