<div align="center">

# ⛳ Golf Rules API

### Open-Source API for Official Golf Rules

[![Build Status](https://github.com/swingalytica/rules.swingalytica.com/workflows/Build/badge.svg)](https://github.com/swingalytica/rules.swingalytica.com/actions/workflows/build.yml)
[![Lint Status](https://github.com/swingalytica/rules.swingalytica.com/workflows/Lint/badge.svg)](https://github.com/swingalytica/rules.swingalytica.com/actions/workflows/lint.yml)
[![CodeQL](https://github.com/swingalytica/rules.swingalytica.com/workflows/CodeQL%20Advanced/badge.svg)](https://github.com/swingalytica/rules.swingalytica.com/actions/workflows/codeql.yml)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](./LICENSE)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/swingalytica/rules.swingalytica.com)](./package.json)
[![Node Version](https://img.shields.io/badge/node-%3E%3D22.0.0-brightgreen.svg)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![PNPM](https://img.shields.io/badge/pnpm-required-orange.svg)](https://pnpm.io/)

**A comprehensive, structured REST API providing access to official golf rules. Perfect for golf apps, clubs, tournaments, and developers building golf-related software.**

[📚 Documentation](https://swingalytica.com/docs/api/rules) • [🐛 Report Bug](https://github.com/swingalytica/rules.swingalytica.com/issues) • [💡 Request Feature](https://github.com/swingalytica/rules.swingalytica.com/issues)

Built with ❤️ by [Swingalytica](https://swingalytica.com) and the open-source community

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [API Documentation](#-api-documentation)
- [Configuration](#-configuration)
- [Development](#-development)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

## 🎯 About

Golf Rules API is a modern, open-source REST API that provides structured access to official golf rules. Built with Fastify and MongoDB, it offers fast, reliable access to rule texts, categories, and metadata. Whether you're building a golf scoring app, tournament management system, or educational platform, this API makes it easy to integrate official golf rules into your application.

### Why Golf Rules API?

- **✅ Free & Open Source**: Apache 2.0 licensed - use it however you need
- **🚀 Fast & Modern**: Built with Fastify for maximum performance
- **📦 Easy to Use**: RESTful API with intuitive endpoints
- **🔧 Self-Hostable**: Run on your own infrastructure
- **📖 Well Documented**: Comprehensive API documentation
- **🔄 Actively Maintained**: Regular updates and community support

## ✨ Features

### Core Capabilities

- 🎯 **Structured Rule Access**: Query golf rules by ID, category, or search criteria
- 🔍 **Advanced Filtering**: Filter by language, category, version, and more
- 📊 **Grouped & Flat Views**: Get rules individually or grouped by categories
- 🌐 **Multi-language Support**: Access rules in multiple languages (expanding)
- 📈 **Pagination Support**: Efficiently handle large rule sets
- ⚡ **High Performance**: Optimized MongoDB queries and caching
- 🔒 **Type-Safe**: Built with TypeScript for reliability
- 📝 **Validation**: Request validation with Zod schemas
- 🏥 **Health Checks**: Built-in health monitoring endpoints

### Technical Highlights

- **Framework**: Fastify v5 for ultra-fast performance
- **Database**: MongoDB with Mongoose ODM
- **Language**: TypeScript with full type safety
- **Validation**: Zod for request/response validation
- **Testing**: Jest (unit tests) + Playwright (E2E tests)
- **Code Quality**: ESLint + Prettier for consistent code style
- **CI/CD**: GitHub Actions for automated testing and deployment
- **Security**: CodeQL scanning for vulnerability detection

## 🚀 Quick Start

### Prerequisites

- Node.js >= 22.0.0
- PNPM 10.11.0
- MongoDB instance (local or remote)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/swingalytica/rules.swingalytica.com.git
cd rules.swingalytica.com
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` with your settings:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/golfrules
```

4. **Build the project**

```bash
pnpm build
```

5. **Start the server**

```bash
# Development mode with hot reload
pnpm dev

# Production mode
pnpm start
```

The API will be available at `http://localhost:3000`

### Docker Deployment

You can also run the API using Docker:

```bash
# Build the Docker image
docker build -t golfrules-api .

# Run the container
docker run -p 3000:3000 --env-file .env golfrules-api
```

## 📖 API Documentation

### Base URL

```
http://localhost:3000
```

### Endpoints

#### Root Endpoint

```http
GET /
```

Returns API information and metadata.

**Response:**

```json
{
  "name": "golfrules-api",
  "version": "0.1.0",
  "description": "Open source API providing access to official golf rules...",
  "author": "Swingalytica & Contributors",
  "license": "Apache-2.0",
  "docs": "https://swingalytica.com/docs/api/rules",
  "status": 200
}
```

#### Health Check

```http
GET /health
```

Check API and database health.

**Response:**

```json
{
  "message": "Service is healthy",
  "status": 200
}
```

#### Get Rules

```http
GET /v1/rules
```

Retrieve golf rules with optional filtering and pagination.

**Query Parameters:**

| Parameter | Type    | Default | Description                          |
| --------- | ------- | ------- | ------------------------------------ |
| `limit`   | integer | 25      | Number of rules to return (1-25)     |
| `skip`    | integer | 0       | Number of rules to skip (pagination) |
| `grouped` | boolean | true    | Group rules by categories            |
| `id`      | string  | -       | Get a specific rule by ID            |

**Examples:**

Get all rules (grouped):

```bash
curl http://localhost:3000/v1/rules
```

Get a specific rule:

```bash
curl http://localhost:3000/v1/rules?id=1.1
```

Get rules with pagination:

```bash
curl http://localhost:3000/v1/rules?limit=10&skip=20
```

Get flat list of rules:

```bash
curl http://localhost:3000/v1/rules?grouped=false
```

**Response Format (Grouped):**

```json
{
  "grouped_rules": [
    {
      "category": "General Principles",
      "rules": [
        {
          "id": "1.1",
          "title": "The Game, Player Conduct and the Rules",
          "text": "...",
          "language": "en"
        }
      ]
    }
  ]
}
```

**Response Format (Single Rule):**

```json
{
  "rule": {
    "id": "1.1",
    "title": "The Game, Player Conduct and the Rules",
    "text": "...",
    "language": "en"
  }
}
```

### Error Handling

The API returns standard HTTP status codes:

- `200 OK`: Successful request
- `400 Bad Request`: Invalid query parameters
- `404 Not Found`: Rule not found
- `500 Internal Server Error`: Server error

**Error Response Format:**

```json
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "Invalid query parameters: ..."
}
```

## ⚙️ Configuration

### Environment Variables

| Variable      | Required | Default | Description                    |
| ------------- | -------- | ------- | ------------------------------ |
| `PORT`        | Yes      | 3000    | Port number for the API server |
| `MONGODB_URI` | Yes      | -       | MongoDB connection string      |

### MongoDB Setup

The API expects a MongoDB database with a `rules` collection. The rules should follow this schema:

```typescript
{
  id: string;          // Rule identifier (e.g., "1.1")
  title: string;       // Rule title
  text: string;        // Rule content
  language: string;    // Language code (e.g., "en")
  category?: string;   // Rule category
  // ... additional fields
}
```

## 🛠 Development

### Project Structure

```
.
├── src/
│   ├── index.ts              # Application entry point
│   ├── routes/               # API route handlers
│   │   ├── root.ts          # Root endpoint
│   │   ├── health.ts        # Health check endpoint
│   │   └── v1/
│   │       └── rules.ts     # Rules API endpoint
│   ├── lib/                  # Core libraries
│   │   ├── db.ts            # Database connection
│   │   ├── models.ts        # Mongoose models
│   │   ├── schemas/         # Zod validation schemas
│   │   ├── utils/           # Utility functions
│   │   └── const/           # Constants
│   └── types/               # TypeScript type definitions
├── tests/                   # Unit tests
├── e2e/                     # End-to-end tests
└── dist/                    # Compiled output
```

### Available Scripts

```bash
# Development
pnpm dev              # Start development server with hot reload
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint and Prettier checks
pnpm lint:fix         # Fix linting issues automatically

# Testing
pnpm test             # Run all tests (unit + E2E)
pnpm test:unit        # Run unit tests with Jest
pnpm test:e2e         # Run E2E tests with Playwright
```

### Code Style

This project uses:

- **ESLint**: For code linting and best practices
- **Prettier**: For consistent code formatting
- **Husky**: For pre-commit hooks
- **TypeScript**: For type safety

### Making Changes

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run tests: `pnpm test`
4. Run linting: `pnpm lint:fix`
5. Commit your changes: `git commit -m "feat: your feature"`
6. Push to the branch: `git push origin feature/your-feature`
7. Open a Pull Request

## 🧪 Testing

### Unit Tests

```bash
pnpm test:unit
```

Unit tests are written with Jest and located in the `tests/` directory.

### End-to-End Tests

```bash
pnpm test:e2e
```

E2E tests use Playwright and are located in the `e2e/` directory.

### Test Coverage

To generate test coverage reports:

```bash
pnpm test:unit --coverage
```

## 🚢 Deployment

### Production Build

```bash
pnpm build
pnpm start
```

### Docker Deployment

```bash
# Build
docker build -t golfrules-api .

# Run
docker run -d \
  -p 3000:3000 \
  -e PORT=3000 \
  -e MONGODB_URI=your_mongodb_uri \
  --name golfrules-api \
  golfrules-api
```

### Environment-Specific Configuration

For production deployments:

1. Set `NODE_ENV=production`
2. Use a production MongoDB instance
3. Enable logging and monitoring
4. Configure rate limiting and CORS as needed
5. Use a process manager like PM2 or systemd

## 🤝 Contributing

We welcome contributions from the community! Whether it's bug fixes, new features, documentation improvements, or translations, your help is appreciated.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Add tests** for new functionality
5. **Ensure tests pass**: `pnpm test`
6. **Commit your changes**: `git commit -m "feat: add amazing feature"`
7. **Push to the branch**: `git push origin feature/amazing-feature`
8. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Be respectful and constructive

### Reporting Issues

Found a bug or have a feature request? Please [open an issue](https://github.com/swingalytica/rules.swingalytica.com/issues) with:

- A clear title and description
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Any relevant logs or screenshots

## 📄 License

This project is licensed under the **Apache License 2.0** - see the [LICENSE](./LICENSE) file for details.

### What This Means

- ✅ **Commercial use**: Use this in commercial projects
- ✅ **Modification**: Modify and create derivative works
- ✅ **Distribution**: Distribute original or modified versions
- ✅ **Patent use**: Express grant of patent rights
- ⚠️ **Trademark**: No trademark license is granted
- ⚠️ **Liability**: No warranty or liability
- 📋 **Attribution**: Must include copyright notice and license

## 💬 Support

### Get Help

- 📚 [Documentation](https://swingalytica.com/docs/api/rules)
- 🐛 [Issue Tracker](https://github.com/swingalytica/rules.swingalytica.com/issues)
- 💬 [Discussions](https://github.com/swingalytica/rules.swingalytica.com/discussions)

### Contact

- **Website**: [Swingalytica](https://swingalytica.com)
- **Contact**: [Contact Form](https://swingalytica.com/contact)

## 🙏 Acknowledgments

- Built and maintained by [Swingalytica](https://swingalytica.com)
- Powered by [Fastify](https://fastify.io), [MongoDB](https://www.mongodb.com), and [TypeScript](https://www.typescriptlang.org)
- Thanks to all [contributors](https://github.com/swingalytica/rules.swingalytica.com/graphs/contributors)

## 🌟 Star History

If you find this project useful, please consider giving it a star! ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=swingalytica/rules.swingalytica.com&type=Date)](https://star-history.com/#swingalytica/rules.swingalytica.com&Date)

---

<div align="center">

Made with ⛳ by the Golf Rules API Team

[Website](https://swingalytica.com) • [Documentation](https://swingalytica.com/docs/api/rules) • [GitHub](https://github.com/swingalytica/rules.swingalytica.com)

</div>
