let text=document.getElementById('text');
console.log(text);
let shadow="";
for (let i= 0; i<500; i++) {
    shadow+=(shadow? ",":"")+i*1+'px '+i*1+'px 0px #01ded3';
}
console.log(shadow);

text.style.textShadow=shadow;
