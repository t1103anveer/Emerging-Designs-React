import React from 'react';

export default function Contact() {

    return(

        <div>
            <a name="contact"></a>

            <section className="contact">

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-2 section-index wow fadeInUp" data-wow-delay="0.3s">04</div>
                        <div className="col-md-8 section-heading wow fadeInUp" data-wow-delay="0.4s">Contact us</div>
                    </div>

                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-6 icon-title wow fadeInUp" data-wow-delay="0.5s">Have a query or want a
                            quote?<br/> Get in touch with our contact form below.</div>
                    </div>

                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-6">
                            <form action="" name="contact-form" id="contact-form" method="POST">

                                <ul>

                                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                                        <label htmlFor="contact-name">Name :</label>
                                        <div className="textarea">
                                            <input type="text" name="contact-name" id="contact-name" value="" required/>
                                        </div>
                                    </li>

                                    <br/>

                                        <li className="wow fadeInUp" data-wow-delay="0.7s">
                                            <label htmlFor="contact-email">E-mail :</label>
                                            <div className="textarea">
                                                <input type="email" name="contact-email" id="contact-email" value=""
                                                       required/>
                                            </div>
                                        </li>

                                        <br/>

                                            <li className="wow fadeInUp" data-wow-delay="0.9s">
                                                <label htmlFor="contact-subject">Subject :</label>
                                                <div className="textarea">
                                                    <textarea name="contact-subject" id="contact-subject"
                                                              required/>
                                                </div>
                                            </li>

                                            <br/>

                                                <li className="wow fadeInUp" data-wow-delay="0.9s">
                                                    <label htmlFor="contact-project">Message :</label>
                                                    <div className="textarea">
                                                        <textarea name="contact-project" id="contact-project" rows="6"
                                                                  required/>
                                                    </div>
                                                </li>

                                </ul>

                                <button type="submit" name="contact-submit" id="contact-submit"
                                        className="send wow fadeInUp" data-wow-delay="0.9s">Send Message
                                </button>

                            </form>
                        </div>
                    </div>

                </div>

            </section>
        </div>

    )

}