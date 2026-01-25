import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import { Recipe, loadRecipes, getRandomRecipe } from './utils/recipeUtils';

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipeOfTheDay, setRecipeOfTheDay] = useState<Recipe | undefined>();

  useEffect(() => {
    async function fetchRecipes() {
      const loadedRecipes = await loadRecipes();
      setRecipes(loadedRecipes);
      setRecipeOfTheDay(getRandomRecipe(loadedRecipes));
    }
    fetchRecipes();
  }, []);

  return (
    <View style={styles.container}>
      {recipeOfTheDay && (
        <Link href={`/recipe/${recipeOfTheDay.id}`} asChild>
          <Pressable style={styles.recipeCard}>
            <Image
              source={{ uri: recipeOfTheDay.imageUrl }}
              style={styles.recipeImage}
            />
            <View style={styles.recipeInfo}>
              <Text style={styles.recipeTitle}>{recipeOfTheDay.title}</Text>
              <View style={styles.recipeMetaInfo}>
                <Text style={styles.recipeMeta}>🕒 {recipeOfTheDay.prepTime}</Text>
                <Text style={styles.recipeMeta}>🔥 {recipeOfTheDay.calories} cal</Text>
              </View>
            </View>
          </Pressable>
        </Link>
      )}

      <View style={styles.buttonContainer}>
        <Link href="/nutrition-plan" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Meu plano de nutrição</Text>
          </Pressable>
        </Link>

        <Link href="/(stack)/guidelines" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Orientações Gerais</Text>
          </Pressable>
        </Link>
        <Link href="/articles" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Artigos</Text>
          </Pressable>
        </Link>
        <Link href="/(stack)/calculator" asChild>
          <Pressable style={[styles.button, styles.calculatorButton]}>
            <Text style={styles.buttonText}>Calculator</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  recipeImage: {
    width: '100%',
    height: 200,
  },
  recipeInfo: {
    padding: 15,
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  recipeDescription: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    gap: 15,
  },
  button: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  recipeMetaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  recipeMeta: {
    fontSize: 14,
    color: '#666',
  },
  calculatorButton: {
    backgroundColor: '#333',
  },
});
