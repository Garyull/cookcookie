
// header 函数
function login_out(){
    var a = document.getElementById("login_no");
    var b = document.getElementById("login_yes");
    a.style.display = "inline-flex";
    b.style.display = "none";
}

//nav函数

function nav_2_show(id1,id2,id3,id4,id5){
    var a = document.getElementById(id1);
    var b = document.getElementById(id2);
    var c = document.getElementById(id3);
    var d = document.getElementById(id4);
    var e = document.getElementById(id5);
    if(a.style.display == 'none'){
        a.style.display = 'block';
        b.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
        e.style.display = 'none';
    }else{
        a.style.display = 'none';
    }
};

function nav_3_1_show(id1,id2,id3,id4,id5,id6){
    var a = document.getElementById(id1);
    var b = document.getElementById(id2);
    var c = document.getElementById(id3);
    var d = document.getElementById(id4);
    var e = document.getElementById(id5);
    var f = document.getElementById(id6);
    if(a.style.visibility == 'hidden'){
        a.style.visibility = 'visible';
        b.style.visibility = 'hidden';
        c.style.visibility = 'hidden';
        d.style.visibility = 'hidden';
        e.style.visibility = 'hidden';
        f.style.visibility = 'hidden';
    }else{
        a.style.visibility = 'hidden';
    }
};

function nav_3_2_show(id1,id2,id3,id4,id5){
    var a = document.getElementById(id1);
    var b = document.getElementById(id2);
    var c = document.getElementById(id3);
    var d = document.getElementById(id4);
    var e = document.getElementById(id5);
    if(a.style.visibility == 'hidden'){
        a.style.visibility = 'visible';
        b.style.visibility = 'hidden';
        c.style.visibility = 'hidden';
        d.style.visibility = 'hidden';
        e.style.visibility = 'hidden';
    }else{
        a.style.visibility = 'hidden';
    }
};

function nav_3_4_show(id1,id2,id3,id4){
    var a = document.getElementById(id1);
    var b = document.getElementById(id2);
    var c = document.getElementById(id3);
    var d = document.getElementById(id4);
    if(a.style.visibility == 'hidden'){
        a.style.visibility = 'visible';
        b.style.visibility = 'hidden';
        c.style.visibility = 'hidden';
        d.style.visibility = 'hidden';
    }else{
        a.style.visibility = 'hidden';
    }
};


//底部悬浮窗
function getScrollTop(){
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if(document.body){
        bodyScrollTop = document.body.scrollTop;
    }
    if(document.documentElement){
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}
//文档的总高度
function getScrollHeight(){
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if(document.body){
        bodyScrollHeight = document.body.scrollHeight;
    }
    if(document.documentElement){
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}
//浏览器视口的高度
function getWindowHeight(){
    var windowHeight = 0;
    if(document.compatMode == "CSS1Compat"){
        windowHeight = document.documentElement.clientHeight;
    }else{
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}
window.onscroll = function(){
    var floatWindow = document.getElementById("floatWindow");
    if(getScrollTop() + getWindowHeight() == getScrollHeight()){        floatWindow.style.right = "15px";
    }else{
        floatWindow.style.right = "-50px";
    }
};