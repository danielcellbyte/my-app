import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Markdown from 'react-native-markdown-display';

const GUIDELINES_CONTENT = `
# ORIENTAÇÕES GERAIS

## **FRUTAS**
- Variar o consumo de frutas, consumindo 3 diferentes tipos ao dia.
- Prefira o consumo de frutas **amarelas, vermelhas ou roxas**.

## **CHÁS**
- Chás **DEVEM** ser consumidos diariamente.
- Evite somente o uso do chá de hibisco.
- Beba pelo menos 1 xícara de chá de chá verde com gengibre.
- **INCLUA UM CHÁ NO MEIO DA MANHÃ, CASO POSSA.**

## **TEMPEROS**
- Varie o uso dos temperos e utilize diariamente.
- Todas as ervas frescas ou secas são bem-vindas.
- Enfatize o uso dos temperos destacados na sua dieta (tomilho, coentro, cebolinha, cúrcuma, alecrim).

## **PEIXES**
- Prefira os peixes pequenos e do mar (sardinha, merluza, tainha, tainhota, papa-terra, pescada, anchova – escalada, linguado).
- Evite peixes com alto teor de mercúrio (cação, atum, prego, merlim, bacalhau), podendo consumi-los até 1x na semana.

## **ÁGUA**
- Beba pelo menos **1,8 litros de água ao dia**.
- Cozinhar somente com água mineral.
- **Beba somente água mineral!**

## **PANELAS**
- Não utilize panelas de teflon ou alumínio.

## **GORDURAS**
- Cozinhe somente com azeite de oliva.
- Evite o consumo de óleo vegetal, manteiga em excesso ou banha de porco.
- Não consumir gordura hidrogenada.
- Óleo de coco pode ser consumido, desde que não aquecido acima de 90 graus.

## **ALIMENTOS PROIBIDOS**
- Pipoca de micro-ondas, fast foods.
- Evite consumir amendoim, moluscos bivalves (ostra, marisco, berbigão, mexilhão), fígado não orgânico, adoçantes artificiais, corantes artificiais, carnes cruas, peixe cru, poliois.

## **VINAGRE**
- Dê preferência ao vinagre de maçã.
- Após aberto, deve ser mantido em geladeira.

## **EXERCÍCIO**
- Pratique pelo menos **150 minutos de exercício por semana**.

## **TOXINAS AMBIENTAIS**
- Não comprar alimentos gordurosos embalados em plástico (óleo vegetal, maionese, requeijão, molho de tomate). Prefira os embalados em vidro.
- Não utilizar potes plásticos para embalar alimentos gordurosos, mesmo que sejam sem bisfenol A.
- Não utilizar produtos cosméticos, filtros solares ou maquiagens que contenham parabenos, octocrileno (octocrylene), ou triclosan.
- Prefira utilizar filtro solar do tipo físico (à base de dióxido de titânio).
- Evite o uso de repelente. Use somente repelente natural.

### Receita de Repelente Natural
- 50g de cravo em 1 litro de álcool. Deixe por 4 dias.
- Após coar o cravo, adicione 100ml de óleo vegetal de macadâmia ou de semente de uva.

### Sugestão de Marcas de Cosméticos
- Bioart, Pura Vida, Souvie, Herbia, Baims.

## **ALIMENTOS ORGÂNICOS**
- Dê preferência ao consumo de alimentos orgânicos.
- Caso não consiga alimentos orgânicos, hidropônicos também contêm menor quantidade de agrotóxico.
- Quando as frutas não forem orgânicas, retire a casca, pois a maior concentração dos agrotóxicos está na casca.
- Para folhosos não orgânicos (como alface), siga a **ETAPA 2** de higienização.

## **HIGIENE DOS VEGETAIS**
Todos os vegetais consumidos crus devem passar pela **ETAPA 1** de higienização (exceto os que já venham higienizados).

### **ETAPA 1**
- Deixe os vegetais de molho com 1 colher de sopa de água sanitária (para cada litro de água). Deixe por 10 minutos e enxágue com água corrente abundantemente.
- **OU**
- Use 2 colheres de sopa de água oxigenada (peróxido de hidrogênio) a 3% (manipulado em farmácia de manipulação) + 2 colheres de sopa de vinagre (para cada litro de água). Deixe por 10 minutos e enxágue com água corrente abundantemente.

Frutas e vegetais com casca podem ser lavados com sabão biodegradável.

### **ETAPA 2** (Para alimentos não orgânicos consumidos com casca)
- Deixe de molho o vegetal ou fruta com água e bicarbonato de sódio (10g/litro) por 20 minutos.
`;

export default function Guidelines() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Markdown
          style={{
            body: styles.content,
            heading1: styles.h1,
            heading2: styles.h2,
            heading3: styles.h3,
            paragraph: styles.paragraph,
            list: styles.list,
            image: styles.image,
            blockquote: styles.blockquote,
            bullet_list: styles.bulletList,
            ordered_list: styles.orderedList,
          }}
        >
          {GUIDELINES_CONTENT}
        </Markdown>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  content: {
    color: '#333',
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: 16,
    marginTop: 8,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 24,
    marginBottom: 12,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    color: '#333',
  },
  list: {
    marginBottom: 16,
  },
  bulletList: {
    marginLeft: 20,
  },
  orderedList: {
    marginLeft: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginVertical: 16,
  },
  blockquote: {
    borderLeftWidth: 4,
    borderLeftColor: '#2ecc71',
    paddingLeft: 16,
    marginVertical: 16,
    fontStyle: 'italic',
  },
}); 