import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    section: {
    paddingHorizontal: 16,
    marginBottom: 24,
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewMore: {
    color: '#57A29E',
  },
  card: {
    width: '33%',
    margin: '2%',
    backgroundColor: '#f9f9f9', // opcional, para destacar
    padding: 8,
    borderRadius: 8,

  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 4,
  },
  price: {
    fontSize: 12,
    color: '#666',
  },
});
