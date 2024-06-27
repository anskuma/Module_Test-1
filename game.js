let player=document.querySelectorAll('.player');
let comp=document.querySelectorAll('.comp');
let random=Math.floor(Math.random()*3);
let lines=document.querySelector('.lines');
let ellipseuser=document.querySelector('.ellipseuser');
let ellipsecomp=document.querySelector('.ellipsecomp');
let user=document.querySelector('.user');
let sys=document.querySelector('.sys');
let result= document.querySelector('.result');
let winner= document.querySelector('.winner');
let PlayAgain=document.querySelector('.Play-Again');
let PlayAgain1=document.querySelector('.Play-Again1');
let rulebutton=document.querySelector('.rule-btn');
let rulebutton1=document.querySelector('.rule-btn1');
let rules= document.querySelector('.rules');
let closerules=document.querySelector('.closerule');
let info=document.querySelector('.info');
let next=document.querySelector('.next');
let userwin=document.querySelector('.userwin');
let choice=document.querySelector('.choice');
let scoreboard=document.querySelector('.score-board');
let against=document.querySelector('.against');
let userscore=JSON.parse(localStorage.getItem('userscore'));
let compscore=JSON.parse(localStorage.getItem('compscore'));
let cscore=document.getElementById('cscore');
let uscore=document.getElementById('uscore');
if (userscore) {
    uscore.innerText=userscore;
   
}
let count=1;
if (compscore) {
    cscore.innerText=compscore
    
}
let countt=1;





next.addEventListener('click', ()=>{
    userwin.style.display='block'
    choice.style.display="none";
    ellipseuser.style.display='none';
    scoreboard.style.display='none';
    info.style.display='none';
    result.style.display='none';
    next.style.display='none';
    rulebutton.style.display="block";
    rulebutton1.style.display="none";



})
rulebutton.addEventListener("click", ()=>{
    rules.style.display="block"})
rulebutton1.addEventListener("click", ()=>{
    rules.style.display="block"})
closerules.addEventListener("click", ()=>{
    rules.style.display="none"})

PlayAgain.addEventListener('click',()=>{
    window.location.reload();
})
PlayAgain1.addEventListener('click',()=>{
    window.location.reload();
})
player.forEach((element,index) => {
    element.addEventListener('click', ()=>{
        setTimeout(() =>{
        lines.style.display='none'
        ellipseuser.style.display='block'
        user.style.display='block'
    
        player.forEach(item =>{
            item.style.display='none'
        })
        element.style.display='block';
        element.classList.add('player-selected');
    },100)
        setTimeout(() =>{
            sys.style.display='block';
            comp[random].style.display='block';
            comp[random].classList.add('computer-selected')
            },600);
        setTimeout(() => {
            if (random==index) {
                winner.innerText="TIE UP";
                result.style.display="block";
                against.innerText=' ';
                ellipseuser.style.display='none';
                ellipsecomp.style.display="none";
            }
            else if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1)
                {
                    result.style.display="block";
                    rulebutton.style.display="none";
                    rulebutton1.style.display="block";
                    next.style.display='block';
                    count=userscore;
                    count++;
                    localStorage.setItem('userscore', JSON.stringify(count));
                    uscore.innerHTML=count;

                }else{
                    result.style.display="block";
                    ellipseuser.style.display='none';
                    ellipsecomp.style.display="block";
                    winner.innerText="YOU LOST";            
                    countt=compscore;
                    countt++;
                    localStorage.setItem('compscore', JSON.stringify(countt));
                    cscore.innerHTML=countt;
                }
            
        },1000);

    })
});

















