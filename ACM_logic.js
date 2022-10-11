function printName1()  {
  const name = document.getElementById('name1').value;
  document.getElementById("result1").innerText = name;  
}

function printName2()  {
  var name = document.getElementById('name2').value;
  document.getElementById("result2").innerText = name;
}
function printName3() {//입력한 비고정출입자명단을 자동으로 객체 배열의 형식으로 출력
 const visitor_info = document.getElementById("name3").value;
 const split_arr1 = visitor_info.split("~");//입력받은 값을 ~ 기준으로 분할하여 split_arr1에 저장
 var final_arr = [];
 for(var i=0;i<split_arr1.length ; i++){//split_arr1의 배열을 2차로 작업하기 위한 루프
	var split_arr2 = split_arr1[i].split("/");//분할된 데이터를 다시 /를 기준으로 나누어 저장
	var obj_arr = `\n { name: "${split_arr2[0]}", birth:"${split_arr2[1]}", bs:"${split_arr2[2]}",car:"${split_arr2[3]}", car_color:"${split_arr2[4]}", car_num:"${split_arr2[5]}",address:"${split_arr2[6]}", phone:"${split_arr2[7]}", count:"${split_arr2[8]}" }`;
	final_arr.push(obj_arr);
 }	
 document.getElementById("result3").innerText = final_arr;//작업완료된 데이터를 Text 형태로 출력
}



function searchInfo_carNum1(){//차 번호를 검색하면 해당 차 번호에 해당하는 기록들 모두 출력
	const visitor_info = document.getElementById("car_num").value;
	var index = visitor_Array.findIndex(e=> e.car_num === visitor_info );
	if(index != -1){
		visitor_Array[index].count += 1;
		document.getElementById("result4").innerHTML = `이름:${visitor_Array[index].name} ,생년월일:${visitor_Array[index].birth} ,용무:${visitor_Array[index].bs} ,차:${visitor_Array[index].car} ,차색:${visitor_Array[index].car_color} ,차번호:${visitor_Array[index].car_num} ,주소:${visitor_Array[index].address} ,폰:${visitor_Array[index].phone} ,카운트:${visitor_Array[index].count} `;
		
	}else 
		document.getElementById("result4").innerText = "Not Found";
}


function searchInfo_carName1(){//이름을 검색하면 해당 이름과 일치하는 기록을 모두 출력
	const visitor_info = document.getElementById("visitor_name1").value;
	var Result_arr =  [];
	for(var i=0;i<visitor_Array.length; i++){//DB 객체 배열의 이름과 입력한 이름의 값이 있으면 Result_arr에 푸쉬
		if(visitor_info == visitor_Array[i].name){
			Result_arr.push(`\n 이름:${visitor_Array[i].name} ,생년월일:${visitor_Array[i].birth} ,용무:${visitor_Array[i].bs} ,차:${visitor_Array[i].car} ,차색:${visitor_Array[i].car_color} ,차번호:${visitor_Array[i].car_num} ,주소:${visitor_Array[i].address} ,폰:${visitor_Array[i].phone} ,카운트:${visitor_Array[i].count}`);
		}
	}
	
	if(Result_arr <= 0){//만약 Result_arr에 아무값이 없으면 Null 출력
		document.getElementById("result5").innerText = "Not Found";
	} else//Result_arr 값이 있다면 화면에 출력
		document.getElementById("result5").innerText = Result_arr;
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