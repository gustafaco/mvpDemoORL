/* ============================================
   APP.JS - MVP DEMO EVENTO MÉDICO ORL
   Curso de Otorrinolaringología - Medellín 2026
   ============================================ */

// ============================================
// CONFIGURACIÓN DEL EVENTO (Editable)
// ============================================
const EVENT = {
    name: 'RINOMED 2026 - Congreso Internacional de Rinología y Cirugía Plástica Facial',
    city: 'Medellín',
    country: 'Colombia',
    dates: '17-18 de Abril, 2026',
    venue: 'Centro de Eventos El Tesoro',
    address: 'Carrera 25A # 1A Sur - 45, Piso 5, Medellín, Colombia',
    mapLink: 'https://www.google.com/maps/place/Centro+De+Eventos+El+Tesoro/@6.196285,-75.5628239,17z',
    contactEmail: 'info@rinomedellin.com',
    contactPhone: '+57 320 806 5201',
    website: 'https://rinomedellin.com/',
    whatsapp: 'https://api.whatsapp.com/send?phone=573208065201'
};

// ============================================
// DATOS MOCK (Editable)
// ============================================
const DATA = {
    // Días del evento
    days: ['Día 1', 'Día 2'],
    
    // Sesiones completas del congreso
    sessions: [
        // ===== DÍA 1: VIERNES 17 DE ABRIL =====
        {
            id: 's1',
            title: 'Inscripciones',
            day: 'Día 1',
            time: '07:30 - 08:00',
            room: 'Hall Principal',
            level: 'General',
            topic: 'Registro',
            speakers: [],
            description: 'Registro de asistentes y entrega de material del congreso. Staff disponible para atención.'
        },
        {
            id: 's2',
            title: 'Bienvenida',
            day: 'Día 1',
            time: '08:00 - 08:10',
            room: 'Sala Principal',
            level: 'General',
            topic: 'Inauguración',
            speakers: [],
            description: 'Ceremonia de bienvenida e inauguración oficial del RINOMED 2026.'
        },
        {
            id: 's3',
            title: 'Bloque 1',
            day: 'Día 1',
            time: '08:10 - 09:20',
            room: 'Sala Principal',
            level: 'Avanzado',
            topic: 'Rinoplastia',
            speakers: ['sp1'],
            description: 'Dr. Froilán Páez presenta las últimas tendencias en rinoplastia funcional y estética. Casos complejos y soluciones innovadoras.'
        },
        {
            id: 's4',
            title: 'Coffee Break y Visita Comercial',
            day: 'Día 1',
            time: '09:20 - 09:50',
            room: 'Área Comercial',
            level: 'General',
            topic: 'Networking',
            speakers: [],
            description: 'Receso para café, networking y visita a stands de patrocinadores.'
        },
        {
            id: 's5',
            title: 'Conferencista Nacional',
            day: 'Día 1',
            time: '09:50 - 10:20',
            room: 'Sala Principal',
            level: 'Intermedio',
            topic: 'Rinología',
            speakers: ['sp2'],
            description: 'Dr. Francisco Rosero comparte su experiencia en cirugía rinológica avanzada.'
        },
        {
            id: 's6',
            title: 'Conferencista Nacional',
            day: 'Día 1',
            time: '10:20 - 11:40',
            room: 'Sala Principal',
            level: 'Avanzado',
            topic: 'Cirugía Facial',
            speakers: ['sp3'],
            description: 'Dr. Mario Montoya presenta técnicas innovadoras en cirugía plástica facial.'
        },
        {
            id: 's7',
            title: 'Preguntas',
            day: 'Día 1',
            time: '11:40 - 12:00',
            room: 'Sala Principal',
            level: 'General',
            topic: 'Interactivo',
            speakers: [],
            description: 'Sesión de preguntas y respuestas con los conferencistas.'
        },
        {
            id: 's8',
            title: 'Simposio Almuerzo',
            day: 'Día 1',
            time: '12:00 - 14:00',
            room: 'Área de Almuerzos',
            level: 'General',
            topic: 'Simposio',
            speakers: [],
            description: 'Simposio patrocinado por SANOFI. Networking y almuerzo.'
        },
        {
            id: 's9',
            title: 'Cirugía en Vivo 1 y 2',
            day: 'Día 1',
            time: '14:00 - 18:00',
            room: 'QLUB Quirófanos',
            level: 'Avanzado',
            topic: 'Cirugía en Vivo',
            speakers: ['sp4', 'sp5'],
            description: 'Transmisión en tiempo real de cirugías realizadas por Dr. Neves y Dr. Morera. Tecnología audiovisual de alta calidad.'
        },
        {
            id: 's10',
            title: 'Coffee Break y Visita Comercial',
            day: 'Día 1',
            time: '15:30 - 16:00',
            room: 'Área Comercial',
            level: 'General',
            topic: 'Networking',
            speakers: [],
            description: 'Receso vespertino para café y visita comercial.'
        },
        {
            id: 's11',
            title: 'Cena con Conferencistas',
            day: 'Día 1',
            time: '20:00',
            room: 'Centro de Eventos El Tesoro',
            level: 'General',
            topic: 'Social',
            speakers: [],
            description: 'Cena de bienvenida y coctel con los conferencistas internacionales. Networking exclusivo.'
        },
        
        // ===== DÍA 2: SÁBADO 18 DE ABRIL =====
        {
            id: 's12',
            title: 'Bienvenida',
            day: 'Día 2',
            time: '07:30',
            room: 'Sala Principal',
            level: 'General',
            topic: 'Inauguración',
            speakers: [],
            description: 'Bienvenida al segundo día del congreso. Staff disponible.'
        },
        {
            id: 's13',
            title: 'Cirugía en Vivo 3 y 4',
            day: 'Día 2',
            time: '07:30 - 11:00',
            room: 'QLUB Quirófanos',
            level: 'Avanzado',
            topic: 'Cirugía en Vivo',
            speakers: ['sp3', 'sp1'],
            description: 'Transmisión en tiempo real de cirugías realizadas por Dr. Montoya y Dr. Páez. Casos complejos de rinoplastia.'
        },
        {
            id: 's14',
            title: 'Coffee Break y Visita Comercial',
            day: 'Día 2',
            time: '09:20 - 09:50',
            room: 'Área Comercial',
            level: 'General',
            topic: 'Networking',
            speakers: [],
            description: 'Receso matutino para café y networking.'
        },
        {
            id: 's15',
            title: 'Conferencista Nacional',
            day: 'Día 2',
            time: '11:00 - 11:30',
            room: 'Sala Principal',
            level: 'Intermedio',
            topic: 'Rinología',
            speakers: [],
            description: 'Conferencia nacional - A confirmar.'
        },
        {
            id: 's16',
            title: 'Conferencista Nacional',
            day: 'Día 2',
            time: '11:30 - 12:00',
            room: 'Sala Principal',
            level: 'Intermedio',
            topic: 'Cirugía Facial',
            speakers: [],
            description: 'Conferencia nacional - A confirmar.'
        },
        {
            id: 's17',
            title: 'Preguntas',
            day: 'Día 2',
            time: '12:00 - 12:10',
            room: 'Sala Principal',
            level: 'General',
            topic: 'Interactivo',
            speakers: [],
            description: 'Sesión de preguntas y respuestas.'
        },
        {
            id: 's18',
            title: 'Simposio Almuerzo',
            day: 'Día 2',
            time: '12:00 - 14:00',
            room: 'Área de Almuerzos',
            level: 'General',
            topic: 'Simposio',
            speakers: [],
            description: 'Simposio patrocinado por GSK. Networking y almuerzo.'
        },
        {
            id: 's19',
            title: 'Conferencista Internacional',
            day: 'Día 2',
            time: '14:00 - 14:30',
            room: 'Sala Principal',
            level: 'Avanzado',
            topic: 'Rinoplastia',
            speakers: ['sp5'],
            description: 'Dr. Eduardo Morera comparte su experiencia internacional en rinoplastia estética y funcional.'
        },
        {
            id: 's20',
            title: 'Conferencista Nacional',
            day: 'Día 2',
            time: '14:30 - 15:00',
            room: 'Sala Principal',
            level: 'Intermedio',
            topic: 'Cirugía Facial',
            speakers: [],
            description: 'Conferencia nacional - A confirmar.'
        },
        {
            id: 's21',
            title: 'Coffee Break y Visita Comercial',
            day: 'Día 2',
            time: '15:00 - 15:30',
            room: 'Área Comercial',
            level: 'General',
            topic: 'Networking',
            speakers: [],
            description: 'Último receso del congreso. Visita comercial.'
        },
        {
            id: 's22',
            title: 'Conferencista Internacional',
            day: 'Día 2',
            time: '15:30 - 16:00',
            room: 'Sala Principal',
            level: 'Avanzado',
            topic: 'Cirugía Facial Integral',
            speakers: ['sp6'],
            description: 'Dr. Noé Herrera presenta su técnica L grafts y abordaje integral de cirugía facial.'
        },
        {
            id: 's23',
            title: 'Conferencista Internacional',
            day: 'Día 2',
            time: '16:00 - 16:30',
            room: 'Sala Principal',
            level: 'Avanzado',
            topic: 'Cirugía Plástica Facial',
            speakers: ['sp4'],
            description: 'Dr. José Carlos Neves cierra el congreso con una conferencia magistral sobre cirugía plástica facial.'
        }
    ],
    
    // Profesores (mínimo 4, con al menos 2 internacionales)
    speakers: [
        {
            id: 'sp1',
            name: 'Dr. Froilán Páez',
            country: 'Venezuela',
            flag: '🇻🇪',
            institution: 'Especialista Internacional',
            areas: ['Rinoplastia', 'Cirugía Plástica Facial'],
            bio: 'Destacado especialista en Rinoplastia y Cirugía Plástica Facial con reconocimiento internacional. Experto en técnicas avanzadas de rinoplastia funcional y estética. Conferencista regular en eventos médicos latinoamericanos.',
            sessions: ['s3', 's13']
        },
        {
            id: 'sp2',
            name: 'Dr. Francisco Rosero',
            country: 'Colombia',
            flag: '🇨🇴',
            institution: 'Colombia',
            areas: ['Rinología', 'Cirugía Facial'],
            bio: 'Especialista colombiano en rinología y cirugía facial. Experiencia en técnicas avanzadas de rinoplastia y cirugía reconstructiva. Miembro activo de sociedades científicas nacionales.',
            sessions: ['s5']
        },
        {
            id: 'sp3',
            name: 'Dr. Mario Montoya',
            country: 'Colombia',
            flag: '🇨🇴',
            institution: 'Colombia',
            areas: ['Cirugía Plástica Facial', 'Técnicas Avanzadas'],
            bio: 'Especialista en cirugía plástica facial con amplia trayectoria en procedimientos innovadores. Enfoque en resultados naturales y funcionales.',
            sessions: ['s6', 's13']
        },
        {
            id: 'sp4',
            name: 'Dr. José Carlos Neves',
            country: 'Portugal',
            flag: '🇵🇹',
            institution: 'European Academy of Facial Plastic Surgery',
            areas: ['Cirugía Plástica Facial', 'ORL'],
            bio: 'Certificado en Cirugía Plástica Facial por EBCFPRS (Londres, Reino Unido). Especialista en Otorrinolaringología y Cirugía de Cabeza y Cuello (Portugal). Miembro de la Junta Directiva de la Academia Europea de Cirugía Plástica Facial (EAFPS). Presidente del Comité de Cirugía Plástica Facial de la Sociedad Portuguesa de ORL.',
            sessions: ['s9', 's23']
        },
        {
            id: 'sp5',
            name: 'Dr. Eduardo Morera Serna',
            country: 'España',
            flag: '🇪🇸',
            institution: 'España',
            areas: ['Rinoplastia', 'Cirugía Plástica Facial'],
            bio: 'Destacado especialista español en Rinoplastia y Cirugía Plástica Facial. Reconocido internacionalmente por sus técnicas innovadoras y resultados excepcionales. Conferencista frecuente en congresos europeos y latinoamericanos.',
            sessions: ['s9', 's19']
        },
        {
            id: 'sp6',
            name: 'Dr. Noé Herrera',
            country: 'México',
            flag: '🇲🇽',
            institution: 'Universidad Nacional Autónoma de México (UNAM)',
            areas: ['Cirugía Facial Integral', 'Rinoplastia'],
            bio: 'Otorrinolaringólogo certificado por el CMORL, formado en la UNAM. Creador de la técnica L grafts que ha revolucionado la rinoplastia funcional y estética. Profesor en diversos foros internacionales. Dominio en procedimientos combinados como cirugía ortognática, de párpados, mentón y mejillas. Miembro titular de la SMRCPF.',
            sessions: ['s22']
        },
        {
            id: 'sp7',
            name: 'Dr. Guillermo Arturo Landínez Cepeda',
            country: 'Colombia',
            flag: '🇨🇴',
            institution: 'Universidad Nacional de Colombia / Universidad CES',
            areas: ['Otorrinolaringología', 'Cirugía Plástica Facial', 'Rinología'],
            bio: 'Presidente del Comité Científico. Médico Cirujano de la Universidad Nacional de Colombia. Especialista en Otorrinolaringología del Hospital Clínico Universitario de Valladolid, España (2011). Especialista en Cirugía Plástica Facial y Reconstructiva de la Universidad CES (2015). Subespecialización en Cirugía Endoscópica de Base de Cráneo en Jackson Memorial Hospital, Miami. Miembro de la Junta Directiva de Facialis Academy.',
            sessions: []
        }
    ],
    
    // Patrocinadores (3 con diferentes tiers)
    sponsors: [
        {
            id: 'sponsor1',
            name: 'GlaxoSmithKline',
            tier: 'Bronze',
            logo: '<i class="fas fa-hospital"></i>',
            description: 'Compañía farmacéutica global comprometida con mejorar la salud y el bienestar de las personas. Líder en investigación y desarrollo de medicamentos innovadores.',
            website: 'https://www.gsk.com',
            products: ['Productos Farmacéuticos', 'Investigación Médica', 'Innovación en Salud']
        },
        {
            id: 'sponsor2',
            name: 'SANOFI',
            tier: 'Gold',
            logo: '<i class="fas fa-pills"></i>',
            description: 'Líder mundial en el sector de la salud. Dedicados a apoyar a las personas a enfrentar sus desafíos de salud mediante soluciones innovadoras.',
            website: 'https://www.sanofi.com',
            products: ['Soluciones Farmacéuticas', 'Simposios Médicos', 'Educación Continua']
        },
        {
            id: 'sponsor3',
            name: 'QLUB Quirófanos',
            tier: 'Gold',
            logo: '<i class="fas fa-procedures"></i>',
            description: 'Centro quirúrgico de última generación en Medellín. Sede oficial para las cirugías en vivo de RINOMED 2026 con tecnología audiovisual de alta calidad para transmisiones en tiempo real.',
            website: 'https://qlubquirofanos.com',
            products: ['Quirófanos de Alta Tecnología', 'Transmisión Quirúrgica', 'Educación Médica']
        }
    ]
};

// ============================================
// ESTADO DE LA APLICACIÓN
// ============================================
const AppState = {
    currentRoute: 'login',
    currentUser: null,
    mySessions: [],
    selectedDay: 'Día 1',
    searchQuery: '',
    
    // Cargar datos desde localStorage
    init() {
        const savedUser = localStorage.getItem('demo_orl_user');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
        }
        
        const savedSessions = localStorage.getItem('demo_orl_my_sessions');
        if (savedSessions) {
            this.mySessions = JSON.parse(savedSessions);
        }
    },
    
    // Guardar usuario
    setUser(user) {
        this.currentUser = user;
        localStorage.setItem('demo_orl_user', JSON.stringify(user));
    },
    
    // Cerrar sesión
    logout() {
        this.currentUser = null;
        this.mySessions = [];
        localStorage.removeItem('demo_orl_user');
        localStorage.removeItem('demo_orl_my_sessions');
    },
    
    // Agregar/quitar sesión de "Mi Agenda"
    toggleSession(sessionId) {
        const index = this.mySessions.indexOf(sessionId);
        if (index > -1) {
            this.mySessions.splice(index, 1);
        } else {
            this.mySessions.push(sessionId);
        }
        localStorage.setItem('demo_orl_my_sessions', JSON.stringify(this.mySessions));
    },
    
    // Vaciar "Mi Agenda"
    clearMySessions() {
        this.mySessions = [];
        localStorage.removeItem('demo_orl_my_sessions');
    },
    
    // Verificar si una sesión está en "Mi Agenda"
    isSessionSaved(sessionId) {
        return this.mySessions.includes(sessionId);
    }
};

// ============================================
// ROUTER (Navegación interna SPA)
// ============================================
const router = {
    history: [],
    
    // Navegar a una ruta
    navigate(route, params = {}) {
        // Si no hay usuario y la ruta no es login, redirigir a login
        if (!AppState.currentUser && route !== 'login') {
            route = 'login';
        }
        
        // Guardar en historial
        this.history.push(AppState.currentRoute);
        AppState.currentRoute = route;
        
        // Renderizar la vista
        this.render(route, params);
        
        // Actualizar tabs activos
        this.updateTabs(route);
        
        // Mostrar/ocultar botón back
        this.updateHeader(route);
    },
    
    // Volver atrás
    back() {
        if (this.history.length > 0) {
            const previousRoute = this.history.pop();
            AppState.currentRoute = previousRoute;
            this.render(previousRoute);
            this.updateTabs(previousRoute);
            this.updateHeader(previousRoute);
        } else {
            this.navigate('home');
        }
    },
    
    // Renderizar vista según la ruta
    render(route, params = {}) {
        const content = document.getElementById('appContent');
        
        // Determinar qué vista renderizar
        if (route === 'login') {
            content.innerHTML = views.login();
        } else if (route === 'home') {
            content.innerHTML = views.home();
        } else if (route === 'agenda') {
            content.innerHTML = views.agenda();
        } else if (route.startsWith('session/')) {
            const sessionId = route.split('/')[1];
            content.innerHTML = views.sessionDetail(sessionId);
        } else if (route === 'speakers') {
            content.innerHTML = views.speakers();
        } else if (route.startsWith('speaker/')) {
            const speakerId = route.split('/')[1];
            content.innerHTML = views.speakerDetail(speakerId);
        } else if (route === 'my') {
            content.innerHTML = views.myAgenda();
        } else if (route === 'sponsors') {
            content.innerHTML = views.sponsors();
        } else if (route.startsWith('sponsor/')) {
            const sponsorId = route.split('/')[1];
            content.innerHTML = views.sponsorDetail(sponsorId);
        } else if (route === 'info') {
            content.innerHTML = views.info();
        } else if (route === 'certificate') {
            content.innerHTML = views.certificate();
        } else if (route === 'profile') {
            content.innerHTML = views.profile();
        } else {
            content.innerHTML = '<div class="container"><h2>Página no encontrada</h2></div>';
        }
        
        // Scroll al inicio
        content.scrollTop = 0;
    },
    
    // Actualizar tabs activos
    updateTabs(route) {
        const tabs = document.querySelectorAll('.tab-item');
        const tabsContainer = document.getElementById('appTabs');
        
        // Ocultar tabs en login
        if (route === 'login') {
            tabsContainer.style.display = 'none';
            return;
        } else {
            tabsContainer.style.display = 'flex';
        }
        
        // Obtener ruta base (sin parámetros)
        const baseRoute = route.split('/')[0];
        
        tabs.forEach(tab => {
            const tabRoute = tab.getAttribute('data-route');
            if (tabRoute === baseRoute) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    },
    
    // Actualizar header (título y botón back)
    updateHeader(route) {
        const header = document.getElementById('appHeader');
        const headerTitle = document.getElementById('headerTitle');
        const headerBack = document.getElementById('headerBack');
        const headerActions = document.getElementById('headerActions');
        
        // Ocultar header en login
        if (route === 'login') {
            header.style.display = 'none';
            return;
        } else {
            header.style.display = 'flex';
        }
        
        // Títulos según la ruta
        const titles = {
            'home': 'Curso ORL 2026',
            'agenda': 'Agenda',
            'speakers': 'Profesores',
            'my': 'Mi Agenda',
            'sponsors': 'Patrocinadores',
            'info': 'Información',
            'certificate': 'Certificado',
            'profile': 'Perfil'
        };
        
        const baseRoute = route.split('/')[0];
        headerTitle.textContent = titles[baseRoute] || 'Curso ORL';
        
        // Mostrar botón back solo en rutas de detalle
        if (route.includes('/')) {
            headerBack.style.visibility = 'visible';
        } else {
            headerBack.style.visibility = 'hidden';
        }
    }
};

// ============================================
// VISTAS (HTML de cada pantalla)
// ============================================
const views = {
    
    // VISTA: Login
    login() {
        return `
            <div class="login-container">
                <div class="login-header">
                    <div class="login-logo">
                        <img src="logo.svg" alt="RINOMED 2026" style="width: 160px; height: auto; filter: drop-shadow(0 4px 8px rgba(192, 122, 184, 0.5));">
                    </div>
                    <h1 class="login-title">RINOMED 2026</h1>
                    <p class="login-subtitle" style="margin-bottom: 4px;">Congreso Internacional de Rinología</p>
                    <p class="login-subtitle">${EVENT.city} • ${EVENT.dates}</p>
                </div>
                
                <form onsubmit="handleLogin(event)">
                    <div class="input-group">
                        <label class="input-label">Tu nombre</label>
                        <input type="text" class="input-field" id="loginName" placeholder="Ej: Dr. Juan Pérez" required>
                    </div>
                    
                    <div class="input-group">
                        <label class="input-label">Rol</label>
                        <select class="input-field" id="loginRole" required>
                            <option value="">Selecciona tu rol</option>
                            <option value="Asistente">Asistente</option>
                            <option value="Profesor">Profesor</option>
                            <option value="Staff">Staff</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-block mb-2">
                        Entrar al Evento
                    </button>
                    
                    <button type="button" class="btn btn-secondary btn-block" onclick="handleReset()">
                        <i class="fas fa-sync-alt"></i> Reset Demo (Limpiar datos)
                    </button>
                </form>
                
                <div class="text-center mt-3">
                    <p style="font-size: 12px; color: var(--text-secondary);">
                        <i class="fas fa-info-circle"></i> Esta es una demo. Los datos son ficticios.
                    </p>
                </div>
            </div>
        `;
    },
    
    // VISTA: Home
    home() {
        const totalSessions = DATA.sessions.length;
        const mySessions = AppState.mySessions.length;
        
        return `
            <div class="container">
                <div class="text-center mb-3">
                    <h2 style="color: var(--primary-color); margin-bottom: 8px;">
                        ¡Bienvenido, ${AppState.currentUser.name}!
                    </h2>
                    <p style="color: var(--text-secondary);">
                        ${EVENT.name}
                    </p>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-value">${totalSessions}</div>
                        <div class="stat-label">Sesiones</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">${mySessions}</div>
                        <div class="stat-label">En Mi Agenda</div>
                    </div>
                </div>
                
                <h3 class="section-header">Accesos Rápidos</h3>
                
                <div class="quick-access">
                    <div class="quick-access-item" onclick="router.navigate('agenda')">
                        <div class="quick-access-icon"><i class="fas fa-calendar-alt"></i></div>
                        <div class="quick-access-label">Agenda</div>
                    </div>
                    <div class="quick-access-item" onclick="router.navigate('speakers')">
                        <div class="quick-access-icon"><i class="fas fa-user-md"></i></div>
                        <div class="quick-access-label">Profesores</div>
                    </div>
                    <div class="quick-access-item" onclick="router.navigate('certificate')">
                        <div class="quick-access-icon"><i class="fas fa-certificate"></i></div>
                        <div class="quick-access-label">Certificado</div>
                    </div>
                    <div class="quick-access-item" onclick="router.navigate('sponsors')">
                        <div class="quick-access-icon"><i class="fas fa-handshake"></i></div>
                        <div class="quick-access-label">Sponsors</div>
                    </div>
                    <div class="quick-access-item" onclick="router.navigate('info')">
                        <div class="quick-access-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <div class="quick-access-label">Logística</div>
                    </div>
                    <div class="quick-access-item" onclick="router.navigate('my')">
                        <div class="quick-access-icon"><i class="fas fa-star"></i></div>
                        <div class="quick-access-label">Mi Agenda</div>
                    </div>
                </div>
                
                <div class="card">
                    <h4 style="margin-bottom: 12px;">📍 Sede del Evento</h4>
                    <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 8px;">
                        ${EVENT.venue}
                    </p>
                    <p style="font-size: 13px; color: var(--text-light);">
                        ${EVENT.dates}
                    </p>
                </div>
            </div>
        `;
    },
    
    // VISTA: Agenda
    agenda() {
        const filteredSessions = DATA.sessions
            .filter(s => s.day === AppState.selectedDay)
            .filter(s => {
                if (!AppState.searchQuery) return true;
                const query = AppState.searchQuery.toLowerCase();
                return s.title.toLowerCase().includes(query) ||
                       s.topic.toLowerCase().includes(query) ||
                       s.description.toLowerCase().includes(query);
            });
        
        return `
            <div class="container">
                <div class="day-selector">
                    ${DATA.days.map(day => `
                        <button class="day-btn ${day === AppState.selectedDay ? 'active' : ''}" 
                                onclick="handleDayChange('${day}')">
                            ${day}
                        </button>
                    `).join('')}
                </div>
                
                <div class="search-bar">
                    <input type="text" 
                           class="search-input" 
                           placeholder="🔍 Buscar sesiones..." 
                           value="${AppState.searchQuery}"
                           oninput="handleSearchChange(event)">
                </div>
                
                ${filteredSessions.length === 0 ? `
                    <div class="empty-state">
                        <div class="empty-state-icon">🔍</div>
                        <p class="empty-state-text">No se encontraron sesiones</p>
                    </div>
                ` : filteredSessions.map(session => {
                    const isSaved = AppState.isSessionSaved(session.id);
                    return `
                        <div class="card card-clickable" onclick="router.navigate('session/${session.id}')">
                            <div class="d-flex justify-between align-center mb-1">
                                <span class="time-badge">${session.time}</span>
                                ${isSaved ? '<span style="font-size: 20px;">⭐</span>' : ''}
                            </div>
                            <h3 class="card-title">${session.title}</h3>
                            <p class="card-subtitle">${session.room} • ${session.level}</p>
                            <div class="mt-1">
                                <span class="chip chip-primary">${session.topic}</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    },
    
    // VISTA: Detalle de Sesión
    sessionDetail(sessionId) {
        const session = DATA.sessions.find(s => s.id === sessionId);
        if (!session) return '<div class="container"><p>Sesión no encontrada</p></div>';
        
        const isSaved = AppState.isSessionSaved(sessionId);
        const speakers = session.speakers.map(spId => 
            DATA.speakers.find(sp => sp.id === spId)
        ).filter(sp => sp);
        
        return `
            <div class="container">
                <span class="time-badge">${session.time}</span>
                <h2 style="margin: 12px 0;">${session.title}</h2>
                <p style="color: var(--text-secondary); margin-bottom: 16px;">
                    ${session.room} • ${session.level}
                </p>
                
                <div class="mb-2">
                    <span class="chip chip-primary">${session.topic}</span>
                    <span class="chip chip-secondary">${session.day}</span>
                </div>
                
                <div class="card">
                    <h4 style="margin-bottom: 8px;">📋 Descripción</h4>
                    <p style="font-size: 14px; line-height: 1.6; color: var(--text-secondary);">
                        ${session.description}
                    </p>
                </div>
                
                <h4 style="margin: 16px 0 12px;">👨‍⚕️ Ponentes</h4>
                ${speakers.map(speaker => `
                    <div class="speaker-mini" onclick="router.navigate('speaker/${speaker.id}')">
                        <div class="speaker-mini-avatar">
                            ${speaker.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div class="speaker-mini-info">
                            <div class="speaker-mini-name">${speaker.name}</div>
                            <div class="speaker-mini-country">${speaker.flag} ${speaker.country}</div>
                        </div>
                    </div>
                `).join('')}
                
                <button class="btn ${isSaved ? 'btn-secondary' : 'btn-primary'} btn-block mt-2" 
                        onclick="handleToggleSession('${sessionId}')">
                    ${isSaved ? '✓ Guardado en Mi Agenda' : '+ Agregar a Mi Agenda'}
                </button>
                
                <button class="btn btn-accent btn-block mt-2" onclick="handleSendQuestion()">
                    💬 Enviar Pregunta (Demo)
                </button>
            </div>
        `;
    },
    
    // VISTA: Profesores
    speakers() {
        return `
            <div class="container">
                <p style="color: var(--text-secondary); margin-bottom: 16px; text-align: center;">
                    Conoce a nuestros profesores internacionales
                </p>
                
                ${DATA.speakers.map(speaker => `
                    <div class="card card-clickable" onclick="router.navigate('speaker/${speaker.id}')">
                        <div class="d-flex gap-2 align-center">
                            <div class="avatar">
                                ${speaker.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div style="flex: 1;">
                                <h3 class="card-title">${speaker.name}</h3>
                                <p class="card-subtitle">${speaker.flag} ${speaker.country}</p>
                                <p style="font-size: 13px; color: var(--text-light); margin-top: 4px;">
                                    ${speaker.institution}
                                </p>
                            </div>
                        </div>
                        <div class="mt-2">
                            ${speaker.areas.map(area => `
                                <span class="chip chip-primary">${area}</span>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },
    
    // VISTA: Detalle de Profesor
    speakerDetail(speakerId) {
        const speaker = DATA.speakers.find(sp => sp.id === speakerId);
        if (!speaker) return '<div class="container"><p>Profesor no encontrado</p></div>';
        
        const speakerSessions = DATA.sessions.filter(s => 
            s.speakers.includes(speakerId)
        );
        
        return `
            <div class="container">
                <div style="text-align: center; margin-bottom: 24px;">
                    <div class="avatar avatar-lg" style="margin: 0 auto 16px;">
                        ${speaker.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h2 style="margin-bottom: 8px;">${speaker.name}</h2>
                    <p style="color: var(--text-secondary); font-size: 16px;">
                        ${speaker.flag} ${speaker.country}
                    </p>
                    <p style="color: var(--text-light); font-size: 14px; margin-top: 4px;">
                        ${speaker.institution}
                    </p>
                </div>
                
                <div class="mb-2">
                    ${speaker.areas.map(area => `
                        <span class="chip chip-primary">${area}</span>
                    `).join('')}
                </div>
                
                <div class="card">
                    <h4 style="margin-bottom: 8px;">📖 Biografía</h4>
                    <p style="font-size: 14px; line-height: 1.6; color: var(--text-secondary);">
                        ${speaker.bio}
                    </p>
                </div>
                
                <h4 style="margin: 16px 0 12px;">📅 Sesiones</h4>
                ${speakerSessions.map(session => `
                    <div class="card card-clickable" onclick="router.navigate('session/${session.id}')">
                        <span class="time-badge">${session.time}</span>
                        <h4 style="margin: 8px 0 4px;">${session.title}</h4>
                        <p style="font-size: 13px; color: var(--text-secondary);">
                            ${session.day} • ${session.room}
                        </p>
                    </div>
                `).join('')}
            </div>
        `;
    },
    
    // VISTA: Mi Agenda
    myAgenda() {
        const mySessions = AppState.mySessions
            .map(id => DATA.sessions.find(s => s.id === id))
            .filter(s => s)
            .sort((a, b) => {
                if (a.day !== b.day) return a.day < b.day ? -1 : 1;
                return a.time < b.time ? -1 : 1;
            });
        
        if (mySessions.length === 0) {
            return `
                <div class="container">
                    <div class="empty-state">
                        <div class="empty-state-icon"><i class="fas fa-star"></i></div>
                        <h3 style="color: var(--text-primary); margin-bottom: 8px;">
                            Mi Agenda está vacía
                        </h3>
                        <p class="empty-state-text">
                            Agrega sesiones desde la Agenda para crear tu programa personalizado
                        </p>
                        <button class="btn btn-primary" onclick="router.navigate('agenda')">
                            Ver Agenda Completa
                        </button>
                    </div>
                </div>
            `;
        }
        
        return `
            <div class="container">
                <div class="text-center mb-3">
                    <p style="color: var(--text-secondary);">
                        Tienes <strong>${mySessions.length}</strong> sesiones guardadas
                    </p>
                </div>
                
                ${mySessions.map(session => `
                    <div class="card card-clickable" onclick="router.navigate('session/${session.id}')">
                        <div class="d-flex justify-between align-center mb-1">
                            <span class="time-badge"><i class="far fa-clock"></i> ${session.time}</span>
                            <span style="font-size: 20px; color: var(--primary-color);"><i class="fas fa-star"></i></span>
                        </div>
                        <h3 class="card-title">${session.title}</h3>
                        <p class="card-subtitle">${session.day} • ${session.room}</p>
                        <div class="mt-1">
                            <span class="chip chip-primary">${session.topic}</span>
                        </div>
                    </div>
                `).join('')}
                
                <button class="btn btn-secondary btn-block mt-2" onclick="handleClearMyAgenda()">
                    <i class="fas fa-trash-alt"></i> Vaciar Mi Agenda
                </button>
            </div>
        `;
    },
    
    // VISTA: Patrocinadores
    sponsors() {
        const tiers = ['Gold', 'Silver', 'Bronze'];
        
        return `
            <div class="container">
                <p style="color: var(--text-secondary); margin-bottom: 16px; text-align: center;">
                    Conoce a nuestros patrocinadores oficiales
                </p>
                
                ${tiers.map(tier => {
                    const tierSponsors = DATA.sponsors.filter(s => s.tier === tier);
                    if (tierSponsors.length === 0) return '';
                    
                    return `
                        <h4 style="margin: 24px 0 12px; color: var(--text-primary);">
                            ${tier === 'Gold' ? '<i class="fas fa-medal" style="color: #FFD700;"></i>' : tier === 'Silver' ? '<i class="fas fa-medal" style="color: #C0C0C0;"></i>' : '<i class="fas fa-medal" style="color: #CD7F32;"></i>'} ${tier}
                        </h4>
                        ${tierSponsors.map(sponsor => `
                            <div class="card card-clickable" onclick="router.navigate('sponsor/${sponsor.id}')">
                                <div class="d-flex gap-2 align-center">
                                    <div style="font-size: 40px;">${sponsor.logo}</div>
                                    <div style="flex: 1;">
                                        <div class="d-flex align-center gap-1 mb-1">
                                            <h3 class="card-title">${sponsor.name}</h3>
                                            <span class="tier-badge tier-${tier.toLowerCase()}">${tier}</span>
                                        </div>
                                        <p style="font-size: 13px; color: var(--text-secondary);">
                                            ${sponsor.description.substring(0, 80)}...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    `;
                }).join('')}
            </div>
        `;
    },
    
    // VISTA: Detalle de Patrocinador
    sponsorDetail(sponsorId) {
        const sponsor = DATA.sponsors.find(sp => sp.id === sponsorId);
        if (!sponsor) return '<div class="container"><p>Patrocinador no encontrado</p></div>';
        
        return `
            <div class="container">
                <div style="text-align: center; margin-bottom: 24px;">
                    <div style="font-size: 80px; margin-bottom: 16px;">${sponsor.logo}</div>
                    <h2 style="margin-bottom: 8px;">${sponsor.name}</h2>
                    <span class="tier-badge tier-${sponsor.tier.toLowerCase()}">${sponsor.tier}</span>
                </div>
                
                <div class="card">
                    <h4 style="margin-bottom: 8px;">ℹ️ Acerca de</h4>
                    <p style="font-size: 14px; line-height: 1.6; color: var(--text-secondary);">
                        ${sponsor.description}
                    </p>
                </div>
                
                <div class="card">
                    <h4 style="margin-bottom: 12px;">🛠️ Productos y Servicios</h4>
                    <ul style="padding-left: 20px; font-size: 14px; color: var(--text-secondary);">
                        ${sponsor.products.map(product => `
                            <li style="margin-bottom: 6px;">${product}</li>
                        `).join('')}
                    </ul>
                </div>
                
                <button class="btn btn-accent btn-block mt-2" onclick="handleSponsorContact('${sponsor.name}')">
                    📧 Solicitar Información (Demo)
                </button>
                
                <button class="btn btn-secondary btn-block mt-2" onclick="window.open('${sponsor.website}', '_blank')">
                    🌐 Visitar Sitio Web
                </button>
            </div>
        `;
    },
    
    // VISTA: Información/Logística
    info() {
        return `
            <div class="container">
                <div class="card" style="text-align: center; background: var(--primary-color); color: white;">
                    <h2 style="margin-bottom: 8px; color: white;">${EVENT.name}</h2>
                    <p style="font-size: 16px;">${EVENT.city}, ${EVENT.country}</p>
                    <p style="font-size: 14px; margin-top: 8px; opacity: 0.9;">${EVENT.dates}</p>
                </div>
                
                <div class="info-list">
                    <div class="info-item">
                        <div class="info-icon">📍</div>
                        <div class="info-content">
                            <div class="info-label">Sede</div>
                            <div class="info-value">${EVENT.venue}</div>
                            <p style="font-size: 12px; color: var(--text-light); margin-top: 4px;">
                                ${EVENT.address}
                            </p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">📅</div>
                        <div class="info-content">
                            <div class="info-label">Fechas</div>
                            <div class="info-value">${EVENT.dates}</div>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">📧</div>
                        <div class="info-content">
                            <div class="info-label">Email</div>
                            <div class="info-value">${EVENT.contactEmail}</div>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">📞</div>
                        <div class="info-content">
                            <div class="info-label">Teléfono</div>
                            <div class="info-value">${EVENT.contactPhone}</div>
                        </div>
                    </div>
                </div>
                
                <button class="btn btn-primary btn-block mt-2" onclick="window.open('${EVENT.mapLink}', '_blank')">
                    🗺️ Abrir en Google Maps
                </button>
                
                <div class="card mt-2">
                    <h4 style="margin-bottom: 8px;">ℹ️ Nota Importante</h4>
                    <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
                        Esta es una aplicación demo. En producción, aquí podrías incluir: 
                        información de hoteles, transporte, restaurantes recomendados, y más.
                    </p>
                </div>
            </div>
        `;
    },
    
    // VISTA: Certificado
    certificate() {
        return `
            <div class="container">
                <div class="certificate-preview">
                    <div style="font-size: 48px; margin-bottom: 16px;">🎓</div>
                    <div class="certificate-title">CERTIFICADO DE ASISTENCIA</div>
                    <div class="certificate-subtitle">Se otorga el presente certificado a:</div>
                    <div class="certificate-recipient">${AppState.currentUser.name}</div>
                    <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">
                        Por su participación en el <strong>${EVENT.name}</strong>, 
                        realizado en ${EVENT.city} los días ${EVENT.dates}.
                    </p>
                    <div class="certificate-footer">
                        Horas académicas: 20 horas
                    </div>
                </div>
                
                <button class="btn btn-accent btn-block mb-2" onclick="handleDownloadCertificate()">
                    📥 Descargar PDF (Demo)
                </button>
                
                <div class="card">
                    <h4 style="margin-bottom: 8px;">ℹ️ Nota</h4>
                    <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
                        Esta es una vista previa. En producción, el certificado se genera 
                        en el backend con firma digital y QR de validación tras completar 
                        las asistencias requeridas.
                    </p>
                </div>
            </div>
        `;
    },
    
    // VISTA: Perfil
    profile() {
        return `
            <div class="profile-header">
                <div class="profile-avatar">
                    ${AppState.currentUser.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div class="profile-name">${AppState.currentUser.name}</div>
                <div class="profile-role">${AppState.currentUser.role}</div>
            </div>
            
            <div class="container">
                <div class="card">
                    <h4 style="margin-bottom: 12px;">👤 Información Personal</h4>
                    <div style="margin-bottom: 8px;">
                        <span style="font-size: 12px; color: var(--text-secondary);">Nombre:</span>
                        <p style="font-size: 14px; font-weight: 500;">${AppState.currentUser.name}</p>
                    </div>
                    <div>
                        <span style="font-size: 12px; color: var(--text-secondary);">Rol:</span>
                        <p style="font-size: 14px; font-weight: 500;">${AppState.currentUser.role}</p>
                    </div>
                </div>
                
                <div class="card">
                    <h4 style="margin-bottom: 12px;">📊 Estadísticas</h4>
                    <div style="margin-bottom: 8px;">
                        <span style="font-size: 12px; color: var(--text-secondary);">Sesiones guardadas:</span>
                        <p style="font-size: 14px; font-weight: 500;">${AppState.mySessions.length}</p>
                    </div>
                    <div>
                        <span style="font-size: 12px; color: var(--text-secondary);">Total de sesiones:</span>
                        <p style="font-size: 14px; font-weight: 500;">${DATA.sessions.length}</p>
                    </div>
                </div>
                
                <button class="btn btn-secondary btn-block mt-2" onclick="handleLogout()">
                    🚪 Cambiar Usuario
                </button>
                
                <div class="text-center mt-3">
                    <p style="font-size: 12px; color: var(--text-secondary);">
                        Versión: MVP Demo 1.0 • ${EVENT.name}
                    </p>
                </div>
            </div>
        `;
    }
};

// ============================================
// HANDLERS (Manejadores de eventos)
// ============================================

// Login
function handleLogin(event) {
    event.preventDefault();
    const name = document.getElementById('loginName').value;
    const role = document.getElementById('loginRole').value;
    
    AppState.setUser({ name, role });
    router.navigate('home');
}

// Reset demo
function handleReset() {
    if (confirm('¿Estás seguro? Esto borrará todos los datos guardados en el demo.')) {
        AppState.logout();
        router.navigate('login');
    }
}

// Logout
function handleLogout() {
    if (confirm('¿Deseas cambiar de usuario?')) {
        AppState.logout();
        router.navigate('login');
    }
}

// Cambiar día en agenda
function handleDayChange(day) {
    AppState.selectedDay = day;
    router.render('agenda');
}

// Buscar en agenda
function handleSearchChange(event) {
    AppState.searchQuery = event.target.value;
    router.render('agenda');
}

// Agregar/quitar sesión de Mi Agenda
function handleToggleSession(sessionId) {
    AppState.toggleSession(sessionId);
    router.render(`session/${sessionId}`);
}

// Vaciar Mi Agenda
function handleClearMyAgenda() {
    if (confirm('¿Estás seguro de que quieres vaciar tu agenda?')) {
        AppState.clearMySessions();
        router.navigate('my');
    }
}

// Enviar pregunta (demo)
function handleSendQuestion() {
    alert('✅ Demo: Tu pregunta ha sido enviada.\n\nEn producción, las preguntas se envían a un moderador que las filtra antes de mostrarlas al ponente en tiempo real.');
}

// Descargar certificado (demo)
function handleDownloadCertificate() {
    alert('📥 Demo: Descarga de certificado.\n\nEn producción, el certificado PDF se genera en el backend con:\n• Firma digital\n• Código QR de validación\n• Registro en base de datos\n• Verificación de asistencia mínima');
}

// Contactar sponsor (demo)
function handleSponsorContact(sponsorName) {
    alert(`📧 Demo: Solicitud de información a ${sponsorName}.\n\nEn producción, se crea un lead en el CRM con:\n• Datos del asistente\n• Sponsor contactado\n• Fecha y hora\n• Notificación al sponsor`);
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Cargar estado desde localStorage
    AppState.init();
    
    // Navegar a la pantalla inicial
    if (AppState.currentUser) {
        router.navigate('home');
    } else {
        router.navigate('login');
    }
});
