var headImgsc = document.querySelector("#headImg input");
headImgsc.onclick = function () {
    var img = headImgsc.nextElementSibling;
    if (headImgsc.value == "收藏") {
        img.src = "../img/cookbook/喜欢-fill.png";
        headImgsc.value = "已收藏";
    } else {
        img.src = "../img/cookbook/喜欢.png";
        headImgsc.value = "收藏";
    }
}

var food1 = document.querySelector("#rcp div");
var food2 = document.querySelector("#rcp ul");
var foodChange = document.querySelector("#rcp a");
var text1 = document.querySelector("#rcp a span");
foodChange.onclick = function () {
    if (text1.innerHTML == "缩略模式") {
        food1.className = "showup";
        text1.innerHTML = "浏览模式";
        food2.className = "showdown";
    } else {
        food1.className = "showdown";
        food2.className = "nav flex-column";
        text1.innerHTML = "缩略模式";
    }
}




var mid = document.getElementById("mid");
var list = document.getElementById("did").getElementsByTagName("img");
var p = document.getElementById("detailsP");
var arr2 = [
    { step: "第1步", del: "锅中倒入清酒150ml、酱油250ml、味淋150ml、冰糖60g、葱段、蒜末、姜片，开小火沸煮约25分钟，搅拌均匀，滤出料汁备用" },
    { step: "第2步", del: "鸡胸肉300g洗净切块，放入料理机中，加入洋葱块20g、盐3g、淀粉15g、蛋黄液15g、料酒5ml，搅打成泥" },
    { step: "第3步", del: "将肉泥捏成肉丸，放入沸水中焯烫定型" },
    { step: "第4步", del: "鸡肉丸用竹签穿串，放在铺好锡纸的烤盘上，刷上料汁" },
    { step: "第5步", del: "放入预热200℃的烤箱，烤制约10分钟" },
    { step: "第6步", del: "取出再次刷上料汁，放入烤箱继续烤制约10分钟，即可享用" }];
for (var i = 0; i < list.length; i++) {
    list[i].onmouseover = function () {
        mid.src = this.src;
        var span = this.previousElementSibling.innerHTML.charAt(1);
        p.children[0].innerHTML = arr2[parseInt(span) - 1].del;
    }
}

var zan = document.getElementById("zan");
var plus1 = zan.nextElementSibling;
zan.onclick = function () {
    zan.innerHTML = "赞 10526";
    plus1.style.opacity = "1";
    function showOff() {
        plus1.style.opacity = "0";
    };
    setTimeout(showOff, 3000)
}


function sign_show() {
    var signShow = document.getElementById("signShow");
    signShow.style.display = "block";
};
function sign_hide() {
    var signShow = document.getElementById("signShow");
    signShow.style.display = "none";
}

function WindowSignShow() {
    //获取文本内容和长度函数
    function signShow(el) {
        var val = el.value;
        var eLen = val.length;
        return eLen;
    }

    var el = document.getElementById('signArea');
    el.addEventListener('input', function () {
        var len = signShow(this); //   调用函数 
        document.getElementById('signShow').innerHTML = "还能输入" + (140 - len) + "字";
    });

    el.addEventListener('propertychange', function () {//兼容IE
        var len = signShow(this); //   调用函数 
        document.getElementById('signShow').innerHTML = "还能输入" + (140 - len) + "字";
    });
}

function sign_show1() {
    var signShow1 = document.getElementById("signShow1");
    signShow1.style.display = "block";
};
function sign_hide1() {
    var signShow1 = document.getElementById("signShow1");
    signShow1.style.display = "none";
}

function WindowSignShow1() {
    //获取文本内容和长度函数
    function signShow1(el) {
        var val = el.value;
        var eLen = val.length;
        return eLen;
    }

    var el = document.getElementById('signArea1');
    el.addEventListener('input', function () {
        var len = signShow1(this); //   调用函数 
        document.getElementById('signShow1').innerHTML = "还能输入" + (140 - len) + "字";
    });

    el.addEventListener('propertychange', function () {//兼容IE
        var len = signShow1(this); //   调用函数 
        document.getElementById('signShow1').innerHTML = "还能输入" + (140 - len) + "字";
    });
}

window.onload = function(){
    WindowSignShow();
    WindowSignShow1();
}