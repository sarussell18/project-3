import React from 'react'

import NavBarjumbo from './NavBarjumbo';
import Jumbotron2 from './Jumbotron2';
import Donatepage from './Donatepage';
import Paypal from './Paypal';
import Before from './Before';


class Donorcomponentcontainer extends React.Component {

    render() {
        return (
            <React.Fragment>
            <NavBarjumbo />
            <Jumbotron2 />
            <Donatepage />
            <Paypal />
            <Before />
            </React.Fragment>
        );
    }
}

export default Donorcomponentcontainer