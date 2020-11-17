import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    backgroundColor: '#f9f9f9',
    height: 300,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  wrapperBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 15,
  },
});
