import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  body: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  imgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    width: 64,
    height: 64,
    borderRadius: 50,
  },
  itemInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 65,
    paddingHorizontal: 20,
    marginBottom: 2,
  },
  itemInputPass: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 65,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  borderErr: {
    borderColor: 'red',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 65,
    paddingHorizontal: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 2,
    shadowRadius: 5,
    elevation: 2,
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
  subTitlePass: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  subTitleBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  txtBtn: {
    textTransform: 'capitalize',
  },
  txtError: {
    fontSize: 12,
    color: 'red',
    marginTop: 2,
    marginBottom: 5,
    textAlign: 'right',
    marginLeft: 5,
  },
  header: {
    backgroundColor: '#f9f9f9',
    shadowColor: '#000000',
    paddingTop: 10,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 60,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#9b9b9b',
    marginBottom: 10,
  },
  toast: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
});

export default styles;
