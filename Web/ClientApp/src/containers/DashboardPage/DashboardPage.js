import React from 'react';
import { connect } from 'react-redux';

import Dashboard from './Dashboard/Dashboard'

const DashboardContainer =  connect()(Dashboard)
export { DashboardContainer as DashboardPage }
