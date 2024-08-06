# Aplicación de Clima en React

Una aplicación en React que obtiene y muestra información del clima basada en las ciudades seleccionadas por el usuario. Esta app se integra con la API de OpenWeather para proporcionar actualizaciones meteorológicas en tiempo real y soporta múltiples idiomas.

## Características

- Muestra información del clima actual, incluyendo temperatura, temperaturas mínima y máxima, y descripción del clima.
- Soporta múltiples idiomas para las descripciones del clima.
- Permite a los usuarios seleccionar una ciudad para ver su clima.
- Proporciona un formulario de contacto para consultas de usuarios.

## Tecnologías Utilizadas

- React
- Axios
- API de OpenWeather
- CSS para el estilo

## Instalación

Para comenzar con este proyecto, sigue estos pasos:

1. **Clona el Repositorio**

   ```bash
    git clone https://github.com/ERMASMASCAO/Prueba-480
    cd react-weather-app

2. **Instala las dependencias**

    Asegúrate de tener npm instalado. Luego, ejecuta: npm install

3. **Configura las Variables de Entorno**

    Crea un archivo .env en el directorio raíz del proyecto con el siguiente contenido: REACT_APP_OPENWEATHER_API_KEY=tu_clave_api_de_openweather_aqui
    Reemplaza tu_clave_api_de_openweather_aqui con tu clave API real de OpenWeather.

4. **Inicia el Servidor de Desarrollo**

    npm start
    Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador web predeterminado.

5. **Uso**

    - Seleccionar una Ciudad: Usa la barra lateral para elegir una ciudad de las opciones disponibles. La información del clima para la ciudad seleccionada se mostrará.
    - Cambiar Idioma: Usa el selector de idioma en la barra lateral para cambiar entre inglés y español.
    - Formulario de Contacto: Navega al formulario de contacto a través del enlace en la barra lateral para enviar consultas.

6. **Estructura de Carpetas**

    - Estructura de Carpetas
       - src/ - Directorio de código fuente
       - components/ - Contiene componentes de React como ContactForm, Sidebar y Weather.
       - context/ - Contiene proveedores de contexto como LanguageContext.
       - App.js - Componente principal de la aplicación.
       - index.js - Punto de entrada para la aplicación React.
       - index.css - Estilos globales.
    - .env - Archivo de variables de entorno (no se debe incluir en el control de versiones).
    - package.json - Metadatos del proyecto y dependencias.

7. **Pruebas**

    Para ejecutar las pruebas, utiliza el siguiente comando: npm test