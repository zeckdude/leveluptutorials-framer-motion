import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Modal = ({ isVisible, children }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <div>
          <button>Close</button>
          {children}
        </div>
      )}
    </AnimatePresence>
  );
}

export default Modal;