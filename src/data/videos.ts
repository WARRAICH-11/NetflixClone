export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  genre: string[];
  rating: number;
  releaseYear: number;
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  videos: Video[];
}

// Educational YouTube videos about AI, ML, Python, Coding, and Tech
export const videos: Video[] = [
  {
    id: "1",
    youtubeId: "aircAruvnKk",
    title: "But what is a Neural Network?",
    description: "Deep learning explained by 3Blue1Brown. A visual introduction to neural networks and deep learning, breaking down the mathematics and intuition behind how machines learn.",
    category: "Machine Learning",
    duration: "19:13",
    genre: ["AI", "Machine Learning", "Education"],
    rating: 4.9,
    releaseYear: 2017,
    featured: true,
  },
  {
    id: "2",
    youtubeId: "rfscVS0vtbw",
    title: "Python Tutorial - Full Course for Beginners",
    description: "Learn Python programming from scratch in this comprehensive course. Perfect for beginners who want to master Python fundamentals and start building real projects.",
    category: "Python",
    duration: "4:26:52",
    genre: ["Python", "Programming", "Education"],
    rating: 4.8,
    releaseYear: 2018,
    featured: false,
  },
  {
    id: "3",
    youtubeId: "Nt-TA-RGbWg",
    title: "What is Generative AI?",
    description: "Google's comprehensive introduction to Generative AI, explaining how ChatGPT, DALL-E, and other AI models work. Essential viewing for understanding the AI revolution.",
    category: "Artificial Intelligence",
    duration: "22:07",
    genre: ["AI", "Generative AI", "Education"],
    rating: 4.9,
    releaseYear: 2023,
    featured: true,
  },
  {
    id: "4",
    youtubeId: "Ke90Tje7VS0",
    title: "React Course - Beginner's Tutorial",
    description: "Master React.js from the ground up. Build modern, interactive user interfaces with this complete beginner's guide to React development.",
    category: "Web Development",
    duration: "11:55:27",
    genre: ["React", "JavaScript", "Web Development"],
    rating: 4.8,
    releaseYear: 2022,
    featured: false,
  },
  {
    id: "5",
    youtubeId: "HVsySz-h9r4",
    title: "Machine Learning for Everybody",
    description: "Kylie Ying's complete course on Machine Learning. Learn ML fundamentals, algorithms, and how to build your first ML models from scratch.",
    category: "Machine Learning",
    duration: "3:55:23",
    genre: ["Machine Learning", "Python", "Education"],
    rating: 4.7,
    releaseYear: 2021,
    featured: false,
  },
  {
    id: "6",
    youtubeId: "SzJ46YA_RaA",
    title: "The Future of AI - OpenAI CEO Sam Altman",
    description: "OpenAI CEO discusses the future of artificial intelligence, AGI, and how AI will transform society. Insights from the creator of ChatGPT on what's coming next.",
    category: "Artificial Intelligence",
    duration: "1:24:33",
    genre: ["AI", "Future Tech", "Innovation"],
    rating: 4.9,
    releaseYear: 2024,
    featured: true,
  },
  {
    id: "7",
    youtubeId: "qiQR5rTSshw",
    title: "JavaScript Course - Full Tutorial",
    description: "Learn JavaScript from scratch. This comprehensive course covers everything from basics to advanced concepts, including ES6+ features and modern JavaScript.",
    category: "Programming",
    duration: "7:40:00",
    genre: ["JavaScript", "Programming", "Web Development"],
    rating: 4.8,
    releaseYear: 2022,
    featured: false,
  },
  {
    id: "8",
    youtubeId: "c3hHhRME_XI",
    title: "Angular Full Course - TypeScript Framework",
    description: "Complete Angular tutorial for beginners. Build powerful single-page applications with Google's popular TypeScript-based framework.",
    category: "Web Development",
    duration: "10:16:58",
    genre: ["Angular", "TypeScript", "Web Development"],
    rating: 4.7,
    releaseYear: 2023,
    featured: false,
  },
  {
    id: "9",
    youtubeId: "LHBE6Q9XlzI",
    title: "AI and Robotics - The Future is Here",
    description: "Explore the intersection of AI and robotics. See how intelligent machines are revolutionizing manufacturing, healthcare, and daily life.",
    category: "Robotics",
    duration: "42:18",
    genre: ["AI", "Robotics", "Future Tech"],
    rating: 4.8,
    releaseYear: 2023,
    featured: false,
  },
  {
    id: "10",
    youtubeId: "r-uOLxNrNk8",
    title: "Data Science Full Course - Python",
    description: "Complete data science course using Python. Learn pandas, NumPy, matplotlib, and machine learning to analyze data and build predictive models.",
    category: "Data Science",
    duration: "12:20:50",
    genre: ["Data Science", "Python", "Machine Learning"],
    rating: 4.8,
    releaseYear: 2023,
    featured: false,
  },
  {
    id: "11",
    youtubeId: "RBSGKlAvoiM",
    title: "Deep Learning Specialization",
    description: "Andrew Ng's introduction to deep learning. Learn about neural networks, CNNs, RNNs, and how to build AI applications that can see, hear, and understand.",
    category: "Machine Learning",
    duration: "58:47",
    genre: ["Deep Learning", "AI", "Education"],
    rating: 4.9,
    releaseYear: 2021,
    featured: false,
  },
  {
    id: "12",
    youtubeId: "VqgUkExPvLY",
    title: "Python for Data Science - Full Course",
    description: "Master Python for data science and machine learning. Learn essential libraries like pandas, NumPy, and scikit-learn to become a data scientist.",
    category: "Data Science",
    duration: "10:53:32",
    genre: ["Python", "Data Science", "Education"],
    rating: 4.7,
    releaseYear: 2022,
    featured: false,
  },
  {
    id: "13",
    youtubeId: "tPYj3fFJGjk",
    title: "TensorFlow 2.0 Complete Course",
    description: "Learn TensorFlow 2.0 from scratch. Build neural networks, train models, and deploy AI applications using Google's powerful machine learning framework.",
    category: "Machine Learning",
    duration: "6:52:08",
    genre: ["TensorFlow", "Deep Learning", "Python"],
    rating: 4.8,
    releaseYear: 2020,
    featured: false,
  },
  {
    id: "14",
    youtubeId: "i_LwzRVP7bg",
    title: "The Rise of AI - What You Need to Know",
    description: "Comprehensive overview of AI's impact on jobs, society, and the future. Featuring insights from industry leaders at Google, Microsoft, and tech innovators.",
    category: "Artificial Intelligence",
    duration: "52:34",
    genre: ["AI", "Future Tech", "Career"],
    rating: 4.9,
    releaseYear: 2024,
    featured: false,
  },
  {
    id: "15",
    youtubeId: "kqtD5dpn9C8",
    title: "Node.js and Express.js - Full Course",
    description: "Build backend applications with Node.js and Express. Learn server-side JavaScript, REST APIs, databases, and how to create full-stack applications.",
    category: "Backend Development",
    duration: "8:16:48",
    genre: ["Node.js", "JavaScript", "Backend"],
    rating: 4.7,
    releaseYear: 2023,
    featured: false,
  },
  {
    id: "16",
    youtubeId: "vT5fpE0bzSY",
    title: "Git and GitHub for Beginners",
    description: "Master version control with Git and GitHub. Essential skills for every developer - learn commits, branches, pull requests, and collaboration.",
    category: "Developer Tools",
    duration: "1:08:25",
    genre: ["Git", "GitHub", "Programming"],
    rating: 4.8,
    releaseYear: 2020,
    featured: false,
  },
  {
    id: "17",
    youtubeId: "VnCTNE8ygq4",
    title: "Build AI Apps with ChatGPT API",
    description: "Learn to integrate OpenAI's ChatGPT API into your applications. Build intelligent chatbots, content generators, and AI-powered tools.",
    category: "Artificial Intelligence",
    duration: "1:42:15",
    genre: ["AI", "ChatGPT", "API Development"],
    rating: 4.9,
    releaseYear: 2023,
    featured: false,
  },
  {
    id: "18",
    youtubeId: "YRiyTteNMQ4",
    title: "Top 10 Skills to Learn in 2024",
    description: "Industry experts from Cisco, Google, and Amazon discuss the most in-demand tech skills. AI, cloud computing, cybersecurity, and more.",
    category: "Career Development",
    duration: "38:52",
    genre: ["Career", "Skills", "Technology"],
    rating: 4.8,
    releaseYear: 2024,
    featured: false,
  },
  {
    id: "19",
    youtubeId: "JJmcL1N2KQs",
    title: "Computer Vision with OpenCV - Python",
    description: "Master computer vision with OpenCV. Learn image processing, object detection, face recognition, and build AI systems that can see and understand images.",
    category: "Computer Vision",
    duration: "3:42:17",
    genre: ["AI", "Computer Vision", "Python"],
    rating: 4.7,
    releaseYear: 2022,
    featured: false,
  },
  {
    id: "20",
    youtubeId: "mBjPyte2ZZo",
    title: "Natural Language Processing - NLP",
    description: "Introduction to NLP with Python. Learn how machines understand human language, build chatbots, sentiment analysis, and text generation models.",
    category: "NLP",
    duration: "5:28:33",
    genre: ["NLP", "AI", "Python"],
    rating: 4.8,
    releaseYear: 2023,
    featured: false,
  },
];

export const categories: Category[] = [
  {
    id: "ai",
    name: "Artificial Intelligence & Machine Learning",
    videos: videos.filter((v) => 
      v.category === "Artificial Intelligence" || 
      v.category === "Machine Learning" ||
      v.genre.includes("AI") ||
      v.genre.includes("Machine Learning")
    ),
  },
  {
    id: "python",
    name: "Python Programming",
    videos: videos.filter((v) => 
      v.category === "Python" || 
      v.genre.includes("Python")
    ),
  },
  {
    id: "webdev",
    name: "Web Development - React & Angular",
    videos: videos.filter((v) => 
      v.category === "Web Development" ||
      v.genre.includes("React") ||
      v.genre.includes("Angular") ||
      v.genre.includes("JavaScript")
    ),
  },
  {
    id: "datascience",
    name: "Data Science & Analytics",
    videos: videos.filter((v) => 
      v.category === "Data Science" ||
      v.genre.includes("Data Science")
    ),
  },
  {
    id: "trending",
    name: "Most Popular",
    videos: videos.filter((v) => v.rating >= 4.8),
  },
  {
    id: "future",
    name: "Future of Tech & AI",
    videos: videos.filter((v) => 
      v.genre.includes("Future Tech") ||
      v.category === "Robotics" ||
      v.releaseYear >= 2023
    ),
  },
  {
    id: "skills",
    name: "Top Skills & Career Development",
    videos: videos.filter((v) => 
      v.category === "Career Development" ||
      v.genre.includes("Career") ||
      v.genre.includes("Skills")
    ),
  },
];

// Helper function to get YouTube thumbnail URL
export const getYouTubeThumbnail = (youtubeId: string, quality: 'default' | 'medium' | 'high' | 'maxres' = 'maxres'): string => {
  const qualityMap = {
    default: 'default.jpg',
    medium: 'mqdefault.jpg',
    high: 'hqdefault.jpg',
    maxres: 'maxresdefault.jpg',
  };
  return `https://img.youtube.com/vi/${youtubeId}/${qualityMap[quality]}`;
};
