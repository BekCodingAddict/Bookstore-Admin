# Bookstore Admin

이 온라인 서점 관리자 대시보드 웹 애플리케이션은 서점의 책 목록을 관리하고, 책의 상세 정보를 확인하거나 수정하며, 각 책의 판매 수량을 모니터링하는 데 사용됩니다. 이 애플리케이션은 서점 운영자가 책을 쉽게 관리하고, 추가, 수정, 삭제할 수 있는 기능을 제공합니다. 프론트엔드는 Next.js, Tailwind CSS, TypeScript를 사용하여 개발되며, 백엔드는 RESTful API로 구현되어 데이터베이스와 통신하여 책 데이터를 저장하고 조회합니다.

## 프로젝트 요구사항
### 1. 프론트엔드 요구사항
- [ ] Next.js와 TypeScript를 사용하여 웹 애플리케이션 개발
- [ ] 책 목록 페이지
  - [ ] 페이지당 10개 항목을 표시하는 페이지네이션 적용
  - [ ] 책 제목과 저자를 기준으로 검색 기능 구현
- [ ] 책 상세 정보 페이지 구현
- [ ]  책 추가/제거 및 수량 조절 기능 구현

### 2. 백엔드 요구사항
- [ ] RESTful API 설계 및 구현
  - [ ] 데이터베이스와 통신하여 책 데이터를 CRUD 처리
  - [ ] 책 정보를 추가, 수정, 삭제, 조회할 수 있는 API 엔드포인트 제공
  - [ ] Express.js 또는 Next.js API routes 사용

### 3. 추가 요구사항
- [ ] TypeScript를 사용하여 프론트엔드와 백엔드 간의 타입 안전성 보장

### 4. 보너스 과제 (선택사항)
- [ ] 핵심 기능에 대한 기본적인 테스트 작성
  - [ ] 예: 책 추가/삭제, 책 목록 조회의 정상 동작 테스트

## Folder Structure:
```arduino
📁 my-bookstore-admin-app/
│
├── 📁 app/
│   ├── 📁 dashboard/                     # 대시보드 관련 페이지
│   │   ├── 📄 page.tsx                   # 대시보드 페이지
│   │   └── 📄 layout.tsx                 # 대시보드 레이아웃
│   ├── 📁 books/                         # 책 관련 페이지
│   │   ├── 📄 page.tsx                   # 책 목록 페이지
│   │   ├── 📄 [id].tsx                   # 책 상세 정보 페이지
│   │   └── 📄 layout.tsx                 # 책 관련 레이아웃
│   ├── 📁 auth/                          # 인증 관련 페이지
│   │   ├── 📄 login.tsx                  # 로그인 페이지
│   │   └── 📄 signup.tsx                 # 회원가입 페이지
│   └── 📄 layout.tsx                     # 전역 레이아웃
│
├── 📁 components/                        # 재사용 가능한 컴포넌트들
│   ├── 📄 Header.tsx                     # 헤더 컴포넌트
│   ├── 📄 Sidebar.tsx                    # 사이드바 컴포넌트
│   └── 📄 BookCard.tsx                   # 책 카드 컴포넌트
│
├── 📁 public/                            # 정적 파일 (이미지, 폰트 등)
│   └── 📁 images/                        # 이미지 폴더
│       └── 📄 logo.png                   # 로고 이미지
│
├── 📁 src/                               # 실제 소스 코드 (optional)
│   ├── 📁 hooks/                         # 커스텀 훅
│   ├── 📁 types/                         # 타입 정의
│   └── 📁 utils/                         # 유틸리티 함수들
│
├── 📁 styles/                            # CSS 파일 (Tailwind CSS 포함)
│   └── 📄 globals.css                    # 전역 스타일
│
├── 📄 .gitignore                         # Git 무시 파일
├── 📄 README.md                          # 프로젝트 설명
├── 📄 tsconfig.json                      # TypeScript 설정
├── 📄 next.config.js                     # Next.js 설정
└── 📄 package.json                       # 프로젝트 설정 및 의존성

```
