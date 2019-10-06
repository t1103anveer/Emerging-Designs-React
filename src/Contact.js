import React from 'react';


export default class Contact extends React.Component{

    submitClick(){
        alert('Message Sent!')
    }

    sendMail(){

        const {
            name,
            email,
            subject,
            message
        }  = this.state;

        fetch("https://script.google.com/macros/s/AKfycbySezAHATZ1eGVPP5Nv32vz0MqTOe-HHqYRRwP73etOX6AO2a0/exec", {

            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name : name,
                email: email,
                subject: subject,
                message: message
            }),

        }).then( (resp) => {

            console.log(JSON.stringify(resp));

        });

    }

    constructor(props) {
        super(props);

        this.state = {

            name: "",
            email: "",
            subject: "",
            message: ""


        };

        this.sendMail = this.sendMail.bind(this)

    }


    render(){

        const {
            name,
            email,
            subject,
            message
        }  = this.state;


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
                                <form  name="contact-form" id="contact-form">

                                    <ul>

                                        <li className="wow fadeInUp" data-wow-delay="0.6s">
                                            <label htmlFor="contact-name">Name :</label>
                                            <div className="textarea">
                                                <input onChange={e =>{this.setState({name: e.target.value})}} type="text" name="contact-name" id="contact-name" value={name} required/>
                                            </div>
                                        </li>

                                        <br/>

                                        <li className="wow fadeInUp" data-wow-delay="0.7s">
                                            <label htmlFor="contact-email">E-mail :</label>
                                            <div className="textarea">
                                                <input onChange={e =>{this.setState({email: e.target.value})}} type="email" name="contact-email" id="contact-email" value={email}
                                                       required/>
                                            </div>
                                        </li>

                                        <br/>

                                        <li className="wow fadeInUp" data-wow-delay="0.9s">
                                            <label htmlFor="contact-subject">Subject :</label>
                                            <div className="textarea">
                                                    <textarea onChange={e =>{this.setState({subject: e.target.value})}} name="contact-subject" id="contact-subject" value={subject}
                                                              required/>
                                            </div>
                                        </li>

                                        <br/>

                                        <li className="wow fadeInUp" data-wow-delay="0.9s">
                                            <label htmlFor="contact-project">Message :</label>
                                            <div className="textarea">
                                                        <textarea onChange={e =>{this.setState({message: e.target.value})}} name="contact-project" id="contact-project" rows="6" value={message}
                                                                  required/>
                                            </div>
                                        </li>

                                    </ul>

                                    <button type="button" name="contact-submit" id="contact-submit"
                                            className="send wow fadeInUp" data-wow-delay="0.9s" onClick={this.sendMail && this.submitClick}>Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>

                </section>
            </div>

        )

    }


}