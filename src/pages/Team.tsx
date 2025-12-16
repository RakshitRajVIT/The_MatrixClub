import { motion } from 'framer-motion';
import MatrixRain from '@/components/MatrixRain';
import MatrixCard from '@/components/MatrixCard';
import GlitchText from '@/components/GlitchText';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  skills: string[];
  image: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'ALEX CHEN',
    role: 'President',
    skills: ['Leadership', 'Video Production', 'Event Management'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    socials: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    id: 2,
    name: 'MAYA PATEL',
    role: 'Vice President',
    skills: ['UI/UX Design', 'Motion Graphics', 'Branding'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    socials: { linkedin: '#', instagram: '#' },
  },
  {
    id: 3,
    name: 'JORDAN BLAKE',
    role: 'Technical Lead',
    skills: ['3D Modeling', 'VFX', 'Game Development'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    socials: { github: '#', linkedin: '#' },
  },
  {
    id: 4,
    name: 'SARAH KIM',
    role: 'Creative Director',
    skills: ['Cinematography', 'Color Grading', 'Storytelling'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    socials: { instagram: '#', twitter: '#' },
  },
  {
    id: 5,
    name: 'DAVID OKONKWO',
    role: 'Design Lead',
    skills: ['Graphic Design', 'Typography', 'Illustration'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    socials: { linkedin: '#', instagram: '#' },
  },
  {
    id: 6,
    name: 'LUNA MARTINEZ',
    role: 'AR/VR Specialist',
    skills: ['Unity', 'Spatial Computing', 'Interactive Media'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    socials: { github: '#', linkedin: '#' },
  },
  {
    id: 7,
    name: 'RYAN COOPER',
    role: 'Video Lead',
    skills: ['Editing', 'Sound Design', 'Documentary'],
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400',
    socials: { twitter: '#', instagram: '#' },
  },
  {
    id: 8,
    name: 'EMMA WRIGHT',
    role: 'Photography Lead',
    skills: ['Portrait', 'Street Photography', 'Retouching'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
    socials: { instagram: '#', linkedin: '#' },
  },
];

const Team = () => {
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
              {'>'} TEAM.IDENTIFY_ALL()
            </span>
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-foreground matrix-glow-intense mb-6">
              <GlitchText text="THE OPERATORS" delay={0.2} />
              <br />
              <GlitchText text="OF THE MATRIX" delay={0.4} />
            </h1>
            <p className="text-muted-foreground font-mono text-lg">
              The minds behind the digital magic.
              <br />
              Each operator brings unique code to the collective.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Banner */}
      <section className="relative py-8">
        <div className="container mx-auto px-4">
          <motion.div
            className="relative h-48 md:h-64 border border-border/50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
            <div className="absolute inset-0 scanlines opacity-50 z-20" />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
              alt="Team"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <div className="text-center">
                <div className="font-orbitron text-3xl md:text-4xl font-bold text-foreground matrix-glow">
                  THE COLLECTIVE
                </div>
                <div className="font-mono text-muted-foreground mt-2">
                  {teamMembers.length} Operators Online
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="group relative bg-card/50 border border-border/50 overflow-hidden hover:border-foreground transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    {/* Scanlines */}
                    <div className="absolute inset-0 scanlines opacity-50" />
                    {/* Glitch effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 bg-foreground/5" />
                    </div>
                    {/* Code lines decoration */}
                    <div className="absolute left-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs text-foreground/50">
                      {`0x${member.id.toString(16).padStart(4, '0')}`}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 relative">
                    {/* Neon border effect */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <h3 className="font-orbitron text-lg font-bold text-foreground group-hover:matrix-glow transition-all">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono mb-3">
                      {member.role}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs font-mono border border-border text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-3">
                      {member.socials.github && (
                        <a href={member.socials.github} className="text-muted-foreground hover:text-foreground transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="text-muted-foreground hover:text-foreground transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} className="text-muted-foreground hover:text-foreground transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a href={member.socials.instagram} className="text-muted-foreground hover:text-foreground transition-colors">
                          <Instagram className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-foreground/30 group-hover:border-foreground transition-colors" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-foreground/30 group-hover:border-foreground transition-colors" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-foreground/30 group-hover:border-foreground transition-colors" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-foreground/30 group-hover:border-foreground transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="relative py-24 border-t border-border/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-3xl font-bold text-foreground matrix-glow mb-4">
              BECOME AN OPERATOR
            </h2>
            <p className="text-muted-foreground font-mono mb-8 max-w-xl mx-auto">
              The collective is always seeking new talents.
              <br />
              Upload your identity. Join the mission.
            </p>
            <a
              href="/join"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-mono hover:bg-foreground/90 transition-colors matrix-box-glow"
            >
              APPLY NOW
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
