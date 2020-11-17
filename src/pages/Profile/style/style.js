import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 80,
  },
  title: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  headProfile: {
    height: 70,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 30,
  },
  wrapperImg: {
    height: 64,
    width: 64,
    borderRadius: 50,
    marginRight: 20,
  },
  img: {
    height: 64,
    width: 64,
    borderRadius: 50,
    backgroundColor: 'blue',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtName: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  txtEmail: {
    fontSize: 14,
    color: '#9b9b9b',
  },
  btn: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#9B9B9B',
    borderBottomWidth: 0.5,
    paddingHorizontal: 20,
    height: 72,
  },
  txtTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 16,
    marginBottom: 10,
  },
  txtTitleLogout: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  txtChild: {
    fontSize: 12,
    lineHeight: 12,
    color: '#9B9B9B',
  },
  toast: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  btnOnModal: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#9b9b9b',
  },
  txtBtnModal: {
    textTransform: 'capitalize',
    fontSize: 14,
  },
});

export default style;
