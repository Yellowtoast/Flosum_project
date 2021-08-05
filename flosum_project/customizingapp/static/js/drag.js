var wrapper = document.getElementById("container")
var width = wrapper.clientWidth;
var height = wrapper.clientHeight;
var imageobject = new Konva.Image();
var flowername;
var bouquet_items ={}

var stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height,
});
var layer = new Konva.Layer();
stage.add(layer);

// 드래그하는 요소의 url은?
var itemURL = '';

document
  .getElementById('flowers')
  .addEventListener('dragstart', function (e) {
    itemURL = e.target.src;
  });

var con = stage.container();
con.addEventListener('dragover', function (e) {
  e.preventDefault(); // !important
});



con.addEventListener('drop', function (e) {
  e.preventDefault();
  // now we need to find pointer position
  // we can't use stage.getPointerPosition() here, because that event
  // is not registered by Konva.Stage
  // we can register it manually:
  stage.setPointersPositions(e);




  Konva.Image.fromURL(itemURL, function (image) {
    flowername = itemURL;

    //URL에서 꽃 사진 이름만 추출하기 'flower1.png'이와 같은 형태로만
    flowername = flowername.replace(/^.*\//, '');
    
    if(bouquet_items[flowername]==null){
      bouquet_items[flowername]=1;
      console.log(bouquet_items);
    }
    else{
      ++bouquet_items[flowername];
      console.log(bouquet_items);
    }
    
    if(itemURL)

      image.setAttrs({
        width: 160,
        height: 160,
        scaleX: 0.8,
        scaleY: 0.8,
        name: flowername     
      })
       
      imageobject = image
       
      layer.add(imageobject);
      imageobject.position(stage.getPointerPosition());
      imageobject.draggable(true);
      
    }); 
    

});
// ================================================

var tr = new Konva.Transformer();
layer.add(tr);

// by default select all shapes
tr.nodes([imageobject]);

// add a new feature, lets add ability to draw selection rectangle
var selectionRectangle = new Konva.Rect({
  fill: 'rgba(0,0,255,0.5)',
  visible: true,
});
layer.add(selectionRectangle);



var x1, y1, x2, y2;
stage.on('mousedown touchstart', (e) => {
  // do nothing if we mousedown on any shape
  if (e.target !== stage) {
    return;
  }
  x1 = stage.getPointerPosition().x;
  y1 = stage.getPointerPosition().y;
  x2 = stage.getPointerPosition().x;
  y2 = stage.getPointerPosition().y;

  selectionRectangle.visible(true);
  selectionRectangle.width(0);
  selectionRectangle.height(0);
});

stage.on('mousemove touchmove', () => {
  // no nothing if we didn't start selection
  if (!selectionRectangle.visible()) {
    return;
  }
  x2 = stage.getPointerPosition().x;
  y2 = stage.getPointerPosition().y;

  selectionRectangle.setAttrs({
    x: Math.min(x1, x2),
    y: Math.min(y1, y2),
    width: Math.abs(x2 - x1),
    height: Math.abs(y2 - y1),
  });
});

stage.on('mouseup touchend', () => {
  // no nothing if we didn't start selection
  if (!selectionRectangle.visible()) {
    return;
  }
  // update visibility in timeout, so we can check it in click event
  setTimeout(() => {
    selectionRectangle.visible(false);
  });

  var shapes = stage.find('.rect');
  var box = selectionRectangle.getClientRect();
  var selected = shapes.filter((shape) =>
    Konva.Util.haveIntersection(box, shape.getClientRect())
  );
  tr.nodes(selected);
});

// clicks should select/deselect shapes
stage.on('click tap', function (e) {
  // if we are selecting with rect, do nothing
  if (selectionRectangle.visible()) {
    return;
  }

  // if click on empty area - remove all selections
  if (e.target === stage) {
    tr.nodes([]);
    return;
  }

  document.getElementById('removeClick').addEventListener('click', () => {
      
    e.target.destroy();
    tr.nodes([]);
    
    var itemName = e.target.attrs.name;
  
    if(bouquet_items[itemName]==0){
      bouquet_items[itemName]=0;
    }
    else{
      --bouquet_items[itemName];
    }

    console.log(bouquet_items);
 
  layer.draw();
});
  // do nothing if clicked NOT on our rectangles
  console.log(e.target);
  if (!e.target.hasName(flowername)) {
    console.log('not include name');
    return;
  }
  // do we pressed shift or ctrl?
  const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
  const isSelected = tr.nodes().indexOf(e.target) >= 0;

  if (!metaPressed && !isSelected) {
    // if no key pressed and the node is not selected
    // select just one
    tr.nodes([e.target]);
    
  } else if (metaPressed && isSelected) {
    // if we pressed keys and node was selected
    // we need to remove it from selection:
    const nodes = tr.nodes().slice(); // use slice to have new copy of array
    // remove node from array
    nodes.splice(nodes.indexOf(e.target), 1);
    tr.nodes(nodes);
  } else if (metaPressed && !isSelected) {
    // add the node into selection
    const nodes = tr.nodes().concat([e.target]);
    tr.nodes(nodes);
  }
});