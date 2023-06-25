//document.getElementById("pageID").innerText="Our Mission";
document.getElementById("pageID").addEventListener("click",(e)=>{
    console.log(e);
    e.target.innerText="Our Mission";
})

var firstpara=document.getElementsByTagName("p")[0];
console.log(firstpara);
var quicknavlinkitems=document.getElementById("quickNav").getElementsByTagName("li");
for(let a=0;a<quicknavlinkitems.length-2;a++){
    li=quicknavlinkitems[a].getElementsByTagName("a")[0];
    console.log(li); 
    //li.innerText="Our "+li.innerText;   
    li.addEventListener("click",(e)=>{
        e.preventDefault(); //disable hyperlink to jump to new page
        console.log(e);
        e.target.innerText="Our "+e.target.innerText;});
}

//document.getElementsByClassName("phone")[0].innerText="(65)98765432";
document.getElementsByClassName("phone")[0].addEventListener("click",(e)=>{
    console.log(e);
    e.target.innerText="(65)98765432";
})


//ref: https://www.w3schools.com/jsref/event_preventdefault.asp#:~:text=The%20preventDefault()%20method%20cancels,link%20from%20following%20the%20URL
//https://www.30secondsofcode.org/articles/s/javascript-arrow-function-event-listeners


let tel=prompt("Enter your contact number");
document.getElementsByClassName("phone")[0].innerHTML=tel;

let whoweare=document.getElementById("mainArticle").getElementsByTagName("h1")[0];
whoweare.style.fontSize="3em";
whoweare.style.color="red";

let colArr=["red","blue","green"];

function randcolor(){
    let randCol=Math.floor(Math.random()*3);
    console.log(randCol+" choosen"+ colArr[randCol]);
    document.querySelector("#pageID").style.color=colArr[randCol];
}
randcolor();


function randcolor2(elselector){
    let randCol=Math.floor(Math.random()*3);
    console.log(randCol+" choosen"+ colArr[randCol]);
    document.querySelector(elselector).style.color=colArr[randCol];
}

randcolor2("#specials h1"); //change "Monthly Specials" to random color 



