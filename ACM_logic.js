

function printTest1()  {
  const name = document.getElementById('Test1').value;
  document.getElementById("Result1").innerText = name;  
}

function printTest2()  {
  var name = document.getElementById('Test2').value;
  document.getElementById("Result2").innerText = name;
}

//A. 비고정출입자명단을 일일히 바꿔야 할까? > 자동으로 바꾸자
function Change_VisitorList() {//입력한 비고정출입자명단을 자동으로 객체 배열의 형식으로 출력
 const visitor_info = document.getElementById("VisitorList").value;
 const split_arr1 = visitor_info.split("~");//입력받은 값을 ~ 기준으로 분할하여 split_arr1에 저장
 var final_arr = [];
 for(var i=0;i<split_arr1.length ; i++){//split_arr1의 배열을 2차로 작업하기 위한 루프
	var split_arr2 = split_arr1[i].split("/");//분할된 데이터를 다시 /를 기준으로 나누어 저장
	var obj_arr = `\n { name: "${split_arr2[0]}", birth:"${split_arr2[1]}", bs:"${split_arr2[2]}",car:"${split_arr2[3]}", car_color:"${split_arr2[4]}", car_num:"${split_arr2[5]}",address:"${split_arr2[6]}", phone:"${split_arr2[7]}", count:"${split_arr2[8]}" }`;
	final_arr.push(obj_arr);
 }	
 document.getElementById("VisitorList_Result").innerText = final_arr;//작업완료된 데이터를 Text 형태로 출력
}

var History_arr =  [];//사용자가 이름 또는 번호판을 검색할때마다 기록하여 저장하는 배열
var NewCarNum_arr = [];//새로운 차 번호 등록


//A. 차번호를 검색했을때 이전 방문기록이 있는지? > 모두 표시 
//A. 차번호를 검색했는데 방문기록이 여러개이고 동승자가 있다면? > 해당 결과 다 출력    
//A. 차번호가 `12가3456`일때 뒷자리만 검색해도 결과가 출력되게끔 하고 싶다면? > datalist를 활용하고 동적태그 생성을 통해 자동으로 검색 할 수 있게끔 구현
function SearchInfo_carNum(){//차 번호를 검색하면 해당 차 번호에 해당하는 기록들 모두 출력
	const visitor_info = document.getElementById("CarNum").value;
	var NumResult_arr =  [];
	for(var i=0;i<visitor_Array.length; i++){//DB 객체 배열의 이름과 입력한 이름의 값이 있으면 Result_arr에 푸쉬
		if(visitor_info == visitor_Array[i].car_num){
			NumResult_arr.push(`\n 이름:${visitor_Array[i].name} ,생년월일:${visitor_Array[i].birth} ,용무:${visitor_Array[i].bs} ,차:${visitor_Array[i].car} ,차색:${visitor_Array[i].car_color} ,차번호:${visitor_Array[i].car_num} ,주소:${visitor_Array[i].address} ,폰:${visitor_Array[i].phone} ,카운트:${visitor_Array[i].count}`);
		}
	}
	if(NumResult_arr <= 0){//이전 기록이 없다면 새로운 정보 입력
		newVisitor_Info();
	} else//Result_arr 값이 있다면 화면에 출력
		document.getElementById("CarNum_Result").innerText = NumResult_arr;
}


function newVisitor_Info(){//새로운 정보 입력 폼 생성
	console.log("!");
	var newVisitor_Input_Area = document.getElementById('CarNum_Result');
	var newVisitor_form = document.createElement('form');
	
	var input_info = document.createElement('input');
	input_info.setAttribute("type", "text");
	input_info.setAttribute("id", "newCarNum");
	input_info.setAttribute("name", "formtest");
	input_info.setAttribute("placeholder", "차 번호");
	newVisitor_form.appendChild(input_info);
	
	input_info = document.createElement('input');
	input_info.setAttribute("type", "submit");
	input_info.setAttribute("value", "입력");
	newVisitor_form.appendChild(input_info);
	
	newVisitor_Input_Area.setAttribute("id", "newCarNum_form");
	newVisitor_Input_Area.innerText = "이전 기록이 없다면 정보를 입력하세요 : ";
	newVisitor_Input_Area.appendChild(newVisitor_form);	
	
	document.getElementById("newCarNum_form").onsubmit = function(){
		var CarNum = document.getElementById("newCarNum").value;
		Record_NewCarNum(CarNum);
		return false;
	}
}





//Q. 해당 차에 동승자가 여러명이 있다면 어떻게 입력하게 할까?
//Q. 기존 방문자가 새로운 차를 타고 오거나 동승자가 많아진다면?
//Q. 만약 이름을 검색했는데 이전 기록이 없다면? >  처음 방문자라 판단하고 데이터를 넣을 수 있는 창 생성



//A. 이름을 검색했는데 해당 인원이 여러번 방문한 기록이 있다면? > 모두 표시 
function SearchInfo_Name(){//이름을 검색하면 해당 이름과 일치하는 기록을 모두 출력
	const visitor_info = document.getElementById("Name").value;
	var NameResult_arr =  [];
	for(var i=0;i<visitor_Array.length; i++){//DB 객체 배열의 이름과 입력한 이름의 값이 있으면 Result_arr에 푸쉬
		if(visitor_info == visitor_Array[i].name){
			NameResult_arr.push(`\n 이름:${visitor_Array[i].name} ,생년월일:${visitor_Array[i].birth} ,용무:${visitor_Array[i].bs} ,차:${visitor_Array[i].car} ,차색:${visitor_Array[i].car_color} ,차번호:${visitor_Array[i].car_num} ,주소:${visitor_Array[i].address} ,폰:${visitor_Array[i].phone} ,카운트:${visitor_Array[i].count}`);
		}
	}
	
	if(NameResult_arr <= 0){//만약 Result_arr에 아무값이 없으면 Null 출력
		document.getElementById("Name_Result").innerText = "Not Found";
	} else//Result_arr 값이 있다면 화면에 출력
		document.getElementById("Name_Result").innerText = NameResult_arr;
}



//A. 검색하는 것만으로도 기록되게 하려면 어떻게 할까? 이름 검색하면 해당 배열 출력
function Record_SearchHistory(){//차 번호를 검색하면 해당 차 번호에 해당하는 기록들 모두 출력 + 검색 기록 추가
	const visitor_name = document.getElementById("Visitor_History").value;
	var index = visitor_Array.findIndex(e=> e.name === visitor_name );
	var times = new Date();
	console.log("1");
	if(index != -1){
		visitor_Array[index].count += 1;
		var History_var = times.toLocaleString() + ` 이름:${visitor_Array[index].name} ,생년월일:${visitor_Array[index].birth} ,용무:${visitor_Array[index].bs} ,차:${visitor_Array[index].car} ,차색:${visitor_Array[index].car_color} ,차번호:${visitor_Array[index].car_num} ,주소:${visitor_Array[index].address} ,폰:${visitor_Array[index].phone} ,카운트:${visitor_Array[index].count} `;
		History_arr.push(History_var);
		document.getElementById("History_Result").innerHTML = History_var;
		
	}else 
		document.getElementById("History_Result").innerText = "Not Found";
}

function Record_NewCarNum(data){
	NewCarNum_arr.push(data);
	console.log(NewCarNum_arr);
}


function View_History(){//기록된 이전 기록을 모두 출력
	document.getElementById("History_All").innerHTML = History_arr;
}



//민간인 출입통제
//이름 검색을 통해 이전 기록을 파악
//차량 번호 전체를 검색하지 않아도 검색되는 기능

/* 
김승일/991001/업무1/차1/색1/번호1/주소1/폰1/카운트1~
김승이/991002/업무2/차2/색2/번호2/주소2/폰2/카운트2~
김승삼/991003/업무3/차3/색3/번호3/주소3/폰3/카운트3~
김승사/991004/업무4/차4/색4/번호4/주소4/폰4/카운트4~
김승오/991005/업무5/차5/색5/번호5/주소5/폰5/카운트5~
김승육/991006/업무6/차6/색6/번호6/주소6/폰6/카운트6
*/

