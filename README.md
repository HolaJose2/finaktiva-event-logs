# Finaktiva Event Logs

Este repositorio contiene el código para la aplicación de gestión de eventos "Logs" para Finaktiva.

## `Frontend`
### Pre-Requisitos:
  - Tener NodeJS y npm instalado. (NodeJS trae npm por defecto)
  - Clonar el repositorio o descargar las carpetas como un ZIP.

### Ejecución
Para ejecutar el frontend, sigue estos pasos:


1. Ve a la carpeta `frontend`:
   ```bash
   cd frontend
  
2. Instala todas las dependencias del proyecto ejecutando:
   ```bash
     npm install

3. Ejecuta el proyecto con el comando:
   ```bash
     npm run dev

De esta forma ya tendras la aplicacion ejecutandose, solo debes acceder a la URL que por defecto es http://localhost:5173/:




<br/>
<br/>

## `Backend`
## Pre-Requisitos
  - Tener instalado .NET Core SDK en tu sistema.
  - Tener Visual Studio o Visual Studio Code Instalado

### Ejecución
Para ejecutar el backend, sigue estos pasos:

### Pasos para VISUAL STUDIO:
1. Ve a la carpeta `EventLogsManager` :
   ```bash
     Abre el archivo `EventLogsManager.sln` Este archivo te abrirá la solucion del proyecto en VISUAL STUDIO

2. Ejecuta la aplicacion :
   ```bash
     Inicia la depuracion dandole a F5 o ejecuta el proyecto manualmente en la consola con el comando `dotnet run`

### Pasos para VS CODE:
1. Ve a la carpeta `EventLogsManager` :
   ```bash
     Abre la carpeta `EventLogsManager` que contiene los archivos de la API.

2. Ejecuta la aplicacion :
   ```bash
     Abre la consola y ejecuta el comando `dotnet run`

La aplicacion deberia ejecutarse y ya podrias probar la API desde swagger o POSTMAN http://localhost:5184/api/eventlogs.


## `Ajustes Adicionales`
### Puertos Diferentes:
Si estás ejecutando la API y el frontend en puertos diferentes, asegúrate de ajustar las URLs y puertos en los archivos de configuración correspondientes.

Ejemplo: <br/>
  Si ejecutas el frontend en un puerto diferente a 5173, debes de actualizar la variable de entorno `frontend_url` en el archivo appsettings.json de la API 
  <br/>
  <br/>
  ![image](https://github.com/HolaJose2/finaktiva-event-logs/assets/110427144/c7fbc70e-c962-44d5-8f01-a60e27bc50c9)

  Si ejecutas la API en un puerto diferente a 5184, debes de actualizar la variable de entorno `VITE_ENDPOINT_API_URL` en el archivo .env del frontend.
  <br/>
  <br/>
  ![image](https://github.com/HolaJose2/finaktiva-event-logs/assets/110427144/6715dd3c-fd16-4d11-af92-7b9cd5615a79)



   
