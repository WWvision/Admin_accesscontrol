var Today = document.getElementById("TodayDate_val");
var Today_times = new Date();
var year = Today_times.getFullYear();
var month = Today_times.getMonth() + 1;
var day = Today_times.getDate();
Today.setAttribute("value", year + "-" + month + "-" + day);

/** 타부대간부 입/퇴영시 생성되는 정보들을 객체 형태로 저장 / 콘텐트 세션에 표시 */
var OfficeP3_SessionArr = new Array();
/** 세션에 표시된 콘텐트와 상호작용하여 기록 생성시 객체 형태로 저장되는 히스토리 객체 배열 */
var OfficeP3_HistoryArr = new Array();
/** 세션데이터를 DB에서 불러오거나 DB에 저장하기 전 잠시 보관하는 객체 배열 > 이후 OfficeP3_SessionArr에 넣어서 사용 */
var Temporary_SessionArr = new Array();
/*function enterkey(e){
	const code = e.code;
	if(code == 'Enter'){
		Add_data();
	}
}*/

(function(){//엔터키를 인식하고 원하는 값으로 실행시켜주는 함수
	document.addEventListener('keydown', function(e){
		const keyCode = e.code;
		//console.log('pushed key ' + e.key);
	 	if(keyCode == 'Enter'){ // Enter key
			document.dispatchEvent(new KeyboardEvent('keydown', {key: 'enter'}));
			console.log("1");
			Add_data();
	  	}
	},{ once : false})
  })();

function Add_data(){
	Save_AddContent();
	Finish_AddContent();
	Start_AddContent();
}

function Start_AddContent(){
	let add_box_Area = document.getElementById("OfficeP3_Content_Input_Area");
	let Content_Inp_div = document.createElement('div');
	Content_Inp_div.setAttribute("id", "Content_Input_Div");
	Content_Inp_div.setAttribute("class", "Add_carList");

		let input1 = document.createElement('input');//이름
		input1.setAttribute('type', 'text');
		input1.setAttribute('id', 'OfficeP3_ContentInp_name');
		input1.setAttribute('class', 'div_input');
		input1.setAttribute('style', 'width: 90px;');
		input1.setAttribute('placeholder', '이름');
		input1.setAttribute("autofocus", "true");
		Content_Inp_div.appendChild(input1);

		let input2 = document.createElement('input');//소속
		input2.setAttribute('type', 'text');
		input2.setAttribute('id', 'OfficeP3_ContentInp_company');
		input2.setAttribute('class', 'div_input');
		input2.setAttribute('style', 'width: 100px;');
		input2.setAttribute('value', '소속');
		Content_Inp_div.appendChild(input2);

		let input3 = document.createElement('input');//차량정보
		input3.setAttribute('type', 'text');
		input3.setAttribute('id', 'OfficeP3_ContentInp_carInfo');
		input3.setAttribute('class', 'div_input');
		input3.setAttribute('style', 'width: 180px;');
		input3.setAttribute('value', '차종/차색/번호');
		Content_Inp_div.appendChild(input3);

		let input4 = document.createElement('input');//용무
		input4.setAttribute('type', 'text');
		input4.setAttribute('id', 'OfficeP3_ContentInp_business');
		input4.setAttribute('class', 'div_input');
		input4.setAttribute('style', 'width: 140px;');
		input4.setAttribute('value', '용무');
		Content_Inp_div.appendChild(input4);

		let input5 = document.createElement('input');//비고
		input5.setAttribute('type', 'text');
		input5.setAttribute('id', 'OfficeP3_ContentInp_remark');
		input5.setAttribute('class', 'div_input');
		input5.setAttribute('style', 'width: 170px;');
		input5.setAttribute('value', '기타사항');
		Content_Inp_div.appendChild(input5);

	add_box_Area.appendChild(Content_Inp_div);
}


function create_OfficeP3_Content(index){//OfficeP3 Content Div를 생성하는 함수
	//OfficeP3_SessionArr[index] 값을 Content_box에 Content 형식으로 Div 생성
	let Content_Area = document.getElementById("Content_box");
	let Content_div = document.createElement('div');
	Content_div.setAttribute("id", eval("'OfficeP3_Content" + index + "'"));
	Content_div.setAttribute("class", "OfficeP3_Content");
	Content_div.setAttribute("style", eval("'" + OfficeP3_SessionArr[index].style + "'"))

		let AccessBtn = document.createElement("span");
		AccessBtn.setAttribute("id", "Content_AccessBtn");
			let Btn1 = document.createElement("input");
			let Btn1_val = `Coming("OfficeP3_Content`+ index +`","coming_`+ index +`", `+ index +`)`;
			Btn1.setAttribute("type", "button");
			Btn1.setAttribute("id", eval("'coming_" + index + "'"));
			Btn1.setAttribute("onclick", eval("'" + Btn1_val + "'"));
			Btn1.setAttribute("value", eval("'" + OfficeP3_SessionArr[index].AccessCome + "'"));
			Btn1.setAttribute("style", "display:inline-block;");
			AccessBtn.appendChild(Btn1);

			let enter = document.createElement("br");
			AccessBtn.appendChild(enter);

			let Btn2 = document.createElement("input");
			let Btn2_val = `Going("OfficeP3_Content`+ index +`","going_`+ index +`", `+ index +`)`;
			Btn2.setAttribute("type", "button");
			Btn2.setAttribute("id", eval("'going_" + index + "'"));
			Btn2.setAttribute("onclick", eval("'" + Btn2_val + "'"));
			Btn2.setAttribute("value", eval("'" + OfficeP3_SessionArr[index].AccessGo + "'"));
			Btn2.setAttribute("style", "display:inline-block;");
			AccessBtn.appendChild(Btn2);
		Content_div.appendChild(AccessBtn);

		let CloseBtn = document.createElement("div");
		CloseBtn.setAttribute("id", "Content_CloseBtn");
			let Btn3 = document.createElement("input");
			let Btn3_val = `delete_OfficeP3_Content("OfficeP3_Content`+ index +`")`;
			Btn3.setAttribute("type", "button");
			Btn3.setAttribute("class", "CloseBtn_style");
			Btn3.setAttribute("onclick", eval("'" + Btn3_val + "'"));
			Btn3.setAttribute("value", "X");
			Btn3.setAttribute("style", "float: right;");
			CloseBtn.appendChild(Btn3);
		Content_div.appendChild(CloseBtn);

		let ContentInp1 = document.createElement("input");//이름
		ContentInp1.setAttribute("type", "text");
		ContentInp1.setAttribute("id", eval("'Content" + index + "_name'"));
		ContentInp1.setAttribute("class", "Content_InpStyle");
		ContentInp1.setAttribute("value", eval("'" + OfficeP3_SessionArr[index].name + "'"));
		ContentInp1.setAttribute("style", "width: 80px");
		Content_div.appendChild(ContentInp1);

		let ContentInp2 = document.createElement("input");//소속
		ContentInp2.setAttribute("type", "text");
		ContentInp2.setAttribute("id", eval("'Content" + index + "_company'"));
		ContentInp2.setAttribute("class", "Content_InpStyle");
		ContentInp2.setAttribute("value", eval("'" + OfficeP3_SessionArr[index].company + "'"));
		ContentInp2.setAttribute("style", "width: 120px");
		Content_div.appendChild(ContentInp2);

		let ContentInp3 = document.createElement("input");//차량정보
		ContentInp3.setAttribute("type", "text");
		ContentInp3.setAttribute("id", eval("'Content" + index + "_carInfo'"));
		ContentInp3.setAttribute("class", "Content_InpStyle");
		ContentInp3.setAttribute("value", eval("'" + OfficeP3_SessionArr[index].carInfo + "'"));
		ContentInp3.setAttribute("style", "width: 160px");
		Content_div.appendChild(ContentInp3);

		let ContentInp4 = document.createElement("input");//용무
		ContentInp4.setAttribute("type", "text");
		ContentInp4.setAttribute("id", eval("'Content" + index + "_business'"));
		ContentInp4.setAttribute("class", "Content_InpStyle");
		ContentInp4.setAttribute("value", eval("'" + OfficeP3_SessionArr[index].business + "'"));
		ContentInp4.setAttribute("style", "width: 140px");
		Content_div.appendChild(ContentInp4);

		let ContentInp5 = document.createElement("input");//기타사항
		ContentInp5.setAttribute("type", "text");
		ContentInp5.setAttribute("id", eval("'Content" + index + "_remark'"));
		ContentInp5.setAttribute("class", "Content_InpStyle");
		ContentInp5.setAttribute("value", eval("'" + OfficeP3_SessionArr[index].remark + "'"));
		ContentInp5.setAttribute("style", "width: 70px");
		Content_div.appendChild(ContentInp5);
	Content_Area.appendChild(Content_div);		
}

function create_OfficeP3_History(index){//타부대 입퇴영 기록 Content 생성 	
	let History_Area = document.getElementById("History_box");
	let History_Div = document.createElement("div");
	History_Div.setAttribute("id", eval("'OfficeP3_History" + index + "'"));
	if(OfficeP3_HistoryArr[index].category == '입영'){
		History_Div.setAttribute("class", "HistoryContent_Coming");
	} else if(OfficeP3_HistoryArr[index].category == '퇴영')
		History_Div.setAttribute("class", "HistoryContent_Going");

		let Cell1 = document.createElement("div");//입영 or 퇴영
		Cell1.setAttribute("class", "HistoryCell_style");
		Cell1.setAttribute("style", "width: 40px");
			let Cell1_Element = document.createElement("b");
			let Cell1_val = document.createTextNode(OfficeP3_HistoryArr[index].category);
			Cell1_Element.appendChild(Cell1_val);
			Cell1.appendChild(Cell1_Element);
		History_Div.appendChild(Cell1);

		let Cell2 = document.createElement("div");//입퇴영시간
		Cell2.setAttribute("class", "HistoryCell_style");
		Cell2.setAttribute("style", "width: 130px");
			let Cell2_Element = document.createElement("b");
			let Cell2_val = document.createTextNode(OfficeP3_HistoryArr[index].times);
			Cell2_Element.appendChild(Cell2_val);
			Cell2.appendChild(Cell2_Element);
		History_Div.appendChild(Cell2);

		let Cell3 = document.createElement("div");//이름
		Cell3.setAttribute("class", "HistoryCell_style");
		Cell3.setAttribute("style", "width: 70px");
			let Cell3_Element = document.createElement("b");
			let Cell3_val = document.createTextNode(OfficeP3_HistoryArr[index].name);
			Cell3_Element.appendChild(Cell3_val);
			Cell3.appendChild(Cell3_Element);
		History_Div.appendChild(Cell3);

		let Cell4 = document.createElement("div");//소속
		Cell4.setAttribute("class", "HistoryCell_style");
		Cell4.setAttribute("style", "width: 100px");
			let Cell4_Element = document.createElement("b");
			let Cell4_val = document.createTextNode(OfficeP3_HistoryArr[index].company);
			Cell4_Element.appendChild(Cell4_val);
			Cell4.appendChild(Cell4_Element);
		History_Div.appendChild(Cell4);

		let Cell5 = document.createElement("div");//차량정보
		Cell5.setAttribute("class", "HistoryCell_style");
		Cell5.setAttribute("style", "width: 210px");
			let Cell5_Element = document.createElement("b");
			let Cell5_val = document.createTextNode(OfficeP3_HistoryArr[index].carInfo);
			Cell5_Element.appendChild(Cell5_val);
			Cell5.appendChild(Cell5_Element);
		History_Div.appendChild(Cell5);

		let Cell6 = document.createElement("div");//용무
		Cell6.setAttribute("class", "HistoryCell_style");
		Cell6.setAttribute("style", "width: 180px");
			let Cell6_Element = document.createElement("b");
			let Cell6_val = document.createTextNode(OfficeP3_HistoryArr[index].business);
			Cell6_Element.appendChild(Cell6_val);
			Cell6.appendChild(Cell6_Element);
		History_Div.appendChild(Cell6);
	History_Area.appendChild(History_Div);
}
function Save_AddContent(){
	let Session_obj = new Object();
	Session_obj.AccessCome = "입영";
	Session_obj.AccessGo = "퇴영";
	Session_obj.style = "background-color: white;";
	Session_obj.name = document.getElementById("OfficeP3_ContentInp_name").value;
	Session_obj.company  = document.getElementById("OfficeP3_ContentInp_company").value;
	Session_obj.carInfo = document.getElementById("OfficeP3_ContentInp_carInfo").value;
	Session_obj.business = document.getElementById("OfficeP3_ContentInp_business").value;
	Session_obj.remark = document.getElementById("OfficeP3_ContentInp_remark").value;

	console.log(Session_obj);
	OfficeP3_SessionArr.push(Session_obj);
	create_OfficeP3_Content(OfficeP3_SessionArr.length - 1);
}
function Record_History(index, time_val, category_val){//입력받은 콘텐트 인덱스들의 정보들을 기록배열에 저장
	var HistoryObj = new Object;
	HistoryObj.category = category_val;
	HistoryObj.times = time_val;
	HistoryObj.name = document.getElementById(eval("'Content" + index + "_name'")).value;
	HistoryObj.company = document.getElementById(eval("'Content" + index + "_company'")).value;
	HistoryObj.carInfo = document.getElementById(eval("'Content" + index + "_carInfo'")).value;
	HistoryObj.business = document.getElementById(eval("'Content" + index + "_business'")).value;
	HistoryObj.remark = document.getElementById(eval("'Content" + index + "_remark'")).value;
	OfficeP3_HistoryArr.push(HistoryObj);
	create_OfficeP3_History(OfficeP3_HistoryArr.length - 1);
}

function Finish_AddContent(){//배차명령서 삭제
	let parent = document.getElementById("OfficeP3_Content_Input_Area");
	let child = document.getElementById("Content_Input_Div");
	parent.removeChild(child);
}
function delete_OfficeP3_Content(div_id){//배차명령서 삭제
	let parent = document.getElementById("Content_box");
	let child = document.getElementById(eval("'" + div_id + "'"));
	parent.removeChild(child);
}
function Going(div_id, button_id, index){//입퇴영 현황의 퇴영 버튼
	document.getElementById(eval("'"+div_id+"'")).style.backgroundColor = "pink";
	const btnElement = document.getElementById(eval("'"+button_id+"'"));
	const times = new Date().toLocaleTimeString('ko-kr');
	btnElement.value = "퇴영: " + times;
	Record_History(index, times, "퇴영")
};
function Coming(div_id, button_id, index){//입퇴영 현황의 입영 버튼
	document.getElementById(eval("'"+div_id+"'")).style.backgroundColor = "lightgreen";
	const btnElement = document.getElementById(eval("'"+button_id+"'"));
	const times = new Date().toLocaleTimeString('ko-kr');
	btnElement.value = "입영: " + times;
	Record_History(index, times, "입영");	
};


function autoSave_SessionData(){//페이지 세션 데이터를 저장하는 함수
	let ElmentCount = document.getElementById("Content_box").childElementCount;
	if(Temporary_SessionArr.length != 0){//저장하기전 임시 배열에 데이터가 있다면 초기화
		Temporary_SessionArr = [];
	}
	for(let g=1;g<ElmentCount;g++){//Content_box 하위 요소 갯수만큼 읽어오기
		let SessionData_obj = new Object();
		let index = g-1;
		SessionData_obj.AccessCome = document.getElementById(eval("'coming_" + index + "'")).value;
		SessionData_obj.AccessGo = document.getElementById(eval("'going_" + index + "'")).value;
		SessionData_obj.style = "background-color:" + document.getElementById(eval("'OfficeP3_Content" + index + "'")).style.backgroundColor + ";";
		SessionData_obj.name = document.getElementById(eval("'Content" + index + "_name'")).value;
		SessionData_obj.company = document.getElementById(eval("'Content" + index + "_company'")).value;
		SessionData_obj.carInfo = document.getElementById(eval("'Content" + index + "_carInfo'")).value;
		SessionData_obj.business = document.getElementById(eval("'Content" + index + "_business'")).value;
		SessionData_obj.remark = document.getElementById(eval("'Content" + index + "_remark'")).value;
		Temporary_SessionArr.push(SessionData_obj);
	}
	//IndexedDB의 OfficeP3_SessionArr Object Store에 for루프 돌려서 저장
	//저장다하면 Temporary_SessionArr은 초기화
}
function autoSave_HistoryData(){
	//OfficeP3_HistoryArr는 바로 저장 
	//IndexedDB의 OfficeP3_HistoryArr Object Store에 for루프 돌려서 저장
}
function LoadData(){//페이지가 처음실행/로드될때만 사용

	//IndexedDB에 OfficeP3_SessionArr Object Store에 데이터가 있는지 확인하고 
	//있으면 for루프 돌려서 Temporary_SessionArr에 저장했다 OfficeP3_SessionArr에 할당
	//for루프 돌려서 OfficeP3_SessionArr에 있는 정보 Content Div 형태로 화면에 출력 
	//처리 다하고 안쓰게 되면 Temporary_SessionArr 초기화

	//IndexedDB에 OfficeP3_HistoryArr Object Store에 데이터가 있는지 확인
	//있으면 for루프 돌려서 OfficeP3_HistoryArr에 불러오기
	//for루프 돌려서 OfficeP3_HistoryArr에 있는 기록들 히스토리 화면에 출력

	//날짜값은 우짬?
}
Start_AddContent();
//Content Div가 삭제되면 SessionArr에 있는 기존 정보도 초기화해야되나? > 아직까지는 상관없음