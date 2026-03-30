# 06 - Deployment

## Docker

Hệ thống được đóng gói bằng 3 container:

- `task-manager-frontend`
- `task-manager-backend`
- `task-manager-db`

## Docker Compose

File cấu hình:

- [`docker-compose.yml`](../../docker-compose.yml)

Các service:

- `frontend`
- `backend`
- `db`

## Biến môi trường

Hệ thống sử dụng:

- `PORT`
- `APP_NAME`
- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `DB_URL`

## Docker Hub

### Backend image

- `vanhau1410/task-manager-backend:latest`

### Frontend image

- `vanhau1410/task-manager-frontend:latest`

## Quy trình triển khai

1. Build image từ source code
2. Khởi tạo database qua `init.sql`
3. Khởi chạy backend sau khi database healthy
4. Khởi chạy frontend sau backend

## Link triển khai

- Docker Hub backend: `https://hub.docker.com/r/vanhau1410/task-manager-backend`
- Docker Hub frontend: `https://hub.docker.com/r/vanhau1410/task-manager-frontend`
