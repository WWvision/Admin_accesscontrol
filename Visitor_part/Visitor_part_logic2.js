function toggleAddVisitor(){
    let con = document.getElementById("Visitor_Input_Area");
    if(con.style.display == "none"){
        con.style.display = "block";
    }else{
        con.style.display = "none";
    }
}

function onClickModal(VisitorName) {//모달 팝업 오픈
    let Exp_Name = RegExp("[가-힣]{2,4}");
    let Name = VisitorName.match(Exp_Name);//이름값 추출 
    document.getElementById("FixedVisitor_BG").style.display ='block';
    document.getElementById("FixedVisitor_modal").style.display ='block';
    createModalTable(Name);
}   
function offClickModal() {//모달 팝업 클로즈
    document.getElementById("FixedVisitor_BG").style.display ='none';
    document.getElementById("FixedVisitor_modal").style.display ='none';
    deleteModalTable();
}

function openModal(){
    document.getElementById("Confirm_Info_Bg").style.display ='block';
    document.getElementById("Confirm_Info_modal").style.display ='block';
}
function closeModal(){
    document.getElementById("Confirm_Info_Bg").style.display ='none';
    document.getElementById("Confirm_Info_modal").style.display ='none';
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

function Visitor_ConfirmInfo(str, parent_id){//민간인 정보확인 + str : 이름/생년월일 
    //기존 저장된 정보
    document.getElementById("Modal_Section_Title").innerText = "기존 저장된 정보"
    VisitorList.forEach((o) => {
        if (o.key.indexOf(str) != -1) {//이름값에서 검색한 값에 일치하는 것이 있는지? 
            console.log(o);
            document.getElementById("form_Name").value = o.key;//key 이름/생년월일
            document.getElementById("Modal_SelectType").disabled = true;//타입선택x 보는것만 가능
            Confirm_Select(o.type);//타입 고정출입 등등
            document.getElementById("form_Info").value = o.value;//value 상세정보
            document.getElementById("form_Leader").value = o.leader;//leader px관리관
        } 
    });
    
    //현재 정보
    Confirm_CurrentData(parent_id);//현재 해당 콘텐트의 데이터 긁어오기
    document.getElementById("sendBtn").style.display = "none";//버튼 숨기기
    openModal();
}

/* [해당 민간인 정보, 해당 데이터의 VisitorList 인덱스] **/
var Present_ModalVisitor = [];

function Visitor_ChangeInfo(str, div_id, parent_id){//민간인 정보 업데이트
    document.getElementById("Modal_Section_Title").innerText = "기존 저장된 정보"
    VisitorList.forEach((o, index) => {
        if (o.key.indexOf(str) != -1) {//이름값에서 검색한 값에 일치하는 것이 있는지? 
            Present_ModalVisitor = [o,index];
            document.getElementById("form_Name").value = o.key;//key 이름/생년월일
            Confirm_Select(o.type);//타입 고정출입 등등
            document.getElementById("form_Info").value = o.value;//value 상세정보
            document.getElementById("form_Leader").value = o.leader;//leader px관리관

            document.getElementById("form_Name").readOnly = false;
            document.getElementById("form_Info").readOnly = false;
            document.getElementById("form_Leader").readOnly = false;//입력 활성화
        } 
    });
    
    Confirm_CurrentData(parent_id);//현재 해당 콘텐트의 데이터 긁어오기
    document.getElementById("sendBtn").setAttribute('onclick',eval("'ModalSendData(`" + div_id + "`,`" + parent_id + "`)'"));//ModalSendData(`Content1_Name0`, `Content0`);
    openModal();
}
function Visitor_AddInfo(str, div_id, parent_id){//민간인 신규등록
    let savedata = str + "," + div_id;
    localStorage.setItem('VisitorInfo', savedata);
    let link1 = window.open('./test.html', '_blank');
    link1.focus();
    //document.getElementById("sendBtn").setAttribute('onclick','ModalSendData("Content0")')
}

function Confirm_Select(val){//기존 정보 확인용도로만 쓸때
    switch(val){
        case "1":
            document.getElementById("SelectType1").selected = true;
            break;
        case "2":
            document.getElementById("SelectType2").selected = true;
            break;
        case "3":
            document.getElementById("SelectType3").selected = true;
            break;
        case "4":
            document.getElementById("SelectType4").selected = true;
            break;
    }
}

function Confirm_CurrentData(content){
    //동승자 표시
    let ChildCount = document.getElementById(content + "_NameCon").children.length;
    let TogetherVal= "";
    for(let i=0; i< ChildCount; i++){
        TogetherVal += document.getElementById(content + "_Name" + i).value + " ";
        //이름1 이름2 이름3
    } 
    document.getElementById("form_Together").value = TogetherVal;
    //용무 표시
    let Bs = document.getElementById(content + "_Bs").value;
    document.getElementById("form_Business").value = Bs;
    //특이사항 표시
    let special = document.getElementById(content + "_Remark").value;
    document.getElementById("form_Remark").value = special;
}

function ModalSendData(div_id, parent_id){
    let ListIndex = Present_ModalVisitor[1];//VisitorList의 index
    let Exp_name = RegExp("[가-힣]{2,4}[/][0-9]{4}");
    //입력된 데이터 체크
    let Name = document.getElementById("form_Name").value;
    let Type = document.getElementById("Modal_SelectType").value;
    let Info = document.getElementById("form_Info").value; 
    let Leader = document.getElementById("form_Leader").value;
    let is_data = true;
    let Name_check = Name.match(Exp_name);
    
    if(Name_check == null) is_data = false;//이름 확인
    if(VisitorList[ListIndex].type == '') is_data = false;
    if(VisitorList[ListIndex].value == '') is_data = false;
    if(VisitorList[ListIndex].leader == '') is_data = false;
    
    if(!is_data){
        if(Name_check == null){
            closeModal();
            alert("이름을 확인하세요!");
        }else{
            closeModal();
            alert("누락된 정보가 있습니다!");
        }
    }else {
        VisitorList[ListIndex].type = Type;
        VisitorList[ListIndex].value = Info;
        VisitorList[ListIndex].leader = Leader;

        let Elem = document.getElementById(div_id);        
        Elem.setAttribute('style', 'border: 1px solid #7DCD00;');
        Elem.setAttribute('onclick', eval("'Visitor_ConfirmInfo(`" + Name + "`,`" + parent_id +  "`)'"));//Visitor_ConfirmInfo(`김승주/991001`,`Content0`);
        closeModal();  
        alert("입력된 정보가 정상적으로 업데이트 되었습니다!");  
    }
}