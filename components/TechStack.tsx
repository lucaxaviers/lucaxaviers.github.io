import { MAIN_TECHNOLOGIES, SECONDARY_TECH_GROUPS } from "@/data/technologies";

export default function TechStack() {
  return (
    <section id="tecnologias" className="reveal-on-scroll">
      <div className="w">
        <div className="section-header-tag">Tecnologia & Engenharia</div>
        <h2>Como eu construo seu site.</h2>
        <p className="sub">
          Ferramentas modernas e consolidadas na indústria para garantir que sua página carregue num piscar de olhos e nunca te deixe na mão.
        </p>

        <div className="sk">
          {/* Code Window - Formatted without horizontal overflow */}
          <div className="cw">
            <div className="tb">
              <s />
              <s />
              <s />
              <em>WhatsAppButton.tsx</em>
            </div>
            <pre>
              <span className="c">// o botão que faz seu telefone tocar</span>
              {"\n"}
              <span className="k">export function</span> <span className="f">WhatsAppButton</span>() &#123;
              {"\n  "}
              <span className="k">const</span> msg = <span className="f">encodeURIComponent</span>(
              {"\n    "}
              <span className="s">&quot;Oi! Vim pelo site e quero orçamento&quot;</span>
              {"\n  "}
              );
              {"\n\n  "}
              <span className="k">return</span> (
              {"\n    "}&lt;<span className="t">a</span> href=&#123;`https://wa.me/55$&#123;TEL&#125;?text=$&#123;msg&#125;`&#125;&gt;
              {"\n      "}Chamar no WhatsApp
              {"\n    "}&lt;/<span className="t">a</span>&gt;
              {"\n  "});
              {"\n"}
              &#125;
            </pre>
          </div>

          {/* Core Tech Cards */}
          <div className="tg">
            {MAIN_TECHNOLOGIES.map((tech) => (
              <div key={tech.name} className="tl">
                <i>
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill={tech.color === "#000000" ? "currentColor" : tech.color}
                    style={{ color: "var(--ink)" }}
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{ __html: tech.iconSvg }}
                  />
                </i>
                <div>
                  <b>{tech.name}</b>
                  <span>{tech.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Structured Secondary Stack (Explaining what each is and why Lucas uses it) */}
        <div className="tech-domains-wrap">
          <div className="tech-domains-header">
            <h3>Outras tecnologias do meu ecossistema</h3>
            <p>Além da stack principal, domino ferramentas de engenharia de software, banco de dados e inteligência de dados que enriquecem meus projetos.</p>
          </div>

          <div className="tech-domains-grid">
            {SECONDARY_TECH_GROUPS.map((group) => (
              <div key={group.domain} className="tech-domain-card">
                <div className="tech-domain-top">
                  <h4>{group.domain}</h4>
                  <span className="tech-domain-summary">{group.summary}</span>
                </div>
                <div className="tech-domain-items">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="tech-skill-row">
                      <div className="tech-skill-meta">
                        <span
                          className="tech-skill-dot"
                          style={{ backgroundColor: skill.color }}
                          aria-hidden="true"
                        />
                        <span className="tech-skill-name">{skill.name}</span>
                        <span className="tech-skill-what">{skill.whatIs}</span>
                      </div>
                      <p className="tech-skill-connection">
                        <strong>O que tem a ver comigo:</strong> {skill.lucasConnection}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
