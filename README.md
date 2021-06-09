## INFORMACIÓN

Servidor NodeJs utilizando el framework de Express (https://expressjs.com/es/) para la administración de notas personales para cada usuario.
Cuenta además con un control de sesiones utilizando la tecnología passport.js (http://www.passportjs.org/) y un cifrado hash de contraseñas usando bcyptjs (https://www.npmjs.com/package/bcryptjs)  . 
El manejo de la base de datos se realiza a través de mongoose utilizando la base de datos NO relacional de MongoDB (https://www.mongodb.com/).

## INSTALACIÓN

**REQUERIMIENTOS**

  - MONGODB: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
  - NODEJS: https://nodejs.org/es/download/
  

  Pasos:
  - Instalación de MongoDB y NodeJs 
  - Abrir un terminal y ejecutar el siguiente comando para ejecutar MongoDB:
      
          mongod
      
      
  - Dentro del directorio raíz ejecutar el servidor Node.js:    
  
          npm run dev
    


## TECNOLOGIAS USADAS

- Servidor NodeJs
- Uso de framework Express
- Uso de passport para las identificaciones de los usuarios
- bcryptjs para el cifrado de texto para contraseñas
- Uso de mongoose para administración de información en la base de datos MongoDB
