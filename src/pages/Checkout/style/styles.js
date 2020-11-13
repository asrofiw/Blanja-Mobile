import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  body: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    paddingTop: 30,
    paddingBottom: 15,
  },
  card: {
    borderRadius: 10,
    borderWidth: 0.5,
    marginBottom: 20,
    borderColor: 'red',
  },
  cardItem: {
    borderStyle: 'solid',
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
  footer: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    height: 200,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'center',
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalTxt: {
    fontSize: 14,
    color: '#9b9b9b',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  summary: {
    fontSize: 18,
    color: '#9b9b9b',
  },
  summaryPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#273AC7',
  },
  btnCheckout: {
    backgroundColor: '#273AC7',
  },
  paymentMethod: {
    width: '100%',
  },
  imgPayment: {
    width: 64,
    height: 38,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
