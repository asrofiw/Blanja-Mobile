import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 270,
    marginRight: 10,
    marginBottom: 20,
  },
  cardItem: {
    backgroundColor: '#f9f9f9',
  },
  img: {
    width: '100%',
    height: 170,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  rate: {
    fontSize: 10,
    lineHeight: 10,
    color: '#9b9b9b',
  },
  store: {
    fontSize: 12,
    lineHeight: 12,
    color: '#9b9b9b',
    marginBottom: 2,
  },
  product: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default styles;
