import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Settings</Text>
        
        {[
          { title: 'Profile', icon: 'person-outline' },
          { title: 'Notifications', icon: 'notifications-outline' },
          { title: 'Privacy', icon: 'lock-closed-outline' },
          { title: 'Help & Support', icon: 'help-circle-outline' },
        ].map((item, index) => (
          <Pressable key={index} style={styles.settingItem}>
            <View style={styles.settingContent}>
              <Ionicons name={item.icon} size={24} color="#2ecc71" />
              <Text style={styles.settingText}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#2ecc71" />
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2ecc71',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 12,
  },
}); 