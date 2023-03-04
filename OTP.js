const otpBtn=document.getElementById("btn");
const getOTP=document.getElementById("OTP");

function generateOTP(){
	var digits = '0123456789';
	let OTP =" ";
	for (let i = 0; i < 6; i++ ) {
            OTP +=digits[Math.floor(Math.random()*10)];
            getOTP.innerText=OTP
	}
}
otpBtn.addEventListener("click",generateOTP)

