document.querySelector("#pageID").innerText="Our Mission";
console.log(document.querySelector("p"));
lis=document.querySelectorAll("#baseNav li");
for(oneli of lis){
    console.log(lis);
    oneli.innerText="Our "+oneli.innerText;
}
console.log(document.querySelector(".phone"));
document.querySelector(".phone").innerText="(65)98765432";

