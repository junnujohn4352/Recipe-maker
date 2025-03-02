import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import ThreeScene from '../components/ThreeScene';
import { Utensils } from 'lucide-react';

interface Recipe {
  id: number;
  title: string;
  image: string;
  missedIngredientCount: number;
  usedIngredientCount: number;
  likes: number;
}

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  const searchRecipes = async (ingredients: string) => {
    setLoading(true);
    setError('');
    
    try {
      // Replace with your actual API key
      const apiKey = '6b242a6dd7b54d46bc805dcd17c6083c';
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients`,
        {
          params: {
            ingredients,
            number: 12,
            ranking: 1,
            ignorePantry: true,
            apiKey,
          },
        }
      );
      
      setRecipes(response.data);
      setSearched(true);
    } catch (err) {
      console.error('Error fetching recipes:', err);
      setError('Failed to fetch recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <ThreeScene />
      
      <div className="container mx-auto px-4 pt-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="logo-font text-5xl md:text-7xl font-bold mb-4 gradient-text">
            LOL FOODS
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover delicious recipes with the ingredients you already have in your kitchen!
          </p>
        </motion.div>

        <SearchBar onSearch={searchRecipes} />

        {loading && (
          <div className="flex justify-center mt-16">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <Utensils size={48} className="text-yellow-400" />
            </motion.div>
          </div>
        )}

        {error && (
          <div className="mt-8 text-center">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {!loading && searched && recipes.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-300">
              No recipes found with those ingredients. Try adding more ingredients or using different ones.
            </p>
          </div>
        )}

        {!loading && recipes.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              We found {recipes.length} recipes for you!
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {recipes.map((recipe, index) => (
                <RecipeCard key={recipe.id} recipe={recipe} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {!searched && (
          <div className="mt-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-block"
            >
              <div className="floating">
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Colorful food" 
                  className="w-64 h-64 object-cover rounded-full mx-auto shadow-2xl border-4 border-yellow-400"
                />
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-8 text-xl text-gray-300"
            >
              Enter your ingredients above to find amazing recipes!
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;