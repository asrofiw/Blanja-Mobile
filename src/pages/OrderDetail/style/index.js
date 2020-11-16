import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  order: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  orderNo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#9b9b9b',
  },
  tracking: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  trackingTitle: {
    fontSize: 14,
    color: '#9b9b9b',
  },
  trackingNo: {
    fontSize: 14,
    color: '#000000',
  },
  status: {
    fontSize: 14,
    color: 'green',
  },
  txtItemCount: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 20,
  },
  orderInformation: {
    marginTop: 35,
    marginBottom: 15,
  },
  orderContent: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  orderKey: {
    width: '40%',
    fontSize: 14,
    color: '#9b9b9b',
  },
  orderValue: {
    width: '60%',
    fontSize: 14,
    color: '#000000',
    textAlign: 'justify',
  },
  btnBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btnOrder: {
    height: 36,
    width: '45%',
    justifyContent: 'center',
  },
  txtOrder: {
    textTransform: 'capitalize',
  },
  btnFeedback: {
    height: 36,
    width: '45%',
    justifyContent: 'center',
    backgroundColor: '#273AC7',
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 10,
    shadowRadius: 5,
    elevation: 10,
    marginBottom: 20,
  },
  txtFeedback: {
    textTransform: 'capitalize',
  },
});
