const express = require("express");
const cors = require("cors");
const { pool, initializeDatabase } = require("./db");

const app = express();
const PORT = Number(process.env.PORT || 3000);
const APP_NAME = process.env.APP_NAME || "Task Manager Midterm";

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/tasks", async (_req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, title, description, status, created_at FROM tasks ORDER BY created_at DESC, id DESC"
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    res.status(500).json({ message: "Không thể tải danh sách task." });
  }
});

app.post("/api/tasks", async (req, res) => {
  const title = String(req.body.title || "").trim();
  const description = String(req.body.description || "").trim();

  if (!title) {
    return res.status(400).json({ message: "Tiêu đề không được để trống." });
  }

  try {
    const result = await pool.query(
      "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING id, title, description, status, created_at",
      [title, description]
    );

    return res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Failed to create task:", error);
    return res.status(500).json({ message: "Không thể tạo task." });
  }
});

app.put("/api/tasks/:id", async (req, res) => {
  const taskId = Number(req.params.id);
  const title = String(req.body.title || "").trim();
  const description = String(req.body.description || "").trim();
  const status = String(req.body.status || "pending").trim();

  if (!Number.isInteger(taskId)) {
    return res.status(400).json({ message: "Task id không hợp lệ." });
  }

  if (!title) {
    return res.status(400).json({ message: "Tiêu đề không được để trống." });
  }

  if (!["pending", "completed"].includes(status)) {
    return res.status(400).json({ message: "Trạng thái không hợp lệ." });
  }

  try {
    const result = await pool.query(
      `
        UPDATE tasks
        SET title = $1, description = $2, status = $3
        WHERE id = $4
        RETURNING id, title, description, status, created_at
      `,
      [title, description, status, taskId]
    );

    if (!result.rowCount) {
      return res.status(404).json({ message: "Không tìm thấy task." });
    }

    return res.json(result.rows[0]);
  } catch (error) {
    console.error("Failed to update task:", error);
    return res.status(500).json({ message: "Không thể cập nhật task." });
  }
});

app.get("/", (_req, res) => {
  res.json({
    appName: APP_NAME,
    message: "Task Manager backend is running.",
    endpoints: ["/health", "/api/tasks"],
  });
});

async function startServer() {
  try {
    await initializeDatabase();
    app.listen(PORT, () => {
      console.log(`${APP_NAME} backend listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start backend:", error);
    process.exit(1);
  }
}

startServer();
