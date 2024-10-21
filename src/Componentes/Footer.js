import React from 'react';

function Footer() {
    const { isLanguageSpanish, toggleLanguageToSpanish, toggleLanguageToEnglish } = useLanguage();
    const navigate = useNavigate();

    const handleNavigate = (destiny) => {
        navigate(`/${destiny}`);
    };
    
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p>&copy; {new Date().getFullYear()} Moodly. All rights reserved.</p>
                </div>
                <div className="footer-links">
                    <button onClick={() => handleNavigate("")} className="text-white text-2xl ml-2 transition-transform duration-200 hover:scale-110 font-mochiy">
                        Privacy Policy
                    </button>
                    <button onClick={() => handleNavigate("")} className="text-white text-2xl ml-2 transition-transform duration-200 hover:scale-110 font-mochiy">
                        cookie Policy
                    </button>
                </div>
            </div>
        </footer>
    );
}
    export default Footer;
