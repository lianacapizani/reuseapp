import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import styles from './style';

function CepArea() {
  const [modalVisible, setModalVisible] = useState(false);
  const [cep, setCep] = useState('');
  const [localInfo, setLocalInfo] = useState<string | null>(null);

  const buscarCEP = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        setLocalInfo('CEP inválido');
      } else {
        const info = `${data.localidade} - ${data.uf} | ${data.bairro}`;
        setLocalInfo(info);
        setModalVisible(false);
      }
    } catch (error) {
      setLocalInfo('Erro ao buscar CEP');
    }
  };

  return (
    <View style={styles.container}>
      {localInfo && (
        <TouchableOpacity
          style={styles.localInfoContainer}
          onPress={() => setModalVisible(true)} // Reabre o modal quando clicar
        >
          <Ionicons name="location-outline" size={20} color="#333" style={{ marginRight: 6 }} />
          <Text style={styles.localInfo}>{localInfo}</Text>
        </TouchableOpacity>
      )}

      {/* Botão para adicionar endereço, só aparece se localInfo não estiver preenchido */}
      {!localInfo && (
        <TouchableOpacity style={styles.addAddressBtn} onPress={() => setModalVisible(true)}>
          <View style={styles.addAddressContent}>
            <Ionicons name="location-outline" size={20} color="#000" style={{ marginRight: 6 }} />
            <Text style={styles.addAddressText}>Adicionar endereço</Text>
          </View>
        </TouchableOpacity>
      )}

      {/* Modal para inserir CEP */}
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Insira um CEP válido</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Digite o CEP"
              value={cep}
              onChangeText={setCep}
              maxLength={8}
            />
            <TouchableOpacity style={styles.confirmBtn} onPress={buscarCEP}>
              <Text style={styles.confirmText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default CepArea;
