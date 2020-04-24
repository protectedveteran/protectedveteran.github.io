(function () {

    const questions = querySelectorAll('article');
    const questionsContainer = document.getElementById('questions');
    const noProtectedSection = document.getElementById('no-protected-veteran');
    const yesProtectedSection = document.getElementById('yes-protected-veteran');

    let currentIndex = 0;

    toggle(questions[currentIndex], true);
    toggle(noProtectedSection, false);
    toggle(yesProtectedSection, false);

    querySelectorAllOnClick('button[value="continue"]', () => {
        toggle(questions[currentIndex], false);
        toggle(questions[++currentIndex], true);
    });

    querySelectorAllOnClick('button[value="no"]', () => {
        toggle(noProtectedSection, true);
        toggle(questionsContainer, false);
        questions.map(question => toggle(question, false));
    });

    querySelectorAllOnClick('button[value="yes"]', () => {
        toggle(yesProtectedSection, true);
        toggle(questionsContainer, false);
        questions.map(question => toggle(question, false));
    });

    type Listener = (this: HTMLElement, ev: MouseEvent) => any;

    function querySelectorAll(selectors: string): HTMLElement[] {
        return Array.prototype.slice.call(document.querySelectorAll(selectors));
    }

    function querySelectorAllOnClick(selectors: string, listener: Listener) {
        return querySelectorAll(selectors)
            .forEach((item: HTMLElement) => {
                item.addEventListener('click', listener);
            });
    }

    function toggle(element: HTMLElement, show: boolean) {
        element.style.display = show ? 'block' : 'none';
        return element;
    }

})();