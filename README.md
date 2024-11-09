# Sistema de Gestión de Tareas - Backend

Este proyecto es una API RESTful desarrollada en NestJs y React que permite gestionar tareas.


## Instalación

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/DAlaniaInocencio/Prueba-maxillaris.git

2. **DENTRO DE LA CARPETA BACK**
    -    agregar un documento ".env.development", agregar los siguientes variables de entorno:
                DB_NAME=
                DB_HOST=
                DB_PORT=
                DB_USERNAME=
                DB_PASSWORD=    
    -    cd back
    -    npm install
    -    npm run start
        
3. **DENTRO DE LA CARPETA FRONT**
   -    cd front
   -    npm install
   -    npm run dev

4. **RUTAS**
   -  GET |  http://localhost:3000/tasks
   -  GET :id|  http://localhost:3000/tasks/:id
   -  PUT :id|  http://localhost:3000/tasks/:id
   -  POST |  http://localhost:3000/tasks/
   -  DELETE :id|  http://localhost:3000/tasks/:id
   -  PATCH :id/completed|  http://localhost:3000/tasks/:id/completed
      
--------------     
