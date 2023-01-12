function toggleAddVisitor(){
    let con = document.getElementById("Visitor_Input_Area");
    if(con.style.display == "none"){
        con.style.display = "block";
    }else{
        con.style.display = "none";
    }
}

function onClick(VisitorName) {//모달 팝업 오픈
    let Exp_Name = RegExp("[가-힣]{2,4}");
    let Name = VisitorName.match(Exp_Name);//이름값 추출 
    document.getElementById("FixedVisitor_BG").style.display ='block';
    document.getElementById("FixedVisitor_modal").style.display ='block';
    createModalTable(Name);
}   
function offClick() {//모달 팝업 클로즈
    document.getElementById("FixedVisitor_BG").style.display ='none';
    document.getElementById("FixedVisitor_modal").style.display ='none';
    deleteModalTable();
}

function openModal(div_id){
    document.getElementById( div_id + "_Bg").style.display ='block';
    document.getElementById( div_id + "_modal").style.display ='block';
}
function closeModal(div_id){
    document.getElementById(div_id + "_Bg").style.display ='none';
    document.getElementById(div_id + "_modal").style.display ='none';
}


var FixedVisitorArr = [
    ["김승주","사람1-2","사람1-3","사람1-4","사람1-5","사람1-6"],
    ["사람2-1","사람2-2","사람2-3","사람2-4","사람2-5","사람2-6"],
    ["사람3-1","사람3-2","사람3-3","사람3-4","사람3-5","사람3-6"],
    ["사람4-1","사람4-2","사람4-3","기상민","사람4-5","사람4-6"],
    ["사람5-1","사람5-2","사람5-3","사람5-4","사람5-5","사람5-6"],
    ["사람6-1","사람6-2","사람6-3","사람6-4","사람6-5","사람6-6"]
];

function createModalTable(Name_Val){//Name_val에 해당하는 값은 하늘색으로 표시
    let parent = document.getElementById("Modal_FixedTable");
    for(let i=0; i<FixedVisitorArr.length; i++){
        let tr = document.createElement('tr');
            let Cell1 = document.createElement('th');
            if(FixedVisitorArr[i][0] == Name_Val){
                Cell1.setAttribute('style', 'background-color: skyblue; width: 80px');
            } else 
                Cell1.setAttribute('style', 'width: 80px');
                let Cell1_txt = document.createTextNode(FixedVisitorArr[i][0]);
                Cell1.appendChild(Cell1_txt);
            tr.appendChild(Cell1);
            let Cell2 = document.createElement('th');
            if(FixedVisitorArr[i][1] == Name_Val){
                Cell2.setAttribute('style', 'background-color: skyblue; width: 80px');
            } else 
                Cell2.setAttribute('style', 'width: 80px');
                let Cell2_txt = document.createTextNode(FixedVisitorArr[i][1]);
                Cell2.appendChild(Cell2_txt);
            tr.appendChild(Cell2);
            let Cell3 = document.createElement('th');
            if(FixedVisitorArr[i][2] == Name_Val){
                Cell3.setAttribute('style', 'background-color: skyblue; width: 80px');
            } else 
                Cell3.setAttribute('style', 'width: 80px');
                let Cell3_txt = document.createTextNode(FixedVisitorArr[i][2]);
                Cell3.appendChild(Cell3_txt);
            tr.appendChild(Cell3);
            let Cell4 = document.createElement('th');//빈칸
            Cell4.setAttribute('style', 'width: 80px;');
                // let Cell4_txt = document.createTextNode(FixedVisitorArr[i][0]);
                // Cell4.appendChild(Cell4_txt);
            tr.appendChild(Cell4);
            let Cell6 = document.createElement('th');
            if(FixedVisitorArr[i][3] == Name_Val){
                Cell6.setAttribute('style', 'background-color: skyblue; width: 80px');
            } else 
                Cell6.setAttribute('style', 'width: 80px');
                let Cell6_txt = document.createTextNode(FixedVisitorArr[i][3]);
                Cell6.appendChild(Cell6_txt);
            tr.appendChild(Cell6);
            let Cell7 = document.createElement('th');
            if(FixedVisitorArr[i][4] == Name_Val){
                Cell7.setAttribute('style', 'background-color: skyblue; width: 80px');
            } else 
                Cell7.setAttribute('style', 'width: 80px');
                let Cell7_txt = document.createTextNode(FixedVisitorArr[i][4]);
                Cell7.appendChild(Cell7_txt);
            tr.appendChild(Cell7);
            let Cell8 = document.createElement('th');
            if(FixedVisitorArr[i][5] == Name_Val){
                Cell8.setAttribute('style', 'background-color: skyblue; width: 80px');
            } else 
                Cell8.setAttribute('style', 'width: 80px');
                let Cell8_txt = document.createTextNode(FixedVisitorArr[i][5]);
                Cell8.appendChild(Cell8_txt);
            tr.appendChild(Cell8);
        parent.appendChild(tr);
    }
}

function deleteModalTable(){
    let parent = document.getElementById("Modal_FixedTable");
    parent.innerHTML = "";   
}

//민간인 정보
//이름 생년월일 용무 차량정보 주소 전화번호 특이사항
//정보를 업데이트하거나 신규로 추가하면 IndexedDB에서 업데이트 시키고
//메인페이지에서도 IndexedDB에서 참조할수 있게

function Visitor_ConfirmInfo(str, div_id){//민간인 정보확인
    //str : 이름/생년월일 
    VisitorList.forEach((o,index) => {
        let Name_val = o.key.match(exp_name);//객체배열의 인덱스에서 이름값만 추출
        if (Name_val[0].indexOf(InpName) != -1) {//이름값에서 검색한 값에 일치하는 것이 있는지? 
            createSearch_div(o, index);
            isFind = true;
        } 
    });
}
function Visitor_ChangeInfo(str, div_id){//민간인 정보 업데이트
    let savedata = str + "," + div_id;
    localStorage.setItem('VisitorInfo', savedata);
    let link1 = window.open('./test.html', '_blank');
    link1.focus();
}
function Visitor_AddInfo(str, div_id){//민간인 신규등록
    let savedata = str + "," + div_id;
    localStorage.setItem('VisitorInfo', savedata);
    let link1 = window.open('./test.html', '_blank');
    link1.focus();
}