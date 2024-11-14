document.addEventListener("DOMContentLoaded", () => {
    const professores = [
        { nome: "Dr. Carlos Andrade", engenharia: "Engenharia da Computação", descricao: "Especialista em Inteligência Artificial e desenvolvimento de sistemas distribuídos." },
        { nome: "Profa. Ana Paula Reis", engenharia: "Engenharia Civil", descricao: "Experiência em infraestrutura urbana e sustentabilidade em construções." },
        { nome: "Dr. Henrique Santos", engenharia: "Engenharia de Produção", descricao: "Focado em otimização de processos e gestão da cadeia de suprimentos." },
        { nome: "Profa. Beatriz Costa", engenharia: "Engenharia Elétrica", descricao: "Especialista em sistemas de geração e distribuição de energia renovável." },
        { nome: "Dr. Rafael Oliveira", engenharia: "Engenharia Mecânica", descricao: "Atua em desenvolvimento de sistemas mecânicos avançados e robótica." },
        { nome: "Profa. Mariana Lopes", engenharia: "Engenharia da Computação", descricao: "Doutora em Ciência de Dados e Machine Learning." },
        { nome: "Dr. Gustavo Tavares", engenharia: "Engenharia Civil", descricao: "Especialista em construções sustentáveis e tecnologia ambiental." },
        { nome: "Profa. Luiza Torres", engenharia: "Engenharia de Produção", descricao: "Focada em pesquisa operacional e logística industrial." },
        { nome: "Dr. Eduardo Lima", engenharia: "Engenharia Elétrica", descricao: "Expert em sistemas de controle e automação." },
        { nome: "Profa. Fernanda Souza", engenharia: "Engenharia Mecânica", descricao: "Experiência em termodinâmica e sistemas térmicos." },
        // Adicione mais professores conforme necessário
    ];

    const itemsPerPage = 5;
    let currentPage = 1;
    const docentesContainer = document.getElementById("docentes-container");
    const pageInfo = document.getElementById("page-info");
    const prevPageBtn = document.getElementById("prev-page");
    const nextPageBtn = document.getElementById("next-page");

    function renderProfessores() {
        docentesContainer.innerHTML = "";
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const currentProfessores = professores.slice(start, end);

        currentProfessores.forEach(prof => {
            const docenteCard = document.createElement("div");
            docenteCard.classList.add("docente-card");
            docenteCard.innerHTML = `
                <h2>${prof.nome}</h2>
                <p><strong>${prof.engenharia}</strong></p>
                <p>${prof.descricao}</p>
            `;
            docentesContainer.appendChild(docenteCard);
        });

        pageInfo.textContent = `Página ${currentPage} de ${Math.ceil(professores.length / itemsPerPage)}`;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === Math.ceil(professores.length / itemsPerPage);
    }

    prevPageBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderProfessores();
        }
    });

    nextPageBtn.addEventListener("click", () => {
        if (currentPage < Math.ceil(professores.length / itemsPerPage)) {
            currentPage++;
            renderProfessores();
        }
    });

    renderProfessores();
});
