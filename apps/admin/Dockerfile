# Stage 1: Build dependencies
FROM node:18-alpine AS installer
WORKDIR /app
# Enable corepack FIRST in base image
RUN corepack enable && corepack prepare pnpm@8.15.6 --activate
COPY . .
RUN pnpm install --frozen-lockfile

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app
# Re-enable corepack in builder stage
RUN corepack enable && corepack prepare pnpm@8.15.6 --activate
COPY --from=installer /app .

# Set build environment (BUILD_ENV is overwritten by docker-compose)
ARG BUILD_ENV=test
ENV NEXT_PUBLIC_NODE_ENV=${BUILD_ENV}
ARG NEXT_PUBLIC_ADMIN_API_KEY=test
ENV NEXT_PUBLIC_ADMIN_API_KEY=${NEXT_PUBLIC_ADMIN_API_KEY}

# Enforce allowed values
RUN if [ "$BUILD_ENV" != "test" ] && [ "$BUILD_ENV" != "production" ]; then echo "❌ Error: Invalid BUILD_ENV value '$BUILD_ENV'"; exit 1; fi

RUN pnpm build:admin

# Stage 3: Runner (Update copy commands)
FROM node:18-alpine AS runner
WORKDIR /app

# Copy standalone server
COPY --from=builder /app/apps/admin/.next/standalone ./
# Copy static assets
COPY --from=builder /app/apps/admin/.next/static ./apps/admin/.next/static
# Copy public folder
COPY --from=builder /app/apps/admin/public ./apps/admin/public

EXPOSE 3000
CMD ["node", "./apps/admin/server.js"]