# Tài liệu hệ thống Task Manager

Đây là bộ tài liệu kỹ thuật đi kèm dự án `TaskManager` để giảng viên có thể đọc trực tiếp trên GitHub.

## Mục lục

1. [01 - Phân tích](./01-phan-tich/phan-tich-nghiep-vu.md)
2. [02 - Tổng quan](./02-tong-quan/tong-quan-kien-truc.md)
3. [03 - Database](./03-database/thiet-ke-co-so-du-lieu.md)
4. [04 - API](./04-api/tai-lieu-api.md)
5. [05 - Hướng dẫn](./05-huong-dan/huong-dan-cai-dat-va-chay.md)
6. [06 - Deployment](./06-deployment/huong-dan-deployment.md)
7. [07 - Algorithms](./07-algorithms/mo-ta-thuat-toan-nghiep-vu.md)
8. [data.sql](./data.sql)
9. [progress](./progress.md)

## Thông tin nhanh

- Tên dự án: `Task Manager`
- Sinh viên: `Lê Văn Hậu`
- MSSV: `2251220053`
- Lớp: `22CT2`
- GitHub: `https://github.com/VanhauDAU/TaskManager`
- Docker Hub backend: `https://hub.docker.com/r/vanhau1410/task-manager-backend`
- Docker Hub frontend: `https://hub.docker.com/r/vanhau1410/task-manager-frontend`

## Thành phần hệ thống

- Frontend: giao diện HTML/CSS/JavaScript chạy qua Nginx
- Backend: REST API viết bằng Express.js
- Database: PostgreSQL
- Orchestration: Docker Compose

## Chức năng chính

- Xem danh sách task
- Tạo task mới
- Cập nhật trạng thái task
- Xem trang thông tin sinh viên tại `/about`
- Kiểm tra sức khỏe hệ thống qua `/health`
