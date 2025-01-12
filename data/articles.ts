export interface Article {
  id: string;
  title: string;
  imageUrl: string;
  summary: string;
  content: string;
  author: string;
  publishDate: string;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Benefits of a Plant-Based Diet',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    summary: 'Discover how incorporating more plants into your diet can improve your health.',
    content: `
      A plant-based diet has numerous benefits for your health and the environment.

      Benefits include:
      • Lower risk of heart disease
      • Better weight management
      • Reduced environmental impact
      • Improved digestion

      Research has shown that people who follow a plant-based diet tend to have lower blood pressure and cholesterol levels. Additionally, plant-based diets are rich in fiber, vitamins, and minerals essential for optimal health.
      
      Getting Started:
      Start by incorporating one or two meatless meals per week. Focus on whole foods like legumes, whole grains, fruits, and vegetables. Experiment with different cuisines that traditionally feature plant-based dishes.
    `,
    author: 'Dr. Sarah Johnson',
    publishDate: '2024-03-15'
  },
  // Add more articles...
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
} 