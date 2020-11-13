import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
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
