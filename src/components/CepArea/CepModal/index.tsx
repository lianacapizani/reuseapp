import React from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './style';

type Props = {
  visible: boolean;
  onClose: () => void;
  cep: string;
  setCep: (text: string) => void;
  onConfirm: () => void;
};

function CepModal({ visible, onClose, cep, setCep, onConfirm }: Props) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
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
          <TouchableOpacity style={styles.confirmBtn} onPress={onConfirm}>
            <Text style={styles.confirmText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default CepModal;
