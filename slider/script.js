var images =["https://d2xamzlzrdbdbn.cloudfront.net/bg/60607c2f-c1cd-40e7-ad1d-ad37e456d5ad24060718.webp",
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/668e0875ca6dca50.png?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ab9ccf8a8ad6a05f.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20"
  
  
]

let a = 0;



document.querySelector("#image").innerHTML = `<img src=${images[0]} alt=${images[1]} style="width: 100%; height: 100%;">`

var q=document.querySelector("#next").addEventListener("click",increase)

function increase(){
  if(a < images.length-1){
    a++;
  }else{
    a = 0
  }
console.log(a)
document.getElementById("image").innerHTML = `<img src=${images[a]} alt=${images[a]} style="width: 100%; height: 100%;"> `
}


var w=document.querySelector("#pre").addEventListener("click",decrease);
function decrease(){
if(a > 0){  
  a--
}else{
  a = images.length -1 
}
console.log(a)
document.getElementById("image").innerHTML = `<img src=${images[a]} alt=${images[a]} style="width: 100%; height: 100%;">`
}

