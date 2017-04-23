$(document).ready(function(){
	var isClick=true;
	var isClick2=false;
	/*事件处理逻辑：
	设置标志位表示是否被点击，tab1点击 背景色设为，#ff5000，字体颜色：#fff 同时设置 isclick=true，将第二个button的标志设为false  鼠标移开判断是否点击 再点击状态的button不响应此事件，鼠标移入判断当前button没有被点击，另外一个button被点击 设置背景色#f9e6e6
	另外一个button同样作此判断
	*/

	// 设置第一个button的响应事件
 $('#tab_1').mouseover(function(){
	 	if(isClick2&&!isClick){
	 		$("#tab_1").css('background-color','#f9e6e6')
	 	}	
  	})
  $('#tab_1').mouseleave(function(){
  	if(!isClick){
	$("#tab_1").css({'color':'#ff5000','background-color':'#fff'})
  	}
 	})
 $('#tab_1').click(function(){
 		$("#tab_1").css({'color':'#fff','background-color':'#ff5000'});
 		$("#tab_2").css({'color':'#ff5000','background-color':'#fff'});
 		isClick=true;
 		isClick2=false;
 	})

 $('#tab_2').mouseover(function(){
 		if(isClick&&!isClick2){
	 		$("#tab_2").css('background-color','#f9e6e6')
	 	}
 	})
  $('#tab_2').mouseleave(function(){
  	if(!isClick2){
 		$("#tab_2").css({'color':'#ff5000','background-color':'#fff'})
 	}
 	})
 $('#tab_2').click(function(){
 		isClick2=true;
 		isClick=false;
 		$("#tab_2").css({'color':'#fff','background-color':'#ff5000'})
 		$("#tab_1").css({'color':'#ff5000','background-color':'#fff'})
  	
 	})
 
});