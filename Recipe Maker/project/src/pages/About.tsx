import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Mail, MapPin, Phone } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl border border-white/20"
      >
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, 0] }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <ChefHat size={64} className="text-yellow-400 mx-auto" />
          </motion.div>
          <h1 className="logo-font text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About LOL FOODS
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-3 text-yellow-400">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              LOL FOODS was born from a simple idea: making cooking fun and accessible to everyone. 
              We believe that great food doesn't have to be complicated, and that anyone can create 
              delicious meals with the right guidance. Our platform helps you discover recipes based 
              on ingredients you already have, reducing food waste and saving you time and money.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-3 text-yellow-400">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At LOL FOODS, we're on a mission to revolutionize home cooking by making it more 
              accessible, enjoyable, and sustainable. We strive to provide detailed, step-by-step 
              recipes that anyone can follow, regardless of their cooking experience. By focusing 
              on what you already have in your kitchen, we help reduce food waste and encourage 
              creative cooking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-black/30 p-6 rounded-lg border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-3 text-yellow-400">Company Information</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="font-semibold text-white mr-2">Company Name:</span>
                <span className="text-gray-300">LOL Groups</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold text-white mr-2">Created By:</span>
                <span className="text-gray-300">P Janardhan Reddy</span>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="text-yellow-400 mr-2" />
                <span className="text-gray-300">123 Foodie Street, Culinary District, Flavor City</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-yellow-400 mr-2" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-yellow-400 mr-2" />
                <span className="text-gray-300">info@lolfoods.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} LOL FOODS. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;