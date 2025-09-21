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

import hi from '../assets/hi.png'
import lo from '../assets/lo.png'

import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'
import five from '../assets/5.png'
import six from '../assets/6.png'   
import seven from '../assets/7.png'
import eight from '../assets/8.png'

export const biddingValues = [
    {
        name: '1',
        image: one,
        value: 1
    },
    {
        name: '2',
        image: two,
        value: 2        
    },
    {
        name: '3',
        image: three,   
        value: 3
    },
    {
        name: '4',
        image: four,
        value: 4
    },
    {
        name: '5',
        image: five,
        value: 5
    },
    {
        name: '6',
        image: six,
        value: 6
    },
    {
        name: '7',
        image: seven,
        value: 7
    },
    {
        name: '8',
        image: eight,
        value: 8
    }
]

export const cardSuits = [
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



export const cardValues = [
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

export const biddingSuits = [
    ...cardSuits,
    {
        name: 'high',
        image: hi
    },
    {
        name: 'low',
        image: lo
    }
];