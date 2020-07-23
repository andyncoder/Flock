import React from 'react';
import { connect } from 'react-redux';

import BasicPage from './Basic';

const mapStateToProps = (state) => {
    return {
        cases: [
            {   
                name: 'Sony A6000 Body Only (Graphite)',
                url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/1e9f5d79014773.Y3JvcCwxNjUxLDEyOTEsMTc1LDIw.jpg'
            },
            {   
                name: 'Sony Alpha A6000',
                url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/f908c279089355.Y3JvcCwxNjgyLDEzMTYsMCww.jpg'
            },
            {   
                name: 'Sony Alpha A6000 24.3MP Digital Camera - Black',
                url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/fe624d78399569.Y3JvcCw4MDgsNjMyLDAsMA.jpg'
            },
            {   
                name: 'Sony Alpha A6000 24.3MP Digital Camera - Black',
                url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/8048ef79080801.Y3JvcCwyNTk4LDIwMzIsMCw5MDY.jpg'
            },
            {   
                name: 'Sony Alpha A6000 24.3MP Digital Camera - Black',
                url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/734b7676045713.Y3JvcCwxNTk4LDEyNDksNTY1LDA.jpg'
            },
            {   
                name: 'Sony Alpha A6000 24.3MP Digital Camera - Black',
                url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/06169d78782999.Y3JvcCwyODAzLDIxOTMsMjAxLDA.jpg'
            },
        ]
    }
}


const BasicContainer =  connect(mapStateToProps, null)(BasicPage)
export { BasicContainer as BasicPage }

