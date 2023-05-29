function Header(){

    //onclicks for about and contact that will scroll down to their respective sections
    const scrollToAbout = () => {
        const aboutSection = document.querySelector('#about-page');
        aboutSection.scrollIntoView({behavior: 'smooth'});
    }

    const scrollToContact = () => {
        const contactSection = document.querySelector('#contact-page');
        contactSection.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <div className="header-container">
                <div className="company-name-container">LOFTYGROVE</div>

                <div className="about-contact-container">
                    <div onClick={scrollToAbout} className="item-1">About</div>
                    <div onClick={scrollToContact} className="item-2">Contact</div>
                </div>
            </div>
        </>
        )
}

export default Header;
