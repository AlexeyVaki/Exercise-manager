
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>Exercise manager</Text>


        <Text style={styles.description}>
          Manager for my exercizes
        </Text>

        <Link href="/more-inf" style={styles.button}>
          Просто ссылка на вторую страницу
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
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 600,
    borderRadius: 12,
    marginBottom: 24,
    backgroundColor: '#172B46',
  },
  title: {
    color: '#F1F5F9',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    color: '#D0D9E2',
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    width: '100%',
    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor: '#DCEAF3',
    color: '#152636',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 12,
  },
  secondButton: {
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
  footer: {
    color: '#71889A',
    fontSize: 12,
    marginTop: 28,
    marginBottom: 12,
  },
});
