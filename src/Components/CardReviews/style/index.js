import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardItems: {
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 2,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ava: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: 'powderblue',
    marginRight: 10,
  },
  body: {
    width: '100%',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  topContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  star: {
    flexDirection: 'row',
  },
  date: {
    fontSize: 14,
    color: '#9b9b9b',
  },
  content: {
    lineHeight: 21,
    fontSize: 14,
    textAlign: 'justify',
    color: '#222222',
    marginBottom: 10,
  },
  bottomContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  txtBottom: {
    fontSize: 12,
    color: '#9b9b9b',
    marginRight: 10,
  },
});
