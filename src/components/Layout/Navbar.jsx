import React from "react";
import { motion } from "framer-motion";
import DayNightToggle from "../UI/DayNightToggle";

const Navbar = ({ isDay, toggleDayNight }) => {
  return (
    <motion.nav
      className="fixed top-0 w-full z-50 px-4 py-4 bg-white/5 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio.Beach
          </motion.div>

          <div className="flex items-center space-x-8">
            {["Home", "Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-blue-200 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
              </motion.a>
            ))}
            <DayNightToggle isDay={isDay} toggleDayNight={toggleDayNight} />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
