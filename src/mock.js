export const portfolioData = {
  // --- Hero & Contact Section Data ---
  hero: {
    name: "Danda Lakshmi Mani Sankar",
    title: "AI/ML Engineer & GenAI Developer",
    subtitle: "Building intelligent solutions with Machine Learning, Computer Vision, and Generative AI",
    email: "dandamanisankar010@gmail.com", //
    phone: "+91 9182317043", //
    github: "https://github.com/DandaLakshmiManiSankar", //
    linkedin: "https://www.linkedin.com/in/danda-lakshmi-manisankar-364b8b290", //
  },

  // --- About Section Data ---
  about: {
    // Please fill in a comprehensive description here
    description: "A passionate AI/ML Engineer and Data Scientist with a focus on building and deploying intelligent systems. Expertise includes Deep Learning, Computer Vision (YOLO), Generative AI (LLMs, RAG), and MLOps practices. Dedicated to leveraging cutting-edge technology to solve complex real-world problems and drive efficiency.",
    highlights: [
      "Proficient in designing and deploying deep learning models (CNN, RNN, LSTM) and traditional ML algorithms (XGBoost).",
      "Experienced in building full-stack applications with React.js and integrating external APIs for dynamic content.",
      "Skilled in cloud deployment and optimization for scalable, low-latency AI solutions.",
      "Strong foundation in Data Structures & Algorithms, Python, and C/Java." //
    ],
    education: {
      degree: "B.Tech, Computer Science and Engineering", //
      institution: "R.V.R. & J.C. College of Engineering, Guntur, AP", //
      duration: "Aug 2022 - Jun 2026", //
      cgpa: "9.3", //
    }
  },

  // --- Skills Section Data ---
  skills: [
    {
      category: "Programming & Core",
      items: ["Python", "C", "Java", "SQL", "JavaScript", "Data Structures & Algorithms"] //
    },
    {
      category: "AI / ML / DL",
      items: ["Pytorch", "Tensorflow", "Numpy", "Pandas", "MatplotLib", "XGBoost", "Scikit-learn", "CNN", "RNN", "LSTM", "GRU", "Attention Mechanisms"] //
    },
    {
      category: "Generative AI & NLP",
      items: ["LLMS", "RAG", "Finetuning", "Transformers", "Vector Embeddings", "Vector DB", "NLTK", "Hugging Face", "Word2Vec", "Gemini API", "GPT 3.5", "Mistral AI"] //
    },
    {
      category: "Web Deployment",
      items: ["React.js", "NodeJs", "Web Development", "React Native", "MongoDB", "AWS", "Streamlit", "Git", "Github", "VS Code"] //
    },
    {
      category: "Computer Vision",
      items: ["YOLO", "OpenCV", "Deep Learning", "CNN"] //
    }
  ],

  // --- Projects Section Data ---
  projects: [
    {
      id: 1,
      image: "image_71aa23.jpg", // Placeholder for Blood Cell Detection image
      title: "Blood Cell Detection System", //
      description: "Developed a YOLO-based deep learning model for real-time blood cell detection and classification, achieving 89% accuracy on BCCD dataset with 98% precision in bounding box detection.", //
      tech: ["YOLO", "Python", "OpenCV", "Streamlit"], //
      metrics: ["89% accuracy", "98% precision", "35% Faster Inference", "500+ Concurrent Users"], //
      github: "https://github.com/DandaLakshmiManiSankar/BloodCellDetection",
      demo: "https://bloodcelldetection.app"
    },
    {
      id: 2,
      image: "image_71aa23.jpg", // Placeholder for Credit Card Fraud Detection image
      title: "Credit Card Fraud Detection", //
      description: "Engineered a machine learning solution using XGBoost that detects fraudulent transactions with 92% accuracy, surpassing previous methods by 15% and reducing false positives by 22%.", //
      tech: ["XGBoost", "Python", "Scikit-learn", "Pandas"], //
      metrics: ["92% Accuracy", "15% Improvement", "22% Fewer False Positives", "Scalable Pipeline"], //
      github: "https://github.com/DandaLakshmiManiSankar/CreditCardFraudDetection",
      demo: null
    },
    {
      id: 3,
      image: "image_71aa23.jpg", // Placeholder for Heart Disease image
      title: "Heart Disease Risk Prediction", //
      description: "Designed and deployed an ML model using XGBoost to predict heart disease risk from clinical parameters, achieving ~90% accuracy. Optimized for cloud deployment with 40% improved data consistency.", //
      tech: ["XGBoost", "Python", "Streamlit", "AWS", "Healthcare AI"], //
      metrics: ["~90% accuracy", "40% Better Consistency", "Cloud Deployed", "Real-time Predictions"], //
      github: "https://github.com/DandaLakshmiManiSankar/HeartDiseasePrediction",
      demo: "https://heartdisease.app"
    },
    {
      id: 4,
      image: "image_7131a5.jpg", // Placeholder for AI Telegram Chatbot image
      title: "AI Telegram Chatbot", //
      description: "Built an AI-powered Telegram chatbot using OpenAI GPT-3.5, Mistral AI, and Google Gemini API. Handles 100+ user interactions per week with sub-2 second response time and 35% improved efficiency.", //
      tech: ["GPT 3.5", "Gemini API", "Mistral AI", "Python", "Telegram AI"], //
      metrics: ["100+ Weekly Users", "<2s Response Time", "35% Efficiency Gain", "Multi-Model Integration"], //
      github: "https://github.com/DandaLakshmiManiSankar/TelegramChatbot",
      demo: null
    },
    {
      id: 5,
      image: "image_7131a5.jpg", // Placeholder for Multimodal Chatbot image
      title: "Multimodal Chatbot", //
      description: "Developed an advanced multimodal chatbot capable of processing text, images, and voice inputs using state-of-the-art language models and vision transformers for comprehensive AI interactions.", //
      tech: ["LLMs", "Vision Transformers", "Python", "NLP", "Multimodal AI"], //
      metrics: ["Text + Image + Voice", "Multiple LLM Support", "Real-time Processing", "Advanced NLP"], //
      github: "https://github.com/DandaLakshmiManiSankar/MultimodalChatbot",
      demo: null
    }
  ],

  // --- Experience Section Data (from Internship Experience in PDF) ---
  experience: [
    {
      id: 1,
      role: "AI/ML Intern", //
      company: "Edunet Foundation", //
      duration: "May 2025 - Jun 2025", //
      description: "Contributed to the development and optimization of state-of-the-art Generative AI models for real-world application, focusing on low-latency and multi-model performance.",
      achievements: [
        "Constructed an Al-powered Telegram chatbot utilizing OpenAI GPT-3.5 and Mistral Al Model and Google Gemini API, handling 100+ user interactions per week with an average response time of under 2 seconds.",
        "Strengthened chatbot functionality by integrating advanced error-handling mechanisms, improving response efficiency by 35%.",
        "Worked with Google Gemini API and optimized response times for low-latency user interactions.",
      ]
    },
    {
      id: 2,
      role: "Data Science Intern", //
      company: "NullClass", //
      duration: "Feb 2025 - Mar 2025", //
      description: "Focused on applying machine learning techniques to clinical datasets for predictive modeling and developing scalable cloud-based deployment strategies.",
      achievements: [
        "Designed and applied a machine learning model using XGBoost to predict heart disease risk from clinical parameters, achieving ~90% accuracy on test data.",
        "Preprocessed and analyzed medical datasets through feature engineering, normalization.",
        "Optimized ML model deployment in a cloud-based (Streamlit) environment with scalable performance and improved data consistency by 40%.",
      ]
    }
  ],

  // --- Certifications Section Data ---
  certifications: [
    {
      id: 1,
      title: "AWS Certified Machine Learning – Specialty", //
      issuer: "Amazon Web Services (AWS)", //
      date: "Issued Jun 2024" //
    },
    {
      id: 2,
      title: "Deep Learning Specialization", //
      issuer: "Coursera (DeepLearning.AI)", //
      date: "Issued Nov 2023" //
    },
    {
      id: 3,
      title: "TensorFlow Developer Certificate", //
      issuer: "Google", //
      date: "Issued Apr 2023" //
    },
    {
      id: 4,
      title: "Certified Data Scientist", //
      issuer: "Data Science Institute", //
      date: "Issued Dec 2022" //
    },
    {
      id: 5,
      title: "Prompt Engineering for Everyone", //
      issuer: "IBM SkillsNetwork", //
      date: "N/A"
    },
    {
      id: 6,
      title: "Artificial Intelligence Fundamentals", //
      issuer: "IBM Skills Build", //
      date: "N/A"
    },
    {
      id: 7,
      title: "Generative AI Fundamentals", //
      issuer: "Databricks", //
      date: "N/A"
    },
  ]
};