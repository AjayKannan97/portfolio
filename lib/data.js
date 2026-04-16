export const profile = {
  name: 'Ajay Kannan',
  title: 'ML Systems / Backend Infrastructure Engineer',
  location: 'Santa Clara, CA',
  email: 'ajaykannan1606@gmail.com',
  phone: '+1 (602) 748-9642',
  tagline:
    'I build production data platforms, ML pipelines, and generative AI systems — where reliability matters as much as intelligence.',
  bio: [
    "I'm an ML Systems and Backend Infrastructure Engineer currently at Pacific Gas & Electric, where I design and maintain the data platform that moves utility operations data at scale.",
    'My work lives at the seam between classical data engineering and applied machine learning — scalable pipelines, observability, anomaly detection, and increasingly, LLM-driven tooling that actually runs in production.',
    "I hold an M.S. in Computer Science from Arizona State University, with research in few-shot learning for TCR–Epitope affinity prediction. Before that: Microsoft, Sigtuple, and Solarillion Foundation — where I started with IoT and gesture recognition.",
  ],
  links: {
    github: 'https://github.com/AjayKannan97',
    linkedin: 'https://www.linkedin.com/in/ajay-kannan-34a04013b/',
    medium: 'https://medium.com/@ajay_k',
    email: 'mailto:ajaykannan1606@gmail.com',
  },
};

export const experience = [
  {
    company: 'Pacific Gas & Electric',
    role: 'ML Systems / Backend Infrastructure Engineer',
    period: 'Jul 2023 — Present',
    location: 'Bay Area, CA',
    bullets: [
      'Designed and deployed a production data platform (Electric Productivity Tracker) for large-scale utility datasets — improved throughput ~20% and reduced system errors ~15%.',
      'Engineered scalable, fault-tolerant data pipelines integrating GIS, Postgres, and internal services with consistent low-latency access.',
      'Built automated backend validation and testing infrastructure in Python, cutting deployment verification time by 50%.',
      'Applied ML and generative AI techniques in production to improve anomaly detection reliability, reducing false positives ~30%.',
      'Shipped observability and alerting systems (health checks, dashboards) that cut issue detection and resolution time by ~50%.',
    ],
  },
  {
    company: 'Arizona State University',
    role: 'Graduate Research Assistant',
    period: 'Aug 2022 — May 2023',
    location: 'Tempe, AZ',
    bullets: [
      'Developed contrastive loss for few-shot learning in TCR–Epitope affinity prediction, improving accuracy by 30%.',
      'Implemented a Siamese network to evaluate the efficiency of different K-values in few-shot learning.',
    ],
  },
  {
    company: 'Sigtuple Inc.',
    role: 'Data Scientist',
    period: 'Jul 2021 — Dec 2021',
    location: 'Bengaluru, India',
    bullets: [
      'Applied image processing to biological data using Siamese Networks, GANs, and Neural Style Transfer.',
      'Used alpha blending to recreate histology slide images — hitting 94% enhancement accuracy in image blending.',
    ],
  },
  {
    company: 'Microsoft',
    role: 'Software Engineer (Intern)',
    period: 'Summer 2017 & 2018',
    location: 'Hyderabad, India',
    bullets: [
      'Identified sensor-data patterns to improve crop yields (FarmBeats) using Python, ML, REST APIs, and PyTorch; built a heatmap generation system over GIS data.',
      'Led the Shopping on Cortana project — integrated Cortana with a shopping platform (Cassandra + C#, MS-IDC Foundry Team).',
    ],
  },
  {
    company: 'Solarillion Foundation',
    role: 'Research Assistant',
    period: 'Aug 2015 — Dec 2018',
    location: 'Chennai, India',
    bullets: [
      'Designed static and dynamic American Sign Language gesture recognition systems — 94–97% accuracy using accelerometers, Arduino, and ML (Extra Trees, Random Forest, Ridge Classifier).',
      'Led the IoT research group, mentoring junior researchers as a teaching assistant.',
    ],
  },
];

export const projects = [
  {
    title: 'On-Device LLM Voice Assistant',
    summary:
      'Voice-enabled LLM chatbot running entirely on-device via LM Studio and DeepSeek — real-time inference, API orchestration, privacy-preserving, no cloud.',
    tags: ['LM Studio', 'DeepSeek', 'Python', 'Voice'],
    repo: 'https://github.com/AjayKannan97',
  },
  {
    title: 'Interactive Banking Chatbot',
    summary:
      'Production-style LLM banking chatbot built with GPT + LangChain. Backend orchestration for context, prompt workflows, intent handling; scalable API integration for diverse financial queries.',
    tags: ['LangChain', 'GPT', 'NLP', 'Backend'],
    repo: 'https://github.com/AjayKannan97/Ola-App-with-LangChain',
  },
  {
    title: 'TCR–Epitope Affinity Prediction',
    summary:
      'Graduate research on few-shot learning for TCR–Epitope binding affinity. Contrastive loss + Siamese networks; 30% accuracy lift. Presented at ASU MORE symposium.',
    tags: ['PyTorch', 'Few-shot', 'Siamese', 'Research'],
    repo: 'https://github.com/AjayKannan97/TCR-Affinity-predication',
  },
  {
    title: 'Pneumonia Detection from Chest X-Rays',
    summary:
      'CNN-based classifier for pneumonia detection on chest radiographs — image preprocessing pipeline, model training, evaluation.',
    tags: ['CNN', 'Medical Imaging', 'TensorFlow'],
    repo: 'https://github.com/AjayKannan97/chest_xray',
  },
  {
    title: 'Twitter Real-Time ML Retrieval',
    summary:
      'Real-time ML retrieval system combining ANN and SVR on streaming Twitter data — 98% accuracy, production-ready low-latency backend.',
    tags: ['ANN', 'SVR', 'Streaming'],
    repo: 'https://github.com/AjayKannan97',
  },
  {
    title: 'Data Mining Experiments',
    summary:
      'Classroom and extended data-mining work — clustering, classification, and feature-engineering pipelines across real-world datasets.',
    tags: ['Scikit-learn', 'Pandas', 'EDA'],
    repo: 'https://github.com/AjayKannan97/Data-Mining',
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'C++', 'C#', 'JavaScript', 'SQL', 'Scala', 'Node.js'],
  },
  {
    category: 'ML / DL',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face', 'LangChain', 'Scikit-learn', 'NumPy', 'Pandas'],
  },
  {
    category: 'Backend',
    items: ['Spring Boot', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices'],
  },
  {
    category: 'Data / Storage',
    items: ['PostgreSQL', 'MongoDB', 'Cassandra', 'DynamoDB', 'Redis', 'Spark', 'Kafka'],
  },
  {
    category: 'Cloud / DevOps',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Git'],
  },
];

export const publications = [
  {
    title: 'Few-Shot Learning for TCR–Epitope Binding Affinity Prediction',
    venue: 'ASU MORE Symposium',
    year: '2023',
    type: 'Poster',
  },
  {
    title: 'A Generic Multi-modal Dynamic Gesture Recognition System using Machine Learning',
    venue: 'arXiv:1809.05839',
    year: '2018',
    type: 'Preprint',
    link: 'https://arxiv.org/abs/1809.05839',
  },
  {
    title: 'Low-cost Static Gesture Recognition System using MEMS Accelerometers',
    venue: 'Global IoT Summit — IEEE',
    year: '2017',
    type: 'Conference',
    doi: '10.1109/GIOTS.2017.8016217',
  },
];
