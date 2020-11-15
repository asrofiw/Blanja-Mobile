import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    // paddingHorizontal: 20,
  },
  imgRoot: {
    width: '100%',
    position: 'relative',
  },
  titleImg: {
    width: 190,
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'absolute',
    left: '5%',
    top: '27%',
  },
  btnImg: {
    height: 40,
    width: 40,
    backgroundColor: '#ffffff50',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 10,
    right: '5%',
    top: '3%',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 10,
  },
  titleH1: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleTxt: {
    fontSize: 12,
    lineHeight: 12,
    color: '#9b9b9b',
  },
  btnViewAll: {
    height: 20,
  },
  txtBtn: {
    fontSize: 12,
    lineHeight: 12,
    color: 'black',
    textTransform: 'capitalize',
  },
});

export default styles;
