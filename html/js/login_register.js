
function thirdLogin2(id_1, id_2) {
    var a = document.getElementById(id_1);
    var b = document.getElementById(id_2);
    if (b.innerHTML != "收起") {
        a.style.height = "100%";
        a.style.opacity = "1";
        b.innerHTML = "收起";
    } else {
        a.style.height = "0%";
        a.style.opacity = "0";
        b.innerHTML = "更多第三方登录";
    }

}

function register() {
    var a = document.getElementById("registerbox");
    var b = document.getElementById("loginfoot_a");
    var c = document.getElementById("loginbox");
    if (b.innerHTML != "登录") {
        a.style.height = "450px";
        a.style.opacity = "1";
        b.innerHTML = "登录";
        c.style.height = "0px"
    } else {
        a.style.height = "0px";
        a.style.opacity = "0";
        c.style.height = "400px"
        b.innerHTML = "还没有账号？免费注册";
    }

}

function registerPhone() {
    var a = document.getElementById("form_rigester_phone");
    var b = document.getElementById("form_rigester_email");
    var c = document.getElementById("p_rig");
    var d = document.getElementById("m_rig");
    a.style.display = 'block';
    b.style.display = 'none';
    c.style.background = "#f1a7a7";
    c.style.color = "#fff";
    d.style.background = "#fff";
    d.style.color = "#f1a7a7";
}
function registeremail() {
    var a = document.getElementById("form_rigester_phone");
    var b = document.getElementById("form_rigester_email");
    var c = document.getElementById("p_rig");
    var d = document.getElementById("m_rig");
    a.style.display = 'none';
    b.style.display = 'block';
    d.style.background = "#f1a7a7";
    d.style.color = "#fff";
    c.style.background = "#fff";
    c.style.color = "#f1a7a7";
}

function phone_upwd_show() {
    var a = document.getElementById("phone_upwd_show"); a.innerHTML = "密码为非数字开头6-21位";
    a.style.display = "inline-block";
}
var $phone = $('#phone');
var $phoneUpwd = $("#phone_upwd")
function phone_upwd_off() {
    var a = document.getElementById("phone_upwd_show");
    if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/.test($phoneUpwd.val()))){
        a.innerHTML = "密码格式不正确！";
    }else{
        a.style.display = "none";
    }
}

function phone_show() {
    var a = document.getElementById("phone_show"); a.innerHTML = "请输入正确的11位手机号";
    a.style.display = "inline-block";
}

function phone_off() {
    var a = document.getElementById("phone_show");
    if(!(/^1[345789]\d{9}$/.test($phone.val()))){
        a.innerHTML = "不能为空或不正确！";
    }else{
        a.style.display = "none";
    }
}


var $email = $("#email")
var $emailUpwd =  $("#email_upwd")
function email_upwd_show() {
    var a = document.getElementById("email_upwd_show"); 
    a.innerHTML = "密码为6-21位非纯数字";
    a.style.display = "inline-block";
}

function email_upwd_off() {
    var a = document.getElementById("email_upwd_show");
    if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/.test($emailUpwd.val()))){
        a.innerHTML = "密码格式不正确！";
    }else{
        a.style.display = "none";
    }
}

function email_show() {
    var a = document.getElementById("email_show"); a.innerHTML = "请输入正确的邮箱";
    a.style.display = "inline-block";
}

function email_off() {
    var a = document.getElementById("email_show");
    if(!(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test($email.val()))){
        a.innerHTML = "邮箱格式不正确！"
    }else{
        a.style.display = "none";
    }
}



function phoneTime(id) {
    var code = document.getElementById(id);
    var time = 60;
    var set = setInterval(function () {
        code.innerHTML = "(" + --time + ")秒后重新发送";
    }, 1000);
    setTimeout(function () {
        code.innerHTML = "重新获取验证码";
        clearInterval(set);
    }, 60000);
}

var $loginPhone = $("#loginbox>form>div:first-child>input");
var $loginUpwd = $("#upwd");
$loginPhone.blur(function () {
    if (
        !(
            (/^1[345789]\d{9}$/.test($loginPhone.val())) | (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test($loginPhone.val()))
        )
    ) {
        $loginPhone.parent().next().text("请输入正确的手机号或邮箱");
    } else if (/^1[345789]\d{9}$/.test($loginPhone.val()) | (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test($loginPhone.val()))) {
        $loginPhone.parent().next().hide();
    }
})
    .focus(function () {
        $loginPhone.parent().next().show().text("请输入正确的手机号或邮箱");
    })

$loginUpwd.blur(function () {
    if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/.test($loginUpwd.val()))) {
        $loginUpwd.parent().next().text("密码6-21位");
    } else if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/.test($loginUpwd.val())) {
        $loginUpwd.parent().next().hide();
    }
})
    .focus(function () {
        $loginUpwd.parent().next().show().text("密码6-21位");
    })

    //登陆的ajax请求
$("#loginFormSub").click(function () {
    var targetUrl = $("#loginForm").attr("action");
    var data = $("#loginForm").serialize();
    $.ajax({
        type: 'post',
        url: targetUrl,
        cache: false,
        data: data,
        dataType: 'json',
        success: function (text) {
            if(text == true){
                alert(text+'登陆成功！')
            }else if(text == false){
                alert(text+'登陆失败，用户名或密码错误！')
            }       
        },
        error: function () {
            alert("网页错误！")
        }
    })
})

    //手机注册ajax请求
$("#regPhoneFormSub").click(function () {
    var targetUrl = $("#regPhoneForm").attr("action");
    var data = $("#regPhoneForm").serialize();
    $.ajax({
        type: 'post',
        url: targetUrl,
        cache: false,
        data: data,
        dataType: 'json',
        success: function (text) {
            if(text == true){alert(text+'登陆成功！')}else if(text == false){
                alert(text+'登陆失败，用户名或密码错误！')
            }       
        },
        error: function () {
            alert("网页错误！")
        }
    })
})