
function printStage(){
    var children = layer.getChildren();
    var total_flower = children.length - 2;
    var bouquet_dictionary = {};

    // console.log(children);
    for (var i = 0; i < children.length; i++){
        bouquet_dictionary[children[i].attrs.name]
        if(children[i].attrs.name){
            console.log(children[i].attrs.name);
        }
    }

    var json = stage.toJSON();

    // $.ajax({
	
    //     type:'post or get',
    //     async:'true or false',
    //     url:'요청할 url',
    //     data:{서버로 전송할 데이터},
    //     dataType: '서버에서 전송받을 데이터 형식',
    //     success: {
    //         //정상 요청, 응답 시 처리 작업
    //     },
    //     error : function(xhr,status,error) {
    //         //오류 발생 시 처리
    //     },
    //     complete:function(data,textStatus) {
    //         //작업 완료 후 처리
    //     }
    // });
    
}
