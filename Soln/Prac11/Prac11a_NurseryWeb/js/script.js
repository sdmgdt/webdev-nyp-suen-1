// document.querySelector(".wrapper-box") // one element
// document.querySelector(".nursery-box").firstChild//
// document.querySelector(".nursery-box").children[0] //
// document.querySelectorAll(".nursery-box")[0].children[1] // error!!!!
// document.querySelectorAll(".nursery-box")[0].children[1] //
// document.querySelectorAll(".nursery-box")[0].firstElementChild. nextElementSibling //
// document.querySelectorAll(".nursery-box")[0].querySelectorAll("p") //
// document.querySelector(".nursery-box").children[1].innerText
// document.querySelector(".nursery-box").children[1].innerHTML
//notes: whatever there is querySelectorAll, it returns array and must specify index[]

document.querySelector(".nursery-box").children[0].src="img/spider.jpg"; 
//find the first nurserybox class and first child, change humpty to spider

document.querySelector("#msg").innerHTML="<p>Hello <em>World</em><strong> everyone </strong></p>"
//find the first line of text and change it 

var introBox = document.querySelector("#intro");
// Create an element <p>
var pEle = document.createElement("p");
//Create a text node
var txt = document.createTextNode("Introduction");
pEle.appendChild( txt );
//Append the created element <p>, along with text, to the element div
introBox.appendChild(pEle);

function write( selector, txt ) {
    var box = document.querySelector( selector );
    // Create an element <p>
    var pEle = document.createElement("p");
    //Create a text node
    var txt = document.createTextNode( txt );
    pEle.appendChild( txt );
    //Append the created element <p>, along with text, to the element div
    box.appendChild(pEle);
   }
write( "#intro", "Introduction");


// returns a random integer from 0 to range-1
function getRandom( range ) {
    return Math.floor( Math.random() * range );
}
function getColour ( type ) {
    let colours = {
        additive : ["red", "green", "blue"],
        subtractive: ["cyan", "magenta", "yellow"]
    }
    if (type == "add")
        return colours.additive[getRandom(3)];
    else
    return colours.subtractive[getRandom(3)];
}

var addColour = getColour('add');
var subColour = getColour('sub');
document.querySelector(".nursery-box").style.backgroundColor = addColour;
document.querySelectorAll(".nursery-box")[1].style.backgroundColor = subColour;

//create button programmmatically, okay to just add <button>...</button> in HTMl file directly
var button1Ele=document.createElement("button");
var button1text=document.createTextNode("ToggleColor");
button1Ele.appendChild(button1text);
introBox.appendChild(button1Ele);


body=document.querySelector("body");
function togglecolorbody(){ //must add a pink class in css
    body.classList.toggle("pink");
}

button1Ele.addEventListener("click",togglecolorbody);




