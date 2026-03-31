const lessonBtns = document.querySelectorAll('.lesson-btn');
const lessonContents = document.querySelectorAll('.lesson-content');

lessonBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Убираем активность со всех
        lessonBtns.forEach(b => b.classList.remove('active'));
        lessonContents.forEach(c => c.classList.remove('active-lesson'));
        
        // Добавляем активность нажатому
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active-lesson');
    });
});

// Система прогресса
let completedLessons = 0;
const totalLessons = 3;

function completeLesson(lessonNumber, nextTarget) {
    const currentBtn = document.querySelector(`.lesson-btn[data-target="lesson-${lessonNumber}"]`);
    
    // Если урок еще не был завершен
    if (!currentBtn.classList.contains('completed')) {
        currentBtn.classList.add('completed');
        completedLessons++;
        updateProgress();
    }

    // Переход к следующему уроку, если это не финиш
    if (nextTarget !== 'finish') {
        document.querySelector(`.lesson-btn[data-target="${nextTarget}"]`).click();
    } else {
        alert("Поздравляю! Базовый курс завершен. Ты готов к созданию настоящих скриптов!");
    }
}

function updateProgress() {
    const percent = Math.round((completedLessons / totalLessons) * 100);
    document.getElementById('progress-percent').innerText = `${percent}%`;
    document.getElementById('progress-fill').style.width = `${percent}%`;
}

// Имитация запуска кода
function runCode(outputId, btnElement) {
    const outputDiv = document.getElementById(outputId);
    
    // Меняем текст кнопки на загрузку
    const originalText = btnElement.innerText;
    btnElement.innerText = "Компиляция...";
    btnElement.style.opacity = "0.7";
    
    // Задержка в 0.6 секунды для эффекта "работы программы"
    setTimeout(() => {
        outputDiv.classList.remove('hidden');
        btnElement.innerText = "Выполнено";
        btnElement.style.background = "#10b981";
        btnElement.style.color = "#fff";
        btnElement.disabled = true;
    }, 600);
}
  
