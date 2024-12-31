// Custom Classes

class Stack {
    constructor() {
        this.storage = {};
        this.count = 0;
    }

    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let returnValue = this.storage[this.count];
        delete this.storage[this.count];

        return returnValue;
    }

    peek() {
        return this.storage[this.count - 1];
    }
}

// Logics

let stack = new Stack();

window.onload = function () {
    js_responsibilities();
}

function js_responsibilities() {
    content_extractor('./home.html');
    downloadResumeAnimation();
    toggleTheme();
    stack.push('./home.html');
}

function registerHrefs() {
    let hrefSettings = document.querySelectorAll('.ref-setting');

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

            stack.push(hrefData);
            content_extractor(hrefData);
        });
    });
}

function downloadResumeAnimation() {
    let downloadDiv = document.querySelector('.right-header a');

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
    let themeBtn = document.querySelector('.theme input');

    themeBtn.addEventListener('change', () => {
        if (themeBtn.checked === true) {
            localStorage.setItem('theme', 'night');
        } else {
            localStorage.setItem('theme', 'day');
        }
        change_theme();
    });
}

function change_theme() {
    let footer = document.querySelector('footer');
    let clouds = document.querySelectorAll('.cloud');
    let themeBtn = document.querySelector('.theme input');
    let contents = document.querySelectorAll('#contents article');
    let detailedElems = document.querySelectorAll('#contents article section h3');
    let detailedElems2 = document.querySelectorAll('#contents article section p');
    let detailedElems3 = document.querySelectorAll('#contents article section ul li');
    let detailedElems4 = document.querySelectorAll('#contents article section ul li a');
    let backBtnPaths = document.querySelectorAll('#back-btn path');

    if (localStorage.getItem('theme') === 'night') {
        themeBtn.checked = true;
        document.body.style.background = 'linear-gradient(to bottom, #070B34, #141852, #2B2F77, #483475)';
        footer.style.color = '#72db70';

        if (clouds !== null) {
            clouds.forEach(elem => {
                elem.style.background = 'radial-gradient(#000, #001, #011, #111)';
            });
        }
        if (backBtnPaths !== null) {
            backBtnPaths.forEach(path => {
                path.setAttribute('fill', '#FFFFFF');
            })
        }
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
        themeBtn.checked = false;
        document.body.style.background = 'linear-gradient(to bottom, #9AC5F4, #99DBF5, #A7ECEE, #FFEEBB)';
        footer.style.color = '#126a12';

        if (clouds !== null) {
            clouds.forEach(elem => {
                elem.style.background = 'radial-gradient(#fff, #ffe, #fee, #eee)';
            });
        }
        if (backBtnPaths !== null) {
            backBtnPaths.forEach(path => {
                path.setAttribute('fill', '#000000');
            })
        }
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
    let header = document.querySelector('header');

    fetch(href).then(res => {
        if (res.ok) {
            return res.text();
        }
    }).then(htmlSnippet => {
        content_remover();
        header.insertAdjacentHTML('afterend', htmlSnippet);

        // Data Access Areas
        if (href === './contacts.html') {
            contactsImage();
        } else if (href === './educ.html') {
            education();
        } else if (href === './works.html') {
            workExperiences();
        }

        registerBackBtn();
        change_theme();
        registerHrefs();
    }).catch(err => {
        console.log(err);
    });
}

function content_remover() {
    let clouds = document.querySelectorAll('.cloud');
    let contents = document.querySelector('div#contents');

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
    let backBtn = document.querySelector('svg#back-btn');

    if (backBtn !== null) {
        backBtn.remove();
    }
}

function registerBackBtn() {
    let backBtn = document.querySelector('svg#back-btn');

    if (backBtn !== null) {
        backBtn.addEventListener('click', () => {
            stack.pop();
            content_extractor(stack.peek());
        });
    }
}

function contactsImage() {
    let targetImg = document.querySelector('#contents article section.img img.img-prof');
    let targetName = document.querySelector('#contents article section.img h3');
    let targetPN = document.querySelector('#contents article section.contacts .pn');
    let targetEA = document.querySelector('#contents article section.contacts .ea');
    let targetSM = document.querySelector('#contents article section.contacts ul');

    fetch('./wwwroot/database/images-data.json').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(dataEval => {
        targetImg.setAttribute('src', dataEval.imgPath);
        targetName.innerHTML = dataEval.name;
    }).catch(err => {
        console.log(err);
    });

    fetch('./wwwroot/database/contacts-data.json').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(dataEval => {
        targetPN.children[0].innerText = dataEval.phoneNumber;
        targetEA.children[0].innerText = dataEval.email;

        for (let j = 0; j < dataEval.socialMedias.length; j++) {
            let newLi = document.createElement('li');
            newLi.innerHTML = `
                <a href="${dataEval.socialMedias[j].url}">${dataEval.socialMedias[j].name}</a>
            `;
            targetSM.appendChild(newLi);
        }
        change_theme();
    }).catch(err => {
        console.log(err);
    });
}

function education() {
    let targetDiv = document.querySelector('#contents article section.educ');

    fetch('./wwwroot/database/education-data.json').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(dataEval => {
        for (let i = 0; i < dataEval.length; i++) {
            let c = null;
            let fg = null;

            if (dataEval[i].course !== null) {
                c = document.createElement('p');
                c.innerHTML = `
                    <p class="c">Course: <span>${dataEval[i].course}</span></p>
                `;
            }
            if (dataEval[i].finalGrade !== null) {
                fg = document.createElement('p');
                fg.innerHTML = `
                    <p class="fg">Final Grade: <span>${dataEval[i].finalGrade}</span></p>
                `;
            }
            let u = document.createElement('p');
            u.innerHTML = `
                    <p class="u">University: <span>${dataEval[i].university}</span></p>
                `;
            let d = document.createElement('p');
            d.innerHTML = `
                    <p class="ds">Date: <span>${dataEval[i].dateStarted}&mdash;${dataEval[i].dateEnded}</span></p>
                `;
            let yt = document.createElement('p');
            yt.innerHTML = `
                    <p class="yt">Years Took: <span>${dataEval[i].yearsTook}</span></p>
                `;

            if (c === null && fg === null) targetDiv.append(u, ds, de, yt);
            else if (c === null) targetDiv.append(u, ds, de, yt, fg);
            else if (fg === null) targetDiv.append(c, u, ds, de, yt);
            else targetDiv.append(c, u, ds, de, yt, fg);

            targetDiv.append(document.createElement('br'));
        }
        change_theme();
    }).catch(err => {
        console.log(err);
    });
}

function workExperiences() {
    let targetDiv = document.querySelector('#contents article section.works');

    fetch('./wwwroot/database/works-data.json').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(dataEval => {
        for (let i = 0; i < dataEval.length; i++) {
            let r = document.createElement('p');
            r.innerHTML = `
                    <p class="r">${dataEval[i].role}</p>
                `;
            let e = document.createElement('p');
            e.innerHTML = `
                    <p class="e">Employer: <span>${dataEval[i].employer}</span></p>
                `;
            let ja = document.createElement('p');
            ja.innerHTML = `
                    <p class="ja">Job Address: <span>${dataEval[i].jobAddress}</span></p>
                `;
            let d = document.createElement('p');
            d.innerHTML = `
                    <p class="d">Date: <span>${dataEval[i].dateStarted}&mdash;${dataEval[i].dateEnded}</span></p>
                `;
            let yt = document.createElement('p');
            yt.innerHTML = `
                    <p class="yt">Years Took: <span>${dataEval[i].yearsTook}</span></p>
                `;
            let rpbl = document.createElement('p');
            rpbl.innerText = 'Responsibilities';
            let responsibilities = document.createElement('ul');

            for (let j = 0; j < dataEval[i].responsibilities.length; j++) {
                let newLi = document.createElement('li');
                newLi.innerText = dataEval[i].responsibilities[j];
                responsibilities.appendChild(newLi);
            }

            targetDiv.append(r, e, ja, d, yt, rpbl, responsibilities);
            targetDiv.append(document.createElement('br'));
        }
        change_theme();
    }).catch(err => {
        console.log(err);
    })
}