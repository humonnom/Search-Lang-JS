import App from "./App.js";

// class가 App인 항목을 모두 가져옴
// index.html의 main 태그의 클래스가 App이므로 main이 모두 가져와짐
new App({ $target: document.querySelector(".App") });
