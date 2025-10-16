const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  email: "",
  message: "",
};

if (formData.email) form.elements.email.value = formData.email;
if (formData.message) form.elements.message.value = formData.message;

form.addEventListener("input", (e) => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, message } = form.elements;
  if (!email.value.trim() || !message.value.trim()) {
    alert("Lütfen tüm alanları doldur!");
    return;
  }
  console.log({
    email: email.value.trim(),
    message: message.value.trim(),
  });
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
});
