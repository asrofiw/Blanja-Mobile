import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    height: '100%',
  },
  card: {
    height: 164,
  },
  cardTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 5,
  },
  cardStatus: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  txtOrderNo: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  txtDate: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9b9b9b',
  },
  txtKey: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9b9b9b',
    marginRight: 10,
  },
  txtValue: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  txtStatus: {
    fontSize: 14,
    lineHeight: 20,
    color: 'green',
  },
});

export default styles;
