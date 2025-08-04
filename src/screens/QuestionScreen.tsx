import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { QUESTIONS } from '../data/questions';
import { RootStackParamList } from '../types';
import type { StackNavigationProp } from '@react-navigation/stack';

type QuestionScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Question'>;
};

const QuestionScreen = ({ navigation }: QuestionScreenProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (category: string) => {
    const updatedAnswers = [...answers, category];
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('Result', { answers: updatedAnswers });
    }
  };

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.question, { color: theme.text }]}>
        {currentQuestion.question}
      </Text>

      {currentQuestion.options.map((option, index) => (
        <Pressable
          key={index}
          onPress={() => handleAnswer(option.value)}
          style={({ pressed }) => [
            styles.option,
            {
              backgroundColor: pressed ? theme.muted : theme.card,
              borderColor: theme.accent,
            },
          ]}
        >
          <Text style={[styles.optionText, { color: theme.text }]}>
            {option.text}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  option: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 15,
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default QuestionScreen;