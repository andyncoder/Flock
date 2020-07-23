import React from 'react';
import { connect } from 'react-redux';

import Discovery from './Discovery/Discovery'

const DiscoveryContainer =  connect()(Discovery)
export { DiscoveryContainer as DiscoveryPage }
