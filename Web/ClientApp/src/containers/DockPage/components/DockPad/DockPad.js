import { connect } from 'react-redux';
import Dock from './Dock'


const mapStateToProps = (state) => {

    return {
        padStar: {
            name: 'Houston Astro',
            desc: 'Baseball team of Houston...'
        },
        pads: [
            { 
              name: 'pad 01',
              desc: 'Augmented reality sound'
            },
            { 
              name: 'pad 02',
              desc: 'Lets Play Volumn 1'
            },
            { 
              name: 'pad 03',
              desc: 'Collecteurs: The Crowdsourced Museum of the Future 34% funded'
            }
        ]
    }
}
 
const DockPadContainer =  connect(mapStateToProps, null)(Dock)
export { DockPadContainer as DockPad }

