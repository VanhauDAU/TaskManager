# Task Manager

Hệ thống quản lý công việc đơn giản phục vụ bài kiểm tra giữa kỳ môn Chuyên đề Công nghệ mới. Dự án được xây dựng theo mô hình đầy đủ gồm `frontend + backend + database`, chạy bằng Docker Compose và có tài liệu kỹ thuật để giảng viên đọc trực tiếp trên GitHub.

## Thông tin dự án

- Tên dự án: `Task Manager`
- Sinh viên: `Lê Văn Hậu`
- MSSV: `2251220053`
- Lớp: `22CT2`
- GitHub: `https://github.com/VanhauDAU/TaskManager`
- Docker Hub backend: `https://hub.docker.com/r/vanhau1410/task-manager-backend`
- Docker Hub frontend: `https://hub.docker.com/r/vanhau1410/task-manager-frontend`

## Mục tiêu

- Xây dựng một ứng dụng có backend, frontend và database thật
- Áp dụng Git, biến môi trường, Docker, Docker Compose
- Có trang thông tin sinh viên tại `/about`
- Có endpoint health check tại `/health`
- Có thể đọc source code và tài liệu trực tiếp trên GitHub

## Công nghệ sử dụng

- Frontend: HTML, CSS, JavaScript, Nginx
- Backend: Node.js, Express.js
- Database: PostgreSQL
- Containerization: Docker
- Orchestration: Docker Compose

## Tính năng chính

- Xem danh sách task từ database PostgreSQL
- Tạo task mới bằng form trên frontend
- Cập nhật trạng thái task
- Xem thông tin sinh viên tại `/about`
- Kiểm tra trạng thái backend bằng `/health`

## Kiến trúc hệ thống

Hệ thống gồm 3 thành phần:

1. `frontend`
2. `backend`
3. `db`

Luồng hoạt động:

1. Người dùng mở frontend
2. Frontend gọi API từ backend
3. Backend truy vấn PostgreSQL
4. Dữ liệu được trả về frontend để hiển thị

## Cách chạy nhanh

### 1. Chuẩn bị file môi trường

Project sử dụng:

- `.env`
- `.env.example`

Nếu cần tạo lại `.env`, sao chép từ `.env.example`.

### 2. Chạy bằng Docker Compose

```bash
docker compose up --build -d
```

### 3. Kiểm tra trạng thái container

```bash
docker compose ps
```

### 4. Truy cập hệ thống

- Frontend: `http://localhost:8081`
- Trang `/about`: `http://localhost:8081/about`
- Health check: `http://localhost:3001/health`

### 5. Dừng hệ thống

```bash
docker compose down
```

## API

| Method | Endpoint | Mô tả |
| --- | --- | --- |
| `GET` | `/health` | Kiểm tra backend hoạt động |
| `GET` | `/api/tasks` | Lấy danh sách task |
| `POST` | `/api/tasks` | Tạo task mới |
| `PUT` | `/api/tasks/:id` | Cập nhật task |

## Cấu trúc thư mục dự án

```text
backend/
  Dockerfile
  package.json
  src/
    db.js
    server.js

frontend/
  Dockerfile
  index.html
  app.js
  styles.css
  about/
    index.html
  nginx/
    default.conf

database/
  Dockerfile
  init.sql

docs/
  muc-luc-tai-lieu.md
  01-phan-tich/
    phan-tich-nghiep-vu.md
  02-tong-quan/
    tong-quan-kien-truc.md
  03-database/
    thiet-ke-co-so-du-lieu.md
  04-api/
    tai-lieu-api.md
  05-huong-dan/
    huong-dan-cai-dat-va-chay.md
  06-deployment/
    huong-dan-deployment.md
  07-algorithms/
    mo-ta-thuat-toan-nghiep-vu.md
  data.sql
  progress.md

docker-compose.yml
README.md
```

## Cấu trúc docs trên GitHub

Thư mục `docs/` được tổ chức để giảng viên đọc dễ dàng:

1. [01 - Phân tích](./docs/01-phan-tich/phan-tich-nghiep-vu.md)
2. [02 - Tổng quan](./docs/02-tong-quan/tong-quan-kien-truc.md)
3. [03 - Database](./docs/03-database/thiet-ke-co-so-du-lieu.md)
4. [04 - API](./docs/04-api/tai-lieu-api.md)
5. [05 - Hướng dẫn](./docs/05-huong-dan/huong-dan-cai-dat-va-chay.md)
6. [06 - Deployment](./docs/06-deployment/huong-dan-deployment.md)
7. [07 - Algorithms](./docs/07-algorithms/mo-ta-thuat-toan-nghiep-vu.md)
8. [data.sql](./docs/data.sql)
9. [progress](./docs/progress.md)

Trang mục lục tài liệu:

- [docs/muc-luc-tai-lieu.md](./docs/muc-luc-tai-lieu.md)

## Biến môi trường

Các biến môi trường đang dùng:

- `PORT`
- `APP_NAME`
- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `DB_URL`

## Docker và triển khai

Project có:

- `Dockerfile` cho backend
- `Dockerfile` cho frontend
- `Dockerfile` cho database
- `docker-compose.yml` để chạy toàn bộ hệ thống

Image đã được push lên Docker Hub:

- `vanhau1410/task-manager-backend:latest`
- `vanhau1410/task-manager-frontend:latest`

## Yêu cầu bài giữa kỳ đã đáp ứng

- [x] Có commit history
- [x] Có ít nhất 3 branch
- [x] Có backend, frontend, database
- [x] Có `/about`
- [x] Có `/health`
- [x] Có `.env` và `.env.example`
- [x] Có Dockerfile
- [x] Có `docker-compose.yml`
- [x] Có image trên Docker Hub

## Ghi chú

- Frontend dùng cổng `8081` và backend dùng cổng `3001` để tránh trùng cổng trên máy local
- Khi mở `/about`, nên dùng tab ẩn danh nếu trình duyệt thường đã cache redirect cũ
