var rowcount=1;
var rowdata_Arr =  [];//입력 폼 행 정보 배열
var car_obj_arr = [//차량 정보 저장 배열
	{ key: '1', val: '렉스턴, 1685-1' },
	{ key: '5561', val: '스타렉스, 10육5561' },
	{ key: '5510', val: '코란도, 10육5510' },
	{ key: '5511', val: '렉스턴, 10육5511' },
	{ key: '19', val: '닷지, 1685-19' },
	{ key: '31', val: '마이티, 1685-31' },
	{ key: '318', val: '닷지, 1685-318' },
	{ key: '36', val: '더블캡, 1685-36' },
	{ key: '33', val: '더블캡, 1685-33' },
	{ key: '251', val: '마이티, 1685-251' },
	{ key: '151', val: '마이티, 1685-151' },
	{ key: '5562', val: '중형버스, 10육5562' }
];
var TodayOfficeList_arr = new Array();//히스토리를 위한 객체 배열
var final_arr = [];//입력폼에 있는 데이터를 가공한 뒤 저장하는 객체 배열

function addrow(){//입력 폼 행 추가
	var OCtable = document.getElementById('OC_table');
	var row = OCtable.insertRow(OCtable.rows.length);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	
	cell1.innerText =  rowcount;
	cell2.innerHTML ='<input type="text" name="OC_carInfo['+rowcount+']"  class="form_data" size="7">';
	cell3.innerHTML ='<input type="text" name="OC_destination['+rowcount+']"  class="form_data" size="7">';
	cell4.innerHTML ='<input type="text" name="OC_business['+rowcount+']"  class="form_data" size="7">';
	cell5.innerHTML ='<input type="text" name="OC_name['+rowcount+']"  class="form_data" size="7">';
	cell6.innerHTML ='<input type="text" name="OC_type['+rowcount+']" class="form_data"size="7">';
	cell7.innerHTML ='<input type="text" name="OC_remark['+rowcount+']" value="없음" class="form_data" size="7">';
	rowcount++;
}

function deleterow(){//입력 폼 행 삭제
	var OCtable = document.getElementById('OC_table');
	if(rowcount==1){
		alert("삭제할 항목이 없습니다!");
	} else {
		OCtable.deleteRow(OCtable.rows.length-1);
		rowcount--;
	}
}

function send_data(){//입력 폼에 있는 데이터를 모두 불러와 원하는 정보로 가공
	//https://codingmoonkwa.tistory.com/12 참고해서 구현
	
	var table = document.getElementById("Operate_Car");
	console.log("Operate_Car 값은 :" + table);
	var counting_six = 0;
	var data_arr=[];
	console.log("테이블 요소 길이는 : " + table.length);
	for(var count=0;count< table.length; count++){
		console.log(count + "번째 테이블 요소 값은 : " + table.elements[count].value);
		counting_six++;
		
		if(table.elements[count].value == "제출"){//table.elements 값에는 제출이라는 값이 있는데 이것은 제외시키기 위함
			;
		} else {
			if((count+1)%6 == 0){
				console.log("나머지 0!" + count);
				data_arr += table.elements[count].value + "~";
			} else 
				data_arr += table.elements[count].value + "/";
		}
	}
	var split_arr1 = data_arr.split("~");
	for(var i=0;i<split_arr1.length-1;i++){
		var split_arr2 = split_arr1[i].split("/");
		var obj_arr = {};
		for(var k=0;k<split_arr2.length;k++){
			switch(k){
				case 0://carInfo
					obj_arr.carInfo = search_carNum(split_arr2[k]);
					break;
				case 1://destination
					obj_arr.destination = split_arr2[k];
					break;
				case 2://business
					obj_arr.business = split_arr2[k];
					break;
				case 3://name
					obj_arr.name = split_arr2[k];
					break;
				case 4://type
					obj_arr.type = split_arr2[k];
					break;
				case 5://remark
					obj_arr.remark = split_arr2[k];
					break;
				default:
					console.log("error! :" + split_arr2[k]);
			}
		}
		final_arr.push(obj_arr);
	}
	var con = document.getElementById("input_box");
	con.style.display = "none";
	console.log("final_arr 출력");
	console.log(final_arr);
	make_officerList(final_arr);//현재는 제출 폼밖에 없으므로 제출을 누르면 자동 실행
	//이후엔 초기값이 설정되었는지 확인하고 안되어있으면 실행 & 추가하기만 실행되게끔
	//autoSave_InputForm();//배차명령서 데이터 저장
	Disabled_btn();
}

function search_carNum(val){//key값에 맞는 차량 번호를 리턴 
	var returned = false;
	for(var i=0;i<car_obj_arr.length;i++){
		if(val == car_obj_arr[i].key){
			console.log("번호값을 찾았습니다");
			returned = true;
			return car_obj_arr[i].val;
		}
	}
	if(returned == false) return "없는 번호";
}

function Going(div_id, button_id, index){//입퇴영 현황의 퇴영 버튼
	document.getElementById(eval("'"+div_id+"'")).style.backgroundColor = "pink";
	const btnElement = document.getElementById(eval("'"+button_id+"'"));
	const times = new Date().toLocaleTimeString('ko-kr');
	btnElement.value = "퇴영: " + times;
	Save_ListData(index, times, "퇴영");
	reloading_History();
	//autoSave_ViewBox();
};
function Coming(div_id, button_id, index){//입퇴영 현황의 입영 버튼
	document.getElementById(eval("'"+div_id+"'")).style.backgroundColor = "lightgreen";
	const btnElement = document.getElementById(eval("'"+button_id+"'"));
	const times = new Date().toLocaleTimeString('ko-kr');
	btnElement.value = "입영: " + times;
	Save_ListData(index, times, "입영");
	reloading_History();
	//autoSave_ViewBox();
};

function Save_ListData(index, recordedTime, bool_type){//입영, 퇴영 버튼을 누르면 해당 정보 저장
	console.log("실행!");
	var ListData = new Object();
	
	ListData.bool = bool_type;//입퇴영
	ListData.time = recordedTime;//기록된 시간
	ListData.name = document.getElementById(eval("'ofc_name_"+index+"'")).value;
	ListData.type = document.getElementById(eval("'ofc_type_"+index+"'")).value;
	ListData.carInfo = document.getElementById(eval("'ofc_carInfo_"+index+"'")).value;
	ListData.destination = document.getElementById(eval("'ofc_destination_"+index+"'")).value;
	ListData.business = document.getElementById(eval("'ofc_business_"+index+"'")).value;
	ListData.remark = document.getElementById(eval("'ofc_remark_"+index+"'")).value;

	copyClipboard(ListData);//입력된 객체의 정보를 클립보드에 복사시키는 함수
	TodayOfficeList_arr.push(ListData);//입퇴영 기록에 추가
	console.log(TodayOfficeList_arr);
	//autoSave_HistoryList();
}

function copyClipboard(obj){//입영, 퇴영 버튼을 누르면 자동으로 해당 내용이 복사
	//https://thinkforthink.tistory.com/341 참고
	var text;
	if(obj.bool == "입영"){// 선탑(차량, 차량번호)/통합막사/복귀
		text =  obj.type + "(" + obj.carInfo + ")/통합막사/복귀";
	} else if(obj.bool == "퇴영"){// 선탑(차량, 차량번호)/목적지/용무
		text =  obj.type + "(" + obj.carInfo + ")/" + obj.destination + "/" + obj.business;
	}
	const textarea = document.createElement('textarea');
	textarea.textContent = text;
	document.body.append(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
}

function delete_OfficerDiv(div_id, index){//입퇴영현황 Div 삭제 할 수 있는 함수
	var del_name = document.getElementById(eval("'ofc_name_"+index+"'")).value;
	var del_type = document.getElementById(eval("'ofc_type_"+index+"'")).value;
	var del_carInfo = document.getElementById(eval("'ofc_carInfo_"+index+"'")).value;
	var del_destination = document.getElementById(eval("'ofc_destination_"+index+"'")).value;
	var del_business = document.getElementById(eval("'ofc_business_"+index+"'")).value;
	var msg = del_name + "/" + del_type + "(" + del_carInfo + ")/" + del_destination + "/" + del_business;
	if(confirm(msg + "를 정말 삭제하시겠습니까?")){
		var parent = document.getElementById("view_box");
		var child = document.getElementById(eval("'"+ div_id +"'"));
		parent.removeChild(child);
		//autoSave_ViewBox();
	} else ;
}




//저장해야 되는거 - 배차명령서 입력폼 데이터 /입퇴영현황 세션/히스토리 데이터
function autoSave_InputForm(){//자동저장 - 배차명령서 입력폼
	localStorage.setItem("AllocateCar_data", JSON.stringify(final_arr));
	console.log("배차명령서 데이터가 저장되었습니다");
}
function loadData_InputForm(){//초기값 불러오기 - 배차명령서 입력폼
	console.log("배차명령서 데이터 불러오기");
	var InputForm_data = localStorage.getItem("AllocateCar_data");
	if(InputForm_data != null){
		final_arr = JSON.parse(InputForm_data);
		//make_officerList(final_arr);
	}
}


function autoSave_HistoryList(){//자동저장 - 히스토리 데이터
	localStorage.setItem("HistoryList_data", JSON.stringify(TodayOfficeList_arr));
	console.log("입퇴영기록 데이터가 저장되었습니다");
}
function loadData_HistoryList(){//초기값 불러오기 - 히스토리 데이터  
	var History_data = localStorage.getItem("HistoryList_data");
	if(History_data != null){
		TodayOfficeList_arr = JSON.parse(History_data);
		console.log("입퇴영기록 데이터 불러오기");
		console.log(TodayOfficeList_arr);
		make_historyList();
	}
}

var SessionDiv_arr = new Array();//세션 배열
function autoSave_ViewBox(){//자동저장 - 입퇴영현황 세션
	var MaxCount = document.getElementById('view_box').childElementCount - 1;
	if(SessionDiv_arr != 0){
		SessionDiv_arr = [];
	}
	for(var count=0; count < MaxCount;count++){
		var Session_obj = {};
		//%%Session_obj.div_color = document.getElementById(eval("'officerList"+count+"'")).value;
		Session_obj.coming_btn = document.getElementById(eval("'coming_"+count+"'")).value;
		Session_obj.going_btn = document.getElementById(eval("'going_"+count+"'")).value;
		Session_obj.name_inp = document.getElementById(eval("'ofc_name_"+count+"'")).value;
		Session_obj.type_inp = document.getElementById(eval("'ofc_type_"+count+"'")).value;
		Session_obj.carInfo_inp = document.getElementById(eval("'ofc_carInfo_"+count+"'")).value;
		Session_obj.destination_inp = document.getElementById(eval("'ofc_destination_"+count+"'")).value;
		Session_obj.business_inp = document.getElementById(eval("'ofc_business_"+count+"'")).value;
		Session_obj.remark_inp = document.getElementById(eval("'ofc_remark_"+count+"'")).value;
		console.log(count + "번째 세션 :");
		console.log(Session_obj);
		SessionDiv_arr.push(Session_obj);
	}
	localStorage.setItem("SessionDiv_data", JSON.stringify(SessionDiv_arr));
	console.log("현재 세션 데이터가 저장되었습니다");
}

function loadData_ViewBox(){//초기값 불러오기 - 입퇴영현황 세션 
	var Session_data = localStorage.getItem("SessionDiv_data");
	if(Session_data != null){
		SessionDiv_arr = JSON.parse(Session_data);
		console.log("세션 데이터 불러오기");
		console.log(SessionDiv_arr);
		make_officerList(SessionDiv_arr);
	}
}