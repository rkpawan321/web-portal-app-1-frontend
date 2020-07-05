const useStyles = () => ({
  landingPageContainer: {
    // display: "flex",
    // flexDirection: "column",
    marginTop: "65px",
    // height: 'calc(100vh - 26px)',
    // marginLeft: '-70px',
    // width: 'calc(100vw - 70px)',
    // position: 'fixed',
    // left: '70px',
    height: '(100vh - 70px)',
    backgroundColor: 'white',
    // position: 'fixed',
    // paddingRight: '500px',
    overflowY: 'hidden',
    marginLeft: '70px',
    padding: '20px',

    // left: '0%'
    // zIndex: '0',
    // backgroundColor: 'red',
    // borderColor: 'blue',

  },
  

  title1Container: {
    background: 'white',
    paddingTop: '16px',
    paddingLeft: '20px',
    paddingBottom: '24px',
    position: 'fixed',
  },
  title1: {
    fontFamily: 'Manrope-Bold',
    fontSize: '16px',
    color: '#000000',
  },
  languageList: {
    marginTop: '64px',
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '100px',
  },
  languageTile: {
    height: '55px',
    borderRadius: '5px',
    backgroundColor: '#e5eaf9',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    paddingLeft: '20px',
    cursor: 'pointer',
  },
  languageName: {
    fontSize: '16px'
  },
  landingImageContainer: {
    paddingTop: '26px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    // overflow: 'auto',
    height: '500px',
  },
  landingIcon: {
    width: '312px',
    height: '250px',
    objectFit: 'contain',
  },
  title2: {
    fontFamily: 'Manrope-Bold',
    fontSize: '22px',
    color: ' #0033cc',
    marginTop: '47px',
  },
  title3: {
    fontFamily: 'Manrope-Regular',
    fontSize: '16px',
    color: ' #000000',
    marginTop: '6px',
  },
});

export default useStyles;