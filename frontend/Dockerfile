# # Use Node.js Alpine image for building the React app
# FROM node:18-alpine as build

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json for installing dependencies
# COPY package*.json ./

# # Install dependencies
# RUN npm install 

# # Copy the rest of the application code
# COPY . .

# # Build the React app
# RUN npm run build
# # EXPOSE 3000

# # Start Nginx
# CMD ["npm", "run", "dev"]
# # CMD ["npm", "run", "build"]

# Layer 1: Telling Docker to use the node:17-alpine image as the base image for the container.
FROM node:18-alpine

# Layer 2: Telling Docker to create a directory called `app` in the container and set it as the working directory.
WORKDIR /app

# Layer 3: Copying the package.json file from the root of the project to the `app` directory in the container.
COPY package*.json ./

# Layer 4: Installing the dependencies listed in the package.json file.
RUN npm install

# Layer 5: Copying all the files from the root of the project to the `app` directory in the container.
COPY . .



# Layer 7: Telling Docker to run the `npm start` command when the container is started.
 CMD ["npm","run","build"]

