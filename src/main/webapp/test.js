test();

// javascript addition method
function add( a, b   ){
	var sum=a+b;
	return sum;
}

function checkUserid(){
	//var customerEnteredUid=document.getElementById("uid").value;
	var customerEnteredUid=$("#uid").val();
	if(customerEnteredUid == "")
		$("#uid").val("please enter userid");
	else if(customerEnteredUid=="john" || customerEnteredUid=="jane"){
		//document.getElementById("errorMsg").style="display:block
		$("#errorMsg").show();
		//document.getElementById("errorMsg").style="color:red";
		$("#errorMsg").css("color","red");
		$("#register").fadeOut(5000);// 1000 milli second = 1 second
	}	
	else{
		//document.getElementById("errorMsg").style="display:none";
		$("#errorMsg").hide();
		$("#register").fadeIn(5000);
	}
	
}


function test(){
	
	var su=add(10,20);
	console.log("sum is:"+su);
	
	
	console.log(" i am printing on client sidde console");
	console.log("testing");
	var result=add(10,20);
	console.log("10 +20 :"+result);
	
	var a = 10;
	a="john";
	var cc='a';
	var b = false;
	var c = "john";
	console.log("in javascript program");
	console.log(c);
	var d = ["john", "jane","mike"];
	console.log( d[1] );
	var e = "hello";
	// javascript object(complex data type)
	var address = {
		city: "newyork", state: "ny", zip: 123, country:"usa"
	};
	/*
		public class Address{
			String city="newyork";
			String state="ny";
			int zip=123;
		}
	*/
	var student = {
		name: "john",
		age: 10,
		address: {
			city: "ny",
			zip: 123
		}
	};
	
	console.log("students zip:"+student.address.zip);
	
	try {
		console.log("in exception handling");
		var i = 0;
		console.log(abcd);
		console.log("1");
	} 
	catch (error){
		console.log("2");
	} 
	finally {
		console.log("3");
	}
	
	for (var j = 0; j < 5; j++) {
		console.log("hi:" + j);
	}

	var i = 0;
	if (i == 0) {
		console.log("i is zero");
	} else {
		console.log("i is non zero");
	}

	while (i < 2) {
		console.log("hello:" + i);
		i++;
	}
	 

}

function checkIfEmpty() {
	//var useridTextbox=document.getElementById("uid").value;
	var useridTextbox=$("#uid").value;
	var passwordTextbox=document.getElementById("pwd").value;
	/* // number validation
	if(  isNaN(parseInt(useridTextbox)) )
	{
		alert("invalid phoneNumber");
		return false;
	}	
	*/
	/* // email id validation
	if(useridTextbox.indexOf("@") == -1)
	{
		alert("invalid email id");
		return false;
	} 
	*/	
	//var emailElement=$("#emailTextBox").val();
	if(useridTextbox == "")
	{
		document.getElementById("uid").style="background:red";
	//	alert("userid is mandatory");
		return false;
	}	
	else if(passwordTextbox == ""){
		document.getElementById("pwd").style="background:red";
	//	alert("password is mandatory");
		return false;
	}
	return true;
}

function checkUser() {
	var ajaxJavascriptObject={
        url: '/checkUser',
        type: 'post',
        data: 'userid='+$("#uid").val(),
        context: this,
        success: function (data) {
               if(data=="unavailable")
		       alert("userid already taken");
        },
        error: function (data) {
                  console.log("failure");
        }
    };
    $.ajax(ajaxJavascriptObject);
}
function trackInput()
{
	//console.log('clicked input element');
}	
/*
	$("input") = access by html element name
	$("#uid") = access by attribute id
	$(".classuid") = access by attribute class
*/
function readWriteJquery (){
	var cusTypedUserid=$("#uid").val();
	if(cusTypedUserid == "")
	{	
		$("#uid").css("background","red");
		$("#loginButton").fadeOut(10000);
		//$("#loginButton").hide();
	}
	else
		$("#loginButton").slideDown(10000);
		//$("#loginButton").show();
	
		//$("#uid").val("please type userid");
}
function titleBarMouse(){
	$("#logo").slideUp(5000); // disappear
}
function titleBarMouseLeave(){
	$("#logo").slideDown(5000);// appear
}
$(document).ready(function() {
	//$("#pwd").click(checkUserid);
	//$("#titleBar").mouseenter(titleBarMouse);	
	//$("#titleBar").mouseleave(titleBarMouseLeave);
	/*
//	$("#uid").blur( checkUser );
	$("input").click( trackInput );
	$("#loginButton").click(checkIfEmpty);
	$("#emailTextBoxReg").blur(checkUser);
	/*
	$("#passwordTextBox").click(checkIfEmptyJquery);
	$("#logo").mouseenter(changeLogo);
	$("#logo").mouseleave(function() {
		document.getElementById("logo").style = "background:grey";
	}
	);
	*/
});
