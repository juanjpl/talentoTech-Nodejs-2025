
# Talento Tech

Desarrollador Full Stack Node JS

En esta carrera aprenderás a crear servidores web multipropósito con Node JS y Express JS, desarrollar aplicaciones con arquitectura API Rest y trabajar con bases de datos en la nube como Firestore.

https://talentotech.bue.edu.ar/#/






![Logo](https://miro.medium.com/v2/resize:fit:1400/0*GAeU_1Z3ouJ3Mkrf.png)



## Back-End Node JS

Aprenderás a crear servidores web multipropósito con Node JS y Express JS, desarrollar aplicaciones con arquitectura API Rest, y trabajar con bases de datos en la nube como Firestore.

## Pasos a seguir

1) Clonar proyecto

En la carpeta donde quieres alojar el proyecto

git clone https://github.com/juanjpl/talentoTech-Nodejs-2025/tree/Entrega-Final

2) Instalar dependencias

Una vez clonado el repositorio, entra en la carpeta del proyecto:

```bash
cd carpeta-destino
```

3) Iniciar el servidor
Este comando inicia el servidor en modo desarrollo con Nodemon:

```bash
npm run dev
```

4) OPCIONAL Actualizar dependencias 
Para poder todas estas dependencias a su última versión, deberás instalar un paquete llamado npm-check-updates de forma global:

```bash
npm install -g npm-check-updates
```

Esto modificará tu archivo package.json para que todas las dependencias estén listadas en sus últimas versiones.

Una vez completado este proceso, basta con ejecutar el siguiente comando para actualizar todas tus dependencias:

```bash
npm install
```

## Estructura del proyecto

```bash
carpeta-destino/
├── config/                 # Configuraciones generales (DB, variables de entorno, etc.)
│   └── db.js               # Configuración de la base de datos
│
├── controllers/           # Controladores: lógica que responde a las rutas
│   └── products.controller.js
│
├── services/              # Servicios: lógica de negocio reutilizable
│   └── products.service.js
│
├── routes/                # Definición de rutas y middlewares asociados
│   └── products.routes.js
│
├── models/                # Modelos de datos (si usás MongoDB, Sequelize, etc.)
│   └── products.model.js
│
├── middlewares/           # Middlewares personalizados
│   └── auth.middleware.js
│
├── index.js               # Punto de entrada del servidor
├── package.json           # Dependencias y scripts
├── README.md              # Documentación del proyecto
```


