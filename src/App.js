import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer"
import Hero from "./Hero"
import About from "./About"
import Services from "./Services"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap";
import "./style.css"
import "wow.js/css/libs/animate.css"
import $ from "jquery"
import WOW from "wow.js";


class App extends React.Component {

    componentDidMount() {
        $(document).scroll(function () {
            var $nav = $(".nav");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });

        $('a[href*="#"]')
        // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                    &&
                    window.location.hostname === this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });
    }

    render() {

        return (
            <div>

                <Navbar/>

                <Hero/>

                <div className="content">

                    <About/>

                    <Services/>

                    <Portfolio/>

                    <Contact/>

                    <Footer/>

                </div>

                {
                    new WOW().init()
                }

            </div>
        )


    }

}



export default App;
