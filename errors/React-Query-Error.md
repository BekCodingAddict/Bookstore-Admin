## React Query SetUp error.

> [!NOTE]
>
> ### Error: [ Server ] Error: Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported.
>
> <... client={{}} children={{...}}>

이 오류는 Next.js가 서버 컴포넌트에서 클라이언트 컴포넌트로 전달되는 데이터의 직렬화(serialization) 규칙을 강제하기 때문에 발생합니다.

### 🚨 오류 원인

오류 메시지를 보면:

"Only plain objects, and a few built-ins, can be passed to Client Components from Server Components."

즉, 서버 컴포넌트에서 클라이언트 컴포넌트로 전달할 수 있는 데이터는 일반 객체(plain object)여야 합니다.
그런데 QueryClient는 **클래스 인스턴스(class instance)**이므로 직렬화가 불가능하여 오류가 발생합니다.

🔍 문제 코드 분석:

- RootLayout.tsx는 기본적으로 서버 컴포넌트입니다.
- QueryClientProvider는 클라이언트 컴포넌트입니다.
- QueryClient는 클래스 객체이므로 서버에서 클라이언트로 직접 전달할 수 없습니다.
  즉, 서버에서 만든 QueryClient 객체를 클라이언트 컴포넌트(QueryClientProvider)로 직접 전달하려고 해서 오류가 발생하는 것입니다.

## ✅ 해결 방법: QueryClient를 클라이언트 컴포넌트에서 생성

🔹 1. QueryProvider.tsx 파일 생성
먼저, QueryClient를 생성하는 로직을 별도의 클라이언트 컴포넌트로 분리해야 합니다.

📌 app/QueryProvider.tsx 생성

```tsx
"use client"; // ✅ 클라이언트 컴포넌트로 설정

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function QueryProvider({ children }: { children: ReactNode }) {
  // ✅ QueryClient가 새로 생성되지 않도록 useState 사용
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
```

- ✅ QueryClient를 클라이언트 컴포넌트 내부에서 생성
- ✅ useState를 사용하여 리렌더링 시 QueryClient가 새로 생성되지 않도록 처리

### 🔹 2. RootLayout.tsx에서 QueryProvider 사용

이제 RootLayout.tsx에서 QueryProvider를 감싸도록 수정합니다.

📌 수정된 RootLayout.tsx

```tsx
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import QueryProvider from "./QueryProvider"; // ✅ QueryProvider 가져오기

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "📚 Bookstore Admin",
  description: "Manage your bookstore easily",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased overflow-hidden`}>
        <QueryProvider>
          {" "}
          {/* ✅ QueryClient를 여기에서 관리 */}
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
```

### 🎯 해결 방법 요약

- ✅ QueryClient를 클라이언트 컴포넌트(QueryProvider.tsx)에서 생성
- ✅ RootLayout.tsx에서 QueryProvider를 감싸도록 수정
- ✅ Next.js의 서버 컴포넌트 & 클라이언트 컴포넌트 구조에 맞게 변경

이제 Next.js의 직렬화 규칙을 준수하면서도 QueryClient를 올바르게 사용할 수 있습니다. 🚀
