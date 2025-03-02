import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ArrowLeft, Clock, Users, ChefHat, CheckCircle } from 'lucide-react';

interface RecipeDetails {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  summary: string;
  instructions: string;
  extendedIngredients: {
    id: number;
    original: string;
    image: string;
  }[];
  analyzedInstructions: {
    steps: {
      number: number;
      step: string;
      ingredients: {
        id: number;
        name: string;
        image: string;
      }[];
      equipment: {
        id: number;
        name: string;
        image: string;
      }[];
    }[];
  }[];
}

const RecipeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<RecipeDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      setLoading(true);
      try {
        // Replace with your actual API key
        const apiKey = '6b242a6dd7b54d46bc805dcd17c6083c';
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information`,
          {
            params: {
              apiKey,
              includeNutrition: false,
            },
          }
        );
        setRecipe(response.data);
      } catch (err) {
        console.error('Error fetching recipe details:', err);
        setError('Failed to load recipe details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRecipeDetails();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <ChefHat size={64} className="text-yellow-400" />
        </motion.div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-red-500 text-xl">{error || 'Recipe not found'}</p>
        <Link to="/" className="mt-4 inline-block text-yellow-400 hover:underline">
          Go back to search
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-yellow-400 hover:underline mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Back to recipes
      </Link>

      <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl border border-white/20">
        <div className="relative h-80">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              {recipe.title}
            </motion.h1>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center text-gray-300">
                <Clock size={20} className="mr-2 text-yellow-400" />
                <span>{recipe.readyInMinutes} minutes</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users size={20} className="mr-2 text-yellow-400" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Summary</h2>
            <div 
              className="text-gray-300 mb-8 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Ingredients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {recipe.extendedIngredients.map((ingredient) => (
                <motion.div 
                  key={ingredient.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center bg-black/30 p-3 rounded-lg"
                >
                  <CheckCircle size={18} className="text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{ingredient.original}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Instructions</h2>
            {recipe.analyzedInstructions.length > 0 ? (
              <ol className="space-y-6 mb-8">
                {recipe.analyzedInstructions[0].steps.map((step) => (
                  <motion.li 
                    key={step.number}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black/30 p-4 rounded-lg"
                  >
                    <div className="flex">
                      <span className="bg-yellow-400 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                        {step.number}
                      </span>
                      <p className="text-gray-300">{step.step}</p>
                    </div>
                    
                    {(step.ingredients.length > 0 || step.equipment.length > 0) && (
                      <div className="mt-3 ml-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.ingredients.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-yellow-400 mb-2">Ingredients for this step:</h4>
                            <ul className="text-sm text-gray-400">
                              {step.ingredients.map((ingredient) => (
                                <li key={ingredient.id} className="flex items-center mb-1">
                                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                  {ingredient.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {step.equipment.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-yellow-400 mb-2">Equipment needed:</h4>
                            <ul className="text-sm text-gray-400">
                              {step.equipment.map((item) => (
                                <li key={item.id} className="flex items-center mb-1">
                                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                                  {item.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </motion.li>
                ))}
              </ol>
            ) : (
              <div 
                className="text-gray-300 mb-8 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: recipe.instructions || 'No detailed instructions available.' }}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;