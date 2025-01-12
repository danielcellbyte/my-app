import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Recipe, loadRecipes } from '../utils/recipeUtils';
import { useEffect, useState } from 'react';
import { LunchGuidelinesModal } from '../components/LunchGuidelinesModal';

export default function NutritionPlan() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [showLunchGuidelines, setShowLunchGuidelines] = useState(false);
  
  useEffect(() => {
    async function fetchRecipes() {
      const loadedRecipes = await loadRecipes();
      setRecipes(loadedRecipes);
      setLoading(false);
    }
    fetchRecipes();
  }, []);

  const fastingRoutine = recipes.filter(recipe => recipe.meal_time === 'fasting');
  const breakfastRecipes = recipes.filter(recipe => recipe.meal_time === 'breakfast');
  const midMorningRecipes = recipes.filter(recipe => recipe.meal_time === 'mid_morning');
  const lunchRecipes = recipes.filter(recipe => recipe.meal_time === 'lunch');
  const midAfternoonRecipes = recipes.filter(recipe => recipe.meal_time === 'mid_afternoon');
  const dinnerRecipes = recipes.filter(recipe => recipe.meal_time === 'dinner');

  const renderMealTimeSection = (title: string, recipes: Recipe[]) => (
    <View style={styles.section}>
      <Pressable 
        onPress={() => {
          if (title === 'Almoço') {
            setShowLunchGuidelines(true);
          }
        }}
      >
        <Text style={[
          styles.sectionTitle,
          title === 'Almoço' && styles.clickableTitle
        ]}>
          {title}
          {title === 'Almoço' && ' ℹ️'}
        </Text>
      </Pressable>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recipes.map((recipe) => (
          <Pressable
            key={recipe.id}
            style={styles.recipeCard}
            onPress={() => router.push(`/recipe/${recipe.id}`)}
          >
            <Image
              source={{ uri: recipe.imageUrl }}
              style={styles.recipeImage}
            />
            <View style={styles.recipeInfo}>
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
              <Text style={styles.recipeMetaInfo}>
                {recipe.calories} cal • {recipe.prepTime}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Meu Plano de Nutrição</Text>
        
        {renderMealTimeSection('Jejum', fastingRoutine)}
        {renderMealTimeSection('Café da Manhã', breakfastRecipes)}
        {renderMealTimeSection('No meio da Manhã', midMorningRecipes)}
        {renderMealTimeSection('Almoço', lunchRecipes)}
        {renderMealTimeSection('Lanche da Tarde - É opcional, fazer somente caso sentir FOME', midAfternoonRecipes)}
        {renderMealTimeSection('Jantar', dinnerRecipes)}
      </ScrollView>

      <LunchGuidelinesModal 
        isVisible={showLunchGuidelines}
        onClose={() => setShowLunchGuidelines(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
    color: '#2ecc71',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  recipeCard: {
    width: 280,
    marginLeft: 16,
    marginRight: 4,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recipeImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  recipeInfo: {
    padding: 12,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  recipeMetaInfo: {
    fontSize: 14,
    color: '#666',
  },
  clickableTitle: {
    color: '#2ecc71',
    textDecorationLine: 'underline',
  },
}); 