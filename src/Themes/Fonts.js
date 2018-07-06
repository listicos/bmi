import Colors from './Colors'

const weight = {
  light: '300',
  regular: '400',
  bold: '700'
}

const family = {
  raleway: 'Raleway',
  oswald: 'Oswald'
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 18,
  text: 16,
  regular: 14,
  medium: 12,
  small: 10,
  tiny: 8
}

const style = {
  h1: {
    fontFamily: family.raleway,
    fontSize: size.h1,
    fontWeight: weight.bold,
    color: Colors.text
  },
  h2: {
    fontFamily: family.raleway,
    fontSize: size.h2,
    fontWeight: weight.bold,
    color: Colors.text
  },
  h3: {
    fontFamily: family.raleway,
    fontSize: size.h3,
    fontWeight: weight.bold,
    color: Colors.text
  },
  h4: {
    fontFamily: family.raleway,
    fontSize: size.h4,
    fontWeight: weight.regular,
    color: Colors.text
  },
  h5: {
    fontFamily: family.raleway,
    fontSize: size.h5,
    fontWeight: weight.regular,
    color: Colors.text
  },
  h6: {
    fontFamily: family.raleway,
    fontSize: size.h6,
    fontWeight: weight.regular,
    color: Colors.text,
    letterSpacing: 0.5
  },
  text: {
    fontFamily: family.raleway,
    fontSize: size.text,
    fontWeight: weight.regular,
    color: Colors.text,
    letterSpacing: 0.5
  },
  inputNumber: {
    fontFamily: family.oswald,
    fontSize: 56,
    fontWeight: weight.bold,
    color: Colors.text,
    letterSpacing: 1
  }
}

export default {
  weight,
  family,
  size,
  style
}
