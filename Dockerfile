# Use the official Node.js image as the base image
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy only the package.json and lock files first to leverage Docker cache
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then \
  yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then \
  npm ci; \
  elif [ -f pnpm-lock.yaml ]; then \
  npm install -g pnpm && pnpm install --frozen-lockfile; \
  else \
  echo "Lockfile not found." && exit 1; \
  fi

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nextjs

# Copy only necessary files to the runner stage
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
RUN mkdir .next && chown nextjs:nodejs .next

# Copy the built application
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Expose the port and set environment variables
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Command to run the app
CMD ["node", "server.js"]
