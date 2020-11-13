import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 30,
  },
  itemInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 65,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderColor: 'white',
  },
  label: {
    fontSize: 14,
    color: '#9b9b9b',
    marginHorizontal: 20,
    top: 10,
  },
  input: {
    fontSize: 14,
  },
  btnLogin: {
    backgroundColor: '#273AC7',
  },
  linkForgot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  txtForgot: {
    fontSize: 14,
    fontFamily: 'Metropolis',
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default styles;
