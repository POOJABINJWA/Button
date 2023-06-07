let box=document.getElementById("box");

let btn1=document.getElementById("gblue");
btn1.addEventListener("click" ,function (){
    box.style.backgroundColor="blue";
});

let btn2=document.getElementById("gred");
btn2.addEventListener("click" ,function(){
    box.style.backgroundColor="red";
});
  
let btn3=document.getElementById("gpink");
btn3.addEventListener("click" ,function (){
    box.style.backgroundColor="pink";
});
  
  
let btn4=document.getElementById("gskyblue");
btn4.addEventListener("click" ,function (){
    box.style.backgroundColor="skyblue";
});

let click_button=document.getElementById("clicks");
click_button.addEventListener("Click",function(){
	abc.style.color="green";
});	

let text =document.getElementById("abc");

let n =document.getElementById("clicks");
n.onclick = function(){
	text.style.color="red";
	text.innerHTML ="hello welcome to my page";

}
