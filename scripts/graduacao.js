document.addEventListener("DOMContentLoaded", () => {
    const posts = [
        {
            title: "Nova Pesquisa em Inteligência Artificial aplicada à Engenharia da Computação",
            date: "27 de Outubro de 2024",
            content: "Dr. Carlos Andrade e sua equipe desenvolvem um modelo inovador de aprendizado de máquina...",
            fullContent: "Dr. Carlos Andrade, professor de Engenharia da Computação, e sua equipe lançaram um projeto inovador focado em IA para otimização de processos industriais. Com o objetivo de aumentar a eficiência energética, a pesquisa já atraiu atenção de grandes empresas de tecnologia."
        },
        {
            title: "Engenharia Civil realiza workshop sobre construções sustentáveis",
            date: "20 de Outubro de 2024",
            content: "A Profª Ana Paula Reis conduziu um workshop sobre novas técnicas de construção sustentável...",
            fullContent: "A Profª Ana Paula Reis promoveu um workshop focado em construções sustentáveis, onde foram discutidas técnicas modernas para reduzir o impacto ambiental das construções urbanas. O evento contou com a participação de estudantes e profissionais da área."
        },
        {
            title: "Atividade de simulação de logística na Engenharia de Produção",
            date: "15 de Outubro de 2024",
            content: "Alunos de Engenharia de Produção participaram de uma atividade prática no laboratório de Logística...",
            fullContent: "Os estudantes da Engenharia de Produção tiveram a oportunidade de simular uma cadeia de suprimentos em tempo real no laboratório de Logística e Transportes. A atividade foi conduzida pelo Dr. Henrique Santos, com o objetivo de aprimorar habilidades de gestão logística."
        },
        {
            title: "Projeto de energia solar desenvolvido por alunos de Engenharia Elétrica",
            date: "10 de Outubro de 2024",
            content: "Sob orientação da Profª Beatriz Costa, alunos desenvolvem um sistema de energia solar inovador...",
            fullContent: "A Profª Beatriz Costa e os alunos do curso de Engenharia Elétrica concluíram um projeto de geração de energia solar para regiões de baixa renda. O sistema é compacto e acessível, e utiliza materiais recicláveis para maximizar o impacto social."
        },
        {
            title: "Engenharia Mecânica realiza pesquisa sobre veículos autônomos",
            date: "5 de Outubro de 2024",
            content: "O Dr. Rafael Oliveira lidera uma pesquisa sobre a aplicação de veículos autônomos na logística...",
            fullContent: "Dr. Rafael Oliveira, da Engenharia Mecânica, está à frente de um estudo sobre veículos autônomos, explorando o potencial dessa tecnologia para o transporte de cargas em ambientes industriais. O projeto visa reduzir custos e aumentar a segurança no setor."
        }
    ];

    const blogContainer = document.getElementById("blog-container");

    posts.forEach(post => {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");

        postCard.innerHTML = `
            <h2>${post.title}</h2>
            <p class="post-date">${post.date}</p>
            <p>${post.content}</p>
            <button class="read-more-btn">Leia mais</button>
            <p class="full-content hidden">${post.fullContent}</p>
        `;

        blogContainer.appendChild(postCard);

        // Função para alternar entre o resumo e o conteúdo completo
        const readMoreBtn = postCard.querySelector(".read-more-btn");
        const fullContent = postCard.querySelector(".full-content");

        readMoreBtn.addEventListener("click", () => {
            fullContent.classList.toggle("hidden");
            readMoreBtn.textContent = fullContent.classList.contains("hidden") ? "Leia mais" : "Mostrar menos";
        });
    });
});
