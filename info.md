# 📱 RINOMED 2026 - Documentación Completa del MVP

## 📋 Tabla de Contenidos
1. [Resumen Ejecutivo - Funcionalidades](#-resumen-ejecutivo---funcionalidades)
2. [Descripción General](#descripción-general)
3. [Funcionalidades Principales](#funcionalidades-principales)
4. [Módulos del Sistema](#módulos-del-sistema)
5. [Datos del Evento](#datos-del-evento)
6. [Tecnologías Utilizadas](#tecnologías-utilizadas)
7. [Arquitectura](#arquitectura)

---

## ⚡ Resumen Ejecutivo - Funcionalidades

### Funcionalidades Implementadas (Alto Nivel)

#### 🔐 **1. Autenticación y Gestión de Usuarios**
- Login personalizado con nombre y rol
- Persistencia de sesión con localStorage
- Perfil de usuario con estadísticas
- Cambio de usuario y reset de datos

#### 🏠 **2. Dashboard Interactivo**
- Estadísticas en tiempo real (total sesiones, sesiones guardadas)
- 6 accesos rápidos a funciones principales
- Información destacada del evento

#### 📅 **3. Agenda Completa del Congreso**
- 23 sesiones distribuidas en 2 días (17-18 Abril 2026)
- Navegación por días (Día 1 / Día 2)
- Buscador en tiempo real (título, tema, descripción)
- Filtrado dinámico de sesiones
- Vista detallada de cada sesión

#### 📖 **4. Detalle de Sesiones con Interacción**
- Información completa (horario, sala, nivel, tema, descripción)
- Lista de ponentes asociados con enlaces
- **Sistema de preguntas y respuestas** ⭐
  - Envío de preguntas al ponente
  - Historial de preguntas enviadas
  - Eliminación de preguntas
  - Persistencia en localStorage

#### 👨‍⚕️ **5. Directorio de Conferencistas**
- 7 conferencistas (4 internacionales, 3 nacionales)
- Perfiles completos con biografías
- Lista de sesiones donde participan
- Búsqueda por nombre o especialidad

#### ⭐ **6. Mi Agenda Personalizada**
- Gestión de sesiones favoritas
- Agregar/quitar sesiones
- Vista ordenada por día y hora
- Contador de sesiones guardadas
- Persistencia entre sesiones

#### 🤝 **7. Patrocinadores del Evento**
- 3 sponsors (niveles Gold y Bronze)
- Perfiles detallados de empresas
- Productos y servicios
- Enlaces a sitios web
- Contacto simulado (demo)

#### ℹ️ **8. Información Logística Completa** ⭐
Sistema de 3 pestañas:

**a) Información del Evento**
- Datos completos del congreso
- Sede y ubicación
- Contacto (email, teléfono, WhatsApp)
- Integración con Google Maps

**b) Hoteles Recomendados** ⭐ NUEVO
- 4 hoteles con ratings y precios
- Rango: $120.000 - $320.000 COP/noche
- Distancias al evento
- Amenidades completas
- Contacto directo
- Código promocional RINOMED2026

**c) Turismo en Medellín** ⭐ NUEVO
- 6 actividades recomendadas
- Categorías: Naturaleza, Cultura, Museo, Excursión, Ciencia
- Duraciones y destacados
- Descripción detallada

#### 🎓 **9. Certificado Digital**
- Vista previa personalizada con nombre del usuario
- Información del congreso (20 horas académicas)
- Descarga PDF (simulada en demo)
- Preparado para firma digital y QR en producción

#### 🔍 **10. Búsqueda y Filtrado**
- Búsqueda global en agenda
- Filtrado por día
- Búsqueda de speakers
- Resultados en tiempo real

#### 💾 **11. Persistencia de Datos**
- localStorage para sesión de usuario
- Guardado de sesiones favoritas
- Almacenamiento de preguntas enviadas ⭐
- Recuperación automática al recargar

#### 🎨 **12. Diseño Profesional**
- Tema oscuro RINOMED (magenta #C07AB8 sobre negro #1C1C1C)
- 30+ iconos Font Awesome 6.5.1
- Responsive design (mobile-first)
- Animaciones y transiciones suaves

#### 📱 **13. Navegación SPA**
- Single Page Application (sin recargas)
- Router personalizado con 13 vistas
- 5 tabs principales
- Botón de retroceso inteligente

### Estadísticas del MVP

| Métrica | Valor |
|---------|-------|
| **Sesiones del congreso** | 23 sesiones |
| **Conferencistas** | 7 speakers (4 int., 3 nac.) |
| **Patrocinadores** | 3 empresas |
| **Hoteles** | 4 opciones |
| **Actividades turísticas** | 6 actividades |
| **Vistas de la app** | 13 pantallas |
| **Rutas disponibles** | 13 rutas |
| **Iconos Font Awesome** | 30+ iconos |
| **Líneas de código** | ~2,710 líneas |
| **Tecnologías** | HTML5 + CSS3 + JavaScript ES6 |

### Nuevas Funcionalidades v1.1 ⭐

1. **Sistema de Preguntas Interactivo**
   - Textarea en cada sesión
   - Envío y almacenamiento de preguntas
   - Historial con timestamp
   - Opción de eliminar preguntas

2. **Información de Hoteles**
   - 4 hoteles con detalles completos
   - Ratings, precios, amenidades
   - Sistema de contacto
   - Código promocional

3. **Guía Turística de Medellín**
   - 6 actividades categorizadas
   - Información detallada
   - Duración y destacados
   - Consejo sobre horarios

4. **Sistema de Pestañas en Info**
   - Navegación por tabs
   - Evento / Hoteles / Turismo
   - Animaciones y transiciones

---

## 🎯 Descripción General

**RINOMED 2026** es una aplicación web móvil (MVP Demo) para el Congreso Internacional de Rinología y Cirugía Plástica Facial que se realizará en Medellín, Colombia, los días 17-18 de Abril de 2026.

### Objetivo
Proporcionar a los asistentes una herramienta digital completa para:
- Consultar la agenda del congreso
- Gestionar su asistencia personalizada
- Conocer a los conferencistas internacionales
- Acceder a información logística (hoteles, turismo, ubicación)
- Interactuar enviando preguntas a los ponentes
- Obtener certificado digital de asistencia

---

## 🚀 Funcionalidades Principales

### 1. 🔐 **Sistema de Autenticación**

#### Login Personalizado
- **Campos:**
  - Nombre completo (ej: Dr. Juan Pérez)
  - Rol (Asistente, Profesor, Staff, Admin)
- **Características:**
  - Persistencia de sesión con localStorage
  - No requiere contraseña (MVP demo)
  - Validación de campos obligatorios

#### Gestión de Usuario
- Perfil personalizado con estadísticas
- Cambio de usuario en cualquier momento
- Reset completo de datos demo
- Avatar generado con iniciales del nombre

---

### 2. 🏠 **Dashboard Principal (Home)**

#### Estadísticas en Tiempo Real
- **Total de sesiones:** 23 sesiones programadas
- **Sesiones guardadas:** Contador personal
- Diseño con tarjetas visuales (stat-cards)

#### Accesos Rápidos (6 Botones)
1. **Agenda** → Vista completa del programa
2. **Profesores** → Lista de conferencistas
3. **Certificado** → Vista previa del certificado
4. **Sponsors** → Patrocinadores del evento
5. **Logística** → Info del evento, hoteles, turismo
6. **Mi Agenda** → Sesiones guardadas personalmente

#### Información del Evento
- Sede: Centro de Eventos El Tesoro
- Fechas: 17-18 de Abril, 2026
- Ubicación: Medellín, Colombia

---

### 3. 📅 **Agenda del Congreso**

#### Navegación por Días
- **Día 1:** Viernes 17 de Abril (11 sesiones)
- **Día 2:** Sábado 18 de Abril (12 sesiones)
- Selector de día con tabs activos

#### Buscador en Tiempo Real
- Búsqueda por:
  - Título de la sesión
  - Tema/tópico
  - Descripción
  - Ponente
- Filtrado dinámico sin recargar

#### Tarjetas de Sesión
Cada sesión muestra:
- **Horario:** Hora de inicio y fin
- **Título:** Nombre de la actividad
- **Sala:** Ubicación física
- **Nivel:** Básico, Intermedio, Avanzado
- **Tema:** Categoría (Rinoplastia, Rinología, etc.)
- **Indicador visual:** ⭐ si está guardada en Mi Agenda

#### Total de Sesiones: 23
- Inscripciones y bienvenida
- 3 Coffee breaks
- Almuerzo
- 18 conferencias/bloques académicos

---

### 4. 📖 **Detalle de Sesión**

#### Información Completa
- Horario detallado
- Sala/ubicación
- Nivel académico
- Descripción extendida
- Tema principal (chip/badge)
- Día del evento (chip/badge)

#### Ponentes Asociados
- Lista de speakers que participan
- Mini-tarjetas con:
  - Avatar con iniciales
  - Nombre completo
  - Bandera y país
- Click para ver perfil completo

#### Acciones Disponibles
1. **Agregar/Quitar de Mi Agenda**
   - Botón toggle visual
   - Persistencia en localStorage
   - Feedback inmediato

2. **💬 Sistema de Preguntas** ⭐ NUEVO
   - Textarea para escribir pregunta
   - Botón "Enviar Pregunta"
   - Lista de preguntas enviadas con:
     - Texto de la pregunta
     - Timestamp (fecha y hora)
     - Botón para eliminar
   - Persistencia en localStorage
   - Nota sobre moderación

---

### 5. 👨‍⚕️ **Conferencistas/Speakers**

#### Lista de Profesores (7 total)
- **4 Internacionales:**
  - Dr. Froilán Páez (Uruguay)
  - Dr. Alberto Neves (Brasil)
  - Dr. Iván Morera (Uruguay)
  - Dr. Jorge Herrera (Chile)

- **3 Nacionales:**
  - Dr. Francisco Rosero (Colombia)
  - Dr. Mario Montoya (Colombia)
  - Dr. Carlos Landínez (Colombia)

#### Tarjeta de Speaker
- Avatar con iniciales
- Nombre completo
- Bandera del país
- Especialidad
- Preview de biografía
- Click para ver detalles

#### Perfil Detallado
- Biografía completa
- Especialidades
- País de origen
- Lista de sesiones donde participa (con enlaces)

---

### 6. ⭐ **Mi Agenda Personal**

#### Características
- Lista de sesiones guardadas por el usuario
- Ordenadas por día y hora
- Contador de sesiones totales
- Persistencia entre sesiones

#### Funcionalidades
- Ver detalles de cada sesión (click)
- Botón "Vaciar Agenda" con confirmación
- Estado vacío con mensaje y CTA

#### Indicadores Visuales
- Icono de estrella en cada sesión
- Badge con horario
- Chips con tema
- Diseño destacado

---

### 7. 🤝 **Patrocinadores/Sponsors**

#### Lista de Sponsors (3 empresas)
1. **SANOFI** - Nivel Gold
   - Líder mundial en salud
   - Soluciones farmacéuticas

2. **QLUB Quirófanos** - Nivel Gold
   - Centro quirúrgico Medellín
   - Sede oficial para cirugías en vivo

3. **GlaxoSmithKline (GSK)** - Nivel Bronze
   - Farmacéutica global
   - Investigación médica

#### Tarjeta de Sponsor
- Logo/icono profesional (Font Awesome)
- Nombre de la empresa
- Badge de nivel (Gold/Bronze)
- Descripción breve

#### Detalle de Patrocinador
- Logo grande
- Descripción completa
- Lista de productos/servicios
- Botón "Solicitar Información" (demo)
- Botón "Visitar Sitio Web" (externo)

---

### 8. ℹ️ **Información y Logística**

#### Sistema de Pestañas (3 secciones) ⭐ NUEVO

#### **Pestaña 1: Evento**
- Banner con nombre completo del congreso
- Lista de información:
  - **Sede:** Centro de Eventos El Tesoro
  - **Dirección completa:** Carrera 25A # 1A Sur - 45, Piso 5
  - **Fechas:** 17-18 de Abril, 2026
  - **Email:** info@rinomedellin.com
  - **Teléfono:** +57 320 806 5201
- **Botones de acción:**
  - "Abrir en Google Maps" (integración Maps)
  - "WhatsApp del Evento" (chat directo)

#### **Pestaña 2: Hoteles** ⭐ NUEVO
**4 Hoteles Recomendados:**

1. **Hotel Dann Carlton Medellín** ⭐⭐⭐⭐⭐
   - Rating: 4.5/5
   - Precio: Desde $250.000 COP/noche
   - Distancia: 2.5 km del evento
   - Amenidades: WiFi, Desayuno, Gimnasio, Piscina, Spa
   - Dirección: Cra. 43A #7-50, El Poblado
   - Tel: +57 4 444 5151

2. **Hotel Estelar La Fontana** ⭐⭐⭐⭐
   - Rating: 4.3/5
   - Precio: Desde $180.000 COP/noche
   - Distancia: 1.8 km del evento
   - Amenidades: WiFi, Restaurante, Bar, Centro de negocios
   - Dirección: Cra. 43C #9-51, El Poblado
   - Tel: +57 4 268 2828

3. **Diez Hotel Categoría Colombia** ⭐⭐⭐⭐⭐
   - Rating: 4.7/5
   - Precio: Desde $320.000 COP/noche
   - Distancia: 3.1 km del evento
   - Amenidades: WiFi, Spa Premium, Rooftop Bar, Gimnasio, Room Service 24h
   - Dirección: Cra. 43A #5A-113, El Poblado
   - Tel: +57 4 268 0366

4. **Hotel Poblado Plaza** ⭐⭐⭐
   - Rating: 4.0/5
   - Precio: Desde $120.000 COP/noche
   - Distancia: 2.2 km del evento
   - Amenidades: WiFi, Desayuno, Parking
   - Dirección: Cra. 43A #11A-80, El Poblado
   - Tel: +57 4 266 0909

**Características de cada hotel:**
- Rating visual con estrellas
- Chips con categoría y distancia
- Lista completa de amenidades
- Descripción personalizada
- Botón "Contactar Hotel" con teléfono
- Banner con código promocional: **RINOMED2026**

#### **Pestaña 3: Turismo** ⭐ NUEVO
**6 Actividades Recomendadas en Medellín:**

1. **Parque Arví** 🏔️
   - Categoría: Naturaleza
   - Duración: 4-5 horas
   - Descripción: Reserva natural 16.000 hectáreas, acceso por metrocable
   - Destacados: Senderismo, Mercado agroecológico, Aire puro, Fotografía

2. **Comuna 13 - Graffiti Tour** 🎨
   - Categoría: Cultura
   - Duración: 3 horas
   - Descripción: Barrio transformado, arte urbano, escaleras eléctricas
   - Destacados: Arte urbano, Historia local, Escaleras eléctricas, Gastronomía

3. **Pueblito Paisa** 🏛️
   - Categoría: Turismo
   - Duración: 2 horas
   - Descripción: Réplica pueblo antioqueño, Cerro Nutibara, vista 360°
   - Destacados: Vista panorámica, Artesanías, Café colombiano, Fotografía

4. **Museo de Antioquia** 🏛️
   - Categoría: Museo
   - Duración: 2-3 horas
   - Descripción: Mayor colección de obras de Fernando Botero
   - Destacados: Obras de Botero, Arte colombiano, Plaza Botero, Historia

5. **Guatapé y Piedra del Peñol** 🚩
   - Categoría: Excursión
   - Duración: Día completo
   - Descripción: Pueblo colorido a 2 horas, subir 740 escalones
   - Destacados: Piedra del Peñol, Pueblo pintoresco, Paseo en lancha, Gastronomía

6. **Parque Explora** 🧪
   - Categoría: Ciencia
   - Duración: 3-4 horas
   - Descripción: Museo interactivo, acuario, planetario, +300 experiencias
   - Destacados: Acuario, Planetario, Experimentos, Tecnología

**Características de cada actividad:**
- Icono profesional Font Awesome
- Chips con categoría y duración
- Descripción detallada
- Lista de destacados
- Card con consejo sobre horarios del evento

---

### 9. 🎓 **Certificado Digital**

#### Vista Previa Personalizada
- Icono académico 🎓
- Título: "CERTIFICADO DE ASISTENCIA"
- Nombre del asistente (dinámico)
- Texto formal con datos del evento
- Horas académicas: 20 horas

#### Funcionalidades
- Botón "Descargar PDF" (simulado en demo)
- Nota sobre implementación en producción:
  - Firma digital
  - Código QR de validación
  - Registro en base de datos
  - Verificación de asistencia mínima

---

### 10. 👤 **Perfil de Usuario**

#### Header del Perfil
- Avatar circular con iniciales
- Nombre del usuario
- Rol asignado

#### Información Personal
- Nombre completo
- Rol en el evento

#### Estadísticas del Usuario
- Sesiones guardadas en Mi Agenda
- Total de sesiones del evento

#### Acciones
- Botón "Cambiar Usuario" (con confirmación)
- Versión del app en footer

---

## 📊 Datos del Evento

### Información General
- **Nombre:** RINOMED 2026 - Congreso Internacional de Rinología y Cirugía Plástica Facial
- **Ciudad:** Medellín, Colombia
- **Fechas:** 17-18 de Abril, 2026
- **Sede:** Centro de Eventos El Tesoro
- **Dirección:** Carrera 25A # 1A Sur - 45, Piso 5, Medellín
- **Email:** info@rinomedellin.com
- **Teléfono:** +57 320 806 5201
- **WhatsApp:** +57 320 806 5201
- **Web:** https://rinomedellin.com/

### Programa Académico

#### Día 1 - Viernes 17 de Abril (11 sesiones)
1. 07:30-08:00 - Inscripciones
2. 08:00-08:10 - Bienvenida
3. 08:10-09:20 - Bloque 1 (Dr. Froilán Páez)
4. 09:20-09:50 - Coffee Break
5. 09:50-10:20 - Conferencista Nacional (Dr. Rosero)
6. 10:20-11:40 - Conferencista Nacional (Dr. Montoya)
7. 11:40-12:10 - Conferencista Internacional (Dr. Neves)
8. 12:10-13:30 - Almuerzo
9. 13:30-14:40 - Bloque 2 (Dr. Herrera)
10. 14:40-15:10 - Coffee Break
11. 15:10-16:50 - Bloque 3 (Dr. Morera)

#### Día 2 - Sábado 18 de Abril (12 sesiones)
1. 08:00-08:30 - Inscripciones
2. 08:30-09:40 - Cirugía en vivo 1 (Dr. Froilán Páez)
3. 09:40-10:10 - Coffee Break
4. 10:10-11:20 - Cirugía en vivo 2 (Dr. Neves)
5. 11:20-12:30 - Bloque 4 (Dr. Landínez)
6. 12:30-14:00 - Almuerzo
7. 14:00-15:10 - Bloque 5 (Dr. Herrera)
8. 15:10-15:40 - Coffee Break
9. 15:40-16:50 - Bloque 6 (Dr. Morera)
10. 16:50-17:20 - Conferencista Nacional (Dr. Rosero)
11. 17:20-17:50 - Conferencista Nacional (Dr. Montoya)
12. 17:50-18:00 - Clausura

### Conferencistas (7 profesores)

#### Internacionales (4)
1. **Dr. Froilán Páez** 🇺🇾 Uruguay
   - Especialista en Rinoplastia
   - +20 años experiencia

2. **Dr. Alberto Neves** 🇧🇷 Brasil
   - Cirujano Plástico Facial
   - Experto en técnicas avanzadas

3. **Dr. Iván Morera** 🇺🇾 Uruguay
   - Otorrinolaringólogo
   - Rinología funcional

4. **Dr. Jorge Herrera** 🇨🇱 Chile
   - Cirujano Plástico
   - Técnicas modernas

#### Nacionales (3)
1. **Dr. Francisco Rosero** 🇨🇴 Colombia
   - Otorrinolaringólogo
   - Medellín

2. **Dr. Mario Montoya** 🇨🇴 Colombia
   - Cirujano Plástico Facial
   - Experto local

3. **Dr. Carlos Landínez** 🇨🇴 Colombia
   - Especialista en Rinoplastia
   - Profesor universitario

---

## 💻 Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
  - Variables CSS (custom properties)
  - Flexbox y Grid
  - Animaciones y transiciones
  - Media queries responsive
- **JavaScript ES6+** - Lógica de la aplicación
  - Arrow functions
  - Template literals
  - Modules pattern
  - Array methods (map, filter, find)

### Librerías Externas
- **Font Awesome 6.5.1** (CDN)
  - 30+ iconos profesionales
  - Iconos sólidos (fas)
  - Iconos de marcas (fab)

### Almacenamiento
- **localStorage** - Persistencia de datos
  - Usuario actual
  - Sesiones guardadas
  - Preguntas enviadas
  - Preferencias

### APIs del Navegador
- **History API** - Navegación SPA
- **DOM API** - Manipulación del DOM
- **Events API** - Manejo de eventos

---

## 🏗️ Arquitectura

### Patrón de Diseño
**Single Page Application (SPA)**
- Sin recargas de página
- Router personalizado con hash
- Renderizado dinámico de vistas

### Estructura de Archivos
```
mvp-demo/
├── index.html          # Estructura HTML base
├── styles.css          # Estilos completos (937 líneas)
├── app.js             # Lógica completa (1600+ líneas)
├── logo.svg           # Logo RINOMED vectorial
├── README.md          # Documentación técnica
└── info.md            # Este archivo
```

### Componentes Principales

#### 1. EVENT Object
```javascript
const EVENT = {
    name, city, country, dates, venue,
    address, mapLink, contactEmail,
    contactPhone, website, whatsapp
}
```

#### 2. DATA Object
```javascript
const DATA = {
    days: [],           // Días del evento
    sessions: [],       // 23 sesiones
    speakers: [],       // 7 conferencistas
    sponsors: [],       // 3 patrocinadores
    hotels: [],         // 4 hoteles ⭐ NUEVO
    activities: []      // 6 actividades ⭐ NUEVO
}
```

#### 3. AppState Object
```javascript
const AppState = {
    currentRoute,       // Ruta actual
    currentUser,        // Usuario logueado
    mySessions,         // IDs de sesiones guardadas
    selectedDay,        // Día activo en agenda
    searchQuery,        // Texto de búsqueda
    infoTab,           // Pestaña activa en Info ⭐ NUEVO
    sessionQuestions   // Preguntas por sesión ⭐ NUEVO
}
```

#### 4. Router Object
```javascript
const router = {
    navigate(route),    // Navegar a ruta
    render(route)       // Renderizar vista
}
```

#### 5. Views Object
```javascript
const views = {
    login(),           // Vista de login
    home(),            // Dashboard principal
    agenda(),          // Lista de sesiones
    sessionDetail(id), // Detalle de sesión
    speakers(),        // Lista de conferencistas
    speakerDetail(id), // Perfil de speaker
    myAgenda(),        // Sesiones guardadas
    sponsors(),        // Lista de sponsors
    sponsorDetail(id), // Detalle de sponsor
    info(),            // Logística (con tabs) ⭐ NUEVO
    infoEvent(),       // Sub-vista evento ⭐ NUEVO
    infoHotels(),      // Sub-vista hoteles ⭐ NUEVO
    infoTourism(),     // Sub-vista turismo ⭐ NUEVO
    certificate(),     // Certificado digital
    profile()          // Perfil de usuario
}
```

### Sistema de Navegación

#### Rutas Disponibles
- `/login` - Pantalla de inicio de sesión
- `/home` - Dashboard principal
- `/agenda` - Agenda completa del congreso
- `/session/:id` - Detalle de una sesión específica
- `/speakers` - Lista de conferencistas
- `/speaker/:id` - Perfil de un conferencista
- `/my` - Mi agenda personal
- `/sponsors` - Lista de patrocinadores
- `/sponsor/:id` - Detalle de un patrocinador
- `/info` - Información del evento (3 tabs)
- `/certificate` - Vista previa del certificado
- `/profile` - Perfil del usuario

#### Tabs Principales (5)
1. 🏠 Home (Inicio)
2. 📅 Agenda (Programa)
3. 👨‍⚕️ Speakers (Profesores)
4. ⭐ My (Mi Agenda)
5. ℹ️ Info (Información)

---

## 🎨 Sistema de Diseño

### Paleta de Colores (Tema Oscuro RINOMED)
```css
--primary-color: #C07AB8      /* Rosa/Magenta principal */
--secondary-color: #8B5A9E    /* Púrpura secundario */
--accent-color: #E94B8A       /* Rosa vibrante */
--bg-primary: #1C1C1C         /* Negro principal */
--bg-secondary: #2A2A2A       /* Gris oscuro */
--text-primary: #FFFFFF       /* Blanco */
--text-secondary: #B0B0B0     /* Gris claro */
```

### Componentes de UI

#### Botones
- `.btn-primary` - Acción principal (magenta)
- `.btn-secondary` - Acción secundaria (gris)
- `.btn-accent` - Acción destacada (rosa vibrante)
- `.btn-icon` - Botones de icono

#### Tarjetas
- `.card` - Tarjeta base
- `.card-clickable` - Tarjeta con hover
- `.stat-card` - Tarjeta de estadísticas

#### Badges y Chips
- `.chip-primary` - Chip principal
- `.chip-secondary` - Chip secundario
- `.time-badge` - Badge de horario
- `.tier-badge` - Badge de nivel sponsor
- `.rating-badge` - Badge de calificación ⭐ NUEVO

#### Listas
- `.info-list` - Lista de información
- `.info-item` - Item de lista
- `.quick-access` - Grid de accesos rápidos

#### Forms
- `.input-field` - Campo de texto
- `.input-group` - Grupo de inputs
- `textarea` - Área de texto ⭐ NUEVO

#### Tabs
- `.day-selector` - Selector de días
- `.day-btn` - Botón de día
- `.info-tabs` - Pestañas de información ⭐ NUEVO
- `.info-tab` - Pestaña individual ⭐ NUEVO

---

## 💾 Persistencia de Datos

### localStorage Keys
```javascript
'demo_orl_user'        // Usuario actual
'demo_orl_my_sessions' // IDs de sesiones guardadas
'demo_orl_questions'   // Preguntas por sesión ⭐ NUEVO
```

### Estructura de Datos Guardados

#### Usuario
```json
{
  "name": "Dr. Juan Pérez",
  "role": "Asistente"
}
```

#### Sesiones Guardadas
```json
["s1", "s5", "s12", "s18"]
```

#### Preguntas ⭐ NUEVO
```json
{
  "s3": [
    {
      "text": "¿Cuál es la tasa de éxito de esta técnica?",
      "timestamp": "20/1/2026 14:35",
      "user": "Dr. Juan Pérez"
    }
  ]
}
```

---

## 🔄 Funciones Handlers

### Autenticación
- `handleLogin(event)` - Procesar login
- `handleLogout()` - Cambiar usuario
- `handleReset()` - Limpiar todos los datos

### Navegación
- `handleDayChange(day)` - Cambiar día en agenda
- `handleSearchChange(event)` - Buscar sesiones
- `handleInfoTab(tab)` - Cambiar tab en Info ⭐ NUEVO

### Sesiones
- `handleToggleSession(id)` - Agregar/quitar de Mi Agenda
- `handleClearMyAgenda()` - Vaciar agenda completa
- `handleSendQuestion(sessionId)` - Enviar pregunta ⭐ NUEVO
- `handleDeleteQuestion(sessionId, idx)` - Eliminar pregunta ⭐ NUEVO

### Demo Actions
- `handleDownloadCertificate()` - Simular descarga PDF
- `handleSponsorContact(name)` - Simular contacto

---

## 📱 Responsive Design

### Breakpoints
- Móvil: 375px - 480px
- Contenedor máximo: 480px
- Diseño optimizado para dispositivos móviles

### Adaptaciones
- Header fijo superior
- Tabs fijos inferiores
- Contenido scrollable
- Touch-friendly (44px mínimo)

---

## ✨ Animaciones y Efectos

### Transiciones
- Fade in/out en cambio de vistas
- Hover effects en botones y cards
- Scale en iconos
- Color transitions

### Loading States
- Pulse animation en tabs activos
- Spinner en acciones de carga (preparado)

---

## 🚧 Funcionalidades Demo vs Producción

### Funcionalidades Demo (Simuladas)
- Descarga de certificado PDF
- Envío de preguntas a moderación
- Contacto con sponsors
- Contacto con hoteles

### Para Implementar en Producción
1. **Backend API**
   - Autenticación real con JWT
   - Base de datos (PostgreSQL/MongoDB)
   - API REST o GraphQL

2. **Preguntas en Tiempo Real**
   - WebSockets para actualizaciones live
   - Panel de moderación
   - Notificaciones push

3. **Certificados Digitales**
   - Generación PDF en servidor
   - Firma digital
   - QR code de validación
   - Verificación de asistencia

4. **Hoteles**
   - Integración con API de reservas
   - Disponibilidad en tiempo real
   - Sistema de reservas online

5. **Analytics**
   - Tracking de interacciones
   - Estadísticas de asistencia
   - Dashboard administrativo

6. **Notificaciones**
   - Push notifications
   - Recordatorios de sesiones
   - Alertas de cambios

---

## 📈 Métricas del Proyecto

### Líneas de Código
- **app.js:** ~1,600 líneas
- **styles.css:** ~1,030 líneas
- **index.html:** ~80 líneas
- **Total:** ~2,710 líneas

### Componentes
- **Vistas:** 13 vistas principales
- **Funciones:** 20+ handlers
- **Datos:** 23 sesiones, 7 speakers, 3 sponsors, 4 hoteles, 6 actividades
- **Iconos:** 30+ Font Awesome icons

### Performance
- Sin dependencias pesadas (solo Font Awesome CDN)
- Carga rápida < 1 segundo
- Vanilla JavaScript (sin frameworks)
- localStorage para datos locales

---

## 🎯 Casos de Uso

### Usuario: Asistente al Congreso

1. **Planificación Pre-Evento**
   - Login en la app
   - Revisar agenda completa
   - Seleccionar sesiones de interés
   - Guardar en "Mi Agenda"
   - Revisar perfiles de speakers
   - Consultar información de hoteles
   - Planear actividades turísticas

2. **Durante el Evento**
   - Consultar "Mi Agenda" personalizada
   - Ver detalles de siguiente sesión
   - Enviar preguntas a ponentes
   - Ver ubicación de salas
   - Contactar organización vía WhatsApp

3. **Post-Evento**
   - Ver preguntas enviadas
   - Descargar certificado digital
   - Contactar sponsors de interés

---

## 🔐 Seguridad

### Consideraciones Actuales (Demo)
- No hay autenticación real
- Datos en localStorage (solo cliente)
- Sin encriptación

### Para Producción
- HTTPS obligatorio
- Autenticación con tokens JWT
- Encriptación de datos sensibles
- Validación server-side
- Rate limiting
- Sanitización de inputs

---

## 🐛 Debugging y Soporte

### Console Logs
- Router navigation logs (opcional)
- Error handling básico

### Testing
- Manual testing en Chrome/Firefox/Safari
- Responsive testing (DevTools)
- localStorage testing

---

## 📝 Changelog

### v1.0 (Actual)
- ✅ Sistema de login
- ✅ Dashboard con estadísticas
- ✅ Agenda completa (23 sesiones)
- ✅ 7 conferencistas con perfiles
- ✅ Mi Agenda personalizada
- ✅ 3 sponsors
- ✅ Sistema de búsqueda
- ✅ Certificado digital
- ✅ Tema oscuro RINOMED
- ✅ 30+ iconos Font Awesome

### v1.1 (Reciente) ⭐
- ✅ 4 hoteles recomendados con detalles
- ✅ 6 actividades turísticas en Medellín
- ✅ Sistema de tabs en Info (Evento/Hoteles/Turismo)
- ✅ Sistema de preguntas en sesiones
- ✅ Persistencia de preguntas en localStorage
- ✅ Eliminación de preguntas enviadas

---

## 🎓 Recursos Adicionales

### Sitio Web Oficial
- https://rinomedellin.com/

### Contacto
- **Email:** info@rinomedellin.com
- **Teléfono:** +57 320 806 5201
- **WhatsApp:** +57 320 806 5201

### Redes Sociales
- (Agregar cuando estén disponibles)

---

## 📄 Licencia

Este es un proyecto MVP Demo para fines educativos y de demostración.

---

**Última actualización:** 20 de Enero, 2026
**Versión:** 1.1
**Autor:** Equipo RINOMED 2026
