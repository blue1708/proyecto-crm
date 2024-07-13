# Implementación de un CRM en React

## 1. Configuración del Entorno.
### 1.1 Instalación de Node.js y npm.
### 1.2 Creación de la Aplicación React.
#### 1.2.1 npx create-react-app crm.
### 1.3 Instalación de Dependencias.

## 2. Configuración de Auth0.
### 2.1 Crear una cuenta de Auth0.
### 2.2 Hacer el http del sitio(React).
#### 2.2.1 Modificar el código del HTML (para darle el diseño deseado) y colors (para el pantallazo) del Login.

## 3. Configuración de GitHub.
### 3.1 Crearse una cuenta.
#### 3.1.1 Configurar correctamente el github.
### 3.2 Instalación correctamente del programa Git en el Visual Studio Code.
#### 3.2.1 Montar el Path corrrectamente en VScode.

## 4. Subir tu proyecto a GitHub.
### 4.1 Crear un repositorio nuevo en GitHub (Con un nombre).
#### 4.1.1 No subir o cargar ningun proyecto (se hace todo desde VisualStudioCodde).
### 4.2 Instalar las librerias necesarias para poder subir el proyecto en Visual.
#### 4.2.1 La libreria: "npm install gh-pages --save-dev" entre otras.
### 4.3 Ejecutar los codigo en VisualStudioCode para que se suban todas las carpetas del proyecto en el repositorio que creamos en GitHub.
#### 4.3.1 Revisar que se subieron correctamente el proyecto y las carpetas.
### 4.4 Para generar una liga en github.
#### 4.4.1 Irse a tu repositorio que creamos, entrar en settings y van al apartado de Pages.
#### 4.4.2 Buscar un apartado que dice Branch, donde dice None cambiarlo a gh-pages y se agregara un apartado que dice /root y dar click en save.
### 4.5 Para poder ver tu liga generada
#### 4.5.1 Una vez hecho todo el procedimiento anterior esperar maximo unos 10 minutos en lo que se crea la liga.
#### 4.5.1 Cuando aparesca la liga unicamente lo que tenemos que hacer es darle click al url que te aparece y te manda a la pagina de tu proyecto.

## 5 Cargar los diseños de Tremor y Talwindcss correctamente
### 5.1 Instalar desde Visual las librerias de Tremor.so y Tailwindcss (librerias sacadas de sus sitios web respectivo).
#### 5.1.1 Se creara una carpeta de tremor en node_modules y un js de tailwind en el proyecto.
### 5.2 Modificar la carpeta de @tremor y el js de tailwind.
#### 5.2.1 Para esto lo que hicimos fue agregar 2 carpetas mas para que funcionaran correctamente los estilos que ocupamos de tremor.
#### 5.2.2 Para el js de tailwind solo es copiar un codigo desde el sitio de tailwindcss y modificar el que tenemos en el Visual esto hara que sea compatible con el js.
### 5.3 Implementar tarjetas, gráficos, tablas de tremor a nuestro codigo,en los js de Dashboard, Clientes, o en donde vayamos a ocuparlos.

## 6 Tasa de Retorno
### 6.1 Crear un Carperta de Backend y un archivo dentro de Backend de py para programar la tasa de retorno
### 6.2 Crear otro archivo js dentro de Backend para implementar el código py al js

## 7 Actualizar los nuevos cambios hechos en el proyecto a github.
### 7.1 Una vez hechos las modificaciones que queremos en el proyecto tendremos que poner varios comandos para que se actualicen los cambios en el github y aparescan en nuestra pagina.
### 7.2 Los comandos son:
#### 7.2.1 "git status" para ver los cambios que hiciste y no estan guardados
#### 7.2.2 "git add." para que se guarden dichos cambios
#### 7.2.3 "git -n commit" para poner comentarios de los cambios que hiciste
#### 7.2.4 "git push" envia los cambios hechos a nuestro repositorio de github
#### 7.2.5 "npm run deploy" ejecuta el script de despliegue definido en el archivo package.json, automatizando el proceso de despliegue del proyecto en el entorno de producción.
#### 7.2.6 "npm run build" compila y optimiza el proyecto para producción, generando una versión lista para ser desplegada.
### 7.3 Una vez realizado lo anterior ya no es necesario hacer todos los pasos
#### 7.3.1 puedes hacer los pasos git push, npm run deploy y npm run build