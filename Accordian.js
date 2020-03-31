import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 },
}

const Accordian = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ marginBottom: 20 }}>
      <h2 
        role="button" 
        onClick={() => setIsOpen(prevValue => !prevValue)}
        style={{ 
          border: '1px solid black',
          padding: '10px',
          marginBottom: 0, 
        }}
      >
        {header}
      </h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{ overflow: 'hidden' }}
          >
            {children}
          </motion.div>

          // This works too
          // <motion.div
          //   initial={variants.closed}
          //   animate={variants.open}
          //   exit={variants.closed}
          //   style={{ overflow: 'hidden' }}
          // >
          //   {children}
          // </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordian;