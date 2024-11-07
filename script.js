// Função para rolar a página até a seção específica
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
// Dados do quiz (perguntas e respostas)
const quizData = [
    {
      question: "Qual seu papel favorito em uma partida?",
      options: {
        a: "Carregar o time com dano alto",
        b: "Proteger e curar aliados",
        c: "Iniciar lutas e absorver dano",
        d: "Controlar o mapa e dar suporte estratégico"
      },
      answers: { a: 'carry', b: 'support', c: 'tank', d: 'jungler' }
    },
    {
      question: "Qual habilidade você valoriza mais?",
      options: {
        a: "Dano explosivo",
        b: "Cura e proteção",
        c: "Alta resistência",
        d: "Mobilidade e controle do mapa"
      },
      answers: { a: 'carry', b: 'support', c: 'tank', d: 'jungler' }
    },
    {
      question: "Como você lida com as lutas de equipe?",
      options: {
        a: "Prefiro eliminar os oponentes rapidamente",
        b: "Foco em manter meus aliados vivos",
        c: "Entro na frente e recebo todo o dano",
        d: "Busco o momento certo para surpreender o inimigo"
      },
      answers: { a: 'carry', b: 'support', c: 'tank', d: 'jungler' }
    },
    {
      question: "Qual tipo de campeão você prefere?",
      options: {
        a: "Campeões de dano explosivo",
        b: "Campeões de suporte",
        c: "Campeões resistentes",
        d: "Campeões com mobilidade"
      },
      answers: { a: 'carry', b: 'support', c: 'tank', d: 'jungler' }
    },
    {
      question: "Como você reage quando vê um aliado em apuros?",
      options: {
        a: "Vou tentar eliminar o inimigo antes que ele chegue ao aliado",
        b: "Vou imediatamente ajudar o aliado, curando ou protegendo",
        c: "Vou entrar na frente e absorver o dano",
        d: "Vou tentar flanquear o inimigo para desorientá-lo"
      },
      answers: { a: 'carry', b: 'support', c: 'tank', d: 'jungler' }
    }
  ];
  
  let currentQuestion = 0;
  let score = { carry: 0, support: 0, tank: 0, jungler: 0 };
  
  // Função para exibir a pergunta atual
  function displayQuestion() {
    const question = quizData[currentQuestion];
    document.getElementById('question-text').innerText = question.question;
    document.querySelectorAll('#quiz-questions button').forEach((button, index) => {
      button.innerText = Object.values(question.options)[index];
    });
  }
  
  // Função para registrar a resposta e avançar para a próxima pergunta
  function answerQuestion(choice) {
    const question = quizData[currentQuestion];
    const selectedRole = question.answers[choice];
    score[selectedRole] += 1;
    
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  // Função para calcular e mostrar o resultado
  function showResult() {
    document.getElementById('quiz-questions').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';
  
    // Determina o perfil com maior pontuação
    const highestScore = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    let resultText;
    let champions;
  
    switch (highestScore) {
      case 'carry':
        resultText = "Você é um jogador Carry! Prefere carregar o time com dano alto.";
        champions = "Exemplos de campeões: Jinx, Kai'Sa, Miss Fortune, Vayne";
        break;
      case 'support':
        resultText = "Você é um jogador Suporte! Gosta de proteger e curar seus aliados.";
        champions = "Exemplos de campeões: Janna, Thresh, Lulu, Nami";
        break;
      case 'tank':
        resultText = "Você é um jogador Tank! Entra na frente e absorve o dano para proteger o time.";
        champions = "Exemplos de campeões: Malphite, Leona, Alistar, Maokai";
        break;
      case 'jungler':
        resultText = "Você é um jogador Jungler! Prefere controlar o mapa e dar suporte estratégico.";
        champions = "Exemplos de campeões: Lee Sin, Evelynn, Kha'Zix, Rengar";
        break;
      default:
        resultText = "Perfil indefinido.";
        champions = "";
    }
  
    document.getElementById('result-text').innerText = `${resultText}\n${champions}`;
  }
  
  // Inicializar o quiz
  displayQuestion();
  
  
  // Função para contato (apenas exemplo)
  function contactUs() {
    alert("Obrigado pelo interesse! Fale com a professora para mais detalhes.");
  }
  