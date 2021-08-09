
function printStage(){
    console.log(stage);
    var children = layer.getChildren();
    var total_flower = children.length - 2;

    console.log(children);
    console.log(total_flower);

    
    alert("들어옴");
$.ajax({ 
 
    url:'/any', 
    type:"POST", 
    data:JSON.stringify(stage), 
 
    success: function(result) { 
        if (result) { alert("저장되었습니다."); } 
        else { alert("잠시 후에 시도해주세요."); } },
    error: function() { alert("에러 발생"); } })




}

