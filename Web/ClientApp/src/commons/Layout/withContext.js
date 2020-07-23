import React from 'react'

import { AppConsumer } from '../../contexts/AppProvider'

export function withContext(Component) {
    return function WrapperComponent(props) {
      return (
        <AppConsumer>
          { state => <Component {...props} context={state} />  }
        </AppConsumer>
      )
    }
}


