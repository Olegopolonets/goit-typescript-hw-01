import { concatenation } from "./concatenation.js";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
  button.addEventListener("click", () => {
    concatenation("My first TypeScript program, and you wrote", input.value);
  });
}
//# sourceMappingURL=index.js.map
