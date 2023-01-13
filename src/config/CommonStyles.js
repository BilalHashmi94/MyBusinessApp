import Colors from './Colors';
import Metrix from './Metrix';

const CommonStyles = {
  textStyles: {
    heading: {
      // fontFamily: 'Lato-Semibold',
      fontSize: Metrix.customFontSize(25),
      color: Colors.white,
    },
    intro: {
      // fontFamily: 'Lato-Semibold',
      fontSize: Metrix.customFontSize(16),
      color: Colors.white,
    },
    semiHeading: {
      // fontFamily: 'Lato-Semibold',
      fontSize: Metrix.customFontSize(18),
      color: Colors.white,
    },
    textInputText: {
      // fontFamily: 'Lato-Semibold',
      fontSize: Metrix.customFontSize(15),
      color: Colors.white,
    },
    buttonText: {
      // fontFamily: 'Lato-Semibold',
      fontSize: Metrix.customFontSize(17),
      color: Colors.white,
    },
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Metrix.HorizontalSize(28),
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default CommonStyles;
