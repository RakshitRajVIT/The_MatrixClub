import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from '@/components/MatrixRain';
import MatrixCard from '@/components/MatrixCard';
import GlitchText from '@/components/GlitchText';
import { X, Play, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tools: string[];
  thumbnail: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'NEON DREAMS',
    category: 'Short Film',
    description: 'A cyberpunk narrative exploring digital consciousness and the thin line between reality and simulation. Shot in 4K with custom color grading and VFX.',
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    featured: true,
  },
  {
    id: 2,
    title: 'PULSE',
    category: 'Motion Graphics',
    description: 'Dynamic visual identity system for a music festival. Features reactive audio visualization and kinetic typography.',
    tools: ['After Effects', 'Cinema 4D', 'Trapcode'],
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600',
    featured: true,
  },
  {
    id: 3,
    title: 'GENESIS UI',
    category: 'UI/UX Design',
    description: 'Complete design system for a next-gen fintech application. Minimalist, accessible, and built for scale.',
    tools: ['Figma', 'Protopie', 'Principle'],
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600',
    featured: false,
  },
  {
    id: 4,
    title: 'VOID WALKER',
    category: '3D Model',
    description: 'High-poly character design for a sci-fi game concept. Fully rigged with custom materials and textures.',
    tools: ['Blender', 'Substance Painter', 'ZBrush'],
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600',
    featured: false,
  },
  {
    id: 5,
    title: 'CHROMATIC',
    category: 'Photography',
    description: 'Urban exploration photo series capturing the interplay of light, architecture, and human presence in metropolitan spaces.',
    tools: ['Lightroom', 'Photoshop', 'Capture One'],
    thumbnail: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600',
    featured: true,
  },
  {
    id: 6,
    title: 'SYNTHWAVE POSTER SERIES',
    category: 'Graphic Design',
    description: 'Retro-futuristic poster collection inspired by 80s aesthetics. Features custom typography and gradient work.',
    tools: ['Illustrator', 'Photoshop'],
    thumbnail: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600',
    featured: false,
  },
  {
    id: 7,
    title: 'ECHO VR',
    category: 'AR/VR',
    description: 'Immersive virtual reality experience exploring memory and nostalgia through interactive spatial storytelling.',
    tools: ['Unity', 'Oculus SDK', 'Blender'],
    thumbnail: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600',
    featured: true,
  },
  {
    id: 8,
    title: 'FLUID DYNAMICS',
    category: 'Animation',
    description: 'Abstract animation exploring organic forms and fluid simulations. Created for a digital art exhibition.',
    tools: ['Houdini', 'After Effects', 'Octane'],
    thumbnail: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=600',
    featured: false,
  },
];

const categories = ['All', 'Short Film', 'Motion Graphics', 'UI/UX Design', '3D Model', 'Photography', 'Graphic Design', 'AR/VR', 'Animation'];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
              {'>'} PROJECTS.RENDER_ALL()
            </span>
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-foreground matrix-glow-intense mb-6">
              <GlitchText text="DIGITAL REALITIES" delay={0.2} />
              <br />
              <GlitchText text="WE CREATE" delay={0.4} />
            </h1>
            <p className="text-muted-foreground font-mono text-lg">
              Every pixel tells a story. Every frame is a universe.
              <br />
              Explore the collective's digital creations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 font-mono text-xs border transition-all ${
                  activeCategory === category
                    ? 'border-foreground text-foreground matrix-box-glow'
                    : 'border-border text-muted-foreground hover:border-foreground/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden border border-border/50 bg-card/50 hover:border-foreground transition-all duration-300">
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex items-center gap-2 text-foreground font-mono">
                          <Play className="w-5 h-5" />
                          <span>VIEW PROJECT</span>
                        </div>
                      </div>
                      {/* Scanlines */}
                      <div className="absolute inset-0 scanlines opacity-50 pointer-events-none" />
                      {/* Featured badge */}
                      {project.featured && (
                        <div className="absolute top-2 right-2 px-2 py-1 bg-foreground text-background text-xs font-mono">
                          FEATURED
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <span className="text-xs font-mono text-muted-foreground">
                        {project.category}
                      </span>
                      <h3 className="font-orbitron text-lg font-bold text-foreground mt-1 group-hover:matrix-glow transition-all">
                        {project.title}
                      </h3>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-foreground/30 group-hover:border-foreground transition-colors" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-foreground/30 group-hover:border-foreground transition-colors" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-foreground/30 group-hover:border-foreground transition-colors" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-foreground/30 group-hover:border-foreground transition-colors" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-background/90 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              className="relative w-full max-w-4xl bg-card border border-border overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/50 text-foreground hover:bg-background transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 scanlines opacity-30" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-mono bg-foreground/10 text-foreground border border-foreground/30">
                    {selectedProject.category}
                  </span>
                  {selectedProject.featured && (
                    <span className="px-3 py-1 text-xs font-mono bg-foreground text-background">
                      FEATURED
                    </span>
                  )}
                </div>

                <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground matrix-glow mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-muted-foreground font-mono mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <span className="text-xs font-mono text-muted-foreground mb-2 block">
                    TOOLS USED:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono border border-border text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="flex items-center gap-2 text-foreground font-mono hover:matrix-glow transition-all">
                  <ExternalLink className="w-4 h-4" />
                  VIEW FULL PROJECT
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
