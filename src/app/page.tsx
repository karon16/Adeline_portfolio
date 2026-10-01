"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30">
        <div className="h-20 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          <a className="flex items-center gap-3 group" href="#">
            <div className="w-8 h-8 bg-primary text-surface rounded-full flex items-center justify-center font-headline italic font-bold">
              A
            </div>
            <span className="hidden sm:inline-block font-body text-xs uppercase tracking-widest text-on-surface-variant font-medium border-l border-outline-variant/60 pl-3">
              Adeline Furaha
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-on-surface-variant">
            <a className="hover:text-primary transition-colors py-1" href="#about">About</a>
            <a className="hover:text-primary transition-colors py-1" href="#skills">Skills</a>
            <a className="hover:text-primary transition-colors py-1" href="#experience">Experience</a>
            <a className="hover:text-primary transition-colors py-1" href="#projects">Portfolio</a>
          </nav>
          <div className="flex items-center gap-4">
            <a className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-secondary transition-all duration-300 shadow-sm hover:-translate-y-0.5" href="#contact">
              Let's Work Together
            </a>
          </div>
        </div>
      </header>

      <main className="w-full pt-20">
        {/* HERO SECTION */}
        <section className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32 overflow-hidden">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            {/* Left: Confident Editorial Typography */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-body text-xs uppercase tracking-[0.2em] font-semibold text-secondary">
                  Communication & Marketing Professional
                </span>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="font-headline text-4xl sm:text-5xl lg:text-[4.25rem] leading-[1.08] text-primary font-normal tracking-tight max-w-2xl">
                Connecting <span className="italic font-normal text-secondary font-headline">people, ideas,</span> and opportunities.
              </motion.h1>
              <motion.p variants={fadeInUp} className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Entrepreneurial Thinker & Creative Strategist bridging refined cultural storytelling with rigorous commercial execution.
              </motion.p>
              <motion.div variants={fadeInUp} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-secondary transition-all duration-300 shadow-md hover:-translate-y-0.5" href="#projects">
                  View Portfolio
                </a>
              </motion.div>
            </div>
            
            {/* Right: Elegant Architectural Silhouette Portrait */}
            <motion.div variants={fadeInUp} className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-[2.5rem] bg-surface-container-high/80 -z-10 transform -rotate-1 border border-outline-variant/30"></div>
                <div className="relative rounded-[2.25rem] overflow-hidden shadow-2xl bg-surface-container-low border border-outline-variant/40 aspect-[4/5] bg-surface-variant flex items-center justify-center">
                   {/* Placeholder for Profile Picture */}
                   <span className="font-headline text-2xl text-on-surface-variant/50">Profile Picture</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT & VISION SECTION */}
        <section id="about" className="w-full bg-surface-container-low py-28 lg:py-36 border-y border-outline-variant/20">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            >
              <div className="lg:col-span-4">
                <span className="font-body text-xs uppercase tracking-[0.2em] font-semibold text-secondary block mb-3">About Me</span>
                <h2 className="font-headline text-3xl sm:text-4xl text-primary leading-tight font-normal">
                  Driven by creativity and cultural diversity.
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-12">
                <div className="font-body text-lg text-on-surface-variant space-y-6 leading-relaxed">
                  <p>
                    I am a creative and motivated digital marketer with a passion for social media management and content creation. While I’m still growing my professional experience, I have worked on various projects that showcase my ability to design engaging content, manage social media pages, and develop marketing strategies.
                  </p>
                </div>
                {/* Vision & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-outline-variant/40">
                  <div>
                    <span className="font-headline text-2xl text-secondary font-normal block mb-2">Vision</span>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      To inspire and connect people through creative and impactful digital marketing, leveraging storytelling, design, and strategy to build meaningful brand experiences.
                    </p>
                  </div>
                  <div>
                    <span className="font-headline text-2xl text-secondary font-normal block mb-2">Mission</span>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      To continuously grow and refine my skills in social media management, content creation, and marketing strategy while embracing creativity and cultural diversity. My goal is to contribute to brands and initiatives that foster inclusivity, innovation, and engagement in the digital space.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="w-full bg-secondary text-surface py-28 lg:py-36 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="font-body text-xs uppercase tracking-[0.2em] font-semibold text-secondary-fixed">Capabilities</span>
                <h2 className="font-headline text-3xl sm:text-5xl text-on-secondary font-normal mt-2 tracking-tight">Personal Skills</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Skill 1 */}
              <div className="p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 shadow-sm hover:shadow-md">
                <span className="font-headline text-4xl text-secondary-fixed font-light mb-6 block">01</span>
                <h3 className="font-headline text-2xl text-on-secondary mb-3 font-normal">Content Creation</h3>
                <p className="font-body text-sm text-surface-container leading-relaxed">
                  Crafting engaging and visually appealing content for different audiences.
                </p>
              </div>
              {/* Skill 2 */}
              <div className="p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 shadow-sm hover:shadow-md">
                <span className="font-headline text-4xl text-secondary-fixed font-light mb-6 block">02</span>
                <h3 className="font-headline text-2xl text-on-secondary mb-3 font-normal">Social Media Management</h3>
                <p className="font-body text-sm text-surface-container leading-relaxed">
                  Handling social media pages, creating strategies, and boosting engagement.
                </p>
              </div>
              {/* Skill 3 */}
              <div className="p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 shadow-sm hover:shadow-md">
                <span className="font-headline text-4xl text-secondary-fixed font-light mb-6 block">03</span>
                <h3 className="font-headline text-2xl text-on-secondary mb-3 font-normal">Graphic Design & Photography</h3>
                <p className="font-body text-sm text-surface-container leading-relaxed">
                  Combining visual art and photography to create compelling brand assets.
                </p>
              </div>
              {/* Skill 4 */}
              <div className="p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 shadow-sm hover:shadow-md">
                <span className="font-headline text-4xl text-secondary-fixed font-light mb-6 block">04</span>
                <h3 className="font-headline text-2xl text-on-secondary mb-3 font-normal">Communication & Collaboration</h3>
                <p className="font-body text-sm text-surface-container leading-relaxed">
                  Working effectively with teams and engaging with online communities.
                </p>
              </div>
              {/* Skill 5 */}
              <div className="p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 shadow-sm hover:shadow-md lg:col-span-2">
                <span className="font-headline text-4xl text-secondary-fixed font-light mb-6 block">05</span>
                <h3 className="font-headline text-2xl text-on-secondary mb-3 font-normal">Adaptability & Willingness to Learn</h3>
                <p className="font-body text-sm text-surface-container leading-relaxed">
                  Quickly learning new tools and trends to stay ahead in the digital space. Always eager to improve and take on new challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="w-full bg-surface-container-low py-28 lg:py-36 border-t border-outline-variant/30">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <span className="font-body text-xs uppercase tracking-[0.2em] font-semibold text-secondary block mb-3">Chronology</span>
                <h2 className="font-headline text-3xl sm:text-4xl text-primary leading-tight font-normal">
                  Work Experience
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <div className="p-8 rounded-3xl bg-surface border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-headline text-2xl text-primary font-normal">Social Media Manager</h3>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-4 font-medium">KijanaRise</p>
                </div>
                
                <div className="p-8 rounded-3xl bg-surface border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-headline text-2xl text-primary font-normal">Social Media Manager</h3>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-4 font-medium">CurriSex</p>
                </div>

                <div className="p-8 rounded-3xl bg-surface border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="font-headline text-2xl text-primary font-normal">Social Media Intern</h3>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-4 font-medium">HelpService</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="projects" className="w-full bg-surface py-28 lg:py-36">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
              <div>
                <span className="font-body text-xs uppercase tracking-[0.2em] font-semibold text-secondary">Selected Case Studies</span>
                <h2 className="font-headline text-3xl sm:text-5xl text-primary font-normal mt-2 tracking-tight">Project Portfolio</h2>
              </div>
            </div>
            
            <div className="space-y-24">
              {/* Project 1 */}
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-20 border-b border-outline-variant/30">
                <div className="lg:col-span-7 overflow-hidden rounded-3xl bg-surface-container-low shadow-lg group aspect-[16/10] bg-surface-variant flex items-center justify-center">
                   <span className="font-headline text-2xl text-on-surface-variant/50">Fashion Show Photos</span>
                </div>
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-body text-xs uppercase tracking-widest text-secondary font-semibold">Final Art Project</span>
                    </div>
                    <h3 className="font-headline text-3xl sm:text-4xl text-primary font-normal">Home Through Fashion and Music</h3>
                    <p className="font-body text-base text-on-surface-variant mt-4 leading-relaxed">
                      I organized a fashion show to celebrate the beauty of diversity and explore the meaning of home across different cultures. To bring this vision to life, I featured models from various African countries.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-on-surface">
                    <span className="px-3 py-1 rounded-full bg-surface-container">Event Planning</span>
                    <span className="px-3 py-1 rounded-full bg-surface-container">Cultural Heritage</span>
                  </div>
                </div>
              </article>
              
              {/* Project 2 */}
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-20 border-b border-outline-variant/30">
                <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-body text-xs uppercase tracking-widest text-secondary font-semibold">Social Media Management</span>
                    </div>
                    <h3 className="font-headline text-3xl sm:text-4xl text-primary font-normal">HelpService</h3>
                    <p className="font-body text-base text-on-surface-variant mt-4 leading-relaxed">
                      Designed social media posts and strategies for HelpService, focusing on visual identity and audience engagement.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2 overflow-hidden rounded-3xl bg-surface-container-low shadow-lg group aspect-[16/10] bg-surface-variant flex items-center justify-center">
                   <span className="font-headline text-2xl text-on-surface-variant/50">HelpService Visuals</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="w-full bg-surface-container py-28 lg:py-36">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="font-body text-xs uppercase tracking-[0.2em] font-semibold text-secondary">Initiate Engagement</span>
                  </div>
                  <h2 className="font-headline text-3xl sm:text-5xl text-primary leading-tight font-normal">
                    I'm excited about the opportunities ahead!
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-surface border border-outline-variant/30 flex items-center gap-4">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-on-surface-variant font-medium block">Email</span>
                      <a className="font-body text-base text-primary font-semibold hover:text-secondary transition-colors" href="mailto:furahbuhendwa25@gmail.com">furahbuhendwa25@gmail.com</a>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-surface border border-outline-variant/30 flex items-center gap-4">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-on-surface-variant font-medium block">Phone / WhatsApp</span>
                      <a className="font-body text-base text-primary font-semibold hover:text-secondary transition-colors" href="tel:+254768950936">+254 768 950 936</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 py-16">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-on-surface-variant">
            <p>© {new Date().getFullYear()} Adeline Furaha. All rights reserved.</p>
            <p className="tracking-wide">Communication & Marketing Professional</p>
          </div>
        </div>
      </footer>
    </>
  );
}
