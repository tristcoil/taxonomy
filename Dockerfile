# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine 
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
# https://docs.npmjs.com/cli/v9/commands/npm-ci
RUN npm install -g serve
RUN npm install -g pnpm
#RUN npm ci --legacy-peer-deps
RUN pnpm install
#RUN pnpm build   better build directly on dev VM
# Build the app
#RUN npm run build
#RUN npm run preview
# ==== RUN =======
# Set the env to "production"
#ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
#CMD [ "npx", "serve", "build" ]    # refresh causes 404
#CMD [ "serve", "-s", "build" ]
#CMD [ "npm", "run", "preview" ]
CMD [ "pnpm", "start" ]