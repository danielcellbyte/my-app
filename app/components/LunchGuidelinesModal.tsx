import { Modal, View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface LunchGuidelinesModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export function LunchGuidelinesModal({ isVisible, onClose }: LunchGuidelinesModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView>
            <Text style={styles.modalTitle}>Orientações para o Almoço</Text>
            
            <Text style={styles.sectionTitle}>Vegetais (mínimo 3 tipos diferentes)</Text>
            <Text style={styles.sectionSubtitle}>Escolha um de cada parte da planta:</Text>
            
            <Text style={styles.categoryTitle}>Folhas:</Text>
            <Text style={styles.text}>Alface, rúcula, acelga, repolho, agrião, almeirão</Text>
            
            <Text style={styles.categoryTitle}>Raízes:</Text>
            <Text style={styles.text}>Cenoura cozida, beterraba, nabo, rabanete</Text>
            
            <Text style={styles.categoryTitle}>Flores ou Frutos:</Text>
            <Text style={styles.text}>Brócolis, couve-flor, abobrinha, chuchu, pepino, berinjela, abóbora, vagem, quiabo, moranga</Text>
            
            <Text style={styles.sectionTitle}>Temperos (opcional):</Text>
            <Text style={styles.text}>1-2 colheres de chá de azeite de oliva, limão, vinagre</Text>
            
            <Text style={styles.sectionTitle}>Carboidratos (escolha um):</Text>
            <Text style={styles.text}>• Arroz branco{'\n'}• Inhame{'\n'}• Batata baroa{'\n'}• Mandioca{'\n'}• Batata inglesa{'\n'}• Batata doce{'\n'}• Macarrão de arroz branco ou de quinoa (sem glúten)</Text>
            
            <Text style={styles.sectionTitle}>Proteína:</Text>
            <Text style={styles.warning}>Por enquanto não comer carne vermelha.</Text>
          </ScrollView>
          
          <Pressable
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.closeButtonText}>Fechar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2ecc71',
    marginTop: 8,
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    lineHeight: 24,
  },
  warning: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: '500',
    marginTop: 4,
  },
  closeButton: {
    backgroundColor: '#2ecc71',
    borderRadius: 10,
    padding: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
}); 