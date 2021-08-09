//S 사이즈 누르면 꽃다발 사이즈가 추가됨
var wrapperObj = new Image();
var wrapperUrl = "http://127.0.0.1:5500/flosum_project/customizingapp/static/img/bouquet/s-흰색-뒤.png"
var wrapperUrl2 = "http://127.0.0.1:5500/flosum_project/customizingapp/static/img/bouquet/s-흰색-앞.png"
var bouquetSize = ['S','M','L'];


  // function changeBunchSize(targetId) {
  //   console.log(targetId);
  //   ['S', 'M', 'L'].forEach((v) => {
  //     if (v === targetId) document.getElementById(v).classList.add('active');
  //     else document.getElementById(v).classList.remove('active');
  //   });
  // }


document.getElementById('S').addEventListener('click', function(){

  Konva.Image.fromURL(wrapperUrl, function (image) {
      
    if(wrapperUrl)

      image.setAttrs({
        width: 850,
        height: 850,
        scaleX: 0.8,
        scaleY: 0.8,
        name: "r"     
      })
       
      wrapperObj = image

          
      console.log(wrapperObj)
      console.log(wrapperObj.attrs.name)

      layer.add(wrapperObj);

    }); 

    Konva.Image.fromURL(wrapperUrl2, function (image) {

    
        if(wrapperUrl2)
    
          image.setAttrs({
            width: 850,
            height: 850,
            scaleX: 0.8,
            scaleY: 0.8,
            name: "er"     
          })
           
          wrapperObj = image             
          layer.add(wrapperObj);
    
        }); 


});