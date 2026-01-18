const questions = [
    {
        q: "1. Apakah maksud perkataan 'prihatin'?",
        options: ["Tidak peduli", "Mengambil berat", "Malas", "Sombong"],
        answer: 1
    },
    {
        q: "2. Ayat manakah merupakan ayat tanya?",
        options: [
            "Ali sedang membaca buku.",
            "Tolong tutup pintu itu.",
            "Siapakah nama guru kamu?",
            "Mereka pergi ke sekolah."
        ],
        answer: 2
    },
    {
        q: "3. Pilih kata adjektif yang betul.",
        options: ["Berlari", "Cantik", "Buku", "Makan"],
        answer: 1
    },
    {
        q: "4. Perkataan manakah ialah kata nama?",
        options: ["Meja", "Cantik", "Berlari", "Sedang"],
        answer: 0
    },
    {
        q: "5. Ayat manakah merupakan ayat penyata?",
        options: [
            "Ali sedang menulis.",
            "Siapakah nama kamu?",
            "Tolong diam.",
            "Wah, cantiknya!"
        ],
        answer: 0
    },
    {
        q: "6. Apakah fungsi kata sendi nama?",
        options: [
            "Menunjukkan perbuatan",
            "Menunjukkan sifat",
            "Menghubungkan kata",
            "Menunjukkan arah atau tempat"
        ],
        answer: 3
    },
    {
        q: "7. Pilih kata kerja yang betul.",
        options: ["Kerusi", "Makan", "Cantik", "Meja"],
        answer: 1
    },
    {
        q: "8. Ayat manakah merupakan ayat perintah?",
        options: [
            "Dia sedang membaca.",
            "Sila beratur dengan kemas.",
            "Apakah warna kegemaran kamu?",
            "Wah, besarnya rumah itu!"
        ],
        answer: 1
    },
    {
        q: "9. Perkataan 'indah' tergolong dalam kata apa?",
        options: ["Kata nama", "Kata kerja", "Kata adjektif", "Kata sendi"],
        answer: 2
    },
    {
        q: "10. Ayat manakah merupakan ayat seruan?",
        options: [
            "Ali sedang tidur.",
            "Sila duduk.",
            "Siapa nama kamu?",
            "Wah, cantiknya bunga itu!"
        ],
        answer: 3
    }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const quizScreen = document.getElementById("quiz");
const welcomeScreen = document.getElementById("welcome");
const resultScreen = document.getElementById("result");
const progressEl = document.getElementById("progress");

function startQuiz() {
    welcomeScreen.classList.add("slide-out");

    setTimeout(() => {
        welcomeScreen.classList.remove("active");
        quizScreen.classList.add("active");
        quizScreen.classList.add("slide-in");
        loadQuestion();

        setTimeout(() => quizScreen.classList.remove("slide-in"), 650);
    }, 650);
}

function loadQuestion() {
    feedback.textContent = "";
    nextBtn.style.display = "none";

    const q = questions[current];
    questionEl.textContent = q.q;
    progressEl.textContent = `Soalan ${current + 1} / ${questions.length}`;

    optionBtns.forEach((btn, i) => {
        btn.textContent = q.options[i];
        btn.disabled = false;
        btn.className = "option";
    });
}

function selectAnswer(index) {
    optionBtns.forEach(btn => btn.disabled = true);

    if (index === questions[current].answer) {
        optionBtns[index].classList.add("correct");
        feedback.textContent = "✅ Jawapan betul!";
        score++;
    } else {
        optionBtns[index].classList.add("wrong");
        optionBtns[questions[current].answer].classList.add("correct");
        feedback.textContent = "❌ Jawapan salah!";
    }

    nextBtn.style.display = "inline-block";
}

function nextQuestion() {
    current++;
    if (current < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    let grade =
        score >= 8 ? "Cemerlang 🏆" :
        score >= 5 ? "Baik 👍" :
        "Perlu Cuba Lagi 💪";

    resultScreen.innerHTML = `
        <h2>🎯 Markah Anda</h2>
        <div class="score-box">
            <p class="score">${score} / ${questions.length}</p>
            <p class="grade">${grade}</p>
        </div>
        <button onclick="location.reload()">🔁 Main Semula</button>
    `;
}
</script>



