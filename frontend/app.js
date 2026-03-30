const form = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks");
const messageElement = document.getElementById("form-message");
const refreshButton = document.getElementById("refresh-btn");

async function fetchTasks() {
  tasksContainer.innerHTML = "<p class=\"empty-state\">Đang tải dữ liệu...</p>";

  try {
    const response = await fetch("/api/tasks");

    if (!response.ok) {
      throw new Error("Không thể tải danh sách task.");
    }

    const tasks = await response.json();
    renderTasks(tasks);
  } catch (error) {
    tasksContainer.innerHTML = `<p class="empty-state">${error.message}</p>`;
  }
}

function renderTasks(tasks) {
  if (!tasks.length) {
    tasksContainer.innerHTML =
      "<p class=\"empty-state\">Chưa có task nào. Hãy tạo task đầu tiên của bạn.</p>";
    return;
  }

  tasksContainer.innerHTML = tasks
    .map(
      (task) => `
        <article class="task-item">
          <h3>${escapeHtml(task.title)}</h3>
          <p class="task-meta">${escapeHtml(task.description || "Không có mô tả")}</p>
          <p class="task-meta">Trạng thái: <strong>${task.status}</strong></p>
          <div class="task-actions">
            <select data-task-id="${task.id}">
              <option value="pending" ${task.status === "pending" ? "selected" : ""}>pending</option>
              <option value="completed" ${task.status === "completed" ? "selected" : ""}>completed</option>
            </select>
            <button type="button" data-update-id="${task.id}">Cập nhật</button>
          </div>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-update-id]").forEach((button) => {
    button.addEventListener("click", async () => {
      const taskId = button.getAttribute("data-update-id");
      const select = document.querySelector(`[data-task-id="${taskId}"]`);
      const task = tasks.find((item) => String(item.id) === String(taskId));

      if (!task || !select) {
        return;
      }

      try {
        const response = await fetch(`/api/tasks/${task.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: task.title,
            description: task.description || "",
            status: select.value,
          }),
        });

        if (!response.ok) {
          throw new Error("Cập nhật task thất bại.");
        }

        await fetchTasks();
      } catch (error) {
        messageElement.textContent = error.message;
      }
    });
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const payload = {
    title: formData.get("title"),
    description: formData.get("description"),
  };

  messageElement.textContent = "Đang lưu task...";

  try {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Không thể tạo task.");
    }

    form.reset();
    messageElement.textContent = `Đã tạo task #${data.id} thành công.`;
    await fetchTasks();
  } catch (error) {
    messageElement.textContent = error.message;
  }
});

refreshButton.addEventListener("click", fetchTasks);

fetchTasks();
