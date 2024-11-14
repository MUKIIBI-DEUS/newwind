//Display navbar
let menu1=document.querySelector('#menu1');
 console.log(menu1);


let sidenavbar=document.querySelector(".sidenavbar");

console.log(sidenavbar);
// showsideNav


 menu1.addEventListener('click',()=>{
    sidenavbar.classList.toggle("showsideNav");
 });



//  QTN TABS
let qtbtab=document.querySelectorAll('.qtnTab');


qtbtab.forEach(qtbtab => {//for each qtbtab
   qtbtab.addEventListener('click',()=>{//on click for each qtbtab
      qtbtab.classList.toggle("showAnswer");//toggle a showAmswer class from csss
      });
});


 console.log(qtbtab);
