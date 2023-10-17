import React from 'react'
import Head  from 'next/head'

import FACEBOOK_PIXEL from './facebook/pixel'

export default ({name}) => {
  return(
    <Head>
      {name === 'FACEBOOK_PIXEL' && <FACEBOOK_PIXEL />}
    </Head>
  )
}