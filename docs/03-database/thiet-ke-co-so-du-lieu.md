# 03 - Database

## Hệ quản trị cơ sở dữ liệu

- PostgreSQL

## Mục đích

Lưu trữ dữ liệu task thật của hệ thống. Dữ liệu không bị hard-code trong frontend hoặc backend.

## Bảng chính

### `tasks`

| Cột | Kiểu dữ liệu | Ý nghĩa |
| --- | --- | --- |
| `id` | `SERIAL` | Khóa chính |
| `title` | `VARCHAR(255)` | Tiêu đề task |
| `description` | `TEXT` | Mô tả task |
| `status` | `VARCHAR(20)` | Trạng thái task |
| `created_at` | `TIMESTAMP` | Thời gian tạo |

## Ràng buộc

- `id` là khóa chính
- `title` bắt buộc nhập
- `status` mặc định là `pending`
- `created_at` mặc định là thời điểm hiện tại

## Script khởi tạo

- File thực tế dùng để khởi tạo database: [`database/init.sql`](../../database/init.sql)
- File tài liệu tham khảo cho giảng viên: [`docs/data.sql`](../data.sql)

## Ví dụ dữ liệu

```sql
INSERT INTO tasks (title, description, status)
VALUES ('Hoàn thành báo cáo giữa kỳ', 'Chụp minh chứng và nộp báo cáo', 'pending');
```
