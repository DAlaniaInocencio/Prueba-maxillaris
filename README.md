# Sistema de Gestión de Tareas - Backend
![image](https://github.com/user-attachments/assets/d5e2db04-f167-4396-941c-8fbdaf5fbd9d)
![image](https://github.com/user-attachments/assets/72cd28c8-7a9d-49ea-8c89-28234a68fcb5)
![image](https://github.com/user-attachments/assets/ec8caa1c-a0e7-424c-abba-19622b8117db)
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
