# Mẫu Tài Liệu Nộp Bài

## Phần A: Thông tin chung

### 1. Thông tin sinh viên

- Họ và tên: Lê Văn Hậu
- Mã số sinh viên: 2251220053
- Lớp: 22CT2

### 2. Giới thiệu ứng dụng

Task Manager là ứng dụng web đơn giản dùng để quản lý công việc hằng ngày.
Người dùng chính là sinh viên hoặc cá nhân cần theo dõi danh sách việc cần làm.
Phạm vi của ứng dụng trong bài giữa kỳ gồm tạo, xem và cập nhật trạng thái task.

### 3. Tính năng

- Xem danh sách task từ database PostgreSQL
- Tạo task mới bằng form trên frontend
- Cập nhật trạng thái task
- Kiểm tra sức khỏe backend qua `/health`
- Hiển thị thông tin sinh viên tại trang `/about`

### 4. Use cases

- Người dùng mở trang chủ để xem danh sách task hiện có
- Người dùng nhập tiêu đề và mô tả để tạo task mới
- Người dùng đổi trạng thái task từ `pending` sang `completed`
- Giảng viên kiểm tra thông tin sinh viên tại trang `/about`
- Giảng viên kiểm tra backend hoạt động qua endpoint `/health`

## Phần B: Minh chứng

### 1. Link repository GitHub

- Điền link repo của bạn tại đây: `https://github.com/VanhauDAU/TaskManager`

### 2. Link Docker Hub

- Điền link image backend: `https://hub.docker.com/r/vanhaudaudau/task-manager-backend`
- Điền link image frontend: `https://hub.docker.com/r/vanhaudaudau/task-manager-frontend`

### 3. Ảnh chụp cần bổ sung

- Ảnh VSCode thể hiện lịch sử commit
- Ảnh GitHub hiển thị danh sách branch
- Ảnh Docker đã cài đặt xong các ứng dụng
- Ảnh trang `/about`
- Ảnh endpoint `/health` hoạt động

## Checklist tự đánh giá

- [ ] Có commit history
- [ ] Có BE + FE + DB
- [x] Có `/about`
- [x] Có `/health`
- [x] Có `.env` và `.env.example`
- [x] Có Dockerfile
- [x] Có `docker-compose.yml`
- [ ] Push Docker Hub
