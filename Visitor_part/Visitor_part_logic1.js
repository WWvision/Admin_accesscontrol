var VisitorList = [
    { key: "김승주/991001", type: 1, value: "주소1", count: 0 },
    { key: "김승주/881001", type: 2, value: "차량2/차량색2/주소2/전화번호2", count: 0 },
    { key: "권세웅/771001", type: 3, value: "차량3/차량색3/주소3/전화번호3", count: 0 },
    { key: "박훈서/661001", type: 2, value: "차량4/차량색4/주소4/전화번호4", count: 0 },
    { key: "기상민/551001", type: 1, value: "차량5/차량색5/주소5/전화번호5", count: 0 },
    { key: "김승준/441001", type: 4, value: "차량6/차량색6/주소6/전화번호6", count: 0 }
];
//1: 고정출입자  / 2: 출입신청된 민간인 / 3:출입신청이 안된 민간인 / 4: 타부대 / 
var exp_name = new RegExp("[가-힣]{2,4}", "g");

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
    div_val.innerHTML = "";
}

function selectVisitor(index){//선택된 민간인 목록에 추가
    let parent = document.getElementById("VisitorsInfo");
    let Active_Child=0;
    for(let i=0;i< parent.children.length; i++){
        if(parent.children[i].style.display != "none"){
            Active_Child++;
        }
    }
    if(Active_Child < 5){
        let child = document.createElement('div');
        child.setAttribute('id', eval("'VisitorName" + parent.children.length + "'"));
            let Btn0 = document.createElement('input');
            Btn0.setAttribute('type', 'button');
            Btn0.setAttribute('id', eval("'Vst_Name" + parent.children.length + "'"));
            Btn0.setAttribute('class', 'Vst_Name');
            Btn0.setAttribute('value', eval("'" + VisitorList[index].key + "'"));
            child.appendChild(Btn0);
            let Btn1 = document.createElement('input');
            Btn1.setAttribute('type', 'text');
            Btn1.setAttribute('id', eval("'Vst_Info" + parent.children.length + "'"));
            Btn1.setAttribute('class','Vst_Info');
            Btn1.setAttribute('value', eval("'" + VisitorList[index].value + "'"));
            child.appendChild(Btn1);
            let Btn2 = document.createElement('input');
            Btn2.setAttribute('type', 'button');
            Btn2.setAttribute('class', 'deleteBtn');
            Btn2.setAttribute('value', 'X');
            Btn2.setAttribute('onclick', eval("'deleteInfo(`VisitorName" + parent.children.length + "`)'"));
            child.appendChild(Btn2);
        parent.appendChild(child);
    } else {
        alert("더 이상 목록에 추가 할수 없습니다! 새로 추가해주세요");
    }
}
function AddNewVisitor(){//등록되지 않은 민간인 임시로 목록에 추가
    let parent = document.getElementById("VisitorsInfo");
    let Active_Child=0;
    for(let i=0;i< parent.children.length; i++){
        if(parent.children[i].style.display != "none"){
            Active_Child++;
        }
    }
    if(Active_Child < 5){
        let child = document.createElement('div');
        child.setAttribute('id', eval("'VisitorName" + parent.children.length + "'"));
            let Btn0 = document.createElement('input');
            Btn0.setAttribute('type', 'text');
            Btn0.setAttribute('id', eval("'Vst_Name" + parent.children.length + "'"));
            Btn0.setAttribute('class', 'Vst_Name');
            Btn0.setAttribute('placeholder', '이름/생년월일');
            Btn0.setAttribute('style', 'margin-left: 14px;width: 116px;');
            child.appendChild(Btn0);
            let Btn1 = document.createElement('input');
            Btn1.setAttribute('type', 'text');
            Btn1.setAttribute('id', eval("'Vst_Info" + parent.children.length + "'"));
            Btn1.setAttribute('class', 'Vst_Info');
            Btn1.setAttribute('placeholder', '차량정보/주소/전화번호');
            child.appendChild(Btn1);
            let Btn2 = document.createElement('input');
            Btn2.setAttribute('type', 'button');
            Btn2.setAttribute('class', 'deleteBtn');
            Btn2.setAttribute('value', 'X');
            Btn2.setAttribute('onclick', eval("'deleteInfo(`VisitorName" + parent.children.length + "`)'"));
            child.appendChild(Btn2);
        parent.appendChild(child);
    } else {
        alert("더 이상 목록에 추가 할수 없습니다! 새로 추가해주세요");
    }
}

function deleteInfo(div_id){
    document.getElementById(div_id).style.display = "none";
}

function sendData(){//민간인들 상세정보와 용무 특이사항을 적고 제출을 누르면 함수 실행
    //입력되어있는 정보들을 불러와 콘텐트Div에 출력
    //삭제처리되어있는 div(숨겨진 div)는 .style.display 상태가 none인것들은 불러들이는 목록에서 제외
    let Visitor_Element = document.getElementById("VisitorsInfo");//하위 요소에 방문자 정보들이 적혀 있는 div
    let BundleData = {
        Bs: "",
        Remark: "",
        VisitorInfo: []
    }; //방문자 목록에 있는 데이터들을 저장하기 위함

    for(let count=0; count < Visitor_Element.children.length; count++){
        let Vst_Element = document.getElementById("VisitorName" + count);
        if(Vst_Element.style.display != "none"){//삭제처리된 div를 제외하고 데이터를 받아옴 
            let TempArr = [];
            TempArr.push(document.getElementById("Vst_Name" + count).value);//Vst_Name0의 value: 이름/생년월일
            TempArr.push(document.getElementById("Vst_Info" + count).value);//Vst_Info0의 value: 차량/주소/전화번호 등
            //TempArr : ["이름/생년월일", "차량/주소/전화번호 등"]
            console.log(TempArr);
            BundleData.VisitorInfo.push(TempArr);
        }
    }
    BundleData.Bs = document.getElementById("VisitorBusiness").value;
    BundleData.Remark = document.getElementById("VisitorRemark").value;
    createContent(BundleData);
    clearVisitorInfo();
}
function clearVisitorInfo(){
    document.getElementById("VisitorsInfo").innerHTML = "";//이전 입력 데이터 초기화
    document.getElementById("VisitorSend_Div").innerHTML = "";//이전 입력 데이터 초기화& 삭제
    let parent = document.getElementById("VisitorSend_Div");//다시 입력폼 만들기
    let btn1 = document.createElement('input');
    btn1.setAttribute('type', 'text');
    btn1.setAttribute('id', 'VisitorBusiness');
    btn1.setAttribute('placeholder', '용무');
    parent.appendChild(btn1);
    let btn2 = document.createElement('input');
    btn2.setAttribute('type', 'text');
    btn2.setAttribute('id', 'VisitorRemark');
    btn2.setAttribute('placeholder', '특이사항');
    parent.appendChild(btn2);
    let btn3 = document.createElement('input');
    btn3.setAttribute('type', 'button');
    btn3.setAttribute('id', 'SubmitBtn');
    btn3.setAttribute('value', '제출하기');
    btn3.setAttribute('onclick', 'sendData()');
    parent.appendChild(btn3);

    document.getElementById("Visitor_Input_Area").style.display = "none";//제출폼도 닫기
}

function createContent(Obj){//민간인 입퇴영 현황을 나타내는 함수
    let parent = document.getElementById("Content_Box");
    let child_Count = parent.children.length - 1;//div_title은 자식카운트에서 제외
    let child = document.createElement('div');
    child.setAttribute('id', eval("'Content" + child_Count + "'"));
    child.setAttribute('class', 'Content_style');
    child.setAttribute('style', 'height:120px;');
        let TypeBar = document.createElement('div');
        TypeBar.setAttribute('id', eval("'Content" + child_Count + "_TypeBar'"));
        TypeBar.setAttribute('class', 'Content_TypeBar_style');
            let DelBtn = document.createElement('input');
            DelBtn.setAttribute('type', 'button');
            DelBtn.setAttribute('class', 'deleteBtn');
            DelBtn.setAttribute('value', 'X');
            //onclick 필요
            TypeBar.appendChild(DelBtn);
            let ChgBtn = document.createElement('input');
            ChgBtn.setAttribute('type', 'button');
            ChgBtn.setAttribute('class', 'changeBtn');
            ChgBtn.setAttribute('value', '변경사항 추가');
            ChgBtn.setAttribute('onclick', eval("'ChangeBtn(`Content" + child_Count + "`)'"));
            TypeBar.appendChild(ChgBtn);
        child.appendChild(TypeBar);

        let Body = document.createElement('div');
        Body.setAttribute('id', eval("'Content" + child_Count + "_Body'"));//Content1_Body
        Body.setAttribute('class', 'Content_Body');
            let TypeBtn = document.createElement('div');
            TypeBtn.setAttribute('id', eval("'Content" + child_Count + "_TypeBtn'"));//Content1_TypeBtn
            TypeBtn.setAttribute('class', 'TypeBtn');
                let TypeBtn1 = document.createElement('input');
                TypeBtn1.setAttribute('type', 'button');
                TypeBtn1.setAttribute('id', eval("'Content" + child_Count + "_ComingBtn'"));
                TypeBtn1.setAttribute('value', '입영');
                TypeBtn1.setAttribute('style', 'margin-top: 22px;');
                TypeBtn1.setAttribute('onclick', eval("'Coming(`Content" + child_Count + "`)'"));
                TypeBtn.appendChild(TypeBtn1); 
                let Enter = document.createElement('br');
                TypeBtn.appendChild(Enter);

                let TypeBtn2 = document.createElement('input');
                TypeBtn2.setAttribute('type', 'button');
                TypeBtn2.setAttribute('id', eval("'Content" + child_Count + "_GoingBtn'"));
                TypeBtn2.setAttribute('value', '퇴영');
                TypeBtn2.setAttribute('onclick', eval("'Going(`Content" + child_Count + "`)'"));
                TypeBtn.appendChild(TypeBtn2);
            Body.appendChild(TypeBtn);
            
            let NameCon = document.createElement('div');
            NameCon.setAttribute('id', eval("'Content" + child_Count + "_NameCon'"));//Content1_NameCon
            NameCon.setAttribute('class', 'Body_NameCon');
            for(let i=0; i < Obj.VisitorInfo.length; i++){
                let Inp = document.createElement('input');
                Inp.setAttribute('type', 'button');
                Inp.setAttribute('id', eval("'Content" + (child_Count+1) + "_Name" + i + "'"));//Content1_Name1
                Inp.setAttribute('class', 'NameCon_style');
                let VstName_exp = Obj.VisitorInfo[i][0].match(exp_name);
                Inp.setAttribute('value', eval("'" + VstName_exp + "'"));// 이름/생년월일
                Inp.setAttribute('onclick', eval("'Visitor(`" + Obj.VisitorInfo[i][0] + "`)'"));
                NameCon.appendChild(Inp);
            }
            Body.appendChild(NameCon);
            let Bs = document.createElement('input');
            Bs.setAttribute('type', 'text');
            Bs.setAttribute('id', eval("'Content"+ child_Count + "_Bs'"));
            Bs.setAttribute('class', 'Content_Bs_style');
            Bs.setAttribute('value', eval("'" + Obj.Bs + "'"));
            Body.appendChild(Bs);
            let Remark = document.createElement('input');
            Remark.setAttribute('type', 'text');
            Remark.setAttribute('id', eval("'Content" + child_Count + "_Remark'"));
            Remark.setAttribute('class', 'Content_Remark_style');
            Remark.setAttribute('value', eval("'" + Obj.Remark + "'"));
            Body.appendChild(Remark);
        child.appendChild(Body);
    parent.appendChild(child);
}

function Coming(div_id){
    //Coming('Content1') : 해당 버튼을 누르면 해당 시간을 value로 표시하고 ContentBar에 입영 색깔을 입히고
    //입력되어있는 정보들을 바탕으로 Visitor_History 배열에 기록을 남긴다.
    document.getElementById(div_id + "_TypeBar").style.backgroundColor = "lightgreen";
    let BtnElem = document.getElementById(div_id + "_ComingBtn");
    let times = new Date().toLocaleTimeString('ko-kr');
    BtnElem.value = "입영: " + times;
    //AddHistoryList();//히스토리리스트에 올리는건데 어떻게 올릴지 고민
}
function Going(div_id){
    //Going('Content1') : 해당 버튼을 누르면 해당 시간을 value로 표시하고 ContentBar에 입영 색깔을 입히고
    //입력되어있는 정보들을 바탕으로 Visitor_History 배열에 기록을 남긴다.
    document.getElementById(div_id + "_TypeBar").style.backgroundColor = "pink";
    let BtnElem = document.getElementById(div_id + "_GoingBtn");
    let times = new Date().toLocaleTimeString('ko-kr');
    BtnElem.value = "퇴영: " + times;
    //AddHistoryList();//히스토리리스트에 올리는건데 어떻게 올릴지 고민
}

function ChangeBtn(Content_Id){
    let parentContent = document.getElementById(Content_Id);
    let parentHeight = parentContent.style.height;//현재 추가될 콘텐트의 전체 크기
    let childCount = parentContent.childNodes;//가장 기본일때 2이고 그 이상은 자식 요소 갯수
    let is_make = false;
    switch(parentHeight){
        case "120px"://parent 1개
            parentContent.style.height = "226px";//child 1개 추가
            is_make = true;
            break;
        case "226px"://parent 1개 child 1개
            parentContent.style.height = "332px";//child 1개 추가
            is_make = true;
            break;
        case "332px"://parent 1개 child 2개
            parentContent.style.height = "438px";//child 1개 추가
            is_make = true;
            break;
        default: //그 이외 것들
            alert('더 이상 추가 할 수 없습니다!');//디자인상 그냥 자식 요소 3개 이상 막음
            // 더 추가하고 싶으면 case 항목 늘리면 됨
    }
    
    if(is_make){
        let child = document.createElement('div');
        let child_id = "Child" + (childCount-1);//Child0
        child.setAttribute('id', eval("'" + Content_Id + "_" + child_id + "'"));//Content0_Child0
        child.setAttribute('class', 'Child_Content');
            let child_TypeBar = document.createElement('div');
            child_TypeBar.setAttribute('id', eval("'" + child_id + "_TypeBar'"));
            child_TypeBar.setAttribute('class', 'Child_TypeBar');
                let delBtn = document.createElement('input');
                delBtn.setAttribute('type', 'button');
                delBtn.setAttribute('class', 'deleteBtn');
                delBtn.setAttribute('value', 'X');
                //onclick 필요
                child_TypeBar.appendChild(delBtn);
                let ChgBtn = document.createElement('input');
                ChgBtn.setAttribute('type', 'button');
                ChgBtn.setAttribute('class', 'changeBtn');
                ChgBtn.setAttribute('value', '저장하기');
                //onclick 필요
                child_TypeBar.appendChild(ChgBtn);
            child.appendChild(child_TypeBar);

            let child_TypeBtn = document.createElement('div');
            child_TypeBtn.setAttribute('id', eval("'" + child_id + "_TypeBtn'"));
            child_TypeBtn.setAttribute('class', 'Child_TypeBtn');
                let ComeBtn = document.createElement('input');
                ComeBtn.setAttribute('type', 'button');
                ComeBtn.setAttribute('value', '입영');
                ComeBtn.setAttribute('onclick', eval("'Coming(`" + Content_Id + "_" + child_id + "`)'"));
                ComeBtn.setAttribute('style', 'margin-top: 15px;');
                child_TypeBtn.appendChild(ComeBtn);
                
                let ChildEnter = document.createElement('br');
                child_TypeBtn.appendChild(ChildEnter);

                let GoBtn = document.createElement('input');
                GoBtn.setAttribute('type', 'button');
                GoBtn.setAttribute('value', '퇴영');
                GoBtn.setAttribute('onclick', eval("'Going(`" + Content_Id + "_" + child_id + "`)'"));
                child_TypeBtn.appendChild(GoBtn);
            child.appendChild(child_TypeBtn);

            let childNameDiv = document.createElement('div');
            childNameDiv.setAttribute('id', eval("'" + child_id + "_NameCon'"));
            childNameDiv.setAttribute('class', 'Child_NameCon');
                let defName = document.createElement('input');
                defName.setAttribute('type', 'text');
                defName.setAttribute('id', eval("'" + child_id + "_Name1'"));
                defName.setAttribute('class', 'Child_Name_style');
                defName.setAttribute('placeholder', '이름');
                childNameDiv.appendChild(defName);
            child.appendChild(childNameDiv);

            let childNameBtn = document.createElement('div');
            childNameBtn.setAttribute('id', eval("'" + child_id + "_NameBtn'"));
            childNameBtn.setAttribute('class', 'Child_NameBtn_Div');
                let AddName = document.createElement('input');
                AddName.setAttribute('type', 'button');
                AddName.setAttribute('class', 'Child_NameBtn');
                AddName.setAttribute('value', '추가하기');
                AddName.setAttribute('onclick', eval("'AddChildName(`" + child_id + "_NameCon'"));//AddChildName('Child1_NameCon')
                AddName.setAttribute('style', 'margin-bottom: 1px;');
                childNameBtn.appendChild(AddName);
                let DelName = document.createElement('input');
                DelName.setAttribute('type', 'button');
                DelName.setAttribute('class', 'Child_NameBtn');
                DelName.setAttribute('value', '삭제하기');
                DelName.setAttribute('onclick', eval("'DelChildName(`" + child_id + "_NameCon'"));//DelChildName('Child1_NameCon');
                childNameBtn.appendChild(DelName);
            child.appendChild(childNameBtn);

            let Child_Bs = document.createElement('input');
            Child_Bs.setAttribute('type', 'text');
            Child_Bs.setAttribute('id', eval("'" + child_id + "_Bs'"));
            Child_Bs.setAttribute('class', 'Child_Bs_style');
            Child_Bs.setAttribute('placeholder', '용무');
            child.appendChild(Child_Bs);

            let Child_Remark = document.createElement('input');
            Child_Remark.setAttribute('type', 'text');
            Child_Remark.setAttribute('id', eval("'" + child_id + "_Remark'"));
            Child_Remark.setAttribute('class', 'Child_Remark_style');
            Child_Remark.setAttribute('placeholder', '특이사항');
            child.appendChild(Child_Remark);
        parentContent.appendChild(child); 
    }         
}
