function main() {
    const articles = querySelectorAll('article');
    const header = document.querySelector('header');
    const articleNo = articles[articles.length - 2];
    const articleYes = articles[articles.length - 1];

    let currentIndex = 0;

    hashChange();

    querySelectorAllOnClick('button[value="continue"]', () => {
        window.location.hash = `${++currentIndex}`;
    });

    querySelectorAllOnClick('button[value="no"]', () => {
        window.location.hash = `no`;
    });

    querySelectorAllOnClick('button[value="yes"]', () => {
        window.location.hash = `yes`;
    });

    function hashChange() {
        let hash = window.location.hash.substr(1);

        articles.forEach((article) => toggle(article, false));

        hash = hash || '0';

        if (/^\d$/.test(hash)) {
            if (hash === '0') header.classList.remove('small');
            else header.classList.add('small');

            toggle(articles[hash], true);
        } else if (hash === 'no') {
            header.classList.remove('small');
            toggle(articleNo, true);
        } else if (hash === 'yes') {
            header.classList.remove('small');
            toggle(articleYes, true);
        }
    }

    window.addEventListener('hashchange', hashChange, false);

    header.addEventListener('click', () => {
        window.location.href = '/';
    });

    type Listener = (this: HTMLElement, ev: MouseEvent) => any;

    function querySelectorAll(selectors: string): HTMLElement[] {
        return Array.prototype.slice.call(document.querySelectorAll(selectors));
    }

    function querySelectorAllOnClick(selectors: string, listener: Listener) {
        return querySelectorAll(selectors).forEach((item: HTMLElement) => {
            item.addEventListener('click', listener);
        });
    }

    function toggle(element: HTMLElement, show: boolean) {
        if (show) element.classList.remove('hidden');
        else element.classList.add('hidden');
        return element;
    }
}

main();
