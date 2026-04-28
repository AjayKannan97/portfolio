export const profile = {
  name: 'Ajay Kannan',
  title: 'ML Systems / Backend Infrastructure Engineer',
  location: 'Santa Clara, CA',
  email: 'ajaykannan1606@gmail.com',
  phone: '+1 (602) 748-9642',
  tagline:
    'I build production data platforms, ML pipelines, and generative AI systems — where reliability matters as much as intelligence.',
  bio: [
    "I'm an ML Systems and Backend Infrastructure Engineer at Pacific Gas & Electric, where I design and operate the data platform that moves utility operations data at scale.",
    'My work lives at the seam between classical data engineering and applied ML — fault-tolerant pipelines, observability, anomaly detection, and increasingly, LLM- and agent-driven tooling that has to run in production.',
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

export const experience = [
  {
    company: 'Pacific Gas & Electric',
    role: 'ML Systems / Backend Infrastructure Engineer',
    period: 'Jul 2023 — Present',
    location: 'Santa Clara, CA',
    bullets: [
      'Designed and deployed a production data platform (Electric Productivity Tracker) for large-scale utility datasets — improved processing throughput ~20% and reduced system errors ~15% through backend automation, monitoring, and reliability engineering across distributed systems.',
      'Engineered scalable, fault-tolerant data pipelines integrating heterogeneous sources (GIS, PostgreSQL, internal services) with consistent low-latency access and continuous stream processing.',
      'Built automated backend validation and testing infrastructure using Python services and REST interfaces — cut deployment verification time by 50% via comprehensive unit, integration, and end-to-end suites.',
      'Implemented end-to-end ETL, validation, and transformation workflows across distributed systems, improving data integrity and reducing manual ops overhead.',
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
      'Applied advanced image processing to biological data using Siamese Networks, GANs, and Neural Style Transfer for automated histology image analysis in PyTorch.',
      'Used alpha blending to recreate histology slide images, accurately representing biological particles and membranes through image processing and registration methods.',
      'Achieved 94% enhancement in image blending efficiency through novel generative architectures applied to medical imaging.',
      'Built production-quality Python software with OOP design and comprehensive testing, validating algorithm output with domain experts to ensure clinical relevance.',
    ],
  },
  {
    company: 'Microsoft',
    role: 'Software Engineering Intern',
    period: 'Summer 2017 & 2018',
    location: 'Hyderabad, India',
    bullets: [
      'Identified sensor-data patterns to improve crop yields on the FarmBeats agricultural intelligence platform using Python, ML, REST APIs, and PyTorch.',
      'Built a GIS-based heat-map generation system for sensor values (soil moisture, temperature, humidity) — real-time spatial visualization of multi-sensor data across fields.',
      'Led the Shopping on Cortana project, integrating Cortana voice assistant with a shopping platform for natural-language interaction and personalized recommendations.',
      'Handled backend development with Cassandra and C# in the MS-IDC Foundry Team — RESTful APIs for distributed data storage and high-availability service integration.',
    ],
  },
];

export const projects = [
  {
    title: 'On-Device LLM Voice Assistant',
    summary:
      'Voice-enabled on-device LLM assistant built with LM Studio and DeepSeek — real-time inference pipeline with speech-to-text, LLM inference, and text-to-speech orchestration. Privacy-preserving by design: nothing leaves the device.',
    tags: ['LM Studio', 'DeepSeek', 'STT/TTS', 'On-device'],
    repo: 'https://github.com/AjayKannan97',
    visual: 'voice',
  },
  {
    title: 'Interactive Banking Chatbot',
    summary:
      'Production-style LLM banking chatbot using GPT, LangChain, and LlamaIndex. Backend orchestration for context, prompt workflows, and intent handling; RAG pipelines over Pinecone to ground responses in verified banking documentation.',
    tags: ['LangChain', 'LlamaIndex', 'RAG', 'Pinecone'],
    repo: 'https://github.com/AjayKannan97/Ola-App-with-LangChain',
    visual: 'chatbot',
  },
  {
    title: 'Twitter Real-Time ML Retrieval',
    summary:
      'Real-time ML retrieval system combining ANN and SVR over streaming Twitter data — 98% accuracy in context-aware retrieval. Kafka-backed streaming pipelines with a low-latency backend and an interactive web UI for live visualization.',
    tags: ['ANN', 'SVR', 'Kafka', 'Streaming'],
    repo: 'https://github.com/AjayKannan97',
    visual: 'stream',
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'C++', 'CUDA C++', 'C#', 'JavaScript', 'SQL', 'Node.js', 'Bash'],
  },
  {
    category: 'ML / DL Frameworks',
    items: ['PyTorch', 'TensorFlow', 'JAX', 'Hugging Face', 'Keras', 'NumPy', 'Scikit-learn', 'Pandas'],
  },
  {
    category: 'LLM & Agentic AI',
    items: ['LangChain', 'LlamaIndex', 'CrewAI', 'LangSmith', 'AWS Bedrock Agents', 'AWS Strands Agents', 'RAG Pipelines', 'Prompt Engineering'],
  },
  {
    category: 'Vector Databases',
    items: ['Pinecone', 'Weaviate', 'Qdrant'],
  },
  {
    category: 'Cloud & AI Services',
    items: ['AWS Bedrock', 'SageMaker', 'Lambda', 'S3', 'EC2', 'GCP Vertex AI', 'BigQuery', 'Dataflow', 'Azure', 'NVIDIA CUDA'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices', 'Kafka'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Cassandra', 'DynamoDB', 'NoSQL'],
  },
  {
    category: 'DevOps & Infrastructure',
    items: ['Docker', 'Kubernetes', 'Git', 'CI/CD', 'Terraform'],
  },
];

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
