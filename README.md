# 📚 Bookstore Admin

> ## 📖 프로젝트 개요
> 이 프로젝트는 온라인 서점 관리자 대시보드 웹 애플리케이션은 서점의 책 목록을 관리하고, 책의 상세 정보를 확인하거나 수정하며, 각 책의 판매 수량을 모니터링하는 데 사용됩니다. 이 애플리케이션은 서점 운영자가 책을 쉽게 관리하고, 추가, 수정, 삭제할 수 있는 기능을 제공합니다. 프론트엔드는 Next.js, Tailwind CSS, TypeScript를 사용하여 개발되며, 백엔드는 RESTful API로 구현되어 데이터베이스와 통신하여 책 데이터를 저장하고 조회합니다.

- 👉 [LIVE PREVIEW](https://bookstore-admin-sigma.vercel.app)

## 📑 프로젝트 요구사항

### 1.💻 프론트엔드 요구사항

- [x] Next.js와 TypeScript를 사용하여 웹 애플리케이션 개발
- [x] 책 목록 페이지
  - [x] 페이지당 10개 항목을 표시하는 페이지네이션 적용
  - [x] 책 제목과 저자를 기준으로 검색 기능 구현
- [x] 책 상세 정보 페이지 구현
- [x] 책 추가/제거 및 수량 조절 기능 구현

### 2. 🌐 백엔드 요구사항

- [x] 데이터베이스와 통신하는 기본적인 RESTful API 설계 및 구현
  - [x] 1. 책 목롣 조회 (GET /api/books)
  - [x] 2. 책 상세 정보 조회 (GET /api/books/:id)
  - [x] 3. 책 추가 (POST /api/books)
  - [x] 4. 책 정보 수정 (PUT/api/books/:id)
  - [x] 5. 책 삭제 (DELETE /api/books/:id)

### 3. 추가 요구사항

- [x] TypeScript를 사용하여 프론트엔드와 백엔드 간의 타입 안전성 보장

### 4. 보너스 과제 (선택사항)

- [ ] 핵심 기능에 대한 기본적인 테스트 작성
  - [ ] 예: 책 추가/삭제, 책 목록 조회의 정상 동작 테스트


## 🚀 주요 기능
✅ **책 목록 조회** (검색 및 필터링 포함)  
✅ **책 상세 정보 페이지**  
✅ **책 추가 / 삭제 / 수량 조절 기능**  
✅ **백엔드 API 설계 및 데이터베이스 연동**  
✅ **TypeScript 적용 (프론트엔드 & 백엔드 타입 안전성 보장)**  
✅ **기본적인 테스트 작성 (책 추가/삭제, 목록 조회 테스트 포함)**  

## Tech Stacks:

<img src="https://github.com/BekCodingAddict/3D-Web-Developer-Portfolio/blob/master/src/assets/nextjs.webp" title="Next.js" alt="Next.js" width="40" height="40"/>  <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" title="Tailwind CSS" alt="Tailwind CSS" width="40" height="40"/>  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/>  <img src="https://archive.org/download/github.com-tabler-tabler-icons_-_2020-03-19_21-18-41/cover.jpg" title="Tabler Icons" alt="Tabler Icons" width="40" height="40"/> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" title="Node.js" alt="Node.js" width="40" height="40"/>  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" title="MySQL" alt="MySQL" width="40" height="40"/>  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg" title="Sequelize" alt="Sequelize" width="40" height="40"/>  <img src="https://intrastage.com/wp-content/uploads/2019/09/rest-api-icon.png" title="REST API" alt="REST API" width="40" height="40"/> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg" title="ESLint" alt="ESLint" width="40" height="40"/>  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" title="Git" alt="Git" width="40" height="40"/>  <img src="https://github.com/motdotla/dotenv/raw/master/dotenv.png" title="Dotenv" alt="Dotenv" width="40" height="40"/>  <img src="https://raw.githubusercontent.com/github/explore/main/topics/github/github.png" title="GitHub" alt="GitHub" width="40" height="40"/>

- **Frontend:** Next.js (App Router), Tailwind CSS, TypeScript  
- **Backend:** Next.js API Routes, MySQL (Sequelize)  
- **Deployment:** Vercel

## ⚙️ 설치 및 실행 방법

### 📌 1. **필수 설치 항목**
- Node.js (v16.0.0 or higher)
- MySQL (v5.7 or higher)  
- npm (v8.0.0 or higher)

### 📌 2. **프로젝트 클론**
```bash
git clone https://github.com/yourusername/bookstore-admin.git
cd bookstore-admin
```
### 아니면 그냥 도운러드 받아서 실행 : <code>code->Download ZIP</code> 

### 📌 3. 환경 변수 설정 / (.env Envoirment Variables)

| Variables                                                                                           |
| --------------------------------------------------------------------------------------------------- |
| TABLE_NAME="Your MySQL Schema Name"                                                                 |
| ROOT_USERNAME="Your MySQL Root UserName"                                                            |
| MYSQL_PASSWORD="Your MySQL Password"                                                                |
| DB_HOST="Your DB Local host"                                                                        |
| DB_PORT="Your Local host port number"                                                               |
| NODE_ENV="development"                                                                              |
| NEXT_PUBLIC_BASE_URL="Your currently running on pablic base url for example: http://localhost:3000" |

### 📌 4. 의존성 설치
```bash
npm install
```
### 📌 6. 개발 서버 실행
```bash
npm run dev
```

## 📡 API 정보 (Backend)

| 메서드 | URL  |      설명     |
| ---------------- | ---------------- | ------------------- |
|📍 GET |  /api/books     |  전체 책 목록 조회           |   
| 📍 GET  | /api/books/:id     | 특정 책 정보 조회      |
| 📍 POST |  /api/books   | 새 책 추가       | 
| 📍 PUT |  /api/books/:id    |     책 정보 수정          |
|📍 DELETE  |  /api/books/:id   | 책 삭제    | 

## 📂 프로젝트 폴더 구조

```plaintext
📦 bookstore-admin
 ┣ 📂 config
 ┃ ┣ 📜 mySQL.ts
 ┣ 📂 errors
 ┃ ┣ 📜 ErrorArchives.ts
 ┣ 📂 models
 ┃ ┣ 📜 Boook.ts
 ┣ 📂 public
 ┣ 📂 src
 ┃  ┣ 📂 app
 ┣  ┃ ┣ 📂 api
 ┃  ┃ ┃ ┣ 📂 books  # API 엔드포인트
 ┃  ┃ ┃ ┃ ┣ 📂 [bookId]  # API bookid
 ┃  ┃ ┃ ┃ ┣ 📜 route.ts (GET, POST, PUT, DELETE)
 ┃  ┃ ┃ ┣ 📂 books  # API 엔드포인트
 ┃  ┃ ┃ ┃ ┣ 📂 [bookId]  # API BookId page
 ┃  ┃ ┃ ┣ 📂 components  # UI 컴포넌트
 ┃  ┃ ┃ ┣ 📂 utils
 ┃  ┃ ┃ ┣ 📂 types
 ┣ 📂 utils  # 유틸리티 함수 (DB 연결 등)
 ┣ 📜 .env.local (환경 변수)
 ┣ 📜 next.config.js
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 tsconfig.json
```

## 참고 사항
1. 제가 일부로 Next.js Image 성능 최적화 component를 일부로 안 썼습니다.원인 제가 책 상세 정보를 입력할 때 ImageUrl를 같이 입력하게 했습니다.그래서 Next.js Image를 사용하면 제가 원하는 ImageUrl를 입역할 수 없습니다. 매번 다향한 ImageUrㅣ 입력할 때 nextconfig 파일에 domain 추가해야 되기 떄문입니다. 그낭 img 탁를 쓰면 이런 문제 없기 때문입니다. 
```tsx
      <div className="md:w-1/3">
        {book && (
          <img
            src={book.imageUrl}
            alt={book.title}
            width={250}
            height={350}
            className="rounded-lg shadow-md"
            loading="lazy"
          />
          //   <Image
          //     src={book.imageUrl}
          //     alt={book.title}
          //     width={250}
          //     height={350}
          //     className="rounded-lg shadow-md"
          //   />
        )}
      </div>
```
2. Dashboard 에는 Order,Users,Settings page들을 UI 디자인만 구현해 났습니다. Interactivity가 없습니다!
3. Dashboard에 로그인 할 떄 까자(FAke)user 정보로 고그인 할 수 있게 구현했습니다. Authentication and Authorization 기능 없습니다.
4. 배포된 URL에 방문하시면 Database에서 데이터를 가져 오는데 문제가 있는 것 같습니다.아직 해결 못 했습니다. 그런데 Local Envoirment VsCode에 다 잘 실행되고 있습니다.
   

## 에러 정리 
| Error & Problem Title                                                                                                               | Status                                              | Difficult | Date         |
| ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | --------- | ------------ |
| [Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON](https://github.com/BekCodingAddict/Bookstore-Admin/blob/master/errors/Unexpected-token.md)                 | ![solved](https://img.shields.io/badge/pending-yellow) | middle    | Feb 15, 2025 |
| [ useSearchParams() should be wrapped in a suspense boundary](https://github.com/BekCodingAddict/Bookstore-Admin/blob/master/errors/Wrap-with-Suspense-Boundary.md)  | ![solved](https://img.shields.io/badge/solved-blue) | low       | Feb 15, 2025 |
| [ Hydration failed](https://github.com/BekCodingAddict/Bookstore-Admin/blob/enhancement/errors/Hydration-failed.md)                 | ![solved](https://img.shields.io/badge/solved-blue) | middle    | Feb 14, 2025 |
| [ Params should be awaited](https://github.com/BekCodingAddict/Bookstore-Admin/blob/enhancement/errors/Params.should-be-awaited.md) | ![solved](https://img.shields.io/badge/solved-blue) | low       | Feb 14, 2025 |
| [ div cannot be child of tr](https://github.com/BekCodingAddict/Bookstore-Admin/blob/enhancement/errors/Div-cannot-be-child-tr.md)  | ![solved](https://img.shields.io/badge/solved-blue) | low       | Feb 14, 2025 |


## UI Screenshots

![image](https://github.com/user-attachments/assets/58f8ff28-54f4-4253-8555-7ced6e4d4d53)
![image](https://github.com/user-attachments/assets/23b5d943-6fa0-43a6-a599-99efe5c012e7)
![image](https://github.com/user-attachments/assets/16b619f4-47f2-482b-aef8-4a1888e85984)
![image](https://github.com/user-attachments/assets/96cb224b-eddd-4f78-83de-17d62837aff1)
![image](https://github.com/user-attachments/assets/1ede4be2-9fb4-4826-a8d3-8fb36b23da38)
![image](https://github.com/user-attachments/assets/be53766d-310f-498f-a30f-87d2b4be462d)
![image](https://github.com/user-attachments/assets/9272df55-aa20-47fd-bedf-f080000fcc8b)
![image](https://github.com/user-attachments/assets/4cf24aa6-a90f-4c09-83a6-128bb1641955)




