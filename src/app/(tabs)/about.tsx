
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Про меня</Text>
        <Link href="/" style={styles.backButton}>
          ← Back to Home
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101923',
  },
  content: {
    padding: 24,
  },
  title: {
    color: '#F1F5F9',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heading: {
    color: '#8AB8D8',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    color: '#D0D9E2',
    fontSize: 15,
    lineHeight: 24,
  },
  footer: {
    color: '#71889A',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 28,
  },
  backButton: {
    width: '100%',
    overflow: 'hidden',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#536777',
    color: '#E0EAF2',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
});
