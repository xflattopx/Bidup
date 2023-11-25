# --- Build stage ---
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the source files
COPY . .

# Build and export the NextJS app
RUN npm run build

# --- Runtime stage ---
FROM nginx:1.21

# Copy the exported NextJS app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080
EXPOSE 8080