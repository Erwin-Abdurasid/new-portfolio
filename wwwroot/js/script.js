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
    var themeBtn = document.querySelector('.theme input');

    themeBtn.addEventListener('change', () => {
        change_theme();
    });
}

function change_theme() {
    var themeNav = document.querySelector('.theme');
    var footer = document.querySelector('footer');
    var clouds = document.querySelectorAll('.cloud');
    var stillClouds = document.querySelectorAll('.still-cloud');
    var detailedElems = document.querySelectorAll('.still-cloud article section h3');
    var detailedElems2 = document.querySelectorAll('.still-cloud article section p');
    var detailedElems3 = document.querySelectorAll('.still-cloud article section ul li');
    var detailedElems4 = document.querySelectorAll('.still-cloud article section ul li a');

    if (themeNav.contains(document.querySelector('.theme input:checked'))) {
        document.body.style.background = 'linear-gradient(to bottom, #070B34, #141852, #2B2F77, #483475)';
        footer.style.color = '#72db70';
        clouds.forEach(elem => {
            elem.style.background = 'radial-gradient(#000, #001, #011, #111)';
        });
        stillClouds.forEach(elem => {
            elem.style.background = 'radial-gradient(#000, #001, #011, #111)';
        });
        detailedElems.forEach(elem => {
            elem.style.color = '#fff';
        });
        detailedElems2.forEach(elem => {
            elem.style.color = '#fff';
        });
        detailedElems3.forEach(elem => {
            elem.style.color = '#fff';
        });
        detailedElems4.forEach(elem => {
            elem.style.color = '#fff';
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
        detailedElems.forEach(elem => {
            elem.style.color = '#000';
        });
        detailedElems2.forEach(elem => {
            elem.style.color = '#000';
        });
        detailedElems3.forEach(elem => {
            elem.style.color = '#000';
        });
        detailedElems4.forEach(elem => {
            elem.style.color = '#000';
        });
    }
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
        downloadResumeAnimation();
        change_theme();

        if (href === './contacts.html') {
            contactsImage();
        }
    });
}

function content_remover() {
    var clouds = document.querySelectorAll('.cloud');
    clouds.forEach(element => {
        element.remove()
    });
}

function contactsImage() {
    fetch('./wwwroot/database/images-data.json').then(data => {
        var targetImgs = document.querySelectorAll('.still-cloud article section.img img');
        var targetPs = document.querySelectorAll('.still-cloud article section.img p');
        var dataEval = data.json();

        console.log(dataEval);

        // for (let i = 0; i < dataEval.length; i++) {
        //     targetImgs[i].setAttribute('src', dataEval[i].imagePath);
        //     targetPs[i].setAttribute('src', dataEval[i].name);
        // }
    }).catch(err => {
        console.log(err);
    });

    fetch('./wwwroot/database/contacts-data.json').then(data => {
        var targetPNs = document.querySelectorAll('.still-cloud article section.contacts .pn');
        var targetEAs = document.querySelectorAll('.still-cloud article section.contacts .ea');
        var targetULs = document.querySelectorAll('.still-cloud article section.contacts ul');
        var dataEval = data.json();

        console.log(dataEval);

        // for (let i = 0; i < dataEval.length; i++) {
        //     targetPNs[i].firstChild.textContent = dataEval[i].phoneNumber;
        //     targetEAs[i].firstChild.textContent = dataEval[i].email;

        //     for (let j = 0; j < targetULs[i].childNodes.length; j++) {
        //         targetULs[i].childNodes[j].firstChild.textContent = dataEval[i].socialMedias[j].name;
        //         targetULs[i].childNodes[j].firstChild.setAttribute('href', dataEval[i].socialMedias[j].url);
        //     }
        // }
    }).catch(err => {
        console.log(err);
    });
}