//文档就绪写法
document.addEventListener("DOMContentLoaded",function(){
	var loginbtn = document.querySelector(".login-btn");
	var mycheck = document.querySelector(".mycheck");
	var userName = document.querySelector(".userName");
	var userPsw = document.querySelector(".userPsw");
	var err = document.querySelector(".err");
	if(localStorage.getItem("userNameVal")){
		userName.value = localStorage.getItem("userNameVal");
		userPsw.value = localStorage.getItem("userPswVal");
	}
	loginbtn.onclick = function(){
		//记住用户名和密码
		if(mycheck.checked==true){
			localStorage.setItem("userNameVal",userName.value);
			localStorage.setItem("userPswVal",userPsw.value);
		}else{
			localStorage.removeItem("userNameVal");
			localStorage.removeItem("userPswVal");
		}
		//验证用户名跟密码
		if(userName.value=="zhangsan" && userPsw.value=="12345"){
			
		}else{
			err.style.top = "10px";
			return false;
		}
	}
	userName.onfocus=function(){
		err.style.top = "-30px";
	}
	userPsw.onfocus=function(){
		err.style.top = "-30px";
	}
})