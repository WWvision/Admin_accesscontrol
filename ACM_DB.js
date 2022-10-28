/*var visitor_Array = [
{ name: "김승일", birth:"991001", bs:"업무1",car:"차1", car_color:"색1", car_num:"번호1",address:"주소1", phone:"폰1", count:0 },
{ name: "김승이", birth:"991002", bs:"업무2",car:"차2", car_color:"색2", car_num:"번호2",address:"주소2", phone:"폰2", count:0 },
{ name: "김승삼", birth:"991003", bs:"업무3",car:"차3", car_color:"색3", car_num:"번호3",address:"주소3", phone:"폰3", count:0 },
{ name: "김승사", birth:"991004", bs:"업무4",car:"차4", car_color:"색4", car_num:"번호4",address:"주소4", phone:"폰4", count:0 },
{ name: "김승오", birth:"991005", bs:"업무5",car:"차5", car_color:"색5", car_num:"번호5",address:"주소5", phone:"폰5", count:0 },
{ name: "김승육", birth:"991006", bs:"업무6",car:"차6", car_color:"색6", car_num:"번호6",address:"주소6", phone:"폰6", count:0 },
{ name: "김승삼", birth:"991003", bs:"업무3",car:"차7", car_color:"색3", car_num:"번호7",address:"주소3", phone:"폰3", count:0 },
{ name: "김승삼", birth:"991003", bs:"업무3",car:"차7", car_color:"색3", car_num:"번호8",address:"주소3", phone:"폰3", count:0 },
{ name: "김승칠", birth:"991006", bs:"업무6",car:"차6", car_color:"색6", car_num:"번호8",address:"주소6", phone:"폰6", count:0 },
{ name: "김승구", birth:"991006", bs:"업무6",car:"차6", car_color:"색6", car_num:"번호8",address:"주소6", phone:"폰6", count:0 }
];*/
//이름이 같은 사람 "김승삼"
//같은 차를 타고 온 차의 "번호8"

/*
이해철/690514/px납품/마이티/흰색/84로4671/주소1/번호1/0~
김종덕/123456/자재납품/봉고/청색/92바6329/주소2/번호2/0~
최만수/213334/px납품/마이티/흰색/93라4883/주소3/번호3/0~
김달수/730706/자재공사/마이티/흰색/93가6469/주소4/번호4/0~
허민철/893423/음식물폐기물처리/포터/파랑/97무0771/주소5/번호5/0~
이주원/851232/창호공사/포터/흰색/97구5273/주소6/번호6/0~
박진호/925423/창호공사/포터/흰색/97구5273/주소7/번호7/0~
김영수/711101/컨테이너공사/스포티지/쥐색/41마8949/주소8/번호8/0~
황돈균/640231/보일러공사/포터/흰색/97머3757/주소9/번호9/0~
오경식/610232/보일러공사/포터/흰색/97머3757/주소10/번10/0~
김연규/810707/프린터렌탈정비/레이/흰색/186러7000/주소11/번호11/0~
양영식/902132/px납품/마이티/흰색/81로8681/주소12/번호12/0~
김아름/920123/정수기점검/모닝/살구색/106로4373/주소13/번호13/0~
이전희/690321/간부상담/스타렉스/회색/10육5107/주소14/번호14/0~
고재섭/942312/세스코/레이/흰색/39하2963/주소15/번호15/0~
하명천/860312/세스코/레이/흰색/39하2963/주소16/번호16/0~
홍종진/730226/px납품/마이티/흰색/90바8395/주소17/번호17/0~
신명섭/691017/컨테이너작업/크레인/검정/강원07고5682/주소18/번호18/0~
박종명/650124/컨테이너작업/크레인/검정/강원83바5076/주소19/번호19/0
*/

var visitor_Array = [
{ name: "이해철", birth:"690514", bs:"px납품",car:"마이티", car_color:"흰색", car_num:"84로4671",address:"주소1", phone:"번호1", count:"0", permission: "O" },
{ name: "김종덕", birth:"123456", bs:"자재납품",car:"봉고", car_color:"청색", car_num:"92바6329",address:"주소2", phone:"번호2", count:"0", permission: "O" },
{ name: "최만수", birth:"213334", bs:"px납품",car:"마이티", car_color:"흰색", car_num:"93라4883",address:"주소3", phone:"번호3", count:"0", permission: "O" },
{ name: "김달수", birth:"730706", bs:"자재공사",car:"마이티", car_color:"흰색", car_num:"93가6469",address:"주소4", phone:"번호4", count:"0", permission: "O" },
{ name: "허민철", birth:"893423", bs:"음식물폐기물처리",car:"포터", car_color:"파랑", car_num:"97무0771",address:"주소5", phone:"번호5", count:"0", permission: "O" },
{ name: "이주원", birth:"851232", bs:"창호공사",car:"포터", car_color:"흰색", car_num:"97구5273",address:"주소6", phone:"번호6", count:"0", permission: "O" },
{ name: "박진호", birth:"925423", bs:"창호공사",car:"포터", car_color:"흰색", car_num:"97구5273",address:"주소7", phone:"번호7", count:"0", permission: "O" },
{ name: "김영수", birth:"711101", bs:"컨테이너공사",car:"스포티지", car_color:"쥐색", car_num:"41마8949",address:"주소8", phone:"번호8", count:"0", permission: "O" },
{ name: "황돈균", birth:"640231", bs:"보일러공사",car:"포터", car_color:"흰색", car_num:"97머3757",address:"주소9", phone:"번호9", count:"0", permission: "O" },
{ name: "오경식", birth:"610232", bs:"보일러공사",car:"포터", car_color:"흰색", car_num:"97머3757",address:"주소10", phone:"번10", count:"0", permission: "O" },
{ name: "김연규", birth:"810707", bs:"프린터렌탈정비",car:"레이", car_color:"흰색", car_num:"186러7000",address:"주소11", phone:"번호11", count:"0", permission: "O" },
{ name: "양영식", birth:"902132", bs:"px납품",car:"마이티", car_color:"흰색", car_num:"81로8681",address:"주소12", phone:"번호12", count:"0", permission: "O" },
{ name: "김아름", birth:"920123", bs:"정수기점검",car:"모닝", car_color:"살구색", car_num:"106로4373",address:"주소13", phone:"번호13", count:"0", permission: "O" },
{ name: "이전희", birth:"690321", bs:"간부상담",car:"스타렉스", car_color:"회색", car_num:"10육5107",address:"주소14", phone:"번호14", count:"0", permission: "O" },
{ name: "고재섭", birth:"942312", bs:"세스코",car:"레이", car_color:"흰색", car_num:"39하2963",address:"주소15", phone:"번호15", count:"0", permission: "O" },
{ name: "하명천", birth:"860312", bs:"세스코",car:"레이", car_color:"흰색", car_num:"39하2963",address:"주소16", phone:"번호16", count:"0", permission: "O" },
{ name: "홍종진", birth:"730226", bs:"px납품",car:"마이티", car_color:"흰색", car_num:"90바8395",address:"주소17", phone:"번호17", count:"0", permission: "O" },
{ name: "신명섭", birth:"691017", bs:"컨테이너작업",car:"크레인", car_color:"검정", car_num:"강원07고5682",address:"주소18", phone:"번호18", count:"0", permission: "X" },
{ name: "박종명", birth:"650124", bs:"컨테이너작업",car:"크레인", car_color:"검정", car_num:"강원83바5076",address:"주소19", phone:"번호19", count:"0", permission: "O" },
{ name: "박종명", birth:"681124", bs:"컨테이너작업",car:"크레인", car_color:"검정", car_num:"강원83바5576",address:"주소20", phone:"번호20", count:"0", permission: "O" }
];