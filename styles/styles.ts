import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#EFF5F9',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  HeaderContainerView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:28
  },
  homeText: {
    color: '#252B41',
    fontFamily: 'Poppins',
    fontSize: 30,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 39,
    includeFontPadding: false,
  },
  updatedText: {
    color: '#666B7A',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 15.6, 
    includeFontPadding: false,
  },
  iconsContainer:{
    display:'flex',
    flexDirection:'row',
    gap:16,
    alignItems:'center'
  }
});

export default styles;
