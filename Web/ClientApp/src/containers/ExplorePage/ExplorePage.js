import React from 'react';
import { connect } from 'react-redux';

import Explore from './components/Explore/Explore'

const ExploreContainer =  connect()(Explore)
export { ExploreContainer as ExplorePage }

