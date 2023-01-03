var exp_name = new RegExp("[가-힣]{2,4}", "g");
var ResultArr;
var OfficerList = [
    { "position": "인턴","name": "최모씨", "car": "", "otherCar": [] },
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
        //if 문제 있을시 > 해당 문제 메세지 <span style="color: red; margin-left:15px;"> !차량정보가 없습니다</span> 형식으로 표현

            let div1 = document.createElement('span');
            div1.setAttribute("id", eval("'GoWork" + index + "_msg'"));
            div1.setAttribute('class', 'Content_msg');
            div1.setAttribute('name', eval("'GoWorkName" + index + "'"));//GoWorkName0
            Content_msg.appendChild(div1);

            let btn1 = document.createElement('input');
            btn1.setAttribute("type", "button");
            btn1.setAttribute("class", "CloseBtn_style");
            btn1.setAttribute("value", "X");
            btn1.setAttribute("onclick", eval("'DeleteContent(GoWork_Content" + index + ")'"));
            btn1.setAttribute("style", "float:right");
            Content_msg.appendChild(btn1);

            let btn2 = document.createElement("input");
            btn2.setAttribute("type", "button");
            btn2.setAttribute("class", "CloseBtn_style");//클래스명, css값 나중에 꼭 바꾸기 
            btn2.setAttribute("value", "변경하기");
            btn2.setAttribute("onclick", eval("'ChangeContent(GoWork_Content" + index + ")'"));
            btn2.setAttribute("style", "float:right");
            Content_msg.appendChild(btn2);

        ContentDiv.appendChild(Content_msg);
        
        let ContentTime = document.createElement("div");
        ContentTime.setAttribute("class", "ContentTime_style");
        ContentTime.setAttribute('style', 'width: 130px; margin-top:14px;');
            let div2 = document.createElement('span');
            div2.setAttribute('id', eval("'GoWork" + index + "_time'"));//GoWork_Content0_time
            div2.setAttribute('name', eval("'GoWorkName" + index + "'"));//GoWorkName0
            div2.setAttribute('style', 'width: 100px;');
            ContentTime.appendChild(div2);
        ContentDiv.appendChild(ContentTime);

        let Inp1 = document.createElement("input");
        Inp1.setAttribute("type", "button");
        Inp1.setAttribute("id", eval("'GoWork" + index + "_Driver'"));
        Inp1.setAttribute("class", "Content_InpBtn");
        Inp1.setAttribute('name', eval("'GoWorkName" + index + "'"));//GoWorkName0
        Inp1.setAttribute("value", eval("'" + OccupantArr[0] + "'"));//객체배열 아니고 그냥 배열임
        let func_val1 = 'copyClipBoard("자차/동승(간부' + (OccupantArr.length - 1) + ')/퇴근")';  
        Inp1.setAttribute("onclick", eval("'" +  func_val1 + "'"));//copyClipBoard('동승(간부3)/퇴근');
        Inp1.setAttribute('style', 'width: 100px;');
        ContentDiv.appendChild(Inp1);

        for(let num=1; num < OccupantArr.length ;num++){
            let Inp2 = document.createElement("input");
            Inp2.setAttribute("type", "button");
            Inp2.setAttribute("id", eval("'GoWork" + index + "_passenger" + num + "'"));//Content0_passenger1
            Inp2.setAttribute("class", "Content_InpBtn");
            Inp2.setAttribute('name', eval("'GoWorkName" + index + "'"));//GoWorkName0
            Inp2.setAttribute("value", eval("'" + OccupantArr[num] + "'"));//동승자 이름
            let func_val2 = 'copyClipBoard("동승(' + carInfo + ')/퇴근")';
            Inp2.setAttribute("onclick", eval("'" + func_val2 + "'"));
            Inp2.setAttribute('style', 'width: 100px');
            ContentDiv.appendChild(Inp2);
        }

    Content_Area.appendChild(ContentDiv);

    let Today_times = new Date();
    let Hours = Today_times.getHours();
    let Mins = Today_times.getMinutes();
    if(Mins < 10){
        Mins = "0" + Mins;
    }
    document.getElementById(eval("'GoWork" + index + "_msg'")).innerText = carInfo;
    document.getElementById(eval("'GoWork" + index + "_time'")).innerText = "퇴근" + Hours + Mins; 
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
        //if 문제 있을시 > 해당 문제 메세지 <span style="color: red; margin-left:15px;"> !차량정보가 없습니다</span> 형식으로 표현
            let div1 = document.createElement('span');//차량정보 표시하는 곳
            div1.setAttribute("id", eval("'OffWork" + index + "_msg1'"));
            div1.setAttribute('class', 'Content_msg');
            div1.setAttribute('name', eval("'OffWorkName" + index + "'"));//OffWorkName0
            Content_msg.appendChild(div1);

            let div2 = document.createElement('span');//경고 메세지 표시하는 곳
            div2.setAttribute("id", eval("'OffWork" + index + "_msg2'"));
            div2.setAttribute('class', 'Content_msg');
            div2.setAttribute('style', 'color: red; margin-left: 70px;');
            Content_msg.appendChild(div2);

            let btn1 = document.createElement('input');//콘텐트 삭제 버튼
            btn1.setAttribute("type", "button");
            btn1.setAttribute("class", "CloseBtn_style");
            btn1.setAttribute("value", "X");
            btn1.setAttribute("onclick", eval("'DeleteContent(OffWork_Content" + index + ")'"));
            btn1.setAttribute("style", "float:right");
            Content_msg.appendChild(btn1);
            
            let btn2 = document.createElement("input");//변경하기 버튼
            btn2.setAttribute("type", "button");
            btn2.setAttribute('id', eval("'OffWork" + index + "_ChangeBtn'"));
            btn2.setAttribute("class", "CloseBtn_style");//클래스명, css값 나중에 꼭 바꾸기 
            btn2.setAttribute("value", "변경하기");
            let func_val0 = 'ChangeContent("OffWork_Content' + index + '","OffWorkName",' + index + ')';
            btn2.setAttribute("onclick", eval("'" + func_val0 + "'"));//ChangeContent("OffWork_Content0", "OffWork", 0);
            btn2.setAttribute("style", "float:right");
            Content_msg.appendChild(btn2);
        ContentDiv.appendChild(Content_msg);
            

        let ContentBlock =  document.createElement("div");//변경할떄 용이하게 하기 위함
        ContentBlock.setAttribute('id', eval("'OffWork_Block" + index + "'"));
            
            let ContentTime = document.createElement("div");//퇴근1052 시간 표시하는 곳
            ContentTime.setAttribute('id', eval("'OffWork" + index + "_time'"));//OffWork_Content0_time
            ContentTime.setAttribute('name', eval("'OffWorkName" + index + "'"));//OffWorkName0
            ContentTime.setAttribute("class", "ContentTime_style");
            ContentTime.setAttribute('style', 'margin-top:14px;');
            ContentBlock.appendChild(ContentTime);

            let Inp1 = document.createElement("input");//운전자 이름 표시하는 버튼
            Inp1.setAttribute("type", "button");
            Inp1.setAttribute("id", eval("'OffWork" + index + "_Driver'"));
            Inp1.setAttribute("class", "Content_InpBtn");
            Inp1.setAttribute('name', eval("'OffWorkName" + index + "'"));//OffWorkName0
            Inp1.setAttribute("value", eval("'" + OccupantArr[0] + "'"));//객체배열 아니고 그냥 배열임
            let func_val1 = 'copyClipBoard("자차/동승(간부' + (OccupantArr.length - 1) + ')/퇴근")';  
            Inp1.setAttribute("onclick", eval("'" +  func_val1 + "'"));//copyClipBoard('동승(간부3)/퇴근');
            Inp1.setAttribute('style', 'width: 100px;');
            ContentBlock.appendChild(Inp1);

            for(let num=1; num < OccupantArr.length ;num++){
                let Inp2 = document.createElement("input");//동승자 수 만큼 이름 표시하는 버튼
                Inp2.setAttribute("type", "button");
                Inp2.setAttribute("id", eval("'OffWork" + index + "_passenger" + num + "'"));//Content0_passenger1
                Inp2.setAttribute("class", "Content_InpBtn");
                Inp2.setAttribute('name', eval("'OffWorkName" + index + "'"));//OffWorkName0
                Inp2.setAttribute("value", eval("'" + OccupantArr[num] + "'"));//동승자 이름
                let func_val2 = 'copyClipBoard("동승(' + carInfo + ')/퇴근")';
                Inp2.setAttribute("onclick", eval("'" + func_val2 + "'"));
                Inp2.setAttribute('style', 'width: 100px');
                ContentBlock.appendChild(Inp2);
            }
        ContentDiv.appendChild(ContentBlock);    
    Content_Area.appendChild(ContentDiv);

    let Today_times = new Date();
    let Hours = Today_times.getHours();
    let Mins = Today_times.getMinutes();
    if(Hours < 10){
        Hours = "0" + Hours;
    }
    if(Mins < 10){
        Mins = "0" + Mins;
    }
    document.getElementById(eval("'OffWork" + index + "_msg1'")).innerText = carInfo;
    document.getElementById(eval("'OffWork" + index + "_time'")).innerText = "퇴근" + Hours + Mins; 
    OffWorkIndex++;
}
function ChangeContent(content_id, div_name, index){//ChangeContent("OffWork_Content0", "OffWorkName", 0);
    //content_id 있는 기존 데이터 싹 받아와서 배열에 저장해두고 
    let ElemData = document.getElementsByName(div_name + index);
    let ElemObj = new Object();
    let PaxArr = new Array();//Pax는 Passenger 줄임말
    for(let i=0; i < ElemData.length; i++){
        switch(i){
            case 0:
                ElemObj.carInfo = ElemData[0].innerText;//차량정보 
                break;
            case 1:
                ElemObj.times = ElemData[1].innerText;//출퇴근시간
                break;
            case 2:
                ElemObj.driver = ElemData[2].value;//운전자
                break;
            default: 
                PaxArr.push(ElemData[i].value);
        }
    }
    
    //content_id 있는 하위 콘텐트 싹다 삭제
    let parent = document.getElementById(content_id);//쟤 상위 div
	let AlterElem = document.getElementById("OffWork_Block" + index);//얘 기준으로 하위 요소 싹 삭제
	parent.removeChild(AlterElem);
    
    //Content_Block 안에 정보수정창 생성 및 저장하기 버튼으로 변경
    let name =  div_name.replace('Name', '');
    let ChangeBtn = document.getElementById(name + index  + "_ChangeBtn");
    let func_val3 = `SaveContent("` + content_id + `","` + div_name + `",` + index + `)`;
    ChangeBtn.value = "저장하기";//기존 요소를 삭제하면 변경버튼을 저장버튼으로 변환
    ChangeBtn.setAttribute("onclick", eval("'" + func_val3 + "'"));//기존 요소를 삭제하면 변경버튼을 저장버튼으로 변환
    let BlockElem = document.createElement('div');
    BlockElem.setAttribute('id', eval("'OffWork_Block" + index + "'"));
        let TimeDiv = document.createElement('div');
        TimeDiv.setAttribute('style', 'float:left; width: 130px; height: 55px;');
            let val1 = document.createElement("div");//퇴근1521 표시하는 곳
            val1.setAttribute('id', eval("'" + name + index + "_recordedTime'"));//OffWork0_recordedTime
            val1.setAttribute('class', 'ContentTime_style');
            val1.setAttribute('style', 'flaot: top');
            TimeDiv.appendChild(val1);
            let btn1 = document.createElement('input');//퇴근 시간 지정하는 곳
            btn1.setAttribute('type', 'time');
            btn1.setAttribute('name', eval("'"+ div_name + index + "'"));//OffWorkName0[0]
            btn1.setAttribute('style', 'float: bottom');
            TimeDiv.appendChild(btn1);
        BlockElem.appendChild(TimeDiv);
        
        let btn2 = document.createElement('input');//운전자 이름 입력하는 곳
        btn2.setAttribute('type', 'text');
        btn2.setAttribute('id', eval("'" + name + index + "_driver'"));//OffWork0_driver
        btn2.setAttribute('name', eval("'"+ div_name + index + "'"));//OffWorkName0[1]
        btn2.setAttribute('class', 'Change_InpBtn');
        btn2.setAttribute('value', eval("'" + ElemObj.driver + "'"));
        btn2.setAttribute('onchange', eval("'searchCar(`" + name + index + "`)'"));//searchCar(`OffWork0`)
        btn2.setAttribute('style', 'width: 100px;');
        BlockElem.appendChild(btn2);
    for(let k=0; k< PaxArr.length; k++){
        let btn3 = document.createElement('input');//동승자 이름 입력하는 곳
        btn3.setAttribute('type', 'text');
        btn3.setAttribute('name', eval("'"+ div_name + index + "'"));//OffWorkName0[2...]
        btn3.setAttribute('class', 'Change_InpBtn');
        btn3.setAttribute('value', eval("'" + PaxArr[k] + "'"));
        btn3.setAttribute('style', 'width: 100px;');
        BlockElem.appendChild(btn3);
    }
        
        let val2 = document.createElement('div');
        val2.setAttribute('class', 'operate_InpBtn');
            let addbtn = document.createElement('input');
            addbtn.setAttribute('type', 'button');
            addbtn.setAttribute('class', 'CloseBtn_style');
            addbtn.setAttribute('value', '동승자 추가');
            let func_val4 = 'addInpBtn("'+ name + '_Block' + index + '","' + div_name + index + '")';
            addbtn.setAttribute('onclick', eval("'" + func_val4 + "'"));
            addbtn.setAttribute('style', 'float: right; border:1px solid black;');
            val2.appendChild(addbtn);

            let br = document.createElement('br');
            val2.appendChild(br);

            let delbtn = document.createElement('input');
            delbtn.setAttribute('type', 'button');
            delbtn.setAttribute('class', 'CloseBtn_style');
            delbtn.setAttribute('value', '동승자 삭제');
            let func_val5 = 'delInpBtn("'+ name + '_Block' + index + '","' + div_name + index + '")';
            delbtn.setAttribute('onclick', eval("'" + func_val5 + "'"));
            delbtn.setAttribute('style', 'float:right; border:1px solid black; margin-top:2px;');
            val2.appendChild(delbtn);
        BlockElem.appendChild(val2);
    parent.appendChild(BlockElem);
    document.getElementById(name + index + "_recordedTime").innerText = ElemObj.times;
}

function delInpBtn(parent_div, div_name){
    //element.length을 기준으로 삭제 인덱스 3초과까지만 
    let nameElem = document.getElementsByName(div_name);
    if(nameElem.length > 3){
        nameElem[nameElem.length-1].remove();
    } else {
        alert("더 이상 삭제 할 수 없습니다!");
    }
}
function addInpBtn(parent_div, div_name){//addInpBtn("OffWork_Block0", "OffWorkName0")
    //element.length을 기준으로 추가, 인덱스 6이하까지만
    let parent = document.getElementById(parent_div);
    let nameElem = document.getElementsByName(div_name);
    if(nameElem.length <=6 ){
        let newBtn = document.createElement('input');//운전자 이름 입력하는 곳
        newBtn.setAttribute('type', 'text');
        newBtn.setAttribute('name', eval("'"+ div_name + "'"));//OffWorkName0[2...]
        newBtn.setAttribute('class', 'Change_InpBtn');
        newBtn.setAttribute('placeholder', eval("'동승자" + (nameElem.length-2) + "'"));
        newBtn.setAttribute('style', 'width: 100px;');
        parent.appendChild(newBtn);
    } else {
        alert("더 이상 추가 할 수 없습니다!");
    }
}

function SaveContent(content_id, div_name, index){
    //사용자가 원하는 정보를 입력하고 다시 저장하면
    //입력된 정보들을 다시 배열에 저장
    //입력된 정보가 저장되어 있는 배열로 다시 content_id 하위 콘텐트 생성 

}
function searchCar(id){//OffWork0
    let InpName = document.getElementById(id + "_driver").value;//운전자이름
    let ArrIndex = OfficerList.findIndex(i => i.name == InpName);//OfficeList에서 해당 이름값을 찾으면 찾은 인덱스 반환

    let msg1 = document.getElementById(id + "_msg1");//차량정보 표시하는 곳
    let msg2 = document.getElementById(id + "_msg2");//문제 생겼을때 메세지 표시하는 곳
    if(ArrIndex == -1){//아무값도 찾지 못한다면?
        msg1.innerText = "없는 번호";
        msg2.innerText = "해당 이름이 등록되지 않았습니다.";
    } else if(OfficerList[ArrIndex].car == ""){
        msg1.innerText = "없는 번호";
        msg2.innerText = "해당 이름이 등록되지 않았습니다.";
    } else if(OfficerList[ArrIndex].otherCar.length > 1){//아무이상 없고 운전자의 차가 두개이상일때 msg2에 select선택 생성
        let select = document.createElement('select');
        select.setAttribute('id', eval("'" + id + "_select'"));//OffWork0_select
        select.setAttribute('onchange', eval("'SelectDiv(`" + id + "`)'"));//OffWork0
        let carArr = OfficerList[ArrIndex].otherCar;
        for(let k=0; k < carArr.length; k++){
            let optionElem = document.createElement("option");
            optionElem.setAttribute('id', eval("'" + id + "_option" + k + "'"));//OffWork0_option0;
            optionElem.setAttribute('value', eval("'" + carArr[k] +"'"))
            select.appendChild(optionElem);
        }
        msg2.appendChild(select);
        //Option value title 달아주기 
        for(let i=0; i < carArr.length; i++){
            let optionName = document.getElementById(id+ "_option" + i);////OffWork0_option0;
            optionName.innerText = carArr[i];
        }
        
    }
}

function SelectDiv(div_id){//OffWork0
    let val = document.getElementById(div_id + "_select").value;
    document.getElementById(div_id + "_msg1").innerText = val;
}