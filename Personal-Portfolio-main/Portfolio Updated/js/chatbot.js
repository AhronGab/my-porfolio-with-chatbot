/**
 * Portfolio Assistant Chatbot
 * Dedicated intelligent digital representative for Ahron Gab Peloni's Portfolio.
 *
 * Features:
 * - Complete portfolio knowledge base (Identity, Bio, Education, Skills, Projects, Certifications, Goals, Hobbies, Contact)
 * - Automatic interpretation & normalization of typos, slang, abbreviations, and informal language
 * - Multi-turn conversational context tracking
 * - Strict truthfulness (never invents facts; polite fallback for missing portfolio info)
 * - Polite out-of-scope redirection
 * - Interactive suggestion chips and rich formatted responses
 * - Light/Dark theme support and sessionStorage state persistence
 */

(function () {
  "use strict";

  // =========================================================================
  // 1. KNOWLEDGE BASE
  // =========================================================================
  const PORTFOLIO_DATA = {
    profile: {
      name: "Ahron Gab Peloni",
      role: "Web Developer & Tech Enthusiast",
      titles: ["Web Developer", "Tech Enthusiast", "Problem Solver"],
      bio: "Ahron Gab Peloni is a passionate Web Developer with a strong foundation in Information Technology and a deep curiosity for innovative solutions. His journey in tech is driven by the desire to create impactful software that bridges gaps and solves real-world problems. With expertise spanning frontend and backend technologies, he specializes in building responsive, user-centric applications, and firmly believes in clean code, continuous learning, and collaborative development.",
      tagline:
        "Crafting elegant solutions to complex problems. Passionate about building scalable applications and continuously learning emerging technologies.",
      website: "https://ahrongabpeloni.dev/",
      location:
        "Metro Manila, Philippines (Alumnus of Philippine Christian University & Paranaque National High School Baclaran)",
    },
    personal: {
      age: 21,
      birthDate: "September 16, 2004",
      birthYear: 2004,
      address: "53 baes road san gregorio village pasay city",
      school: "Philippine christian university",
      yearLevel:
        "4th year college taking BSIT/Bachelor of Science in Information Technology",
    },
    education: {
      university: {
        institution: "Philippine Christian University",
        degree: "Bachelor of Science in Information Technology (BSIT)",
        period: "2020 – 2024",
        status: "Graduated (2024)",
      },
      highSchool: {
        institution: "Paranaque National High School Baclaran",
        period: "2016 – 2020",
        description:
          "College preparatory curriculum with a strong focus on mathematics and sciences, alongside notable achievements and activities.",
      },
    },
    certifications: [
      {
        title: "DataCamp Skill Verification",
        issuer: "DataCamp",
        id: "DL0031254637400",
        url: "https://www.datacamp.com/skill-verification/DL0031254637400",
        description:
          "Verified core proficiency in data and programming skills.",
      },
      {
        title: "DataCamp AI Certification",
        issuer: "DataCamp",
        id: "AIF0026150232168",
        url: "https://www.datacamp.com/skill-verification/AIF0026150232168",
        description:
          "Certification demonstrating foundational AI competencies and practical application.",
      },
      {
        title: "Advanced Cloud & Architecture Certifications",
        issuer: "Ongoing",
        status: "In Progress (Learning Goal)",
        description:
          "Active preparation for industry-standard cloud and DevOps certifications.",
      },
    ],
    skills: {
      frontend: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Responsive Web Design",
        "UI/UX Design",
        "CSS Grid & Flexbox",
        "Modern CSS Animations & Transitions",
      ],
      backendAndCore: [
        "Web Application Development",
        "Full-Stack Concepts",
        "Scalable Architecture",
        "Clean Code Practices",
        "Problem Solving",
        "Continuous Learning",
        "Collaborative Development",
      ],
      toolsAndCloud: [
        "Git & GitHub",
        "Netlify",
        "Vercel",
        "DevOps Fundamentals",
        "Cloud Architecture Concepts",
      ],
      aiAndData: [
        "AI/ML Fundamentals",
        "DataCamp AI Certified",
        "Data Analysis & Skill Verification",
      ],
    },
    projects: [
      {
        name: "Project Alpha",
        type: "Web & Software Application",
        category: "Featured Gallery Project",
      },
      {
        name: "Project Beta",
        type: "Web & Software Application",
        category: "Featured Gallery Project",
      },
      {
        name: "Project Gamma",
        type: "Web & Software Application",
        category: "Featured Gallery Project",
      },
      {
        name: "Project Delta",
        type: "Web & Software Application",
        category: "Featured Gallery Project",
      },
      {
        name: "Project Epsilon",
        type: "Web & Software Application",
        category: "Featured Gallery Project",
      },
      {
        name: "Project Zeta",
        type: "Web & Software Application",
        category: "Featured Gallery Project",
      },
      {
        name: "Project Eta",
        type: "Web & Software Application",
        category: "Featured Gallery Project",
      },
      {
        name: "Project Theta",
        type: "Web & Software Application",
        category: "Featured Gallery Project",
      },
      {
        name: "Personal Portfolio Web App",
        type: "Modern Responsive Website",
        category: "Portfolio Core",
        description:
          "Engineered with modern HTML5, CSS3, vanilla JavaScript, theme switcher (Light/Dark mode), interactive typewriter effect, scroll animations, lightbox photo gallery, and an intelligent AI assistant.",
      },
    ],
    goals: {
      professional: [
        {
          title: "Senior Developer Role",
          target: "Advance to a senior developer position within 2 years",
          progress: "60%",
        },
        {
          title: "Cloud & DevOps Mastery",
          target: "Master cloud architecture and DevOps practices",
          progress: "40%",
        },
        {
          title: "Technical Leadership",
          target: "Lead a development team on a major project",
          progress: "30%",
        },
      ],
      learning: [
        {
          title: "Advanced Certifications",
          target: "Obtain advanced cloud and architecture certifications",
          progress: "50%",
        },
        {
          title: "AI/ML Fundamentals",
          target:
            "Gain a solid, practical understanding of AI and machine learning",
          progress: "35%",
        },
      ],
      personal: [
        {
          title: "Work-Life Balance",
          target:
            "Maintain a healthy, sustainable balance between career and personal life",
          progress: "70%",
        },
        {
          title: "Community Contribution",
          target:
            "Contribute to open-source projects and mentor junior developers",
          progress: "45%",
        },
      ],
    },
    hobbies: [
      {
        name: "Programming",
        icon: "fa-code",
        description:
          "Building side projects, exploring new frameworks, and contributing to open-source.",
      },
      {
        name: "Reading",
        icon: "fa-book",
        description:
          "Tech blogs, personal development books, and exploring new perspectives.",
      },
      {
        name: "Basketball",
        icon: "fa-basketball-ball",
        description: "Staying active and enjoying team sports on the court.",
      },
      {
        name: "Photography",
        icon: "fa-camera",
        description:
          "Capturing moments, learning composition, and exploring visual storytelling.",
      },
      {
        name: "Gaming",
        icon: "fa-gamepad",
        description: "Strategic and puzzle games that challenge the mind.",
      },
      {
        name: "Music",
        icon: "fa-music",
        description:
          "Exploring various genres and learning to play musical instruments.",
      },
    ],
    contact: {
      github: "https://github.com/AhronGab",
      linkedin: "https://www.linkedin.com/in/ahron-gab-peloni-ba6182405",
      facebook: "https://www.facebook.com/ahronpeloni",
      instagram: "https://www.instagram.com/ahrongab_",
      website: "https://ahrongabpeloni.dev/",
    },
    pages: [
      {
        name: "Home",
        path: "index.html",
        desc: "Introduction, hero presentation, and overview",
      },
      {
        name: "About",
        path: "pages/about.html",
        desc: "Biography, background, and personal journey",
      },
      {
        name: "Education",
        path: "pages/education.html",
        desc: "University degree, high school, and verified certifications",
      },
      {
        name: "Goals",
        path: "pages/goals.html",
        desc: "Professional, learning, and personal aspirations",
      },
      {
        name: "Hobbies",
        path: "pages/hobbies.html",
        desc: "Interests outside of web development",
      },
      {
        name: "Gallery",
        path: "pages/gallery.html",
        desc: "Photo showcase of projects and moments with interactive lightbox",
      },
    ],
  };

  // Determine root-relative path based on current document location
  function getRelativePath(targetPath) {
    const isPagesSubdir = window.location.pathname.includes("/pages/");
    if (isPagesSubdir) {
      if (targetPath.startsWith("pages/")) {
        return targetPath.replace("pages/", "");
      }
      if (targetPath === "index.html") {
        return "../index.html";
      }
      return "../" + targetPath;
    } else {
      return targetPath;
    }
  }

  // =========================================================================
  // 2. NATURAL LANGUAGE PROCESSING & TYPO NORMALIZATION ENGINE
  // =========================================================================

  // Slang, shorthand, phonetic typos, and abbreviations dictionary
  const SLANG_AND_TYPO_MAP = {
    // Question words & pronouns
    wat: "what",
    wht: "what",
    wot: "what",
    wutt: "what",
    wad: "what",
    whut: "what",
    whr: "where",
    wer: "where",
    wher: "where",
    whear: "where",
    wen: "when",
    wn: "when",
    hw: "how",
    hows: "how is",
    ur: "your",
    urs: "yours",
    ure: "your",
    yur: "your",
    yo: "your",
    urself: "yourself",
    u: "you",
    yu: "you",
    ya: "you",
    abt: "about",
    bout: "about",
    abot: "about",
    r: "are",
    re: "are",
    pls: "please",
    plz: "please",
    plss: "please",
    bcz: "because",
    cuz: "because",
    coz: "because",
    bc: "because",
    idk: "i do not know",
    wld: "would",
    cud: "could",
    shd: "should",
    dat: "that",
    dis: "this",
    dem: "them",
    hv: "have",
    haf: "have",

    // Personal Info - Age
    agd: "age",
    ag: "age",
    aeg: "age",
    ae: "age",
    ags: "age",
    ages: "age",
    agee: "age",
    agge: "age",
    howold: "how old",
    howld: "how old",
    hwold: "how old",
    hwld: "how old",
    howld: "how old",
    hw: "how",
    hwld: "how old",

    // Personal Info - Birthday
    bday: "birthday",
    bdate: "birth date",
    dob: "date of birth",
    brthday: "birthday",
    brthdate: "birth date",
    birthdy: "birthday",
    birhday: "birthday",
    burthday: "birthday",
    birthdat: "birth date",
    brth: "birth",
    brthdy: "birthday",

    // Personal Info - Address
    addr: "address",
    addy: "address",
    addres: "address",
    adress: "address",
    addrss: "address",
    addres: "address",
    adr: "address",
    adres: "address",
    addres: "address",
    wherelive: "where live",
    whereulive: "where you live",
    whereliv: "where live",
    wherelive: "where live",
    whereulive: "where you live",
    location: "address",
    loc: "location",
    locaton: "location",
    locaton: "location",
    locaion: "location",
    locaton: "location",
    frm: "from",
    frrom: "from",
    frm: "from",
    wher: "where",
    whre: "where",
    whee: "where",
    wher: "where",
    liv: "live",
    lve: "live",
    lif: "live",
    leav: "leave",
    lives: "lives",
    livs: "lives",
    livess: "lives",
    residence: "residence",
    residnce: "residence",
    residense: "residence",
    home: "home",
    hme: "home",
    hom: "home",

    // Personal Info - School
    schl: "school",
    schol: "school",
    scool: "school",
    skool: "school",
    scholl: "school",
    shcool: "school",
    univ: "university",
    uni: "university",
    univeristy: "university",
    universiti: "university",
    unversity: "university",
    universty: "university",
    universirty: "university",

    // Personal Info - Year Level
    yrlvl: "year level",
    "yr lvl": "year level",
    yearlvl: "year level",
    lvl: "level",
    whatyear: "what year",
    whtyr: "what year",
    wherestudy: "where study",
    whereustudy: "where you study",
    yr: "year",
    yrl: "year level",

    // Personal Info - Broad / "All Info" Queries
    tehll: "tell",
    teel: "tell",
    tehl: "tell",
    tellme: "tell me",
    telme: "tell me",
    teleme: "tell me",
    teme: "tell me",
    evrything: "everything",
    evrythng: "everything",
    evythng: "everything",
    everythng: "everything",
    everyting: "everything",
    evry: "every",
    every: "every",
    al: "all",
    aal: "all",
    alll: "all",
    dets: "details",
    detls: "details",
    dtails: "details",
    detal: "details",
    detailes: "details",
    detais: "details",
    infomation: "information",
    informaton: "information",
    infomr: "information",
    infos: "information",
    infos: "information",
    personl: "personal",
    prsonal: "personal",
    prsonl: "personal",
    persnl: "personal",
    personaldata: "personal data",
    personalinfo: "personal info",
    persnal: "personal",
    persn: "personal",
    profil: "profile",
    profl: "profile",
    fullprofil: "full profile",
    complte: "complete",
    compleet: "complete",
    complete: "complete",
    comp: "complete",
    evrydetail: "everything",
    abut: "about",
    abaut: "about",
    abuot: "about",
    entir: "entire",
    enteir: "entire",
    whole: "whole",
    wole: "whole",
    background: "background",
    backgrnd: "background",
    bakground: "background",
    bio: "biography",
    biodata: "biography",
    biodeat: "biography",

    // Identity & Profile
    whois: "who is",
    whos: "who is",
    whu: "who",
    ahron: "ahron",
    aron: "ahron",
    aaron: "ahron",
    gab: "gab",
    peloni: "peloni",
    pelone: "peloni",
    bio: "biography",
    intro: "introduction",
    info: "information",
    bg: "background",

    // Education & School
    ed: "education",
    educ: "education",
    educaton: "education",
    educashun: "education",
    edukasyon: "education",
    deg: "degree",
    degre: "degree",
    cors: "course",
    crse: "course",
    curse: "course",
    univ: "university",
    unv: "university",
    uni: "university",
    univeristy: "university",
    universiti: "university",
    collg: "college",
    collge: "college",
    colleg: "college",
    schl: "school",
    schol: "school",
    highschool: "high school",
    hs: "high school",
    grad: "graduate",
    graduated: "graduated",
    graduat: "graduate",
    graudate: "graduate",
    pcu: "philippine christian university",
    christian: "christian",
    philippine: "philippine",
    philippines: "philippines",
    paranaque: "paranaque",
    baclaran: "baclaran",

    // Personal Info
    bday: "birthday",
    bdate: "birth date",
    dob: "date of birth",
    born: "born",
    byear: "birth year",
    birthyear: "birth year",
    addr: "address",
    addy: "address",
    wherelive: "where live",
    whereulive: "where you live",
    location: "address",
    yrlvl: "year level",
    "yr lvl": "year level",
    yearlvl: "year level",
    lvl: "level",
    whatyear: "what year",
    whtyr: "what year",
    wherestudy: "where study",
    whereustudy: "where you study",
    univ: "university",
    uni: "university",

    // Skills & Tech
    skil: "skill",
    skils: "skills",
    skl: "skill",
    skls: "skills",
    sklls: "skills",
    skilz: "skills",
    skll: "skill",
    skilles: "skills",
    skillz: "skills",
    tech: "technology",
    techs: "technologies",
    tchnology: "technology",
    techology: "technology",
    teknology: "technology",
    stk: "stack",
    lan: "language",
    lang: "language",
    langs: "languages",
    langauge: "language",
    laguage: "language",
    js: "javascript",
    javascrip: "javascript",
    javscript: "javascript",
    javascrpt: "javascript",
    javacript: "javascript",
    htm: "html",
    html5: "html5",
    htlm: "html",
    css3: "css3",
    cs3: "css3",
    prog: "programming",
    programing: "programming",
    programing: "programming",
    progamming: "programming",
    codin: "coding",
    code: "code",
    fe: "frontend",
    "front-end": "frontend",
    fronend: "frontend",
    frntend: "frontend",
    be: "backend",
    "back-end": "backend",
    bakend: "backend",
    bckend: "backend",
    ui: "ui ux",
    ux: "ui ux",
    uiux: "ui ux",
    uxui: "ui ux",
    dev: "developer",
    develepr: "developer",
    developr: "developer",
    develper: "developer",
    devoloper: "developer",

    // Projects & Gallery
    proj: "project",
    projs: "projects",
    projct: "project",
    projcts: "projects",
    prject: "project",
    prjects: "projects",
    prjt: "project",
    projectz: "projects",
    projec: "project",
    projecs: "projects",
    projectts: "projects",
    pic: "picture",
    pics: "pictures",
    photo: "photo",
    photos: "photos",
    galery: "gallery",
    gallary: "gallery",
    galleria: "gallery",
    galery: "gallery",
    gallry: "gallery",
    img: "images",
    imgs: "images",
    image: "images",

    // Certifications
    cert: "certification",
    certs: "certifications",
    certif: "certification",
    certifs: "certifications",
    certificat: "certification",
    certificaton: "certification",
    certificats: "certifications",
    certifcate: "certification",
    certficate: "certification",
    cred: "credentials",
    creds: "credentials",
    badge: "badge",
    badges: "badges",
    datacamp: "datacamp",
    datacmp: "datacamp",
    datcamp: "datacamp",
    datacam: "datacamp",
    datacm: "datacamp",

    // Goals & Aspirations
    gol: "goal",
    gols: "goals",
    aim: "goal",
    aims: "goals",
    aspir: "aspiration",
    aspirations: "aspirations",
    asprtn: "aspiration",
    target: "target",
    targets: "targets",
    plan: "plan",
    plans: "plans",
    futur: "future",
    futur: "future",
    futre: "future",

    // Hobbies & Interests
    hobi: "hobby",
    hobis: "hobbies",
    hoby: "hobby",
    hobies: "hobbies",
    hobbie: "hobby",
    hobbys: "hobbies",
    intrst: "interest",
    intrsts: "interests",
    intrstng: "interesting",
    intrest: "interest",
    intrests: "interests",
    bball: "basketball",
    basket: "basketball",
    basketbal: "basketball",
    basktball: "basketball",
    photo: "photography",
    photos: "photography",
    photograpy: "photography",
    photgraphy: "photography",
    game: "gaming",
    games: "gaming",
    gamming: "gaming",
    musc: "music",
    musik: "music",
    musc: "music",

    // Contact & Social Media
    song: "music",
    read: "reading",

    // Experience & Work
    exp: "experience",
    exprnc: "experience",
    experiance: "experience",
    experince: "experience",
    wrk: "work",
    wrking: "working",
    carrer: "career",
    carer: "career",
    job: "job",
    jobs: "jobs",

    // Contact & Social Media
    cntct: "contact",
    cntact: "contact",
    contct: "contact",
    contack: "contact",
    contat: "contact",
    cntc: "contact",
    reach: "contact",
    msg: "message",
    mssg: "message",
    mesage: "message",
    mesg: "message",
    eml: "email",
    mail: "email",
    emai: "email",
    emal: "email",
    phn: "phone",
    cel: "phone",
    phone: "phone",
    phon: "phone",
    cell: "phone",
    num: "number",
    numbr: "number",
    nmbr: "number",
    gh: "github",
    git: "github",
    gthub: "github",
    github: "github",
    githb: "github",
    githbu: "github",
    li: "linkedin",
    lnkdin: "linkedin",
    linkdin: "linkedin",
    linkedn: "linkedin",
    linkdin: "linkedin",
    fb: "facebook",
    facebok: "facebook",
    facebk: "facebook",
    facebok: "facebook",
    fbok: "facebook",
    ig: "instagram",
    insta: "instagram",
    instgram: "instagram",
    instagrm: "instagram",
    insta: "instagram",
    soc: "social",
    socmed: "social media",
    social: "social media",
    socials: "social media",
    socil: "social",
  };

  // Levenshtein distance for fuzzy matching
  function getLevenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = [];
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1, // deletion
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }

  // Canonical portfolio vocabulary for fuzzy spelling correction
  const CANONICAL_VOCABULARY = [
    "skills",
    "projects",
    "education",
    "certifications",
    "degree",
    "university",
    "highschool",
    "paranaque",
    "philippine",
    "christian",
    "datacamp",
    "goals",
    "hobbies",
    "experience",
    "contact",
    "developer",
    "frontend",
    "backend",
    "javascript",
    "programming",
    "basketball",
    "photography",
    "gaming",
    "music",
    "reading",
    "leadership",
    "devops",
    "cloud",
    "achievements",
    "github",
    "linkedin",
    "facebook",
    "instagram",
    "about",
    "gallery",
    "portfolio",
    "course",
    "graduate",
    "birthday",
    "birthdate",
    "address",
    "yearlevel",
    "born",
    "age",
    "from",
    "live",
    "location",
    "residence",
    "home",
    "where",
  ];

  // Correct words via fuzzy matching if distance is within tolerance
  function fuzzyCorrectWord(word) {
    if (word.length < 4) return word;
    let closestWord = word;
    let minDistance = 999;
    const threshold = word.length <= 5 ? 1 : 2;

    for (const vocab of CANONICAL_VOCABULARY) {
      const dist = getLevenshteinDistance(word, vocab);
      if (dist < minDistance && dist <= threshold) {
        minDistance = dist;
        closestWord = vocab;
      }
    }
    return closestWord;
  }

  // Normalize user query (slang replacement, typo correction, punctuation cleanup)
  function normalizeQuery(rawQuery) {
    if (!rawQuery) return "";
    const lower = rawQuery.toLowerCase().trim();
    // Replace punctuation with spaces for clean tokenization while preserving letters and numbers
    const tokens = lower
      .replace(/[^\w\s-]/g, " ")
      .split(/\s+/)
      .filter(Boolean);

    const normalizedTokens = tokens.map((token) => {
      // 1. Direct slang/abbreviation lookup
      if (SLANG_AND_TYPO_MAP[token]) {
        return SLANG_AND_TYPO_MAP[token];
      }
      // 2. Fuzzy spelling correction
      return fuzzyCorrectWord(token);
    });

    return normalizedTokens.join(" ");
  }

  // Count how many distinct personal-info keywords appear in a query.
  // Used to detect "all personal info" style questions (e.g. "age address school").
  function countPersonalKeywords(query) {
    const personalKeywords = [
      /\bage\b/i,
      /\bhow\s*old\b/i,
      /\bbirthday\b/i,
      /\bbirth\s*date\b/i,
      /\bdate\s*of\s*birth\b/i,
      /\bborn\b/i,
      /\bbirth\s*year\b/i,
      /\baddress\b/i,
      /\bwhere.*\blive\b/i,
      /\bwhere.*\bfrom\b/i,
      /\blocation\b/i,
      /\bresidence\b/i,
      /\bschool\b/i,
      /\buniversity\b/i,
      /\bcollege\b/i,
      /\bstudy\b/i,
      /\byear\s*level\b/i,
      /\bwhat\s*year\b/i,
      /\byr\s*lvl\b/i,
    ];
    return personalKeywords.filter((pattern) => pattern.test(query)).length;
  }

  // =========================================================================
  // 3. INTENT CLASSIFICATION & DIALOGUE CONTEXT MANAGER
  // =========================================================================

  class ChatbotContextManager {
    constructor() {
      this.currentTopic = null; // Active topic context (e.g., 'EDUCATION', 'SKILLS', etc.)
      this.lastIntent = null;
      this.lastPersonalInfoTopic = null; // Track last personal info query type for follow-ups
      this.history = []; // Past turns: [{ role: 'user'|'bot', text: '...', topic: '...' }]
    }

    addTurn(userText, botText, topic) {
      this.history.push({
        role: "user",
        text: userText,
        timestamp: Date.now(),
      });
      this.history.push({
        role: "bot",
        text: botText,
        topic: topic,
        timestamp: Date.now(),
      });
      if (
        topic &&
        topic !== "OUT_OF_SCOPE" &&
        topic !== "GREETING" &&
        topic !== "CLARIFICATION"
      ) {
        this.currentTopic = topic;
      }
      // Track personal info topic for context-aware follow-ups
      if (topic && topic.startsWith("PERSONAL_")) {
        this.lastPersonalInfoTopic = topic;
      }
      this.lastIntent = topic;
      // Cap history at last 20 messages to keep storage light
      if (this.history.length > 20) {
        this.history = this.history.slice(this.history.length - 20);
      }
    }

    clear() {
      this.currentTopic = null;
      this.lastIntent = null;
      this.lastPersonalInfoTopic = null;
      this.history = [];
    }
  }

  const contextManager = new ChatbotContextManager();

  // Intent Detector function
  function classifyIntent(rawQuery, normalizedQuery, context) {
    const q = normalizedQuery;
    const raw = rawQuery.toLowerCase();

    // Check for greeting
    if (
      /^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening|day)|sup|yo|what'?s\s*up)(\s|$|[!?.])/i.test(
        raw,
      )
    ) {
      return { intent: "GREETING", confidence: 0.95 };
    }

    // Check for bot capabilities/help
    if (
      /\b(what can you do|how can you help|help me|what do you do|menu|options|commands|capabilities|guide me)\b/i.test(
        q,
      )
    ) {
      return { intent: "HELP", confidence: 0.95 };
    }

    // Check for out-of-scope / unrelated questions
    const outOfScopePatterns = [
      /\b(weather|temperature|forecast|rain|sunny|climate)\b/i,
      /\b(recipe|cook|bake|ingredients|food recipe|restaurant recommendation)\b/i,
      /\b(president|prime minister|politics|election|government policy)\b/i,
      /\b(stock price|bitcoin|ethereum|crypto trading|crypto forecast)\b/i,
      /\b(movie review|cinema showtime|box office)\b/i,
      /\b(calculate|solve equation|\d+\s*[\+\-\*\/]\s*\d+)\b/i,
      /\b(tell me a joke|write a poem about love|sing a song)\b/i,
    ];
    for (const pattern of outOfScopePatterns) {
      if (
        pattern.test(q) &&
        !/\b(ahron|portfolio|developer|project|skill)\b/i.test(q)
      ) {
        return { intent: "OUT_OF_SCOPE", confidence: 0.9 };
      }
    }

    // Check for specific unavailable personal information (Guardrail: Rule 5 & 6)
    const unavailablePatterns = [
      /\b(phone number|mobile number|call you|telephone|cellphone)\b/i,
      /\b(exact salary|how much (do you|does he) earn|income|net worth)\b/i,
      /\b(girlfriend|boyfriend|marital status|wife|husband|married|single)\b/i,
      /\b(favorite food|favorite dish|favorite color|favorite movie)\b/i,
      /\b(pet|dog|cat)\b/i,
    ];
    for (const pattern of unavailablePatterns) {
      if (pattern.test(q)) {
        return { intent: "UNAVAILABLE_INFO", confidence: 0.95, queryType: q };
      }
    }

    // Contextual follow-up checks (Rule 10)
    const isFollowUp =
      /\b(when|where|what year|tell me more|more details|links|expand|what else|give me link|show me)\b/i.test(
        q,
      );
    if (isFollowUp && context.currentTopic) {
      // If asking "when did you graduate" or "what year" in education context
      if (
        /\b(when|year|graduate|graduated|finish|finished|how long)\b/i.test(
          q,
        ) &&
        (context.currentTopic === "EDUCATION" ||
          context.currentTopic === "EDUCATION_PCU" ||
          context.currentTopic === "EDUCATION_HS")
      ) {
        return { intent: "EDUCATION_DATE", confidence: 0.92 };
      }
      // If asking "where" in education context
      if (
        /\b(where|location|school|which school|institution)\b/i.test(q) &&
        context.currentTopic === "EDUCATION"
      ) {
        return { intent: "EDUCATION", confidence: 0.92 };
      }
      // If asking for links in certifications context
      if (
        /\b(link|links|url|verify|verification|check)\b/i.test(q) &&
        context.currentTopic === "CERTIFICATIONS"
      ) {
        return { intent: "CERTIFICATIONS_LINKS", confidence: 0.92 };
      }
      // If asking "tell me more" or "more details"
      if (
        /\b(tell me more|more details|elaborate|expand|what else)\b/i.test(q)
      ) {
        return {
          intent: "MORE_DETAILS_" + context.currentTopic,
          confidence: 0.9,
          topic: context.currentTopic,
        };
      }
      // Personal Info Contextual Follow-ups
      // Detect short follow-up queries like "and birthday?", "what about address?", "how about school?"
      if (
        context.lastPersonalInfoTopic &&
        /\b(and|what about|how about|also|then)\b/i.test(q) &&
        q.split(/\s+/).length <= 5
      ) {
        // Determine which personal info is being asked based on keywords in follow-up
        if (/\b(birthday|birth date|date of birth|born)\b/i.test(q)) {
          return {
            intent: "PERSONAL_BIRTHDAY",
            confidence: 0.92,
            isFollowUp: true,
          };
        }
        if (/\b(age|how old)\b/i.test(q)) {
          return { intent: "PERSONAL_AGE", confidence: 0.92, isFollowUp: true };
        }
        if (/\b(address|where.*live|home address|street|location)\b/i.test(q)) {
          return {
            intent: "PERSONAL_ADDRESS",
            confidence: 0.92,
            isFollowUp: true,
          };
        }
        if (/\b(school|university|study)\b/i.test(q)) {
          return {
            intent: "PERSONAL_SCHOOL",
            confidence: 0.92,
            isFollowUp: true,
          };
        }
        if (/\b(year level|what year|yr lvl)\b/i.test(q)) {
          return {
            intent: "PERSONAL_YEAR_LEVEL",
            confidence: 0.92,
            isFollowUp: true,
          };
        }
        // If follow-up but no specific keyword, cycle to next logical personal info
        // Default to showing birthday if age was last, etc.
        const personalInfoCycle = [
          "PERSONAL_AGE",
          "PERSONAL_BIRTHDAY",
          "PERSONAL_ADDRESS",
          "PERSONAL_SCHOOL",
          "PERSONAL_YEAR_LEVEL",
        ];
        const lastIdx = personalInfoCycle.indexOf(
          context.lastPersonalInfoTopic,
        );
        const nextIdx = (lastIdx + 1) % personalInfoCycle.length;
        return {
          intent: personalInfoCycle[nextIdx],
          confidence: 0.85,
          isFollowUp: true,
        };
      }
    }

    // Education Intent (Degree, University, College, School, High School)
    if (
      /\b(pcu|philippine christian university|christian university)\b/i.test(q)
    ) {
      return { intent: "EDUCATION_PCU", confidence: 0.95 };
    }
    if (/\b(paranaque|baclaran|high school|pnhs)\b/i.test(q)) {
      return { intent: "EDUCATION_HS", confidence: 0.95 };
    }
    if (
      /\b(education|degree|course|study|studied|studying|university|college|school|academic|major|bachelor|bsit|alumni)\b/i.test(
        q,
      )
    ) {
      return { intent: "EDUCATION", confidence: 0.9 };
    }

    // Certifications Intent
    if (
      /\b(certification|certifications|certificate|certificates|datacamp|credentials|skill verification|ai certification|verified)\b/i.test(
        q,
      )
    ) {
      return { intent: "CERTIFICATIONS", confidence: 0.9 };
    }

    // Skills Intent
    if (
      /\b(skill|skills|tech stack|technologies|technology|frontend|backend|javascript|html|css|languages|programming languages|tools|what can you code|tech)\b/i.test(
        q,
      )
    ) {
      return { intent: "SKILLS", confidence: 0.9 };
    }

    // Projects Intent
    if (
      /\b(project|projects|work samples|apps|applications|portfolio projects|project alpha|project beta|project gamma|project delta|what did you build|showcase)\b/i.test(
        q,
      )
    ) {
      return { intent: "PROJECTS", confidence: 0.9 };
    }

    // Goals Intent
    if (
      /\b(goal|goals|aspirations|aspiration|future plans|career goals|learning goals|senior developer|cloud mastery|technical leadership|targets)\b/i.test(
        q,
      )
    ) {
      return { intent: "GOALS", confidence: 0.9 };
    }

    // Hobbies & Interests Intent
    if (
      /\b(hobby|hobbies|interests|interest|free time|for fun|pastime|basketball|photography|gaming|music|reading|what do you do outside)\b/i.test(
        q,
      )
    ) {
      return { intent: "HOBBIES", confidence: 0.9 };
    }

    // Contact & Social Media Intent
    if (
      /\b(contact|email|reach|message|social media|github|linkedin|facebook|instagram|connect|get in touch|hire|send message)\b/i.test(
        q,
      )
    ) {
      return { intent: "CONTACT", confidence: 0.9 };
    }

    // Gallery Intent
    if (/\b(gallery|photos|pictures|screenshots|images|lightbox)\b/i.test(q)) {
      return { intent: "GALLERY", confidence: 0.9 };
    }

    // PERSONAL_INFO (broad): Full personal details (age, birthday, address, school, year level).
    // Detected BEFORE the ABOUT intent so queries like "tell me everything about ahron",
    // "all his info", "who is ahron gab peloni", "about yourself", "full profile" all return
    // the complete personal-info card instead of only the bio.
    if (
      // Direct personal-information phrases
      /\b(personal details|personal info|personal data|personal profile|personal information|personal background)\b/i.test(
        q,
      ) ||
      // "tell me (all|everything|about|info|details|more)" about the person
      /\b(tell\s*me\s*(all\s*)?(everything|about|info|details|more))\b/i.test(
        q,
      ) ||
      /\b(tell\s*me\s*about\s*(ahron|gab|peloni|ahron gab peloni|him|her|yourself))\b/i.test(
        q,
      ) ||
      // "everything/all/anything" + about/regarding + the person
      /\b(everything|all|anything)\s*(about|regarding|involving)\s*(ahron|gab|peloni|ahron gab peloni|him|her|you)\b/i.test(
        q,
      ) ||
      // "all" + info/details/thing(s)
      /\b(all\s*(info|information|details|detail|data|personal|thing|things))\b/i.test(
        q,
      ) ||
      // "who is/was/are/were" + the person
      /\b(who\s*(is|was|are|were)\s*(ahron|gab|peloni|ahron gab peloni|he|she|you))\b/i.test(
        q,
      ) ||
      // "about yourself/him/her/ahron"
      /\babout\s+(yourself|him|her|ahron|gab|peloni|ahron gab peloni)\b/i.test(
        q,
      ) ||
      // "your/his/her/ahron('s) (profile|details|info|information|data|background)"
      /\b((your|his|her|ahron|gab|peloni)'?s?\s*(profile|details|info|information|data|background))\b/i.test(
        q,
      ) ||
      // "full/complete/entire/whole (profile|info|details|information|data|personal)"
      /\b((full|complete|entire|whole)\s*(profile|info|details|information|data|personal))\b/i.test(
        q,
      ) ||
      // Multi-keyword detection: 2+ personal categories at once → full personal-info card
      // (e.g. "age and birthday and address", "what is ahron's school and year level")
      countPersonalKeywords(q) >= 2
    ) {
      return { intent: "PERSONAL_INFO", confidence: 0.95 };
    }

    // Identity / About Intent
    if (
      /\b(who are you|who is ahron|about yourself|about ahron|biography|tell me about you|background|profile|summary|introduce)\b/i.test(
        q,
      )
    ) {
      return { intent: "ABOUT", confidence: 0.9 };
    }

    // Website / Tech behind portfolio
    if (
      /\b(how was this (site|website) (made|built|developed)|portfolio website tech|site stack)\b/i.test(
        q,
      )
    ) {
      return { intent: "WEBSITE_TECH", confidence: 0.88 };
    }

    // Navigation / Page Links
    if (
      /\b(how to go to|page|pages|navigation|where is about|where is education|where is gallery|where is goals|where is hobbies)\b/i.test(
        q,
      )
    ) {
      return { intent: "NAVIGATION", confidence: 0.85 };
    }

    // Ambiguous short queries (Rule 4)
    if (
      q.split(" ").length <= 2 &&
      /\b(more|tell|info|how|what|details|why|work|show)\b/i.test(q)
    ) {
      return { intent: "CLARIFICATION", confidence: 0.8 };
    }

    // Granular Personal Info Intent Detection
    // AGE: "age", "how old", "what.*age", "ahron age", "how old ahron", "how old gab", "how old peloni"
    if (
      /\b(age|how old|what.*age)\b/i.test(q) ||
      /\b((ahron|gab|peloni|ahron gab peloni).*(age|how old))\b/i.test(q) ||
      /\b((age|how old).*(ahron|gab|peloni|ahron gab peloni))\b/i.test(q)
    ) {
      return { intent: "PERSONAL_AGE", confidence: 0.95 };
    }

    // BIRTHDAY: "birthday", "birth date", "date of birth", "born", "when.*born", "ahron birthday", "gab born", "peloni birth date"
    if (
      /\b(birthday|birth date|date of birth|born|when.*born)\b/i.test(q) ||
      /\b((ahron|gab|peloni|ahron gab peloni).*(birthday|birth date|date of birth|born))\b/i.test(
        q,
      ) ||
      /\b((birthday|birth date|date of birth|born).*(ahron|gab|peloni|ahron gab peloni))\b/i.test(
        q,
      )
    ) {
      return { intent: "PERSONAL_BIRTHDAY", confidence: 0.95 };
    }

    // ADDRESS: "address", "where.*live", "home address", "street", "location", "where ahron live", "where gab live", "where peloni live", "ahron address"
    // Also: "where is ahron from", "where does ahron live", "where he lives", "where from", "residence", "home of"
    if (
      /\b(address|where.*live|home address|street|location)\b/i.test(q) ||
      /\b(where.*(ahron|gab|peloni|ahron gab peloni).*live)\b/i.test(q) ||
      /\b(where.*does.*(ahron|gab|peloni|ahron gab peloni).*live)\b/i.test(q) ||
      /\b((ahron|gab|peloni|ahron gab peloni).*(address|where.*live))\b/i.test(
        q,
      ) ||
      /\b((address|where.*live).*(ahron|gab|peloni|ahron gab peloni))\b/i.test(
        q,
      ) ||
      // New patterns: "where is X from", "where does X live", "where X from", "location of X", "residence of X"
      /\b(where.*is.*(ahron|gab|peloni|ahron gab peloni).*from)\b/i.test(q) ||
      /\b(where.*is.*(he|she).*from)\b/i.test(q) ||
      /\b(where.*(ahron|gab|peloni|ahron gab peloni).*from)\b/i.test(q) ||
      /\b(where.*does.*(he|she).*live)\b/i.test(q) ||
      /\b(where.*(he|she).*live)\b/i.test(q) ||
      /\b(where.*(he|she).*from)\b/i.test(q) ||
      /\b(location.*of.*(ahron|gab|peloni|ahron gab peloni))\b/i.test(q) ||
      /\b(residence.*of.*(ahron|gab|peloni|ahron gab peloni))\b/i.test(q) ||
      /\b(home.*of.*(ahron|gab|peloni|ahron gab peloni))\b/i.test(q) ||
      /\b(where.*from.*(ahron|gab|peloni|ahron gab peloni))\b/i.test(q) ||
      /\b(from.*where.*(ahron|gab|peloni|ahron gab peloni))\b/i.test(q)
    ) {
      return { intent: "PERSONAL_ADDRESS", confidence: 0.95 };
    }

    // SCHOOL: "school", "university", "where.*study", "where ahron study", "ahron school", "gab university", "peloni school"
    if (
      /\b(school|university|where.*study)\b/i.test(q) ||
      /\b(where.*(ahron|gab|peloni|ahron gab peloni).*study)\b/i.test(q) ||
      /\b((ahron|gab|peloni|ahron gab peloni).*(school|university|study))\b/i.test(
        q,
      ) ||
      /\b((school|university|study).*(ahron|gab|peloni|ahron gab peloni))\b/i.test(
        q,
      )
    ) {
      return { intent: "PERSONAL_SCHOOL", confidence: 0.95 };
    }

    // YEAR_LEVEL: "year level", "what year", "yr lvl", "what year ahron", "ahron year level", "gab yr lvl"
    if (
      /\b(year level|what year|yr lvl)\b/i.test(q) ||
      /\b((ahron|gab|peloni|ahron gab peloni).*(year level|what year|yr lvl))\b/i.test(
        q,
      ) ||
      /\b((year level|what year|yr lvl).*(ahron|gab|peloni|ahron gab peloni))\b/i.test(
        q,
      )
    ) {
      return { intent: "PERSONAL_YEAR_LEVEL", confidence: 0.95 };
    }

    // Default Fallback
    return { intent: "UNKNOWN", confidence: 0.2 };
  }

  // =========================================================================
  // 4. STRUCTURED RESPONSE GENERATOR (Rules 1, 3, 5, 6, 7, 8, 9, 10)
  // =========================================================================

  function generateResponse(classification, rawQuery, context) {
    const intent = classification.intent;

    switch (intent) {
      case "GREETING": {
        return {
          topic: "GREETING",
          text: `Hello! 👋 I'm **Ahron Gab Peloni's AI Portfolio Assistant**.

I'm here to help you explore Ahron's background, technical skills, projects, education, certifications, and career goals. 

How can I assist you today? Feel free to ask any question or tap one of the topics below!`,
          chips: [
            "🛠️ Technical Skills",
            "🎓 Education & Degree",
            "🚀 Portfolio Projects",
            "🏆 Certifications",
            "🎯 Goals & Aspirations",
            "📫 Contact Information",
          ],
        };
      }

      case "HELP": {
        return {
          topic: "HELP",
          text: `I specialize in providing accurate information about **Ahron Gab Peloni** and his portfolio. Here are some things you can ask me about:

* **Identity & Bio:** "Tell me about Ahron" or "Who are you?"
* **Technical Skills:** "Wat are ur skills" or "What technologies do you use?"
* **Education & Degree:** "Wht course did u take" or "Where did you study?"
* **Certifications:** "What certifications do you have?" (DataCamp AI & Skill Verification)
* **Projects:** "Tell me abt ur projcts" or "What have you built?"
* **Career Goals:** "What are your career aspirations?"
* **Hobbies & Interests:** "What do you do for fun?"
* **Contact & Socials:** "How can I contact Ahron?"

You don't need to worry about typos or informal phrasing—I'll understand you!`,
          chips: [
            "🛠️ Skills",
            "🎓 Education",
            "🚀 Projects",
            "🏆 Certifications",
            "🎯 Goals",
            "📫 Contact",
          ],
        };
      }

      case "ABOUT": {
        return {
          topic: "ABOUT",
          text: `**Ahron Gab Peloni** is a passionate **Web Developer & Tech Enthusiast** with a strong foundation in Information Technology.

**Key Highlights:**
* **Mission:** Crafting elegant solutions to complex problems and building scalable, user-centric web applications.
* **Core Philosophy:** Clean code, continuous learning, and collaborative development.
* **Education:** BS in Information Technology graduate from Philippine Christian University (2024).
* **Focus:** Full-stack web technologies, modern responsive frontend, and AI/ML fundamentals.

Would you like to explore Ahron's technical skills, portfolio projects, or academic background?`,
          chips: [
            "🛠️ View Skills",
            "🚀 See Projects",
            "🎓 Academic Journey",
            "📫 Get in Touch",
          ],
        };
      }

      case "PERSONAL_AGE": {
        const p = PORTFOLIO_DATA.personal;
        const isFollowUp = classification.isFollowUp;
        const prefix = isFollowUp ? "Also, " : "";
        return {
          topic: "PERSONAL_INFO",
          text: `${prefix}Ahron is **${p.age} years old**.`,
          chips: [
            "📅 Birthday",
            "🏠 Address",
            "🎓 School",
            "📚 Year Level",
            "🎓 Education Details",
          ],
        };
      }

      case "PERSONAL_BIRTHDAY": {
        const p = PORTFOLIO_DATA.personal;
        const isFollowUp = classification.isFollowUp;
        const prefix = isFollowUp ? "Also, " : "";
        return {
          topic: "PERSONAL_INFO",
          text: `${prefix}Ahron's birthday is **${p.birthDate}** (${p.birthYear}).`,
          chips: [
            "🎂 Age",
            "🏠 Address",
            "🎓 School",
            "📚 Year Level",
            "🎓 Education Details",
          ],
        };
      }

      case "PERSONAL_ADDRESS": {
        const p = PORTFOLIO_DATA.personal;
        const isFollowUp = classification.isFollowUp;
        const prefix = isFollowUp ? "Also, " : "";
        return {
          topic: "PERSONAL_INFO",
          text: `${prefix}Ahron lives at **${p.address}**.`,
          chips: [
            "🎂 Age",
            "📅 Birthday",
            "🎓 School",
            "📚 Year Level",
            "🎓 Education Details",
          ],
        };
      }

      case "PERSONAL_SCHOOL": {
        const p = PORTFOLIO_DATA.personal;
        const isFollowUp = classification.isFollowUp;
        const prefix = isFollowUp ? "Also, " : "";
        return {
          topic: "PERSONAL_INFO",
          text: `${prefix}Ahron studies at **${p.school}**.`,
          chips: [
            "🎂 Age",
            "📅 Birthday",
            "🏠 Address",
            "📚 Year Level",
            "🎓 Education Details",
          ],
        };
      }

      case "PERSONAL_YEAR_LEVEL": {
        const p = PORTFOLIO_DATA.personal;
        const isFollowUp = classification.isFollowUp;
        const prefix = isFollowUp ? "Also, " : "";
        return {
          topic: "PERSONAL_INFO",
          text: `${prefix}Ahron is in **${p.yearLevel}**.`,
          chips: [
            "🎂 Age",
            "📅 Birthday",
            "🏠 Address",
            "🎓 School",
            "🎓 Education Details",
          ],
        };
      }

      case "PERSONAL_INFO": {
        const p = PORTFOLIO_DATA.personal;
        return {
          topic: "PERSONAL_INFO",
          text: `Here are **Ahron Gab Peloni's Complete Personal Details**:

🎂 **Age:** ${p.age} years old
📅 **Birth Date:** ${p.birthDate} (${p.birthYear})
🏠 **Address:** ${p.address}
🎓 **School:** ${p.school}
📚 **Year Level:** ${p.yearLevel}

This is all the personal information available in Ahron's portfolio. Feel free to ask for more details on any specific topic!`,
          chips: [
            "🎓 Education Details",
            "🛠️ Technical Skills",
            "🚀 Portfolio Projects",
            "🏆 Certifications",
            "📫 Contact Information",
          ],
        };
      }

      case "SKILLS": {
        const fe = PORTFOLIO_DATA.skills.frontend
          .map((s) => `<span class="chatbot-badge-tag">${s}</span>`)
          .join(" ");
        const be = PORTFOLIO_DATA.skills.backendAndCore
          .map((s) => `<span class="chatbot-badge-tag">${s}</span>`)
          .join(" ");
        const tools = PORTFOLIO_DATA.skills.toolsAndCloud
          .map((s) => `<span class="chatbot-badge-tag">${s}</span>`)
          .join(" ");
        const ai = PORTFOLIO_DATA.skills.aiAndData
          .map((s) => `<span class="chatbot-badge-tag">${s}</span>`)
          .join(" ");

        return {
          topic: "SKILLS",
          text: `Here is a structured overview of **Ahron Gab Peloni's Skills & Technical Expertise**:

**Frontend Development:**
${fe}

**Core Engineering & Architecture:**
${be}

**Tools, Hosting & Cloud:**
${tools}

**Data & AI Competencies:**
${ai}

Ahron is dedicated to continuous learning and staying on top of emerging web and cloud technologies.`,
          chips: [
            "🚀 View Projects",
            "🏆 View Certifications",
            "🎯 Check Career Goals",
          ],
        };
      }

      case "EDUCATION": {
        const u = PORTFOLIO_DATA.education.university;
        const hs = PORTFOLIO_DATA.education.highSchool;

        return {
          topic: "EDUCATION",
          text: `Here is **Ahron Gab Peloni's Educational Background**:

🎓 **University Degree (2020 – 2024)**
* **Degree:** ${u.degree}
* **Institution:** **${u.institution}**
* **Status:** Graduated in 2024 with comprehensive training in software engineering, web systems, and IT architecture.

🏫 **High School (2016 – 2020)**
* **School:** **${hs.institution}**
* **Focus:** ${hs.description}

Ahron also actively pursues industry certifications to complement his academic degree.`,
          chips: [
            "🏆 View Certifications",
            "🛠️ Technical Skills",
            "🎯 Learning Goals",
          ],
        };
      }

      case "EDUCATION_PCU": {
        const u = PORTFOLIO_DATA.education.university;
        return {
          topic: "EDUCATION",
          text: `Ahron earned his **${u.degree}** from **${u.institution}** (2020 – 2024). 

During his university journey, he developed a deep foundation in web development, database systems, networking, and software engineering methodologies.`,
          chips: ["🏫 High School Info", "🏆 Certifications", "🛠️ Skills"],
        };
      }

      case "EDUCATION_HS": {
        const hs = PORTFOLIO_DATA.education.highSchool;
        return {
          topic: "EDUCATION",
          text: `Ahron completed his high school education at **${hs.institution}** (2016 – 2020), where he completed a college-preparatory curriculum with a specialized focus on mathematics, sciences, and foundational problem solving.`,
          chips: ["🎓 University Degree", "🏆 Certifications", "🛠️ Skills"],
        };
      }

      case "EDUCATION_DATE": {
        return {
          topic: "EDUCATION",
          text: `Ahron graduated with his **Bachelor of Science in Information Technology (BSIT)** from Philippine Christian University in **2024** (enrolled from 2020 to 2024).

Prior to university, he completed high school at Paranaque National High School Baclaran between 2016 and 2020.`,
          chips: [
            "🏆 View Certifications",
            "🛠️ View Skills",
            "📫 Contact Ahron",
          ],
        };
      }

      case "CERTIFICATIONS":
      case "CERTIFICATIONS_LINKS": {
        const certList = PORTFOLIO_DATA.certifications
          .map((c) => {
            if (c.url) {
              return `* **${c.title}** (${c.issuer})\n  Verification ID: \`${c.id}\` — [Verify Certificate Online](${c.url})\n  _${c.description}_`;
            } else {
              return `* **${c.title}** (${c.issuer})\n  _${c.description}_`;
            }
          })
          .join("\n\n");

        return {
          topic: "CERTIFICATIONS",
          text: `Here are **Ahron Gab Peloni's Professional Certifications & Credentials**:

${certList}

These credentials demonstrate Ahron's verified programming capabilities and foundational expertise in Artificial Intelligence.`,
          chips: [
            "🎓 Education Details",
            "🛠️ Technical Skills",
            "🎯 Future Goals",
          ],
        };
      }

      case "PROJECTS": {
        const galleryPath = getRelativePath("pages/gallery.html");
        return {
          topic: "PROJECTS",
          text: `Ahron has developed and showcased multiple projects across web and software development:

**Featured Showcase (Photo Gallery):**
* **Project Alpha** & **Project Beta**
* **Project Gamma** & **Project Delta**
* **Project Epsilon** & **Project Zeta**
* **Project Eta** & **Project Theta**

**Portfolio Website Application:**
* Built from scratch using modern responsive HTML5, CSS3 design systems, and vanilla JavaScript. Features a dark/light mode toggle, smooth scroll animations, typewriter visualizer, lightbox gallery, and this intelligent portfolio assistant chatbot.

You can inspect visual snapshots and details of these projects on the [Gallery Page](${galleryPath}).`,
          chips: [
            "📸 Visit Gallery",
            "🛠️ Check Skills",
            "📫 Inquire About Projects",
          ],
        };
      }

      case "GOALS": {
        const prof = PORTFOLIO_DATA.goals.professional
          .map((g) => `* **${g.title}** (${g.progress}) — ${g.target}`)
          .join("\n");
        const learn = PORTFOLIO_DATA.goals.learning
          .map((g) => `* **${g.title}** (${g.progress}) — ${g.target}`)
          .join("\n");
        const pers = PORTFOLIO_DATA.goals.personal
          .map((g) => `* **${g.title}** (${g.progress}) — ${g.target}`)
          .join("\n");

        return {
          topic: "GOALS",
          text: `Here is a breakdown of **Ahron Gab Peloni's Goals & Aspirations**:

💼 **Professional Goals:**
${prof}

🎓 **Learning & Technical Mastery:**
${learn}

❤️ **Personal & Community:**
${pers}`,
          chips: ["🏆 Certifications", "🛠️ Technical Skills", "🚀 Projects"],
        };
      }

      case "HOBBIES": {
        const hobbiesList = PORTFOLIO_DATA.hobbies
          .map((h) => `* **${h.name}:** ${h.description}`)
          .join("\n");
        return {
          topic: "HOBBIES",
          text: `Outside of professional development, **Ahron Gab Peloni** enjoys a well-rounded set of interests:

${hobbiesList}

These activities help maintain creativity, strategic thinking, teamwork, and a healthy work-life balance.`,
          chips: ["🎯 Career Goals", "👨‍💻 About Ahron", "📫 Contact"],
        };
      }

      case "CONTACT": {
        const c = PORTFOLIO_DATA.contact;
        return {
          topic: "CONTACT",
          text: `You can connect with **Ahron Gab Peloni** through any of his official channels:

* 🌐 **Portfolio Website:** [ahrongabpeloni.dev](${c.website})
* 🐙 **GitHub:** [github.com/AhronGab](${c.github})
* 💼 **LinkedIn:** [Ahron Gab Peloni on LinkedIn](${c.linkedin})
* 👥 **Facebook:** [facebook.com/ahronpeloni](${c.facebook})
* 📸 **Instagram:** [@ahrongab_](${c.instagram})

Feel free to reach out for collaborations, web development inquiries, or professional opportunities!`,
          chips: ["🐙 GitHub Profile", "💼 LinkedIn Profile", "🛠️ View Skills"],
        };
      }

      case "GALLERY": {
        const galleryPath = getRelativePath("pages/gallery.html");
        return {
          topic: "PROJECTS",
          text: `Ahron's portfolio features an interactive **Photo Gallery** showcasing screenshots from **Project Alpha through Project Theta**, along with visual moments.

Each gallery item is equipped with an interactive lightbox viewer to inspect images in full detail. You can view the full gallery directly on the [Photo Gallery Page](${galleryPath}).`,
          chips: ["📸 Open Gallery Page", "🚀 List of Projects", "🛠️ Skills"],
        };
      }

      case "WEBSITE_TECH": {
        return {
          topic: "WEBSITE_TECH",
          text: `This portfolio was crafted with:
* **HTML5 Semantic Markup & Schema.org JSON-LD metadata**
* **CSS3 Design System:** Custom CSS custom properties, modular spacing, glassmorphic effects, Light/Dark mode transitions, and mobile-first responsive layout
* **Vanilla JavaScript:** Typewriter effect, scroll animations, dynamic navbar, lightbox modal, and client-side intelligent assistant chatbot
* **Deployment:** Netlify / Vercel with automated routing and edge distribution.`,
          chips: ["🛠️ Technical Skills", "🚀 Projects", "📫 Contact Ahron"],
        };
      }

      case "NAVIGATION": {
        const links = PORTFOLIO_DATA.pages
          .map(
            (p) => `* **[${p.name}](${getRelativePath(p.path)}):** ${p.desc}`,
          )
          .join("\n");
        return {
          topic: "NAVIGATION",
          text: `Here is the directory of all pages in Ahron's portfolio:

${links}

Click any link above to navigate directly to that section!`,
          chips: [
            "🏠 Home",
            "👨‍💻 About",
            "🎓 Education",
            "🎯 Goals",
            "📸 Gallery",
          ],
        };
      }

      case "MORE_DETAILS_EDUCATION": {
        return {
          topic: "EDUCATION",
          text: `**More details about Ahron's Education:**
* **University:** Philippine Christian University (BSIT, 2020 – 2024). Focused on web applications, algorithms, systems design, and database management.
* **Certifications:** DataCamp Skill Verification (DL0031254637400) and DataCamp AI Certification (AIF0026150232168).
* **High School:** Paranaque National High School Baclaran (2016 – 2020) with math and science enrichment.`,
          chips: [
            "🏆 View Certifications",
            "🛠️ Technical Skills",
            "🎯 Career Goals",
          ],
        };
      }

      case "MORE_DETAILS_PROJECTS": {
        return {
          topic: "PROJECTS",
          text: `**More details about Ahron's Projects:**
Ahron's portfolio features 8 core gallery project showcases (Projects Alpha through Theta) spanning responsive web design, client-centric user interfaces, clean code architecture, and modern JavaScript interactivity.

He is continually developing new side projects as part of his open-source and professional growth goals!`,
          chips: [
            "📸 Open Gallery",
            "🛠️ View Skills",
            "📫 Inquire About Projects",
          ],
        };
      }

      case "MORE_DETAILS_SKILLS": {
        return {
          topic: "SKILLS",
          text: `**More details about Ahron's Technical Toolkit:**
Ahron specializes in building fast, scalable, and responsive web applications. He writes clean, semantic HTML5, modern CSS3 (Flexbox/Grid, transitions), and ES6+ JavaScript. He utilizes Git/GitHub for version control and deploys via Vercel/Netlify. He is also actively deepening his expertise in cloud DevOps practices and AI/ML fundamentals.`,
          chips: ["🚀 Projects", "🏆 Certifications", "🎯 Career Goals"],
        };
      }

      case "UNAVAILABLE_INFO": {
        return {
          topic: "UNAVAILABLE_INFO",
          text: `I'm sorry, but that specific personal detail is **not currently included in Ahron's portfolio**.

To protect privacy and ensure strict factual accuracy, I only share information that is part of Ahron's official portfolio.

You can ask me about his **education, skills, projects, certifications, goals, hobbies, or official social links**!`,
          chips: [
            "🎓 Education",
            "🛠️ Skills",
            "🚀 Projects",
            "📫 Contact Info",
          ],
        };
      }

      case "OUT_OF_SCOPE": {
        return {
          topic: "OUT_OF_SCOPE",
          text: `I am specialized exclusively in representing **Ahron Gab Peloni and his personal portfolio**. 

While I cannot assist with general trivia, weather, cooking, or external questions, I would be delighted to answer anything about Ahron's **qualifications, projects, technical skills, education, or career background**!`,
          chips: [
            "👨‍💻 Who is Ahron?",
            "🛠️ Technical Skills",
            "🚀 Portfolio Projects",
            "🎓 Education",
          ],
        };
      }

      case "CLARIFICATION": {
        return {
          topic: "CLARIFICATION",
          text: `I'd love to help! Could you please specify which aspect of Ahron's portfolio you'd like to learn more about?

* **👨‍💻 About & Background**
* **🛠️ Technical Skills**
* **🎓 Education & University Degree**
* **🚀 Projects & Gallery**
* **🏆 Verified Certifications**
* **🎯 Goals & Aspirations**
* **📫 Contact Information**`,
          chips: [
            "👨‍💻 About",
            "🛠️ Skills",
            "🎓 Education",
            "🚀 Projects",
            "🏆 Certifications",
            "📫 Contact",
          ],
        };
      }

      case "UNKNOWN":
      default: {
        return {
          topic: "UNKNOWN",
          text: `That information is **not currently included in Ahron's portfolio**, or your question may be phrased outside of my portfolio knowledge base.

I specialize in details regarding Ahron's **biography, technical skills, education (PCU BSIT), certifications (DataCamp), projects (Gallery), career goals, hobbies, and contact channels**.

What would you like to know about Ahron?`,
          chips: [
            "🛠️ Skills",
            "🎓 Education",
            "🚀 Projects",
            "🏆 Certifications",
            "📫 Contact",
          ],
        };
      }
    }
  }

  // =========================================================================
  // 5. CHATBOT UI WIDGET CONTROLLER
  // =========================================================================

  class PortfolioChatbotWidget {
    constructor() {
      this.isOpen = false;
      this.isTyping = false;
      this.initDOM();
      this.loadSessionState();
      this.attachEventListeners();
    }

    initDOM() {
      // 1. Create floating launcher button
      const launcher = document.createElement("button");
      launcher.className = "chatbot-launcher";
      launcher.setAttribute(
        "aria-label",
        "Open Ahron's Portfolio Assistant Chatbot",
      );
      launcher.setAttribute("title", "Chat with Portfolio Assistant");
      launcher.innerHTML = `
        <div class="launcher-icon launcher-chat"><i class="fas fa-comment-dots"></i></div>
        <div class="launcher-icon launcher-close"><i class="fas fa-times"></i></div>
        <div class="chatbot-badge" title="Assistant is online"></div>
      `;
      document.body.appendChild(launcher);
      this.launcherEl = launcher;

      // 2. Create introductory callout bubble
      const callout = document.createElement("div");
      callout.className = "chatbot-callout";
      callout.setAttribute("role", "status");
      callout.innerHTML = `
        <i class="fas fa-sparkles" style="color: var(--color-accent, #f59e0b);"></i>
        <span>Need info about Ahron? <strong>Ask me!</strong></span>
      `;
      document.body.appendChild(callout);
      this.calloutEl = callout;

      // Auto dismiss callout after 8 seconds or when clicked
      setTimeout(() => {
        if (this.calloutEl && !this.isOpen) {
          this.calloutEl.style.opacity = "0";
          setTimeout(() => this.calloutEl?.remove(), 300);
        }
      }, 8000);

      callout.addEventListener("click", () => {
        this.open();
        callout.remove();
      });

      // 3. Create chatbot window
      const container = document.createElement("div");
      container.className = "chatbot-container";
      container.setAttribute("role", "dialog");
      container.setAttribute("aria-label", "Ahron's Portfolio Assistant");
      container.innerHTML = `
        <div class="chatbot-header">
          <div class="chatbot-header-info">
            <div class="chatbot-avatar">
              <i class="fas fa-robot"></i>
              <div class="chatbot-status-indicator"></div>
            </div>
            <div class="chatbot-title-box">
              <h3>Ahron's Assistant</h3>
              <span class="chatbot-status-text">
                <span class="chatbot-status-dot"></span> Online & Portfolio Trained
              </span>
            </div>
          </div>
          <div class="chatbot-header-actions">
            <button class="chatbot-header-btn btn-clear-chat" aria-label="Clear chat history" title="Restart conversation">
              <i class="fas fa-redo-alt"></i>
            </button>
            <button class="chatbot-header-btn btn-close-chat" aria-label="Close chat" title="Minimize chat">
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>

        <div class="chatbot-messages" id="chatbot-messages-stream"></div>

        <div class="chatbot-footer">
          <div class="chatbot-input-row">
            <textarea 
              class="chatbot-input" 
              placeholder="Ask anything (e.g. 'wat are ur skills', 'tell me abt ur projcts')..." 
              rows="1" 
              aria-label="Your message to the portfolio assistant"></textarea>
            <button class="chatbot-send-btn" aria-label="Send message" title="Send message">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
          <div class="chatbot-footer-hint">Trained on Ahron Gab Peloni's verified portfolio</div>
        </div>
      `;
      document.body.appendChild(container);

      this.containerEl = container;
      this.messagesContainerEl = container.querySelector(
        "#chatbot-messages-stream",
      );
      this.inputEl = container.querySelector(".chatbot-input");
      this.sendBtnEl = container.querySelector(".chatbot-send-btn");
      this.closeBtnEl = container.querySelector(".btn-close-chat");
      this.clearBtnEl = container.querySelector(".btn-clear-chat");
    }

    loadSessionState() {
      try {
        const savedHistory = sessionStorage.getItem("portfolio_chat_history");
        if (savedHistory) {
          const parsed = JSON.parse(savedHistory);
          if (Array.isArray(parsed) && parsed.length > 0) {
            parsed.forEach((item) => {
              this.renderMessageBubble(item.role, item.text, item.chips, false);
            });
            // Update contextManager history
            contextManager.history = parsed.map((p) => ({
              role: p.role,
              text: p.text,
              timestamp: Date.now(),
            }));
            return;
          }
        }
      } catch (e) {
        console.warn("Could not load session state:", e);
      }

      // Initial welcome message
      this.renderWelcomeMessage();
    }

    saveSessionState() {
      try {
        const messages = [];
        const msgNodes =
          this.messagesContainerEl.querySelectorAll(".chatbot-msg-group");
        msgNodes.forEach((node) => {
          const role = node.classList.contains("user") ? "user" : "bot";
          const bubble = node.querySelector(".chatbot-bubble");
          if (bubble) {
            messages.push({ role, text: bubble.innerHTML });
          }
        });
        sessionStorage.setItem(
          "portfolio_chat_history",
          JSON.stringify(messages),
        );
      } catch (e) {
        console.warn("Could not save session state:", e);
      }
    }

    renderWelcomeMessage() {
      const welcome = generateResponse(
        { intent: "GREETING" },
        "hello",
        contextManager,
      );
      this.renderMessageBubble("bot", welcome.text, welcome.chips, true);
    }

    attachEventListeners() {
      // Toggle Launcher
      this.launcherEl.addEventListener("click", () => {
        this.toggle();
      });

      // Header actions
      this.closeBtnEl.addEventListener("click", () => {
        this.close();
      });

      this.clearBtnEl.addEventListener("click", () => {
        this.clearChat();
      });

      // Input send
      this.sendBtnEl.addEventListener("click", () => {
        this.handleUserSend();
      });

      this.inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          this.handleUserSend();
        }
      });

      // Auto-resize input
      this.inputEl.addEventListener("input", () => {
        this.inputEl.style.height = "auto";
        this.inputEl.style.height =
          Math.min(this.inputEl.scrollHeight, 100) + "px";
      });

      // Escape key to close
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.isOpen) {
          this.close();
        }
      });
    }

    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    open() {
      this.isOpen = true;
      this.launcherEl.classList.add("active");
      this.containerEl.classList.add("active");
      if (this.calloutEl) {
        this.calloutEl.remove();
      }
      setTimeout(() => {
        this.inputEl.focus();
        this.scrollToBottom();
      }, 200);
    }

    close() {
      this.isOpen = false;
      this.launcherEl.classList.remove("active");
      this.containerEl.classList.remove("active");
    }

    clearChat() {
      contextManager.clear();
      this.messagesContainerEl.innerHTML = "";
      sessionStorage.removeItem("portfolio_chat_history");
      this.renderWelcomeMessage();
    }

    formatMarkdown(text) {
      if (!text) return "";
      // If text is already HTML (from loaded session storage), return directly
      if (text.includes("<p>") || text.includes("chatbot-badge-tag")) {
        return text;
      }

      let formatted = text
        // Bold: **text**
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        // Links: [text](url)
        .replace(
          /\[(.*?)\]\((.*?)\)/g,
          '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
        )
        // Code: `code`
        .replace(
          /`(.*?)`/g,
          '<code style="background: rgba(0,0,0,0.06); padding: 0.1rem 0.3rem; border-radius: 4px; font-family: monospace;">$1</code>',
        );

      // Process paragraphs and bullet lists
      const lines = formatted.split("\n");
      let result = "";
      let inList = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith("* ")) {
          if (!inList) {
            result += "<ul>";
            inList = true;
          }
          result += `<li>${line.substring(2)}</li>`;
        } else {
          if (inList) {
            result += "</ul>";
            inList = false;
          }
          if (line.length > 0) {
            result += `<p>${line}</p>`;
          }
        }
      }
      if (inList) {
        result += "</ul>";
      }

      return result;
    }

    renderMessageBubble(role, rawText, chips = [], animate = true) {
      const group = document.createElement("div");
      group.className = `chatbot-msg-group ${role}`;

      const bubble = document.createElement("div");
      bubble.className = "chatbot-bubble";
      bubble.innerHTML = this.formatMarkdown(rawText);
      group.appendChild(bubble);

      // Add time
      const timeSpan = document.createElement("span");
      timeSpan.className = "chatbot-msg-time";
      const now = new Date();
      timeSpan.textContent = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      group.appendChild(timeSpan);

      // Add suggestion chips if provided
      if (chips && chips.length > 0) {
        const chipsContainer = document.createElement("div");
        chipsContainer.className = "chatbot-chips-container";

        chips.forEach((chipText) => {
          const chipBtn = document.createElement("button");
          chipBtn.className = "chatbot-chip";
          chipBtn.textContent = chipText;
          chipBtn.addEventListener("click", () => {
            // Strip emojis for clean processing if needed, or pass directly
            const cleanQuery = chipText.replace(/^[^\w\s]+\s*/, "");
            this.handleSendQuery(cleanQuery);
          });
          chipsContainer.appendChild(chipBtn);
        });

        group.appendChild(chipsContainer);
      }

      this.messagesContainerEl.appendChild(group);
      this.scrollToBottom();

      if (animate) {
        this.saveSessionState();
      }
    }

    showTypingIndicator() {
      if (this.isTyping) return;
      this.isTyping = true;
      const typingEl = document.createElement("div");
      typingEl.className = "chatbot-typing";
      typingEl.id = "chatbot-active-typing";
      typingEl.innerHTML = `
        <div class="chatbot-typing-dot"></div>
        <div class="chatbot-typing-dot"></div>
        <div class="chatbot-typing-dot"></div>
      `;
      this.messagesContainerEl.appendChild(typingEl);
      this.scrollToBottom();
    }

    hideTypingIndicator() {
      this.isTyping = false;
      const el = document.getElementById("chatbot-active-typing");
      if (el) el.remove();
    }

    scrollToBottom() {
      this.messagesContainerEl.scrollTop =
        this.messagesContainerEl.scrollHeight;
    }

    handleUserSend() {
      const userText = this.inputEl.value.trim();
      if (!userText || this.isTyping) return;

      this.inputEl.value = "";
      this.inputEl.style.height = "40px";
      this.handleSendQuery(userText);
    }

    handleSendQuery(rawQuery) {
      if (!rawQuery || this.isTyping) return;

      // 1. Render user message bubble
      this.renderMessageBubble("user", rawQuery, [], true);

      // 2. Show typing indicator
      this.showTypingIndicator();
      this.sendBtnEl.disabled = true;

      // 3. Process query via NLP pipeline
      const normalizedQuery = normalizeQuery(rawQuery);
      const classification = classifyIntent(
        rawQuery,
        normalizedQuery,
        contextManager,
      );
      const response = generateResponse(
        classification,
        rawQuery,
        contextManager,
      );

      // 4. Simulate natural response latency (350ms - 600ms)
      setTimeout(() => {
        this.hideTypingIndicator();
        this.sendBtnEl.disabled = false;
        this.renderMessageBubble("bot", response.text, response.chips, true);
        contextManager.addTurn(rawQuery, response.text, response.topic);
        this.saveSessionState();
      }, 400);
    }
  }

  // =========================================================================
  // 6. INITIALIZATION ON DOM READY
  // =========================================================================
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      window.portfolioChatbot = new PortfolioChatbotWidget();
    });
  } else {
    window.portfolioChatbot = new PortfolioChatbotWidget();
  }
})();
