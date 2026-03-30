# 07 - Algorithms

## 1. Luồng lấy danh sách task

1. Frontend gửi request `GET /api/tasks`
2. Backend nhận request
3. Backend truy vấn PostgreSQL theo thứ tự mới nhất trước
4. Backend trả JSON cho frontend
5. Frontend render danh sách task

## 2. Luồng tạo task mới

1. Người dùng nhập `title` và `description`
2. Frontend gửi `POST /api/tasks`
3. Backend kiểm tra `title` không được rỗng
4. Backend ghi dữ liệu vào bảng `tasks`
5. Backend trả task vừa tạo
6. Frontend tải lại danh sách task

## 3. Luồng cập nhật task

1. Người dùng chọn trạng thái mới
2. Frontend gửi `PUT /api/tasks/:id`
3. Backend kiểm tra:
   - `id` hợp lệ
   - `title` không rỗng
   - `status` thuộc `pending` hoặc `completed`
4. Backend cập nhật dữ liệu trong PostgreSQL
5. Frontend tải lại danh sách

## 4. Luồng health check

1. Người dùng hoặc giảng viên truy cập `/health`
2. Backend trả `{ "status": "ok" }`
3. Dùng để xác nhận backend đang hoạt động bình thường

## 5. Quy tắc dữ liệu

- Task phải có tiêu đề
- Trạng thái chỉ có `pending` hoặc `completed`
- Thời gian tạo được sinh tự động ở database
