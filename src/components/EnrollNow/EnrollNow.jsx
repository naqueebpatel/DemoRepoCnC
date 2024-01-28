import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './enrollnow.css';
const EnrollNow = ( { handleModal } ) =>
{
    const handleClick = () =>
    {
        handleModal();
    };
    return (
        <div>
            <section className="ftco-section">
                <div className="container1">
                    <div className="row1 justify-content-center">
                        <div className="col-md-12" style={ { top: "16vh" } }>
                            <div className="wrapper1">
                                <div className="row1 no-gutters1">
                                    <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                        <CloseIcon className='close-icon' onClick={ handleClick } />
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3 className="mb-4">Get in touch</h3>
                                            <div id="form-message-warning" className="mb-4"></div>
                                            <div id="form-message-success" className="mb-4">
                                                Your message was sent, thank you!
                                            </div>
                                            <form className="contactForm">
                                                <div className="row1">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" for="name">Full Name</label>
                                                            <input type="text" className="form-control" name="name" id="name"
                                                                placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" for="email">Email Address</label>
                                                            <input type="email" className="form-control" name="email" id="email"
                                                                placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" for="subject">Subject</label>
                                                            <input type="text" className="form-control" name="subject" id="subject"
                                                                placeholder="Subject" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" for="#">Message</label>
                                                            <textarea name="message" className="form-control" id="message" cols="30"
                                                                row1s="4" placeholder="Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="submit" onClick={ handleClick } value="Send Message" className="btn btn-primary" />
                                                            <div className="submitting"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                                        <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                                            <h3>Let's get in touch</h3>
                                            <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                                            <div className="dbox w-100 d-flex align-items-start">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-map-marker"></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-phone"></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-paper-plane"></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Email:</span> <a
                                                        href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="fa fa-globe"></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Website</span> <a href="#">yoursite.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EnrollNow;