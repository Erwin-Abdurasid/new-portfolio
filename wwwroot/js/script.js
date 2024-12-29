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
    var contents = document.querySelectorAll('#contents article');
    var detailedElems = document.querySelectorAll('#contents article section h3');
    var detailedElems2 = document.querySelectorAll('#contents article section p');
    var detailedElems3 = document.querySelectorAll('#contents article section ul li');
    var detailedElems4 = document.querySelectorAll('#contents article section ul li a');
    var backBtn = document.getElementById('back-btn');

    if (themeNav.contains(document.querySelector('.theme input:checked'))) {
        document.body.style.background = 'linear-gradient(to bottom, #070B34, #141852, #2B2F77, #483475)';
        footer.style.color = '#72db70';
        clouds.forEach(elem => {
            elem.style.background = 'radial-gradient(#000, #001, #011, #111)';
        });
        contents.forEach(elem => {
            elem.style.background = '#000';
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
            elem.style.textDecorationColor = '#3737ee';
        });
        backBtn.setAttribute('src', 'wwwroot/icon/other-icons/back-light-svgrepo-com.svg');
    } else {
        document.body.style.background = 'linear-gradient(to bottom, #9AC5F4, #99DBF5, #A7ECEE, #FFEEBB)';
        footer.style.color = '#126a12';
        clouds.forEach(elem => {
            elem.style.background = 'radial-gradient(#fff, #ffe, #fee, #eee)';
        });
        contents.forEach(elem => {
            elem.style.background = '#fff';
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
            elem.style.textDecorationColor = '#000049';
        });
        backBtn.setAttribute('src', 'wwwroot/icon/other-icons/back-dark-svgrepo-com.svg');
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

        if (href === './contacts.html') {
            contactsImage();
        }

        change_theme();
    });
}

function content_remover() {
    var clouds = document.querySelectorAll('.cloud');
    var contents = document.getElementById('contents');

    clouds.forEach(element => {
        element.remove()
    });

    if (contents !== null) {
        contents.remove();
    }
}

function contactsImage() {
    var targetImgs = document.querySelectorAll('#contents article section.img img.img-prof');
    var targetNames = document.querySelectorAll('#contents article section.img h3');
    var targetPNs = document.querySelectorAll('#contents article section.contacts .pn');
    var targetEAs = document.querySelectorAll('#contents article section.contacts .ea');
    var targetULs = document.querySelectorAll('#contents article section.contacts ul');

    fetch('./wwwroot/database/images-data.json').then(data => {
        return data.json();
    }).then(dataEval => {
        console.log(dataEval);
        for (let i = 0; i < dataEval.length; i++) {
            targetImgs[i].setAttribute('src', dataEval[i].imgPath);
            targetNames[i].innerHTML = dataEval[i].name;
        }
    }).catch(err => {
        console.log(err);
    });

    fetch('./wwwroot/database/contacts-data.json').then(data => {
        return data.json();
    }).then(dataEval => {
        console.log(dataEval);
        for (let i = 0; i < dataEval.length; i++) {
            targetPNs[i].children[0].innerText = dataEval[i].phoneNumber;
            targetEAs[i].children[0].innerText = dataEval[i].email;

            for (let j = 0; j < dataEval[i].socialMedias.length; j++) {
                var newLi = document.createElement('li');
                var newAnch = document.createElement('a');

                newAnch.innerText = dataEval[i].socialMedias[j].name;
                newAnch.setAttribute('href', dataEval[i].socialMedias[j].url);

                newLi.appendChild(newAnch);
                targetULs[i].appendChild(newLi);
            }
        }
    }).catch(err => {
        console.log(err);
    });
}