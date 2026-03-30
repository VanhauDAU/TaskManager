# 05 - Hướng dẫn

## Yêu cầu môi trường

- Docker Desktop
- Docker Compose

## Cách chạy nhanh

Tại thư mục gốc của dự án:

```bash
docker compose up --build -d
```

## Kiểm tra hệ thống

### Kiểm tra container

```bash
docker compose ps
```

### Mở frontend

```text
http://localhost:8081
```

### Mở trang thông tin sinh viên

```text
http://localhost:8081/about
```

### Kiểm tra health check

```text
http://localhost:3001/health
```

### Kiểm tra API tasks

```bash
curl http://localhost:3001/api/tasks
```

## Dừng hệ thống

```bash
docker compose down
```

## Xem log khi có lỗi

```bash
docker compose logs -f
```

## Lưu ý

- Trình duyệt thường có thể cache redirect cũ ở `/about`, nên khi demo nên mở tab ẩn danh
- Frontend dùng cổng `8081` và backend dùng cổng `3001` để tránh trùng cổng trên máy local
