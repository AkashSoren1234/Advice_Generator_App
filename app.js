const url = "https://api.adviceslip.com/advice";

const btn = document.querySelector(".generate_message_click");
const message = document.querySelector(".advice_message");
const advice_id = document.querySelector(".advice_id");

btn.addEventListener("click", () => {
  fetchAdvice();
});

const fetchAdvice = async () => {
  message.textContent = "Loading....";
  advice_id.textContent = "Loading...";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error");
    }
    const data = await response.json();
    advice_id.textContent = `advice #${data.slip.id}`;
    message.textContent = `${data.slip.advice}`;
  } catch (error) {
    message.textContent = `${error.message}`;
    advice_id.textContent = `${error.message}`;
  }
};

fetchAdvice();
