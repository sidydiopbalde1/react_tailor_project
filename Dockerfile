# Étape 1 : Construction de l'application React
FROM node:20-alpine AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Construire l'application
RUN npm run build

# Étape 2 : Servir l'application avec un serveur Node.js
FROM node:20-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de build et le serveur Node.js
COPY --from=build /app/build ./build
COPY --from=build /app/package*.json ./
COPY --from=build /app/server.js ./

# Installer les dépendances pour le serveur
RUN npm install --only=production

# Exposer le port sur lequel le serveur Node va tourner
EXPOSE 3000

# Démarrer le serveur Node
CMD ["node", "server.js"]
