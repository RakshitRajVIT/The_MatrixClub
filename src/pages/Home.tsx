import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MatrixRain from '@/components/MatrixRain';
import GlitchText from '@/components/GlitchText';
import TypewriterText from '@/components/TypewriterText';
import MatrixButton from '@/components/MatrixButton';
import MatrixCard from '@/components/MatrixCard';
import { ArrowRight, Code, Film, Palette, Box, Sparkles } from 'lucide-react';

const skills = ['Video Editing', 'Graphic Design', 'AR/VR', 'UI/UX', 'Motion Graphics', '3D Modeling', 'Photography', 'Animation'];

const features = [
  { icon: Film, title: 'Video Production', desc: 'Cinematic storytelling through cutting-edge video editing' },
  { icon: Palette, title: 'Design Systems', desc: 'Creating visual identities that resonate and inspire' },
  { icon: Code, title: 'Digital Innovation', desc: 'Pushing boundaries with AR, VR, and interactive media' },
  { icon: Box, title: '3D Creation', desc: 'Sculpting digital realities in three dimensions' },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <MatrixRain opacity={0.15} density={0.6} />
      
      {/* Grid background */}
      <div className="fixed inset-0 matrix-grid-bg opacity-30 pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Decorative element */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-foreground" />
              <span className="font-mono text-sm text-muted-foreground">[ SYSTEM ONLINE ]</span>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-foreground" />
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="font-orbitron text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-foreground matrix-glow-intense">
                <GlitchText text="WELCOME TO" delay={0.5} />
              </span>
              <br />
              <span className="text-foreground matrix-glow-intense">
                <GlitchText text="THE MATRIX" delay={0.8} />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-6 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Where Multimedia Meets Digital Reality
            </motion.p>

            {/* Typing animation */}
            <motion.div
              className="h-10 mb-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span className="text-foreground text-xl lg:text-2xl">{'>'} Currently exploring: </span>
              <TypewriterText
                texts={skills}
                className="text-accent-foreground text-xl lg:text-2xl matrix-glow"
              />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <Link to="/about">
                <MatrixButton className="text-lg">
                  ENTER THE MATRIX
                  <ArrowRight className="w-5 h-5" />
                </MatrixButton>
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ delay: 2, y: { repeat: Infinity, duration: 2 } }}
            >
              <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-foreground rounded-full animate-pulse" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Side decorations */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="space-y-4 opacity-30">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="font-mono text-xs text-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.5, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {`0x${Math.random().toString(16).slice(2, 10)}`}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-foreground matrix-glow mb-6">
              DIGITAL CAPABILITIES
            </h2>
            <p className="text-muted-foreground font-mono text-lg md:text-xl max-w-3xl mx-auto">
              Unlocking the full spectrum of multimedia creation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <MatrixCard key={index} delay={index * 0.1}>
                <feature.icon className="w-12 h-12 text-foreground mb-6 matrix-glow" />
                <h3 className="font-orbitron text-xl lg:text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base lg:text-lg font-mono">
                  {feature.desc}
                </p>
              </MatrixCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 border-t border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: '50+', label: 'Active Members' },
              { value: '100+', label: 'Projects Completed' },
              { value: '25+', label: 'Events Hosted' },
              { value: '∞', label: 'Possibilities' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="font-orbitron text-5xl md:text-6xl lg:text-7xl font-bold text-foreground matrix-glow mb-4">
                  {stat.value}
                </div>
                <div className="font-mono text-base md:text-lg text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-16 h-16 text-foreground mx-auto mb-8 matrix-glow" />
            <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-foreground matrix-glow mb-6">
              READY TO BREAK FREE?
            </h2>
            <p className="text-muted-foreground font-mono text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join the collective. Unlock your creative potential. Become an operator.
            </p>
            <Link to="/join">
              <MatrixButton variant="secondary" className="text-xl px-10 py-4">
                APPLY NOW
                <ArrowRight className="w-6 h-6" />
              </MatrixButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
