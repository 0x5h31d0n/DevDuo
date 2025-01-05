import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <Animated.View entering={FadeInDown.duration(1000).springify()} style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      <Animated.View
        entering={FadeInDown.duration(1000).springify().delay(200)}
        style={styles.formContainer}>
        <ThemedText type="title" style={styles.title}>
          Welcome Back
        </ThemedText>

        <TextInput
          style={[
            styles.input,
            { backgroundColor: Colors[colorScheme ?? 'light'].background,
              color: Colors[colorScheme ?? 'light'].text }
          ]}
          placeholder="Email"
          placeholderTextColor={Colors[colorScheme ?? 'light'].text}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        
        <TextInput
          style={[
            styles.input,
            { backgroundColor: Colors[colorScheme ?? 'light'].background,
              color: Colors[colorScheme ?? 'light'].text }
          ]}
          placeholder="Password"
          placeholderTextColor={Colors[colorScheme ?? 'light'].text}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <ThemedText style={styles.buttonText}>Sign In</ThemedText>
        </TouchableOpacity>

        <Link href="/auth/signup" style={styles.link}>
          <ThemedText type="link">Don't have an account? Sign up</ThemedText>
        </Link>
      </Animated.View>
    </ThemedView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', // added this
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,  // reduced from 80
    marginBottom: 32, // changed this
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
  },
  formContainer: {
    paddingHorizontal: 20, // added this
    gap: 10, // added this
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  input: {
    height: 60,
    borderWidth: 1.5,
    padding: 15,
    borderRadius: 16,
    borderColor: '#e1e1e1',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 18,
    borderRadius: 16,
    marginTop: 16,
    shadowColor: "#007AFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  link: {
    marginTop: 24,
    alignSelf: 'center',
  },
});
