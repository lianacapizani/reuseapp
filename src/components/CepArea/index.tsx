import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './style';
import LocationButton from './LocationButton';
import CepModal from './CepModal';

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
      {localInfo ? (
        <LocationButton text={localInfo} onPress={() => setModalVisible(true)} isInfo />
      ) : (
        <LocationButton text="Adicionar endereço" onPress={() => setModalVisible(true)} />
      )}

      <CepModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        cep={cep}
        setCep={setCep}
        onConfirm={buscarCEP}
      />
    </View>
  );
}

export default CepArea;
