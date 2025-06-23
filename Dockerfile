# Multi-stage Dockerfile for development and production
# Will be customized based on chosen stack during project setup

# Development stage
FROM node:18-alpine AS development

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application code
COPY . .

# Development command (will be overridden by docker-compose)
CMD ["npm", "run", "dev"]

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies and skip scripts (avoid husky in container)
RUN npm ci --only=production --ignore-scripts

# Copy application code
COPY . .

# Build application (command will be added based on stack)
# RUN npm run build

# Production command (will be configured based on stack)
CMD ["node", "index.js"]

# Note: This is a template Dockerfile that will be customized
# during the /project-setup phase based on the chosen stack