var History_Count = 0;//기록에 추가된 div 카운트

function create_officerList(index){//입퇴영현황 div 생성 함수
	let OfficerList_Input_Area = document.getElementById('view_box');
	let OfficerList_div = document.createElement('div');
	//var num = "1"; num 대신에 list_index
	OfficerList_div.setAttribute("id",eval("'officerList"+index+"'")); //officerList1
	OfficerList_div.setAttribute("class","view_officerList");
	/*%%%%%if(SessionDiv_arr[index].going_btn != null)//기존 세션의 배경값 가져와서 설정하기
		OfficerList_div.setAttribute("style","view_officerList");*/
	//OfficerList_div.setAttribute('style',');
	OfficerList_Input_Area.appendChild(OfficerList_div);
		
	let access_button = document.createElement('span');
	access_button.setAttribute("id","div_access_button");

		let val1 = 'Coming("officerList' + index + '","coming_' + index + '", '+ index +')';
		let val2 = 'Going("officerList' + index + '","going_' + index + '", '+ index +')';
	
		let button1 = document.createElement('input');
		button1.setAttribute('type','button');
		button1.setAttribute('id', eval("'coming_"+index+"'"));//coming_1
		button1.setAttribute('onclick',eval("'"+ val1 +"'"));//Coming("officerList1","coming_1", 1)
		button1.setAttribute('value','입영');
		/*if(SessionDiv_arr[index].coming_btn != null) {//이전 세션 데이터가 있다면 이전 정보 로드
			button1.setAttribute('value',eval("'"+ SessionDiv_arr[index].coming_btn +"'"));
		} else {
			button1.setAttribute('value','입영');
		}*/
		button1.setAttribute('style','display :inline-block;');
		access_button.appendChild(button1);
	
		let enter = document.createElement('br');
		access_button.appendChild(enter);
		
		let button2 = document.createElement('input');
		button2.setAttribute('type','button');
		button2.setAttribute('id', eval("'going_"+index+"'"));//going_1
		button2.setAttribute('onclick',eval("'"+ val2 +"'"));//Going("officerList1","going_1", 1)
		button2.setAttribute('value','퇴영');
		/*if(SessionDiv_arr[index].going_btn != null) {//이전 세션 데이터가 있다면 이전 정보 로드
			button2.setAttribute('value',eval("'"+ SessionDiv_arr[index].going_btn +"'"));
		} else {
			button2.setAttribute('value','퇴영');
		}*/
		button2.setAttribute('style','display: inline-block;');
		access_button.appendChild(button2);
	
	OfficerList_div.appendChild(access_button);

	let close_button = document.createElement('div');
	close_button.setAttribute('id', 'div_close_button');
		let button3 = document.createElement('input');
		let val3 = 'delete_OfficerDiv("officerList' + index + '", '+ index +')';
		button3.setAttribute('type', 'button');
		button3.setAttribute('class', 'closebutton_style');
		button3.setAttribute('id', eval("'closing_"+index+"'"));//closing_1
		button3.setAttribute('onclick',eval("'"+ val3 +"'"));//delete_OfficerDiv("officerList1",1);
		button3.setAttribute('value', 'X');
		close_button.appendChild(button3);
	OfficerList_div.appendChild(close_button);

	let cell1 =  document.createElement('span');//이름
	cell1.setAttribute('class','div_cells');
	//cell1.setAttribute('style','width: 70px'); 
		let input1 = document.createElement('input');
		input1.setAttribute('type','text');
		input1.setAttribute('id', eval("'ofc_name_"+index+"'"));//ofc_name_인덱스
		input1.setAttribute('class','div_input');
		input1.setAttribute('size','6');
		input1.setAttribute('value',final_arr[index].name);
		cell1.appendChild(input1);
	OfficerList_div.appendChild(cell1);
	
	
	let cell2 =  document.createElement('span');//운행종류
	cell2.setAttribute('class','div_cells');
	//cell2.setAttribute('style','width: 70px');
		let input2 = document.createElement('input');
		input2.setAttribute('type','text');
		input2.setAttribute('id', eval("'ofc_type_"+index+"'"));//ofc_type_인덱스
		input2.setAttribute('class','div_input');
		input2.setAttribute('size','6');
		input2.setAttribute('value',final_arr[index].type);
		cell2.appendChild(input2);
	OfficerList_div.appendChild(cell2);
		

	let cell3 =  document.createElement('span');//차량정보
	cell3.setAttribute('class','div_cells');
	//cell3.setAttribute('style','width: 160px');
		let input3 = document.createElement('input');
		input3.setAttribute('type','text');
		input3.setAttribute('id', eval("'ofc_carInfo_"+index+"'"));//ofc_carInfo_인덱스
		input3.setAttribute('class','div_input');
		input3.setAttribute('size','6');
		input3.setAttribute('value',final_arr[index].carInfo);
		cell3.appendChild(input3);
	OfficerList_div.appendChild(cell3);
	
	
	let cell4 =  document.createElement('span');//목적지
	cell4.setAttribute('class','div_cells');
	//cell4.setAttribute('style','width: 120px');
		let input4 = document.createElement('input');
		input4.setAttribute('type','text');
		input4.setAttribute('id', eval("'ofc_destination_"+index+"'"));//ofc_destination_인덱스
		input4.setAttribute('class','div_input');
		input4.setAttribute('size','6');
		input4.setAttribute('value',final_arr[index].destination);
		cell4.appendChild(input4);
	OfficerList_div.appendChild(cell4);


	let cell5 =  document.createElement('span');//용무
	cell5.setAttribute('class','div_cells');
	//cell5.setAttribute('style','width: 120px');
		let input5 = document.createElement('input');
		input5.setAttribute('type','text');
		input5.setAttribute('id', eval("'ofc_business_"+index+"'"));//ofc_business_인덱스
		input5.setAttribute('class','div_input');
		input5.setAttribute('size','6');
		input5.setAttribute('value',final_arr[index].business);
		cell5.appendChild(input5);
	OfficerList_div.appendChild(cell5);
	
	
	let cell6 =  document.createElement('span');//비고
	cell6.setAttribute('class','div_cells');
		let input6 = document.createElement('input');
		input6.setAttribute('type','text');
		input6.setAttribute('id', eval("'ofc_remark_"+index+"'"));//ofc_remark_인덱스
		input6.setAttribute('class','div_input');
		input6.setAttribute('size','6');
		input6.setAttribute('value',final_arr[index].remark);
		cell6.appendChild(input6);
	OfficerList_div.appendChild(cell6);
}

function make_officerList(myArr){//초기 입퇴영현황 div 생성 함수
	for(let list_index = 0; list_index < myArr.length ; list_index++){
		create_officerList(list_index);
	}
}

function create_historyList(index){//입퇴영기록 div 생성 함수 
	let HistoryList_Area = document.getElementById('history_box');
	let HistoryList_div = document.createElement('div');
	HistoryList_div.setAttribute("id",eval("'historyList"+index+"'")); //historyList1
	console.log("히스토리div 생성중");
	//HistoryList_div.setAttribute("class", "view_historyList");
	if(TodayOfficeList_arr[index].bool == '입영'){
		HistoryList_div.setAttribute("class", "view_historyList_coming");
	} else if(TodayOfficeList_arr[index].bool == '퇴영'){
		HistoryList_div.setAttribute("class", "view_historyList_going");
	}
	HistoryList_Area.appendChild(HistoryList_div);
	let h_cell1 = document.createElement('div');//입퇴영
	h_cell1.setAttribute('class','div_h_cells');
	h_cell1.setAttribute('style','width: 40px'); 
		let text1 = document.createElement('b');
		let text1_val = document.createTextNode(TodayOfficeList_arr[index].bool);
		text1.appendChild(text1_val);
		h_cell1.appendChild(text1);
	HistoryList_div.appendChild(h_cell1);

	let h_cell2 = document.createElement('div');//기록된 시간
	h_cell2.setAttribute('class','div_h_cells');
	h_cell2.setAttribute('style','width: 100px');
		let text2 = document.createElement('b');
		let text2_val = document.createTextNode(TodayOfficeList_arr[index].time);
		text2.appendChild(text2_val);
		h_cell2.appendChild(text2);
	HistoryList_div.appendChild(h_cell2);

	let h_cell3 = document.createElement('div');//선탑자
	h_cell3.setAttribute('class','div_h_cells');
	h_cell3.setAttribute('style','width: 70px');
		let text3 = document.createElement('b'); 
		let text3_val = document.createTextNode(TodayOfficeList_arr[index].name);
		text3.appendChild(text3_val);
		h_cell3.appendChild(text3);
	HistoryList_div.appendChild(h_cell3);

	let h_cell4 = document.createElement('div');//운행종류
	h_cell4.setAttribute('class','div_h_cells');
	h_cell4.setAttribute('style','width: 70px');
		let text4 = document.createElement('b');
		let text4_val = document.createTextNode(TodayOfficeList_arr[index].type);
		text4.appendChild(text4_val);
		h_cell4.appendChild(text4);
	HistoryList_div.appendChild(h_cell4);

	let h_cell5 = document.createElement('div');//차량정보
	h_cell5.setAttribute('class','div_h_cells');
	h_cell5.setAttribute('style','width: 160px');
		let text5 = document.createElement('b');
		let text5_val = document.createTextNode(TodayOfficeList_arr[index].carInfo);
		text5.appendChild(text5_val);
		h_cell5.appendChild(text5);
	HistoryList_div.appendChild(h_cell5);

	let h_cell6 = document.createElement('div');//목적지
	h_cell6.setAttribute('class','div_h_cells');
	h_cell6.setAttribute('style','width: 120px');
		let text6 = document.createElement('b');
		let text6_val = document.createTextNode(TodayOfficeList_arr[index].destination);
		text6.appendChild(text6_val);
		h_cell6.appendChild(text6);
	HistoryList_div.appendChild(h_cell6);

	let h_cell7 = document.createElement('div');//용무
	h_cell7.setAttribute('class','div_h_cells');
	h_cell7.setAttribute('style','width: 120px');
		let text7 = document.createElement('b');
		let text7_val = document.createTextNode(TodayOfficeList_arr[index].business);
		text7.appendChild(text7_val);
		h_cell7.appendChild(text7);
	HistoryList_div.appendChild(h_cell7);

	let h_cell8 = document.createElement('div');//비고
	h_cell8.setAttribute('class','div_h_cells');
		let text8 = document.createElement('b');
		let text8_val = document.createTextNode(TodayOfficeList_arr[index].remark);
		text8.appendChild(text8_val);
		h_cell8.appendChild(text8);
	HistoryList_div.appendChild(h_cell8);
}

function make_historyList(){//초기 입퇴영기록 View Box 생성 함수 
	for(; History_Count <  TodayOfficeList_arr.length; History_Count++){// 
		//History_Count++;//기록이 추가된 만큼 카운트
		create_historyList(History_Count);
	}
}

function reloading_History(){//새로운 기록이 추가되면 입퇴영 기록에 새로운 div를 생성하는 함수
	//if(History_Count <= TodayOfficeList_arr.length + 1){}
	let div_status = document.getElementById("history_box");
	if(div_status.style.display == "block"){
		make_historyList();
	}
}

function start_AddcarList_div(){//배차명령서 추가 페이지 생성
	let add_box_Area = document.getElementById("input_add_box");
	let add_box_div = document.createElement('div');
	add_box_div.setAttribute("id", "Add_carList_div");
	add_box_div.setAttribute("class", "Add_carList");
	add_box_div.setAttribute('style', 'float: top;');

		let input1 = document.createElement('input');//이름
		input1.setAttribute('type', 'text');
		input1.setAttribute('id', 'add_carList_name');
		input1.setAttribute('class', 'div_input');
		input1.setAttribute('style', 'width: 100px;');
		input1.setAttribute('placeholder', '선탑자');
		add_box_div.appendChild(input1);

		let input2 = document.createElement('input');//운행종류
		input2.setAttribute('type', 'text');
		input2.setAttribute('id', 'add_carList_type');
		input2.setAttribute('class', 'div_input');
		input2.setAttribute('style', 'width: 80px;');
		input2.setAttribute('placeholder', '운행종류');
		add_box_div.appendChild(input2);

		let input3 = document.createElement('input');//차량번호
		input3.setAttribute('type', 'text');
		input3.setAttribute('id', 'add_carList_carInfo');
		input3.setAttribute('class', 'div_input');
		input3.setAttribute('style', 'width: 80px;');
		input3.setAttribute('placeholder', '차량번호');
		add_box_div.appendChild(input3);

		let input4 = document.createElement('input');//목적지
		input4.setAttribute('type', 'text');
		input4.setAttribute('id', 'add_carList_destination');
		input4.setAttribute('class', 'div_input');
		input4.setAttribute('style', 'width: 160px;');
		input4.setAttribute('placeholder', '목적지');
		add_box_div.appendChild(input4);

		let input5 = document.createElement('input');//용무
		input5.setAttribute('type', 'text');
		input5.setAttribute('id', 'add_carList_business');
		input5.setAttribute('class', 'div_input');
		input5.setAttribute('style', 'width: 160px;');
		input5.setAttribute('placeholder', '용무');
		add_box_div.appendChild(input5);

		let input6 = document.createElement('input');//비고
		input6.setAttribute('type', 'text');
		input6.setAttribute('id', 'add_carList_remark');
		input6.setAttribute('class', 'div_input');
		input6.setAttribute('style', 'width: 140px;');
		input6.setAttribute('value', '없음');
		add_box_div.appendChild(input6);

	add_box_Area.appendChild(add_box_div);
}

function save_AddcarList_div(){//추가 배차명령서 제출시 세션배열에 push
	//my_Arr = new Array();
	Session_obj = new Object();
	Session_obj.name = document.getElementById("add_carList_name").value;
	Session_obj.type = document.getElementById("add_carList_type").value;
	let carNum = document.getElementById("add_carList_carInfo").value;
	Session_obj.carInfo = search_carNum(carNum);
	Session_obj.destination = document.getElementById("add_carList_destination").value;
	Session_obj.business = document.getElementById("add_carList_business").value;
	Session_obj.remark = document.getElementById("add_carList_remark").value;

	final_arr.push(Session_obj);
	create_officerList(final_arr.length-1);
}

function finish_AddcarList_div(){//배차명령서 삭제
	let parent = document.getElementById("input_add_box");
	let child = document.getElementById("Add_carList_div");
	parent.removeChild(child);
}
