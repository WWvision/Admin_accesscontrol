var History_Obj_Array = [];
var TodayVisitor_Obj_Array = [];

function Search_Name(){//이름을 검색하면 이전 입영기록이 있는 방문자 정보 표시& 검색 기록에 저장
	const visitor_info = document.getElementById("name_search").value;
	var NameResult_arr =  [];
	var times = new Date();
	
	for(var i=0;i<visitor_Array.length; i++){//DB 객체 배열의 이름과 입력한 이름의 값이 있으면 Result_arr에 푸쉬
		if(visitor_info == visitor_Array[i].name){
			NameResult_arr.push(`
			이름:${visitor_Array[i].name}, 
			생년월일:${visitor_Array[i].birth},
			용무: ${visitor_Array[i].bs},
			출입여부: true,
			비고: "아무값"
			`);
		}
	}
	
	if(NameResult_arr <= 0){//만약 Result_arr에 아무값이 없다면
		document.getElementById("search_result_view").innerText = "이전 기록 없음";
	} else//Result_arr 값이 있다면 화면에 출력
		document.getElementById("search_result_view").innerText = NameResult_arr;
}

function Search_carNum(){//차량번호를 검색하면 이전 입영기록이 있는 방문자, 동승자 기록 표시& 검색 기록에 저장
	
}

function coming(){//입영 
	
}
function going(){//퇴영

}
function outing(){//외출
	
}

