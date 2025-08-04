import React from 'react';
import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // <-- import hook
import { Colors } from '../constants/Colors'; // adjust path as needed

const navigation = useNavigation<NavigationProp<RootStackParamList>>();
type RootStackParamList = {
  Welcome: undefined;
  Question: undefined;
  // add other routes here as needed
};

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // <-- typed navigation
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Welcome to BlackList</Text>
      <Text style={[styles.subtitle, { color: theme.muted }]}>
        Discover your next banned book.
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? theme.muted : theme.accent }
        ]}
        onPress={() => navigation.navigate('Question')}
      >
        <Text style={[styles.buttonText, { color: theme.background }]}>Start Quiz</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 40 },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default WelcomeScreen;