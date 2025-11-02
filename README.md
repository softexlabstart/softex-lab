# Softex Labs - Landing Page

![Softex Labs](https://softex-labs.xyz/og-image.jpg)

Esta es la landing page oficial de **Softex Labs**, una empresa de desarrollo de software especializada en soluciones tecnológicas innovadoras para PYMES y empresas. El proyecto consiste en una página web estática con un backend serverless para el formulario de contacto.

**[Ver demo en vivo](https://softex-labs.xyz)**

## ✨ Características

- **Diseño Moderno y Responsivo:** Totalmente adaptable a cualquier dispositivo, desde móviles hasta ordenadores de escritorio.
- **Optimización SEO:** Implementación de las mejores prácticas de SEO, incluyendo meta tags, datos estructurados (JSON-LD) y Open Graph.
- **Rendimiento Optimizado:** Carga rápida gracias a la precarga de recursos críticos y el uso de tecnologías eficientes.
- **Alta Accesibilidad (a11y):** Diseñado con etiquetas ARIA y semántica HTML para ser accesible a todos los usuarios.
- **Formulario de Contacto Funcional:**
  - **Backend en Go:** Un endpoint serverless robusto y eficiente.
  - **Notificaciones por Email:** Envío de correos electrónicos al administrador con los datos del formulario.
  - **Validación de Datos:** Validación tanto en el frontend como en el backend.
  - **Rate Limiting:** Protección contra ataques de fuerza bruta y spam.
- **Desplegado en Vercel:** Integración continua y despliegue automático con Vercel.

## 🚀 Tecnologías Utilizadas

### Frontend
- **HTML5**
- **CSS3** con **Tailwind CSS**
- **JavaScript** con **Alpine.js** para la interactividad.
- **Vercel Analytics** para el seguimiento de visitas.

### Backend (Astro API Endpoint)
- **TypeScript**
- **Astro API Routes**
- **Nodemailer** para el envío de correos

## 🛠️ Cómo Empezar

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

- **Node.js** (versión 18.0.0 o superior)
- Un servidor SMTP (como Gmail, SendGrid, etc.) para el envío de correos.

### Configuración de Gmail SMTP

Para usar Gmail como servidor SMTP, necesitas:

1. Tener activada la verificación en dos pasos en tu cuenta de Google
2. Generar una contraseña de aplicación:
   - Ve a tu cuenta de Google
   - Seguridad > Verificación en dos pasos
   - Al final de la página, haz clic en "Contraseñas de aplicación"
   - Selecciona "Otra" como aplicación y dale un nombre (ej. "SoftexLabs Landing")
   - Copia la contraseña generada y úsala como `SMTP_PASS` en tu archivo `.env`

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/softex-labs/landing.git
    cd landing
    ```

2.  **Instala las dependencias de Node.js:**
    ```bash
    npm install
    ```

3.  **Crea un archivo `.env` en la raíz del proyecto** para las variables de entorno del backend. Mira la sección de [Configuración](#%EF%B8%8F-configuración) para más detalles.

4.  **Ejecuta el servidor de desarrollo:**
    El frontend se puede servir localmente con el siguiente comando:
    ```bash
    npm run dev
    ```
    Esto abrirá la página en `http://localhost:3000`.

    Para probar el backend de Go localmente, puedes usar las [Vercel Dev Tools](https://vercel.com/docs/cli#developing-locally).

## ⚙️ Configuración

El backend requiere las siguientes variables de entorno para funcionar correctamente. Crea un archivo `.env` en la raíz del proyecto o configúralas directamente en Vercel.

- `SMTP_HOST`: Host del servidor SMTP (ej. `smtp.gmail.com`)
- `SMTP_PORT`: Puerto del servidor SMTP (ej. `587`)
- `SMTP_USER`: Usuario del servidor SMTP.
- `SMTP_PASS`: Contraseña de aplicación del servidor SMTP.
- `TO_EMAIL`: Email donde se recibirán los mensajes del formulario.
- `ALLOWED_ORIGIN`: El origen permitido para las peticiones CORS (ej. `https://softex-labs.xyz`). Para desarrollo local, puedes usar `*` o `http://localhost:3000`.

**Ejemplo de `.env`:**
```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASS=your_app_password
TO_EMAIL=contact@softex-labs.xyz
ALLOWED_ORIGIN=http://localhost:3000
```

## 🚀 Despliegue

Este proyecto está configurado para ser desplegado en **Vercel**.

1.  **Haz un fork del repositorio** a tu cuenta de GitHub.
2.  **Crea un nuevo proyecto en Vercel** e importa tu repositorio.
3.  **Configura las variables de entorno** en el panel de configuración de Vercel.
4.  **Despliega.** Vercel detectará automáticamente la configuración y desplegará el proyecto. Cada `push` a la rama `main` generará un nuevo despliegue.

## 📄 Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

## 🔧 Quick build (rápido)

Si solo quieres compilar la página estática de forma rápida (incluyendo la generación del CSS de Tailwind), ejecuta:

```bash
# Instala dependencias (si no lo has hecho)
npm install

# Genera el CSS compilado por Tailwind (genera public/build/tailwind.css)
npm run build:css

# Construye la versión estática completa
npm run build

# Para desarrollo con recarga
npm run dev
```

Nota: `npm run build` ya ejecuta `build:css` antes de `astro build` según la configuración de `package.json`.
