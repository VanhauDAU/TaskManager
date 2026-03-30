# Task Manager Midterm

Ứng dụng quản lý công việc đơn giản gồm frontend, backend và PostgreSQL.

## Tính năng

- Xem danh sách task
- Tạo task mới
- Cập nhật task
- Trang `/about` hiển thị thông tin sinh viên
- Endpoint `/health` để kiểm tra backend

## Cấu trúc thư mục

- `backend/`: API Express kết nối PostgreSQL
- `frontend/`: giao diện tĩnh chạy bằng Nginx
- `database/`: Dockerfile và script khởi tạo database

## Biến môi trường

Sao chép giá trị từ `.env.example` vào `.env` nếu cần chạy bằng Docker Compose.

## Chạy bằng Docker Compose

```bash
docker compose up --build
```

Sau khi chạy:

- Frontend: `http://localhost:8081`
- About page: `http://localhost:8081/about`
- Backend health check: `http://localhost:3001/health`

## API

- `GET /health`
- `GET /api/tasks`
- `POST /api/tasks`
- `PUT /api/tasks/:id`

## Nộp bài

Cần bổ sung:

- Ít nhất 5 commit và 3 branch: `main`, `develop`, `feature/*`
- Push image `frontend` và `backend` lên Docker Hub
