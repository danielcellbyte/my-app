import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getArticleById } from '../../../data/articles';

export default function ArticleDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const article = getArticleById(id);

  if (!article) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Article not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{ uri: article.imageUrl }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{article.title}</Text>
          
          <View style={styles.metaInfo}>
            <Text style={styles.metaText}>By {article.author}</Text>
            <Text style={styles.metaText}>{article.publishDate}</Text>
          </View>

          <Text style={styles.articleContent}>{article.content}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  metaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  metaText: {
    fontSize: 14,
    color: '#666',
  },
  articleContent: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
}); 