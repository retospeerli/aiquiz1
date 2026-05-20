// app.js

const quizData = [

{
question: "Was bedeutet generative KI?",
answers: [
"A) KI, die nur alte Inhalte kopiert.",
"B) KI, die neue Inhalte wie Texte, Bilder oder Musik erstellt.",
"C) KI, die ausschließlich programmiert wird.",
"D) KI, die nur Fragen beantwortet."
],
correct: 1
},

{
question: "Was ist ein „Prompt“?",
answers: [
"A) Eine Beschreibung, die der KI vorgibt, was sie erstellen soll.",
"B) Ein Code, der die KI ausschaltet.",
"C) Eine Funktion, die Bilder erstellt.",
"D) Eine Antwort der KI."
],
correct: 0
},

{
question: "Welche Inhalte kann generative KI erstellen?",
answers: [
"A) Texte und Bilder, aber keine Musik oder Videos.",
"B) Texte, Bilder, Videos, Musik und Stimmen.",
"C) Nur Gemälde und Kurzgeschichten.",
"D) Nur Programmiercode."
],
correct: 1
},

{
question: "Auf welcher Grundlage arbeitet generative KI?",
answers: [
"A) Sie denkt wie ein Mensch.",
"B) Sie verwendet große Datenmengen, um Muster abzuleiten.",
"C) Sie kopiert ausschließlich andere Inhalte.",
"D) Sie funktioniert ohne Daten."
],
correct: 1
},

{
question: "Was sind „Deepfakes“?",
answers: [
"A) Texte, die von Menschen geschrieben wurden.",
"B) Realistisch wirkende Bilder oder Videos, die von KI erstellt wurden.",
"C) Fehlerhafte Inhalte, die die KI löscht.",
"D) Ein anderes Wort für Prompts."
],
correct: 1
},

{
question: "Was bedeutet es, wenn eine KI „halluziniert“?",
answers: [
"A) Sie zeigt bunte Bilder.",
"B) Sie gibt Antworten, die richtig klingen, aber falsch sind.",
"C) Sie schaltet sich aus.",
"D) Sie erstellt keine Inhalte mehr."
],
correct: 1
},

{
question: "Wie wird die Qualität der KI-Ergebnisse bestimmt?",
answers: [
"A) Durch die Geschwindigkeit der KI.",
"B) Durch die Qualität der zugrunde liegenden Daten und der Prompts.",
"C) Durch die Anzahl der generierten Inhalte.",
"D) Durch die Kosten der KI."
],
correct: 1
},

{
question: "Wie kann generative KI den Menschen unterstützen?",
answers: [
"A) Indem sie alle Aufgaben für ihn erledigt.",
"B) Als Schreib- oder Lernpartner, der Fleißarbeit übernimmt.",
"C) Indem sie immer die Fakten prüft.",
"D) Indem sie keine Rückmeldungen benötigt."
],
correct: 1
},

{
question: "Was sollte der Mensch bei der Nutzung von generativer KI verantworten?",
answers: [
"A) Die Geschwindigkeit der KI.",
"B) Die Fakten der Ergebnisse.",
"C) Die Erstellung der Prompts.",
"D) Das Design der KI."
],
correct: 1
},

{
question: "Warum ist reflektierter Umgang mit generativer KI wichtig?",
answers: [
"A) Weil die KI sonst keine neuen Inhalte erstellen kann.",
"B) Weil die KI missbraucht werden kann, z. B. für Deepfakes.",
"C) Weil die KI keine Daten verwendet.",
"D) Weil die KI menschliche Fähigkeiten ersetzt."
],
correct: 1
},

{
question: "Warum ist die Qualität der zugrunde liegenden Daten so wichtig?",
answers: [
"A) Sie beeinflusst, wie schnell die KI arbeitet.",
"B) Sie bestimmt, wie präzise und glaubwürdig die Ergebnisse sind.",
"C) Sie sorgt dafür, dass die KI keine Fehler macht.",
"D) Sie macht die KI unabhängig von Prompts."
],
correct: 1
},

{
question: "Warum sind KI-generierte Inhalte schwer zu erkennen?",
answers: [
"A) Weil sie keine Muster nutzen.",
"B) Weil sie oft so wirken, als wären sie von Menschen erstellt.",
"C) Weil sie immer gleich aussehen.",
"D) Weil sie nur aus Daten bestehen."
],
correct: 1
},

{
question: "Wie kann man eine KI sinnvoll steuern?",
answers: [
"A) Mit sinnvollen Prompts und reflektierter Nutzung.",
"B) Indem man keine Daten verwendet.",
"C) Mit möglichst wenigen Eingaben.",
"D) Indem man der KI keine Rückmeldungen gibt."
],
correct: 0
},

{
question: "Warum können „Deepfakes“ gefährlich sein?",
answers: [
"A) Sie sind immer fehlerhaft.",
"B) Sie können Menschen täuschen, da sie echt wirken.",
"C) Sie enthalten keine Daten.",
"D) Sie werden nicht von Prompts gesteuert."
],
correct: 1
},

{
question: "Was bedeutet ein souveräner Umgang mit generativer KI?",
answers: [
"A) Die KI so oft wie möglich zu nutzen.",
"B) Die Tools mit sinnvollen Prompts zu steuern und kritisch zu bewerten.",
"C) Der KI alle Aufgaben zu überlassen.",
"D) Die KI nur bei Fleißaufgaben zu verwenden."
],
correct: 1
}

];

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");

function buildQuiz(){

quizData.forEach((q, index)=>{

const questionDiv = document.createElement("div");
questionDiv.classList.add("question");

let answersHTML = "";

q.answers.forEach((answer, i)=>{
answersHTML += `
<label>
<input type="radio" name="question${index}" value="${i}">
${answer}
</label>
`;
});

questionDiv.innerHTML = `
<h2>${index + 1}. ${q.question}</h2>
<div class="answers">
${answersHTML}
</div>
`;

quizContainer.appendChild(questionDiv);

});

}

function showResults(){

let score = 0;

quizData.forEach((q, index)=>{

const selected = document.querySelector(`input[name="question${index}"]:checked`);
const labels = document.querySelectorAll(`input[name="question${index}"]`);

labels.forEach((input, i)=>{

const parent = input.parentElement;

parent.classList.remove("correct");
parent.classList.remove("wrong");

if(i === q.correct){
parent.classList.add("correct");
}

});

if(selected){

const answer = Number(selected.value);

if(answer === q.correct){
score++;
}else{
selected.parentElement.classList.add("wrong");
}

}

});

resultDiv.innerHTML = `
Du hast <strong>${score} von ${quizData.length}</strong> Fragen richtig beantwortet.
`;

window.scrollTo({
top: document.body.scrollHeight,
behavior: "smooth"
});

}

buildQuiz();

submitBtn.addEventListener("click", showResults);
