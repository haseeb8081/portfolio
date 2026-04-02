export const portfolioData = {
  name: "Haseeb Rajput",
  title: "Computer Systems Engineer | AI & ML Enthusiast",
  tagline: "Building the future with intelligent systems and secure solutions.",
  about: {
    summary: "Detail-oriented computer systems engineer from Sukkur IBA University, specializing in Machine Learning, Deep Learning, and Data Science. I bridge the gap between complex algorithms and real-world impact, with hands-on experience in financial forecasting and network security. Passionate about developing scalable, intelligent solutions that solve complex problems.",
    objectives: "To leverage my expertise in AI and Cybersecurity to develop innovative solutions that enhance digital security and advance the field of predictive analytics.",
    strengths: ["Analytical Problem Solving", "End-to-End AI Pipelines", "Full-Stack Development", "Secure Network Architecture"]
  },
  skills: [
    {
      category: "AI/ML & Deep Learning",
      items: [
        { name: "Neural Networks (CNN/RNN/LSTM)", level: 90 },
        { name: "Supervised & Unsupervised Learning", level: 95 },
        { name: "Reinforcement Learning", level: 75 },
        { name: "Computer Vision", level: 85 }
      ]
    },
    {
      category: "Generative AI",
      items: [
        { name: "Hugging Face & LangChain", level: 90 },
        { name: "OpenAI API & RAG Pipelines", level: 88 },
        { name: "Vector Databases (Pinecone/ChromaDB)", level: 85 }
      ]
    },
    {
      category: "Programming & Development",
      items: [
        { name: "Python", level: 95 },
        { name: "C++ / Java", level: 80 },
        { name: "React / Next.js", level: 85 },
        { name: "Node.js / Express", level: 82 }
      ]
    },
    {
      category: "Cybersecurity",
      items: [
        { name: "Network Security (RIP/OSPF)", level: 85 },
        { name: "Penetration Testing", level: 75 },
        { name: "Cryptography", level: 80 }
      ]
    }
  ],
  projects: [
    {
      id: "crypto-prediction",
      title: "Crypto Trend Prediction",
      type: "AI / Deep Learning",
      description: "Final Year Project. AI-driven system to predict Bitcoin price trends using LSTM, GRU, and Mamba models. Achieved high accuracy in financial forecasting.",
      tech: ["Python", "TensorFlow", "Mamba", "Pandas"],
      github: "#",
      features: ["Historical time-series analysis", "Multi-model comparison", "Real-time data fetching"]
    },
    {
      id: "rag-assistant",
      title: "University Assistant (RAG)",
      type: "AI / GenAI",
      description: "A RAG-based chatbot for student queries. Uses a custom automated pipeline to scrape and index university data.",
      tech: ["LangChain", "Groq (Llama 3)", "Pinecone", "Streamlit"],
      github: "https://github.com/haseeb8081/sukkur-iba-assistant",
      features: ["Real-time university knowledge base", "Scalable vector indexing", "Zero-shot answering"]
    },
    {
      id: "sql-gen",
      title: "AI SQL Generator",
      type: "Web / AI",
      description: "Translates natural language to production-ready SQL statements. Supports both cloud and local LLMs.",
      tech: ["Next.js", "Gemini API", "PostgreSQL", "Tailwind"],
      github: "https://github.com/haseeb8081/AI-Sql-Generator-",
      features: ["Natural language processing", "Local LLM support (Llama 2)", "Real-time DB querying"]
    },
    {
      id: "shop-platform",
      title: "E-Commerce Platform",
      type: "Web Development",
      description: "Modern marketplace with high performance and interactive UI. Integrated secure payment systems.",
      tech: ["Next.js 15", "TypeScript", "Stripe", "NextAuth"],
      github: "https://github.com/haseeb8081/revollution-perfume-site",
      features: ["JWT Authentication", "Stripe integration", "Admin dashboard"]
    }
  ],
  education: {
    degree: "B.E. Computer Systems Engineering",
    university: "Sukkur IBA University",
    period: "2022 - 2026",
    cgpa: "3.55",
    coursework: ["Artificial Intelligence", "Machine Learning", "Data Science", "Computer Networks", "Cybersecurity"]
  },
  experience: [
    {
       role: "Computer Systems Engineer",
       company: "Projects & Research",
       period: "2022 - 2026",
       tasks: [
         "Led the development of a gesture-based PC controller using Arduino.",
         "Researched DDoS attack mitigation using Transformers."
       ]
    }
  ],
  contact: {
    email: "haseeb.becsef22@iba-suk.edu.pk",
    linkedin: "https://linkedin.com/in/haseebrajput",
    github: "https://github.com/haseebrajput",
    mobile: "0335-0268835"
  },
  certifications: [
    { title: "Networking Basics", issuer: "Cisco" },
    { title: "SQL-Injection Attacks", issuer: "EC-Council" },
    { title: "Introduction To Cybersecurity", issuer: "Cisco" },
    { title: "Supervised Machine Learning: Regression and Classification", issuer: "Coursera/Stanford" },
    { title: "Start prompting like a pro", issuer: "Credential" },
    { title: "Penetration testing, Thread hunting and cryptography", issuer: "Coursera" }
  ],
  publications: [
    {
      title: "Mitigation of DDoS Attacks Using Machine Learning, Deep Learning, and Transformers",
      url: "https://doi.org/10.61503/Ijmcp.v2i1.181",
      date: "Latest Research"
    }
  ]
};
