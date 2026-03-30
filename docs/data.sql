CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT DEFAULT '',
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tasks (title, description, status)
VALUES
  ('Hoàn thành báo cáo giữa kỳ', 'Chụp minh chứng và nộp báo cáo', 'pending'),
  ('Kiểm tra Docker Hub', 'Đảm bảo backend và frontend đã được push', 'completed');
