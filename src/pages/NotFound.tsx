import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import MatrixRain from "@/components/MatrixRain";
import MatrixButton from "@/components/MatrixButton";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      <MatrixRain opacity={0.2} density={0.5} />
      <div className="fixed inset-0 matrix-grid-bg opacity-30 pointer-events-none" />
      
      <motion.div
        className="text-center relative z-10 px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="font-orbitron text-8xl md:text-9xl font-bold text-foreground matrix-glow-intense mb-4">
          404
        </div>
        <div className="font-mono text-xl md:text-2xl text-muted-foreground mb-2">
          ERROR: NODE NOT FOUND
        </div>
        <p className="font-mono text-muted-foreground mb-8 max-w-md mx-auto">
          The requested pathway does not exist in the Matrix.
          <br />
          This node may have been deleted or never existed.
        </p>
        <Link to="/">
          <MatrixButton>
            <Home className="w-5 h-5" />
            RETURN TO MAINFRAME
          </MatrixButton>
        </Link>
      </motion.div>

      {/* Decorative glitch effect */}
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
    </div>
  );
};

export default NotFound;
