export interface Project {
  id: number;
  title: string;
  repoUrl: string;
  tech: string[];
  description: string[];
  metrics?: string;
}

export const projects: Project[] = [
  {
    id: -1,
    title: "Auto Apply Job Application System",
    repoUrl: "https://github.com/SnehaSasa/AutoApply-CET.git",
    tech: ["Python", "FastAPI", "NLP", "sentence-transformers", "Chrome Extension", "JavaScript"],
    description: [
      "Built a GenAI-powered form understanding system using SentenceTransformer embeddings and semantic similarity, achieving 94% accuracy in mapping job portals' unstructured fields to candidate data.",
      "Developed a full-stack Chrome extension that intelligently auto-fills job application forms using field detection, pattern matching, and dynamic DOM traversal, improving fill accuracy by 80%.",
      "Integrated a Python FastAPI backend for resume storage and PDF serving, enabling secure file upload automation with zero user interaction.",
      "Engineered a self-learning knowledge base for storing candidate details, roles, skills, and resumes, enabling intelligent autofill with 500ms real-time inference latency.",
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
  {
    id: 5,
    title: "Prediction of Diabetes",
    repoUrl: "https://github.com/SnehaSasa/Diabetes-Prediction.git",
    tech: ["Decision Tree", "NumPy", "Pandas", "Seaborn"],
    description: [
      "Built a predictive model using Decision Tree to forecast diabetes risk based on a dataset of 769 patients. Achieved 77% accuracy with a focus on key features such as insulin, glucose levels, and BMI.",
      "Enabled early identification of high-risk individuals, promoting preventive healthcare measures.",
    ],
    metrics: "77% accuracy",
  },
];
