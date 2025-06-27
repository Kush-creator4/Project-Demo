let generate=document.querySelector("#generateBtn");
let download=document.querySelector("#downloadBtn");
let img=document.querySelector(".qr-body img")
let size=document.querySelector("#sizes")
let inputbox=document.querySelector("#qr-text");
let body=document.querySelector(".qr-body");
let size1=size.value;/* first i need to defined the size1 otherwise at first example it will generate an eroor if we have not choosen any option but by initializing at first it will take 100 as the default value*/
size.addEventListener("change",(e)=>{
    size1=e.target.value;
});
generate.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let val=inputbox.value;
    console.log(val);
    /* apis not works in capitalcases*/
    let url=`https://api.qrserver.com/v1/create-qr-code/?size=${size1}x${size1}&data=${val.toLowerCase()}`;
    img.src=url;
    console.log(img);
});
download.addEventListener("click",()=>{
    let imgAtr=img.getAttribute("src");
    console.log(imgAtr);
    download.setAttribute("href",imgAtr);
});

