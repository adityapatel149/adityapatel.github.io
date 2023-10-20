import onClickUrl from "../OnClickUrl";

export default function LatestProjects() {
  return (
    <section className="latest-projects section-container">
      <h2>Latest Projects</h2>
      <div className="content-container-horizontal">
        <div
          className="project"
          onClick={onClickUrl("https://wordle-adityapatel149.vercel.app")}
        >
          <img src={"/images/wordle.jpg"} />
          <div className="project-content">
            <h4>Wordle Clone Using React</h4>
            <p>
              Wordle-inspired game built with React.js for word-solving fun.
            </p>
          </div>
        </div>

        <div
          className="project"
          onClick={onClickUrl(
            "https://dribbble.com/shots/22873068-Brand-Design-and-Landing-Page-for-Snacks-brand-MOOD",
          )}
        >
          <img src={"/images/mood-thumbnail.png"} />
          <div className="project-content">
            <h4>Landing Page For Snacks Brand</h4>
            <p>
              Crafted a captivating landing page and brand identity for 'Mood'
              snack brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
