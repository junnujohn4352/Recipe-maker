import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users } from 'lucide-react';

interface RecipeCardProps {
  recipe: {
    id: number;
    title: string;
    image: string;
    readyInMinutes?: number;
    servings?: number;
    missedIngredientCount?: number;
  };
  index: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="recipe-card bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/20"
    >
      <Link to={`/recipe/${recipe.id}`}>
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <h3 className="text-white font-bold p-4 text-lg">{recipe.title}</h3>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center text-gray-300 text-sm">
            {recipe.readyInMinutes && (
              <div className="flex items-center">
                <Clock size={16} className="mr-1 text-yellow-400" />
                <span>{recipe.readyInMinutes} mins</span>
              </div>
            )}
            {recipe.servings && (
              <div className="flex items-center">
                <Users size={16} className="mr-1 text-yellow-400" />
                <span>{recipe.servings} servings</span>
              </div>
            )}
          </div>
          {recipe.missedIngredientCount !== undefined && (
            <div className="mt-2 text-sm">
              <span className="text-gray-300">
                Missing ingredients: <span className="text-yellow-400 font-semibold">{recipe.missedIngredientCount}</span>
              </span>
            </div>
          )}
          <div className="mt-4">
            <button className="w-full py-2 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg text-white font-medium hover:from-red-700 hover:to-yellow-600 transition-colors duration-300">
              View Recipe
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RecipeCard;