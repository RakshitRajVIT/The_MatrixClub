import { motion } from 'framer-motion';
import MatrixRain from '@/components/MatrixRain';
import MatrixCard from '@/components/MatrixCard';
import GlitchText from '@/components/GlitchText';
import { Target, Eye, Zap, Shield } from 'lucide-react';

const timelineEvents = [
  { year: '2020', title: 'Genesis', desc: 'The seed was planted. A group of visionaries saw beyond the ordinary.' },
  { year: '2021', title: 'Awakening', desc: 'First workshops conducted. The collective grows. Skills multiply.' },
  { year: '2022', title: 'Evolution', desc: 'Major projects launched. Recognition achieved. Boundaries pushed.' },
  { year: '2023', title: 'Expansion', desc: 'Inter-college collaborations. National competitions. Victory claimed.' },
  { year: '2024', title: 'Transcendence', desc: 'AR/VR integration. AI adoption. The future embraced.' },
];

const values = [
  { icon: Target, title: 'Our Mission', desc: 'To cultivate a thriving ecosystem where creativity meets technology, empowering students to master multimedia arts and push the boundaries of digital expression.' },
  { icon: Eye, title: 'Our Vision', desc: 'To be the premier multimedia collective, recognized for innovation, excellence, and producing industry-ready digital creators who shape the future of media.' },
  { icon: Zap, title: 'Our Energy', desc: 'Fueled by passion, driven by curiosity, and united by a shared love for all things creative and digital. We learn, we create, we inspire.' },
  { icon: Shield, title: 'Our Code', desc: 'Collaboration over competition. Quality over quantity. Innovation over imitation. Community over isolation. These are the principles that guide us.' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-20">
      <MatrixRain opacity={0.1} density={0.4} />
      <div className="fixed inset-0 matrix-grid-bg opacity-20 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-mono text-sm text-muted-foreground mb-4 block">
              {'>'} SYSTEM.ABOUT.DECODE()
            </span>
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-foreground matrix-glow-intense mb-6">
              <GlitchText text="THE STORY OF" delay={0.2} />
              <br />
              <GlitchText text="THE MATRIX" delay={0.4} />
            </h1>
            <p className="text-muted-foreground font-mono text-lg">
              Every system has an origin. Every collective has a purpose.
              <br />
              Decrypt the data. Understand the journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="font-orbitron text-3xl font-bold text-foreground text-center mb-16 matrix-glow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            SYSTEM EVOLUTION LOG
          </motion.h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Central line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground to-transparent hidden md:block" />

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-2 border-foreground rounded-full hidden md:block matrix-box-glow" />
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <MatrixCard hover={false}>
                    <div className="font-orbitron text-2xl font-bold text-foreground matrix-glow mb-2">
                      {event.year}
                    </div>
                    <div className="font-orbitron text-lg text-accent-foreground mb-2">
                      {event.title}
                    </div>
                    <p className="text-muted-foreground font-mono text-sm">
                      {event.desc}
                    </p>
                  </MatrixCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-24 border-t border-border/30">
        <div className="container mx-auto px-4">
          <motion.h2
            className="font-orbitron text-3xl font-bold text-foreground text-center mb-16 matrix-glow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            CORE DIRECTIVES
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <MatrixCard key={index} delay={index * 0.1} className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-foreground/30 rounded">
                    <value.icon className="w-8 h-8 text-foreground matrix-glow" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </MatrixCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.blockquote
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl text-foreground/20 mb-4">"</div>
            <p className="font-orbitron text-2xl md:text-3xl text-foreground matrix-glow mb-6">
              The Matrix is everywhere. It is all around us.
              <br />
              Even now, in this very room.
            </p>
            <cite className="text-muted-foreground font-mono">
              — Morpheus
            </cite>
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
};

export default About;
