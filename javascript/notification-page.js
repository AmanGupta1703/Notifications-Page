const readButton = document.querySelector("#notification-header > article > p");
const messageBoxes = document.querySelectorAll(".message-box-item");

readButton.addEventListener("click", (e) => {
  messageBoxes.forEach((mssg) => {
    mssg.classList.toggle("light-grayish-blue-1");
  });
});