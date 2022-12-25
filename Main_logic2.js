/**인수인계 사항 정보들을 저장하는 객체배열*/
var Notion_arr = new Array();

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
    //console.log("작성시간: " + writed_date);
    //console.log("중요여부: " + is_important);
   // console.log("작성된 내용: " + textdata);
    if(is_alarm){//알람 설정을 했다면?
        //알람 설정시간값 받아오기
        let alarm_cycle =  document.getElementById("AlarmCheck_cycle").value;
        let alarm_time = document.getElementById("AlarmCheck_time").value;
        //console.log("[알림] 설정주기: " +alarm_cycle + "  설정시간: " + alarm_time);
        NewData_obj.alarmCycle = alarm_cycle;
        NewData_obj.alarmTime = alarm_time;
    } else { 
        NewData_obj.alarmCycle = null;
        NewData_obj.alarmTime = null;
    }
    Notion_arr.push(NewData_obj);
    console.log(Notion_arr);
}
//페이지가 로드되거나 새로운 데이터가 추기될때
function makeNotionContent(){//Notion Content Div를 생성하는 함수
    
}

//makeNoitonContent()함수가 실행되기 전 만들어진 div가 있다면
function saveNotionContent(){//기존 div content에 입력된 정보를 업데이트시키는 함수
    
}
function delNotionContent(div_id){//div content를 다 제거하는 함수
    //하나만 제거할땐 delNotionContent(div_id); 이용
    //모두 제거할땐 for 반복문으로 Content Area에 존재하는 div Content 삭제
}

/*
if 새로운 데이터가 생성된다면?
    saveNotionContent();
    delNotionContent();
    makeNotionContent();

if 페이지가 처음 로드된다면? 
    makeNoitionContent();
*/