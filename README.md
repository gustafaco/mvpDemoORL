# 🏥 MVP Demo - Evento Médico ORL

Demo MVP de una aplicación web móvil para el **Curso Internacional de Otorrinolaringología** en Medellín, Colombia.

## 📋 Descripción

Esta es una aplicación web demo (MVP) que simula una app móvil para eventos médicos. Desarrollada con **HTML, CSS y JavaScript puro** (sin frameworks ni librerías externas), funciona directamente abriendo el archivo `index.html` en cualquier navegador moderno.

## ✨ Características Implementadas

- ✅ **Login con roles**: Asistente, Profesor, Staff, Admin
- ✅ **Home**: Resumen del evento con accesos rápidos
- ✅ **Agenda interactiva**: Filtrado por día y búsqueda de sesiones
- ✅ **Mi Agenda**: Gestión personalizada de sesiones favoritas
- ✅ **Profesores**: Perfiles detallados con biografías y sesiones
- ✅ **Patrocinadores**: Listado por tiers (Gold/Silver/Bronze)
- ✅ **Certificado**: Vista previa (mock) del certificado de asistencia
- ✅ **Información**: Logística del evento (sede, contacto, mapa)
- ✅ **Perfil de usuario**: Estadísticas y gestión de cuenta
- ✅ **Router SPA**: Navegación interna sin recargar la página
- ✅ **Persistencia**: localStorage para guardar usuario y sesiones favoritas
- ✅ **Diseño responsive**: Simulación de móvil en desktop, full screen en móviles

## 🚀 Cómo Ejecutar

### Opción 1: Abrir directamente
1. Navega a la carpeta `mvp-demo`
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador predeterminado

### Opción 2: Con Live Server (VS Code)
1. Instala la extensión "Live Server" en VS Code
2. Abre la carpeta `mvp-demo` en VS Code
3. Clic derecho en `index.html` → "Open with Live Server"
4. Se abrirá en `http://localhost:5500`

### Opción 3: Con servidor HTTP simple
```bash
# Python 3
python -m http.server 8000

# Node.js (instalar http-server: npm install -g http-server)
http-server -p 8000
```

## 🎯 Cómo Usar el Demo

1. **Login**: Ingresa tu nombre y selecciona un rol (no requiere contraseña, es demo)
2. **Explora**: Navega por las diferentes secciones usando los tabs inferiores
3. **Agenda**: Filtra por día y busca sesiones, agrégalas a "Mi Agenda"
4. **Profesores**: Consulta perfiles y sesiones de cada profesor
5. **Reset**: Usa el botón "Reset Demo" en login para limpiar todos los datos

## ⚙️ Personalización

### Cambiar Datos del Evento

Edita las constantes en `app.js` (líneas 10-20):

```javascript
const EVENT = {
    name: 'Tu Evento',
    city: 'Tu Ciudad',
    dates: 'Tus Fechas',
    venue: 'Tu Sede',
    // ... más configuración
};
```

### Modificar Sesiones, Profesores y Sponsors

En `app.js` (líneas 22-140), edita los arrays:

```javascript
const DATA = {
    days: ['Día 1', 'Día 2'],
    sessions: [ /* tus sesiones */ ],
    speakers: [ /* tus profesores */ ],
    sponsors: [ /* tus patrocinadores */ ]
};
```

### Personalizar Colores

Edita las variables CSS en `styles.css` (líneas 5-25):

```css
:root {
    --primary-color: #00695c;    /* Color principal */
    --secondary-color: #0288d1;  /* Color secundario */
    --accent-color: #ff6f00;     /* Color de acentos/CTAs */
    /* ... más colores */
}
```

## 📱 Pantallas Implementadas

| Ruta | Descripción |
|------|-------------|
| `/login` | Login con nombre y rol |
| `/home` | Inicio con estadísticas y accesos rápidos |
| `/agenda` | Agenda completa con filtros y búsqueda |
| `/session/:id` | Detalle de sesión con ponentes |
| `/speakers` | Listado de profesores |
| `/speaker/:id` | Perfil completo del profesor |
| `/my` | Mi agenda personalizada |
| `/sponsors` | Patrocinadores por tier |
| `/sponsor/:id` | Detalle del patrocinador |
| `/info` | Información logística del evento |
| `/certificate` | Vista previa del certificado |
| `/profile` | Perfil del usuario |

## 🗂️ Estructura de Archivos

```
mvp-demo/
├── index.html       # Estructura HTML y contenedor móvil
├── styles.css       # Estilos y diseño responsive
├── app.js          # Lógica, router, datos y vistas
└── README.md       # Este archivo
```

## 💾 Persistencia (localStorage)

El demo guarda datos en localStorage del navegador:

- **`demo_orl_user`**: Usuario actual (nombre y rol)
- **`demo_orl_my_sessions`**: Array de IDs de sesiones favoritas

Para limpiar datos: usa el botón "Reset Demo" en la pantalla de login.

## 🎨 Componentes de UI

El sistema incluye componentes reutilizables:

- **Cards**: Tarjetas con hover effect
- **Chips/Tags**: Etiquetas para categorías (tema, nivel, tier)
- **Buttons**: Primarios, secundarios, accent, block
- **Inputs**: Campos de texto y selectores
- **Avatar**: Círculos con iniciales
- **Stats Grid**: Tarjetas de estadísticas
- **Quick Access**: Grid de accesos rápidos
- **Search Bar**: Buscador con icono
- **Day Selector**: Botones de filtrado por día
- **Empty State**: Estado vacío con CTA

## 🔧 Demo vs. Producción

### Características DEMO (simuladas)

| Feature | Demo | Producción Real |
|---------|------|----------------|
| **Login** | Sin autenticación | OAuth, JWT, base de datos |
| **Certificados** | Alert simulado | Generación PDF con QR y firma digital |
| **Preguntas** | Alert simulado | Sistema Q&A en tiempo real con moderación |
| **Sponsors** | Alert simulado | CRM para leads, notificaciones |
| **Datos** | Hardcoded en JS | API REST/GraphQL con base de datos |
| **Notificaciones** | N/A | Push notifications para cambios de agenda |
| **Check-in** | N/A | QR scanning para control de asistencia |
| **Networking** | N/A | Chat entre asistentes, agendamiento de reuniones |
| **Encuestas** | N/A | Evaluación de sesiones y feedback |
| **Analytics** | N/A | Dashboard de métricas y engagement |

### Próximas Funcionalidades (Producción)

1. **Backend/API**
   - Node.js/Express o Python/FastAPI
   - Base de datos (PostgreSQL/MongoDB)
   - Autenticación JWT
   - API REST documentada

2. **Features Avanzadas**
   - QR check-in para validar asistencia
   - Certificados con validación blockchain
   - Chat en vivo durante sesiones
   - Networking con match de intereses
   - Sistema de notificaciones push
   - Encuestas post-sesión
   - Votación de mejores ponencias

3. **Admin Panel**
   - CRUD de sesiones, profesores, sponsors
   - Dashboard de analytics
   - Gestión de asistentes
   - Envío masivo de notificaciones
   - Exportación de reportes

4. **Integrations**
   - Calendar sync (Google/Outlook)
   - Video conferencing (Zoom/Teams)
   - CRM (HubSpot/Salesforce)
   - Email marketing (Mailchimp)
   - Payment gateway (Stripe/PayPal)

## 🌐 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari 12+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 🐛 Troubleshooting

### No se guardan los datos
- Verifica que el navegador permita localStorage
- Revisa la consola del navegador (F12) para errores
- Intenta con modo incógnito desactivado

### El diseño no se ve bien
- Asegúrate de que `styles.css` se cargue correctamente
- Limpia caché del navegador (Ctrl+Shift+R)
- Verifica que todos los archivos estén en la misma carpeta

### La navegación no funciona
- Abre la consola del navegador (F12) y busca errores
- Verifica que `app.js` se cargue correctamente
- Asegúrate de estar usando un navegador moderno

## 📄 Licencia

Este es un proyecto demo educativo. Libre para usar y modificar.

## 👨‍💻 Desarrollo

**Stack**: HTML5 + CSS3 + Vanilla JavaScript  
**Versión**: 1.0  
**Fecha**: Enero 2026  

## 📞 Contacto

Para más información sobre el curso real de Otorrinolaringología:
- 📧 Email: info@cursoorl-medellin.com
- 📞 Teléfono: +57 (4) 444-5555

---

**Nota**: Esta es una aplicación **demo** con datos ficticios creada como MVP para demostrar funcionalidades de una app para eventos médicos. No representa un evento real.
