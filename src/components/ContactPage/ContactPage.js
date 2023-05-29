import "./ContactPage.css"


function ContactPage(){

    return (
        <>
        <div id="contact-page" className="contact-page-container">
            <div className="header-text">
                Contact us<span className="period-2">.</span>
            </div>

        <div className="contact-info-container">

            <div className>
                <div>
                    NEW BUSINESS:
                </div>

                <div className="contact-info">
                    INFO@LOFTYGROVE.COM
                </div>
                <br></br>
            </div>


            <div>
                <div>
                    JOIN LOFTY GROVE:
                </div>

                <div className="contact-info">
                    WORK@LOFTYGROVE.COM
                </div>
                    <br></br>
                </div>
            </div>


        </div>

        </>
        )
}

export default ContactPage;
