# Usa una imagen de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install --production

# Copia el código fuente de la aplicación
COPY . .

# Compila el proyecto TypeScript
RUN npm run build

# Expón el puerto en el que la app va a correr
EXPOSE 3000

# Ejecuta la aplicación en producción
CMD ["npm", "run", "start:prod"]
