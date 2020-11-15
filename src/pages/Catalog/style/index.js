import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  top: {
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 10,
  },
  topInside: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 3,
    alignContent: 'stretch',
  },
  btn: {
    justifyContent: 'flex-start',
    width: '45%',
    height: 24,
  },
  btnIcon: {
    width: '10%',
    height: 24,
    justifyContent: 'flex-end',
  },
  txt: {
    fontSize: 12,
    marginHorizontal: 3,
  },
  bodyGrid: {
    paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bodyList: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});
