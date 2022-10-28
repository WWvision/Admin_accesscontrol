let History_Obj_Array = [];//검색기록
let TodayVisitor_Obj_Array = [];//하루 입퇴영기록
let NewVisitor_Array = [];//신규 방문자 정보 저장
let AllVisitor_Array = [];//기존 DB의 방문자 + 신규 방문자 정보가 들어가 있는 배열

function Search_Name(){//이름을 검색하면 이전 입영기록이 있는 방문자 정보 표시& 검색 기록에 저장
	const visitor_info = document.getElementById("name_search").value;
	const times = new Date();
	let NameResult_arr =  [];//이름값을 찾으면 푸쉬
	
	for(var i=0;i<visitor_Array.length; i++){//DB 객체 배열의 이름과 입력한 이름의 값이 있으면 Result_arr에 푸쉬
		if(visitor_info == visitor_Array[i].name){
			NameResult_arr.push(`
			이름:${visitor_Array[i].name}, 
			생년월일:${visitor_Array[i].birth},
			용무: ${visitor_Array[i].bs},
			입영신청: ${visitor_Array[i].permission}
			`);
		}
	}
	
	if(NameResult_arr <= 0){//만약 Result_arr에 아무값이 없다면
		document.getElementById("search_result_view").innerText = "이전 기록 없음";
	} else//Result_arr 값이 있다면 화면에 출력
		document.getElementById("search_result_view").innerText = NameResult_arr;
}

function Search_carNum(){//차량번호를 검색하면 이전 입영기록이 있는 방문자, 동승자 기록 표시& 검색 기록에 저장
	const visitor_info = document.getElementById("carNum_search").value;
	const times = new Date();
	let NumResult_arr = [], str_info;
	
	for(var i=0;i<visitor_Array.length; i++){//DB 객체 배열의 이름과 입력한 이름의 값이 있으면 Result_arr에 푸쉬
		if(visitor_info == visitor_Array[i].car_num){
			NumResult_arr.push(`\n
				이름:${visitor_Array[i].name}, 생년월일:${visitor_Array[i].birth}, 
				용무:${visitor_Array[i].bs}, 입영신청${visitor_Array[i].permission} 
			`);
			//검색해서 결과가 나오면 기록 테스트
		}
	}
	if(NumResult_arr <= 0){//이전 기록이 없다면 새로운 정보 입력
		document.getElementById("search_result_view").innerText = "이전 기록 없음";
	} else//Result_arr 값이 있다면 화면에 출력
		document.getElementById("search_result_view").innerHTML = NumResult_arr;
}

function coming(){//입영 
	
}
function going(){//퇴영

}
function outing(){//외출
	
}

