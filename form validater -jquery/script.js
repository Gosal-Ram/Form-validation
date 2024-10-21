$(document).ready(function(){

function myFunction(event){
	var key=event.charCode;
	if(key>=48 && key<=57){
	}
	else{
		event.preventDefault();
	}

}

$('#myform').submit(function(clear){
clear.preventDefault();

let uname=$("#uname").val();
let email=$("#email").val();
let pass1=$("#pass1").val();
let pass2=$("#pass2").val();
let mob_num=$("#mob_num").val();
let dob=$("#dob").val();

var psw_lower=/[a-z]/;
var psw_upper=/[A-Z]/;
var psw_digit=/[0-9]/;
var psw_special=/[^a-zA-Z0-9]/;
//var psw_space=/\s/;


let male =$("#m:checked").length;
let female =$("#f:checked").length;
let terms =$("#tc:checked").length;


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var phoneno = /^\d{10}$/;
var name_pattern=/[^\w\s-]/;


	if(uname==""){
		$("#uname_error").html("Enter the user name");
	}
	else if(name_pattern.test(uname)==true){
		$("#uname_error").html("User name shouldn't contain special characters");
	}
	else{
		$("#uname_error").html("");
	}



	if(email==""){
		$("#email_error").html( "Enter the email");
	}
	else if(emailRegex.test(email)!=true){
		$("email_error").html("Not  valid gmail");
	}
	else{
		$("#email_error").html("");
	}



	if(pass1.length==0){
		$("#pass1_error").html( "Enter the password");
	}

	else if(/\s/.test(pass1)==true){
		$("#pass1_error").html( "Should not contain whitespace");
	}
	else if(psw_lower.test(pass1)!=true){
		$("#pass1_error").html( "Must contain atleast a lower case letter");
	}
	else if(psw_upper.test(pass1)!=true){
		$("#pass1_error").html( "Must contain atleast an upper case letter");
	}
	else if(psw_digit.test(pass1)!=true){
		$("#pass1_error").html( "Must contain atleast a digit");
	}
	else if(psw_special.test(pass1)!=true){
		$("#pass1_error").html( "Must contain atleast a special character");
	}
	else if(pass1.length<8){
		$("#pass1_error").html( "Password must contain 8 chars");
	}

	else{	
		$("#pass1_error").html("");
	}



	if(pass2==""){
		$("#pass2_error").html("Field is required");
	}
	else if(pass1 != pass2 ){
		$("#pass2_error").html("Password mismatch");
	}
	else{
		$("#pass2_error").html("");
	}


	if(mob_num==""){
		$("#mob_num_error").html("Enter the mobile number");
	}
	else if(phoneno.test(mob_num)!=true){
		$("#mob_num_error").html("Invalid . Must contain 10 digits");
	}
	else{
		$("#mob_num_error").html("");
	}


	if(male==0 && female==0){
		$("#gen_error").html("Select your gender");
	}
	else{	 
		$("#gen_error").html("");
	}
   
	if(terms==0){
		$("#terms_error").html("Please accept terms and condtions ");
	}
	else{
		$("#terms_error").html("");
	}

	if(dob==""){
		$("#dob_error").html("Select your dob");
	}
	else{
		$("#dob_error").html("");
	}

})

});



