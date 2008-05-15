
window.onload = function(){
	var c = new jCaches(20,true);
	var cacheId = "mydata-1";
	c.clear();
	
	var dataList = {};
	
	$("#btnLoad").click(function(){	
	
		if(c.exist(cacheId)){
			result = c.get(cacheId);		
		}
		else{
			$.ajax({
				url:"data.html",
				type : "get",
				dataType:"json",
				success: function(result){
					alert(result);
					dataList = result;
					c.add(cacheId,dataList);
				}
			});
		}
		
	});
		
	
}