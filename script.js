(function () {
    var questions = querySelectorAll('article');
    var questionsContainer = document.getElementById('questions');
    var noProtectedSection = document.getElementById('no-protected-veteran');
    var yesProtectedSection = document.getElementById('yes-protected-veteran');
    var currentIndex = 0;
    toggle(questions[currentIndex], true);
    toggle(noProtectedSection, false);
    toggle(yesProtectedSection, false);
    querySelectorAllOnClick('button[value="continue"]', function () {
        toggle(questions[currentIndex], false);
        toggle(questions[++currentIndex], true);
    });
    querySelectorAllOnClick('button[value="no"]', function () {
        toggle(noProtectedSection, true);
        toggle(questionsContainer, false);
        questions.map(function (question) { return toggle(question, false); });
    });
    querySelectorAllOnClick('button[value="yes"]', function () {
        toggle(yesProtectedSection, true);
        toggle(questionsContainer, false);
        questions.map(function (question) { return toggle(question, false); });
    });
    function querySelectorAll(selectors) {
        return Array.prototype.slice.call(document.querySelectorAll(selectors));
    }
    function querySelectorAllOnClick(selectors, listener) {
        return querySelectorAll(selectors)
            .forEach(function (item) {
            item.addEventListener('click', listener);
        });
    }
    function toggle(element, show) {
        element.style.display = show ? 'block' : 'none';
        return element;
    }
})();
