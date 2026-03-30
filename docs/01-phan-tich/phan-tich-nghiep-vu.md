# 01 - Phân tích

## Bài toán

Hệ thống cần quản lý danh sách công việc đơn giản cho người dùng cá nhân. Người dùng có thể tạo task, xem task và cập nhật trạng thái của task. Ngoài ra hệ thống cần có trang thông tin sinh viên và endpoint health check để phục vụ yêu cầu chấm bài.

## Mục tiêu

- Xây dựng một hệ thống đầy đủ gồm frontend, backend và database
- Dữ liệu phải được lưu trong database thật, không hard-code
- Hệ thống phải có thể chạy bằng Docker Compose
- Có thể triển khai và chia sẻ source code trên GitHub

## Đối tượng sử dụng

- Người dùng: thao tác với danh sách task
- Giảng viên: kiểm tra `/about`, `/health`, Docker và mã nguồn

## Use cases chính

- Người dùng xem danh sách task
- Người dùng tạo task mới
- Người dùng cập nhật trạng thái task
- Giảng viên xem trang `/about`
- Giảng viên kiểm tra endpoint `/health`
- Giảng viên kiểm tra hệ thống đang chạy qua Docker Compose

## Phạm vi hiện tại

Hệ thống hiện hỗ trợ:

- Quản lý task ở mức cơ bản
- Một bảng dữ liệu `tasks`
- Một nhóm API REST tối thiểu cho yêu cầu giữa kỳ

Hệ thống chưa mở rộng:

- Xóa task
- Phân quyền người dùng
- Đăng nhập/đăng ký
- Tìm kiếm và lọc task nâng cao

## Use case diagram

Use case diagram có thể được bổ sung bằng file draw.io hoặc ảnh minh họa trong báo cáo.
