import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D1E4C',
  },

  loginBox: {
    padding: 32,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  loginText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#4E4E4E',
  },

  loginButton: {
    backgroundColor: '#57A29E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  menuList: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});
