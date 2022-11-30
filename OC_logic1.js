var rowcount=1;
var rowdata_Arr =  [];
var car_obj_arr = [
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
var TodayOfficeList = new Array();//히스토리를 위한 배열?
//var TodayOfficeList_history = new Array();
//console.log(car_obj_arr);

function addrow(){
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

function deleterow(){
	var OCtable = document.getElementById('OC_table');
	if(rowcount==1){
		alert("삭제할 항목이 없습니다!");
	} else {
		OCtable.deleteRow(OCtable.rows.length-1);
		rowcount--;
	}
}

var final_arr = [];

function send_data(){ //https://codingmoonkwa.tistory.com/12 참고해서 구현
	var table = document.getElementById("Operate_Car");
	console.log("Operate_Car 값은 :" + table);
	var counting_six = 0;
	var data_arr=[];
	var myObj = {};
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
	//console.log("~을 기준으로 쪼개면:  "  + split_arr1);
	for(var i=0;i<split_arr1.length-1;i++){
		var split_arr2 = split_arr1[i].split("/");
		var obj_arr = {};
		for(var k=0;k<split_arr2.length;k++){
			//obj_arr.push(split_arr2[k]);
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
	console.log(final_arr);
	make_officerList();
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

function Going(div_id, button_id, index){
	document.getElementById(eval("'"+div_id+"'")).style.backgroundColor = "pink";
	const btnElement = document.getElementById(eval("'"+button_id+"'"));
	const times = new Date().toLocaleTimeString('ko-kr');
	btnElement.value = "퇴영: " + times;
	Save_ListData(index, times, "퇴영");
};
function Coming(div_id, button_id, index){
	document.getElementById(eval("'"+div_id+"'")).style.backgroundColor = "lightgreen";
	const btnElement = document.getElementById(eval("'"+button_id+"'"));
	const times = new Date().toLocaleTimeString('ko-kr');
	btnElement.value = "입영: " + times;
	Save_ListData(index, times, "입영");
};

function Save_ListData(index, recordedTime, bool_type){
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

	TodayOfficeList.push(ListData);
	console.log(TodayOfficeList);
}