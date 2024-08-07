# Use an existing image as a base
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Verify the files are copied
RUN ls -la /usr/src/app

# Expose the port that the app listens on
EXPOSE 3001

# Define the command to run the app
CMD ["node", "src/app.js"]
