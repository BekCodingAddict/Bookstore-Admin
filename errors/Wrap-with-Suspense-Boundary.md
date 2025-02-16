## Error: useSearchParams() should be wrapped in a suspense boundary
이 오류는 Next.js의 useSearchParams() 훅을 사용할 때 반드시 Suspense로 감싸야 한다는 문제입니다. Next.js에서는 useSearchParams() 같은 클라이언트 측 훅을 사용할 경우, 비동기 처리가 필요하므로 Suspense로 감싸야 정상적으로 동작합니다.

### 🔥 오류 분석
- useSearchParams()는 클라이언트 측에서만 실행됩니다.
- 하지만 현재 이 훅이 서버에서 실행되면서 문제가 발생한 것입니다.
- 해결하려면 React의 <Suspense> 컴포넌트로 감싸야 합니다.


### ✅ 해결 방법
1. Suspense로 감싸기

```tsx
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const BookPage = () => {
  const searchParams = useSearchParams();
  const bookId = searchParams.get("bookId"); // URL에서 bookId 가져오기

  return <div>Book ID: {bookId}</div>;
};

// ✅ Suspense로 감싸기
const BookPageWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BookPage />
  </Suspense>
);

export default BookPageWithSuspense;

```
2. "use client"; 추가하기
Next.js의 App Router (app/ 디렉토리)에서는 기본적으로 서버 컴포넌트가 됩니다.
하지만 useSearchParams() 같은 클라이언트 훅을 사용하려면, 반드시 "use client";를 추가해야 합
```tsx
"use client"; // ✅ 클라이언트 컴포넌트로 지정

import { useSearchParams } from "next/navigation";

const BookPage = () => {
  const searchParams = useSearchParams();
  const bookId = searchParams.get("bookId");

  return <div>Book ID: {bookId}</div>;
};

export default BookPage;

```
위처럼 "use client";를 추가하면 Suspense 없이도 동작할 가능성이 있습니다.
하지만 Next.js 공식 문서에서는 가능한 경우 Suspense로 감쌀 것을 권장합니다.
### 🚀 정리
- useSearchParams()는 클라이언트 컴포넌트에서만 사용 가능합니다.
- "use client";를 추가하면 해결될 수도 있지만, 권장 방식은 Suspense로 감싸는 것입니다.
- Next.js 13+ (App Router)를 사용할 때는 기본적으로 서버 컴포넌트이므로 주의해야 합니다.
