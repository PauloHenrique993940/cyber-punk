"use client"
import "../styles/CyberSection.css";
import { motion } from "framer-motion"; // Importe o motion

function CyberSection() {
  // Variantes de animação para os títulos
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Variantes de animação para os parágrafos
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  // Variantes de animação para as imagens
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // Variantes de animação para os botões
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.6 } },
    hover: { scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 255, 255, 0.7)", transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  // Variantes para o container da seção (para orquestrar as animações dos filhos)
  const sectionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Atraso entre a animação de cada filho
      },
    },
  };

  return (
    <>
      {/* Seção 1: Universo Secreto */}
      <motion.section
        className="cyber-section"
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible" // Anima quando entra na viewport
        viewport={{ once: true, amount: 0.5 }} // Anima apenas uma vez e quando 50% da seção estiver visível
      >
        <div className="cyber-content">
          <motion.img
            src="/image2.png"
            alt="Ambiente Cyberpunk"
            variants={imageVariants}
          />
          <div>
            <motion.h2 variants={titleVariants}>Universo Secreto</motion.h2>
            <motion.p variants={paragraphVariants}>
              Explore o universo cibernético com tecnologias de ponta,
              inteligência artificial e realidades imersivas. Mergulhe em uma
              nova era onde o físico e o digital se encontram em perfeita
              sincronia.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Descubra megacorporações dominando metrópoles neon, hackers
              lutando pela liberdade de dados e implantes neurais que redefinem
              o ser humano. Este é o futuro onde você escolhe o seu caminho.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Você está pronto para atravessar a fronteira entre o mundo real e
              o virtual? Junte-se a nós e torne-se parte da revolução digital.
            </motion.p>
            <motion.button
              className="cyber-button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Comece Agora
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Seção 2: Cidade Sintética */}
      <motion.section
        className="cyber-section"
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="cyber-content">
          <div>
            <motion.h2 variants={titleVariants}>Cidade Sintética</motion.h2>
            <motion.p variants={paragraphVariants}>
              As ruas estão molhadas pela chuva ácida que reflete os letreiros
              neon. Drones cortam o céu turvo enquanto anúncios holográficos
              dançam sobre os prédios. Cada esquina esconde um segredo, cada
              tela é uma janela para outra realidade.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Você caminha com passos silenciosos entre sintéticos e humanos
              aumentados, cruzando olhares digitalmente ampliados. A rede pulsa
              sob seus pés — invisível, mas viva.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              A cidade nunca dorme. Há códigos ocultos em cada ruído, e uma
              mensagem secreta espera por aqueles dispostos a decifrá-la. Neste
              mundo onde dados valem mais que ouro, a sua missão é clara:
              conectar-se… ou desaparecer.
            </motion.p>
            <motion.button
              className="cyber-button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Entrar na Simulação
            </motion.button>
          </div>
          <motion.img
            src="/cidademolhada.webp"
            className="cyberImg"
            alt="Ambiente Cyberpunk"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            // Para a segunda imagem, invertemos a direção da animação se desejar
            custom={{ x: 100 }} // Propriedade customizada para passar para a variante
          />
        </div>
      </motion.section>

      {/* Seção 3: Ruas Neon */}
      <motion.section
        className="cyber-section"
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="cyber-content">
          <motion.img
            src="/inline_image_preview.avif"
            alt="Ruas neon à noite"
            style={{ marginRight: "30px" }}
            variants={imageVariants}
          />
          <div>
            <motion.h2 variants={titleVariants}>Ruas Neon</motion.h2>
            <motion.p variants={paragraphVariants}>
              No coração da metrópole, as ruas neon nunca dormem.
              Refrações de luz e sombra criam uma dança constante entre o real e o digital.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Grafites holográficos contam histórias antigas enquanto os veículos autônomos deslizam silenciosamente.
              O futuro pulsa com uma energia elétrica que desafia a lógica.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Prepare-se para desvendar os segredos escondidos entre os reflexos e as sombras digitais.
            </motion.p>
            <motion.button
              className="cyber-button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Explore as Ruas
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Seção 4: Laboratório Quântico */}
      <motion.section
        className="cyber-section"
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="cyber-content">
          <div>
            <motion.h2 variants={titleVariants}>Laboratório Quântico</motion.h2>
            <motion.p variants={paragraphVariants}>
              Em um laboratório onde o tempo se dobra, cientistas manipulam qubits e realidades paralelas.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              As descobertas aqui não apenas alteram o código genético, mas também o próprio tecido do espaço-tempo.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Venha testemunhar o poder da computação quântica e suas implicações para a consciência humana.
            </motion.p>
            <motion.button
              className="cyber-button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Visitar o Laboratório
            </motion.button>
          </div>
          <motion.img
            src="/Lab.jpg"
            alt="Laboratório Quântico"
            style={{ marginRight: "30px" }}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            custom={{ x: 100 }}
          />
        </div>
      </motion.section>

      {/* Seção 5: Estação Hacker */}
      <motion.section
        className="cyber-section"
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="cyber-content">
          <motion.img
            src="/ESTACAO.webp"
            alt="Estação Hacker"
            style={{ marginRight: "30px" }}
            variants={imageVariants}
          />
          <div>
            <motion.h2 variants={titleVariants}>Estação Hacker</motion.h2>
            <motion.p variants={paragraphVariants}>
              Oculto nas sombras digitais, a estação hacker é o epicentro da resistência.
              Interfaces holográficas e códigos em cascata moldam estratégias para libertar dados aprisionados.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Alianças inesperadas se formam na rede, onde cada bit pode mudar o destino do mundo.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Você tem o que é preciso para invadir as defesas e escrever uma nova história?
            </motion.p>
            <motion.button
              className="cyber-button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Infiltre-se
            </motion.button>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default CyberSection;

