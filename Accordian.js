import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ 
              overflow: 'hidden',
              //border: '1px solid black',
              //borderTop: 'none',
              //padding: '10px' 
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordian;