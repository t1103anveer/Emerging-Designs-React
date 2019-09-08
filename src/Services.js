import React from 'react';

export default function Services() {

    return(

        <div>

            <a name="services"></a>

            <section className="services">

                <div className="container-fluid">

                    <div className="section-data">

                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-2 section-index wow fadeInUp" data-wow-delay="0.3s">02</div>
                            <div className="col-md-8 section-heading wow fadeInUp" data-wow-delay="0.4s">Our Services
                            </div>
                        </div>

                        <div className="row service">
                            <div className="col-md-4"></div>
                            <div className="col-md-3 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="icon">
                                    <ion-icon name="finger-print"></ion-icon>
                                </div>
                                <div className="icon-title">
                                    Creating bespoke website designs to suit your business.
                                </div>
                            </div>

                            <div className="col-md-3 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="icon">
                                    <ion-icon name="logo-buffer"></ion-icon>
                                </div>
                                <div className="icon-title">
                                    Using new technologies to develop cutting edge websites.
                                </div>
                            </div>
                        </div>

                        <div className="row service">
                            <div className="col-md-4"></div>
                            <div className="col-md-3 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="icon">
                                    <ion-icon name="cloud-upload"></ion-icon>
                                </div>
                                <div className="icon-title">
                                    Managing and modernising your website.
                                </div>
                            </div>

                            <div className="col-md-3 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="icon">
                                    <ion-icon name="color-palette"></ion-icon>
                                </div>
                                <div className="icon-title">
                                    GFX design on images and videos to support your marketing material.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </div>

    )

}