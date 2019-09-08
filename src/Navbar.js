import React from 'react';

export default class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {

            toggled: false

        };

        this.toggle = this.toggle.bind(this)

    }

    toggle(){

        const {
            toggled
        }  = this.state;

        this.setState ({

            toggled: !toggled
        })

    }

    render() {

        const {
            toggled
        }  = this.state;

        return (

            <div>

                <nav className="nav">
                  <span id="brand">
                        <a href="index.html"><div className="logo"></div></a>
                  </span>

                    <ul id="menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <a id="toggle" className={toggled?"on":""} onClick={this.toggle}>
                        <div className="span">menu</div>
                    </a>

                </nav>

                <div id="resize" className={toggled?"active":""}>
                    <a className="close-btn" onClick={this.toggle}>close</a>

                    <ul id="menu">
                        <li><a href="#home" onClick={this.toggle}>Home</a></li>
                        <li><a href="#about" onClick={this.toggle}>About us</a></li>
                        <li><a href="#services" onClick={this.toggle}>Services</a></li>
                        <li><a href="#portfolio" onClick={this.toggle}>Portfolio</a></li>
                        <li><a href="#contact" onClick={this.toggle}>Contact</a></li>
                    </ul>
                </div>

            </div>

        )
    }

}