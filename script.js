
  const dueDate = new Date("2026-04-16T18:00:00Z");

  function updateTime() {
    const now = new Date();
    const diff = dueDate - now;

    const el = document.getElementById("timeRemaining");

    if (diff <= 0) {
      el.textContent = "Overdue!";
      return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) {
      el.textContent = `Due in ${days} day(s)`;
    } else if (hours > 0) {
      el.textContent = `Due in ${hours} hour(s)`;
    } else {
      el.textContent = "Due soon!";
    }
  }

  setInterval(updateTime, 60000);
  updateTime();

  function toggleDone(checkbox) {
    const card = checkbox.closest("article");
    const status = document.getElementById("status");

    if (checkbox.checked) {
      card.classList.add("done");
      status.textContent = "Done";
    } else {
      card.classList.remove("done");
      status.textContent = "Pending";
    }
  }