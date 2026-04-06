// ===== TOOL RECOMMENDATION DATABASE =====
const TOOLS = {
    crm: {
        name: "Twenty CRM",
        desc: "Open-Source CRM für Kontakte, Deals & Pipeline",
        url: "https://twenty.com",
        setup: "~1 Stunde",
        icon: "📇",
        how: "Docker-Container starten, Kontakte importieren, Pipeline konfigurieren."
    },
    fileSync: {
        name: "Nextcloud",
        desc: "Eigene Cloud für Dateien, Kalender & Zusammenarbeit",
        url: "https://nextcloud.com",
        setup: "~2 Stunden",
        icon: "☁️",
        how: "Docker oder Hosting-Paket einrichten, Ordnerstruktur anlegen, Sync-Client installieren."
    },
    automation: {
        name: "n8n",
        desc: "Workflow-Automatisierung (wie Zapier, aber Open Source)",
        url: "https://n8n.io",
        setup: "~1 Stunde",
        icon: "⚡",
        how: "Docker starten, erster Workflow: E-Mail → CRM-Eintrag automatisch anlegen."
    },
    localAI: {
        name: "Ollama + Open WebUI",
        desc: "Lokale KI (LLMs) auf Ihrem eigenen Rechner, 100% privat",
        url: "https://ollama.com",
        setup: "~30 Minuten",
        icon: "🤖",
        how: "Ollama installieren, Modell laden (z.B. Llama 3), Open WebUI als Chat-Oberfläche starten."
    },
    wiki: {
        name: "Outline",
        desc: "Team-Wiki mit KI-Suche für internes Wissen",
        url: "https://getoutline.com",
        setup: "~1 Stunde",
        icon: "📚",
        how: "Docker starten, Wissensbasis strukturieren, Prozesse & SOPs dokumentieren."
    },
    docs: {
        name: "Paperless-ngx",
        desc: "KI-gestützte Dokumentenverwaltung (Rechnungen, Verträge, Belege)",
        url: "https://docs.paperless-ngx.com",
        setup: "~1 Stunde",
        icon: "📄",
        how: "Docker starten, Scanner/E-Mail-Import konfigurieren, automatische Tagging-Regeln erstellen."
    },
    email: {
        name: "Listmonk",
        desc: "Newsletter & E-Mail-Outreach (selbst gehostet)",
        url: "https://listmonk.app",
        setup: "~1 Stunde",
        icon: "📧",
        how: "Docker starten, Kontaktlisten importieren, E-Mail-Templates erstellen."
    },
    compliance: {
        name: "DSGVO Schnell-Audit",
        desc: "Prüfliste für datenschutzkonformen KI-Einsatz",
        url: "",
        setup: "Sofort",
        icon: "🛡️",
        how: "Verarbeitungsverzeichnis anlegen, Auftragsverarbeitungsverträge prüfen, Datenschutzerklärung aktualisieren."
    },
    training: {
        name: "Prompt-Engineering Workshop",
        desc: "Strukturierte Einführung in effektives Prompting",
        url: "",
        setup: "~2 Stunden",
        icon: "🎓",
        how: "Workshop-Format: Grundlagen → Techniken → Praxisübungen mit echten Firmendaten."
    }
};

// ===== ASSESSMENT DATA (v2: Multiple Choice + Scoring) =====
const MODULES = [
    {
        id: "0", name: "Pre-Assessment", icon: "🎯", color: "#6366f1",
        questions: [
            {
                topic: "KI-Reifegrad",
                target: "Geschäftsführung",
                q: {
                    startup: "Wie weit sind Sie persönlich beim Thema KI?",
                    kmu: "Wo steht Ihr Unternehmen beim Thema KI?",
                    enterprise: "Wo steht Ihre Organisation auf der KI-Roadmap?"
                },
                choices: [
                    { text: "Ich habe davon gehört, aber noch nichts ausprobiert", level: 0, tags: ["training"] },
                    { text: "Ich nutze ChatGPT / Copilot gelegentlich", level: 1, tags: ["training"] },
                    { text: "Ich setze KI-Tools aktiv im Arbeitsalltag ein", level: 2, tags: [] },
                    { text: "Ich baue eigene KI-Lösungen / Automatisierungen", level: 3, tags: [] }
                ],
                context: "Bestimmt die Flughöhe: Basics erklären oder direkt in Prozesse einsteigen?"
            }
        ]
    },
    {
        id: "A", name: "Strategie", icon: "📐", color: "#6366f1",
        questions: [
            {
                topic: "Kernproblem",
                target: "Management",
                q: {
                    startup: "Was ist Ihr dringendstes Geschäftsziel?",
                    kmu: "Was ist das wichtigste Geschäftsziel, bei dem KI helfen soll?",
                    enterprise: "Welches strategische Geschäftsziel soll KI adressieren?"
                },
                choices: [
                    { text: "Neue Kunden gewinnen / mehr Umsatz", level: 1, tags: ["crm", "email"] },
                    { text: "Zeit sparen bei repetitiven Aufgaben", level: 1, tags: ["automation"] },
                    { text: "Kosten senken / Effizienz steigern", level: 2, tags: ["automation", "docs"] },
                    { text: "Neue Produkte/Services entwickeln", level: 3, tags: ["localAI"] }
                ],
                context: "Steuert die gesamte Tool-Auswahl. Umsatz > Effizienz > Innovation in der Priorität."
            },
            {
                topic: "Budget & Zeit",
                target: "Management",
                q: {
                    startup: "Wie viel Zeit/Geld können Sie monatlich in KI-Tools investieren?",
                    kmu: "Welches Budget steht für KI-Projekte zur Verfügung?",
                    enterprise: "Gibt es ein gesichertes Projektbudget mit C-Level Sponsorship?"
                },
                choices: [
                    { text: "Kein Budget, nur meine eigene Zeit", level: 0, tags: [] },
                    { text: "Bis 50€/Monat und einige Stunden pro Woche", level: 1, tags: [] },
                    { text: "100-500€/Monat mit dediziertem Zeitblock", level: 2, tags: [] },
                    { text: "Festes Projektbudget >500€/Monat", level: 3, tags: [] }
                ],
                context: "Bestimmt ob wir Open-Source (kostenlos) oder SaaS (schneller, aber Abo) empfehlen."
            },
            {
                topic: "Erfolgsmessung",
                target: "Management",
                q: {
                    startup: "Woran merken Sie in 3 Monaten, dass sich KI gelohnt hat?",
                    kmu: "Welche messbaren KPIs definieren Erfolg für dieses KI-Projekt?",
                    enterprise: "Welche harten ROI-Metriken muss das Projekt in 12 Monaten liefern?"
                },
                choices: [
                    { text: "Keine Ahnung / Hab mir dazu keine Gedanken gemacht", level: 0, tags: [] },
                    { text: "Gefühlt weniger Stress und mehr Zeit", level: 1, tags: [] },
                    { text: "Konkrete Stunden-Ersparnis oder erste Kunden", level: 2, tags: ["crm"] },
                    { text: "Definierte KPIs mit Vorher/Nachher-Messung", level: 3, tags: [] }
                ],
                context: "Ohne Baseline kein Beweis. Wir definieren jetzt gemeinsam die Messlatte."
            },
            {
                topic: "Dringlichkeit",
                target: "Management",
                q: {
                    startup: "Was passiert, wenn Sie KI noch ein Jahr lang ignorieren?",
                    kmu: "Welches Risiko besteht, wenn dieses Problem nicht gelöst wird?",
                    enterprise: "Welchen Einfluss hat Nichtstun auf Marktanteile und Margen?"
                },
                choices: [
                    { text: "Eigentlich nichts, wäre halt nice-to-have", level: 0, tags: [] },
                    { text: "Ich verpasse Chancen, aber es geht weiter", level: 1, tags: [] },
                    { text: "Wettbewerber ziehen vorbei, Margen sinken", level: 2, tags: [] },
                    { text: "Existenzbedrohend — ich muss JETZT handeln", level: 3, tags: [] }
                ],
                context: "Handlungsdruck-Check. Bei Level 0-1 fehlt der Antrieb für echte Umsetzung."
            }
        ]
    },
    {
        id: "B", name: "Prozesse", icon: "⚙️", color: "#3b82f6",
        questions: [
            {
                topic: "Arbeitsrealität",
                target: "Operations",
                q: {
                    startup: "Wie sieht Ihr täglicher Workflow aus?",
                    kmu: "Wie laufen Ihre Kernprozesse tatsächlich ab?",
                    enterprise: "Wie sieht der Ist-Prozess jenseits der Systemstandards aus?"
                },
                choices: [
                    { text: "Alles ad-hoc, kein fester Ablauf", level: 0, tags: ["wiki"] },
                    { text: "Grobe Routine, aber viel manuelles Hin-und-Her", level: 1, tags: ["automation"] },
                    { text: "Definierte Abläufe, aber mit manuellen Workarounds", level: 2, tags: ["automation"] },
                    { text: "Dokumentierte SOPs mit klaren Verantwortlichkeiten", level: 3, tags: [] }
                ],
                context: "Wo Copy&Paste dominiert, starten die besten Automatisierungen."
            },
            {
                topic: "Flaschenhals",
                target: "Operations",
                q: {
                    startup: "Welcher Task nervt Sie am meisten und frisst Ihre Zeit?",
                    kmu: "Wo ist aktuell der absolute Engpass im Team?",
                    enterprise: "Wo liegt der kritischste Engpass im Wertstrom?"
                },
                choices: [
                    { text: "Kundenakquise (Mails, Angebote, Nachfassen)", level: 1, tags: ["crm", "email", "automation"] },
                    { text: "Verwaltung (Rechnungen, Dokumente, Ablage)", level: 1, tags: ["docs", "automation"] },
                    { text: "Content-Erstellung (Texte, Präsentationen, Social Media)", level: 1, tags: ["localAI"] },
                    { text: "Kommunikation (E-Mails, Meetings, Abstimmung)", level: 1, tags: ["automation", "email"] }
                ],
                context: "Der Flaschenhals bestimmt das erste Quick-Win-Projekt."
            },
            {
                topic: "Manuelle Last",
                target: "Operations",
                q: {
                    startup: "Wie viel Ihrer Arbeitszeit geht für stupide Routineaufgaben drauf?",
                    kmu: "Wie hoch ist der Anteil repetitiver Aufgaben im Team?",
                    enterprise: "Wie hoch ist der FTE-Anteil an rein manuellen, repetitiven Tasks?"
                },
                choices: [
                    { text: "Über 50% — ich ertrinke in Routinearbeit", level: 0, tags: ["automation"] },
                    { text: "Ca. 30-50% — es nervt, aber geht", level: 1, tags: ["automation"] },
                    { text: "Ca. 10-30% — das Meiste läuft schon gut", level: 2, tags: [] },
                    { text: "Unter 10% — fast alles ist optimiert", level: 3, tags: [] }
                ],
                context: "Über 30% = sofortiges Automatisierungspotenzial."
            }
        ]
    },
    {
        id: "C", name: "Daten & IT", icon: "🗄️", color: "#8b5cf6",
        questions: [
            {
                topic: "Datenspeicher",
                target: "IT",
                q: {
                    startup: "Wo liegen Ihre wichtigen Geschäftsdaten?",
                    kmu: "Wo sind Ihre Unternehmensdaten gespeichert?",
                    enterprise: "Wie ist Ihre Datenarchitektur aufgebaut?"
                },
                choices: [
                    { text: "Im Kopf / auf Papier / Notizen", level: 0, tags: ["crm", "fileSync", "wiki"] },
                    { text: "Verstreut in Mail, Drive, Ordnern, WhatsApp", level: 1, tags: ["fileSync", "crm"] },
                    { text: "Zentral in einem System (CRM/ERP/Notion)", level: 2, tags: [] },
                    { text: "Strukturiert mit API-Zugang und Backups", level: 3, tags: [] }
                ],
                context: "KI braucht zugängliche Daten. Verstreut = zuerst konsolidieren."
            },
            {
                topic: "Datenqualität",
                target: "IT",
                q: {
                    startup: "Finden Sie Kunden-Infos auf Anhieb und stimmen die auch?",
                    kmu: "Wie gepflegt und verlässlich sind Ihre Geschäftsdaten?",
                    enterprise: "Gibt es eine formelle Data Governance mit Qualitätssicherung?"
                },
                choices: [
                    { text: "Ich suche ständig und finde nichts", level: 0, tags: ["crm", "docs"] },
                    { text: "Meistens finde ich es, aber vieles ist veraltet", level: 1, tags: ["crm"] },
                    { text: "Daten sind aktuell, aber nicht immer vollständig", level: 2, tags: [] },
                    { text: "Alles gepflegt, aktuell und vollständig", level: 3, tags: [] }
                ],
                context: "Garbage in, garbage out. Unsaubere Daten = KI halluziniert."
            },
            {
                topic: "Datensensibilität",
                target: "IT",
                q: {
                    startup: "Arbeiten Sie mit Daten, die keinesfalls an Dritte gelangen dürfen?",
                    kmu: "Verarbeiten Sie sensible Daten (HR, Patente, Gesundheit)?",
                    enterprise: "Unterliegen Sie regulatorischen Vorgaben, die öffentliche APIs untersagen?"
                },
                choices: [
                    { text: "Nein, alles unkritisch — kann in die Cloud", level: 3, tags: [] },
                    { text: "Teilweise sensibel — muss DSGVO-konform bleiben", level: 2, tags: ["localAI", "compliance"] },
                    { text: "Hochsensibel — darf die Firma nie verlassen", level: 1, tags: ["localAI"] },
                    { text: "Weiß ich nicht genau", level: 0, tags: ["compliance"] }
                ],
                context: "Sensible Daten → kein ChatGPT. Wir brauchen lokale/souveräne Lösungen."
            }
        ]
    },
    {
        id: "D", name: "Kultur", icon: "🤝", color: "#f59e0b",
        questions: [
            {
                topic: "KI-Kompetenz",
                target: "Team",
                q: {
                    startup: "Wie gut kennen Sie sich mit KI-Tools und Prompting aus?",
                    kmu: "Wie KI-fit ist Ihr Team im Alltag?",
                    enterprise: "Gibt es organisationsweite KI-Literacy-Programme?"
                },
                choices: [
                    { text: "Keine Erfahrung — brauche Grundlagen-Einführung", level: 0, tags: ["training"] },
                    { text: "Grundlagen da, aber unsicher bei Prompting", level: 1, tags: ["training"] },
                    { text: "Nutze KI-Tools sicher und regelmäßig", level: 2, tags: [] },
                    { text: "Kann selbst Workflows bauen und andere schulen", level: 3, tags: [] }
                ],
                context: "Das Tool bringt nichts, wenn man nicht weiß, wie man fragt."
            },
            {
                topic: "Akzeptanz",
                target: "Team / HR",
                q: {
                    startup: "Gibt es bei Ihnen oder Partnern Bedenken gegenüber KI?",
                    kmu: "Wie stehen Mitarbeiter und Schlüsselpersonen zum KI-Einsatz?",
                    enterprise: "Wie ist die Haltung von Betriebsrat und Belegschaft zur KI?"
                },
                choices: [
                    { text: "Große Skepsis / Angst vor Jobverlust oder Kontrollverlust", level: 0, tags: ["training"] },
                    { text: "Unsicherheit, aber Offenheit für Informationen", level: 1, tags: ["training"] },
                    { text: "Neutral bis positiv — 'zeigt mir, was es kann'", level: 2, tags: [] },
                    { text: "Begeistert — Team will mehr KI, nicht weniger", level: 3, tags: [] }
                ],
                context: "Widerstand blockiert Adoption. Erst Ängste adressieren, dann Tools einführen."
            }
        ]
    },
    {
        id: "E", name: "Compliance", icon: "🛡️", color: "#ef4444",
        questions: [
            {
                topic: "Rechtssicherheit",
                target: "Legal",
                q: {
                    startup: "Wissen Sie, was Sie mit Kundendaten und KI-Tools rechtlich dürfen?",
                    kmu: "Haben Sie den DSGVO-Status Ihrer KI-Nutzung geprüft?",
                    enterprise: "Existiert ein AI-Governance-Framework inkl. EU AI Act Readiness?"
                },
                choices: [
                    { text: "Keine Ahnung — habe mich nie damit beschäftigt", level: 0, tags: ["compliance"] },
                    { text: "Grobe Vorstellung, aber nichts Konkretes umgesetzt", level: 1, tags: ["compliance"] },
                    { text: "DSGVO-Grundlagen bekannt, Datenschutzerklärung vorhanden", level: 2, tags: [] },
                    { text: "Vollständiges Verarbeitungsverzeichnis und AVVs vorhanden", level: 3, tags: [] }
                ],
                context: "Unwissenheit schützt nicht. Ein DSGVO-Verstoß kann teuer werden."
            },
            {
                topic: "Transparenz",
                target: "Legal",
                q: {
                    startup: "Müssen Sie erklären können, warum eine KI eine bestimmte Entscheidung trifft?",
                    kmu: "Ist Nachvollziehbarkeit von KI-Entscheidungen für Ihr Geschäft relevant?",
                    enterprise: "Wie handhaben Sie Bias-Risiken und Auditierbarkeit?"
                },
                choices: [
                    { text: "Nicht relevant für mein Geschäft", level: 3, tags: [] },
                    { text: "Wäre gut, ist aber kein Muss", level: 2, tags: [] },
                    { text: "Ja, Kunden erwarten klare Erklärungen", level: 1, tags: ["localAI"] },
                    { text: "Gesetzlich vorgeschrieben (z.B. Finanz, HR)", level: 0, tags: ["localAI", "compliance"] }
                ],
                context: "Hochrisiko-KI braucht Erklärbarkeit. Black Boxes werden abgelehnt."
            }
        ]
    }
];

// ===== STATE =====
let state = {
    clientName: "",
    companyStage: "kmu",
    workshopDate: "",
    currentQuestion: 0,
    answers: {} // { "0-0": { choiceIndex: 2, notes: "..." }, ... }
};

// Flatten questions for navigation
let allQuestions = [];
MODULES.forEach((mod, mi) => {
    mod.questions.forEach((q, qi) => {
        allQuestions.push({ moduleIndex: mi, questionIndex: qi, key: `${mi}-${qi}`, ...q, module: mod });
    });
});

let slideDirection = 'right';

// ===== INIT =====
function startAssessment() {
    state.clientName = document.getElementById("clientName").value || "Unbenannt";
    state.companyStage = document.getElementById("companyStage").value || "kmu";
    state.workshopDate = document.getElementById("workshopDate").value || new Date().toISOString().split("T")[0];
    
    document.getElementById("topClientName").textContent = `${state.clientName} (${getStageLabel(state.companyStage)})`;
    
    loadProgress();
    showScreen("assessment");
    buildModuleNav();
    renderQuestion();
}

function getStageLabel(val) {
    return { startup: 'Startup', kmu: 'KMU', enterprise: 'Enterprise' }[val] || 'KMU';
}

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// ===== MODULE NAV =====
function buildModuleNav() {
    const nav = document.getElementById("moduleNav");
    nav.innerHTML = MODULES.map((mod, i) => {
        const dotClass = getModuleDotClass(i);
        return `<button class="module-tab" data-module="${i}" onclick="jumpToModule(${i})">
            <span class="tab-dot ${dotClass}"></span>
            ${mod.icon} ${mod.id}. ${mod.name}
            <span class="tab-score" id="tab-score-${i}"></span>
        </button>`;
    }).join("");
    updateModuleNav();
}

function getModuleDotClass(moduleIndex) {
    const moduleQuestions = allQuestions.filter(q => q.moduleIndex === moduleIndex);
    const answered = moduleQuestions.filter(q => state.answers[q.key] && state.answers[q.key].choiceIndex !== undefined);
    if (answered.length === 0) return "";
    if (answered.length === moduleQuestions.length) return "has-answers";
    return "partial";
}

function updateModuleNav() {
    const currentModule = allQuestions[state.currentQuestion].moduleIndex;
    const scores = calculateModuleScores();
    document.querySelectorAll(".module-tab").forEach((tab, i) => {
        tab.classList.toggle("active", i === currentModule);
        const dot = tab.querySelector(".tab-dot");
        dot.className = `tab-dot ${getModuleDotClass(i)}`;
        
        const scoreSpan = document.getElementById(`tab-score-${i}`);
        if (scoreSpan && scores[MODULES[i].id].count > 0) {
            scoreSpan.textContent = `— ${scores[MODULES[i].id].avg.toFixed(1)}`;
        } else if (scoreSpan) {
            scoreSpan.textContent = '';
        }
    });
}

function animateFloatingScore(moduleIndex, addedLevel) {
    const tab = document.querySelector(`.module-tab[data-module="${moduleIndex}"]`);
    if (!tab) return;
    const floatEl = document.createElement("div");
    floatEl.className = "module-score-float";
    floatEl.textContent = `+${addedLevel}`;
    tab.appendChild(floatEl);
    setTimeout(() => floatEl.remove(), 1000);
}

function jumpToModule(moduleIndex) {
    saveCurrentAnswer();
    const first = allQuestions.findIndex(q => q.moduleIndex === moduleIndex);
    if (first >= 0) {
        state.currentQuestion = first;
        renderQuestion();
    }
}

// ===== RENDER QUESTION =====
function renderQuestion() {
    const q = allQuestions[state.currentQuestion];
    const answer = state.answers[q.key] || { choiceIndex: undefined, notes: "" };
    const displayQuestion = q.q[state.companyStage];
    
    const choicesHTML = q.choices.map((c, i) => {
        const selected = answer.choiceIndex === i;
        const levelClass = `level-${c.level}`;
        const levelDot = ['🔴', '🟡', '🟢', '🚀'][c.level];
        return `<button class="choice-card ${selected ? 'choice-selected ' + levelClass : ''}" onclick="selectChoice(${i})">
            <span class="choice-dot">${levelDot}</span>
            <span class="choice-text">${c.text}</span>
            ${selected ? '<span class="choice-check">✓</span>' : ''}
        </button>`;
    }).join("");
    
    const card = document.getElementById("cardArea");
    
    // Dynamic notes placeholder based on context
    const notesPlaceholders = [
        "Beschreiben Sie Ihren Workflow — wir integrieren dies in Ihren Aktionsplan...",
        "Welche Tools nutzen Sie bereits? Wir prüfen lokale Open-Source-Alternativen...",
        "Gibt es spezielle Flaschenhälse? Wir suchen nach Automatisierungspotenzial...",
        "Ergänzende Gedanken oder Beispiele aus dem Alltag...",
        "Wie gehen Ihre Mitarbeiter momentan mit diesen Aufgaben um?"
    ];
    const placeholder = notesPlaceholders[state.currentQuestion % notesPlaceholders.length];

    card.innerHTML = `
        <div class="question-card slide-in-${slideDirection}">
            <div class="card-meta">
                <span class="badge badge-module">${q.module.icon} Modul ${q.module.id}</span>
                <span class="badge badge-target">🎯 ${q.target}</span>
                <span class="badge badge-topic">${q.topic}</span>
            </div>
            
            <h2 class="card-question">${displayQuestion}</h2>
            
            <div class="card-context">
                <div class="card-context-label">🧠 Berater-Fokus (${getStageLabel(state.companyStage)})</div>
                ${q.context}
            </div>
            
            <div class="choices-grid">
                ${choicesHTML}
            </div>

            <div class="choice-error" id="choiceError" style="display: none;">
                ⚠️ Bitte wählen Sie eine Antwort, bevor Sie weitergehen.
            </div>
            
            <div class="notes-group">
                <label>📝 Eigene Notizen (optional)</label>
                <textarea class="notes-textarea" id="notesInput" 
                          placeholder="${placeholder}"
                          oninput="autoSaveNotes()">${answer.notes || ''}</textarea>
            </div>
        </div>
    `;
    
    document.getElementById("questionCounter").textContent = 
        `${state.currentQuestion + 1} / ${allQuestions.length}`;
        
    const pct = ((state.currentQuestion + 1) / allQuestions.length) * 100;
    const pContainer = document.querySelector(".progress-container");
    if (pContainer) {
        pContainer.innerHTML = `<div class="progress-bar" id="progressBar" style="width: ${pct}%"></div><div class="progress-text">${Math.round(pct)}% abgeschlossen</div>`;
    }
    
    document.getElementById("btnPrev").style.visibility = state.currentQuestion === 0 ? "hidden" : "visible";
    const btnNext = document.getElementById("btnNext");
    if (state.currentQuestion === allQuestions.length - 1) {
        btnNext.innerHTML = `Report generieren <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M6 2h5l5 5v9a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="currentColor" stroke-width="1.5"/><path d="M11 2v5h5M8 10h4M8 13h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
        btnNext.onclick = attemptGenerateReport;
    } else {
        btnNext.innerHTML = `Weiter <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        btnNext.onclick = attemptNextQuestion;
    }
    
    updateModuleNav();
}

// ===== INTERACTION =====
function selectChoice(index) {
    const q = allQuestions[state.currentQuestion];
    const prevAnswer = state.answers[q.key] ? state.answers[q.key].choiceIndex : undefined;
    
    if (!state.answers[q.key]) state.answers[q.key] = { choiceIndex: undefined, notes: "" };
    state.answers[q.key].choiceIndex = index;
    const errorEl = document.getElementById("choiceError");
    if (errorEl) errorEl.style.display = "none";
    
    renderQuestion();
    
    // Gamification enhancements
    const choice = q.choices[index];
    if (prevAnswer !== index) {
        animateFloatingScore(q.moduleIndex, choice.level);
        
        let toastMsg = "";
        if (choice.level === 3) toastMsg = "🚀 Optimal — Expertise erkannt";
        else if (choice.level === 2) toastMsg = "🟢 Solide Grundlage";
        else if (choice.level === 1) toastMsg = "🟡 Aufbaupotenzial identifiziert";
        else if (choice.level === 0) toastMsg = "🔴 Handlungsbedarf erkannt — Lösung im Plan";
        
        showToast(toastMsg, choice.level);
    }
}

function saveCurrentAnswer() {
    const q = allQuestions[state.currentQuestion];
    const notesInput = document.getElementById("notesInput");
    if (!state.answers[q.key]) state.answers[q.key] = { choiceIndex: undefined, notes: "" };
    if (notesInput) state.answers[q.key].notes = notesInput.value;
}

function autoSaveNotes() {
    const q = allQuestions[state.currentQuestion];
    if (!state.answers[q.key]) state.answers[q.key] = { choiceIndex: undefined, notes: "" };
    state.answers[q.key].notes = document.getElementById("notesInput").value;
}

function hasValidChoice() {
    const q = allQuestions[state.currentQuestion];
    const answer = state.answers[q.key];
    return (answer && answer.choiceIndex !== undefined);
}

function attemptNextQuestion() {
    saveCurrentAnswer();
    if (!hasValidChoice()) {
        document.getElementById("choiceError").style.display = "block";
        return;
    }
    if (state.currentQuestion < allQuestions.length - 1) {
        state.currentQuestion++;
        slideDirection = 'right';
        renderQuestion();
        window.scrollTo(0, 0);
    }
}

function attemptGenerateReport() {
    saveCurrentAnswer();
    if (!hasValidChoice()) {
        document.getElementById("choiceError").style.display = "block";
        return;
    }
    generateReport();
}

function prevQuestion() {
    saveCurrentAnswer();
    if (state.currentQuestion > 0) {
        state.currentQuestion--;
        slideDirection = 'left';
        renderQuestion();
        window.scrollTo(0, 0);
    }
}

// ===== SCORING ENGINE =====
function calculateModuleScores() {
    const scores = {};
    MODULES.forEach((mod, mi) => {
        const qs = allQuestions.filter(q => q.moduleIndex === mi);
        let total = 0, count = 0;
        qs.forEach(q => {
            const a = state.answers[q.key];
            if (a && a.choiceIndex !== undefined) {
                total += q.choices[a.choiceIndex].level;
                count++;
            }
        });
        scores[mod.id] = {
            name: mod.name,
            icon: mod.icon,
            avg: count > 0 ? total / count : 0,
            count: count,
            total: qs.length
        };
    });
    return scores;
}

function getOverallScore(scores) {
    const vals = Object.values(scores);
    return vals.reduce((s, m) => s + m.avg, 0) / vals.length;
}

function collectRecommendedTools() {
    const toolTags = new Set();
    allQuestions.forEach(q => {
        const a = state.answers[q.key];
        if (a && a.choiceIndex !== undefined) {
            const choice = q.choices[a.choiceIndex];
            if (choice.level <= 1) {
                choice.tags.forEach(t => toolTags.add(t));
            }
        }
    });
    return [...toolTags].map(tag => TOOLS[tag]).filter(Boolean);
}

// ===== RADAR CHART (Canvas) =====
function drawRadarChart(canvasId, scores) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width, h = canvas.height;
    const cx = w / 2, cy = h / 2;
    const maxR = Math.min(cx, cy) - 40;
    
    const moduleKeys = Object.keys(scores);
    const n = moduleKeys.length;
    const angleStep = (2 * Math.PI) / n;
    
    ctx.clearRect(0, 0, w, h);
    
    // Grid circles
    for (let ring = 1; ring <= 3; ring++) {
        const r = (ring / 3) * maxR;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, 2 * Math.PI);
        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    
    // Grid lines + labels
    moduleKeys.forEach((key, i) => {
        const angle = -Math.PI / 2 + i * angleStep;
        const lx = cx + maxR * Math.cos(angle);
        const ly = cy + maxR * Math.sin(angle);
        
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(lx, ly);
        ctx.strokeStyle = "rgba(255,255,255,0.06)";
        ctx.stroke();
        
        // Label
        const labelR = maxR + 22;
        const tx = cx + labelR * Math.cos(angle);
        const ty = cy + labelR * Math.sin(angle);
        ctx.fillStyle = "#9394a5";
        ctx.font = "12px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${scores[key].icon} ${scores[key].name}`, tx, ty);
    });
    
    // Data polygon
    ctx.beginPath();
    moduleKeys.forEach((key, i) => {
        const angle = -Math.PI / 2 + i * angleStep;
        const val = scores[key].avg / 3;
        const r = val * maxR;
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.fillStyle = "rgba(99,102,241,0.2)";
    ctx.fill();
    ctx.strokeStyle = "#6366f1";
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Data points
    moduleKeys.forEach((key, i) => {
        const angle = -Math.PI / 2 + i * angleStep;
        const val = scores[key].avg / 3;
        const r = val * maxR;
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);
        
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, 2 * Math.PI);
        ctx.fillStyle = "#6366f1";
        ctx.fill();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1.5;
        ctx.stroke();
    });
}

// ===== OCTALYSIS DRIVE CALCULATION =====
function calculateOctalysisDrives() {
    const drives = [
        { label: "Sinnhaftigkeit", val: 0.3, color: "#22c55e" },
        { label: "Entwicklung", val: 0.3, color: "#3b82f6" },
        { label: "Kreativität", val: 0.3, color: "#8b5cf6" },
        { label: "Eigentum", val: 0.3, color: "#f59e0b" },
        { label: "Einfluss", val: 0.3, color: "#ec4899" },
        { label: "Verknappung", val: 0.2, color: "#ef4444" },
        { label: "Ungewissheit", val: 0.2, color: "#f97316" },
        { label: "Verlust", val: 0.2, color: "#dc2626" }
    ];
    
    allQuestions.forEach(q => {
        const a = state.answers[q.key];
        if (!a || a.choiceIndex === undefined) return;
        const choice = q.choices[a.choiceIndex];
        const mod = q.module;
        
        // Map answers to drives based on module context
        if (mod.id === 'A') { // Strategie
            drives[0].val += choice.level * 0.08; // Epic Meaning rises with strategic clarity
            drives[1].val += choice.level * 0.06;
        }
        if (mod.id === 'B') { // Prozesse
            drives[2].val += choice.level * 0.07; // Creativity rises with process maturity
            drives[3].val += (3 - choice.level) * 0.06; // Ownership need rises when processes are weak
        }
        if (mod.id === 'C') { // Daten & IT
            drives[1].val += choice.level * 0.05; // Accomplishment from data maturity
            drives[5].val += (3 - choice.level) * 0.05; // Scarcity pressure from data gaps
        }
        if (mod.id === 'D') { // Kultur
            drives[4].val += choice.level * 0.08; // Social Influence from team readiness
            drives[7].val += (3 - choice.level) * 0.06; // Loss Avoidance from resistance
        }
        if (mod.id === 'E') { // Compliance
            drives[6].val += (3 - choice.level) * 0.06; // Uncertainty from compliance gaps
            drives[7].val += (3 - choice.level) * 0.05;
        }
        if (mod.id === '0') { // Pre-Assessment
            drives[0].val += choice.level * 0.05;
            drives[2].val += choice.level * 0.05;
        }
    });
    
    // Clamp 0..1
    drives.forEach(d => d.val = Math.min(1, Math.max(0.15, d.val)));
    return drives;
}

// ===== ROI ESTIMATION =====
function estimateROI() {
    const manualQ = allQuestions.find(q => q.topic === "Manuelle Last");
    const a = manualQ ? state.answers[manualQ.key] : null;
    if (!a || a.choiceIndex === undefined) return null;
    
    const hourRanges = [25, 20, 10, 3]; // hrs/week saved per level
    const weeklyHours = hourRanges[a.choiceIndex] || 10;
    const hourlyRate = state.companyStage === 'enterprise' ? 85 : state.companyStage === 'kmu' ? 55 : 35;
    const weeklySaving = weeklyHours * hourlyRate;
    const yearlySaving = weeklySaving * 48; // 48 working weeks
    const automationPct = a.choiceIndex <= 1 ? 40 : 20;
    const realSaving = Math.round(yearlySaving * (automationPct / 100));
    
    return { weeklyHours, hourlyRate, automationPct, realSaving };
}

// ===== EXECUTIVE SUMMARY =====
function buildExecutiveSummary(scores) {
    const priorities = [];
    const sorted = Object.entries(scores).sort((a, b) => a[1].avg - b[1].avg);
    
    sorted.slice(0, 3).forEach(([id, s]) => {
        const urgency = s.avg < 1 ? '🔴 Sofort' : s.avg < 2 ? '🟡 Kurzfristig' : '🟢 Optimierung';
        let action = '';
        if (id === '0') action = 'KI-Grundlagen-Workshop durchführen';
        else if (id === 'A') action = 'Strategische Ziele und KPIs definieren';
        else if (id === 'B') action = 'Kernprozesse dokumentieren und erste Automatisierung starten';
        else if (id === 'C') action = 'Daten konsolidieren und zentrale Plattform einrichten';
        else if (id === 'D') action = 'Team-Schulung und Change-Management initiieren';
        else if (id === 'E') action = 'DSGVO-Audit und Compliance-Framework aufsetzen';
        priorities.push({ module: s.name, icon: s.icon, score: s.avg, urgency, action });
    });
    return priorities;
}

// ===== CONFETTI CELEBRATION =====
function launchConfetti() {
    const canvas = document.createElement('canvas');
    canvas.id = 'confettiCanvas';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const colors = ['#6366f1','#8b5cf6','#3b82f6','#22c55e','#f59e0b','#ec4899','#ef4444'];
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: canvas.width / 2 + (Math.random() - 0.5) * 200,
            y: canvas.height / 2,
            vx: (Math.random() - 0.5) * 12,
            vy: Math.random() * -14 - 4,
            w: Math.random() * 8 + 4,
            h: Math.random() * 6 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 12,
            gravity: 0.15 + Math.random() * 0.1,
            opacity: 1
        });
    }
    
    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        particles.forEach(p => {
            p.x += p.vx;
            p.vy += p.gravity;
            p.y += p.vy;
            p.rotation += p.rotSpeed;
            p.opacity -= 0.008;
            if (p.opacity > 0 && p.y < canvas.height + 50) {
                alive = true;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation * Math.PI / 180);
                ctx.globalAlpha = Math.max(0, p.opacity);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
                ctx.restore();
            }
        });
        frame++;
        if (alive && frame < 200) requestAnimationFrame(animate);
        else canvas.remove();
    }
    requestAnimationFrame(animate);
}

// ===== ANIMATED COUNTER =====
function animateCounter(elementId, target, duration) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const start = 0;
    const startTime = performance.now();
    function step(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = start + (target - start) * eased;
        el.textContent = current.toFixed(1);
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

// ===== REPORT =====
function generateReport() {
    showScreen("report");
    launchConfetti();
    
    const scores = calculateModuleScores();
    const overall = getOverallScore(scores);
    const tools = collectRecommendedTools();
    const drives = calculateOctalysisDrives();
    const roi = estimateROI();
    const priorities = buildExecutiveSummary(scores);
    
    // Build module scores bars
    let modulesBarsHTML = Object.entries(scores).map(([id, s]) => {
        const pct = (s.avg / 3) * 100;
        const color = s.avg < 1 ? 'var(--status-red)' : s.avg < 2 ? 'var(--status-yellow)' : 'var(--status-green)';
        const label = s.avg < 1 ? 'Kritisch' : s.avg < 2 ? 'Aufbau nötig' : 'Bereit';
        return `<div class="score-bar-row">
            <span class="score-bar-label">${s.icon} ${s.name}</span>
            <div class="score-bar-track">
                <div class="score-bar-fill" style="width:${pct}%;background:${color}"></div>
            </div>
            <span class="score-bar-value" style="color:${color}">${s.avg.toFixed(1)} <small>${label}</small></span>
        </div>`;
    }).join("");
    
    // Executive Summary
    const execHTML = priorities.map(p => `
        <div class="exec-priority">
            <div class="exec-priority-header">
                <span class="exec-icon">${p.icon}</span>
                <span class="exec-module">${p.module}</span>
                <span class="exec-urgency">${p.urgency}</span>
            </div>
            <div class="exec-action">→ ${p.action}</div>
        </div>
    `).join("");
    
    // ROI section
    let roiHTML = '';
    if (roi) {
        roiHTML = `
        <div class="report-module">
            <h2>💰 Geschätztes Einsparpotenzial</h2>
            <div class="roi-grid">
                <div class="roi-card">
                    <div class="roi-number">${roi.weeklyHours}h</div>
                    <div class="roi-label">Manuelle Stunden / Woche</div>
                </div>
                <div class="roi-card">
                    <div class="roi-number">${roi.automationPct}%</div>
                    <div class="roi-label">Automatisierbar</div>
                </div>
                <div class="roi-card roi-card-highlight">
                    <div class="roi-number">~${(roi.realSaving).toLocaleString('de-DE')}€</div>
                    <div class="roi-label">Jährliches Einsparpotenzial</div>
                </div>
            </div>
            <p class="roi-note">Berechnung: ${roi.weeklyHours}h × ${roi.hourlyRate}€/h × ${roi.automationPct}% Automatisierung × 48 Wochen. Konservative Schätzung basierend auf Ihren Angaben.</p>
        </div>`;
    }
    
    // Benchmark context
    const benchStage = { startup: 1.2, kmu: 1.6, enterprise: 2.1 }[state.companyStage] || 1.6;
    const benchDelta = overall - benchStage;
    const benchVerdict = benchDelta >= 0 
        ? `Sie liegen <strong>${benchDelta.toFixed(1)} Punkte über</strong> dem Branchendurchschnitt.`
        : `Sie liegen <strong>${Math.abs(benchDelta).toFixed(1)} Punkte unter</strong> dem Branchendurchschnitt.`;
    
    // Engagement details — dynamic based on top drives
    const sortedDrives = [...drives].sort((a, b) => b.val - a.val);
    const topDrives = sortedDrives.slice(0, 3);
    const weakDrives = sortedDrives.slice(-2);
    const engagementInsight = `Ihr Team zeigt stärkstes Motivationspotenzial in <strong>${topDrives.map(d => d.label).join(', ')}</strong>. 
        Die KI-Rollout-Strategie sollte diese Hebel gezielt nutzen — z.B. durch sichtbare Quick-Wins (${topDrives[0].label}) und transparente Fortschrittsanzeigen (${topDrives[1].label}). 
        Schwächere Bereiche wie <strong>${weakDrives.map(d => d.label).join(' und ')}</strong> zeigen, dass Ihr Team weniger auf Druck als auf positive Verstärkung reagiert — ein gutes Zeichen für nachhaltige Adoption.`;
    
    // Build tool recommendation cards
    let toolsHTML = "";
    if (tools.length > 0) {
        const weekPlan = [];
        tools.forEach((tool, i) => {
            const week = Math.floor(i / 2) + 1;
            if (!weekPlan[week]) weekPlan[week] = [];
            weekPlan[week].push(tool);
        });
        
        let weekHTML = Object.entries(weekPlan).filter(([,v]) => v).map(([week, wtools]) => {
            const cards = wtools.map(t => `
                <div class="tool-card">
                    <div class="tool-card-header">
                        <span class="tool-icon">${t.icon}</span>
                        <div>
                            <div class="tool-name">${t.name}</div>
                            <div class="tool-desc">${t.desc}</div>
                        </div>
                        <span class="tool-time">⏱ ${t.setup}</span>
                    </div>
                    <div class="tool-how"><strong>Erster Schritt:</strong> ${t.how}</div>
                    ${t.url ? `<a class="tool-link" href="${t.url}" target="_blank">→ ${t.url}</a>` : ''}
                </div>`).join("");
            return `<div class="week-block">
                <div class="week-label">📅 Woche ${week}</div>
                ${cards}
            </div>`;
        }).join("");
        
        const totalSetup = tools.reduce((s, t) => {
            const m = t.setup.match(/(\d+)/);
            return s + (m ? parseInt(m[1]) : 0);
        }, 0);
        
        toolsHTML = `
            <div class="report-module">
                <h2>🛠️ Ihr individueller KI-Setup-Plan</h2>
                <p class="setup-summary">Basierend auf Ihren Antworten empfehlen wir <strong>${tools.length} Open-Source Tools</strong>. 
                Geschätzter Gesamtaufwand: <strong>~${totalSetup > 60 ? Math.round(totalSetup/60) + ' Stunden' : totalSetup + ' Minuten'}</strong></p>
                ${weekHTML}
            </div>`;
    }
    
    // Build detailed answers
    let detailHTML = "";
    MODULES.forEach((mod, mi) => {
        const qs = allQuestions.filter(q => q.moduleIndex === mi);
        let items = qs.map(q => {
            const a = state.answers[q.key] || {};
            if (a.choiceIndex === undefined) return "";
            const choice = q.choices[a.choiceIndex];
            const levelDot = ['🔴', '🟡', '🟢', '🚀'][choice.level];
            const levelLabel = ['Kritisch', 'Aufbau nötig', 'Solide', 'Optimal'][choice.level];
            const notesHTML = a.notes ? `<div class="report-item-notes">${escapeHTML(a.notes)}</div>` : "";
            return `<div class="report-item">
                <div class="report-item-header">
                    <span class="report-item-question">${q.topic}</span>
                    <span class="report-status-badge rsb-level-${choice.level}">${levelDot} ${levelLabel}</span>
                </div>
                <div class="report-item-choice">${choice.text}</div>
                ${notesHTML}
            </div>`;
        }).join("");
        
        if (!items.trim()) return;
        detailHTML += `<div class="report-module">
            <h2>${mod.icon} Modul ${mod.id}: ${mod.name} — ${scores[mod.id].avg.toFixed(1)} / 3.0</h2>
            ${items}
        </div>`;
    });
    
    // Overall verdict
    const verdict = overall < 1 ? { text: "Grundlagen fehlen", color: "var(--status-red)", emoji: "🔴" }
        : overall < 2 ? { text: "Aufbauphase", color: "var(--status-yellow)", emoji: "🟡" }
        : { text: "KI-Ready", color: "var(--status-green)", emoji: "🟢" };
    
    document.getElementById("reportContent").innerHTML = `
        <div class="report-header">
            <h1>KI-Readiness Report</h1>
            <p><strong>${escapeHTML(state.clientName)}</strong> (${getStageLabel(state.companyStage)}) · ${state.workshopDate}</p>
        </div>
        
        <div class="overall-score">
            <div class="overall-number" id="animatedScore" style="color:${verdict.color}">0.0</div>
            <div class="overall-label">von 3.0</div>
            <div class="overall-verdict" style="color:${verdict.color}">${verdict.emoji} ${verdict.text}</div>
            <div class="benchmark-line">📊 Branchendurchschnitt (${getStageLabel(state.companyStage)}): ${benchStage.toFixed(1)} — ${benchVerdict}</div>
        </div>
        
        <div class="report-module">
            <h2>🎯 Executive Summary — Top 3 Prioritäten</h2>
            <div class="exec-grid">
                ${execHTML}
            </div>
        </div>
        
        <div class="radar-container">
            <canvas id="radarChart" width="400" height="400"></canvas>
        </div>
        
        <div class="score-bars">
            ${modulesBarsHTML}
        </div>
        
        ${roiHTML}
        
        <div class="report-module">
            <h2>🧠 Ihr Engagement-Profil (Octalysis)</h2>
            <div class="engagement-profile-container">
                <div class="engagement-chart-wrapper">
                    <canvas id="octalysisChart" width="320" height="320"></canvas>
                </div>
                <div class="engagement-details">
                    <h3>Wie Ihr Team motiviert wird</h3>
                    <p>${engagementInsight}</p>
                    <p>Wir fokussieren uns auf <strong>White Hat Gamification</strong> (Sinnhaftigkeit, Ermächtigung, Zugehörigkeit), um langfristige Adoption ohne manipulative Tricks zu gewährleisten.</p>
                </div>
            </div>
        </div>
        
        ${toolsHTML}

        <div class="report-module">
            <h2>🌍 Strategischer Rahmen: Sovereign AI</h2>
            <div class="strategic-frame">
                <p><strong>Warum empfehlen wir Open-Source und selbst-gehostete Lösungen?</strong></p>
                <p>Der Markt für KI-Tools wird zunehmend von Cloud-Diensten dominiert, die oft auf Vendor-Lock-in basieren. Gleichzeitig steigen die regulatorischen Anforderungen in der EU (DSGVO, AI Act, Digital Fairness Act) massiv an.</p>
                <p>Eine <strong>Sovereign AI Roadmap</strong> garantiert Ihnen volle Datenkontrolle, Unabhängigkeit von Monopolen und schützt Ihre sensiblen Geschäftsprozesse. Wir setzen auf sichere KI, die als Werkzeug dient und zu 100% Ihnen gehört.</p>
            </div>
        </div>
        
        <div class="report-module">
            <h2>📋 Detaillierte Ergebnisse</h2>
        </div>
        ${detailHTML}
        
        <div class="report-footer">
            Strategische Beratung durch <strong>MW AI Solutions</strong>. Bereit für den nächsten Schritt?
        </div>
    `;
    
    // Draw charts and animate after DOM
    requestAnimationFrame(() => {
        drawRadarChart("radarChart", scores);
        drawOctalysisChart("octalysisChart", drives);
        animateCounter("animatedScore", overall, 1200);
    });
}

function drawOctalysisChart(canvasId, drives) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width, h = canvas.height;
    const cx = w / 2, cy = h / 2;
    const maxR = Math.min(cx, cy) - 40;
    
    const n = drives.length;
    const angleStep = (2 * Math.PI) / n;
    
    ctx.clearRect(0, 0, w, h);
    
    // Grid rings (octagonal)
    for (let ring = 1; ring <= 4; ring++) {
        const r = (ring / 4) * maxR;
        ctx.beginPath();
        for (let i = 0; i < n; i++) {
            const angle = -Math.PI / 2 + i * angleStep;
            const px = cx + r * Math.cos(angle);
            const py = cy + r * Math.sin(angle);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = "rgba(255,255,255,0.06)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
    }
    
    // Axis lines + labels
    drives.forEach((d, i) => {
        const angle = -Math.PI / 2 + i * angleStep;
        const lx = cx + maxR * Math.cos(angle);
        const ly = cy + maxR * Math.sin(angle);
        
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(lx, ly);
        ctx.strokeStyle = "rgba(255,255,255,0.04)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
        
        // Labels with real hex colors
        const labelR = maxR + 20;
        const tx = cx + labelR * Math.cos(angle);
        const ty = cy + labelR * Math.sin(angle);
        ctx.fillStyle = d.color;
        ctx.font = "bold 10px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(d.label, tx, ty);
    });
    
    // Data polygon — filled
    ctx.beginPath();
    drives.forEach((d, i) => {
        const angle = -Math.PI / 2 + i * angleStep;
        const r = d.val * maxR;
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    });
    ctx.closePath();
    
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR);
    grad.addColorStop(0, "rgba(139,92,246,0.25)");
    grad.addColorStop(1, "rgba(99,102,241,0.05)");
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = "#8b5cf6";
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Data points with per-drive color
    drives.forEach((d, i) => {
        const angle = -Math.PI / 2 + i * angleStep;
        const r = d.val * maxR;
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);
        
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, 2 * Math.PI);
        ctx.fillStyle = d.color;
        ctx.fill();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1.5;
        ctx.stroke();
    });
    
    // Center badge
    ctx.fillStyle = "rgba(139,92,246,0.15)";
    ctx.beginPath();
    ctx.arc(cx, cy, 18, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "#c4b5fd";
    ctx.font = "bold 11px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("8CD", cx, cy);
}

function backToAssessment() {
    showScreen("assessment");
    renderQuestion();
}

function printReport() {
    window.print();
}

function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

// ===== SAVE / LOAD =====
function saveProgress() {
    saveCurrentAnswer();
    const data = {
        clientName: state.clientName,
        companyStage: state.companyStage,
        workshopDate: state.workshopDate,
        currentQuestion: state.currentQuestion,
        answers: state.answers,
        savedAt: new Date().toISOString()
    };
    localStorage.setItem(`ki-assessment-${state.clientName}`, JSON.stringify(data));
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `KI-Assessment_${state.clientName.replace(/\s+/g, '_')}_${state.workshopDate}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("✅ Fortschritt gespeichert & heruntergeladen");
}

function loadProgress() {
    const saved = localStorage.getItem(`ki-assessment-${state.clientName}`);
    if (saved) {
        const data = JSON.parse(saved);
        state.answers = data.answers || {};
        state.currentQuestion = data.currentQuestion || 0;
        if (data.companyStage) state.companyStage = data.companyStage;
    }
}

// ===== TOAST =====
function showToast(msg, level) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.className = "toast show";
    if (level !== undefined) {
        toast.classList.add(`toast-level-${level}`);
    }
    setTimeout(() => toast.className = "toast", 2500);
}

// ===== KEYBOARD NAV =====
document.addEventListener("keydown", (e) => {
    if (document.getElementById("assessment").classList.contains("active")) {
        if (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT") return;
        if (e.key === "ArrowRight" || e.key === "Enter") attemptNextQuestion();
        if (e.key === "ArrowLeft") prevQuestion();
        if (e.key === "1") selectChoice(0);
        if (e.key === "2") selectChoice(1);
        if (e.key === "3") selectChoice(2);
        if (e.key === "4") selectChoice(3);
    }
});

// ===== AUTO-SET TODAY =====
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("workshopDate").value = new Date().toISOString().split("T")[0];
});
