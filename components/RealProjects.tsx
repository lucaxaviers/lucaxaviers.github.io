import { REAL_PROJECTS } from "@/data/projects";

export default function RealProjects() {
  const [featuredProject, ...academicProjects] = REAL_PROJECTS;

  return (
    <section id="projetos" className="reveal-on-scroll">
      <div className="w">
        <h2>Trabalho que já está no ar.</h2>
        <p className="sub">
          Meus projetos próprios e acadêmicos, desenvolvidos com a mesma stack de alta performance que aplico nos sites de clientes.
        </p>

        <div className="pj">
          {/* Main Featured Production Project */}
          <div className="bc l">
            <div>
              <span className="st2 on">{featuredProject.badge}</span>
              <h3 style={{ fontSize: "2.1rem", marginTop: "14px", letterSpacing: "-0.04em" }}>
                {featuredProject.title}
              </h3>
              <p style={{ marginTop: "10px", fontSize: "1rem", lineHeight: 1.5 }}>
                {featuredProject.desc}
              </p>
            </div>

            <div style={{ marginTop: "24px" }}>
              <div className="pills" style={{ marginBottom: "20px" }}>
                {featuredProject.technologies.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>

              {featuredProject.link && (
                <a
                  className="btn"
                  href={featuredProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="link-imoveis-xavier"
                >
                  {featuredProject.linkText || "Abrir o site"}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Academic Projects */}
          {academicProjects.map((proj) => (
            <div key={proj.id} className="bc">
              <div>
                <span className="st2">{proj.badge}</span>
                <h3 style={{ marginTop: "12px", fontSize: "1.4rem" }}>{proj.title}</h3>
                <p style={{ marginTop: "6px" }}>{proj.desc}</p>
              </div>

              <div className="pills" style={{ marginTop: "16px" }}>
                {proj.technologies.map((tech) => (
                  <span key={tech} className="pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
