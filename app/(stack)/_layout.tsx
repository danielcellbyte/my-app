import { Stack, useRouter, useNavigation, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function StackLayout() {
  const router = useRouter();
  const navigation = useNavigation();
  const pathname = usePathname();

  const handleBack = () => {
    if (pathname.startsWith('/(stack)/recipe/')) {
      navigation.goBack();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      router.replace('/');
    }
  };

  return (
    <Stack
      screenOptions={{
        headerLeft: () => (
          <Pressable 
            onPress={handleBack} 
            style={{
              padding: 15,
              marginLeft: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
          >
            <Ionicons name="arrow-back" size={24} color="#2ecc71" />
          </Pressable>
        ),
        headerTitleStyle: {
          color: '#000',
        },
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name="guidelines"
        options={{ 
          headerTitle: "Orientações Gerais",
        }}
      />
      <Stack.Screen
        name="article/[id]"
        options={{ 
          headerTitle: "Article",
        }}
      />
      <Stack.Screen
        name="recipe/[id]"
        options={{ 
          headerTitle: "Recipe",
        }}
      />
      <Stack.Screen
        name="articles"
        options={{ 
          headerTitle: "Articles",
        }}
      />
      <Stack.Screen
        name="nutrition-plan"
        options={{ 
          headerTitle: "My Nutrition Plan",
        }}
      />
    </Stack>
  );
} 