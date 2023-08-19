let a='';
let b='';
let sign='';
let finish = false;

const numbers=['0','1','2','3','4','5','6','7','8','9','.'];
const signs=['/','*','-','+'];

const out = document.querySelector('.window p');

function clear() {
   a=b=sign='';
   finish=false;
   out.textContent=0;
}

function procent() {
   a=a/100;
   b=sign='';
   finish=false;
   out.textContent=a;
}

function plusminus() {
   a=-a;
   b=sign='';
   finish=false;
   out.textContent=a;
}

document.querySelector('.ac').onclick=clear;
document.querySelector('.procent').onclick=procent;
document.querySelector('.plus-minus').onclick=plusminus;


document.querySelector('.buttons').onclick=(event)=>{
   if(!event.target.classList.contains('btn')) return;
   if(event.target.classList.contains('ac')) return;

   out.textContent='';
   const temp=event.target.textContent;
   if(numbers.includes(temp)) {
      if (b==='' && sign==='') {
         a+=temp;
         out.textContent=a;
      }
      else if (a!=='' && b!=='' && finish) {
         b=temp;
         finish=false;
         out.textContent=b;
      }
      else {
         b+=temp;
         out.textContent=b;
      }
      
   }

   if (signs.includes(temp)) {
      sign=temp;
      out.textContent=sign;
   }

   if (temp==='=') {
      if (b==='') b=a;
      switch(sign) {
         case '+':
            a=(+a)+(+b);
            break;
         case '-':
            a=a-b;
            break;
         case '*':
            a=a*b;
            break;
         case '/':
            if (b==='0') {out.textContent="dalbaeb?"; a=b=sign=''; return;  }
            a=a/b;
            break;
      }
      finish=true;
      out.textContent=a;
   }

}