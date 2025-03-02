import axios from 'axios';

// Replace with your actual API key
const API_KEY = '6b242a6dd7b54d46bc805dcd17c6083c';
const BASE_URL = 'https://api.spoonacular.com';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

export const searchRecipesByIngredients = async (ingredients: string, number = 12) => {
  try {
    const response = await api.get('/recipes/findByIngredients', {
      params: {
        ingredients,
        number,
        ranking: 1,
        ignorePantry: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching recipes by ingredients:', error);
    throw error;
  }
};

export const getRecipeDetails = async (id: number) => {
  try {
    const response = await api.get(`/recipes/${id}/information`, {
      params: {
        includeNutrition: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error getting recipe details:', error);
    throw error;
  }
};

export default api;