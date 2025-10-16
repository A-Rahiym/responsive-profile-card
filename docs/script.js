document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("current-time");
  const avatar = document.querySelector('[data-testid="test-user-avatar"]');
  const uploadInput = document.getElementById("avatar-upload");

  uploadInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      avatar.src = url;
      avatar.alt = `Profile photo of ${file.name.split(".")[0]}`;
    }
  });

  function updateTime() {
    requestAnimationFrame(() => {
      timeElement.textContent = Date.now();
      timeElement.style.opacity = 0.5;
      setTimeout(() => (timeElement.style.opacity = 1), 0);
    });
  }
  updateTime();
  setInterval(updateTime, 1000);
});
