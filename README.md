# News-Viewer
* https://newsapi.org 에서 제공하는 API를 사용하여 데이터를 받아옴

## axios
* 현재 가장 많이 사용되고 있는 자바스크립트 HTTP 클라이언트
```
yarn add axios
```

## SWR
* 모두의 주차장 당시 비동기(원인 추정)로 인한 오류를 해결하기 위해 SWR을 알게됨
* React Hooks for Remote Data Fetching이라는 소개처럼 데이터를 가져오는 데(get) 특화되어 있는 라이브러리
* useSWR은 useEffect처럼 동작하기 떄문에 useEffect안에서 사용불가
* SWR : stale-while-revalidate
    - stale : 캐쉬에서 데이터를 반환
    - revalidate : fetch 요청을 전송 후 최신 data를 가져옴
* 최초 데이터를 수집한 후에는 캐시된 데이터를 이용, 자동적으로 갱신하여 데이터의 일관성을 유지
* 포커싱할 때 데이터를 갱신해주기도 하지만, 사용자의 설정에 따라 원하는 순간에 갱신할 수도 있고 일정 시간 간격으로 갱신할 수도 있음

[공식문서] : https://swr.vercel.app/   
[참고] : https://velog.io/@silver2473/axios-%EC%99%B8%EA%B8%B8%EC%9D%B8%EC%83%9D-swr%EC%9D%84-%EB%A7%8C%EB%82%98%EB%8B%A4
```
yarn add swr
```

## Skeleton
* Skeleton을 사용해보기 위한 목적
    - NewsList에서 articles가 있는 경우만 NewsItem에 넘기기 때문에 필요 없음
* NewsItem에 article이 없을 경우 skelton으로 로딩중을 표시