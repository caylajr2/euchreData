import spade from '../assets/spade.png'
import heart from '../assets/heart.png'
import diamond from '../assets/diamond.png'
import club from '../assets/club.png'

import ace from '../assets/A-black.png'
import king from '../assets/K-black.png'
import queen from '../assets/Q-black.png'
import jack from '../assets/J-black.png'
import ten from '../assets/ten-black.png'
import nine from '../assets/nine-black.png'

// export const suits = [ spade, heart, diamond, club ];
// export const values = [ ace, king, queen, jack, ten, nine ];

export const suits = [
    {
        name: 'spade',
        image: spade
    }, 
    {
        name: 'heart',
        image: heart
    }, 
    {
        name: 'diamond',
        image: diamond
    }, 
    {
        name: 'club',
        image: club     
        }
    ];

export const values = [
    {
        name: 'Ace',
        image: ace
    }, 
    {   
        name: 'King',
        image: king
    },
    {
        name: 'Queen',
        image: queen
    },
    {
        name: 'Jack',
        image: jack
    },
    {
        name: '10',
        image: ten
    },
    {
        name: '9',
        image: nine
    }
];