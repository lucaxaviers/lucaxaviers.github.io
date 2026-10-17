import { MAIN_TECHNOLOGIES, OTHER_TECHNOLOGIES } from "@/data/technologies";

export default function TechStack() {
  return (
    <section id="tecnologias">
      <div className="w">
        <h2>Como eu construo seu site.</h2>
        <p className="sub">
          Ferramentas modernas e consolidadas na indústria para garantir que sua página carregue num piscar de olhos e nunca te deixe na mão.
        </p>

        <div className="sk">
          {/* Code Window */}
          <div className="cw">
            <div className="tb">
              <s />
              <s />
              <s />
              <em>WhatsAppButton.tsx</em>
            </div>
            <pre>
              <span className="c">// o botão que faz o telefone do cliente tocar</span>
              {"\n"}
              <span className="k">export function</span> <span className="f">WhatsAppButton</span>() {"{"}
              {"\n  "}
              <span className="k">const</span> msg = <span className="f">encodeURIComponent</span>(
              <span className="s">&quot;Oi! Vim pelo site e quero um orçamento.&quot;</span>
              );
              {"\n  "}
              <span className="k">return</span> (
              {"\n    "}&lt;<span className="t">a</span> href=&#123;`https://wa.me/55$&#123;PHONE&#125;?text=$&#123;msg&#125;`&#125;
              {"\n       "}className=<span className="s">&quot;btn-whatsapp&quot;</span>&gt;
              {"\n      "}Chamar no WhatsApp
              {"\n    "}&lt;/<span className="t">a</span>&gt;
              {"\n  "});
              {"\n"}
              {"}"}
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

        {/* Secondary Pills */}
        <div className="pills more-tech">
          {OTHER_TECHNOLOGIES.map((tech) => (
            <span key={tech.name} className="pill">
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: tech.color,
                  display: "inline-block",
                }}
              />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
