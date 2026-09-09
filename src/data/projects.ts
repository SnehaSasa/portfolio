export interface Project {
  id: number;
  title: string;
  repoUrl: string;
  tech: string[];
  description: string[];
  metrics?: string;
  isCaseStudy?: boolean;
  caseStudyHref?: string;
}

/** AI/ML & Data Science projects */
export const aiMlProjects: Project[] = [
  // {
  //   id: 100,
  //   title: "CAWi — Enterprise Multi-Agent AI Platform",
  //   repoUrl: "/enterprise-ai-platform",
  //   tech: ["LangGraph", "MCP", "LLMs", "RAG", "Multi-Agent", "FastAPI", "Azure"],
  //   description: [
  //     "Enterprise conversational AI platform that enables employees to query and interact with internal systems through natural language, using MCP-based integrations such as GitHub, Outlook, and other enterprise tools within a planner–executor multi-agent architecture.",
  //     "Engineered core AI and platform components, including the planner–executor reasoning layer, semantic tool routing, Entra ID authentication, human-in-the-loop approval gates, and resilience patterns such as circuit breakers.",
  //     "Built reliability and evaluation workflows around agent behavior, applying agent-loop and harness engineering practices to test, trace, evaluate, and improve multi-agent execution.",
  //     "Implemented observability across agent workflows, tracing execution flows and monitoring system behavior using LangSmith and Langflow.",
  //   ],
  //   metrics: "Flagship · Production · Agentic AI",
  //   isCaseStudy: true,
  //   caseStudyHref: "/enterprise-ai-platform",
  // },
  {
    id: -1,
    title: "Auto Apply Job Application System",
    repoUrl: "https://github.com/SnehaSasa/AutoApply-CET.git",
    tech: ["Python", "FastAPI", "NLP", "sentence-transformers", "Chrome Extension", "JavaScript"],
    description: [
      "Built a GenAI-powered form understanding system using SentenceTransformer embeddings and semantic similarity, achieving 94% accuracy in mapping job portals' unstructured fields to candidate data.",
      "Developed a full-stack Chrome extension that auto-fills job application forms using dynamic DOM traversal, improving fill accuracy by 80%.",
      "Developed a resume recommender and uploader, leveraging embedding-based matching to fetch the best-suited PDF automatically with 98% selection accuracy.",
      "Automated multi-element input handling (text, dropdowns, radio, file inputs), improving end-to-end application speed by 5×.",
    ],
    metrics: "94% accuracy · 500ms latency · 5× faster",
  },
  {
    id: 0,
    title: "Intelligent Assessment Recommendation Engine with Semantic Retrieval",
    repoUrl: "https://github.com/SnehaSasa/Assessment-recommendation.git",
    tech: ["Python", "Streamlit", "FAISS", "SentenceTransformers", "Hugging Face", "Flan-T5", "PyTorch"],
    description: [
      "Built an AI-driven assessment recommender system using Streamlit and Hugging Face models, leveraging FAISS for 500% faster semantic search and SentenceTransformers for real-time query embeddings.",
      "Improved hiring relevance by 92% across 50+ role-specific documents, delivering tailored assessment recommendations instantly.",
      "Integrated Hugging Face's Flan-T5 language model to generate natural language responses based on retrieved documents.",
    ],
    metrics: "92% relevance · 500% faster search",
  },
  {
    id: 1,
    title: "AI-based Vehicle and FastTag Recognition System",
    repoUrl: "https://github.com/SnehaSasa/FASTag-Verification.git",
    tech: ["YOLOv8", "EasyOCR", "OpenCV", "PyTorch", "Hydra", "Pandas"],
    description: [
      "Developed an automated vehicle recognition system using YOLOv8 for license plate detection and EasyOCR for text extraction, achieving 95% accuracy in plate recognition.",
      "Processed real-time video data to identify vehicles and retrieve associated details such as FastTag ID, vehicle type, and plate number.",
      "Reduced manual verification time by 70%, enhancing operational efficiency and strengthening security protocols for vehicle tracking.",
    ],
    metrics: "95% accuracy · 70% time reduction",
  },
  {
    id: 2,
    title: "Automated Log Analysis Using Data Science",
    repoUrl: "https://github.com/SnehaSasa/Log-Analyzer.git",
    tech: ["Python", "Pandas", "OpenPyXL", "Regex"],
    description: [
      "Engineered a data preprocessing pipeline to extract and analyze specific log entries from system log files using Python libraries (Pandas, RE, OpenPyXL).",
      "Filtered log entries based on defined keywords, sorted by date, and exported to Excel, reducing manual log retrieval time by 80%.",
      "Automated log analysis allowed for quicker debugging and real-time error detection, facilitating improved system maintenance.",
    ],
    metrics: "80% faster retrieval",
  },
  {
    id: 3,
    title: "Enhanced Disease Prediction Using Genome-based Analysis",
    repoUrl: "https://github.com/SnehaSasa/Genome-based-Analysis.git",
    tech: ["KNN", "Naive Bayes", "Decision Tree", "Django", "Scikit-learn"],
    description: [
      "Developed a web-based disease prediction tool leveraging ML algorithms (KNN, Naive Bayes, DecisionTree) to predict hereditary diseases from genomic data with 98% accuracy.",
      "Utilized Django to build a responsive backend, and integrated performance metrics (accuracy, confusion matrix) for model evaluation.",
    ],
    metrics: "98% accuracy",
  },
  {
    id: 4,
    title: "Development of Supervised Algorithm for Predicting Chronic Kidney Disease (Research Paper)",
    repoUrl: "https://github.com/SnehaSasa/CKD-Prediction.git",
    tech: ["KNN", "Random Forest", "Adaboost", "Scikit-learn", "Seaborn"],
    description: [
      "Designed and implemented a machine learning model for CKD prediction using KNN, Random Forest, and Adaboost Classifier, achieving 99% accuracy with the Random Forest algorithm.",
      "Utilized a dataset of 400 patient records, applying key metrics like accuracy, confusion matrix, and recall score to assess performance.",
    ],
    metrics: "99% accuracy · IEEE Publication",
  },
];

/** Software Engineering projects */
export const sweProjects: Project[] = [
  {
    id: 6,
    title: "E-Mart — Full-Stack E-Commerce Platform",
    repoUrl: "https://github.com/SnehaSasa/EMart.git",
    tech: ["HTML", "CSS", "FastAPI", "MySQL", "Redis", "Docker", "JavaScript"],
    description: [
      "Built a full-stack e-commerce platform with categorized product browsing and cart management",
      "Implemented FastAPI backend with modular architecture for products, cart, and orders",
      "Engineered real-time inventory validation to prevent overselling",
      "Integrated Redis caching to improve API response performance",
      "Containerized the backend infrastructure with Docker support, enabling reproducible development environments and simplified deployment.",
    ],
    metrics: "50+ products · Real-time inventory · Redis caching",
  },
  {
    id: 7,
    title: "iBook Online Library Management System",
    repoUrl: "https://github.com/SnehaSasa/iBook-System.git",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    description: [
      "Developed an online library management system using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL with book search, issue tracking, and user reviews.",
      "Streamlined book issue and return processes with a responsive interface for day-to-day library operations.",
    ],
    metrics: "Full-stack · MySQL · Responsive UI",
  },
  {
    id: 8,
    title: "Weather App",
    repoUrl: "https://github.com/SnehaSasa/Weather-App.git",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    description: [
      "Created a real-time weather forecasting app using HTML, CSS, and JavaScript, integrated with OpenWeatherMap API for temperature, humidity, and precipitation.",
      "Focused on clear UX for timely weather updates from live API data.",
    ],
    metrics: "Real-time · API integration",
  },
];
