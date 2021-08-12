function changeBunchSize(targetId) {
 
  ['S', 'M', 'L'].forEach((v) => {
    if (v === targetId) document.getElementById(v).classList.add('active');
    else document.getElementById(v).classList.remove('active');
  
  });
}


function changeMenuBtn(targetId) {
 
  ['menu1', 'menu2', 'menu3'].forEach((v) => {
    if (v === targetId) document.getElementById(v).classList.add('active');
    else document.getElementById(v).classList.remove('active');
  });
}
