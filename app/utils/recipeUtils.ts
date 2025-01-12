import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

export interface Recipe {
  id: string;
  title: string;
  imageUrl: string;
  ingredients: string[];
  recipeText: string;
  calories: string;
  prepTime: string;
  meal_time: string;
}

export async function loadRecipes(): Promise<Recipe[]> {
  try {
    const { recipes } = require('../data/recipes.json');
    return recipes.map((recipe: any) => ({
      ...recipe,
      ingredients: recipe.ingredients.map((i: string) => i.trim())
    }));
  } catch (error) {
    console.error('Error loading recipes:', error);
    return [];
  }
}

export function getRecipeById(recipes: Recipe[], id: string): Recipe | undefined {
  return recipes.find(recipe => recipe.id === id);
}

export function getRandomRecipe(recipes: Recipe[]): Recipe | undefined {
  if (recipes.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
} 