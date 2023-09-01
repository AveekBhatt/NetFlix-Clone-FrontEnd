let btns1 = document.getElementById('btn1');
let btns2 = document.getElementById('btn2');
let divs = document.getElementById('content');
let newbtns1 = document.getElementById('btns1');
let newbtns2 = document.getElementById('btns2');
let newdivs =  document.getElementById('contents');
btns1.addEventListener('click' , function(){
    divs.scrollBy(-100,0);
})
btns2.addEventListener('click',function(){
    divs.scrollBy(100,0);
})

newbtns1.addEventListener('click',function(){
    newdivs.scrollBy(-50,0);
})
newbtns2.addEventListener('click',function(){
    newdivs.scrollBy(50,0);
})