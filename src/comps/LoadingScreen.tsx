import React from "react";
import { easeInOut, motion } from "framer-motion";
import { useEffect } from "react";

const LoadingScreen = ({ setLoading }: { setLoading: any }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ y: 0 }}
      exit={{
        y: -2000,
        transition: { duration: 1, ease: easeInOut },
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#2D2D2D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.5 },
        }}
      >
        <motion.div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "#A67C52",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
