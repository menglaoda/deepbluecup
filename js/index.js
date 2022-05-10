document.addEventListener("DOMContentLoaded",function(){
	var header2hd = document.querySelector(".header2-hd");//返回第一个元素
	var header2nav = document.querySelector(".header2-nav");
	var oa = header2nav.querySelectorAll("a");//返回数组
	var header4 = document.querySelector(".header4");
	var header4oa = header4.querySelectorAll("a");
	var serve = document.querySelector(".serve");
	var barAll = document.querySelectorAll(".bar");
	var topbtn = document.querySelector(".top-btn");
	var serveli = serve.querySelectorAll("li");
	var group = document.querySelector(".group");
	var groupli = group.querySelectorAll("li");
	console.log(barAll.length)
	//导航栏展开收起
	header2hd.onclick = function(){
		if(header2hd.innerHTML=="首页"){
			header2hd.innerHTML = "关闭";
			header2nav.style.display="block";
		}else{
			header2hd.innerHTML = "首页";
			header2nav.style.display="none";
		}
	}
	for(var i=0;i<oa.length;i++){
		oa[i].onclick = function(){
			header2hd.innerHTML = "首页";
			header2nav.style.display="none";
		}
	}
	
	var arr = [];
	var t0 =document.body.scrollTop||document.documentElement.scrollTop;
	//滚动事件
	window.onscroll = function(){
		//顶部悬浮功能
		t0 = document.body.scrollTop||document.documentElement.scrollTop;//获取滚动条距离顶部的距离,兼容写法
		if(t0>=200){
			header4.style.transition="all 1s";
			header4.style.top = 0+"px";
		}else{
			header4.style.transition="none";
			header4.style.top = -64+"px";
		}
		
		//滚动监听
		arr.length=0;
		var winh = window.innerHeight;//浏览器高度
		for(var k=0;k<barAll.length;k++){
			var n1 = barAll[k].offsetTop-t0;//获取盒子相对可视区顶部的位置
			arr.push(n1);
		}
		for(var k=0;k<arr.length;k++){
			if(arr[k]<=winh/2){
				for(var j=0;j<header4oa.length;j++){
					header4oa[j].style.color="black";
				}
				header4oa[k+1].style.color="red";
			}
		}
		
		//返回顶部按钮出现
		if(t0>=1000){
			topbtn.style.display = "block";
		}else{
			topbtn.style.display = "none";
		}
		
		//滚到一定位置后内容才出现
		if(winh-arr[0]>=200){
			barAll[0].className="serve bar active";
			for(var k=0;k<serveli.length;k++){
				serveli[k].style.transitionDelay = k*0.25+"s";
			}
		}
		//滚到一定位置后内容才出现
		if(winh-arr[4]>=200){
			barAll[4].className="group bar active";
			for(var k=0;k<serveli.length;k++){
				groupli[k].style.transitionDelay = k*0.25+"s";
			}
		}
	}
	
	//返回顶部功能
	topbtn.onclick = function(){
		//匀速运动返回顶部
		var mytime = setInterval(function(){
			t0-=100;
			if(t0<=0){
				t0=0;
				clearInterval(mytime);
			}
			document.body.scrollTop=document.documentElement.scrollTop=t0;
		},50)
	}
})