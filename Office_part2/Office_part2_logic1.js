var exp_name = new RegExp("[가-힣]{2,4}", "g");

var OfficerList = [
    { "position": "인턴","name": "최모씨", "car": "승용차1", "otherCar": [] },
    { "position": "대리","name": "오모씨", "car": "승용차2", "otherCar": [] },
    { "position": "과장","name": "김모씨", "car": "승용차3", "otherCar": [] },
    { "position": "부장","name": "이모씨", "car": "승용차4", "otherCar": [] },
    { "position": "경리","name": "박모씨", "car": "승용차5", "otherCar": ["승용차5-1", "승용차5-2"] }
];
function sendData(){
    let ResultArr = getData();//입력된 정보를 이름 배열로 반환
    let searchVal = ResultArr[0];//첫번째는 운전자이므로
    let ResultName = searchName(searchVal);
    let ResultPosition = searchPosition(searchVal); 
    if(ResultName != -1){//-1이면 찾지 못했음
        //이름에서 찾았음
        console.log("이름에서 찾았습니다!  차량번호는: " + OfficerList[ResultName].car);
    }else if(ResultPosition != -1){//-1이면 찾지 못했음
        //직책에서 찾았음
        console.log("직책에서 찾았습니다!  차량번호는: " + OfficerList[ResultPosition].car);
    }else {//아무값도 찾지 못했으므로 예외처리
        console.log("아무값도 찾지 못했습니다 입력한 정보를 다시 확인해주세요");
    }
    
}

function getData(){//textarea에 값을 입력하면 배열 형태로 변환하는 함수
    let txtVal = document.getElementById("sendData_txt").value;
    return txtVal.match(exp_name);
}
function searchName(NameVal){//OfficerList배열에 NameVal 해당하는 값이 있는지 찾고 찾으면 해당 정보 리턴
    let ArrIndex =  OfficerList.findIndex(i => i.name == NameVal); 
    return ArrIndex;
}
function searchPosition(PositionVal){//OfficerList배열에 PositionVal 해당하는 값이 있는지 찾고 있으면 해당 정보 리턴
    let ArrIndex =  OfficerList.findIndex(i => i.position == PositionVal); 
    return ArrIndex;
}
