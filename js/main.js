if(localStorage.getItem("aqua")){
    document.body.style.backgroundColor = localStorage.getItem("aqua");
}
else if(localStorage.getItem("blue")){
    document.body.style.backgroundColor = localStorage.getItem("blue");
}
else if(localStorage.getItem("white")){
    document.body.style.backgroundColor = localStorage.getItem("white");
}
function nav2show(){
    let btn1 = document.querySelector(".btn1"),
        nav2 = document.querySelector(".nav2");
    btn1.onclick = ()=>{
        nav2.classList.toggle("active");
    }
}
function products(){
    let btns = document.getElementsByClassName("btns"),
        show = document.getElementsByClassName("show");
        let name1 = "laptop dell",price1 = "300 $",name2 = "laptop hp",price2 = "400 $",name3 = "laptop toshiba",price3 = "500 $",name4 = "laptop lenovo",price4 = "600 $",name5 = "laptop ASUS",price5 = "700 $",name6 = "laptop MacBook",price6 = "800 $";
        let img1 = "images/product1.jpg",img2 = "images/product2.jpg",img3 = "images/product3.jpg",img4 = "images/product4.jpg",img5 = "images/product5.jpg",img6 = "images/product6.jpg";
    btns[0].onclick = ()=>{localStorage.setItem('name1',name1),localStorage.setItem('price1',price1);alert('تم اضافة المنتج إلي السلة');localStorage.setItem("img1",img1)}
    btns[1].onclick = ()=>{localStorage.setItem('name2',name2),localStorage.setItem('price2',price2);alert('تم اضافة المنتج إلي السلة');localStorage.setItem("img2",img2)}
    btns[2].onclick = ()=>{localStorage.setItem('name3',name3),localStorage.setItem('price3',price3);alert('تم اضافة المنتج إلي السلة');localStorage.setItem("img3",img3)}
    btns[3].onclick = ()=>{localStorage.setItem('name4',name4),localStorage.setItem('price4',price4);alert('تم اضافة المنتج إلي السلة');localStorage.setItem("img4",img4)}
    btns[4].onclick = ()=>{localStorage.setItem('name5',name5),localStorage.setItem('price5',price5);alert('تم اضافة المنتج إلي السلة');localStorage.setItem("img5",img5)}
    btns[5].onclick = ()=>{localStorage.setItem('name6',name6),localStorage.setItem('price6',price6);alert('تم اضافة المنتج إلي السلة');localStorage.setItem("img6",img6)}
    show[0].onclick = ()=>{alert("name:laptop dell & price:300 $")}
    show[1].onclick = ()=>{alert("name:laptop hp & price:400 $")}
    show[2].onclick = ()=>{alert("name:laptop toshiba & price:500 $")}
    show[3].onclick = ()=>{alert("name:laptop lenovo & price:600 $")}
    show[4].onclick = ()=>{alert("name:laptop ASUS & price:700 $")}
    show[5].onclick = ()=>{alert("name:laptop MacBook & price:800 $")}
}
function languages(){
    let lang = document.querySelectorAll(".lang"),
    AR = "arabic",EN = "english";
    lang[0].onclick = ()=>{
        localStorage.removeItem("EN");
        localStorage.setItem("AR",AR);
    }
    lang[1].onclick = ()=>{
        localStorage.removeItem("AR");
        localStorage.setItem("EN",EN);
    }
}
function translate(){
    let word0 = document.querySelector("#word0"),
    word1 = document.querySelector("#word1"),
    word2 = document.querySelector("#word2"),
    word3 = document.querySelector("#word3");
if(localStorage.getItem("AR")){
    word0.textContent = "تسوق من أي مكان",
    word1.textContent = "منتجاتنا",
    word2.textContent = "عن الموقع",
    word3.textContent = "الإعدادات";
}
else if(localStorage.getItem("EN")){
    word0.textContent = "shop from anywhere",
    word1.textContent = "products",
    word2.textContent = "about the site",
    word3.textContent = "Settings";
}
}
function colors(){
    let color = document.querySelectorAll(".color"),
    aqua = "aqua",blue = "blue",white = "white";
    color[0].onclick = ()=>{
        localStorage.setItem("aqua",aqua);
        localStorage.removeItem("blue",blue);
        localStorage.removeItem("white",white);
    }
    color[1].onclick = ()=>{
        localStorage.setItem("blue",blue);
        localStorage.removeItem("aqua",aqua);
        localStorage.removeItem("white",white);
    }
    color[2].onclick = ()=>{
        localStorage.setItem("white",white);
        localStorage.removeItem("blue",blue);
        localStorage.removeItem("aqua",aqua);
    }
}
function login(){
    let user = document.querySelector(".user"),
        pass = document.querySelector(".pass");
    if(user.value == localStorage.getItem("user") && pass.value == localStorage.getItem("pass")){
        window.open("site.html");
    }
    else{
        alert("sorry username & password are incorrect");
    }
}
function register(){
    let user = document.querySelector(".user"),
        pass = document.querySelector(".pass");
    localStorage.setItem("user",user.value);
    localStorage.setItem("pass",pass.value);
    window.open("index.html");
}