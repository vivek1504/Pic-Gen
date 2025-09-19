# -------------------------------
# Stage 1: Build
# -------------------------------
FROM node:20-bullseye AS builder

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy Prisma schema and source code
COPY prisma ./prisma
COPY tsconfig.json ./
COPY src ./src

# Generate Prisma client
RUN npx prisma generate

# Compile TypeScript
RUN npm run build

# -------------------------------
# Stage 2: Production
# -------------------------------
FROM node:20-bullseye-slim AS production

WORKDIR /usr/src/app

# Install OpenSSL for Prisma runtime
RUN apt-get update -y && apt-get install -y openssl libssl-dev --no-install-recommends && rm -rf /var/lib/apt/lists/*

# Copy only production dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy compiled code and Prisma client
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /usr/src/app/prisma ./prisma

# Expose port
EXPOSE 4000

# Start the server
CMD ["node", "dist/index.js"]
