해당 소스코드는  
**리액트를 다루는 기술(개정판)** 의 **14장.외부 API를 연동하여 뉴스 뷰어 만들기**  
에서 나오는 예제를 기반으로 합니다.

원래 예제의 react-router-dom 버전이 5라서 6으로 업그레이드 후, 일부 코드를 버전에 맞춰 수정했습니다.

## 프로젝트 내용

카테고리별로 최신 뉴스 목록을 보여주는 뉴스 뷰어 프로젝트입니다.
http://newsapi.org/ 에서 제공하는 API를 사용하여 뉴스 데이터를 받아왔습니다.

-   axios로 API 호출해서 데이터 수신
-   리액트 라우터로 카테고리별 다른 주소 설정

## react-router-dom v5 -> v6 변화

-   `<Switch>` 대신 `<Routes>` 사용
-   `<Route>`는 `<Routes>`의 직속 자식이어야 함
-   `<Route>`의 prop 중 `exact`는 사라지고, `component`는 `element`로 변경됨
-   Optional URL 을 위한 `*`을 더이상 사용할 수 없음
-   `<NavLink>`의 `activeStyle`과 `activeClassName`이 사라짐
-   `useHistory` 대신 `useNavigate` 사용

## 느낀 점

-   패키지의 버전별 차이에 유의할 것
-   `<NavLink>`가 적용된 컴포넌트는 to를 설정하지 않으면 undefined 오류가 발생함
-   `useEffect`에 등록하는 함수는 async로 작성하면 안되며, 그 대신 함수 내부에 async 함수를 따로 만들어줘야 함
-   ESLint 경고가 나타날 때, 상황에 따라 ESLint 규칙을 비활성화하는 주석을 작성할 수 있음
