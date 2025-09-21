import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "10+", label: "Happy Clients" },
    { number: "100k+", label: "Views Generated" },
  ];

  const experience = [
  {
    year: "2025-Present",
    role: "Social Media Lead",
    company: "GLA Club - VIT Chennai",
    description: "Overseeing content planning and scheduling for multiple campaigns, optimizing engagement strategies while managing large-scale cultural events with 500+ attendees."
  },
  {
    year: "2025-Present",
    role: "Social Media Lead",
    company: "CloudOps Club - VIT Chennai",
    description: "Managing the club’s social media presence by planning, creating, and scheduling engaging content to boost visibility and student participation."
  },
  {
    year: "2025-Present",
    role: "Social Media Lead",
    company: "IEEE Photonics Club - VIT Chennai",
    description: "Handling digital outreach through creative posts, event promotions, and engagement strategies to strengthen the club’s online identity."
  },
  {
    year: "2024-Present",
    role: "Lead (Design Department)",
    company: "Game Development Club - VIT Chennai",
    description: "Spearheaded technical webinars and workshops, designed 10+ event posters that boosted participation by 30%, and enhanced design workflows with Adobe Express, Photoshop, and Figma."
  }
];



  return (
    <section id="about" ref={ref} className="section-padding bg-gradient-dark">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-secondary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about storytelling through the art of video editing, with expertise in DaVinci Resolve, 
            Adobe Premiere Pro, and advanced color grading techniques.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-secondary">My Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Computer Science student at VIT Chennai with a strong passion for video editing and digital storytelling. I enjoy blending creativity with technology to bring ideas to life through engaging visuals and smooth, impactful edits.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise lies in crafting compelling narratives through precise editing, advanced color grading, and seamless audio post-production. I specialize in DaVinci Resolve’s powerful workflow, delivering cinematic quality that consistently exceeds client expectations.
            </p>
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1AdtX350V0awUCGbWc-lCQq6hRuowIIRE"
              download="Dhyan_Salavi_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-gradient-secondary text-secondary-foreground font-semibold rounded-lg transition-smooth glow-secondary"
            >
                Download Resume
            </motion.a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass-strong p-6 text-center rounded-xl"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Professional <span className="text-accent">Experience</span>
          </h3>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="glass p-6 rounded-xl border-l-4 border-accent"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {exp.year}
                  </span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;