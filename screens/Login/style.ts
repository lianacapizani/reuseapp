import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    fontFamily: "poppins",
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
  inner: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingTop: 60,
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: 'semibold',
    marginBottom: 32,
    color: '#2A2B67',
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginTop: 4,
  },
  checkboxLabel: {
    fontSize: 12,
    color: '#2A2B67',
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#2A2B67',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  
signupLink: {
  marginTop: 80,
  color: '#2A2B67',
  fontSize: 14,
  textAlign: 'center',
  textDecorationLine: 'underline',
},
});
