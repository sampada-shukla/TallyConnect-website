import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { motion } from "framer-motion";
import { X, Mail, Lock, Shield } from "lucide-react";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export function LoginModal({ open, onClose }: LoginModalProps) {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none bg-gradient-to-br from-blue-50 to-cyan-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Login to Tally Connector
            </h2>
            <p className="text-gray-600 mb-8">Sign in to continue</p>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <p className="text-gray-700 mb-6 font-medium">
                Enter your credentials to continue
              </p>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="admin@tally.com"
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                    />
                    <span className="text-sm text-gray-700">Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <Shield className="w-5 h-5" />
                  Sign In
                </motion.button>

                <p className="text-center text-sm mt-6">
                  <span className="text-gray-600">Don't have an account? </span>
                  <a
                    href="#"
                    className="font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
