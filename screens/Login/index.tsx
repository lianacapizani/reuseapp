import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import styles from './style';
import SocialLogin from '../../src/components/SocialLogin';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../src/services/firebaseConfig';


function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrarMe, setLembrarMe] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const token = await userCredential.user.getIdToken();

      if (lembrarMe) {
        await AsyncStorage.setItem('@user_token', token);
      }

      navigation.navigate('Main' as never);
    } catch (error: any) {
      Alert.alert('Erro', 'Email ou senha inválidos');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <ScrollView
        contentContainerStyle={styles.inner}
        keyboardShouldPersistTaps="handled"
      >
        <Image source={require('../../assets/logo.png')} style={styles.logo} />

        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <View style={styles.checkboxContainer}>
          <View style={{ transform: [{ scale: 1 }] }}>
            <Checkbox
              status={lembrarMe ? 'checked' : 'unchecked'}
              onPress={() => setLembrarMe(!lembrarMe)}
              color="#2A2B67"
            />
          </View>
          <Text style={styles.checkboxLabel}>Lembrar de mim</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <SocialLogin />
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro' as never)}>
          <Text style={styles.signupLink}>Ainda não possui cadastro? Clique aqui</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Login;
