import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import YouTubeLogo from '/mnt/data/7c1a8bc5-49fa-417f-b25d-2551eecf1ca4.png';
const InstagramLogo = '/mnt/data/7c1a8bc5-49fa-417f-b25d-2551eecf1ca4.png';
const YouTubeLogoURL = 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg';
const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "dhyansalavi15@gmail.com",
      href: "mailto:dhyansalavi15@gmail.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 7227813924",
      href: "tel:+917227813924"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Chennai, India",
      href: "#"
    },
    {
      icon: "💼",
      label: "Instagram",
      value: "Connect with me",
      href: "https://www.instagram.com/dhyansalavi/"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Create <span className="text-primary">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-secondary">Get In Touch</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you need a commercial, documentary, music video, or corporate content, 
                I'm here to help bring your story to life with professional quality and creative excellence.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 glass p-4 rounded-lg transition-smooth hover:glow-primary block"
                >
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8 border-t border-border"
            >
              <h4 className="text-lg font-semibold mb-4">Follow My Work</h4>
              <div className="flex space-x-4">
                {[ 'YouTube', 'Instagram'].map((platform, index) => (
                  <motion.a
                    key={platform}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 glass rounded-lg flex items-center justify-center transition-smooth hover:glow-secondary"
                    href="#"
                  >
                    <span className="text-sm font-bold">{platform[0]}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-strong p-8 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                >
                  <option value="">Select a project type</option>
                  <option value="commercial">Commercial</option>
                  <option value="documentary">Documentary</option>
                  <option value="music-video">Music Video</option>
                  <option value="corporate">Corporate Video</option>
                  <option value="wedding">Wedding</option>
                  <option value="short-film">Short Film</option>
                  <option value="social-media">Social Media Content</option>
                  <option value="event">Event Coverage</option>
                  <option value="animation">Animation/Motion Graphics</option>
                  <option value="gaming montages">Gaming</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
                  placeholder="Tell me about your project, timeline, budget, and vision..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg transition-smooth glow-primary"
              >
                Send Message
              </motion.button>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-6 text-center"
            >
              <p className="text-sm text-muted-foreground">
                Typical response time: <span className="text-secondary font-medium">within 24 hours</span>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Availability Notice */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="glass p-6 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2 text-accent">Currently Available</h3>
            <p className="text-muted-foreground">
              I'm accepting new projects for 2025. Book your consultation today to secure your spot.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;