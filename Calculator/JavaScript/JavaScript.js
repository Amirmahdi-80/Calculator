function sum(){
    var Number1=Number(document.getElementById("Num1").value)
    var Number2=Number(document.getElementById("Num2").value)
    var result=Number1+Number2
    document.getElementById("Res").innerText=result
    document.getElementById("Qaboli").innerText="جمع شد"
}
function sub(){
    var Number1=Number(document.getElementById("Num1").value)
    var Number2=Number(document.getElementById("Num2").value)
    var result=Number1-Number2
    document.getElementById("Res").innerText=result
    document.getElementById("Qaboli").innerText="کم شد"
}
function mul(){
    var Number1=Number(document.getElementById("Num1").value)
    var Number2=Number(document.getElementById("Num2").value)
    var result=Number1*Number2
    document.getElementById("Res").innerText=result
    document.getElementById("Qaboli").innerText="ضرب شد"
}
function Percentage(){
    var Number1=Number(document.getElementById("Num1").value)
    var Number2=Number(document.getElementById("Num2").value)
    var Percentage=Number2/100
    var result=Number1*Percentage
    document.getElementById("Res").innerText=result
    document.getElementById("Qaboli").innerText="درصد گرفته شد"
}
function tavan(){
    var Number1=Number(document.getElementById("Num1").value)
    var Number2=Number(document.getElementById("Num2").value)
    var tavan=Number1**Number2
    document.getElementById("Res").innerText=tavan
    document.getElementById("Qaboli").innerText="به توان شد"
}
function div(){
    var Number1=Number(document.getElementById("Num1").value)
    var Number2=Number(document.getElementById("Num2").value)
    if(Number2 !== 0){
        var result=Number1 / Number2
    document.getElementById("Res").innerText=result;
    document.getElementById("Qaboli").innerText="تقسیم شد"
    }
    else{
        document.getElementById("Res").innerText ="";
        document.getElementById("Qaboli").innerText="تقسیم شد"
        alert("تعریف نشده")
    }
}
function average(){
    var Number1=Number(document.getElementById("Numb1").value)
    var Number2=Number(document.getElementById("Numb2").value)
    var Number3=Number(document.getElementById("Numb3").value)
    var Number4=Number(document.getElementById("Numb4").value)
    var sum=Number1 + Number2 + Number3 + Number4
    var avg=sum/4
    document.getElementById("Res").innerText=avg
    if(avg>=12){
        document.getElementById("Qaboli").innerText="قبول شدید"
    }
    else{
        document.getElementById("Qaboli").innerText="قبول نشدید"
    }
}
function Theme(){
    document.getElementById("Color").style.color="white"
    document.getElementById("Num1").style.backgroundColor= "#0f3e70"
    document.getElementById("Num1").style.color= "white"
    document.getElementById("Num2").style.backgroundColor= "#0f3e70"
    document.getElementById("Num2").style.color= "white"
    document.getElementById("Numb1").style.backgroundColor= "#0f3e70"
    document.getElementById("Numb1").style.color= "white"
    document.getElementById("Numb2").style.backgroundColor= "#0f3e70"
    document.getElementById("Numb2").style.color= "white"
    document.getElementById("Numb3").style.backgroundColor= "#0f3e70"
    document.getElementById("Numb3").style.color= "white"
    document.getElementById("Numb4").style.backgroundColor= "#0f3e70"
    document.getElementById("Numb4").style.color= "white"
    document.getElementById("Change").style.backgroundColor= "#0f3e70"
    document.getElementById("Change").style.color= "white"
    document.getElementById("Change2").style.backgroundColor= "#0f3e70"
    document.getElementById("Change2").style.color= "white"
    document.getElementById("No3").style.backgroundColor= "rgba(39, 39, 39, 0.466)"
    document.getElementById("Back").style.backgroundImage="url(../Images/Math.jpg)"
}
function Home(){
    var Nomre=Number(window.prompt("به سایت من نمره چند میدهید؟"))
    if (Nomre >= 0){
        window.alert("ممنون از نظر شما")
    }
    else{
        window.alert("نمره اشتباه بود")
        var Nomre=parseInt(window.prompt("به سایت من از 20 نمره چند میدهید؟"))
    }
    window.location.href="../Home.html"
}