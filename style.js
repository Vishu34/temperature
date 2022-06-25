let cel=document.getElementById("cel");
let far=document.getElementById("far");
function myfun(){
let c1=this.value;
let f1=(c1 * 9/5) + 32 ;

if(!Number.isInteger(f1)){
f1=f1.toFixed(4);
}
far.value=f1;
}
cel.addEventListener("input",myfun);
function myfun1(){
let c=this.value;
let f=(c -32) * 5/9 ;


if(!Number.isInteger(f)){
f=f.toFixed(4);
}
cel.value=f;
}
far.addEventListener("input",myfun1);