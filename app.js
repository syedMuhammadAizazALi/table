var num= +prompt("enter any number ")

let div = document.querySelector("div")
for( i=1 ; i<=10 ; i++){
   div.innerHTML+=( `${num}*${i} = ${num * i} <br>` );
}