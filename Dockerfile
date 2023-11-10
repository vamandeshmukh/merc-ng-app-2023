# syntax=docker/dockerfile:1

# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install
# RUN mvn install

# Copy the rest of your Angular application files to the container
COPY . .

# Start the development server when the container is run
CMD ["npm", "start"]

# Expose port 4200, which is the default port for the Angular development server
EXPOSE 4200

# commands to run on CMD 
# docker build -t merc-app . 
# docker run -d -p 4200:4200 merc-app


