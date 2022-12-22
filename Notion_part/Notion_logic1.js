/*
인수인계 사항 js 코드

*/

function toggleInputArea(val){//인수인계 글쓰기 메뉴 토글버튼 
    //val이 true면 보이기, false면 숨기기  
    if(val){
        console.log("메뉴 보이기");
    } else 
        console.log("메뉴 숨기기");
}
function toggleInputArea(){
    let con = document.getElementById("Notion_Input_Area");
    let content_box = document.getElementById("Notion_Content_Area");
    if(con.style.display == "none"){  
        con.style.display = "block";
        
    } else
        con.style.display = "none";
}