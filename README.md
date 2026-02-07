# 💊 RINOMED 2026 - App Móvil del Congreso

Demo MVP de la aplicación web móvil para el **Congreso Internacional de Rinología y Cirugía Plástica Facial RINOMED 2026** en Medellín, Colombia.

## 📋 Descripción

Aplicación web progresiva (PWA) que simula la app móvil oficial del congreso RINOMED 2026. Desarrollada con **HTML, CSS y JavaScript puro** + **Font Awesome 6.5**, optimizada para experiencia móvil con diseño profesional de tema oscuro con acentos magenta.

## 🎯 Evento

- **Nombre**: RINOMED 2026 - Congreso Internacional de Rinología y Cirugía Plástica Facial
- **Fechas**: 17-18 de Abril, 2026
- **Sede**: Centro de Eventos El Tesoro
- **Ubicación**: Medellín, Colombia
- **Dirección**: Carrera 25A # 1A Sur - 45, Piso 5
- **Website**: https://rinomedellin.com/
- **Contacto**: +57 320 806 5201

## ✨ Características Implementadas

- ✅ **Tema oscuro profesional**: Diseño con paleta magenta (#C07AB8) sobre fondo negro
- ✅ **Iconografía Font Awesome**: Iconos profesionales médicos y de UI
- ✅ **Login con roles**: Asistente, Profesor, Staff, Admin
- ✅ **Home**: Resumen del evento con accesos rápidos con iconos FA
- ✅ **Agenda completa**: 23 sesiones distribuidas en 2 días con horarios reales
- ✅ **Mi Agenda**: Gestión personalizada de sesiones favoritas
- ✅ **Profesores**: 7 conferencistas internacionales con perfiles detallados
- ✅ **Patrocinadores**: SANOFI, QLUB, GlaxoSmithKline (Gold/Bronze)
- ✅ **Certificado**: Vista previa del certificado de asistencia
- ✅ **Información**: Logística completa del evento
- ✅ **Perfil de usuario**: Estadísticas y gestión de cuenta
- ✅ **Router SPA**: Navegación fluida sin recargas
- ✅ **Persistencia**: localStorage para sesiones favoritas
- ✅ **Logo vectorial**: SVG del logo RINOMED
- ✅ **Diseño responsive**: Simulación móvil en desktop, fullscreen en móviles

## 🎨 Diseño Visual

### Paleta de Colores RINOMED 2026
```css
--primary-color: #C07AB8;      /* Rosa/Magenta principal */
--primary-dark: #a05696;        /* Púrpura oscuro */
--primary-light: #d59bcf;       /* Rosa claro */
--secondary-color: #8B5A9E;     /* Púrpura secundario */
--accent-color: #E94B8A;        /* Rosa vibrante */
--bg-primary: #1C1C1C;          /* Negro fondo */
--bg-secondary: #2A2A2A;        /* Gris oscuro */
--text-primary: #FFFFFF;         /* Texto blanco */
```

### Iconografía Font Awesome
- 🏠 `fa-home` - Inicio
- 📅 `fa-calendar-alt` - Agenda
- 👨‍⚕️ `fa-user-md` - Profesores
- ⭐ `fa-star` - Favoritos
- 🎓 `fa-certificate` - Certificado
- 🤝 `fa-handshake` - Sponsors
- 📍 `fa-map-marker-alt` - Ubicación
- 🏥 `fa-hospital`, `fa-pills`, `fa-procedures` - Patrocinadores

## � Programa del Congreso

### Día 1 - Viernes 17 de Abril (11 sesiones)
- 07:30 - Inscripciones
- 08:00 - Bienvenida
- 08:10 - Bloque 1 (Dr. Froilán Páez)
- 09:20 - Coffee Break
- 09:50 - Conferencista Nacional (Dr. Francisco Rosero)
- 10:20 - Conferencista Nacional (Dr. Mario Montoya)
- 11:40 - Preguntas
- 12:00 - Simposio Almuerzo SANOFI
- 14:00 - Cirugía en Vivo 1 y 2 (Dr. Neves / Dr. Morera)
- 15:30 - Coffee Break
- 20:00 - Cena con Conferencistas

### Día 2 - Sábado 18 de Abril (12 sesiones)
- 07:30 - Bienvenida
- 07:30 - Cirugía en Vivo 3 y 4 (Dr. Montoya / Dr. Páez)
- 09:20 - Coffee Break
- 11:00 - Conferencista Nacional
- 11:30 - Conferencista Nacional
- 12:00 - Preguntas
- 12:00 - Simposio Almuerzo GSK
- 14:00 - Conferencista Internacional (Dr. Morera)
- 14:30 - Conferencista Nacional
- 15:00 - Coffee Break
- 15:30 - Conferencista Internacional (Dr. Noé Herrera)
- 16:00 - Conferencista Internacional (Dr. Neves)

**Total: 23 sesiones programadas**

## 👨‍⚕️ Conferencistas

### Internacionales
- 🇻🇪 **Dr. Froilán Páez** (Venezuela) - Rinoplastia
- 🇵🇹 **Dr. José Carlos Neves** (Portugal) - Cirugía Plástica Facial, EAFPS
- 🇪🇸 **Dr. Eduardo Morera Serna** (España) - Rinoplastia y Cirugía Facial
- 🇲🇽 **Dr. Noé Herrera** (México) - Cirugía Facial Integral, Técnica L grafts

### Nacionales
- 🇨🇴 **Dr. Francisco Rosero** (Colombia) - Rinología
- 🇨🇴 **Dr. Mario Montoya** (Colombia) - Cirugía Plástica Facial
- 🇨🇴 **Dr. Guillermo Landínez** (Colombia) - Presidente Comité Científico

## 💼 Patrocinadores

- 🥇 **Gold**: SANOFI, QLUB Quirófanos
- 🥉 **Bronze**: GlaxoSmithKline

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
├── styles.css       # Estilos tema oscuro RINOMED + responsive
├── app.js          # Lógica, router, datos del congreso y vistas
├── logo.svg        # Logo vectorial RINOMED 2026
└── README.md       # Este archivo
```

## 🔧 Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Flexbox, Grid, Animaciones
- **JavaScript ES6+**: Módulos, Arrow functions, Template literals
- **Font Awesome 6.5.1**: Iconografía profesional (CDN)
- **LocalStorage API**: Persistencia de datos
- **SVG**: Logo vectorial escalable

## 🔐 Autenticación en el Formulario de Registro/Login

### Flujo General

La app utiliza un sistema de autenticación **simulado** (demo) sin contraseña, basado en `localStorage`. No existe un backend ni validación real de credenciales. El formulario de login actúa también como formulario de registro: el usuario ingresa su nombre y selecciona un rol, y queda "registrado" en la sesión del navegador.

### 1. Formulario de Login (`views.login()` en `app.js`)

El formulario se renderiza en la función `views.login()` y contiene dos campos:

- **Nombre** (`#loginName`): Campo de texto libre donde el usuario escribe su nombre. Es obligatorio (`required`).
- **Rol** (`#loginRole`): Un `<select>` con 4 opciones predefinidas: `Asistente`, `Profesor`, `Staff`, `Admin`. También es obligatorio.

No hay campo de contraseña ni validación de identidad. Cualquier nombre y rol permite el acceso.

```html
<form onsubmit="handleLogin(event)">
    <input type="text" id="loginName" placeholder="Ej: Dr. Juan Pérez" required>
    <select id="loginRole" required>
        <option value="">Selecciona tu rol</option>
        <option value="Asistente">Asistente</option>
        <option value="Profesor">Profesor</option>
        <option value="Staff">Staff</option>
        <option value="Admin">Admin</option>
    </select>
    <button type="submit">Entrar al Evento</button>
</form>
```

### 2. Handler de Login (`handleLogin()`)

Cuando el formulario se envía, se ejecuta `handleLogin(event)`:

1. Se previene el comportamiento por defecto del formulario (`event.preventDefault()`).
2. Se leen los valores de los campos `loginName` y `loginRole`.
3. Se guarda un objeto `{ name, role }` en `AppState` y en `localStorage` (clave `demo_orl_user`) mediante `AppState.setUser()`.
4. Se navega a la pantalla de inicio (`router.navigate('home')`).

```javascript
function handleLogin(event) {
    event.preventDefault();
    const name = document.getElementById('loginName').value;
    const role = document.getElementById('loginRole').value;
    AppState.setUser({ name, role });
    router.navigate('home');
}
```

### 3. Estado de la Aplicación (`AppState`)

`AppState` es un objeto global que gestiona el estado de la sesión:

- **`AppState.currentUser`**: Almacena `{ name, role }` del usuario logueado, o `null` si no hay sesión.
- **`AppState.setUser(user)`**: Guarda el usuario en memoria y en `localStorage`.
- **`AppState.logout()`**: Limpia `currentUser`, `mySessions` y remueve los datos de `localStorage`.
- **`AppState.init()`**: Al cargar la app, intenta restaurar la sesión desde `localStorage` con `JSON.parse(localStorage.getItem('demo_orl_user'))`. Nota: no hay manejo de errores (`try/catch`) para `JSON.parse`, por lo que un valor corrupto en `localStorage` podría causar un error en tiempo de ejecución.

### 4. Guardia de Rutas (Route Guard)

El router implementa una verificación básica: si `AppState.currentUser` es `null` y la ruta solicitada no es `login`, redirige automáticamente a la pantalla de login:

```javascript
navigate(route, params = {}) {
    if (!AppState.currentUser && route !== 'login') {
        route = 'login';
    }
    // ...
}
```

### 5. Persistencia de Sesión

La sesión persiste entre recargas del navegador gracias a `localStorage`:

- **Al hacer login**: se guarda `JSON.stringify({ name, role })` en la clave `demo_orl_user`.
- **Al cargar la app**: `AppState.init()` lee `demo_orl_user` del `localStorage` y restaura la sesión.
- **Al hacer logout**: se elimina `demo_orl_user` del `localStorage`.

### 6. Logout y Reset

- **`handleLogout()`**: Pide confirmación al usuario, limpia el estado y redirige al login.
- **`handleReset()`**: Similar al logout, pero diseñado para resetear todos los datos del demo (usuario, sesiones favoritas, etc.).

### ⚠️ Limitaciones de Seguridad (Demo)

| Aspecto | Estado Actual (Demo) | Recomendación para Producción |
|---------|---------------------|-------------------------------|
| **Contraseña** | No existe | Implementar autenticación con contraseña hash (bcrypt) |
| **Validación de identidad** | Ninguna | OAuth 2.0, JWT, o autenticación con correo/teléfono |
| **Almacenamiento de sesión** | `localStorage` (texto plano) | Cookies `httpOnly` + `secure`, tokens JWT con expiración |
| **Protección de rutas** | Solo en el cliente (JS) | Middleware de autenticación en el servidor |
| **Roles** | Auto-seleccionados por el usuario | Asignados por el backend según permisos reales |
| **Datos sensibles** | No aplica | Cifrado en tránsito (HTTPS) y en reposo |

> **Nota**: Este es un demo/MVP. Para producción, se debe implementar un backend con autenticación real (OAuth, JWT), base de datos, y validación server-side.

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
