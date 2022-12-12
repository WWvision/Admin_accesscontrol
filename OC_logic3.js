function toggleNewList(){//배차명령서 입력 토글 버튼
	var con = document.getElementById("input_box");
	if(con.style.display == "none"){
		con.style.display = "block";
	} else {
		con.style.display = "none" ;
		}
}

function toggleAddList(){//배차명령서 추가 토글 버튼
	var con = document.getElementById("input_add_box");
	if(con.style.display == "none"){
		con.style.display = "block";
	} else {
		con.style.display = "none" ;
		}
}

function toggleViewHistory(){//입퇴영기록 토글 버튼
	var con = document.getElementById("history_box");
	if(con.style.display == "none"){
		con.style.display = "block";
		make_historyList();
	} else {
		con.style.display = "none" ;
		}
}


//loadData_InputForm();//초기실행 - 배차명령서 데이터
//loadData_HistoryList();//초기실행 - 입퇴영기록 데이터
//loadData_ViewBox();//초기실행 - 입퇴영현황 세션 데이터

function Disabled_btn(){//###나중에 데이터 저장이 정상적으로 돌아간다면 입퇴영현황에 기존 리스트가 있으면 비활성화시키게끔
	var btn_new = document.getElementById('New_carList');
	var btn_add = document.getElementById('Add_carList');
	if(final_arr.length == 0){//배차명령서 입력/추가 버튼 활성화
		//배차명령서에 데이터가 아무것도 없다면
		btn_new.disabled = false;
		btn_add.disabled = true;
	} else {
		//배차명령서에 데이터가 있다면
		btn_new.disabled = true;
		btn_add.disabled = false;
	}
}
Disabled_btn();