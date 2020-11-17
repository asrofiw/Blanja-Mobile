import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  body: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  wrapperRating: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 35,
  },
  countRating: {
    alignItems: 'flex-start',
    width: '25%',
  },
  avgRate: {
    fontSize: 44,
    fontWeight: 'bold',
  },
  totalRate: {
    fontSize: 16,
    color: '#9b9b9b',
  },
  rate: {
    flexDirection: 'column',
    width: '75%',
  },
  wrapperRate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  wrapperRateBar: {
    width: '60%',
    marginRight: 10,
  },
  rateBar: {
    width: '75%',
    height: 8,
    backgroundColor: '#273AC7',
    borderRadius: 50,
  },
  txtRate: {
    fontSize: 14,
    color: '#4f4f4f',
  },
  titleReviews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  countReviews: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    padding: 10,
  },
  btnFooter: {
    height: 40,
    alignSelf: 'flex-end',
    backgroundColor: '#273AC7',
    padding: 10,
  },
  txtFooter: {
    fontSize: 12,
    textTransform: 'lowercase',
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
});
