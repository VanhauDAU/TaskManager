# 04 - API

## Tổng quan

Backend cung cấp API REST để phục vụ frontend và kiểm tra hệ thống.

Base URL khi chạy local:

- Backend: `http://localhost:3001`

## Danh sách endpoint

### 1. `GET /health`

Mục đích:

- Kiểm tra backend đang hoạt động

Response:

```json
{
  "status": "ok"
}
```

### 2. `GET /api/tasks`

Mục đích:

- Lấy toàn bộ danh sách task

Response mẫu:

```json
[
  {
    "id": 1,
    "title": "Hoàn thành báo cáo giữa kỳ",
    "description": "Chụp minh chứng và nộp báo cáo",
    "status": "pending",
    "created_at": "2026-03-30T06:49:42.151Z"
  }
]
```

### 3. `POST /api/tasks`

Mục đích:

- Tạo task mới

Request body:

```json
{
  "title": "Viết tài liệu docs",
  "description": "Hoàn thiện thư mục docs cho giảng viên đọc"
}
```

Response thành công:

```json
{
  "id": 2,
  "title": "Viết tài liệu docs",
  "description": "Hoàn thiện thư mục docs cho giảng viên đọc",
  "status": "pending",
  "created_at": "2026-03-30T07:00:00.000Z"
}
```

### 4. `PUT /api/tasks/:id`

Mục đích:

- Cập nhật task đã tồn tại

Request body:

```json
{
  "title": "Viết tài liệu docs",
  "description": "Đã hoàn thiện",
  "status": "completed"
}
```

Response thành công:

```json
{
  "id": 2,
  "title": "Viết tài liệu docs",
  "description": "Đã hoàn thiện",
  "status": "completed",
  "created_at": "2026-03-30T07:00:00.000Z"
}
```

## Xử lý lỗi

- `400`: dữ liệu gửi lên không hợp lệ
- `404`: không tìm thấy task
- `500`: lỗi server hoặc lỗi truy vấn database
