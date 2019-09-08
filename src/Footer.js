import React from 'react';

export default function Footer() {


    return(

        <div className="footer">

            <div className="container">

                <div className="info">

                    <div className="row">
                        <div className="col-md-4 wow fadeInUp" data-wow-delay="0.3s" id="address">
                            <p>Workarea</p>
                            <h4>Emerging Designs</h4>
                            <h4>South Wales</h4>
                            <h4>United Kingdom</h4>

                            <br/>
                        </div>


                        <div className="col-md-4 wow fadeInUp" data-wow-delay="0.4s" id="media">

                            {/*
                            <ul>
                                  <li><ion-icon name="logo-facebook"></ion-icon></li>

                                  <li><ion-icon name="logo-instagram"></ion-icon></li>

                                  <li><ion-icon name="logo-twitter"></ion-icon></li>

                                  <li><ion-icon name="logo-youtube"></ion-icon></li>
                            </ul>
                            */}


                            <br/>
                        </div>



                        <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s" id="mail">
                            <p>Contact Details</p>
                            <h4>emergingdesign@outlook.com</h4>
                            <h4>(+44) 7740353616</h4>

                            <br/>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

