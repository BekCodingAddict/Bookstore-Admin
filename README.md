# 📚 Bookstore Admin

>ABOUT:
>이 온라인 서점 관리자 대시보드 웹 애플리케이션은 서점의 책 목록을 관리하고, 책의 상세 정보를 확인하거나 수정하며, 각 책의 판매 수량을 모니터링하는 데 사용됩니다. 이 애플리케이션은 서점 운영자가 책을 쉽게 관리하고, 추가, 수정, 삭제할 수 있는 기능을 제공합니다. 프론트엔드는 Next.js, Tailwind CSS, TypeScript를 사용하여 개발되며, 백엔드는 RESTful API로 구현되어 데이터베이스와 통신하여 책 데이터를 저장하고 조회합니다.

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
- [ ] TypeScript를 사용하여 프론트엔드와 백엔드 간의 타입 안전성 보장

### 4. 보너스 과제 (선택사항)
- [ ] 핵심 기능에 대한 기본적인 테스트 작성
  - [ ] 예: 책 추가/삭제, 책 목록 조회의 정상 동작 테스트

## Tech Stacks:
<img src="https://github.com/BekCodingAddict/3D-Web-Developer-Portfolio/blob/master/src/assets/nextjs.webp" title="Next.js" alt="Next.js" width="40" height="40"/>  <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" title="Tailwind CSS" alt="Tailwind CSS" width="40" height="40"/>  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/>  <img src="https://archive.org/download/github.com-tabler-tabler-icons_-_2020-03-19_21-18-41/cover.jpg" title="Tabler Icons" alt="Tabler Icons" width="40" height="40"/> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" title="Node.js" alt="Node.js" width="40" height="40"/>  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" title="MySQL" alt="MySQL" width="40" height="40"/>  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg" title="Sequelize" alt="Sequelize" width="40" height="40"/>  <img src="https://intrastage.com/wp-content/uploads/2019/09/rest-api-icon.png" title="REST API" alt="REST API" width="40" height="40"/> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg" title="ESLint" alt="ESLint" width="40" height="40"/>  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" title="Git" alt="Git" width="40" height="40"/>  <img src="https://github.com/motdotla/dotenv/raw/master/dotenv.png" title="Dotenv" alt="Dotenv" width="40" height="40"/>  <img src="https://raw.githubusercontent.com/github/explore/main/topics/github/github.png" title="GitHub" alt="GitHub" width="40" height="40"/> 


## Problems & Challanges
| Error & Problem Title | Status | Difficult | Date |
|--|--|--|--|
|[ Hydration failed](https://github.com/BekCodingAddict/Bookstore-Admin/blob/enhancement/errors/Hydration-failed.md) | ![solved](https://img.shields.io/badge/solved-blue) | middle | Feb 14, 2025 |
|[ Params should be awaited](https://github.com/BekCodingAddict/Bookstore-Admin/blob/enhancement/errors/Params.should-be-awaited.md) | ![solved](https://img.shields.io/badge/solved-blue) | low | Feb 14, 2025 |
|[ div cannot be child of tr](https://github.com/BekCodingAddict/Bookstore-Admin/blob/enhancement/errors/Div-cannot-be-child-tr.md) | ![solved](https://img.shields.io/badge/solved-blue) | low | Feb 14, 2025 |

## 실행 방법

## .env file variables
| Variables |
|--|
|TABLE_NAME="Your MySQL Schema Name" |
|ROOT_USERNAME="Your MySQL Root UserName" |
|MYSQL_PASSWORD="Your MySQL Password"|
|DB_HOST="Your DB Local host"|
|DB_PORT="Your Local host port number"|
|NODE_ENV="development"|
|NEXT_PUBLIC_BASE_URL="Your currently running on pablic base url for example: http://localhost:3000"|

