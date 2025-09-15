document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "¿Cuál de las siguientes afirmaciones describe correctamente una función 'f' real de variable real?",
            options: [
                "Una regla que asocia a cada objeto 'x' de un conjunto dominio más de un valor 'y' de un codominio.",
                "Una regla que asocia a cada objeto 'y' de un conjunto codominio un valor único 'x' de un dominio.",
                "Una regla que asocia a cada objeto 'x' de un conjunto dominio un valor único 'y' de un codominio, donde ambos son subconjuntos de números reales.",
                "Una regla que solo se aplica a números naturales."
            ],
            correctAnswer: 2,
            justification: "La definición formal de una función real de variable real establece que a cada elemento del dominio (subconjunto de números reales) se le asigna un único valor en el codominio (también subconjunto de números reales)."
        },
        {
            question: "¿Qué representa el **valor absoluto** de un número real 'a' en una recta numérica?",
            options: [
                "El signo negativo del número 'a'.",
                "La distancia (valor positivo) que existe entre el número y el cero.",
                "El valor opuesto del número 'a' si es positivo.",
                "Una magnitud negativa obtenida suprimiendo el signo positivo."
            ],
            correctAnswer: 1,
            justification: "El valor absoluto de un número real 'a', denotado |a|, representa la distancia de 'a' al origen (cero) en la recta numérica, y por lo tanto, siempre es un valor no negativo."
        },
        {
            question: "Un **entorno reducido y simétrico** de un punto x₀ y radio δ (E'(x₀, δ)) se caracteriza por:",
            options: [
                "Ser un intervalo cerrado [x₀-δ, x₀+δ] incluyendo el punto x₀.",
                "Ser un intervalo abierto (x₀-δ, x₀+δ) que incluye el punto x₀.",
                "Ser un intervalo abierto (x₀-δ, x₀+δ) donde se excluye el punto x₀.",
                "Ser un intervalo (x₀-h, x₀+k) con h y k valores reales positivos distintos."
            ],
            correctAnswer: 2,
            justification: "Un entorno reducido y simétrico (E'(x₀, δ)) es un intervalo abierto (x₀-δ, x₀+δ) del cual se ha excluido el punto central x₀. Es decir, (x₀-δ, x₀) U (x₀, x₀+δ)."
        },
        {
            question: "Un punto x₀ es un **punto de acumulación** de un conjunto A si:",
            options: [
                "x₀ pertenece al conjunto A y a su entorno reducido.",
                "En todo entorno reducido de x₀ pertenece por lo menos un punto de A.",
                "x₀ es el único punto en un entorno reducido de A.",
                "El punto x₀ siempre debe pertenecer al conjunto A."
            ],
            correctAnswer: 1,
            justification: "Un punto x₀ es un punto de acumulación de un conjunto A si cada entorno reducido de x₀ contiene al menos un punto de A. No es necesario que x₀ pertenezca al conjunto A."
        },
        {
            question: "La **definición formal del límite** de una función y=f(x) cuando 'x tiende al punto x₀' establece que:",
            options: [
                "Para todo 'δ' existe un 'ε' tal que |f(x) - L| < δ para 0 < |x - x₀| < ε.",
                "Para todo 'ε' tan pequeño como se quiera, existe otro número 'δ', también positivo y arbitrariamente pequeño, tal que se verifique |f(x) - L| < ε para 0 < |x - x₀| < δ.",
                "El límite L siempre es el valor de f(x₀).",
                "Los límites laterales siempre son distintos."
            ],
            correctAnswer: 1,
            justification: "La definición épsilon-delta del límite establece que para cualquier épsilon (ε > 0) que se elija, siempre se puede encontrar un delta (δ > 0) tal que si la distancia de x a x₀ (sin incluir x₀) es menor que delta, entonces la distancia de f(x) a L es menor que épsilon."
        },
        {
            question: "Para que el **límite de una función** cuando x tiende a x₀ exista, ¿qué condición deben cumplir los límites laterales (Lᵢ y Ld)?",
            options: [
                "Deben ser infinitos y de distinto signo.",
                "Deben existir pero no necesariamente ser iguales.",
                "Deben coincidir en un mismo valor constante L.",
                "Solo uno de ellos debe existir."
            ],
            correctAnswer: 2,
            justification: "La existencia del límite de una función en un punto x₀ requiere que los límites laterales (por la izquierda y por la derecha) existan y sean iguales a un mismo valor finito L."
        },
        {
            question: "Según el **álgebra de límites**, el límite de un producto de funciones f(x) y g(x) es igual a:",
            options: [
                "El producto de los límites, siempre que g(x) ≠ 0.",
                "La suma de sus límites.",
                "El producto de sus límites.",
                "El límite del logaritmo de la función."
            ],
            correctAnswer: 2,
            justification: "El teorema del límite de un producto establece que el límite del producto de dos funciones es igual al producto de sus límites individuales, siempre que ambos límites existan."
        },
        {
            question: "Se denomina **infinitésimo** a toda función cuyo límite es:",
            options: [
                "Infinito positivo.",
                "Infinito negativo.",
                "Cero.",
                "Un valor indeterminado."
            ],
            correctAnswer: 2,
            justification: "Una función se considera un infinitésimo en un punto si su límite en ese punto es cero. Esto significa que la función se acerca a cero a medida que la variable independiente se aproxima al punto."
        },
        {
            question: "Una de las condiciones necesarias para que una función y=f(x) sea **continua en un punto x₀** es que:",
            options: [
                "El límite de la función L cuando x tiende a x₀ debe ser infinito.",
                "Exista la función valuada en el punto f(x₀).",
                "Los límites laterales sean diferentes.",
                "La función no esté definida en x₀."
            ],
            correctAnswer: 1,
            justification: "Para que una función sea continua en un punto x₀, deben cumplirse tres condiciones: 1) f(x₀) debe existir (la función está definida en el punto), 2) el límite de f(x) cuando x tiende a x₀ debe existir, y 3) el límite debe ser igual a f(x₀)."
        },
        {
            question: "Una discontinuidad se clasifica como **Evitable** si:",
            options: [
                "Su límite no es un valor finito (pudiendo ser infinito o no existir).",
                "Existen los límites laterales finitos, pero no son iguales.",
                "Existe un límite y es un valor finito, exista o no f(x₀).",
                "Al menos uno de los límites laterales es infinito."
            ],
            correctAnswer: 2,
            justification: "Una discontinuidad es evitable si el límite de la función en el punto de discontinuidad existe y es un valor finito, incluso si la función no está definida en ese punto o si f(x₀) es diferente del límite. Se puede 'evitar' redefiniendo la función en ese punto."
        },
        {
            question: "¿Cómo se interpreta el **cociente incremental** (Δy/Δx)?",
            options: [
                "Como la pendiente de la recta tangente en un único punto.",
                "Como la tasa instantánea de cambio de la función.",
                "Como la tasa promedio de variación o el cambio promedio que sufre la función cuando cambia la variable.",
                "Como la derivada de la función en un punto."
            ],
            correctAnswer: 2,
            justification: "El cociente incremental (Δy/Δx) representa la pendiente de la recta secante que pasa por dos puntos de la función. Es una medida de la tasa de cambio promedio de la función sobre un intervalo."
        },
        {
            question: "La **derivada de y=f(x) en el punto x₀** se define como:",
            options: [
                "El valor de la función en x₀.",
                "El cociente incremental (Δy/Δx) sin tomar el límite.",
                "El límite del cociente incremental, si existe, cuando el incremento de la variable independiente (Δx) tiende a cero.",
                "La tasa de crecimiento instantáneo dividido por la función."
            ],
            correctAnswer: 2,
            justification: "La derivada de una función en un punto x₀ se define como el límite del cociente incremental cuando el incremento de la variable independiente (Δx o h) tiende a cero. Este límite representa la pendiente de la recta tangente a la curva en ese punto y la tasa de cambio instantánea."
        },
        {
            question: "¿Qué relación existe entre la **diferenciabilidad y la continuidad** de una función en un punto x₀?",
            options: [
                "Si una función es continua en un punto, siempre es derivable en ese punto.",
                "Si existe derivada en un punto x₀, la función es continua en dicho punto.",
                "Son conceptos completamente independientes.",
                "Una función puede ser derivable pero discontinua en un punto."
            ],
            correctAnswer: 1,
            justification: "Un teorema fundamental del cálculo establece que si una función es derivable en un punto, entonces es continua en ese punto. Sin embargo, lo contrario no siempre es cierto: una función puede ser continua en un punto pero no derivable (por ejemplo, funciones con picos o cúspides)."
        },
        {
            question: "Dada una función compuesta y = f[g(x)], la **Regla de la Cadena** establece que su derivada (dy/dx) es igual a:",
            options: [
                "dy/du + du/dx.",
                "(dy/du) / (du/dx).",
                "(dy/du) * (du/dx).",
                "dy/dx = f'(x)."
            ],
            correctAnswer: 2,
            justification: "La Regla de la Cadena se utiliza para derivar funciones compuestas. Establece que la derivada de f(g(x)) es f'(g(x)) * g'(x), lo que en notación de Leibniz se expresa como (dy/du) * (du/dx) donde u = g(x)."
        },
        {
            question: "Según la tabla de derivadas inmediatas, la derivada de una **función constante y=a** es:",
            options: [
                "1.",
                "x.",
                "0.",
                "a.x."
            ],
            correctAnswer: 2,
            justification: "La derivada de una función constante (y = a) siempre es cero, ya que la tasa de cambio de una cantidad que no cambia es nula."
        },
        {
            question: "Una de las **hipótesis fundamentales del Teorema de Rolle** para una función y=f(x) en el intervalo [a,b] es:",
            options: [
                "f(x) sea discontinua en (a,b).",
                "f(a) ≠ f(b).",
                "f(x) sea derivable en el intervalo (a,b).",
                "La función f(x) sea constante en todo el intervalo."
            ],
            correctAnswer: 2,
            justification: "Las tres hipótesis del Teorema de Rolle son: 1) f(x) es continua en el intervalo cerrado [a,b], 2) f(x) es derivable en el intervalo abierto (a,b), y 3) f(a) = f(b)."
        },
        {
            question: "El **Teorema del Valor Medio de Lagrange** establece que si f(x) es continua en [a,b] y derivable en (a,b), existe al menos un punto x₀ ∈ (a,b) tal que:",
            options: [
                "f'(x₀) = 0.",
                "f(b) - f(a) = f'(x₀) / (b - a).",
                "(f(b) - f(a)) / (b - a) = f'(x₀).",
                "f(a) = f(b)."
            ],
            correctAnswer: 2,
            justification: "El Teorema del Valor Medio de Lagrange establece que la pendiente de la recta tangente en algún punto x₀ dentro del intervalo (a,b) es igual a la pendiente de la recta secante que une los puntos (a, f(a)) y (b, f(b))."
        },
        {
            question: "¿Cuál de las siguientes expresiones aritméticas es una **forma indeterminada**?",
            options: [
                "k/0+ (donde k es una constante).",
                "0/0.",
                "k^0 (donde k es una constante distinta de cero).",
                "∞ + ∞."
            ],
            correctAnswer: 1,
            justification: "Las formas indeterminadas son expresiones cuyo valor no puede determinarse directamente y requieren métodos adicionales (como la Regla de L'Hôpital) para su evaluación. 0/0 es una de las siete formas indeterminadas comunes."
        },
        {
            question: "La **Regla de L'Hôpital** se aplica directamente (sin transformaciones previas) para resolver indeterminaciones de los tipos:",
            options: [
                "0 · ∞ o ∞ - ∞.",
                "1^∞ o 0^0.",
                "0/0 o ∞/∞.",
                "k/0+ o k/∞."
            ],
            correctAnswer: 2,
            justification: "La Regla de L'Hôpital es aplicable directamente a límites que resultan en las formas indeterminadas 0/0 o ∞/∞. Otras formas indeterminadas deben ser transformadas algebraicamente para obtener una de estas dos formas antes de aplicar la regla."
        },
        {
            question: "Para aplicar la **Regla de L'Hôpital a la indeterminación (∞ · 0)**, ¿qué transformación algebraica se debe realizar?",
            options: [
                "Dividir por la inversa de una de las funciones para transformarla en (0/0) o (∞/∞) ",
                "Restar las recíprocas de las funciones.",
                "Aplicar logaritmo natural en ambos miembros.",
                "No se requiere ninguna transformación, se aplica directamente."
            ],
            correctAnswer: 0,
            justification: "Para resolver una indeterminación del tipo ∞ · 0 usando L'Hôpital, se debe reescribir la expresión como un cociente. Esto se logra dividiendo una de las funciones por la inversa de la otra, convirtiéndola en una forma 0/0 o ∞/∞."
        }
    ];

    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const correctCountElement = document.getElementById('correct-answers');
    const incorrectCountElement = document.getElementById('incorrect-answers');
    const scorePercentageElement = document.getElementById('score-percentage');
    const finalStatusText = document.getElementById('final-status-text');
    const restartButton = document.getElementById('restart-quiz');

    let answers = [];

    function renderQuiz() {
        quizContainer.innerHTML = '';
        answers = [];
        questions.forEach((q, index) => {
            const cardWrapper = document.createElement('div');
            cardWrapper.classList.add('card-wrapper');

            const quizCard = document.createElement('div');
            quizCard.classList.add('quiz-card');
            quizCard.setAttribute('data-question-index', index);

            const cardFront = document.createElement('div');
            cardFront.classList.add('card-face', 'card-front');

            const questionElement = document.createElement('p');
            questionElement.classList.add('card-question');
            questionElement.innerHTML = `${index + 1}. ${q.question}`;

            const optionsList = document.createElement('ul');
            optionsList.classList.add('card-options');
            q.options.forEach((optionText, optIndex) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = optionText;
                listItem.addEventListener('click', () => handleOptionClick(quizCard, q, optIndex, listItem, index));
                optionsList.appendChild(listItem);
            });

            cardFront.appendChild(questionElement);
            cardFront.appendChild(optionsList);

            const cardBack = document.createElement('div');
            cardBack.classList.add('card-face', 'card-back');

            quizCard.appendChild(cardFront);
            quizCard.appendChild(cardBack);
            cardWrapper.appendChild(quizCard);
            quizContainer.appendChild(cardWrapper);
        });
        resultsContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
    }

    function handleOptionClick(quizCard, questionData, selectedOptionIndex, clickedListItem, questionIndex) {
        if (quizCard.classList.contains('flipped')) {
            return;
        }

        const options = quizCard.querySelectorAll('.card-options li');
        options.forEach((option, idx) => {
            if (idx === selectedOptionIndex) {
                option.classList.add('selected');
            }
            option.style.pointerEvents = 'none';
        });

        const cardBack = quizCard.querySelector('.card-back');
        cardBack.innerHTML = '';

        const isCorrect = (selectedOptionIndex === questionData.correctAnswer);
        answers[questionIndex] = isCorrect;

        if (isCorrect) {
            cardBack.classList.add('correct');
            cardBack.classList.remove('incorrect');
            cardBack.innerHTML = '<span class="result-icon">&#10003;</span>';
        } else {
            cardBack.classList.add('incorrect');
            cardBack.classList.remove('correct');
            cardBack.innerHTML = '<span class="result-icon">&#x2717;</span>';
            options[questionData.correctAnswer].classList.add('correct-answer');
        }

        const justificationElement = document.createElement('p');
        justificationElement.classList.add('justification');
        justificationElement.textContent = questionData.justification;
        cardBack.appendChild(justificationElement);

        setTimeout(() => {
            quizCard.classList.add('flipped');
            checkQuizCompletion();
        }, 300);
    }

    function checkQuizCompletion() {
        if (answers.length === questions.length && !answers.includes(undefined)) {
            setTimeout(showResults, 1000);
        }
    }

    function showResults() {
        const correctAnswers = answers.filter(a => a).length;
        const incorrectAnswers = questions.length - correctAnswers;
        const percentage = (correctAnswers / questions.length) * 100;
        const status = percentage >= 50 ? 'Aprobado' : 'Volver a realizar';

        correctCountElement.textContent = correctAnswers;
        incorrectCountElement.textContent = incorrectAnswers;
        scorePercentageElement.textContent = `${percentage.toFixed(0)}%`;
        finalStatusText.textContent = status;
        finalStatusText.className = '';
        finalStatusText.classList.add(percentage >= 50 ? 'approved' : 'failed');

        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');

        // Deshabilitar el botón si la calificación es aprobada
        if (status === 'Aprobado') {
            restartButton.style.display = 'none';
        } else {
            restartButton.style.display = 'block';
        }
    }

    restartButton.addEventListener('click', () => {
        renderQuiz();
    });

    renderQuiz();
});