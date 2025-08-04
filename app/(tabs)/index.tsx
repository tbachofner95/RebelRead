import { Image } from 'expo-image';
import { Platform, StyleSheet, Pressable, Text, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import WelcomeScreen from '@/screens/WelcomeScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  // add other routes here if needed
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View>
      <Text>Welcome to RebelReads</Text>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home</Text>
      </Pressable>
    </View>
  );
}
  



