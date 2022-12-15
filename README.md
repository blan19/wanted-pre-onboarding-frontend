## Project Demo Link

[Demo](https://wanted-pre-onboarding-frontend-wheat.vercel.app)

## Project Start

**install**

```shell
// npm
npm install or i

// yarn
yarn or yarn install
```

**start**

```shell
npm start
```

## Project Structure

**로그인/회원가입**

- 사용자 입력 값이 패턴과 다를시 에러 메세지를 보여준다.
- 사용자의 입력 값이 올바르다면 버튼 활성화

<img src="https://user-images.githubusercontent.com/66871265/207888657-c1deb52e-9714-4f63-8eba-1c0bc895edb5.png">

<img src="https://user-images.githubusercontent.com/66871265/207888416-6d620190-d641-4563-b3b6-028a78e8384f.png">

**투두리스트 리스트**

- Nested Routing으로 작성 페이지와 리스트 페이지 분리

**투두리스트 작성**

- Context Api를 사용하여 투두리스트 상태 관리

**투두리스트 수정/삭제**

- input을 사용하여 수정모드가 아닐 경우 readOnly 처리
- 수정모드라면 포커싱 이후 readOnly 해제
