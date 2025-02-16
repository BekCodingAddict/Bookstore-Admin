## Error: Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON


이 오류는 Unexpected token '<' (예상치 못한 토큰 '<')이 발생했으며, 이는 보통 JSON 데이터를 기대했지만 HTML 파일이 응답된 경우 발생합니다.

### 🔍 오류 원인
1. API 응답이 JSON이 아니라 HTML을 반환함
- 예를 들어, fetch("/api/books") 같은 API 요청을 했지만, JSON이 아닌 HTML 페이지(예: 404 에러 페이지)가 반환된 경우.

2. 잘못된 API 경로 또는 서버 오류
- API 경로(/api/books 등)가 올바르지 않거나, 서버에서 정상적으로 데이터를 반환하지 못했을 가능성이 있음.

3. 서버가 JSON을 반환하지 않음
- 서버가 JSON 대신 HTML을 반환했을 수 있음.
- 예를 들어, res.json()을 사용해야 하는데 res.send() 또는 res.end()를 사용한 경우.

4. Next.js API 라우트 문제
- pages/api/books.ts 같은 API 라우트가 정상적으로 작동하지 않는 경우 발생할 수 있음.


### 🛠 해결 방법
✅ 1. API 응답이 JSON인지 확인
먼저, API가 JSON을 반환하는지 직접 확인하세요.
브라우저에서 http://localhost:3000/api/books(API 경로)로 접근하여 JSON이 표시되는지 확인하세요.
✅ 2. API 응답을 콘솔에서 출력하여 확인
```tsx
const fetchBooks = async () => {
  const res = await fetch("/api/books");
  const text = await res.text(); // JSON이 아닐 경우 대비
  console.log(text); // 실제 응답을 확인
  try {
    const data = JSON.parse(text);
    console.log(data);
  } catch (error) {
    console.error("JSON 파싱 에러:", error);
  }
};
```
콘솔에서 응답이 JSON인지 확인하고, 만약 <html> 태그가 포함되어 있다면 API가 HTML을 반환하고 있다는 뜻입니다.
✅ 3. Next.js API 라우트가 JSON을 반환하도록 수정
app/api/books/route.ts 또는 pages/api/books.ts가 올바르게 작성되었는지 확인하세요.
```tsx
// Next.js API Route (app/api/books/route.ts)
import { NextResponse } from "next/server";
import { connectDB } from "@utils/connectToDb";
import Book from "@models/Book";

export const GET = async () => {
  try {
    await connectDB();
    const books = await Book.findAll();
    return NextResponse.json(books); // ✅ JSON 반환
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch books" }, { status: 500 });
  }
};
```
### 🛠 결론
- JSON 데이터를 기대했는데, HTML이 응답되면서 발생하는 오류입니다.
- API 응답을 직접 확인하고, Next.js API 라우트에서 JSON이 올바르게 반환되는지 점검하세요.
- 콘솔 로그를 추가해서 어떤 데이터가 반환되는지 직접 확인하는 것도 중요합니다. 🚀
