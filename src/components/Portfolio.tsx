import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const Portfolio: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'case-study', label: 'Case Studies' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'music-video', label: 'Music Videos' },
  ];

  const projects = [
    {
      id: 1,
      title: "Startup Autopsy - Byju’s",
      category: "case-study",
      duration: "6:00",
      description: "A detailed case study video explaining the downfall of Byju’s, once valued at $22 billion, highlighting poor decisions and rapid expansion that led to heavy losses.",
      thumbnail: "https://i.postimg.cc/jd1vvnBf/Screenshot-2025-09-21-145910.png",
      tags: ["DaVinci Resolve", "Case Study", "Storytelling"],
      link: "https://drive.google.com/file/d/1x-WyEuyYevImc7_Q-UIbDqNBJVCdue6-/view?usp=sharing"
    },
    {
      id: 2,
      title: "Clutch Edit - Valorant",
      category: "gaming",
      duration: "0:30",
      description: "High-intensity Valorant clip edited with enhanced pacing, synced effects, and resolution upscaling for a smooth, engaging experience.",
      thumbnail: "https://i.postimg.cc/5tpZ4qsr/OIP-1.webp",
      tags: ["DaVinci Resolve", "Clipchamp", "Video2X"],
      link: "https://drive.google.com/file/d/1R0d_BAkBbaFMIsMAem4sMZdWRhlEwRCz/view?usp=sharing"
    },
    {
      id: 3,
      title: "Worn Out - Lyrical Music Video",
      category: "music-video",
      duration: "2:45",
      description: "An engaging lyrical music video with smooth text animations, vibrant transitions, and color grading synced to the rhythm of the song.",
      thumbnail: "https://i.postimg.cc/zX026SG2/Screenshot-2025-09-21-151358.png",
      tags: ["DaVinci Resolve", "Clipchamp", "vizzy.io"],
      link: "https://drive.google.com/file/d/1ge_1jeyZ6AQWhKoW07Q36hafg-nagGQD/view?usp=sharing"
    },
    {
      id: 4,
      title: "GLA 2024-25 - Throwback",
      category: "throwback video",
      duration: "1:15",
      description: "A nostalgic throwback video capturing memorable moments from the GLA 2024-25 events, featuring dynamic transitions and upbeat music.",
      thumbnail: "https://i.postimg.cc/d3VH97m7/Screenshot-2025-09-21-153702.png",
      tags: ["DaVinci Resolve", "Clipchamp", "Storytelling"],
      link: "https://drive.google.com/file/d/1jyC8ju_cQeI8i2ogaBfdpnvCdKXx-TcU/view?usp=drive_link"
    },
    {
      id: 5,
      title: "Ultimate Treasure Hunt - Event Promo",
      category: "event promo",
      duration: "0:19",
      description: "A quick, energetic promo video for the Ultimate Treasure Hunt event, designed to showcase the amount of joy participants experienced.",
      thumbnail: "https://i.postimg.cc/FKHsSv7T/Screenshot-2025-09-21-154505.png",
      tags: ["DaVinci Resolve", "blur", "Event Promo"],
      link: "https://drive.google.com/file/d/1UBL8S5hK-LmDiQH71xhn7mYu_u8GDN6u/view?usp=drive_link"
    },
    {
      id: 6,
      title: "DJ79 - Personal Edit",
      category: "personal edit",
      duration: "0:19",
      description: "A personal edit video showcasing my moments from my short trip to Pondicherry, enhanced with dynamic transitions and effects.",
      thumbnail: "https://i.postimg.cc/8c3wnmhf/Screenshot-2025-09-21-162850.png",
      tags: ["DaVinci Resolve", "blur","Fusion", "Personal Edit"],
      link: "https://drive.google.com/file/d/1_tkwcEghu5rt3jBymBAgaA0ODgkggJ_w/view?usp=drive_link"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" ref={ref} className="section-padding">
      <div className="container-base">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated selection of my creative work — from startup case studies to gaming edits and lyrical music videos.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium transition-smooth ${
                selectedCategory === category.id
                  ? 'bg-gradient-primary text-primary-foreground glow-primary'
                  : 'glass text-muted-foreground hover:text-foreground hover:glow-primary'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-strong rounded-xl overflow-hidden group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />

                  {/* Play Button */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth"
                  >
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center glow-primary">
                      <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </motion.div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-sm">
                    {project.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-muted text-xs rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Showreel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-strong p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Watch My Complete Showreel</h3>
            <p className="text-muted-foreground mb-6">
              See the full range of my work in this comprehensive showreel.
            </p>
            <motion.a
              href="https://drive.google.com/file/d/1YHfmEIYIRzFwSaGK04TxxqckJt07vxtF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-accent text-accent-foreground font-semibold rounded-lg transition-smooth glow-accent inline-block"
            >
              View Showreel
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
