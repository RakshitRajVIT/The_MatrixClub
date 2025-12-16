import { useState } from 'react';
import { motion } from 'framer-motion';
import MatrixRain from '@/components/MatrixRain';
import MatrixCard from '@/components/MatrixCard';
import MatrixButton from '@/components/MatrixButton';
import GlitchText from '@/components/GlitchText';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Send, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Transmission Received",
      description: "Your message has been sent to the mainframe. We'll respond soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: 'DIGITAL MAIL', value: 'matrix@university.edu' },
    { icon: Phone, label: 'COMM CHANNEL', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'PHYSICAL NODE', value: 'Tech Building, Room 404, University Campus' },
  ];

  const socials = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

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
              {'>'} CONTACT.ESTABLISH_CONNECTION()
            </span>
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-foreground matrix-glow-intense mb-6">
              <GlitchText text="CONTACT THE" delay={0.2} />
              <br />
              <GlitchText text="MAINFRAME" delay={0.4} />
            </h1>
            <p className="text-muted-foreground font-mono text-lg">
              Have questions? Ideas? Collaborations?
              <br />
              Send your transmission. We're listening.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <form
                onSubmit={handleSubmit}
                className="relative bg-card/50 border border-border/50 p-8 scanlines"
              >
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-8 pb-4 border-b border-border/50">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-foreground" />
                  <span className="ml-4 font-mono text-sm text-muted-foreground">
                    TRANSMISSION.exe
                  </span>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-foreground" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-foreground" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-foreground" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-foreground" />

                <div className="space-y-6">
                  <div>
                    <label className="block font-mono text-sm text-muted-foreground mb-2">
                      {'>'} SENDER_ID:
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full terminal-input px-4 py-3"
                      placeholder="Your name..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-sm text-muted-foreground mb-2">
                      {'>'} RETURN_ADDRESS:
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full terminal-input px-4 py-3"
                      placeholder="Your email..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-sm text-muted-foreground mb-2">
                      {'>'} SUBJECT_LINE:
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full terminal-input px-4 py-3"
                      placeholder="Subject..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-sm text-muted-foreground mb-2">
                      {'>'} MESSAGE_BODY:
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full terminal-input px-4 py-3 min-h-32 resize-none"
                      placeholder="Enter your message..."
                      required
                    />
                  </div>

                  <MatrixButton type="submit" className="w-full py-4" variant="primary">
                    {isSubmitting ? (
                      <span className="animate-pulse">TRANSMITTING...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        SEND TRANSMISSION
                      </>
                    )}
                  </MatrixButton>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* Info Cards */}
              {contactInfo.map((info, index) => (
                <MatrixCard key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 border border-foreground/30">
                      <info.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-muted-foreground block mb-1">
                        {info.label}
                      </span>
                      <span className="font-mono text-foreground">
                        {info.value}
                      </span>
                    </div>
                  </div>
                </MatrixCard>
              ))}

              {/* Social Links */}
              <MatrixCard delay={0.4}>
                <span className="text-xs font-mono text-muted-foreground block mb-4">
                  SOCIAL CHANNELS
                </span>
                <div className="flex items-center gap-4">
                  {socials.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="p-3 border border-border hover:border-foreground text-muted-foreground hover:text-foreground transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </MatrixCard>

              {/* Map placeholder */}
              <div className="relative h-64 border border-border/50 overflow-hidden">
                <div className="absolute inset-0 matrix-grid-bg opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-foreground mx-auto mb-4 animate-pulse" />
                    <span className="font-mono text-sm text-muted-foreground">
                      LOCATION NODE ACTIVE
                    </span>
                  </div>
                </div>
                {/* Animated circuit lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
                  <motion.line
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="hsl(120, 100%, 50%)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.line
                    x1="50%"
                    y1="0"
                    x2="50%"
                    y2="100%"
                    stroke="hsl(120, 100%, 50%)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                </svg>
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-foreground/50" />
                <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-foreground/50" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b border-l border-foreground/50" />
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-foreground/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="relative py-24 border-t border-border/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-orbitron text-2xl font-bold text-foreground matrix-glow mb-8">
              SYSTEM UPTIME
            </h2>
            <div className="inline-block border border-border/50 p-6 font-mono">
              <div className="grid grid-cols-2 gap-4 text-left">
                <span className="text-muted-foreground">Monday - Friday:</span>
                <span className="text-foreground">09:00 - 18:00</span>
                <span className="text-muted-foreground">Saturday:</span>
                <span className="text-foreground">10:00 - 16:00</span>
                <span className="text-muted-foreground">Sunday:</span>
                <span className="text-muted-foreground">MAINTENANCE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
