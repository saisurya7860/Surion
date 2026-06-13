import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function RoleTypewriter({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!roles.length) return;

    const currentRole = roles[roleIndex];

    let timeout;

    if (!deleting) {
      // typing
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 90);
      } else {
        // pause after full word typed
        timeout = setTimeout(() => {
          setDeleting(true);
        }, 1800);
      }
    } else {
      // deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, 45);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, deleting, roleIndex, roles]);

  return (
    <div className="text-3xl md:text-4xl font-bold text-indigo-600 min-h-[80px] flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={roleIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="relative"
        >
          {displayText}

          {/* blinking cursor */}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
            }}
            className="ml-1 inline-block"
          >
            |
          </motion.span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default RoleTypewriter;