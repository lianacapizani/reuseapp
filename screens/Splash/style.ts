import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // fundo branco
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 80,
  },
  logo: {
    width: 320,
    height: 320,
    marginBottom: 32, // espaço entre logo e texto
    marginTop: -160, // "puxa" a logo para cima do centro
  },
  slogan: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    lineHeight: 24,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    fontSize: 12,
    color: '#999',
    paddingHorizontal: -40,
  },
});