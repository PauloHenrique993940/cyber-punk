import "../styles/CyberSection.css"

function CyberSection() {
  return (
    <>
      <section className="cyber-section">
        <div className="cyber-content">
          <img src="/image2.png" alt="Ambiente Cyberpunk" />
          <div>
            <h2>Universo Secreto</h2>
            <p>
              Explore o universo cibernético com tecnologias de ponta,
              inteligência artificial e realidades imersivas. Mergulhe em uma
              nova era onde o físico e o digital se encontram em perfeita
              sincronia.
            </p>
            <p>
              Descubra megacorporações dominando metrópoles neon, hackers
              lutando pela liberdade de dados e implantes neurais que redefinem
              o ser humano. Este é o futuro onde você escolhe o seu caminho.
            </p>
            <p>
              Você está pronto para atravessar a fronteira entre o mundo real e
              o virtual? Junte-se a nós e torne-se parte da revolução digital.
            </p>
            <button className="cyber-button">Comece Agora</button>
          </div>
        </div>
      </section>

      <section className="cyber-section">
        <div className="cyber-content">
          <div>
            <h2>Cidade Sintética</h2>
            <p>
              As ruas estão molhadas pela chuva ácida que reflete os letreiros
              neon. Drones cortam o céu turvo enquanto anúncios holográficos
              dançam sobre os prédios. Cada esquina esconde um segredo, cada
              tela é uma janela para outra realidade.
            </p>
            <p>
              Você caminha com passos silenciosos entre sintéticos e humanos
              aumentados, cruzando olhares digitalmente ampliados. A rede pulsa
              sob seus pés — invisível, mas viva.
            </p>
            <p>
              A cidade nunca dorme. Há códigos ocultos em cada ruído, e uma
              mensagem secreta espera por aqueles dispostos a decifrá-la. Neste
              mundo onde dados valem mais que ouro, a sua missão é clara:
              conectar-se… ou desaparecer.
            </p>
            <button className="cyber-button">Entrar na Simulação</button>
          </div>
          <img
            src="/cidademolhada.png"
            className="cyberImg"
            alt="Ambiente Cyberpunk"
          />
        </div>
      </section>

      <section className="cyber-section">
        <div className="cyber-content">
          <img
            src="/inline_image_preview.avif"
            alt="Ruas neon à noite"
            style={{ marginRight: "30px" }}
          />

          <div>
            <h2>Ruas Neon</h2>
            <p>
              No coração da metrópole, as ruas neon nunca dormem.
              Refrações de luz e sombra criam uma dança constante entre o real e o digital.
            </p>
            <p>
              Grafites holográficos contam histórias antigas enquanto os veículos autônomos deslizam silenciosamente.
              O futuro pulsa com uma energia elétrica que desafia a lógica.
            </p>
            <p>
              Prepare-se para desvendar os segredos escondidos entre os reflexos e as sombras digitais.
            </p>
            <button className="cyber-button">Explore as Ruas</button>
          </div>
        </div>
      </section>

      <section className="cyber-section">
        <div className="cyber-content">
          <div>
            <h2>Laboratório Quântico</h2>
            <p>
              Em um laboratório onde o tempo se dobra, cientistas manipulam qubits e realidades paralelas.
            </p>
            <p>
              As descobertas aqui não apenas alteram o código genético, mas também o próprio tecido do espaço-tempo.
            </p>
            <p>
              Venha testemunhar o poder da computação quântica e suas implicações para a consciência humana.
            </p>
            <button className="cyber-button">Visitar o Laboratório</button>
          </div>
          <img
            src="/Lab.jpg"
            alt="Ruas neon à noite"
            style={{ marginRight: "30px" }}
          />

        </div>
      </section>

      <section className="cyber-section">
        <div className="cyber-content">
          <img
              src="/ESTACAO.webp"
              alt="Ruas neon à noite"
              style={{ marginRight: "30px" }}
            />
          <div>
            <h2>Estação Hacker</h2>
            <p>
              Oculto nas sombras digitais, a estação hacker é o epicentro da resistência.
              Interfaces holográficas e códigos em cascata moldam estratégias para libertar dados aprisionados.
            </p>
            <p>
              Alianças inesperadas se formam na rede, onde cada bit pode mudar o destino do mundo.
            </p>
            <p>
              Você tem o que é preciso para invadir as defesas e escrever uma nova história?
            </p>
            <button className="cyber-button">Infiltre-se</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CyberSection;

