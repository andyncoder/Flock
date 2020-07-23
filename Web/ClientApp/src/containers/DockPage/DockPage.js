import React from 'react';
import { connect } from 'react-redux';

import Dock from './components/Dock/Dock'

const DockContainer =  connect()(Dock)
export { DockContainer as DockPage }

