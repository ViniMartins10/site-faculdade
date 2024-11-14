// script.js
document.addEventListener('DOMContentLoaded', function () {
    const courses = [
        {
            title: "Engenharia da Computação",
            image: "../icons/engenharia-computacao.jpg",
            description: "O curso de Engenharia da Computação oferece uma formação completa em hardware e software, preparando profissionais para projetar e desenvolver soluções tecnológicas.",
            labs: [
                {
                    image: "../icons/lab-comp1.png",
                    description: "Laboratório de Arquitetura de Computadores, onde os alunos projetam e testam sistemas de hardware."
                },
                {
                    image: "../icons/lab-comp2.png",
                    description: "Laboratório de Redes, focado em infraestrutura e comunicação entre dispositivos."
                },
                {
                    image: "../icons/lab-comp3.png",
                    description: "Laboratório de Desenvolvimento de Software, onde os alunos desenvolvem projetos em diversas linguagens de programação."
                }
            ],
            grade: [
                {
                    semester: "1º Semestre",
                    subjects: ["Cálculo I", "Física I", "Introdução à Programação", "Álgebra Linear"]
                },
                {
                    semester: "2º Semestre",
                    subjects: ["Cálculo II", "Física II", "Estrutura de Dados", "Sistemas Digitais"]
                },
                // Adicione mais semestres conforme necessário
            ]
        },
        {
            title: "Engenharia Civil",
            image: "../icons/engenharia-civil.jpg",
            description: "O curso de Engenharia Civil capacita os alunos a planejar, projetar e supervisionar construções e obras de infraestrutura, como pontes, edifícios e estradas.",
            labs: [
                {
                    image: "../icons/lab-civil1.png",
                    description: "Laboratório de Materiais de Construção, onde são realizadas análises e testes de resistência."
                },
                {
                    image: "../icons/lab-civil2.png",
                    description: "Laboratório de Estruturas, focado em simulação de cargas e testes de resistência estrutural."
                },
                {
                    image: "../icons/lab-civil3.png",
                    description: "Laboratório de Hidráulica, onde são estudados fluxos de água e comportamento de fluidos em construções."
                }
            ],
            grade: [
                {
                    semester: "1º Semestre",
                    subjects: ["Cálculo I", "Física I", "Desenho Técnico", "Química Geral"]
                },
                {
                    semester: "2º Semestre",
                    subjects: ["Cálculo II", "Física II", "Geologia", "Resistência dos Materiais I"]
                },
                // Adicione mais semestres conforme necessário
            ]
        },
        {
            title: "Engenharia de Produção",
            image: "../icons/engenharia-producao.jpg",
            description: "A Engenharia de Produção foca na otimização de processos e recursos, formando profissionais capazes de gerenciar e melhorar a produtividade industrial.",
            labs: [
                { image: "../icons/lab-producao1.png", description: "Laboratório de Processos Industriais, com ênfase em eficiência e controle de qualidade." },
                { image: "../icons/lab-producao2.png", description: "Laboratório de Logística e Transportes, onde os alunos simulam processos de distribuição." },
                { image: "../icons/lab-producao3.png", description: "Laboratório de Pesquisa Operacional, focado em otimização de sistemas." }
            ],
            grade: [
                { semester: "1º Semestre", subjects: ["Cálculo I", "Física I", "Introdução à Produção", "Economia"] },
                { semester: "2º Semestre", subjects: ["Cálculo II", "Física II", "Estatística", "Administração Geral"] },
                // Adicione mais semestres conforme necessário
            ]
        },
        {
            title: "Engenharia Elétrica",
            image: "../icons/engenharia-eletrica.jpg",
            description: "O curso de Engenharia Elétrica prepara profissionais para projetar sistemas de geração, transmissão e distribuição de energia.",
            labs: [
                { image: "../icons/lab-eletrica1.png", description: "Laboratório de Circuitos Elétricos, onde os alunos estudam circuitos e componentes eletrônicos." },
                { image: "../icons/lab-eletrica2.png", description: "Laboratório de Sistemas de Potência, focado em geração e distribuição de energia." },
                { image: "../icons/lab-eletrica3.png", description: "Laboratório de Eletrônica, para desenvolvimento de dispositivos e sistemas eletrônicos." }
            ],
            grade: [
                { semester: "1º Semestre", subjects: ["Cálculo I", "Física I", "Introdução à Engenharia", "Química"] },
                { semester: "2º Semestre", subjects: ["Cálculo II", "Física II", "Circuitos Elétricos I", "Álgebra Linear"] },
                // Adicione mais semestres conforme necessário
            ]
        },
        {
            title: "Engenharia Mecânica",
            image: "../icons/engenharia-mecanica.jpg",
            description: "O curso de Engenharia Mecânica capacita profissionais para desenvolver, projetar e manter sistemas mecânicos em diversos setores industriais.",
            labs: [
                { image: "../icons/lab-mecanica1.png", description: "Laboratório de Termodinâmica, onde são realizados estudos de energia e trabalho em sistemas." },
                { image: "../icons/lab-mecanica2.png", description: "Laboratório de Dinâmica dos Fluidos, com foco no comportamento de líquidos e gases." },
                { image: "../icons/lab-mecanica3.png", description: "Laboratório de Mecânica dos Materiais, onde os alunos estudam resistência e elasticidade." }
            ],
            grade: [
                { semester: "1º Semestre", subjects: ["Cálculo I", "Física I", "Desenho Técnico", "Química"] },
                { semester: "2º Semestre", subjects: ["Cálculo II", "Física II", "Mecânica Geral", "Materiais de Construção Mecânica"] },
                // Adicione mais semestres conforme necessário
            ]
        }
        
        

    ];

    let currentCourseIndex = 0;
    let currentLabIndex = 0;

    const courseTitle = document.getElementById('course-title');
    const courseImage = document.getElementById('course-image');
    const descriptionTitle = document.getElementById('description-title');
    const descriptionText = document.getElementById('description-text');
    const labImage = document.getElementById('lab-image');
    const labDescription = document.getElementById('lab-description');
    const gradeTable = document.getElementById('grade-table');
    const mainContent = document.getElementById('main-content');
    const descriptionContent = document.getElementById('description-content');
    const labsContent = document.getElementById('labs-content');
    const gradeContent = document.getElementById('grade-content');
    const aboutBtn = document.getElementById('about-btn');
    const labsBtn = document.getElementById('labs-btn');
    const gradeBtn = document.getElementById('grade-btn');
    const backBtn = document.getElementById('back-btn');
    const backLabsBtn = document.getElementById('back-labs-btn');
    const backGradeBtn = document.getElementById('back-grade-btn');
    const prevLabBtn = document.getElementById('prev-lab-btn');
    const nextLabBtn = document.getElementById('next-lab-btn');

    function updateCourse() {
        courseTitle.textContent = courses[currentCourseIndex].title;
        courseImage.src = courses[currentCourseIndex].image;
        courseImage.alt = courses[currentCourseIndex].title;
    }

    function updateLab() {
        const currentLabs = courses[currentCourseIndex].labs;
        labImage.src = currentLabs[currentLabIndex].image;
        labImage.alt = `Laboratório ${currentLabIndex + 1}`;
        labDescription.textContent = currentLabs[currentLabIndex].description;
    }

    function updateGrade() {
        const currentGrade = courses[currentCourseIndex].grade;
        gradeTable.innerHTML = ""; // Limpa a tabela antes de preencher

        currentGrade.forEach((semester) => {
            const row = document.createElement("tr");

            const semesterCell = document.createElement("th");
            semesterCell.textContent = semester.semester;
            row.appendChild(semesterCell);

            const subjectsCell = document.createElement("td");
            subjectsCell.textContent = semester.subjects.join(", ");
            row.appendChild(subjectsCell);
            gradeTable.appendChild(row);
        });
    }

    document.getElementById('prev-btn').addEventListener('click', function () {
        currentCourseIndex = (currentCourseIndex === 0) ? courses.length - 1 : currentCourseIndex - 1;
        updateCourse();
    });

    document.getElementById('next-btn').addEventListener('click', function () {
        currentCourseIndex = (currentCourseIndex === courses.length - 1) ? 0 : currentCourseIndex + 1;
        updateCourse();
    });

    // Mostrar descrição ao clicar no botão "Sobre"
    aboutBtn.addEventListener('click', function () {
        mainContent.classList.add('hidden');
        descriptionContent.classList.remove('hidden');
        descriptionTitle.textContent = courses[currentCourseIndex].title;
        descriptionText.textContent = courses[currentCourseIndex].description;
    });

    // Voltar para a visualização anterior
    backBtn.addEventListener('click', function () {
        descriptionContent.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });

    // Mostrar laboratórios ao clicar no botão "Laboratórios"
    labsBtn.addEventListener('click', function () {
        currentLabIndex = 0; // Reseta o índice do laboratório ao trocar de curso
        mainContent.classList.add('hidden');
        labsContent.classList.remove('hidden');
        updateLab(); // Atualiza o laboratório para o curso atual
    });

    // Voltar para a visualização anterior dos cursos
    backLabsBtn.addEventListener('click', function () {
        labsContent.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });

    // Mostrar grade ao clicar no botão "Grade"
    gradeBtn.addEventListener('click', function () {
        mainContent.classList.add('hidden');
        gradeContent.classList.remove('hidden');
        updateGrade(); // Atualiza a grade curricular para o curso atual
    });

    // Voltar para a visualização anterior da grade
    backGradeBtn.addEventListener('click', function () {
        gradeContent.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });

    // Navegação pelos laboratórios
    prevLabBtn.addEventListener('click', function () {
        const currentLabs = courses[currentCourseIndex].labs;
        currentLabIndex = (currentLabIndex === 0) ? currentLabs.length - 1 : currentLabIndex - 1;
        updateLab();
    });

    nextLabBtn.addEventListener('click', function () {
        const currentLabs = courses[currentCourseIndex].labs;
        currentLabIndex = (currentLabIndex === currentLabs.length - 1) ? 0 : currentLabIndex + 1;
        updateLab();
    });

    // Seleciona a seção direita com os botões
const rightSection = document.querySelector('.right-section');

// Modifica o evento do botão "Sobre"
aboutBtn.addEventListener('click', function () {
    mainContent.classList.add('hidden');
    descriptionContent.classList.remove('hidden');
    descriptionTitle.textContent = courses[currentCourseIndex].title;
    descriptionText.textContent = courses[currentCourseIndex].description;
    rightSection.classList.add('hidden-right-section'); // Esconde os botões laterais
});

// Modifica o evento do botão "Laboratórios"
labsBtn.addEventListener('click', function () {
    currentLabIndex = 0;
    mainContent.classList.add('hidden');
    labsContent.classList.remove('hidden');
    updateLab();
    rightSection.classList.add('hidden-right-section'); // Esconde os botões laterais
});

// Modifica o evento do botão "Grade"
gradeBtn.addEventListener('click', function () {
    mainContent.classList.add('hidden');
    gradeContent.classList.remove('hidden');
    updateGrade();
    rightSection.classList.add('hidden-right-section'); // Esconde os botões laterais
});

// Atualiza o evento do botão "Voltar" em cada seção para exibir os botões laterais novamente
backBtn.addEventListener('click', function () {
    descriptionContent.classList.add('hidden');
    mainContent.classList.remove('hidden');
    rightSection.classList.remove('hidden-right-section'); // Exibe os botões laterais
});

backLabsBtn.addEventListener('click', function () {
    labsContent.classList.add('hidden');
    mainContent.classList.remove('hidden');
    rightSection.classList.remove('hidden-right-section'); // Exibe os botões laterais
});

backGradeBtn.addEventListener('click', function () {
    gradeContent.classList.add('hidden');
    mainContent.classList.remove('hidden');
    rightSection.classList.remove('hidden-right-section'); // Exibe os botões laterais
});

});
