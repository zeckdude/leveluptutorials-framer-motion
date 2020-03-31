import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Modal = ({ isVisible, children, onClickClose }) => {
  console.log('isVisible', isVisible);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.3, x: '-50%' }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.3 }}
          style={{
            position: 'fixed',
            top: '30px',
            left: '50%',
          }}
        >
          <button onClick={onClickClose}>Close</button>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;