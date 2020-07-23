import React, { Component } from 'react';
import './style.css'
import ExploreBar from './ExploreBar';
import ExploreTile from './ExploreTile';

const style = {
    height: '100%'
}


class Explore extends Component {

    constructor(props){
        super(props)
        this.state = {
            explorers: [
                { title : 'Genres', url: '/playlists/genres' },
                { title : 'Vibes', url: '/playlists/vibes' },
                { title : 'Filmmakers', url: '/playlists/filmmakers' },
                { title : 'All', url: '/playlists' }
            ],
            selected: 'All',
            tiles: [
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

    onSelected = (e, item) => {
        e.preventDefault();
        this.setState({selected : item})
    }

    render() {

        const { selected, explorers, tiles } = this.state;

        return(
            <div className='explorer-content content container' 
                style={style}>
                <ExploreBar 
                    selected={selected} 
                    explorers={explorers}
                    onSelected={this.onSelected}
                />
                <ExploreTile tiles={tiles} />
            </div>
        )
    }

    
}

export default Explore;