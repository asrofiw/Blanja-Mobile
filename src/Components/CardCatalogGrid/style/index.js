import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    width: 165,
    height: 270,
    marginRight: 10,
    marginBottom: 20,
  },
  cardItem: {
    backgroundColor: '#f9f9f9',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  img: {
    width: '100%',
    height: 184,
    borderRadius: 10,
    backgroundColor: 'powderblue',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 8,
    marginBottom: 7,
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
    marginBottom: 5,
  },
  product: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  price: {
    fontSize: 14,
    lineHeight: 20,
  },
});
