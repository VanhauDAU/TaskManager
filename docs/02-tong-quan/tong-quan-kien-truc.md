# 02 - Tổng quan

## Kiến trúc hệ thống

Hệ thống được tổ chức theo mô hình 3 thành phần:

1. Frontend
2. Backend
3. Database

## Mô tả thành phần

### Frontend

- Chạy bằng Nginx trong container riêng
- Hiển thị danh sách task
- Gửi request tới backend qua `/api/tasks`
- Có trang `/about` hiển thị thông tin sinh viên

### Backend

- Viết bằng Express.js
- Cung cấp API REST cho task
- Kết nối PostgreSQL bằng thư viện `pg`
- Có endpoint `/health`

### Database

- Dùng PostgreSQL
- Bảng chính là `tasks`
- Được khởi tạo thông qua script SQL

## Luồng hoạt động

1. Người dùng mở frontend tại `http://localhost:8081`
2. Frontend gọi backend để lấy danh sách task
3. Backend truy vấn PostgreSQL
4. Kết quả trả về frontend để hiển thị
5. Khi người dùng tạo hoặc cập nhật task, frontend gửi request tới backend
6. Backend ghi dữ liệu xuống database và trả kết quả mới

## Cấu trúc thư mục chính

```text
backend/
frontend/
database/
docs/
docker-compose.yml
README.md
```

## Cổng sử dụng khi chạy local

- Frontend: `8081`
- Backend: `3001`
- PostgreSQL: chỉ dùng trong mạng nội bộ Docker Compose
