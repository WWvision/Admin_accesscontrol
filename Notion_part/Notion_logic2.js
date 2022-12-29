/**초기 인수인계 사항 정보들을 저장하는 객체배열*/
var Notion_arr = new Array();
/** 처음 생성 이후 인수인계 사항들이 저장되는 객체 배열 */
var Session_NotionData = new Array();
var deleteIndex_Arr = [];//삭제된 Session Content 항목의 Index값을 저장하는 곳 > 정상적으로 다시 Content가 리로드되면 값 초기화
function addNotion(){//인수인계 새로운 정보 제출버튼을 누르면 실행
    //입력된 데이터를 Notion_arr에 저장하는 함수
    /** 인수인계 새로운 정보가 들어있는 객체  */
    let NewData_obj = new Object();
    let writed_date = document.getElementById("Notion_posts_Date").value;
    let is_important = document.getElementById("Notion_posts_Important").checked;
    let is_alarm = document.getElementById("Notion_posts_AlarmCheck").checked;
    let textdata = document.getElementById("Notion_posts_text").value;

    NewData_obj.date = writed_date;// "2022-12-12"
    NewData_obj.important = is_important;// true
    NewData_obj.text = textdata;// 입력된 문자열
    NewData_obj.isAlarm = is_alarm;// true
    if(is_alarm){//알람 설정을 했다면?
        //알람 설정시간값 받아오기
        let alarm_cycle =  document.getElementById("AlarmCheck_cycle").value;
        let alarm_time = document.getElementById("AlarmCheck_time").value;
        NewData_obj.alarmCycle = alarm_cycle;
        NewData_obj.alarmTime = alarm_time;
    } else { 
        NewData_obj.alarmCycle = null;
        NewData_obj.alarmTime = null;
    }
    Notion_arr.push(NewData_obj);

    let ElementCount = document.getElementById("Notion_Content_Area").childElementCount;
    if(ElementCount >= 1){//Notion_Content_Area에 기존 정보가 있다면
        //기존 정보 모두 저장
        saveNotionContent();
        //Notion_Content_Area 하위 자식 div 모두 삭제 후
        delNotionContent("all");
        //새로 생성
        makeNotionContent();
    } else if(ElementCount == 0){//Notion_Content_Area에 아무것도 존재하지 않는다면
        makeNotionContent();
    }
    
}
//페이지가 로드되거나 새로운 데이터가 추기될때
function makeNotionContent(){//Notion Content Div를 규칙에 맞게 생성하는 함수
    Session_NotionData = Notion_arr;
    for(let count3=0; count3 < Session_NotionData.length; count3++){//우선순위로 재정립한 뒤 div 생성
        createNotionContent(count3);
    }
}
function createNotionContent(index){//Notion Content Div 생성 함수
    let NotionContent_area = document.getElementById("Notion_Content_Area");
    let NotionContent_div = document.createElement("div");//Notion_Content1 생성
    NotionContent_div.setAttribute("id", eval("'Notion_Content" + index + "'"));
    if(Session_NotionData.important == true){
        NotionContent_div.setAttribute("class", "Notion_content_Important_style");
    } else 
        NotionContent_div.setAttribute("class", "Notion_content_style");
        let Content_date = document.createElement("div");//인수인계 사항 date Div
        Content_date.setAttribute("id", eval("'content" + index + "_date'"));
        Content_date.setAttribute("class", "Notion_content_date_style");
        NotionContent_div.appendChild(Content_date);

        let Content_text = document.createElement("div");//인수인계 사항 text Div
        Content_text.setAttribute("id", eval("'content" + index + "_text'"));
        Content_text.setAttribute("class", "Notion_content_text_style");
            let Content_text_textarea = document.createElement("textarea");
            //미리 textarea에 값을 넣는 방식이 아니라! 텍스트 안에 있는 \n 줄바꿈 문자 갯수를 세서 미리 크기를 늘려놓자! 
            Content_text_textarea.setAttribute("id", eval("'NotionTextarea" + index + "'"));
            Content_text_textarea.setAttribute("class", "Notion_content_textarea");
            let newLine_Count = findWordCount(Session_NotionData[index].text, '\n') + 1;
            Content_text_textarea.setAttribute("style", eval("'height:" + (newLine_Count*22) + ";'"));
            Content_text.appendChild(Content_text_textarea);
        NotionContent_div.appendChild(Content_text); 

        //알람기능 어떻게 구현하지...? 나중에 필요하면 추가하장

        let Content_Btn = document.createElement("div");//해당 항목 삭제 버튼
            Content_Btn.setAttribute("style", "float: right;");
            let Content_closeBtn = document.createElement("input");
            Content_closeBtn.setAttribute("class", "closebutton_style");
            Content_closeBtn.setAttribute("value", "X");
            let val = 'delNotionContent("Notion_Content' + index + '",' + index +')';
            Content_closeBtn.setAttribute("onclick", eval("'" + val + "'"));
            Content_Btn.appendChild(Content_closeBtn);
        NotionContent_div.appendChild(Content_Btn);
    NotionContent_area.appendChild(NotionContent_div);

    let date = Session_NotionData[index].date;  //"2022-12-21";
    let date_arr = date.split("-");     // 0: "2022", 1:"12", 2:"21"
    document.getElementById(eval("'content" + index + "_date'")).innerText = date_arr[1] + "월 " + date_arr[2] + "일";
    document.getElementById(eval("'NotionTextarea" + index + "'")).value = Session_NotionData[index].text;
    document.getElementById(eval("'NotionTextarea" + index + "'")).style.resize = "none";
}
//makeNoitonContent()함수가 실행되기 전 만들어진 div가 있다면
function saveNotionContent(){//기존 div content에 입력된 정보를 업데이트시키는 함수
    let ElementCount = document.getElementById("Notion_Content_Area").childElementCount;
    deleteIndex_Arr.sort();

    for(let k=0; k< ElementCount ; k++){//기존 div에 있는 정보 저장 
        for(let h=0; h<deleteIndex_Arr.length; h++){
            if(deleteIndex_Arr[h] != k){//deleteIndex에 저장되어있는 인덱스와 저장하려는 인덱스가 같지 않을때만 값을 받아와서 푸쉬
                let Notion_val = document.getElementById(eval("'NotionTextarea" + k + "'")).value;//NotionContent_textdata1
                Session_NotionData[k].text = Notion_val;
            } 
        }
    }
    while(deleteIndex_Arr.length){//deleteIndex_Arr 길이가 0이되면 종료
        let index = deleteIndex_Arr.pop();
        Session_NotionData.splice(index, 1);
    }
}
function delNotionContent(div_id, index){//div content를 다 제거하는 함수
    //하나만 제거할땐 해당 Content를 잠시 숨기고 인덱스를 저장했다가 새로 업데이트 할때 완전히 삭제
    //모두 제거할땐 for 반복문으로 Content Area에 존재하는 div Content 삭제
    let parent = document.getElementById("Notion_Content_Area");
    if(div_id == "all"){//모두 지우게 된다면? Notion_Content_Area 화면을 업데이트 시키기 위함
        while(parent.firstChild) {//기존 div 삭제
            parent.removeChild(parent.firstChild);
         }
    } else {//하나만 지우게 된다면
        if(confirm("삭제하시겠습니까?")){
            document.getElementById(div_id).style.display = "none";
            deleteIndex_Arr.push(index);
        }
    }
}
function findWordCount(str, word){
    let text = str;
    let count = 0;
    let searchChar = word;
    let pos = text.indexOf(searchChar);
    while (pos !== -1) {
        count++;
        pos = text.indexOf(searchChar, pos + 1); // 첫 번째 단어 이후의 인덱스부터 찾을단어를 찾습니다.
    }
    return count;
}