(() => {
  const clock = document.getElementById("clock");

  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    clock.textContent = `${hours}:${minutes}`;
  }

  updateClock();

  // Update tepat saat menit berganti, bukan menjalankan loop animasi terus-menerus.
  function scheduleNextMinute() {
    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    window.setTimeout(() => {
      updateClock();
      scheduleNextMinute();
    }, Math.max(50, delay));
  }

  scheduleNextMinute();

  // Lively Wallpaper dapat mengirim pesan pause/resume.
  // Tidak ada animasi berat yang perlu berjalan di background.
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) updateClock();
  });

  window.addEventListener("message", (event) => {
    const message = event.data;
    if (message === "lively-resume" || message?.type === "lively-resume") {
      updateClock();
    }
  });
})();
