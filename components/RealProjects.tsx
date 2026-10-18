import Image from "next/image";
import { REAL_PROJECTS } from "@/data/projects";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function RealProjects() {
  const [featuredProject, ...academicProjects] = REAL_PROJECTS;
  const whatsappUrl = getWhatsAppUrl("Oi Lucas! Vi o projeto da Imóveis Lucas Xavier no seu portfólio e queria um projeto parecido pro meu negócio.");

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
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <span className="st2 on">{featuredProject.badge}</span>
                {featuredProject.commercialTags?.map((tag) => (
                  <span key={tag} className="comm-badge">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 style={{ fontSize: "2.1rem", marginTop: "14px", letterSpacing: "-0.04em" }}>
                {featuredProject.title}
              </h3>
              <p style={{ marginTop: "10px", fontSize: "1rem", lineHeight: 1.5 }}>
                {featuredProject.desc}
              </p>
            </div>

            {featuredProject.image && (
              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pj-preview-wrap"
                title={`Abrir ${featuredProject.title}`}
              >
                <div className="pj-preview-bar">
                  <div className="pj-preview-dots">
                    <span className="dot dot-r"></span>
                    <span className="dot dot-y"></span>
                    <span className="dot dot-g"></span>
                  </div>
                  <span className="pj-preview-url">imoveislucasxavier.com.br</span>
                </div>
                <div className="pj-preview-img-box">
                  <Image
                    src={featuredProject.image}
                    alt="Screenshot da plataforma Imóveis Lucas Xavier"
                    width={1024}
                    height={492}
                    loading="lazy"
                    className="pj-preview-img"
                  />
                </div>
              </a>
            )}

            <div style={{ marginTop: "20px" }}>
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
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                  <span className="st2">{proj.badge}</span>
                  {proj.commercialTags?.map((tag) => (
                    <span key={tag} className="comm-badge">
                      {tag}
                    </span>
                  ))}
                </div>
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

        {/* CTA Banner ao fim de Projetos */}
        <div className="projects-cta-banner">
          <div className="projects-cta-text">
            <h4>Gostou desse nível de acabamento?</h4>
            <p>Construo a presença digital do seu negócio com a mesma velocidade e tecnologia.</p>
          </div>
          <div className="projects-cta-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="cta-projects-whatsapp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.551 4.102 1.517 5.831L0 24l6.335-1.489C8.016 23.473 9.948 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.57-.498-5.056-1.365l-.362-.213-3.76.884.903-3.663-.233-.377C2.57 15.77 2 13.948 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              <span>Quero um projeto parecido</span>
            </a>
            <a href="#planos" className="btn-conv-plan-link">
              <span>Ver planos e valores ↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
