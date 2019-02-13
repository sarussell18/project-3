import React from 'react'

import Jumbotron2 from './Jumbotron2';
import Donatepage from './Donatepage';
import Paypal from './Paypal';
import Before from './Before';


class Donorcomponentcontainer extends React.Component {

    render() {
        return (
            <React.Fragment>
            <Jumbotron2 />
            <Donatepage />
            <Paypal />
            <Before />
            </React.Fragment>
        );
    }
}

export default Donorcomponentcontainer