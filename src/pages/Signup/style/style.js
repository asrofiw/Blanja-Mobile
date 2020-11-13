import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 50,
  },
  itemForm: {
    width: '100%',
    borderColor: 'black',
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  btnSignup: {
    backgroundColor: '#273AC7',
  },
  txtLabel: {
    color: '#9B9B9B',
    fontSize: 14,
    fontFamily: 'Metropolis',
  },
  linkForgot: {
    display: 'flex',
    flex: 2,
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
