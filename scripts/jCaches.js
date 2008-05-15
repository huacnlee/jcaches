/**
 * 缓存类
 * 作者：李华顺 2008年5月15日
 * @param {Number} cacheLength 最大限制存几个缓存项
 * @param {Boolean} isDebug 是否开启调试，这项只可以在Firefox下设true
 */
var jCaches = function(cacheLength,isDebug){
		
	cacheData = [{}];
	
	/**
	 * 添加
	 * @param {String} id 标识ID
	 * @param {Object} value 值
	 */
	this.add = function(id, value){

		/* 检查是否存在，有的话就不存 */
		if (this.exist(id)) {
			if (isDebug) {
				console.log("cache existed.");
			}
			return ;
		}

		/* 如果满了，就删除第一个 */
		if(cacheData.length > cacheLength){
			var oldItem = cacheData[0];
			cacheData.shift();
			var newItem = cacheData[0];
			if(isDebug){
				console.log("old first id:" +oldItem.id);
				console.log("new first id:" +newItem.id);
			}
		}
		
		if(isDebug){
			console.log("cache size:" + cacheData.length);
		}		
		
		/* 向缓存数据添加一项 */
		cacheData.push({id:id,value : value});
	}
	
	/**
	 * 根据“标识ID”检查缓存是否存在
	 * @param {String} id 标识ID
	 */
	this.exist = function(id){

		/* 通过循环找ID是否存在 */
		for(var i = 0; i < cacheData.length; i++){
			var item = cacheData[i];
			if(item.id == id){
				if(	isDebug){				
					console.log("found an exist item: " + item.id);
				}
				return true;
			}
		}
		
		return false;
	}
	
	/**
	 * 取缓存
	 * @param {String} id 标识ID
	 */
	this.get = function(id){

		for(var i = 0; i < cacheData.length; i++){
			var item = cacheData[i];
			if(item.id == id){
				return item.value;
			}
		}
		
		return null;
	}
	
	/**
	 * 清空缓存
	 */
	this.clear = function(){
		cacheData =  new Array();
	}

};


