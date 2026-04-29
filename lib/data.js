export const profile = {
  name: 'Ajay Kannan',
  title: 'Software Engineer',
  location: 'Santa Clara, CA',
  email: 'ajaykannan1606@gmail.com',
  phone: '+1 (602) 748-9642',
  tagline:
    'I build production data platforms, ML pipelines, and generative AI systems — where reliability matters as much as intelligence.',
  bio: [
    "I'm a Software Engineer at Pacific Gas & Electric, where I design and operate the data platform and tooling that move utility operations data at scale.",
    'My work lives at the seam between classical data engineering and applied ML — fault-tolerant pipelines, observability, anomaly detection, and increasingly, LLM-driven tooling that has to run in production.',
    'I hold an M.S. in Computer Science from Arizona State University, with research in few-shot learning for TCR–Epitope affinity prediction. Before that: Microsoft, Sigtuple, and Solarillion Foundation — where I started with IoT and gesture recognition.',
  ],
  links: {
    github: 'https://github.com/AjayKannan97',
    linkedin: 'https://www.linkedin.com/in/ajay-kannan-34a04013b/',
    medium: 'https://medium.com/@ajay_k',
    email: 'mailto:ajaykannan1606@gmail.com',
    resume: '/resume',
    resumePdf: '/Ajay_Kannan_Resume.pdf',
  },
};

export const education = [
  {
    school: 'Arizona State University, Tempe',
    degree: 'M.S. Computer Science',
    period: 'Jan 2021 — May 2023',
    coursework: ['Machine Learning', 'Deep Learning', 'Distributed Systems', 'Data Structures & Algorithms'],
  },
  {
    school: 'Anna University, Chennai',
    degree: 'B.S. Computer Science',
    period: 'Aug 2014 — May 2019',
  },
];

export const experience = [
  {
    company: 'Pacific Gas & Electric',
    role: 'Software Engineer',
    period: 'Jul 2023 — Present',
    location: 'Santa Clara, CA',
    bullets: [
      'Designed and deployed a production data platform (Electric Productivity Tracker) for large-scale utility datasets — improved processing throughput ~20% and reduced system errors ~15% through backend automation, monitoring, and reliability engineering across distributed systems.',
      'Engineered scalable, fault-tolerant data pipelines integrating heterogeneous sources (GIS, PostgreSQL, internal services) with consistent low-latency access and continuous stream processing.',
      'Built automated backend validation and testing infrastructure using Python services and REST interfaces — cut deployment verification time by 50% via comprehensive unit, integration, and end-to-end suites.',
      'Implemented end-to-end ETL, validation, and transformation workflows across distributed systems, improving data integrity and reducing manual ops overhead.',
      'Automated extraction and processing of the Distribution Operations Toolset (DOT) — a daily-updated, macro-enabled Excel system containing nested map-creation data — using Python and JavaScript to filter new maps, extract the relevant fields, and feed them into the map-creation pipeline, eliminating manual data entry and reducing processing errors.',
      'Unified three separate map-creation processes into a single streamlined workflow — consolidating fragmented operations and improving overall efficiency, consistency, and maintainability across the team.',
      'Applied ML and generative AI in production to improve anomaly detection reliability — reduced false positives ~30% via model-assisted signal validation, statistical inference, and system-level monitoring.',
      'Shipped observability and alerting (health checks, dashboards, centralized logging) across servers and databases — cut issue detection and resolution time by ~50%.',
      'Collaborated cross-functionally (engineering, ops, GIS, PMs), translating requirements into algorithm specs and authoring architecture diagrams, API specs, and operational runbooks.',
    ],
  },
  {
    company: 'Sigtuple Inc.',
    role: 'Data Scientist',
    period: 'Jul 2021 — Dec 2021',
    location: 'Bengaluru, India',
    bullets: [
      'Applied image processing techniques to biological data using PyTorch, implementing Siamese Networks, GANs, and Neural Style Transfer for medical image analytics.',
      'Used alpha blending to recreate histology slide images, accurately representing biological particles and membranes.',
      'Achieved 94% accuracy in image blending efficiency through innovative generative architectures.',
      'Built production software in Python following object-oriented design with comprehensive unit and integration testing.',
    ],
  },
  {
    company: 'Microsoft',
    role: 'Software Engineering',
    period: 'Summer 2017 & 2018',
    location: 'Hyderabad, India',
    bullets: [
      'Developed ML algorithms for the FarmBeats agricultural platform using Python and PyTorch — identified sensor-data patterns to enhance crop-yield predictions.',
      'Built a GIS-based heat-map generation system for FarmBeats — real-time spatial visualization of multi-sensor data (soil moisture, temperature, humidity).',
      'Contributed to the Shopping on Cortana project, integrating Cortana with a shopping platform to improve user experience.',
      'Developed backend services with Cassandra DB and C# as part of the Foundry Team in MS-IDC, building RESTful APIs for distributed data storage.',
    ],
  },
];

// All public GitHub repos (non-forks), ordered by most recent activity.
// Source: https://github.com/AjayKannan97
export const projects = [
  {
    title: 'Chatbot with LM Studio',
    repo: 'https://github.com/AjayKannan97/chatbot-with-LM-Studio',
    summary:
      'Context-driven customer service chatbot running local LLMs through LM Studio. Ships as both a CLI and a modern web app, with a real-time inference pipeline tuned for low-latency on-device support.',
    tags: ['Python', 'LM Studio', 'LLM'],
    year: '2025',
  },
  {
    title: 'Banking Chatbot — Ola + LangChain',
    repo: 'https://github.com/AjayKannan97/Ola-App-with-LangChain',
    summary:
      'Production-style LLM banking assistant built with GPT, LangChain, and LlamaIndex. Backend orchestration for context, prompts, and intent; RAG pipelines over Pinecone to ground answers in verified banking documentation.',
    tags: ['Python', 'LangChain', 'RAG'],
    year: '2025',
  },
  {
    title: 'ProxyLLM Implementation',
    repo: 'https://github.com/AjayKannan97/Implementation-of-ProxyLLM',
    summary:
      'Implementation of the ProxyLLM technique on top of LM Studio — proxying smaller local models for larger ones to study latency, accuracy, and routing trade-offs.',
    tags: ['Python', 'LLM', 'Routing'],
    year: '2025',
  },
  {
    title: 'TCR–Epitope Affinity Prediction',
    repo: 'https://github.com/AjayKannan97/TCR-Affinity-predication',
    summary:
      'Few-shot learning for TCR–Epitope binding affinity — code accompanying the ASU MORE Symposium poster. Contrastive loss and Siamese networks for low-data immunology prediction.',
    tags: ['PyTorch', 'Few-shot', 'Siamese'],
    year: '2025',
  },
  {
    title: 'Pneumonia Detection — Chest X-Ray',
    repo: 'https://github.com/AjayKannan97/chest_xray',
    summary:
      'CNN-based pneumonia classifier on chest radiographs. Image preprocessing pipeline, model training, and evaluation harness — built as an end-to-end medical-imaging project.',
    tags: ['Jupyter', 'CNN', 'Medical Imaging'],
    year: '2025',
  },
  {
    title: 'Siamese Network — Keras',
    repo: 'https://github.com/AjayKannan97/Siamese-Network-with-Keras',
    summary:
      'Siamese network in Keras for similarity learning — pair-input architecture with shared weights, contrastive supervision, and an evaluation loop on standard benchmarks.',
    tags: ['Keras', 'Siamese', 'Similarity'],
    year: '2025',
  },
  {
    title: 'Statistical ML',
    repo: 'https://github.com/AjayKannan97/Statistical-ML',
    summary:
      'Coursework and notes from Statistical Machine Learning — implementations of classical methods from scratch and exploratory experiments on canonical datasets.',
    tags: ['Statistics', 'ML', 'Coursework'],
    year: '2025',
  },
  {
    title: 'Mobile Computing — ASU',
    repo: 'https://github.com/AjayKannan97/mobile-computing',
    summary:
      'Mobile computing coursework at Arizona State — projects exploring sensor data, mobile platforms, and on-device computation.',
    tags: ['Mobile', 'Sensors', 'Coursework'],
    year: '2025',
  },
  {
    title: 'Data Visualization',
    repo: 'https://github.com/AjayKannan97/data-visualization',
    summary:
      'Coursework on data visualization — exploratory plots, dashboards, and visual storytelling built on Python notebooks.',
    tags: ['Jupyter', 'Visualization'],
    year: '2025',
  },
  {
    title: 'Data Processing at Scale',
    repo: 'https://github.com/AjayKannan97/Data-Processing-at-Scale',
    summary:
      'ASU coursework on large-scale data processing — distributed pipelines and parallel processing patterns over real-world datasets.',
    tags: ['Python', 'Distributed', 'Coursework'],
    year: '2025',
  },
  {
    title: 'Data Mining',
    repo: 'https://github.com/AjayKannan97/Data-Mining',
    summary:
      'Data mining coursework — clustering, classification, and feature-engineering pipelines across real-world datasets.',
    tags: ['Jupyter', 'Clustering', 'Pandas'],
    year: '2025',
  },
  {
    title: 'CSE 511 — Spatial Query',
    repo: 'https://github.com/AjayKannan97/CSE511---Project-',
    summary:
      'ASU CSE 511 (Data Processing at Scale) project — Scala/Spark spatial query implementation with hot-zone analysis on geospatial datasets.',
    tags: ['Scala', 'Spark', 'Spatial'],
    year: '2025',
  },
  {
    title: 'Semantic Web Mining',
    repo: 'https://github.com/AjayKannan97/semantic-web-mining',
    summary:
      'Semantic web mining coursework — knowledge graph extraction and ontology-based queries over web-scale data.',
    tags: ['Jupyter', 'Knowledge Graphs'],
    year: '2025',
  },
  {
    title: 'Car Rental Website',
    repo: 'https://github.com/AjayKannan97/Car-Rental-Website',
    summary:
      'A simple car-rental web app built with vanilla HTML, CSS, and JavaScript — small but fully interactive client-side experience.',
    tags: ['JavaScript', 'HTML/CSS', 'Web'],
    year: '2025',
  },
  {
    title: 'Bio-Inspired AI',
    repo: 'https://github.com/AjayKannan97/Bio-Inspired-AI',
    summary:
      'Bio-inspired AI coursework — genetic algorithms, swarm intelligence, and evolutionary computation across optimization problems.',
    tags: ['Jupyter', 'Genetic Algorithms'],
    year: '2025',
  },
  {
    title: 'Product Price Prediction',
    repo: 'https://github.com/AjayKannan97/Product-Price-Prediction',
    summary:
      'System for predicting product prices from a database of products, meta features, and historical pricing — feature engineering plus regression baselines.',
    tags: ['Jupyter', 'Regression', 'Pricing'],
    year: '2025',
  },
  {
    title: 'Logbook',
    repo: 'https://github.com/AjayKannan97/Logbook',
    summary:
      'A small Python logbook — utilities for daily note-keeping and structured journaling from the command line.',
    tags: ['Python', 'CLI'],
    year: '2025',
  },
  {
    title: 'Profile README',
    repo: 'https://github.com/AjayKannan97/AjayKannan97',
    summary:
      'My GitHub profile README — quick intro, current focus, and where to find me on the rest of the internet.',
    tags: ['Markdown', 'Meta'],
    year: '2026',
  },
  {
    title: 'Portfolio (this site)',
    repo: 'https://github.com/AjayKannan97/portfolio',
    summary:
      'The site you are reading right now — a Next.js + Tailwind portfolio with editorial typography, intersection-observed reveals, and an embedded resume viewer.',
    tags: ['Next.js', 'Tailwind', 'JS'],
    year: '2026',
  },
  {
    title: 'Algorithms in Computational Biology',
    repo: 'https://github.com/AjayKannan97/Algorithms-in-Computational-Biology',
    summary:
      'Course implementations of foundational computational biology algorithms — alignment, motif discovery, and phylogenetic methods.',
    tags: ['Jupyter', 'Bioinformatics'],
    year: '2023',
  },
  {
    title: 'Vanilla SPA — HTML & JS',
    repo: 'https://github.com/AjayKannan97/SPA-using-HTML-and-JS',
    summary:
      'Single-page application built with vanilla HTML and JavaScript — client-side routing without a framework, hand-rolled view rendering.',
    tags: ['HTML', 'JavaScript'],
    year: '2022',
  },
  {
    title: 'Spam Classifier',
    repo: 'https://github.com/AjayKannan97/Spam-Classification',
    summary:
      'Spam classification using semantic similarity and a corpus-based thesaurus — classical NLP feature engineering on top of supervised baselines.',
    tags: ['Jupyter', 'NLP', 'Classification'],
    year: '2021',
  },
  {
    title: 'SpeechToCode',
    repo: 'https://github.com/AjayKannan97/SpeechtoCode',
    summary:
      'Android application that turns speech into code via on-device speech recognition — early experiment in voice-first developer tooling.',
    tags: ['Android', 'Speech'],
    year: '2017',
  },
];

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Python (Expert)', 'C++', 'Java', 'C#', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    category: 'ML / DL Frameworks',
    items: ['PyTorch', 'TensorFlow', 'Hugging Face', 'Keras', 'NumPy', 'Scikit-learn', 'Pandas'],
  },
  {
    category: 'LLM & AI Tools',
    items: ['LangChain', 'LLM Integration', 'Prompt Engineering', 'RAG Pipelines'],
  },
  {
    category: 'Backend Development',
    items: ['REST APIs', 'FastAPI', 'Node.js', 'Express.js', 'Spring Boot', 'Microservices', 'GraphQL'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Cassandra', 'NoSQL'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, Lambda)', 'Azure', 'Docker', 'Kubernetes', 'Git', 'CI/CD'],
  },
  {
    category: 'Computer Science',
    items: ['Data Structures', 'Algorithms', 'System Design', 'Distributed Systems', 'OOP'],
  },
];

export const currentlyLearning = ['JAX', 'AWS Bedrock', 'Vector Databases (Pinecone)', 'CUDA Programming'];

export const publications = [
  {
    title: 'Few-Shot Learning for TCR–Epitope Binding Affinity Prediction',
    venue: 'MORE Symposium — Arizona State University',
    year: '2023',
    type: 'Poster / Research',
    summary:
      'Developed contrastive loss for few-shot learning in TCR–Epitope affinity prediction (PyTorch), improving accuracy by 30% over baselines via novel architectural and loss-function design. Implemented a Siamese network to evaluate efficiency across K-values and validate model performance over varying data distributions.',
  },
  {
    title: 'A Generic Multi-modal Dynamic Gesture Recognition System using Machine Learning',
    venue: 'arXiv:1809.05839',
    year: '2018',
    type: 'Preprint',
    link: 'https://arxiv.org/abs/1809.05839',
    summary:
      'Co-authored research on dynamic American Sign Language recognition combining accelerometer signals and ML (Extra Trees, Random Forest, Ridge Classifier) — 94–97% accuracy with custom feature extraction for temporal gesture sequences. Part of work led at Solarillion Foundation.',
  },
  {
    title: 'Low-cost Static Gesture Recognition System using MEMS Accelerometers',
    venue: 'IEEE Global IoT Summit',
    year: '2017',
    type: 'Conference',
    doi: '10.1109/GIOTS.2017.8016217',
    summary:
      'First-author IEEE paper on a low-cost static ASL gesture recognition system using MEMS accelerometers and Arduino. Built the full pipeline — sensor acquisition, feature processing, model training, real-time inference — at Solarillion Foundation, while leading the IoT research group.',
  },
];
