var c = new jCaches(20,true);
var cacheId = "mydata-1";
c.clear();
var dataList = {};

window.onload = function(){
	var $panelResult = $("#panelResult");
	$panelResult.html("");
	var $lblMsg = $("#lblMsg");
	$("#btnLoad").click(function(){	
	
		if(c.exist(cacheId)){
			result = c.get(cacheId);	
			$lblMsg.html("已从缓存中读出数据。");	

			showResult();			
		}
		else{
			$.ajax({
				url:"data.html",
				type : "get",
				dataType:"json",
				success: function(result){
					dataList = result;
					c.add(cacheId,dataList);
					
					$lblMsg.html("已通过Ajax读到数据。");
					
					showResult();
				}
			});
		}
		
	});
		
	
}

function showResult(){
	var $panelResult = $("#panelResult");
	$panelResult.html("");
	for(var i = 0; i<dataList.length;i++){
		var li = document.createElement("li");
		var $li = $(li);
		$li.html(dataList[i].value);
		$li.attr("title","id = " + dataList[i].id);
		$panelResult.append($(li));
	}
}