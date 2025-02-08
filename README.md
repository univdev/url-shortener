# 🔗 URL Shortener

> A modern URL shortening service that helps you create concise, shareable links.

![image](./images/Thumbnail.png)

## ✨ Features

- 🎯 **URL Shortening** - Convert long URLs into short, memorable links
- 🔄 **Quick Redirect** - Fast and reliable redirection to original URLs
- 📱 **QR Code Generation** - Generate QR codes for your shortened URLs

## 🚀 Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js 18 or higher
- pnpm (recommended)

### Quick Start

1. Clone the repository:

```bash
git clone https://github.com/univdev/url-shortener
cd url-shortener
```

2. Change .env.development file in apps/server

```.env.development
# Change This file name to .env.development

SERVER_ORIGIN = http://localhost:3000

POSTGRES_PASSWORD=[POSTGRES_PASSWORD] # Change this
POSTGRES_USER=[POSTGRES_USER] # Change this
POSTGRES_DB=[POSTGRES_DB] # Change this

DATABASE_URL="postgresql://[POSTGRES_USER]:[POSTGRES_PASSWORD]@postgres/[POSTGRES_DB]?schema=public" # Change this
```

3. Start the service using Docker Compose:

```bash
docker compose --env-file ./apps/server/.env.development up -d
```

## 🛠️ Tech Stack

- **Backend**: NestJS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Containerization**: Docker

### Features Overview

#### 🔗 URL Shortening

- Input your long URL
- Get an easy-to-share shortened link
- Copy to clipboard with one click

#### 📱 QR Code

- Automatically generated for each shortened URL
- Perfect for offline sharing
- High-quality PNG format

![image](./images/Usage.gif)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
