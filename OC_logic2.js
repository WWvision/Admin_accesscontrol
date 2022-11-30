function toggleAddnewList(){
	var con = document.getElementById("input_box");
	if(con.style.display == "none"){
		con.style.display = "block";
	} else {
		con.style.display = "none" ;
		}
}

function toggleViewHistory(){
	var con = document.getElementById("history_box");
	if(con.style.display == "none"){
		con.style.display = "block";
		make_historyList();
	} else {
		con.style.display = "none" ;
		}
}
function make_historyList(){
	for(var history_index = 0;history_index < TodayOfficeList.length; history_index++){
		var HistoryList_Area = document.getElementById('history_box');
		var HistoryList_div = document.createElement('div');
		HistoryList_div.setAttribute("id",eval("'historyList"+history_index+"'")); //historyList1
		console.log("히스토리div 생성중");
		//HistoryList_div.setAttribute("class", "view_historyList");
		if(TodayOfficeList[history_index].bool == "입영"){
			HistoryList_div.setAttribute("class", "view_historyList_coming");
		} else if(TodayOfficeList[history_index].bool == "퇴영"){
			HistoryList_div.setAttribute("class", "view_historyList_going");
		}
		HistoryList_Area.appendChild(HistoryList_div);

		var h_cell1 = document.createElement('div');//입퇴영
		h_cell1.setAttribute('class','div_h_cells');
		h_cell1.setAttribute('style','width: 40px');
			var text1 = document.createElement('b');
			var text1_val = document.createTextNode(TodayOfficeList[history_index].bool);
			text1.appendChild(text1_val);
			h_cell1.appendChild(text1);
		HistoryList_div.appendChild(h_cell1);

		var h_cell2 = document.createElement('div');//기록된 시간
		h_cell2.setAttribute('class','div_h_cells');
		h_cell2.setAttribute('style','width: 100px');
			var text2 = document.createElement('b');
			var text2_val = document.createTextNode(TodayOfficeList[history_index].time);
			text2.appendChild(text2_val);
			h_cell2.appendChild(text2);
		HistoryList_div.appendChild(h_cell2);

		var h_cell3 = document.createElement('div');//선탑자
		h_cell3.setAttribute('class','div_h_cells');
		h_cell3.setAttribute('style','width: 70px');
			var text3 = document.createElement('b');
			var text3_val = document.createTextNode(TodayOfficeList[history_index].name);
			text3.appendChild(text3_val);
			h_cell3.appendChild(text3);
		HistoryList_div.appendChild(h_cell3);

		var h_cell4 = document.createElement('div');//운행종류
		h_cell4.setAttribute('class','div_h_cells');
		h_cell4.setAttribute('style','width: 70px');
			var text4 = document.createElement('b');
			var text4_val = document.createTextNode(TodayOfficeList[history_index].type);
			text4.appendChild(text4_val);
			h_cell4.appendChild(text4);
		HistoryList_div.appendChild(h_cell4);

		var h_cell5 = document.createElement('div');//차량정보
		h_cell5.setAttribute('class','div_h_cells');
		h_cell5.setAttribute('style','width: 135px');
			var text5 = document.createElement('b');
			var text5_val = document.createTextNode(TodayOfficeList[history_index].carInfo);
			text5.appendChild(text5_val);
			h_cell5.appendChild(text5);
		HistoryList_div.appendChild(h_cell5);

		var h_cell6 = document.createElement('div');//목적지
		h_cell6.setAttribute('class','div_h_cells');
		h_cell6.setAttribute('style','width: 120px');
			var text6 = document.createElement('b');
			var text6_val = document.createTextNode(TodayOfficeList[history_index].destination);
			text6.appendChild(text6_val);
			h_cell6.appendChild(text6);
		HistoryList_div.appendChild(h_cell6);

		var h_cell7 = document.createElement('div');//용무
		h_cell7.setAttribute('class','div_h_cells');
		h_cell7.setAttribute('style','width: 120px');
			var text7 = document.createElement('b');
			var text7_val = document.createTextNode(TodayOfficeList[history_index].business);
			text7.appendChild(text7_val);
			h_cell7.appendChild(text7);
		HistoryList_div.appendChild(h_cell7);

		var h_cell8 = document.createElement('div');//비고
		h_cell8.setAttribute('class','div_h_cells');
			var text8 = document.createElement('b');
			var text8_val = document.createTextNode(TodayOfficeList[history_index].remark);
			text8.appendChild(text8_val);
			h_cell8.appendChild(text8);
		HistoryList_div.appendChild(h_cell8);
	}
}

function make_officerList(){
	for(var list_index = 0; list_index < final_arr.length ; list_index++){
	
		var OfficerList_Input_Area = document.getElementById('view_box');
		var OfficerList_div = document.createElement('div');
		//var num = "1"; num 대신에 list_index
		OfficerList_div.setAttribute("id",eval("'officerList"+list_index+"'")); //officerList1
		OfficerList_div.setAttribute("class","view_officerList");
		//OfficerList_div.setAttribute('style',');
		OfficerList_Input_Area.appendChild(OfficerList_div);
		
		var access_button = document.createElement('div');
		access_button.setAttribute("id","div_access_button");
	
			var val1 = 'Coming("officerList' + list_index + '","coming_' + list_index + '", '+ list_index +')';
			var val2 = 'Going("officerList' + list_index + '","going_' + list_index + '", '+ list_index +')';
	
			var button1 = document.createElement('input');
			button1.setAttribute('type','button');
			button1.setAttribute('id', eval("'coming_"+list_index+"'"));//coming_1
			button1.setAttribute('onclick',eval("'"+ val1 +"'"));//Coming("officerList1","coming_1", 1)
			button1.setAttribute('value','입영');
			button1.setAttribute('style','display :inline-block;');
			access_button.appendChild(button1);
		
			var enter = document.createElement('br');
			access_button.appendChild(enter);
		
			var button2 = document.createElement('input');
			button2.setAttribute('type','button');
			button2.setAttribute('id', eval("'going_"+list_index+"'"));//going_1
			button2.setAttribute('onclick',eval("'"+ val2 +"'"));//Going("officerList1","going_1", 1)
			button2.setAttribute('value','퇴영');
			button2.setAttribute('style','display: inline-block;');
			access_button.appendChild(button2);
		
		OfficerList_div.appendChild(access_button);
	
	
		var cell1 =  document.createElement('div');//이름
		cell1.setAttribute('class','div_cells');
			var input1 = document.createElement('input');
			input1.setAttribute('type','text');
			input1.setAttribute('id', eval("'ofc_name_"+list_index+"'"));//ofc_name_인덱스
			input1.setAttribute('class','div_input');
			input1.setAttribute('size','6');
			input1.setAttribute('value',final_arr[list_index].name);
			cell1.appendChild(input1);
		OfficerList_div.appendChild(cell1);
	
	
		var cell2 =  document.createElement('div');//운행종류
		cell2.setAttribute('class','div_cells');
			var input2 = document.createElement('input');
			input2.setAttribute('type','text');
			input2.setAttribute('id', eval("'ofc_type_"+list_index+"'"));//ofc_type_인덱스
			input2.setAttribute('class','div_input');
			input2.setAttribute('size','6');
			input2.setAttribute('value',final_arr[list_index].type);
			cell2.appendChild(input2);
		OfficerList_div.appendChild(cell2);
	
	
		var cell3 =  document.createElement('div');//차량정보
		cell3.setAttribute('class','div_cells');
			var input3 = document.createElement('input');
			input3.setAttribute('type','text');
			input3.setAttribute('id', eval("'ofc_carInfo_"+list_index+"'"));//ofc_carInfo_인덱스
			input3.setAttribute('class','div_input');
			input3.setAttribute('size','6');
			input3.setAttribute('value',final_arr[list_index].carInfo);
			cell3.appendChild(input3);
		OfficerList_div.appendChild(cell3);
	
	
		var cell4 =  document.createElement('div');//목적지
		cell4.setAttribute('class','div_cells');
			var input4 = document.createElement('input');
			input4.setAttribute('type','text');
			input4.setAttribute('id', eval("'ofc_destination_"+list_index+"'"));//ofc_destination_인덱스
			input4.setAttribute('class','div_input');
			input4.setAttribute('size','6');
			input4.setAttribute('value',final_arr[list_index].destination);
			cell4.appendChild(input4);
		OfficerList_div.appendChild(cell4);


		var cell5 =  document.createElement('div');//용무
		cell5.setAttribute('class','div_cells');
			var input5 = document.createElement('input');
			input5.setAttribute('type','text');
			input5.setAttribute('id', eval("'ofc_business_"+list_index+"'"));//ofc_business_인덱스
			input5.setAttribute('class','div_input');
			input5.setAttribute('size','6');
			input5.setAttribute('value',final_arr[list_index].business);
			cell5.appendChild(input5);
		OfficerList_div.appendChild(cell5);
	
	
		var cell6 =  document.createElement('div');//비고
		cell6.setAttribute('class','div_cells');
			var input6 = document.createElement('input');
			input6.setAttribute('type','text');
			input6.setAttribute('id', eval("'ofc_remark_"+list_index+"'"));//ofc_remark_인덱스
			input6.setAttribute('class','div_input');
			input6.setAttribute('size','6');
			input6.setAttribute('value',final_arr[list_index].remark);
			cell6.appendChild(input6);
		OfficerList_div.appendChild(cell6);
	}
}
