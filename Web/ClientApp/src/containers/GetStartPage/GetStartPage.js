import React from 'react'
import { connect } from 'react-redux'

import GetStart from './Components/GetStart/GetStart'

const GetStartContainer = connect()(GetStart)
export { GetStartContainer as GetStartPage }
