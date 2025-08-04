// screens/ResultScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useColorScheme,
  AccessibilityInfo,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Colors } from '../constants/Colors';
import { BOOKS } from '../data/bannedBooks';
import type { RootStackParamList } from '../types';

type ResultScreenRouteProp = RouteProp<RootStackParamList, 'Result'>;
type ResultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Result'>;

type Props = {
  route: ResultScreenRouteProp;
  navigation: ResultScreenNavigationProp;
};

function getTopCategory(answers: string[]): string {
  const counts: Record<string, number> = {};
  answers.forEach((category) => {
    counts[category] = (counts[category] || 0) + 1;
  });
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  return top?.[0] || 'General';
}

function getBookRecommendation(category: string) {
  const matchingBooks = BOOKS.filter(book => 
    book.categories.includes(category)
  );
  
  if (matchingBooks.length > 0) {
    const randomIndex = Math.floor(Math.random() * matchingBooks.length);
    return matchingBooks[randomIndex];
  }
  return BOOKS[Math.floor(Math.random() * BOOKS.length)];
}

const ResultScreen = ({ route, navigation }: Props) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  const { answers } = route.params;
  const topCategory = getTopCategory(answers);
  const recommendedBook = getBookRecommendation(topCategory);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text
        style={[styles.title, { color: theme.text }]}
        accessibilityRole="header"
        accessible
      >
        Your Recommended Banned Book:
      </Text>

      <Text
        style={[styles.bookTitle, { color: theme.tint }]}
        accessibilityLabel={`Title: ${recommendedBook.title}`}
      >
        {recommendedBook.title}
      </Text>

      <Text
        style={[styles.author, { color: theme.text }]}
        accessibilityLabel={`Author: ${recommendedBook.author}`}
      >
        by {recommendedBook.author}
      </Text>

      <Text
        style={[styles.reason, { color: theme.icon }]}
        accessibilityLabel={`Reason: ${recommendedBook.reason}`}
      >
        📕 Banned because: {recommendedBook.reason}
      </Text>

      <Pressable
        onPress={() => navigation.navigate('Welcome')}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? theme.tint : theme.icon,
          },
        ]}
        accessibilityRole="button"
        accessibilityLabel="Retake quiz"
      >
        <Text style={[styles.buttonText, { color: theme.background }]}>
          Retake Quiz
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  bookTitle: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'center',
  },
  author: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  reason: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  button: {
    alignSelf: 'center',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ResultScreen;