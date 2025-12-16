import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from '@/components/MatrixRain';
import MatrixCard from '@/components/MatrixCard';
import MatrixButton from '@/components/MatrixButton';
import GlitchText from '@/components/GlitchText';
import { Calendar, Clock, MapPin, X, Users } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'upcoming' | 'past';
  category: string;
  attendees: number;
}

const events: Event[] = [
  {
    id: 1,
    title: 'NEON NIGHTS: Photo Walk',
    description: 'Capture the city after dark. Low-light photography techniques, neon aesthetics, and urban exploration. Bring your cameras and prepare to see the night differently.',
    date: 'December 15, 2024',
    time: '7:00 PM - 11:00 PM',
    location: 'City Center',
    type: 'upcoming',
    category: 'Photography',
    attendees: 25,
  },
  {
    id: 2,
    title: 'MOTION MASTERY Workshop',
    description: 'Learn advanced motion graphics techniques in After Effects. From kinetic typography to seamless transitions, elevate your editing game.',
    date: 'December 20, 2024',
    time: '2:00 PM - 6:00 PM',
    location: 'Digital Lab',
    type: 'upcoming',
    category: 'Workshop',
    attendees: 40,
  },
  {
    id: 3,
    title: 'EDIT WARS: The Competition',
    description: 'A 24-hour editing marathon. Teams compete to create the most impactful short film. Prizes, glory, and bragging rights await.',
    date: 'January 5, 2025',
    time: 'All Day Event',
    location: 'Main Auditorium',
    type: 'upcoming',
    category: 'Competition',
    attendees: 60,
  },
  {
    id: 4,
    title: 'VR IMMERSION Experience',
    description: 'Step into virtual worlds. Experience cutting-edge VR projects and learn about spatial computing and immersive media creation.',
    date: 'January 15, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Innovation Hub',
    type: 'upcoming',
    category: 'Experience',
    attendees: 30,
  },
  {
    id: 5,
    title: 'UI/UX BOOTCAMP',
    description: 'Intensive design thinking workshop covering user research, wireframing, prototyping, and modern UI design principles.',
    date: 'November 10, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Design Studio',
    type: 'past',
    category: 'Workshop',
    attendees: 35,
  },
  {
    id: 6,
    title: 'CINEMA SHOWCASE',
    description: 'Annual showcase of student short films. A night of creativity, storytelling, and cinematic excellence.',
    date: 'October 25, 2024',
    time: '6:00 PM - 10:00 PM',
    location: 'Film Theatre',
    type: 'past',
    category: 'Showcase',
    attendees: 150,
  },
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const filteredEvents = events.filter(event => 
    filter === 'all' ? true : event.type === filter
  );

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
              {'>'} EVENTS.LOAD_ALL()
            </span>
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-foreground matrix-glow-intense mb-6">
              <GlitchText text="BREAKING THE" delay={0.2} />
              <br />
              <GlitchText text="MATRIX LOOP" delay={0.4} />
            </h1>
            <p className="text-muted-foreground font-mono text-lg">
              Experiences that transform. Events that inspire.
              <br />
              Each gathering is a glitch in the ordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="relative py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            {(['all', 'upcoming', 'past'] as const).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2 font-mono text-sm border transition-all ${
                  filter === tab
                    ? 'border-foreground text-foreground matrix-box-glow'
                    : 'border-border text-muted-foreground hover:border-foreground/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <MatrixCard className="h-full cursor-pointer" delay={0}>
                    <div onClick={() => setSelectedEvent(event)}>
                      {/* Category badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 text-xs font-mono bg-foreground/10 text-foreground border border-foreground/30">
                          {event.category}
                        </span>
                        <span className={`px-2 py-1 text-xs font-mono ${
                          event.type === 'upcoming' 
                            ? 'text-foreground' 
                            : 'text-muted-foreground'
                        }`}>
                          {event.type === 'upcoming' ? '● LIVE' : '○ ARCHIVED'}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-orbitron text-xl font-bold text-foreground mb-3 group-hover:matrix-glow transition-all">
                        {event.title}
                      </h3>

                      {/* Meta info */}
                      <div className="space-y-2 text-sm text-muted-foreground font-mono mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4 border-t border-border/30">
                        <span className="text-foreground font-mono text-sm hover:matrix-glow transition-all">
                          {'>'} DECRYPT EVENT DETAILS
                        </span>
                      </div>
                    </div>
                  </MatrixCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/90 backdrop-blur-sm"
              onClick={() => setSelectedEvent(null)}
            />

            {/* Modal */}
            <motion.div
              className="relative w-full max-w-2xl bg-card border border-border p-8 scanlines"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-foreground" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-foreground" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-foreground" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-foreground" />

              {/* Content */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-mono bg-foreground/10 text-foreground border border-foreground/30">
                  {selectedEvent.category}
                </span>
                <span className={`text-xs font-mono ${
                  selectedEvent.type === 'upcoming' ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {selectedEvent.type === 'upcoming' ? '● UPCOMING' : '○ PAST EVENT'}
                </span>
              </div>

              <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground matrix-glow mb-6">
                {selectedEvent.title}
              </h2>

              <p className="text-muted-foreground font-mono mb-8 leading-relaxed">
                {selectedEvent.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-5 h-5 text-foreground" />
                  <span className="text-muted-foreground font-mono">{selectedEvent.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-5 h-5 text-foreground" />
                  <span className="text-muted-foreground font-mono">{selectedEvent.time}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-foreground" />
                  <span className="text-muted-foreground font-mono">{selectedEvent.location}</span>
                </div>
              </div>

              {selectedEvent.type === 'upcoming' && (
                <MatrixButton className="w-full">
                  REGISTER NOW
                </MatrixButton>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
