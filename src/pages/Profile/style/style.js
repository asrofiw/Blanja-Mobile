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
  img: {
    height: 64,
    width: 64,
    borderRadius: 50,
    marginRight: 20,
  },
  btnProfile: {
    height: 70,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 30,
  },
  txtName: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  txtEmail: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9B9B9B',
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
});

export default style;
