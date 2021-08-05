function changeBunchSize(targetId) {
  console.log(targetId);
  ['S', 'M', 'L'].forEach((v) => {
    if (v === targetId) document.getElementById(v).classList.add('active');
    else document.getElementById(v).classList.remove('active');
  });
}
