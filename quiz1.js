import data from "./assets/js/data.js";

document.addEventListener("DOMContentLoaded", function () {
  let currentQuestion = 0;
  let score = 0;
  let timer;
  const timeLimit = 15;
  const userAnswers = [];
  const questions = data;

  function startTimer() {
    let timeLeft = timeLimit;
    updateTimer(timeLeft);
    timer = setInterval(() => {
      timeLeft--;
      updateTimer(timeLeft);
      if (timeLeft <= 0) {
        clearInterval(timer);
        nextQuestion();
      }
    }, 1000);
  }

  function updateTimer(time) {
    document.getElementById("timer").textContent = `Waktu: ${time}s`;
  }

  function loadQuestion() {
    document.getElementById("explanation").style.display = "none";
    document.getElementById("question").textContent =
      questions[currentQuestion].question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    questions[currentQuestion].options.forEach((option) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.className = "option";
      btn.onclick = () => checkAnswer(btn, option);
      optionsContainer.appendChild(btn);
    });

    startTimer();
  }

  function checkAnswer(button, selected) {
    clearInterval(timer);
    const correct = selected === questions[currentQuestion].answer;

    // Simpan jawaban beserta penjelasan ke dalam userAnswers
    userAnswers.push({
      question: questions[currentQuestion].question,
      selected,
      correct,
      explanation: questions[currentQuestion].explanation,
    });

    button.classList.add(correct ? "correct" : "incorrect");

    // Tampilkan penjelasan setelah menjawab
    const explanation = document.getElementById("explanation");
    explanation.innerHTML = `<p>${questions[currentQuestion].explanation}</p>`;
    explanation.style.display = "block";

    setTimeout(nextQuestion, 2000);
  }

  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    const quizContainer = document.getElementById("quiz-container");
    let resultHTML = `<h2>Quiz Selesai!</h2><p>Skor Anda: ${
      userAnswers.filter((a) => a.correct).length
    } / ${questions.length}</p><div class='result'>`;

    userAnswers.forEach((ans, index) => {
      resultHTML += `<p><strong>${index + 1}. ${ans.question}</strong></p>`;
      resultHTML += `<p style='color: ${
        ans.correct ? "lightgreen" : "salmon"
      }'>Jawaban Anda: ${ans.selected}</p>`;
      resultHTML += `<p style='color: lightblue'>Jawaban benar: ${questions[index].answer}</p>`;
      resultHTML += `<p style='color: #bdc3c7'>Penjelasan: ${ans.explanation}</p><hr>`;
    });

    resultHTML += "</div>";
    quizContainer.innerHTML = resultHTML;
  }

  loadQuestion();
});
