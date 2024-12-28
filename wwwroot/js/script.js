window.onload = function () {
    js_responsibilities();
}

function js_responsibilities() {
    content_extractor('./home.html');
    downloadResumeAnimation();
    toggleTheme();
}

function registerHrefs() {
    var hrefSettings = document.querySelectorAll('.ref-setting');

    console.log(hrefSettings);

    hrefSettings.forEach(el => {
        el.addEventListener('click', () => {
            let hrefData;

            switch (el.dataset.ref) {
                case '/':
                    hrefData = './home.html';
                    break;
                case '/projects':
                    hrefData = './projects.html';
                    break;
                case '/projects-B':
                    hrefData = './best-projects.html';
                    break;
                case '/projects-S':
                    hrefData = './simple-projects.html';
                    break;
                case '/services':
                    hrefData = './services.html';
                    break;
                case '/programming':
                    hrefData = './services-programming.html';
                    break;
                case '/desk-devt':
                    hrefData = './services-deskdev.html';
                    break;
                case '/web-devt':
                    hrefData = './services-webdev.html';
                    break;
                case '/mobile-devt':
                    hrefData = './services-mobiledev.html';
                    break;
                case '/data-mngt':
                    hrefData = './database-management.html';
                    break;
                case '/system-design':
                    hrefData = './system-design.html';
                    break;
                case '/about':
                    hrefData = './about.html';
                    break;
                case '/contacts':
                    hrefData = './contacts.html';
                    break;
                case '/educ':
                    hrefData = './educ.html';
                    break;
                case '/works':
                    hrefData = './works.html';
                    break;
                case '/skills':
                    hrefData = './skills.html';
                    break;
                case '/certs':
                    hrefData = './certs.html';
                    break;
                case '/interests':
                    hrefData = './interests.html';
                    break;
            }

            content_remover();
            content_extractor(hrefData);
        });
    });
}

function downloadResumeAnimation() {
    var downloadDiv = document.querySelector('.right-header a');

    downloadDiv.addEventListener('mousedown', () => {
        downloadDiv.classList.remove('unpinned');
        downloadDiv.classList.add('pinned');
    });

    downloadDiv.addEventListener('mouseup', () => {
        downloadDiv.classList.remove('pinned');
        downloadDiv.classList.add('unpinned');
    });
}

function toggleTheme() {
    var themeNav = document.querySelector('.theme');
    var themeBtn = document.querySelector('.theme input');

    themeBtn.addEventListener('change', () => {
        var footer = document.querySelector('footer');
        var clouds = document.querySelectorAll('.cloud');
        var stillClouds = document.querySelectorAll('.still-cloud');

        if (themeNav.contains(document.querySelector('.theme input:checked'))) {
            document.body.style.background = 'linear-gradient(to bottom, #000000, #0c1128, #1e2340, #2e3555)';
            footer.style.color = '#72db70';
            clouds.forEach(elem => {
                elem.style.background = 'radial-gradient(#000, #001, #011, #111)';
            });
            stillClouds.forEach(elem => {
                elem.style.background = 'radial-gradient(#000, #001, #011, #111)';
            });
        } else {
            document.body.style.background = 'linear-gradient(to bottom, #9AC5F4, #99DBF5, #A7ECEE, #FFEEBB)';
            footer.style.color = '#126a12';
            clouds.forEach(elem => {
                elem.style.background = 'radial-gradient(#fff, #ffe, #fee, #eee)';
            });
            stillClouds.forEach(elem => {
                elem.style.background = 'radial-gradient(#fff, #ffe, #fee, #eee)';
            });
        }
    });
}

function content_extractor(href) {
    var header = document.querySelector('header');
    fetch(href).then(res => {
        if (res.ok) {
            return res.text();
        }
    }).then(htmlSnippet => {
        header.insertAdjacentHTML('afterend', htmlSnippet);
        registerHrefs();
    });
}

function content_remover() {
    var clouds = document.querySelectorAll('.cloud');
    clouds.forEach(element => {
        element.remove()
    });
}