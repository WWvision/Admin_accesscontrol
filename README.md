# Admin_accesscontrol
메모장을 대신에 출입통제 시스템을 돕기 위한 도우미 개발

0. 2022.10.16 구체적인 기능 및 디자인 구상 중 

1. v1.0민간인 출입통제: 위병소를 통과전 미리 민간인을 파악 or 민간인의 이전입영 기록을 빠르게 파악하기 위함
- 이름 검색 : 민간인의 이름을 검색했을때 입영 기록이 있다면 해당 민간인의 정보를 표시
- 차량번호 검색: 위병소 앞에 차량 번호를 확인하고 검색했을때 입영 기록이 있다면 해당 정보를 표시
  
 
- 입영 기록이 없다면 새로운 정보를 입력하는 폼 생성
- 한번 들어올때 동승자를 한번에 기입하는 기능
- 한번 검색할때마다 날짜 시간 횟수를 포함해 검색기록을 남기는 기능
 > 하루 단위로 해당 페이지에 표시하기
 > 일주일 단위로 입영횟수를 초기화하고 비고정출입자 기록을 텍스트로 복붙할 수 있도록 표시하는 기능 : visitor_history 배열을 쭉 출력하게끔 

2. v2.0 부대간부 출입통제
3. v3.0 부대간부 출퇴근
