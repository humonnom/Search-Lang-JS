# 2022 상반기 프론트엔드 데브매칭

- App.js에서 컴포넌트 관리

  - SearchInput : input(입력할때마다 데이터 받아옴)
  - Suggestion : 추천 목록(방향키 이동, 엔터/클릭 가능)
  - SelectedLanguages : 선택된 언어 목록(5개 까지)
  - 세 개의 컴포넌트가 긴밀히 연결되어 있기 때문에, App 컴포넌트에서 이를 잘 관리해야 함

- 과제 쪼개기(사용자 입력 기준 플로우)

  1.  인풋창에 글자를 입력한다.(엔터 방지->아무 액션 없음)
  2.  입력할때마다 후보 목록이 제시된다.
  3.  목록중에 맨 상위 항목이 파란색으로 선택되어 있는데, 이것을 방향키로 이동할 수 있다.
  4.  후보 중에 하나를 클릭하거나 엔터를 누른다.
  5.  엔터: 파란색으로 선택되어 있던 항목을 추가/ 클릭: 클릭된 항목을 추가
  6.  Selected Languages에 새로운 항목이 추가된다.
  7.  Selected Languages의 길이가 1이상이면 화면에 해당 컴포넌트를 띄운다.
  8.  반복

- 구현 순서

  - [x] Input구현
  - [x] 입력과 상관없이 더미 데이터로 후보 목록 구성
  - [x] 후보 목록이 1개 이상이면 화면에 Suggestion을 띄움
  - [x] 후보의 맨 첫번째를 셀렉티드로 표시
  - [ ] 커서이동 구현
  - [ ] 클릭시 선택 구현
  - [ ] 엔터 입력시 선택 구현
  - [ ] 선택된 언어가 1개 이상이면 SelectedLanguages 띄움
  - [ ] 선택된 것이 다섯개를 넘어가면 앞에서부터 하나씩 자름
  - [ ] 데이터 통신 구현(API)

- 구조
  +------------------+
  |Selected Languages| -> confirmedList = []
  +------------+-----+
  |SearchInput | -> selectedIndex = 0 / input = ''
  +------------+
  |Suggestion | -> fetchedDataList = []
  +-----------+
