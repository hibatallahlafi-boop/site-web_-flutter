// ========== SYSTÈME DE QUIZ ET GRAPHIQUE ==========

// Les questions du quiz
const questions = [
    {
        text: "Quelle balise HTML permet de créer un lien hypertexte ?",
        answers: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"],
        correct: 0,
        explanation: "La balise &lt;a&gt; (ancre) est utilisée pour créer des liens. exemple : &lt;a href='url'&gt;texte&lt;/a&gt;"
    },
    {
        text: "Quelle propriété CSS change la couleur du texte ?",
        answers: ["background", "text-color", "color", "font-color"],
        correct: 2,
        explanation: "La propriété 'color' change la couleur du texte. Exemple : color: red;"
    },
    {
        text: "Comment écrit-on une fonction en JavaScript ?",
        answers: ["def maFonction()", "create maFonction()", "function maFonction()", "func maFonction()"],
        correct: 2,
        explanation: "function maFonction() { ... } est la bonne syntaxe pour déclarer une fonction."
    },
    {
        text: "Quel attribut HTML ajoute une description textuelle à une image ?",
        answers: ["src", "href", "description", "alt"],
        correct: 3,
        explanation: "L'attribut 'alt' (alternative text) décrit l'image pour l'accessibilité."
    },
    {
        text: "Quelle balise HTML permet d'intégrer une vidéo YouTube ?",
        answers: ["&lt;video&gt;", "&lt;embed&gt;", "&lt;object&gt;", "&lt;iframe&gt;"],
        correct: 3,
        explanation: "La balise &lt;iframe&gt; permet d'intégrer du contenu externe comme une vidéo YouTube."
    }
];

let currentQuestion = 0;
let score = 0;
let quizCompleted = false;
let chart = null;

// Récupérer le score sauvegardé
function loadScore() {
    const savedScore = localStorage.getItem('learningScore');
    if (savedScore !== null) {
        score = parseInt(savedScore);
        updateProgressDisplay();
    }
}

// Sauvegarder le score
function saveScore() {
    localStorage.setItem('learningScore', score);
}

// Mettre à jour l'affichage du graphique
function updateProgressDisplay() {
    const percent = Math.min(100, Math.floor((score / questions.length) * 100));
    const scoreFill = document.getElementById('scoreFill');
    const scorePercent = document.getElementById('scorePercent');
    const levelText = document.getElementById('levelText');

    if (scoreFill) {
        scoreFill.style.width = percent + '%';
        scoreFill.innerHTML = percent + '%';
    }
    if (scorePercent) scorePercent.innerHTML = percent + '%';

    // Déterminer le niveau
    if (percent < 20) levelText.innerHTML = "🌱 Débutant";
    else if (percent < 40) levelText.innerHTML = "📖 Apprenti";
    else if (percent < 60) levelText.innerHTML = "💪 Intermédiaire";
    else if (percent < 80) levelText.innerHTML = "🚀 Avancé";
    else levelText.innerHTML = "🏆 Expert !";

    // Message de motivation
    const msgDiv = document.getElementById('motivationMessage');
    if (percent === 100) {
        msgDiv.innerHTML = "🏆 FÉLICITATIONS ! Tu as un score parfait ! Tu es un véritable expert du web ! 🏆";
    } else if (percent >= 80) {
        msgDiv.innerHTML = "🌟 Impressionnant ! Tu maîtrises très bien les bases ! Continue à explorer ! 🌟";
    } else if (percent >= 60) {
        msgDiv.innerHTML = "👍 Très bon travail ! Quelques révisions et tu deviendras un pro ! 👍";
    } else if (percent >= 40) {
        msgDiv.innerHTML = "📚 Continue tes efforts ! Relis les explications de notre site ! 📚";
    } else {
        msgDiv.innerHTML = "💪 Chaque début est difficile ! Passe ta souris sur les codes pour réviser ! 💪";
    }

    // Mettre à jour le graphique
    updateChart(percent);
}

// Créer le graphique
function createChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');

    // Effacer le canvas
    ctx.clearRect(0, 0, 400, 200);

    // Dessiner le fond
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(0, 0, 400, 200);

    // Titre
    ctx.fillStyle = '#ffd966';
    ctx.font = 'bold 14px "Segoe UI"';
    ctx.fillText('📊 Progression', 150, 25);

    // Barres de progression pour chaque question (simulé)
    const barWidth = 60;
    const startX = 30;

    for (let i = 0; i < questions.length; i++) {
        const x = startX + (i * (barWidth + 10));
        const height = 120;
        const y = 150;

        // Barre de fond
        ctx.fillStyle = '#333';
        ctx.fillRect(x, y - height, barWidth - 5, height);

        // Barre de progression (en fonction des réponses)
        let progressHeight = 0;
        if (score > i) progressHeight = height;
        else if (score === i && currentQuestion > i) progressHeight = height / 2;

        ctx.fillStyle = score > i ? '#00ff66' : (currentQuestion > i ? '#ffd966' : '#666');
        ctx.fillRect(x, y - progressHeight, barWidth - 5, progressHeight);

        // Numéro de question
        ctx.fillStyle = '#ccc';
        ctx.font = '12px Arial';
        ctx.fillText((i + 1).toString(), x + 20, y + 15);
    }
}

// Mettre à jour le graphique
function updateChart(percent) {
    const ctx = document.getElementById('progressChart').getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, 400, 200);

    // Dessiner le fond
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(0, 0, 400, 200);

    // Titre
    ctx.fillStyle = '#ffd966';
    ctx.font = 'bold 14px "Segoe UI"';
    ctx.fillText('📊 Score Global : ' + percent + '%', 140, 25);

    // Dessiner un camembert simple
    const centerX = 200;
    const centerY = 110;
    const radius = 70;

    // Cercle de fond
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#333';
    ctx.fill();

    // Partie de progression
    const angle = (percent / 100) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, -Math.PI / 2 + angle);
    ctx.fillStyle = '#ffd966';
    ctx.fill();

    // Cercle intérieur
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius - 15, 0, Math.PI * 2);
    ctx.fillStyle = '#1e1e2e';
    ctx.fill();

    // Pourcentage au centre
    ctx.fillStyle = '#ffd966';
    ctx.font = 'bold 24px "Segoe UI"';
    ctx.fillText(percent + '%', centerX - 30, centerY + 10);

    // Légende
    ctx.fillStyle = '#ccc';
    ctx.font = '10px Arial';
    ctx.fillText('✅ Réponses justes', 20, 180);
    ctx.fillStyle = '#ffd966';
    ctx.fillText('🟡 En cours', 20, 195);
}

// Vérifier la réponse
function checkAnswer(selectedIndex, selectedText) {
    if (quizCompleted) {
        document.getElementById('feedback').innerHTML = "🎉 Félicitations ! Tu as déjà terminé le quiz. Réinitialise pour refaire ! 🎉";
        return;
    }

    const question = questions[currentQuestion];
    const isCorrect = (selectedIndex === question.correct);
    const feedbackDiv = document.getElementById('feedback');

    if (isCorrect) {
        if (currentQuestion >= score) {
            score++;
            saveScore();
        }
        feedbackDiv.innerHTML = `✅ CORRECT ! ${question.explanation} ✅`;
        feedbackDiv.className = 'correct-feedback';
        feedbackDiv.style.padding = '10px';
        feedbackDiv.style.borderRadius = '10px';
    } else {
        feedbackDiv.innerHTML = `❌ FAUX ! La bonne réponse était : ${question.answers[question.correct]}.<br>📖 ${question.explanation} ❌`;
        feedbackDiv.className = 'wrong-feedback';
        feedbackDiv.style.padding = '10px';
        feedbackDiv.style.borderRadius = '10px';
    }

    // Passer à la question suivante
    currentQuestion++;

    if (currentQuestion < questions.length) {
        // Charger la question suivante
        loadQuestion();
    } else {
        // Fin du quiz
        quizCompleted = true;
        const percent = Math.floor((score / questions.length) * 100);
        feedbackDiv.innerHTML += `<br><br>🎊 QUIZ TERMINÉ ! Ton score : ${score}/${questions.length} (${percent}%) 🎊<br>${getFinalMessage(percent)}`;

        if (percent === 100) {
            feedbackDiv.innerHTML += `<br><br>🏆 Tu as un score PARFAIT ! Bravo champion ! 🏆`;
        }

        // Ajouter un bouton pour recommencer
        const restartBtn = document.createElement('button');
        restartBtn.innerHTML = '🔄 Recommencer le quiz';
        restartBtn.className = 'quiz-btn';
        restartBtn.style.marginTop = '15px';
        restartBtn.onclick = () => restartQuiz();
        feedbackDiv.appendChild(restartBtn);
    }

    updateProgressDisplay();
}

// Message final selon le score
function getFinalMessage(percent) {
    if (percent === 100) return "🌟 PARFAIT ! Tu es un expert du développement web ! 🌟";
    if (percent >= 80) return "🎉 Excellent ! Tu as très bien compris les bases ! 🎉";
    if (percent >= 60) return "👍 Bien joué ! Continue à t'entraîner sur les explications du site ! 👍";
    if (percent >= 40) return "📚 Bon début ! Passe ta souris sur les codes pour réviser 📚";
    return "💪 Pas de souci ! Tout le monde commence quelque part. Relis les explications et réessaie ! 💪";
}

// Charger une question
function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = `Question ${currentQuestion + 1} / ${questions.length}`;
    document.getElementById('question-text').innerHTML = question.text;

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-btn';
        btn.innerHTML = answer;
        btn.onclick = () => checkAnswer(index, answer);
        answersDiv.appendChild(btn);
    });

    document.getElementById('feedback').innerHTML = "📖 Choisis ta réponse pour continuer...";
    document.getElementById('feedback').className = '';
}

// Redémarrer le quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizCompleted = false;
    saveScore();
    loadQuestion();
    updateProgressDisplay();
    document.getElementById('feedback').innerHTML = "🔄 Quiz redémarré ! Bonne chance ! 🔄";
    document.getElementById('feedback').className = '';
}

// Initialiser le quiz
function initQuiz() {
    loadScore();
    loadQuestion();
    updateProgressDisplay();
}

// Appeler l'initialisation au chargement
initQuiz();