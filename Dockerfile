
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
RUN npm install -g http-server

# Copy the built app
COPY --from=build /app/dist /app

# Expose port 80 for Traefik to route to
EXPOSE 80

# Start the HTTP server
# Removed the problematic proxy flag and simplified the configuration
CMD ["http-server", ".", "-p", "80", "--cors"]
