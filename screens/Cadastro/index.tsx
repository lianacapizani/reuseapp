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
import styles from './style';
import SocialLogin from '../../src/components/SocialLogin';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../src/services/firebaseConfig';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigation = useNavigation();

  const handleCadastro = async () => {
    console.log("handleCadastro foi chamado");
    if (!nome || !sobrenome || !email || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);

      await updateProfile(userCredential.user, {
        displayName: `${nome} ${sobrenome}`,
      });

      Alert.alert('Sucesso', 'Conta criada com sucesso!');
      navigation.navigate('Login' as never);
    } catch (error: any) {
        console.error(error.code);
      
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Erro', 'Este e-mail já está cadastrado. Tente fazer login.');
        } else if (error.code === 'auth/weak-password') {
          Alert.alert('Erro', 'A senha deve ter no mínimo 6 caracteres.');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Erro', 'O e-mail digitado não é válido.');
        } else {
          Alert.alert('Erro', 'Erro ao criar conta. Tente novamente.');
        }
      }
    }
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

        <Text style={styles.title}>Cadastro</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          value={sobrenome}
          onChangeText={setSobrenome}
        />

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

        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <SocialLogin />

        <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
          <Text style={styles.signupLink}>Já possui conta? Voltar ao login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Cadastro;
