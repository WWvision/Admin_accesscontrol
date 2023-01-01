var exp_name = new RegExp("[가-힣]{2,4}", "g");
var ResultArr;
var OfficerList = [
    { "position": "인턴","name": "최모씨", "car": "승용차1", "otherCar": [] },
    { "position": "대리","name": "오모씨", "car": "승용차2", "otherCar": [] },
    { "position": "과장","name": "김모씨", "car": "승용차3", "otherCar": [] },
    { "position": "부장","name": "이모씨", "car": "승용차4", "otherCar": [] },
    { "position": "경리","name": "박모씨", "car": "승용차5", "otherCar": ["승용차5-1", "승용차5-2"] }
];

var GoWorkIndex = 0, OffWorkIndex = 0;
function sendData(){
    ResultArr = getData();//입력된 정보를 이름 배열로 반환
    let searchVal = ResultArr[0][0];//첫번째는 운전자이므로
    let ResultName = searchName(searchVal);
    let ResultPosition = searchPosition(searchVal); 
    if(ResultName != -1){//-1이면 찾지 못했음
        //이름에서 찾았음
        //console.log("이름에서 찾았습니다!  차량번호는: " + OfficerList[ResultName].car);
        //차량정보, 입력받은배열, 생성할 콘텐트 인덱스, 출퇴근 
        if(ResultArr[1]){//true면 퇴근
            createOffWork(OfficerList[ResultName].car, ResultArr[0], OffWorkIndex);
        } else {//false면 출근
            createGoWork(OfficerList[ResultName].car, ResultArr[0], GoWorkIndex);
        }
        
    }else if(ResultPosition != -1){//-1이면 찾지 못했음
        //직책에서 찾았음
        //console.log("직책에서 찾았습니다!  차량번호는: " + OfficerList[ResultPosition].car);
        
        if(ResultArr[1]){//퇴근
            createOffWork(OfficerList[ResultName].car, ResultArr[0], OffWorkIndex);
        } else {//출근
            createGoWork(OfficerList[ResultName].car, ResultArr[0], GoWorkIndex);
        }
    }else {//아무값도 찾지 못했으므로 예외처리
        console.log("아무값도 찾지 못했습니다 입력한 정보를 다시 확인해주세요");
    }
    
}

function getData(){//textarea에 값을 입력하면 배열 형태로 변환하는 함수
    let txtVal = document.getElementById("sendData_txt").value;//배열 0번째 : [김모씨, 김승주]
    let typeVal = document.getElementById("BtnChecked").checked;//배열 1번째 : true false
    return [txtVal.match(exp_name), typeVal];//[이름값이 들어있는 배열, 출퇴근]
}
function searchName(NameVal){//OfficerList배열에 NameVal 해당하는 값이 있는지 찾고 찾으면 해당 정보 리턴
    let ArrIndex =  OfficerList.findIndex(i => i.name == NameVal); 
    return ArrIndex;
}
function searchPosition(PositionVal){//OfficerList배열에 PositionVal 해당하는 값이 있는지 찾고 있으면 해당 정보 리턴
    let ArrIndex =  OfficerList.findIndex(i => i.position == PositionVal); 
    return ArrIndex;
}

function createGoWork(carInfo, OccupantArr, index){
    let Content_Area = document.getElementById("GoWork_Box");
    let ContentDiv = document.createElement("div");
    ContentDiv.setAttribute("id", eval("'GoWork_Content" + index + "'"));
    ContentDiv.setAttribute("class", "OfficeP2_Content");
    ContentDiv.setAttribute("style", "background-color: white;");

        let Content_msg = document.createElement("div");
        Content_msg.setAttribute("style", "font-weight: bold;");
        //나중에 Content_msg에 innerText = 차종, 차량번호; 
        //만약 차량 또는 입력정보에 문제가 있다면
        //if 문제 있을시 > 해당 문제 메세지
        //<span style="color: red; margin-left:15px;"> !차량정보가 없습니다</span> 형식으로 표현

            let div1 = document.createElement('span');
            div1.setAttribute("id", eval("'GoWork_Content" + index + "_msg'"));
            div1.setAttribute('class', 'Content_msg');
            Content_msg.appendChild(div1);

            let btn1 = document.createElement('input');
            btn1.setAttribute("type", "button");
            btn1.setAttribute("class", "CloseBtn_style");
            btn1.setAttribute("value", "X");
            btn1.setAttribute("style", "float:right");
            btn1.setAttribute("onclick", eval("'DeleteContent(GoWork_Content" + index + ")'"));
            console.log("실행");
            Content_msg.appendChild(btn1);

            let btn2 = document.createElement("input");
            btn2.setAttribute("type", "button");
            btn2.setAttribute("class", "CloseBtn_style");//클래스명, css값 나중에 꼭 바꾸기 
            btn2.setAttribute("value", "변경하기");
            btn2.setAttribute("style", "float:right");
            btn2.setAttribute("onclick", eval("'ChangeContent(GoWork_Content" + index + ")'"));
            Content_msg.appendChild(btn2);

        ContentDiv.appendChild(Content_msg);
        
        let ContentTime = document.createElement("div");
        ContentTime.setAttribute("class", "ContentTime_style");
        ContentTime.setAttribute('style', 'width: 130px; margin-top:14px;');
            let div2 = document.createElement('span');
            div2.setAttribute('id', eval("'GoWork_Content" + index + "_time'"));//GoWork_Content0_time
            div2.setAttribute('style', 'width: 100px;');
            ContentTime.appendChild(div2);
        ContentDiv.appendChild(ContentTime);

        let Inp1 = document.createElement("input");
        Inp1.setAttribute("type", "button");
        Inp1.setAttribute("class", "Content_InpBtn");
        Inp1.setAttribute("id", eval("'Content" + index + "_Driver'"));
        Inp1.setAttribute("value", eval("'" + OccupantArr[0] + "'"));//객체배열 아니고 그냥 배열임
        Inp1.setAttribute('style', 'width: 100px;');
        let func_val1 = 'copyClipBoard("자차/동승(간부' + (OccupantArr.length - 1) + ')/통합막사/출근")';  
        Inp1.setAttribute("onclick", eval("'" +  func_val1 + "'"));//copyClipBoard('동승(간부3)/퇴근');
        ContentDiv.appendChild(Inp1);

        for(let num=1; num < OccupantArr.length ;num++){
            let Inp2 = document.createElement("input");
            Inp2.setAttribute("type", "button");
            Inp2.setAttribute("class", "Content_InpBtn");
            Inp2.setAttribute("id", eval("'Content" + index + "_passenger" + num + "'"));//Content0_passenger1
            Inp2.setAttribute("value", eval("'" + OccupantArr[num] + "'"));//동승자 이름
            Inp2.setAttribute('style', 'width: 100px');
            let func_val2 = 'copyClipBoard("동승(' + carInfo + ')/통합막사/출근")';
            Inp2.setAttribute("onclick", eval("'" + func_val2 + "'"));
            ContentDiv.appendChild(Inp2);
        }

    Content_Area.appendChild(ContentDiv);

    let Today_times = new Date();
    let Hours = Today_times.getHours();
    let Mins = Today_times.getMinutes();
    if(Mins < 10){
        Mins = "0" + Mins;
    }
    document.getElementById(eval("'GoWork_Content" + index + "_msg'")).innerText = carInfo;
    document.getElementById(eval("'GoWork_Content" + index + "_time'")).innerText = "출근" + Hours + Mins; 
    GoWorkIndex++;
} 


function createOffWork(carInfo, OccupantArr, index){
    let Content_Area = document.getElementById("OffWork_Box");
    let ContentDiv = document.createElement("div");
    ContentDiv.setAttribute("id", eval("'OffWork_Content" + index + "'"));
    ContentDiv.setAttribute("class", "OfficeP2_Content");
    ContentDiv.setAttribute("style", "background-color: white;");

        let Content_msg = document.createElement("div");
        Content_msg.setAttribute("style", "font-weight: bold;");
        //나중에 Content_msg에 innerText = 차종, 차량번호; 
        //만약 차량 또는 입력정보에 문제가 있다면
        //if 문제 있을시 > 해당 문제 메세지
        //<span style="color: red; margin-left:15px;"> !차량정보가 없습니다</span> 형식으로 표현

            let div1 = document.createElement('span');
            div1.setAttribute("id", eval("'OffWork_Content" + index + "_msg'"));
            div1.setAttribute('class', 'Content_msg');
            div1.setAttribute('name', 'naming');
            Content_msg.appendChild(div1);

            let btn1 = document.createElement('input');
            btn1.setAttribute("type", "button");
            btn1.setAttribute("class", "CloseBtn_style");
            btn1.setAttribute("value", "X");
            btn1.setAttribute("style", "float:right");
            btn1.setAttribute("onclick", eval("'DeleteContent(OffWork_Content" + index + ")'"));
            Content_msg.appendChild(btn1);

            let btn2 = document.createElement("input");
            btn2.setAttribute("type", "button");
            btn2.setAttribute("class", "CloseBtn_style");//클래스명, css값 나중에 꼭 바꾸기 
            btn2.setAttribute("value", "변경하기");
            btn2.setAttribute("style", "float:right");
            btn2.setAttribute("onclick", eval("'ChangeContent(OffWork_Content" + index + ")'"));
            Content_msg.appendChild(btn2);

        ContentDiv.appendChild(Content_msg);
        
        let ContentTime = document.createElement("div");
        ContentTime.setAttribute("class", "ContentTime_style");
        ContentTime.setAttribute('style', 'width: 130px; margin-top:14px;');
            let div2 = document.createElement('span');
            div2.setAttribute('id', eval("'OffWork_Content" + index + "_time'"));//OffWork_Content0_time
            div2.setAttribute('style', 'width: 100px;');
            div2.setAttribute('name', 'naming');
            ContentTime.appendChild(div2);
        ContentDiv.appendChild(ContentTime);

        let Inp1 = document.createElement("input");
        Inp1.setAttribute("type", "button");
        Inp1.setAttribute("class", "Content_InpBtn");
        Inp1.setAttribute("id", eval("'Content" + index + "_Driver'"));
        Inp1.setAttribute("value", eval("'" + OccupantArr[0] + "'"));//객체배열 아니고 그냥 배열임
        Inp1.setAttribute('style', 'width: 100px;');
        Inp1.setAttribute('name', 'naming');
        let func_val1 = 'copyClipBoard("자차/동승(간부' + (OccupantArr.length - 1) + ')/퇴근")';  
        Inp1.setAttribute("onclick", eval("'" +  func_val1 + "'"));//copyClipBoard('동승(간부3)/퇴근');
        ContentDiv.appendChild(Inp1);

        for(let num=1; num < OccupantArr.length ;num++){
            let Inp2 = document.createElement("input");
            Inp2.setAttribute("type", "button");
            Inp2.setAttribute("class", "Content_InpBtn");
            Inp2.setAttribute("id", eval("'Content" + index + "_passenger" + num + "'"));//Content0_passenger1
            Inp2.setAttribute("value", eval("'" + OccupantArr[num] + "'"));//동승자 이름
            Inp2.setAttribute('style', 'width: 100px');
            Inp2.setAttribute('name', 'naming');
            let func_val2 = 'copyClipBoard("동승(' + carInfo + ')/퇴근")';
            Inp2.setAttribute("onclick", eval("'" + func_val2 + "'"));
            ContentDiv.appendChild(Inp2);
        }

    Content_Area.appendChild(ContentDiv);

    let Today_times = new Date();
    let Hours = Today_times.getHours();
    let Mins = Today_times.getMinutes();
    if(Mins < 10){
        Mins = "0" + Mins;
    }
    document.getElementById(eval("'OffWork_Content" + index + "_msg'")).innerText = carInfo;
    document.getElementById(eval("'OffWork_Content" + index + "_time'")).innerText = "퇴근" + Hours + Mins; 
    OffWorkIndex++;
}

function ChangeContent(div_id, index){
    
}

// document.getElementById("GoWork_Content0_msg").innerText    "승용차3"
// document.getElementById("GoWork_Content0_time").innerText   "출근2328"
// document.getElementById("Content0_Driver").value            "김모씨"
// document.getElementById("Content0_passenger1").value        "김태민"
// document.getElementById("Content0_passenger2").value        "권세웅"

// document.getElementsByName("naming")[0].innerText   "승용차3"
// document.getElementsByName("naming")[1].innerText   "퇴근2340"
// document.getElementsByName("naming")[2].value       "김모씨"
// document.getElementsByName("naming")[3].value       "김승주"
// document.getElementsByName("naming")[4].value       "김태민"
// document.getElementsByName("naming")[5].value       "권세웅"