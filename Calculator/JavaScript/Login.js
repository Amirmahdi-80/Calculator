function validate() {
    var Validate = document.getElementById("Validate").value
    var Validate2 = String(document.getElementById("Validate2").value)
    if (Validate == "") {
        alert("نام کاربری نمی تواند خالی باشد");
    }
    else if (Validate2.length < 6) {
        alert("رمز عبور نمی تواند کمتر از 6 حرف باشد");
    }
    else {
        alert("ورود با موفقیت انجام شد");
        let Login = 'Pages/Calculator.html'
        window.open(Login, '_blank', 'height=500,width=1000');
        setInterval(Kako, 3000);
    }
// }
// function Kako() {
//     alert('چرا صفحه رو بستی کاکو')
// }
