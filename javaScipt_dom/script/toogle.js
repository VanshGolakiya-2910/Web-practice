i=1;
function toggleCss(){
    let backtoggle= document.getElementsByClassName('toogle')[0];
    let toggle= document.getElementsByClassName('round-button')[0];
    let mode = document.getElementsByClassName('lightmode')[0];
    let body = document.getElementsByTagName('body')[0];
    let p = document.getElementsByTagName('p')[0];
    console.log(i);
    if (i%2==1){
        toggle.style.left='70px';
        toggle.style.right='7px';
        toggle.style.backgroundColor='black';
        backtoggle.style.backgroundColor='white';
        p.innerHTML='Light Mode';
        toggle.style.transition='all 0.5s';
        body.style.backgroundColor='black';
        body.style.color='white';
        i++
    }
    else{
        toggle.style.right='70px';
        toggle.style.left='7px';
        toggle.style.transition='all 0.5s';
        body.style.backgroundColor='white';
        body.style.color='black';
        toggle.style.backgroundColor='white';
        backtoggle.style.backgroundColor='black';
        p.innerHTML='Dark Mode';
        i++
    }
}