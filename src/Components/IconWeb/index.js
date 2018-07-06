import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'

import Colors from '../../Themes/Colors'

fontawesome.library.add(brands, solid)

const IconWeb = (props) => {
  const { icon, color, size } = props

  return <FontAwesomeIcon icon={icon} color={color || Colors.buttonText} size={size || 'lg'} />
}

export default IconWeb
