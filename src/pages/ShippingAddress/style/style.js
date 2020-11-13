import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  itemInput: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    paddingVertical: 30,
  },
  card: {
    borderRadius: 10,
    borderWidth: 0.5,
    marginBottom: 20,
  },
  cardItem: {
    borderRadius: 10,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 7,
  },
  btnChange: {
    height: 25,
  },
  txtName: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  txtBtnChange: {
    fontSize: 14,
    lineHeight: 20,
    color: 'red',
    textTransform: 'capitalize',
  },
  txt: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 2,
  },
});

export default styles;
