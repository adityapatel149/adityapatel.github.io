export default function WorkExperience(){
    return (
        <section className="work-experience section-container">
            <h2>Work Experience</h2>
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
                            <div className="badge"><p>Present</p></div>
                            <div className="location">
                                <img src={'/svg/location.svg'}/>
                                <p>Vadodara, India</p>
                            </div>
                        </div>
                        <div className="item-description">
                            <div className="item-header">
                                <img src={"/images/meta.png"}/>
                                <div className="item-name">
                                    <p className="subtitle">UI/UX Engineer</p>
                                    <p className="title">Electrum IT Solutions</p>
                                </div>
                            </div>
                            <ul>
                                <li><p>Conducted user research through surveys and interviews, informing the design process.</p></li>
                                <li><p>Produced wireframes, interactive prototypes, and high fidelity UI designs with tools like Figma, Adobe Illustrator, and Adobe After Effects, optimizing design-to-development flow.</p></li>
                                <li><p>Collaborated with cross-functional teams to translate user requirements into effective design solutions.</p></li>
                            </ul>
                        </div>
                    </div>

                </div>

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
                            <p>Feb 2023 - May 2023</p>
                            <div className="location">
                                <img src={'/svg/location.svg'}/>
                                <p>Vadodara, India</p>
                            </div>
                        </div>
                        <div className="item-description">
                            <div className="item-header">
                                <img src={"/images/meta.png"}/>
                                <div className="item-name">
                                    <p className="subtitle">UI/UX ENGINEER INTERN</p>
                                    <p className="title">Electrum IT Solutions</p>
                                </div>
                            </div>
                            <ul>
                                <li><p>During the internship, contributed to wireframe, prototype, and UI design creation.</p></li>
                                <li><p>Worked closely with senior designers to enhance design concepts and implement responsive design principles using HTML, CSS, and JavaScript.</p></li>                            
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
                            <p>Jun 2022 - Jul 2022</p>
                            <div className="location">
                                <img src={'/svg/location.svg'}/>
                                <p>Ahmedabad, India</p>
                            </div>
                        </div>
                        <div className="item-description">
                            <div className="item-header">
                                <img src={"/images/meta.png"}/>
                                <div className="item-name">
                                    <p className="subtitle">Web Development INTERN</p>
                                    <p className="title">BrainyBeam Technologies Pvt. Ltd.</p>
                                </div>
                            </div>
                            <ul>
                                <li><p>Conceptualized and built Product Sales Manager for vendors to integrate the inventory and product sales. It also allowed customers to see all products from various vendors in the same place. Included features like login authentication, product search, and product management.</p></li>
                                <li><p>Built using Django, Python, HTML, CSS and Javascript.</p></li>                            
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}