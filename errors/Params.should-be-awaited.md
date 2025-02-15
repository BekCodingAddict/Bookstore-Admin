## Error: ❌ "params should be awaited before using its properties." 오류 설명

### Explantation:

이 오류는 비동기 함수에서 params 객체를 사용할 때, 해당 객체가 아직 준비되지 않았기 때문에 발생합니다.
즉, params는 비동기적으로 제공되는데, 이를 await 없이 사용하려고 하면 오류가 발생할 수 있습니다.

### 🛠 언제 발생하는가?

Next.js의 useParams 훅을 사용할 때

- Next.js App Router(app/)에서 useParams는 클라이언트 컴포넌트에서 사용할 수 있지만, 비동기 데이터 로딩을 기다리지 않으면 오류가 발생할 수 있습니다.
  예제 (잘못된 코드)

```tsx
"use client";
import { useParams } from "next/navigation";

export default function BookDetail() {
  const params = useParams();
  console.log(params.id); // ❌ params가 아직 로드되지 않았을 수도 있음

  return <div>Book ID: {params.id}</div>;
}
```

해결 방법: useEffect를 사용하여 params가 로드된 후 처리

```tsx
"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookDetail() {
  const params = useParams();
  const [bookId, setBookId] = useState<string | null>(null);

  useEffect(() => {
    if (params?.id) {
      setBookId(params.id);
    }
  }, [params]);

  if (!bookId) return <p>Loading...</p>;
  return <div>Book ID: {bookId}</div>;
}
```

### Next.js API Route에서 params를 비동기적으로 사용할 때 (app/api/ 내부)

- Next.js의 App Router (app/api/.../route.ts)에서 params를 사용할 때 비동기적인 데이터를 기다리지 않고 접근할 경우 발생합니다.
  예제 (잘못된 코드):

```tsx
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  console.log(params.get("id")); // ❌ params가 아직 로드되지 않았을 수 있음

  return NextResponse.json({ id: params.get("id") });
}
```

해결 방법: params는 이미 nextUrl에서 동기적으로 제공되므로, await이 필요하지 않음

```tsx
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams; // ✅ 동기적으로 접근 가능
  const bookId = searchParams.get("id");

  return NextResponse.json({ id: bookId });
}
```

### 🛠 정리 (해결 방법)

- Next.js 클라이언트 컴포넌트에서 useParams를 사용할 때는 useEffect로 감싸기
- Next.js API Route (app/api/.../route.ts)에서는 req.nextUrl.searchParams를 동기적으로 사용하기
- 비동기적으로 데이터를 가져와야 하는 경우 await을 올바르게 사용하기

> [!NOTE]
> 저의 경우에는 아래와 같이 쉽게 해결
>
> ```js
> const { id } = await params;
> ```
