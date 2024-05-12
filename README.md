# 환상공작소 TRPG 매니저
TRPG 커뮤니티 환상공작소의 캠페인들을 관리하기 위한 편의 사이트입니다. 아래의 기능을 제공합니다. 모든 기능에서 삭제 기능은 없습니다. 로그는 온전하게 남아야 하기 때문이죠. 또한 설정자를 위한 기능도 마련될 예정입니다.

# 구현 예정 기능
- 유저 로그인 / 로그아웃
  - 모두가 로그인과 로그아웃을 할 수 있어야합니다. 자신의 정보에 접근할 수 있습니다. 캐릭터에 몇개인지, 그 캐릭터는 어떤 캠페인에 속해있는지 전부 알 수 있습니다.
- 캠페인 생성 / 수정
  - 현재 돌아가는 캠페인이 어떤 것이고, 과거에 어떤 캠페인들이 있었는지, 또 몇개의 세션을 가지고 있었는지 제공합니다.
- 서브 마스터 설정 / 취소
  - 캠페인이 생성되면 생성한 사람이 메인 마스터가 됩니다. 메인 마스터는 서브 마스터를 설정할 수 있습니다.
- PC 등록 / 수정
  - 유저는 캐릭터를 생성할 수 있습니다. 빌더를 구현할 수는 없고 캐릭터의 이름, 나이, 종족, 백스토리, 비욘드 링크 등등의 정보를 기재할 수 있습니다. 또한 레벨이나 클래스도 확인할 수 있고 경험치, 몇골드를 갖고 있는지 확인할 수 있습니다.
- 세션 생성 / 수정
  - 마스터는 세션을 생성할 수 있습니다. 세션을 생성하고 세션의 주소를 디스코드에 뿌리면 세션 정보를 확인하고 참여의사를 밝히면 됩니다.
- 설정 작성 / 수정
  - 설정자를 위한 기능으로 설정 문서를 생성하고 수정하는 기능입니다.

# 구현 현황
- [x] 홈페이지
- [x] 로그인 페이지
- [x] 회원가입 페이지
- [x] 비밀번호 재설정
- [x] 개인정보 변경
- [x] 마스터링 목록
- [x] 유저 캐릭터 목록
- [x] 플레이 현황
- [x] 마이페이지
- [x] 유저 회원가입
- [x] 유저 로그인
- [x] 액세스 토큰 / 리프레시 토큰 처리
- [x] 유저 로그아웃
- [ ] 최근 세션 목록 (최신순으로 5개만 뜨게끔)
- [x] 캠페인 목록 페이지
- [x] 캠페인 목록 페이지네이션
- [x] 캠페인 상세 페이지
- [x] 캠페인 목록
- [x] 캠페인 목록 인피니티 쿼리
- [x] 캠페인 생성
- [x] 캠페인 수정
- [x] 캠페인 마스터 목록
- [x] 캠페인 마스터 목록 인피니티 쿼리
- [x] 서브 마스터 지정
- [x] 서브 마스터 취소
- [x] PC 목록
- [x] PC 목록 이름 검색
- [x] PC 목록 이름 검색 인피니티 쿼리 적용
- [x] PC 목록 레벨 검색
- [x] PC 목록 레벨 검색 인피니티 쿼리 적용
- [x] PC 목록 인피니티 쿼리
- [x] PC 등록
- [x] PC 수정
- [ ] 세션 목록
- [ ] 세션 일정 캘린더
- [ ] 세션 생성
- [ ] 세션 수정
- [ ] 세션 참여 기능
- [ ] 설정 페이지
- [ ] 설정 문서 작성 페이지
- [ ] 설정 문서 수정 페이지
- [ ] 설정 작성
- [ ] 설정 수정

# 어드민 기능
- [x] 유저 추가
- [x] 유저 캐릭터 추가
- [ ] 유저 리스트 - 진행중
- [x] 캠페인 생성
