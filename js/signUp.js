document.addEventListener("DOMContentLoaded",function(){
	var loginbtn = document.querySelector(".login-btn");
	var userName = document.querySelector(".userName");
	var userPsw = document.querySelector(".userPsw");
	var userPsw2 = document.querySelector(".userPsw2");
	var oimg = document.querySelectorAll("img");
	var re = /^[a-zA-Z][a-zA-Z0-9]{5,19}$/;
	var re2 = /^[a-zA-Z0-9]{6,20}$/;
	//给提交按钮绑定点击事件
	loginbtn.onclick = function(){
		console.log(re.test(userName.value));
		//用户名
		if(re.test(userName.value) == false){
			userName.style.border ="solid 1px red";
			oimg[0].style.display = "block";
		}
		//密码，两次密码一致
		if(userPsw.value!=userPsw2.value || re2.test(userPsw.value)==false){
			userPsw.style.border="solid 1px red";
			userPsw2.style.border="solid 1px red";
			oimg[1].style.display = "block";
			oimg[2].style.display = "block";
		}
		if(re.test(userName.value) == true && userPsw.value==userPsw2.value && re2.test(userPsw.value)==true){
			
		}else{
			return false;
		}
		
	}
	//获得焦点事件
	userName.onfocus = function(){
		userName.style.border ="solid 1px #ccc";
		oimg[0].style.display = "none";
	}
	function fn(){
		userPsw.style.border="solid 1px #ccc";
		userPsw2.style.border="solid 1px #ccc";
		oimg[1].style.display = "none";
		oimg[2].style.display = "none";
	}
	userPsw.onfocus = function(){
		fn();
	}
	userPsw2.onfocus = function(){
		fn();
	}
})