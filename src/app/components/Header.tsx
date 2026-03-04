import { motion } from "framer-motion";
import { Menu } from "lucide-react";

interface HeaderProps {
  onLoginClick: () => void;
}

export function Header({ onLoginClick }: HeaderProps) {
  const navItems = [
    "Features",
    "Pricing",
    "User Side",
    "Admin Panel",
    "Technical",
    "Partners",
    "FAQ",
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
          </div>
          <span className="font-bold text-xl text-gray-900">Tally Connect</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        <motion.button
          onClick={onLoginClick}
          className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>

        <button className="md:hidden">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </motion.header>
  );
}
