export default function WorkExperience(){
    return (
        <section className="education section-container">
            <h2>Education</h2>
            <div className="content-container">
                <div className="timeline-item">
                    <div className="timeline-line">
                        <div className="dot">
                            <img src={'/svg/dot.svg'}/>
                        </div>
                        <div className="divider">
                            <div className="line" />
                        </div>
                        
                    </div>
                    <div className="timeline-item-content">
                        <div className="date-time">
                            <div className="badge"><p>Always</p></div>
                            <div className="location">
                                <img src={'/svg/location.svg'}/>
                                <p>Everywhere</p>
                            </div>
                        </div>
                        <div className="item-description">
                            <div className="item-header">
                                <img src={"/images/meta.png"}/>
                                <div className="item-name">
                                    <p className="subtitle">Self-learner</p>
                                    <p className="title">From each job, class, article, co-worker, book, or life experiences</p>
                                </div>
                            </div>
                            <ul>
                                <li><p>This is how I learnt most of the things I know and how I improve it. At the moment, I am learning ReactJS, Redux, Product Design, and Brand Design.</p></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="timeline-item">
                    <div className="timeline-line">
                        <div className="dot">
                            <img src={'/svg/dot.svg'}/>
                        </div>                        
                    </div>
                    <div className="timeline-item-content">
                        <div className="date-time">
                            <p>2019-2023</p>
                            <div className="location">
                                <img src={'/svg/location.svg'}/>
                                <p>Vadodara, India</p>
                            </div>
                        </div>
                        <div className="item-description">
                            <div className="item-header">
                                <img src={"/images/meta.png"}/>
                                <div className="item-name">
                                    <p className="subtitle">COMPUTER SCIENCE & ENGINEERING, BACHELOR OF ENGINEERING (B.E.)</p>
                                    <p className="title">Babaria Institute of Technology & Science</p>
                                </div>
                            </div>
                            <ul>
                                <li><p>I studied my bachelor degree in this college. This is where I learnt Engineering subjects, Programming, Web Development, Database Management, Computer Architecture, and Networking. CGPA:9.4/10</p></li>                            
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}