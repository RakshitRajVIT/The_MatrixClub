import { useState } from 'react';
import { motion } from 'framer-motion';
import MatrixRain from '@/components/MatrixRain';
import MatrixButton from '@/components/MatrixButton';
import GlitchText from '@/components/GlitchText';
import { useToast } from '@/hooks/use-toast';
import { Upload, CheckCircle } from 'lucide-react';

const skills = [
  'Video Editing',
  'Photography',
  'Graphic Design',
  'UI/UX Design',
  '3D Modeling',
  'Motion Graphics',
  'Animation',
  'AR/VR Development',
  'Sound Design',
  'Cinematography',
];

const JoinUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    year: '',
    skills: [] as string[],
    portfolio: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Identity Uploaded Successfully",
      description: "Welcome to the collective. We'll be in touch soon.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
      year: '',
      skills: [],
      portfolio: '',
      message: '',
    });
    setIsSubmitting(false);
  };

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
              {'>'} RECRUITMENT.INIT()
            </span>
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-foreground matrix-glow-intense mb-6">
              <GlitchText text="ESCAPE THE" delay={0.2} />
              <br />
              <GlitchText text="ORDINARY" delay={0.4} />
            </h1>
            <p className="text-muted-foreground font-mono text-lg">
              Upload your identity. Become an operator.
              <br />
              The Matrix awaits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.form
            onSubmit={handleSubmit}
            className="relative bg-card/50 border border-border/50 p-8 md:p-12 scanlines"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-foreground" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-foreground" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-foreground" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-foreground" />

            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-8 pb-4 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-foreground" />
              <span className="ml-4 font-mono text-sm text-muted-foreground">
                IDENTITY_UPLOAD.exe
              </span>
            </div>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  {'>'} OPERATOR_NAME:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full terminal-input px-4 py-3"
                  placeholder="Enter your name..."
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  {'>'} DIGITAL_ADDRESS:
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full terminal-input px-4 py-3"
                  placeholder="Enter your email..."
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  {'>'} COMM_LINK:
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full terminal-input px-4 py-3"
                  placeholder="Enter your phone number..."
                  required
                />
              </div>

              {/* Department & Year */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-sm text-muted-foreground mb-2">
                    {'>'} DIVISION:
                  </label>
                  <input
                    type="text"
                    value={formData.department}
                    onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
                    className="w-full terminal-input px-4 py-3"
                    placeholder="Department..."
                    required
                  />
                </div>
                <div>
                  <label className="block font-mono text-sm text-muted-foreground mb-2">
                    {'>'} LEVEL:
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                    className="w-full terminal-input px-4 py-3"
                    required
                  >
                    <option value="">Select Year...</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>
              </div>

              {/* Skills */}
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-4">
                  {'>'} SKILL_SET (select all that apply):
                </label>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => handleSkillToggle(skill)}
                      className={`px-3 py-2 text-xs font-mono border transition-all ${
                        formData.skills.includes(skill)
                          ? 'border-foreground text-foreground matrix-box-glow'
                          : 'border-border text-muted-foreground hover:border-foreground/50'
                      }`}
                    >
                      {formData.skills.includes(skill) && (
                        <CheckCircle className="w-3 h-3 inline mr-1" />
                      )}
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Portfolio */}
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  {'>'} PORTFOLIO_LINK (optional):
                </label>
                <input
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => setFormData(prev => ({ ...prev, portfolio: e.target.value }))}
                  className="w-full terminal-input px-4 py-3"
                  placeholder="https://..."
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  {'>'} TRANSMISSION_MESSAGE:
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full terminal-input px-4 py-3 min-h-32 resize-none"
                  placeholder="Why do you want to join The Matrix?..."
                  required
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <MatrixButton type="submit" className="w-full py-4 text-lg" variant="primary">
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">UPLOADING IDENTITY...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      UPLOAD IDENTITY
                    </>
                  )}
                </MatrixButton>
              </div>
            </div>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 border-t border-border/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            className="font-orbitron text-2xl font-bold text-foreground text-center mb-12 matrix-glow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            FREQUENTLY ASKED QUERIES
          </motion.h2>

          <div className="space-y-6">
            {[
              { q: 'Who can join The Matrix?', a: 'Any student passionate about multimedia, creativity, and technology is welcome. No prior experience required—just enthusiasm to learn.' },
              { q: 'What happens after I apply?', a: 'Our team reviews all applications. Selected candidates will be invited for an informal interaction and possibly a small creative task.' },
              { q: 'Is there a membership fee?', a: 'We keep it minimal to cover workshop materials and event costs. The exact amount is communicated during onboarding.' },
              { q: 'How much time commitment is expected?', a: 'Flexible! Participate as much as your schedule allows. We value quality contributions over constant presence.' },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border border-border/50 p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-orbitron text-lg text-foreground mb-2">
                  {'>'} {faq.q}
                </h3>
                <p className="text-muted-foreground font-mono text-sm">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
