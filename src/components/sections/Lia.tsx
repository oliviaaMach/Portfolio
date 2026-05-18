import "./Lia.css";

export default function Lia() {
  return (
    <section className="lia" id="lia">
      <div className="lia-container">
        <div>
          <p className="section-label">LIA Placement</p>

          <h2>I’m looking for a LIA opportunity</h2>

          <p className="lia-text">
            I’m looking for a company where I can grow as a developer,
            contribute to real projects and learn from experienced developers.
          </p>
        </div>

        <div className="lia-card">
          <div>
            <h3>I can contribute with</h3>
            <p>React, TypeScript, JavaScript, CSS, UI development and problem solving.</p>
          </div>

          <div>
            <h3>I want to learn</h3>
            <p>Team workflows, code reviews, testing, APIs and professional development processes.</p>
          </div>

          <div>
            <h3>My goal</h3>
            <p>To become a confident junior developer and contribute with clean, thoughtful code.</p>
          </div>
        </div>
      </div>
    </section>
  );
}