import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    backgroundColor: '#f9f9f9',
    height: 500,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  btn: {
    justifyContent: 'flex-start',
    backgroundColor: '#273AC7',
  },
  btnTransparent: {
    backgroundColor: '#f9f9f9',
    justifyContent: 'flex-start',
  },
  txt: {
    textTransform: 'capitalize',
  },
  txtTransparent: {
    textTransform: 'capitalize',
    color: 'black',
    fontWeight: 'normal',
  },
});
