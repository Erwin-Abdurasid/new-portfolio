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
    var backBtn = document.querySelector('#back-btn');

    if (themeNav.contains(document.querySelector('.theme input:checked'))) {
        document.body.style.background = 'linear-gradient(to bottom, #070B34, #141852, #2B2F77, #483475)';
        footer.style.color = '#72db70';

        if (clouds !== null) {
            clouds.forEach(elem => {
                elem.style.background = 'radial-gradient(#000, #001, #011, #111)';
            });
        }
        if (backBtn !== null)
            backBtn.setAttribute('src', 'wwwroot/icon/other-icons/back-light-svgrepo-com.svg');
        if (contents !== null) {
            contents.forEach(elem => {
                elem.style.background = 'radial-gradient(#000, #001, #011, #111)';
            });
        }
        if (detailedElems !== null) {
            detailedElems.forEach(elem => {
                elem.style.color = '#fff';
            });
        }
        if (detailedElems2 !== null) {
            detailedElems2.forEach(elem => {
                elem.style.color = '#fff';
            });
        }
        if (detailedElems3 !== null) {
            detailedElems3.forEach(elem => {
                elem.style.color = '#fff';
            });
        }
        if (detailedElems4 !== null) {
            detailedElems4.forEach(elem => {
                elem.style.color = '#fff';
                elem.style.textDecorationColor = '#3737ee';
            });
        }
    } else {
        document.body.style.background = 'linear-gradient(to bottom, #9AC5F4, #99DBF5, #A7ECEE, #FFEEBB)';
        footer.style.color = '#126a12';

        if (clouds !== null) {
            clouds.forEach(elem => {
                elem.style.background = 'radial-gradient(#fff, #ffe, #fee, #eee)';
            });
        }
        if (backBtn !== null)
            backBtn.setAttribute('src', 'wwwroot/icon/other-icons/back-dark-svgrepo-com.svg');
        if (contents !== null) {
            contents.forEach(elem => {
                elem.style.background = 'radial-gradient(#fff, #ffe, #fee, #eee)';
            });
        }
        if (detailedElems !== null) {
            detailedElems.forEach(elem => {
                elem.style.color = '#000';
            });
        }
        if (detailedElems2 !== null) {
            detailedElems2.forEach(elem => {
                elem.style.color = '#000';
            });
        }
        if (detailedElems3 !== null) {
            detailedElems3.forEach(elem => {
                elem.style.color = '#000';
            });
        }
        if (detailedElems4 !== null) {
            detailedElems4.forEach(elem => {
                elem.style.color = '#000';
                elem.style.textDecorationColor = '#000049';
            });
        }
    }
}

function content_extractor(href) {
    var header = document.querySelector('header');

    fetch(href).then(res => {
        if (res.ok) {
            return res.text();
        }
    }).then(htmlSnippet => {
        content_remover();
        header.insertAdjacentHTML('afterend', htmlSnippet);
        registerHrefs();

        // Data Access Areas
        if (href === './contacts.html') {
            contactsImage();
        } else if (href === './educ.html') {
            education();
        }

        change_theme();
    }).catch(err => {
        console.log(err);
    });
}

function content_remover() {
    var clouds = document.querySelectorAll('.cloud');
    var contents = document.querySelector('div#contents');

    if (clouds !== null) {
        clouds.forEach(element => {
            element.remove();
        });
    }

    if (contents !== null) {
        contents.remove();
    }

    // NOTE: Must be last!
    //      Because possibly that in the area of contents,
    //      it will be deleted.
    var backBtn = document.querySelector('img#back-btn');

    if (backBtn !== null) {
        backBtn.remove();
    }
}

function contactsImage() {
    var targetImg = document.querySelector('#contents article section.img img.img-prof');
    var targetName = document.querySelector('#contents article section.img h3');
    var targetPN = document.querySelector('#contents article section.contacts .pn');
    var targetEA = document.querySelector('#contents article section.contacts .ea');
    var targetSM = document.querySelector('#contents article section.contacts ul');

    fetch('./wwwroot/database/images-data.json').then(data => {
        return data.json();
    }).then(dataEval => {
        targetImg.setAttribute('src', dataEval.imgPath);
        targetName.innerHTML = dataEval.name;
    }).catch(err => {
        console.log(err);
    });

    fetch('./wwwroot/database/contacts-data.json').then(data => {
        return data.json();
    }).then(dataEval => {
        targetPN.children[0].innerText = dataEval.phoneNumber;
        targetEA.children[0].innerText = dataEval.email;

        for (let j = 0; j < dataEval.socialMedias.length; j++) {
            var newLi = document.createElement('li');
            newLi.innerHTML = `
                <a href="${dataEval.socialMedias[j].url}">${dataEval.socialMedias[j].name}</a>
            `;
            targetSM.appendChild(newLi);
        }
    }).catch(err => {
        console.log(err);
    });
}

function education() {
    var targetDiv = document.querySelector('#contents article');

    fetch('./wwwroot/database/education-data.json').then(data => {
        return data.json();
    }).then(dataEval => {
        for (let i = 0; i < dataEval.length; i++) {
            var c = null;
            var fg = null;
            var newSect = null;

            if (dataEval[i].course !== null) {
                c = document.createElement('p')
                    .innerHTML = `
                    <p class="c">Course: <span>${dataEval[i].course}</span></p>
                `;
            }
            if (dataEval[i].finalGrade !== null) {
                fg = document.createElement('p')
                    .innerHTML = `
                    <p class="fg">Final Grade: <span>${dataEval[i].finalGrade}</span></p>
                `;
            }
            var u = document.createElement('p')
                .innerHTML = `
                    <p class="u">University: <span>${dataEval[i].university}</span></p>
                `;
            var ds = document.createElement('p')
                .innerHTML = `
                    <p class="ds">Date Started: <span>${dataEval[i].dateStarted}</span></p>
                `;
            var de = document.createElement('p')
                .innerHTML = `
                    <p class="de">Date Ended: <span>${dataEval[i].dateEnded}</span></p>
                `;
            var yt = document.createElement('p')
                .innerHTML = `
                    <p class="yt">Years Took: <span>${dataEval[i].yearsTook}</span></p>
                `;

            newSect = document.createElement('section');
            if (c === null) newSect.append([u, ds, de, yt, fg]);
            if (fg === null) newSect.append([c, u, ds, de, yt]);
            if (c === null && fg === null) newSect.append([u, ds, de, yt]);
            else newSect.append([c, u, ds, de, yt, fg]);

            targetDiv.append(newSect);
        }
    }).catch(err => {
        console.log(err);
    });
}