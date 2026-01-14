/* ============================================
   APP.JS - MVP DEMO EVENTO MÉDICO ORL
   Curso de Otorrinolaringología - Medellín 2026
   ============================================ */

// ============================================
// CONFIGURACIÓN DEL EVENTO (Editable)
// ============================================
const EVENT = {
    name: 'Curso Internacional de Otorrinolaringología',
    city: 'Medellín',
    country: 'Colombia',
    dates: '15-16 de Marzo, 2026',
    venue: 'Hotel InterContinental Medellín',
    address: 'Calle 16 #28-51, El Poblado, Medellín',
    mapLink: 'https://maps.google.com/?q=InterContinental+Medellin',
    contactEmail: 'info@cursoorl-medellin.com',
    contactPhone: '+57 (4) 444-5555'
};

// ============================================
// DATOS MOCK (Editable)
// ============================================
const DATA = {
    // Días del evento
    days: ['Día 1', 'Día 2'],
    
    // Sesiones (mínimo 6 sesiones con diferentes especialidades)
    sessions: [
        {
            id: 's1',
            title: 'Rinoplastia Funcional y Estética: Tendencias Actuales',
            day: 'Día 1',
            time: '08:00 - 09:30',
            room: 'Sala Principal',
            level: 'Avanzado',
            topic: 'Rinología',
            speakers: ['sp1', 'sp2'],
            description: 'Técnicas modernas en rinoplastia con enfoque funcional y estético. Casos complejos y soluciones innovadoras con profesores internacionales.'
        },
        {
            id: 's2',
            title: 'Cirugía Endoscópica de Senos Paranasales',
            day: 'Día 1',
            time: '10:00 - 11:30',
            room: 'Sala Principal',
            level: 'Intermedio',
            topic: 'Rinología',
            speakers: ['sp1'],
            description: 'Abordaje endoscópico en patología rinosinusal. Instrumental, técnica quirúrgica y manejo de complicaciones.'
        },
        {
            id: 's3',
            title: 'Implantes Cocleares: Selección de Candidatos y Resultados',
            day: 'Día 1',
            time: '12:00 - 13:30',
            room: 'Sala Principal',
            level: 'Avanzado',
            topic: 'Otología',
            speakers: ['sp3'],
            description: 'Criterios de selección para implantes cocleares en adultos y niños. Resultados audiológicos y rehabilitación post-implante.'
        },
        {
            id: 's4',
            title: 'Taller Práctico: Microcirugía de Laringe',
            day: 'Día 1',
            time: '14:30 - 16:30',
            room: 'Sala de Talleres',
            level: 'Intermedio',
            topic: 'Laringología',
            speakers: ['sp4', 'sp2'],
            description: 'Taller hands-on de microcirugía laríngea. Modelos anatómicos y simulación de procedimientos endoscópicos.'
        },
        {
            id: 's5',
            title: 'Otitis Media Crónica: Actualización en Tratamiento',
            day: 'Día 2',
            time: '08:00 - 09:30',
            room: 'Sala Principal',
            level: 'Básico',
            topic: 'Otología',
            speakers: ['sp3'],
            description: 'Enfoque diagnóstico y terapéutico actualizado de otitis media crónica. Tratamiento médico vs. quirúrgico.'
        },
        {
            id: 's6',
            title: 'Casos Clínicos Complejos: Panel Multidisciplinario',
            day: 'Día 2',
            time: '10:00 - 12:00',
            room: 'Sala Principal',
            level: 'Avanzado',
            topic: 'Casos Clínicos',
            speakers: ['sp1', 'sp2', 'sp3', 'sp4'],
            description: 'Discusión de casos complejos con panel de expertos internacionales. Abordaje multidisciplinario y toma de decisiones.'
        },
        {
            id: 's7',
            title: 'Patología de la Voz: Diagnóstico y Manejo',
            day: 'Día 2',
            time: '14:00 - 15:30',
            room: 'Sala Principal',
            level: 'Intermedio',
            topic: 'Laringología',
            speakers: ['sp4'],
            description: 'Enfoque integral de la patología vocal. Videoestroboscopia, tratamiento médico y fonoquirúrgico.'
        },
        {
            id: 's8',
            title: 'Innovaciones en Cirugía Robótica ORL',
            day: 'Día 2',
            time: '16:00 - 17:30',
            room: 'Sala Principal',
            level: 'Avanzado',
            topic: 'Innovación',
            speakers: ['sp1', 'sp2'],
            description: 'Últimas tecnologías en cirugía robótica aplicada a ORL. Indicaciones, técnica y resultados a largo plazo.'
        }
    ],
    
    // Profesores (mínimo 4, con al menos 2 internacionales)
    speakers: [
        {
            id: 'sp1',
            name: 'Dr. James Richardson',
            country: 'Estados Unidos',
            flag: '🇺🇸',
            institution: 'Harvard Medical School',
            areas: ['Rinología', 'Cirugía Endoscópica'],
            bio: 'Profesor de Otorrinolaringología en Harvard Medical School con más de 25 años de experiencia. Especialista en cirugía endoscópica de base de cráneo y rinoplastia funcional. Ha publicado más de 150 artículos científicos y es referente internacional en rinología.',
            sessions: ['s1', 's2', 's6', 's8']
        },
        {
            id: 'sp2',
            name: 'Dr. Paolo Martinelli',
            country: 'Italia',
            flag: '🇮🇹',
            institution: 'Universidad de Milán',
            areas: ['Laringología', 'Cirugía Robótica'],
            bio: 'Cirujano de cabeza y cuello en la Universidad de Milán. Pionero en técnicas de cirugía robótica transoral. Director del programa de residencia en ORL y presidente de la Sociedad Italiana de Laringología.',
            sessions: ['s1', 's4', 's6', 's8']
        },
        {
            id: 'sp3',
            name: 'Dra. María Elena Gutiérrez',
            country: 'Colombia',
            flag: '🇨🇴',
            institution: 'Universidad de Antioquia',
            areas: ['Otología', 'Implantes Cocleares'],
            bio: 'Otóloga especializada en implantes cocleares y cirugía de oído medio. Profesora titular de la Universidad de Antioquia. Coordinadora del programa de implantes cocleares en Medellín con más de 500 cirugías realizadas.',
            sessions: ['s3', 's5', 's6']
        },
        {
            id: 'sp4',
            name: 'Dr. Carlos Mendoza',
            country: 'Colombia',
            flag: '🇨🇴',
            institution: 'Clínica Universitaria Colombia',
            areas: ['Laringología', 'Patología de la Voz'],
            bio: 'Laringólogo con subespecialidad en patología de la voz. Fundador del Centro de Voz en Bogotá. Docente de cirugía laríngea y microlaringoscopia. Miembro activo de la American Laryngological Association.',
            sessions: ['s4', 's6', 's7']
        }
    ],
    
    // Patrocinadores (3 con diferentes tiers)
    sponsors: [
        {
            id: 'sponsor1',
            name: 'MedTech Solutions',
            tier: 'Gold',
            logo: '🏥',
            description: 'Líder global en equipamiento endoscópico de última generación para cirugía ORL. Más de 30 años innovando en tecnología médica.',
            website: 'https://medtech-solutions.com',
            products: ['Endoscopios HD', 'Torres de video', 'Instrumental quirúrgico']
        },
        {
            id: 'sponsor2',
            name: 'BioPharm Colombia',
            tier: 'Silver',
            logo: '💊',
            description: 'Farmacéutica especializada en medicamentos ORL y productos para patología respiratoria alta. Presencia en 15 países de Latinoamérica.',
            website: 'https://biopharma-col.com',
            products: ['Antibióticos', 'Corticoides tópicos', 'Descongestionantes']
        },
        {
            id: 'sponsor3',
            name: 'AudioCare Implants',
            tier: 'Bronze',
            logo: '🦻',
            description: 'Empresa especializada en implantes cocleares y prótesis auditivas de última tecnología. Soporte técnico 24/7 para pacientes.',
            website: 'https://audiocare.com',
            products: ['Implantes cocleares', 'Audífonos digitales', 'Sistemas BAHA']
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
                    <div class="login-logo">🏥</div>
                    <h1 class="login-title">${EVENT.name}</h1>
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
                        🔄 Reset Demo (Limpiar datos)
                    </button>
                </form>
                
                <div class="text-center mt-3">
                    <p style="font-size: 12px; color: var(--text-secondary);">
                        💡 Esta es una demo. Los datos son ficticios.
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
                        <div class="quick-access-icon">📅</div>
                        <div class="quick-access-label">Agenda</div>
                    </div>
                    <div class="quick-access-item" onclick="router.navigate('speakers')">
                        <div class="quick-access-icon">👨‍⚕️</div>
                        <div class="quick-access-label">Profesores</div>
                    </div>
                    <div class="quick-access-item" onclick="router.navigate('certificate')">
                        <div class="quick-access-icon">🎓</div>
                        <div class="quick-access-label">Certificado</div>
                    </div>
                    <div class="quick-access-item" onclick="router.navigate('sponsors')">
                        <div class="quick-access-icon">🤝</div>
                        <div class="quick-access-label">Sponsors</div>
                    </div>
                    <div class="quick-access-item" onclick="router.navigate('info')">
                        <div class="quick-access-icon">📍</div>
                        <div class="quick-access-label">Logística</div>
                    </div>
                    <div class="quick-access-item" onclick="router.navigate('my')">
                        <div class="quick-access-icon">⭐</div>
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
                        <div class="empty-state-icon">⭐</div>
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
                            <span class="time-badge">${session.time}</span>
                            <span style="font-size: 20px;">⭐</span>
                        </div>
                        <h3 class="card-title">${session.title}</h3>
                        <p class="card-subtitle">${session.day} • ${session.room}</p>
                        <div class="mt-1">
                            <span class="chip chip-primary">${session.topic}</span>
                        </div>
                    </div>
                `).join('')}
                
                <button class="btn btn-secondary btn-block mt-2" onclick="handleClearMyAgenda()">
                    🗑️ Vaciar Mi Agenda
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
                            ${tier === 'Gold' ? '🥇' : tier === 'Silver' ? '🥈' : '🥉'} ${tier}
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
