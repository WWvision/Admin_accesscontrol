var rowcount=1;
var rowdata_Arr =  [];
var car_obj_arr = [
	{ key: '1', val: '(렉스턴, 1685-1)' },
	{ key: '5561', val: '(스타렉스, 10육5561)' },
	{ key: '5510', val: '(코란도, 10육5510)' },
	{ key: '5511', val: '(렉스턴, 10육5511)' },
	{ key: '19', val: '(닷지, 1685-19)' },
	{ key: '31', val: '(마이티, 1685-31)' },
	{ key: '318', val: '(닷지, 1685-318)' },
	{ key: '36', val: '(더블캡, 1685-36)' },
	{ key: '33', val: '(더블캡, 1685-33)' },
	{ key: '251', val: '(마이티, 1685-251)' },
	{ key: '151', val: '(마이티, 1685-151)' },
	{ key: '5562', val: '(중형버스, 10육5562)' }
];



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
	cell2.innerHTML ='<input type="text" name="OC_carNum['+rowcount+']"  class="form_data" size="7">';
	cell3.innerHTML ='<input type="text" name="OC_destination['+rowcount+']"  class="form_data" size="7">';
	cell4.innerHTML ='<input type="text" name="OC_purpose['+rowcount+']"  class="form_data" size="7">';
	cell5.innerHTML ='<input type="text" name="OC_responsible['+rowcount+']"  class="form_data" size="7">';
	cell6.innerHTML ='<input type="text" name="OC_type['+rowcount+']" class="form_data"size="7">';
	cell7.innerHTML ='<input type="text" name="OC_etc['+rowcount+']" value="없음" class="form_data" size="7">';
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

function send_data(){ //https://codingmoonkwa.tistory.com/12 참고해서 구현
	var table = document.getElementById("Operate_Car");
	var count;
	var data_arr=[];
	var counting_six = 0;
	
	for(count=0;count< table.length; count++){
		counting_six++;
		if(table.elements[count].value == "제출"){
			break;
		}
		switch(counting_six){
			case 1: 
				var carNum_Result = search_carNum(table.elements[count].value);
				data_arr.push(carNum_Result);
				break;
			case 6: 
				counting_six = 0;
				data_arr.push(table.elements[count].value + "~");
				break;
			default: 
				data_arr.push(table.elements[count].value);
		}
	}
	var con = document.getElementById("test");
	con.style.display = "none";
	console.log(data_arr);
	//document.getElementById("view_text").innerText = data_arr;
}

function search_carNum(val){
	var returned = false;
	for(var i=0;i<car_obj_arr.length;i++){
		if(val == car_obj_arr[i].key){
			returned = true;
			return car_obj_arr[i].val;
		}
	}
	if(returned == false) return "없는 번호";

}

function Going(div_id, button_id){
	document.getElementById(eval("'"+div_id+"'")).style.backgroundColor = "pink";
	const btnElement = document.getElementById(eval("'"+button_id+"'"));
	const times = new Date();
	btnElement.value = "퇴영: " + times.toLocaleTimeString('ko-kr');
};
function Coming(div_id, button_id){
	document.getElementById(eval("'"+div_id+"'")).style.backgroundColor = "lightgreen";
	const btnElement = document.getElementById(eval("'"+button_id+"'"));
	const times = new Date();
	btnElement.value = "입영: " + times.toLocaleTimeString('ko-kr');
};

