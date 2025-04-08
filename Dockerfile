
# Base Node.js image
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all files
COPY . .

# Build the application
RUN npm run build

# Production stage - using a simple HTTP server
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install a lightweight HTTP server
RUN npm install -g serve

# Copy the built app
COPY --from=build /app/dist /app

# Expose port 3000 for Traefik to route to
EXPOSE 3000

# Start the static file server
CMD ["serve", "-s", ".", "-l", "3000"]
