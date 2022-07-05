let hello = document.querySelector('button');
hello.addEventListener('click', popup);

function popup(){
    let name = prompt('name');
    hello.textContent= 'Hello : ' + name;

}
/*
var time = prompt("Hey whats the time:");
if(time>5 && time<17){
    alert("good morning");
}else{
    alert("good evening");
}
*/
//for(let i =0; i< 10; i++){
//    if(i%2==0){
 //   console.log(i);}
//}
//objects
/*let animal ={
    name: "Zebra",
    leg: 4
};
for(let key in animal){
    console.log(key, animal[key]);
}
*/
let name =["Rahul","Neha","Het","ram"];
for(let index in name){
    console.log(index, name[index])
}