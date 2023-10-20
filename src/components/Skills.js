export default function Skills(){
    return(
        <section className="skills section-container">
            <h2>Skills</h2>
            <div class="skill-category">

                <div className="skill-header">
                    <div className="icon-container design-icon">
                        <img src="/svg/pallette.svg" alt="" />
                    </div>
                    <h4>Design</h4>
                </div>

                <div className="skill-stack">

                    <div className="stack-row">
                        <div className="skill">
                            <p>Web Design</p>
                            <div className="skill-seperator"></div>
                            <p>Mobile Design</p>
                        </div>
                        <div className="skill">
                            <p>User experience</p>
                        </div>
                    </div>

                    <div className="stack-row">
                        <div className="skill">
                            <p>Brand design</p>
                        </div>
                        <div className="skill">
                            <p>Design system</p>
                        </div>
                        <div className="skill">
                            <p>User Research</p>
                        </div>
                    </div>

                    <div className="stack-row">
                        <div className="skill">
                            <p>Wireframing</p>
                            <div className="skill-seperator"></div>
                            <p>Prototyping</p>
                            <div className="skill-seperator"></div>
                            <p>Testing</p>
                        </div>
                    </div>

                </div>
            </div>


            <div class="skill-category">
                
                <div className="skill-header">
                    <div className="icon-container development-icon">
                        <img src="/svg/code.svg" alt="" />
                    </div>
                    <h4>Development</h4>
                </div>

                <div className="skill-stack">

                    <div className="stack-row">
                        <div className="skill">
                            <p>React</p>
                            <div className="skill-seperator"></div>
                            <p>Redux</p>
                        </div>
                        <div className="skill">
                            <p>Github</p>
                        </div>
                    </div>

                    <div className="stack-row">
                        <div className="skill">
                            <p>HTML</p>
                            <div className="skill-seperator"></div>
                            <p>CSS</p>
                            <div className="skill-seperator"></div>
                            <p>JavaScript</p>
                        </div>
                    </div>

                    <div className="stack-row">
                        <div className="skill">
                            <p>Python</p>
                            <div className="skill-seperator"></div>
                            <p>Java</p>
                            <div className="skill-seperator"></div>
                            <p>C/C++</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}