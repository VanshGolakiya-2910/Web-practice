let i = 1
const imgAry=[
    "./../img/image.png",
    "./../img/img2.jpeg",
    "./../img/img3.jpeg",
    "./../img/img4.jpeg",
    "./../img/img5.jpeg",
]

function nextImg(){
    i=(i+1)%imgAry.length;
    let img=document.getElementsByTagName('img')[0];
    img.src=imgAry[i];
}
function prevImg(){
    i=(i-1+imgAry.length)%imgAry.length;
    let img=document.getElementsByTagName('img')[0];
    img.src=imgAry[i];
}