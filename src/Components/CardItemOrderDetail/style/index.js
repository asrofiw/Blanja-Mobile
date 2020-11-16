import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    height: 120,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    position: 'relative',
    shadowColor: '#000000',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 10,
    shadowRadius: 10,
    elevation: 10,
    marginBottom: 20,
  },
  img: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'powderblue',
    height: '100%',
    width: 104,
    marginRight: 10,
  },
  cardItem: {
    borderRadius: 10,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  content: {
    paddingVertical: 10,
    height: '100%',
    width: '68%',
    justifyContent: 'space-around',
  },
  colorSize: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  unitPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
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
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    lineHeight: 20,
    color: '#222222',
  },
  key: {
    fontSize: 12,
    color: '#9b9b9b',
    marginRight: 15,
  },
  value: {
    fontSize: 12,
    color: '#000000',
  },
});
