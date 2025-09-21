import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Editing Software",
      icon: "🎬",
      skills: [
        { name: "DaVinci Resolve", level: 95, description: "Advanced color grading & editing" },
        { name: "Adobe Premiere Pro", level: 90, description: "Professional video editing" },
        { name: "Microsoft Clipchamp", level: 85, description: "Simple and beginner-friendly editing workflows" },
        { name: "Adobe After Effects", level: 80, description: "Basic motion graphics" },
      ]
    },
    {
      title: "Post-Production",
      icon: "🎨",
      skills: [
        { name: "Color Grading", level: 95, description: "Cinematic color correction" },
        { name: "Audio Post", level: 88, description: "Sound design & mixing" },
        { name: "Motion Graphics", level: 85, description: "After Effects & titles" },
        { name: "VFX Compositing", level: 80, description: "Visual effects integration" },
      ]
    },
    {
      title: "Technical Skills",
      icon: "⚙️",
      skills: [
        { name: "Workflow Optimization", level: 92, description: "Efficient pipeline setup" },
        { name: "Media Management", level: 90, description: "Asset organization" },
        { name: "Codec Knowledge", level: 88, description: "Format optimization" },
        { name: "Hardware Setup", level: 85, description: "System configuration" },
      ]
    }
  ];

  const tools = [
    { name: "DaVinci Resolve", logo: "🎯" },
    { name: "Adobe Creative Suite", logo: "🔺" },
    { name: "Vizzy", logo: "🎵" },
    { name: "blur", logo: "🎲" },
    { name: "Clipchamp", logo: "📹" },
    { name: "Blackmagic Camera", logo: "📸" },
  ];

  return (
    <section id="skills" ref={ref} className="section-padding bg-gradient-dark">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mastery of industry-leading tools and techniques to deliver professional-grade video content.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-strong p-8 rounded-xl"
            >
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h3 className="text-2xl font-bold text-secondary">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-foreground">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1 }}
                        className="absolute top-0 left-0 h-full w-full bg-gradient-primary opacity-30 animate-glow-pulse rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Software */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8">
            Preferred <span className="text-accent">Tools</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass p-6 rounded-xl text-center transition-smooth hover:glow-primary"
              >
                <div className="text-3xl mb-3">{tool.logo}</div>
                <p className="text-sm font-medium text-muted-foreground">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="glass-strong p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">DaVinci Resolve Certified Trainer</h4>
                  <p className="text-sm text-muted-foreground">Blackmagic Design</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold">Adobe Certified Expert</h4>
                  <p className="text-sm text-muted-foreground">Premiere Pro & After Effects</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;