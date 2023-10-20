export default function Hero(){

    const emailId = "imadityapatel149@gmail.com"

    function sendEmail(){
    window.location = `mailto:${emailId}`;
    }

    return (<section className="hero">
        <div className="main">
        <h1>Aditya Patel</h1>
        <h3>Front-end Developer and UI/UX Engineer</h3>
        </div>
        <button className="primary-button" onClick={sendEmail}>
            <div className="btn-inside">
                <div className="btn-inside2">
                    Contact me
                </div>
            </div>            
        </button>
    </section>)
}