import React, { Component } from 'react'
import { Container,Image } from 'react-bootstrap'
import banner from "../images/home-banner.png"

export default class Home extends Component {
    render() {
        return (
                <>

                <Image src={banner} fluid/>
                </>
        )
    }
}
