# Error: Hydration failed because the server rendered HTML didn't match the client.

Next.js에서 발생하는 Hydration failed 오류는 서버에서 렌더링된 HTML과 클라이언트에서 렌더링된 HTML이 일치하지 않을 때 발생합니다. 이 오류가 나타나는 주요 원인은 다음과 같습니다:

## 🚨 주요 원인

1. 서버와 클라이언트에서 값이 다르게 생성되는 경우
   Math.random() 또는 Date.now() 같은 값은 실행될 때마다 달라지므로, 서버와 클라이언트에서 서로 다른 HTML을 만들게 됩니다.
2. 브라우저에서만 접근 가능한 속성을 SSR에서 사용한 경우
   예: if (typeof window !== 'undefined')를 사용하여 서버와 클라이언트에서 렌더링 결과가 달라지는 경우.
3. 로컬(사용자 환경)에서 포맷팅되는 데이터 사용
   toLocaleString() 같은 날짜 및 시간 포맷이 서버와 클라이언트에서 다르게 렌더링될 수 있음.

4. 외부 API 데이터를 직접 가져올 때 데이터가 변경되는 경우
   SSR에서 데이터를 가져오고, 클라이언트에서 새 데이터를 불러오면 HTML이 다를 수 있음
5. 잘못된 HTML 태그 중첩
   예를 들어, <div><p></div></p> 같은 잘못된 구조를 사용하면 Next.js에서 오류가 발생할 수 있음.
6. 브라우저 확장 프로그램이 HTML을 변경하는 경우
   확장 프로그램이 HTML을 수정하면 클라이언트가 렌더링하는 내용과 일치하지 않을 수 있음.
7. Chrome 브러우저 사용할 때 Chrome Extention Grammarly,Color Picker 같은 프로그램을 동시에 Next.js 프로그램과 같이 쓰면 발생

## ✅ 해결 방법

- 1️⃣ Math.random(), Date.now() 같은 동적인 값을 useEffect 안에서 실행

```js
import { useEffect, useState } from "react";

export default function RandomComponent() {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.random()); // 클라이언트에서만 실행됨
  }, []);

  return <p>Random Number: {randomNumber}</p>;
}
```

- 2️⃣ if (typeof window !== 'undefined') 사용 시 주의
  서버 사이드 렌더링(SSR)에서 window 객체는 존재하지 않음
  아래처럼 직접 서버/클라이언트 분기 처리를 하면 오류가 발생할 수 있음.

```js
// ❌ 잘못된 예시
const isClient = typeof window !== "undefined";
const width = isClient ? window.innerWidth : 0;
```

✅ 해결 방법: useEffect 안에서 실행

```js
import { useEffect, useState } from "react";

export default function WindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth); // 클라이언트에서만 실행됨
  }, []);

  return <p>Window Width: {width}px</p>;
}
```

## 해결

위에 있는 해결책을 다 해 봐지만 오류 발생
저의 경우 오류 원인은 7번있으면 Chrome ColorPicker Extention 삭재 후 오류 없어젔음.
