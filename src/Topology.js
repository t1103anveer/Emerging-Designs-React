import React from 'react'
import BIRDS from 'vanta/dist/vanta.topology.min'

export default class Animation extends React.Component {
    constructor() {
        super();
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        this.vantaEffect = BIRDS({
            el: this.vantaRef.current,
            color: 0xfff,
            backgroundColor: 0x000,
            mouseControls: true,
            minHeight: 1000.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
        return <div ref={this.vantaRef}>

            <div className="title">
                <div className="title-part-one wow fadeInRight" data-wow-delay="1s">
                Bringing
                </div>
                <div className="title-part-two wow fadeInDown" data-wow-delay="1.5s">
                    Design
                </div>
                <div className="title-part-three wow fadeInLeft" data-wow-delay="2s">
                    to
                </div>
                <div className="title-part-four wow fadeInUp" data-wow-delay="2.5s">
                    Life
                </div>
                </div>
        </div>
    }
}