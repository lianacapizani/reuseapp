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
    color: '#E94600',
  },
  card: {
    width: '30%',
    margin: '1.66%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 4,
  },
  name: {
    fontSize: 12,
    fontWeight: '500',
  },
  price: {
    fontSize: 12,
    color: '#666',
  },
});
