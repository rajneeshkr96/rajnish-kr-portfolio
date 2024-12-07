"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const popupVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        ease: [0.6, -0.05, 0.01, 0.99] 
      }
    },
    exit: { 
      scale: 0, 
      opacity: 0, 
      transition: { duration: 0.3 } 
    },
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              className="popup"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                width: "300px",
                height: "200px",
                background: "white",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              <p>Popup Content</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Popup;
