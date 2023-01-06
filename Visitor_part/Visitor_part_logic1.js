var VisitorList = [
    { key: "김승주/991001", type: 1, value: "주소1", count: 0 },
    { key: "김승주/881001", type: 2, value: "차량2/차량색2/주소2/전화번호2", count: 0 },
    { key: "권세웅/771001", type: 3, value: "차량3/차량색3/주소3/전화번호3", count: 0 },
    { key: "박훈서/661001", type: 2, value: "차량4/차량색4/주소4/전화번호4", count: 0 },
    { key: "기상민/551001", type: 1, value: "차량5/차량색5/주소5/전화번호5", count: 0 },
    { key: "김승준/441001", type: 4, value: "차량6/차량색6/주소6/전화번호6", count: 0 }
];
//1: 고정출입자  / 2: 출입신청된 민간인 / 3:출입신청이 안된 민간인 / 4: 타부대 / 

function VisitorType(obj){//VisitorList 출입신청 타입 문자열로 변환해주는 함수
    switch(obj.type){
        case 1:
            return "고정출입자";
        case 2: 
            return "비고정출입자";
        case 3: 
            return "출입신청 X";
        case 4: 
            return "타부대/기타사항";
        default: 
            return "Error Code 404";
    }
}



var exp_name = new RegExp("[가-힣]{2,4}", "g");
function searchVisitor(){
    let InpName = document.getElementById("sendData_txt").value;//입력된 이름
    let Result_div = document.getElementById("SearchResult");

    if(Result_div.firstChild){//이전 검색기록이 존재한다면 검색표시창 초기화
        deleteSearch_div(Result_div);
    }

    //VisitorList에서 이름을 찾은 해당 객체로 검색선택창에 표시
    let isFind = false;
    console.log("검색시작");
    VisitorList.forEach((o,index) => {
        let Name_val = o.key.match(exp_name);//객체배열의 인덱스에서 이름값만 추출
        if (Name_val[0].indexOf(InpName) != -1) {//이름값에서 검색한 값에 일치하는 것이 있는지? 
            createSearch_div(o, index);
            isFind = true;
        } 
    });
    
    if(!isFind){
        let parent = document.getElementById("SearchResult");
        let child = document.createElement('input');
        child.setAttribute('type', 'button');
        child.setAttribute('class', 'result_div_style');
        child.setAttribute('value', '아무 값도 찾지 못했습니다.');
        child.setAttribute('style', 'text-align: center;');
        child.setAttribute('onclick', 'AddNewVisitor()');
        parent.appendChild(child);
    }
    //하위 SearchResult Div에 
}


function createSearch_div(obj, index){
    let parent = document.getElementById("SearchResult");
    let child = document.createElement('div');
    child.setAttribute('id', eval("'Result" + parent.children.length + "'"));
    child.setAttribute('class', 'Result_style');
        let Inp1 = document.createElement('input');
        Inp1.setAttribute('type', 'button');
        Inp1.setAttribute('class', 'result_Btn');
        Inp1.setAttribute('value', '선택');
        Inp1.setAttribute('onclick', eval("'selectVisitor(`" + index + "`)'"));
        child.appendChild(Inp1);
        let Inp2 = document.createElement('input');
        Inp2.setAttribute('type', 'text');
        Inp2.setAttribute('class', 'result_div_style');
        Inp2.setAttribute('value', eval("'" + VisitorType(obj) + "'"));
        Inp2.setAttribute('style', 'width: 120px;');
        child.appendChild(Inp2);
        let Inp3 = document.createElement('input');
        Inp3.setAttribute('type', 'text');
        Inp3.setAttribute('class', 'result_div_style');
        Inp3.setAttribute('value', eval("'" + obj.key + "'"));
        Inp3.setAttribute('style', 'width: 120px;');
        child.appendChild(Inp3);
        let Inp4 = document.createElement('input');
        Inp4.setAttribute('type', 'text');
        Inp4.setAttribute('class', 'result_div_style');
        Inp4.setAttribute('value', eval("'" + obj.value + "'"));
        Inp4.setAttribute('style', 'width: 370px;');
        child.appendChild(Inp4);
    parent.appendChild(child);
}

function deleteSearch_div(div_val){//div_val 하위 요소 모두 삭제 
    div_val.replaceChildren();
}

function selectVisitor(index){//선택된 민간인 목록에 추가
    let parent = document.getElementById("VistorsInfo");
    let child = document.createElement('div');
    child.setAttribute('id', eval("'VisitorName" + parent.children.length + "'"));
    child.setAttribute('style', 'margin-top: 5px;');
        let Btn0 = document.createElement('input');
        Btn0.setAttribute('type', 'button');
        Btn0.setAttribute('id', eval("'Vst_Name" + parent.children.length + "'"));
        Btn0.setAttribute('class', 'Vst_Name');
        Btn0.setAttribute('value', eval("'" + VisitorList[index].key + "'"));
        child.appendChild(Btn0);
        let Btn1 = document.createElement('input');
        Btn1.setAttribute('type', 'text');
        Btn1.setAttribute('id', eval("'Vname_Info" + parent.children.length + "'"));
        Btn1.setAttribute('class','Vname_Info');
        Btn1.setAttribute('value', eval("'" + VisitorList[index].value + "'"));
        child.appendChild(Btn1);
        let Btn2 = document.createElement('input');
        Btn2.setAttribute('type', 'button');
        Btn2.setAttribute('class', 'deleteBtn');
        Btn2.setAttribute('value', 'X');
        Btn2.setAttribute('onclick', eval("'deleteInfo(`VisitorName" + parent.children.length + "`)'"));
        child.appendChild(Btn2);
    parent.appendChild(child);
}
function AddNewVisitor(){//등록되지 않은 민간인 임시로 목록에 추가
    let parent = document.getElementById("VistorsInfo");
    let child = document.createElement('div');
    child.setAttribute('id', eval("'VisitorName" + parent.children.length + "'"));
    child.setAttribute('style', 'margin-top: 5px;');
        let Btn0 = document.createElement('input');
        Btn0.setAttribute('type', 'text');
        Btn0.setAttribute('id', eval("'Vst_Name" + parent.children.length + "'"));
        Btn0.setAttribute('class', 'Vst_Name');
        Btn0.setAttribute('placeholder', '이름/생년월일');
        Btn0.setAttribute('style', 'margin-left: 10px;');
        child.appendChild(Btn0);
        let Btn1 = document.createElement('input');
        Btn1.setAttribute('type', 'text');
        Btn1.setAttribute('id', eval("'Vname_Info" + parent.children.length + "'"));
        Btn1.setAttribute('placeholder', '차량정보/주소/전화번호');
        Btn1.setAttribute('style', 'width: 580px; font-size:17px;');
        child.appendChild(Btn1);
        let Btn2 = document.createElement('input');
        Btn2.setAttribute('type', 'button');
        Btn2.setAttribute('class', 'deleteBtn');
        Btn2.setAttribute('value', 'X');
        Btn2.setAttribute('onclick', eval("'deleteInfo(`VisitorName" + parent.children.length + "`)'"));
        child.appendChild(Btn2);
    parent.appendChild(child);
}

function deleteInfo(div_id){
    document.getElementById(div_id).style.display = "none";
}

function sendData(){//민간인들 상세정보와 용무 특이사항을 적고 제출을 누르면 함수 실행
    //입력되어있는 정보들을 불러와 콘텐트Div에 출력
    //삭제처리되어있는 div(숨겨진 div)는 .style.display 상태가 none인것들은 불러들이는 목록에서 제외

    

}