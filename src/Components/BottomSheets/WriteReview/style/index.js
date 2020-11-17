import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    backgroundColor: '#f9f9f9',
    height: 700,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  star: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 10,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  txtArea: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
  },
  wrapperBtnCam: {
    height: 105,
    width: 105,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  btnCam: {
    backgroundColor: '#273AC7',
    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
    marginBottom: 10,
  },
  txtAdd: {
    fontSize: 12,
  },
  btnSend: {
    backgroundColor: '#273AC7',
  },
});
