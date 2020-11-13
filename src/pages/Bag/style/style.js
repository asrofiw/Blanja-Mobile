import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  body: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  card: {
    height: 120,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    position: 'relative',
  },
  img: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: '100%',
    width: 104,
    marginRight: 10,
  },
  content: {
    width: '80%',
    height: '100%',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '80%',
    marginTop: 10,
  },
  item: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  desc: {
    flexDirection: 'row',
  },
  key: {
    fontSize: 12,
    color: '#9b9b9b',
  },
  value: {
    fontSize: 12,
    marginRight: 10,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
    paddingRight: 5,
  },
  wrapperCount: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 105,
    justifyContent: 'space-between',
  },
  btn: {
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  btnDelete: {
    borderColor: 'black',
    width: 170,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    position: 'absolute',
    right: '10%',
    top: '15%',
  },
  txtDelete: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 12,
  },
  footer: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    height: 150,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'center',
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalTxt: {
    fontSize: 14,
    color: '#9b9b9b',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnCheckout: {
    backgroundColor: '#273AC7',
  },
});

export default styles;
