import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollView: {
    paddingStart: 20,
    paddingEnd: 20,
  },
  imgProduct: {
    height: 336,
    width: '100%',
  },
  wrapperBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  btn: {
    height: 40,
    width: 138,
    marginRight: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  txtBtn: {
    fontSize: 14,
    lineHeight: 14,
    color: 'black',
    textTransform: 'capitalize',
  },
  btnLove: {
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  wrapperTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  txtStore: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  txtProduct: {
    fontSize: 12,
    lineHeight: 12,
    color: '#9b9b9b',
    marginBottom: 7,
  },
  wrapperRate: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  txtRate: {
    fontSize: 11,
    lineHeight: 11,
    color: '#9b9b9b',
    marginLeft: 5,
    paddingBottom: 2,
  },
  price: {
    fontSize: 24,
    color: '#273AC7',
    fontWeight: 'bold',
  },
  txtDescription: {
    fontSize: 14,
    paddingHorizontal: 20,
    textAlign: 'justify',
    marginBottom: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleH1: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  txtTitle: {
    fontSize: 12,
    lineHeight: 12,
    color: 'black',
    textTransform: 'capitalize',
  },
  footer: {
    backgroundColor: 'white',
    padding: 20,
    height: 90,
  },
  btnFooter: {
    width: '100%',
    backgroundColor: '#273AC7',
  },
});

export default styles;
