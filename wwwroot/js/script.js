import Stack from './custom-stack.js';

let stack = new Stack();

window.onload = function () {
    js_responsibilities();
}

function js_responsibilities() {
    let hrefObj = {
        url: './subpages/home.html',
        title: 'Home | New Portfolio'
    };

    stack.push(JSON.stringify(hrefObj));

    content_extractor(hrefObj.url, hrefObj.title);
    downloadResumeAnimation();
    toggleTheme();
}

function registerHrefs() {
    let hrefSettings = document.querySelectorAll('.ref-setting');

    hrefSettings.forEach(el => {
        el.addEventListener('click', () => {
            let hrefData = null;
            let titleText = null;

            switch (el.dataset.ref) {
                case '/':
                    stack.clear();
                    hrefData = './subpages/home.html';
                    titleText = 'Home | New Portfolio';
                    break;
                case '/projects':
                    hrefData = './subpages/projects.html';
                    titleText = 'Projects | New Portfolio';
                    break;
                case '/projects-B':
                    hrefData = './subpages/best-projects.html';
                    titleText = 'Best | Projects | New Portfolio';
                    break;
                case '/projects-S':
                    hrefData = './subpages/simple-projects.html';
                    titleText = 'Simple | Projects | New Portfolio';
                    break;
                case '/services':
                    hrefData = './subpages/services.html';
                    titleText = 'Services | New Portfolio';
                    break;
                case '/programming':
                    hrefData = './subpages/services-programming.html';
                    titleText = 'Programming | Services | New Portfolio';
                    break;
                case '/desk-devt':
                    hrefData = './subpages/services-deskdev.html';
                    titleText = 'Desktop App Development | Services | New Portfolio';
                    break;
                case '/web-devt':
                    hrefData = './subpages/services-webdev.html';
                    titleText = 'Web Development | Services | New Portfolio';
                    break;
                case '/mobile-devt':
                    hrefData = './subpages/services-mobiledev.html';
                    titleText = 'Mobile App Development | Services | New Portfolio';
                    break;
                case '/data-mngt':
                    hrefData = './subpages/database-management.html';
                    titleText = 'Database Management | Services | New Portfolio';
                    break;
                case '/system-design':
                    hrefData = './subpages/system-design.html';
                    titleText = 'System Design | Services | New Portfolio';
                    break;
                case '/about':
                    hrefData = './subpages/about.html';
                    titleText = 'About | New Portfolio';
                    break;
                case '/contacts':
                    hrefData = './subpages/contacts.html';
                    titleText = 'Contacts + Image | About | New Portfolio';
                    break;
                case '/educ':
                    hrefData = './subpages/educ.html';
                    titleText = 'Education | About | New Portfolio';
                    break;
                case '/works':
                    hrefData = './subpages/works.html';
                    titleText = 'Work Experiences | About | New Portfolio';
                    break;
                case '/skills':
                    hrefData = './subpages/skills.html';
                    titleText = 'Skills | About | New Portfolio';
                    break;
                case '/certs':
                    hrefData = './subpages/certs.html';
                    titleText = 'Certifications, Licences & Trainings | About | New Portfolio';
                    break;
                case '/interests':
                    hrefData = './subpages/interests.html';
                    titleText = 'Hobbies & Interests | About | New Portfolio';
                    break;
            }

            let hrefObj = {
                url: hrefData,
                title: titleText
            };

            stack.push(JSON.stringify(hrefObj));

            content_extractor(hrefData, titleText);
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
    let detailedElems2A = document.querySelectorAll('#contents article section p a');
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
        if (detailedElems2A !== null) {
            detailedElems2A.forEach(elem => {
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
        if (detailedElems2A !== null) {
            detailedElems2A.forEach(elem => {
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

function content_extractor(href, titleText) {
    let header = document.querySelector('header');
    let title = document.querySelector('title');

    fetch(href).then(res => {
        if (res.ok) {
            return res.text();
        }
    }).then(htmlSnippet => {
        content_remover();
        header.insertAdjacentHTML('afterend', htmlSnippet);
        title.innerText = titleText;

        // Data Access Areas
        if (href === './subpages/contacts.html') {
            contactsImage();
        } else if (href === './subpages/educ.html') {
            education();
        } else if (href === './subpages/works.html') {
            workExperiences();
        } else if (href === './subpages/skills.html') {
            skills();
        } else if (href === './subpages/certs.html') {
            certs();
        } else if (href === './subpages/interests.html') {
            interests();
        } else if (href === './subpages/services-programming.html') {
            programming();
        } else if (href === './subpages/services-deskdev.html') {
            desktopDevt();
        } else if (href === './subpages/services-webdev.html') {
            webDevt();
        } else if (href === './subpages/services-mobiledev.html') {
            mobaDevt();
        } else if (href === './subpages/database-management.html') {
            dataMngt();
        } else if (href === './subpages/system-design.html') {
            systemDesign();
        } else if (href === './subpages/simple-projects.html') {
            simpleProjects();
        } else if (href === './subpages/best-projects.html') {
            bestProjects();
        } else {
            change_theme();
        }

        registerBackBtn();
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

            let hrefObj = JSON.parse(stack.peek());

            content_extractor(hrefObj.url, hrefObj.title);
        });
    }
}

// About Subpages Data

function contactsImage() {
    let targetImg = document.querySelector('#contents article section.img img.img-prof');
    let targetName = document.querySelector('#contents article section.img h3');
    let targetPN = document.querySelector('#contents article section.contacts .pn');
    let targetEA = document.querySelector('#contents article section.contacts .ea');
    let targetSM = document.querySelector('#contents article section.contacts ul');

    fetch('./wwwroot/database/image-data.json').then(res => {
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
            if (dataEval[i].dateStarted === dataEval[i].dateEnded) {
                d.innerHTML = `
                <p class="ds">Date: <span>${dataEval[i].dateEnded}</span></p>
            `;
            } else {
                d.innerHTML = `
                <p class="ds">Date: <span>${dataEval[i].dateStarted}&mdash;${dataEval[i].dateEnded}</span></p>
            `;
            }
            let yt = document.createElement('p');
            yt.innerHTML = `
                    <p class="yt">Years Took: <span>${dataEval[i].yearsTook}</span></p>
                `;

            if (c === null && fg === null) targetDiv.append(u, d, yt);
            else if (c === null) targetDiv.append(u, d, yt, fg);
            else if (fg === null) targetDiv.append(c, u, d, yt);
            else targetDiv.append(c, u, d, yt, fg);

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
            if (dataEval[i].dateStarted === dataEval[i].dateEnded) {
                d.innerHTML = `
                    <p class="d">Date: <span>${dataEval[i].dateEnded}</span></p>
                `;
            } else {
                d.innerHTML = `
                    <p class="d">Date: <span>${dataEval[i].dateStarted}&mdash;${dataEval[i].dateEnded}</span></p>
                `;
            }

            let yt = document.createElement('p');
            yt.innerHTML = `
                    <p class="yt">Years Took: <span>${dataEval[i].yearsTook}</span></p>
                `;
            let rpbl = document.createElement('p');
            rpbl.innerText = 'Responsibilities:';
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

function skills() {
    let techSkills = document.querySelector('#contents article section.t-skills');
    let hardSkills = document.querySelector('#contents article section.h-skills');
    let softSkills = document.querySelector('#contents article section.s-skills');

    fetch('./wwwroot/database/skills-data.json').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(dataEval => {
        for (let i = 0; i < dataEval.length; i++) {
            if (dataEval[i].category === 'Technical Skill') {
                let p = null;

                let n = document.createElement('p');
                n.innerHTML = `
                        <p class="n">${dataEval[i].name}</p>
                    `;
                if (dataEval[i].proficiency !== null) {
                    p = document.createElement('p');
                    p.innerHTML = `
                                <p class="p">Proficiency: <span>${dataEval[i].proficiency}</span></p>
                            `;
                }

                if (p === null) techSkills.append(n);
                else techSkills.append(n, p);
                techSkills.append(document.createElement('br'));
            } else if (dataEval[i].category === 'Hard Skill') {
                let p = null;

                let n = document.createElement('p');
                n.innerHTML = `
                        <p class="n">${dataEval[i].name}</p>
                    `;
                if (dataEval[i].proficiency !== null) {
                    p = document.createElement('p');
                    p.innerHTML = `
                            <p class="p">Proficiency: <span>${dataEval[i].proficiency}</span></p>
                        `;
                }

                if (p === null) hardSkills.append(n);
                else hardSkills.append(n, p);
                hardSkills.append(document.createElement('br'));
            } else if (dataEval[i].category === 'Soft Skill') {
                let p = null;

                let n = document.createElement('p');
                n.innerHTML = `
                        <p class="n">${dataEval[i].name}</p>
                    `;
                if (dataEval[i].proficiency !== null) {
                    p = document.createElement('p');
                    p.innerHTML = `
                        <p class="p">Proficiency: <span>${dataEval[i].proficiency}</span></p>
                    `;
                }

                if (p === null) softSkills.append(n);
                else softSkills.append(n, p);
                softSkills.append(document.createElement('br'));
            }
        }
        change_theme();
    }).catch(err => {
        console.log(err);
    })
}

function certs() {
    let targetDiv = document.querySelector('#contents article section.certs');

    fetch('./wwwroot/database/certs-data.json').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(dataEval => {
        for (let i = 0; i < dataEval.length; i++) {
            let h = null;

            let t = document.createElement('p');
            t.innerHTML = `
                        <p class="t">${dataEval[i].title}</p>
                    `;
            let c = document.createElement('p');
            c.innerHTML = `
                        <p class="c">Conducted By: <span>${dataEval[i].conductor}</span></p>
                    `;
            let d = document.createElement('p');
            d.innerHTML = `
                        <p class="d">Date: <span>${dataEval[i].date}</span></p>
                    `;
            if (dataEval[i].hours !== null) {
                h = document.createElement('p');
                h.innerHTML = `
                            <p class="h">Hours: <span>${dataEval[i].hours}</span></p>
                        `;
            }
            let a = document.createElement('p');
            a.innerHTML = `
                            <p class="a">Address: <span>${(dataEval[i].isVirtual ? "Virtual" : dataEval[i].address)}</span></p>
                        `;

            if (h === null) targetDiv.append(t, c, d, a);
            else targetDiv.append(t, c, d, h, a);

            targetDiv.append(document.createElement('br'));
        }
        change_theme();
    }).catch(err => {
        console.log(err);
    })
}

function interests() {
    let targetDiv = document.querySelector('#contents article section.interests');

    fetch('./wwwroot/database/interests-data.json').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(dataEval => {
        for (let i = 0; i < dataEval.length; i++) {
            let el = document.createElement('p');
            el.innerHTML = `
                <p class="n">${dataEval[i]}</p>    
            `;
            targetDiv.append(el);
        }
        targetDiv.append(document.createElement('br'));
        change_theme();
    }).catch(err => {
        console.log(err);
    })
}

// Service Subpages Data

function programming() {
    let targetDiv = document.querySelector('#contents article section.programming');

    fetch('./wwwroot/database/programming-data.json').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(dataEval => {
        for (let i = 0; i < dataEval.length; i++) {
            let n = document.createElement('p');
            n.innerHTML = `
                <p class="n">${dataEval[i]}</p>    
            `;
            targetDiv.append(n);
        }
        targetDiv.append(document.createElement('br'));
        change_theme();
    }).catch(err => {
        console.log(err);
    })
}

function desktopDevt() {
    let targetDiv = document.querySelector('#contents article section.desktopDevt');

    fetch('./wwwroot/database/desktop-devt-data.json').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(dataEval => {
        for (let i = 0; i < dataEval.length; i++) {
            let n = document.createElement('p');
            n.innerHTML = `
                <p class="n">${dataEval[i].name}</p>    
            `;
            let c = document.createElement('p');
            c.innerHTML = `
                <p class="c">Category: <span>${dataEval[i].category}</span></p>    
            `;
            targetDiv.append(n, c);
            targetDiv.append(document.createElement('br'));
        }
        change_theme();
    }).catch(err => {
        console.log(err);
    })
}

function webDevt() {
    let targetDiv = document.querySelector('#contents article section.webDevt');

    fetch('./wwwroot/database/web-devt-data.json').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(dataEval => {
        for (let i = 0; i < dataEval.length; i++) {
            let n = document.createElement('p');
            n.innerHTML = `
                <p class="n">${dataEval[i].name}</p>    
            `;
            let c = document.createElement('p');
            c.innerHTML = `
                <p class="c">Category: <span>${dataEval[i].category}</span></p>    
            `;
            targetDiv.append(n, c);
            targetDiv.append(document.createElement('br'));
        }
        change_theme();
    }).catch(err => {
        console.log(err);
    });
}

function mobaDevt() {
    let targetDiv = document.querySelector('#contents article section.mobaDevt');

    fetch('./wwwroot/database/mobile-devt-data.json').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(dataEval => {
        for (let i = 0; i < dataEval.length; i++) {
            let n = document.createElement('p');
            n.innerHTML = `
                <p class="n">${dataEval[i].name}</p>    
            `;
            let c = document.createElement('p');
            c.innerHTML = `
                <p class="c">Category: <span>${dataEval[i].category}</span></p>    
            `;
            targetDiv.append(n, c);
            targetDiv.append(document.createElement('br'));
        }
        change_theme();
    }).catch(err => {
        console.log(err);
    });
}

function dataMngt() {
    let targetDiv = document.querySelector('#contents article section.dataMngt');

    fetch('./wwwroot/database/data-mngt-data.json').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(dataEval => {
        for (let i = 0; i < dataEval.length; i++) {
            let n = document.createElement('p');
            n.innerHTML = `
                <p class="n">${dataEval[i].name}</p>    
            `;
            let c = document.createElement('p');
            c.innerHTML = `
                <p class="c">Category: <span>${dataEval[i].category}</span></p>    
            `;
            targetDiv.append(n, c);
            targetDiv.append(document.createElement('br'));
        }
        change_theme();
    }).catch(err => {
        console.log(err);
    });
}

function systemDesign() {
    let targetDiv = document.querySelector('#contents article section.systemDesign');

    fetch('./wwwroot/database/system-design-data.json').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(dataEval => {
        for (let i = 0; i < dataEval.length; i++) {
            let n = document.createElement('p');
            n.innerHTML = `
                <p class="n">${dataEval[i]}</p>    
            `;
            targetDiv.append(n);
        }
        targetDiv.append(document.createElement('br'));
        change_theme();
    }).catch(err => {
        console.log(err);
    });
}

// Projects Subpages Data

function simpleProjects() {
    let targetDiv = document.querySelector('#contents article section.s-projects');

    fetch('./wwwroot/database/proj-simp-data.json').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(dataEval => {
        for (let i = 0; i < dataEval.length; i++) {
            let u = null;
            let us = null;

            let n = document.createElement('p');
            n.innerHTML = `
                <p class="n">${dataEval[i].name} <span>(${dataEval[i].version})</span></p>    
            `;
            let desc = document.createElement('p');
            desc.innerHTML = `
                <p class="desc">Description:</p>    
            `;
            let descl = document.createElement('ul');
            let descli = document.createElement('li');
            descli.innerHTML = `${dataEval[i].description}`;
            descl.append(descli);

            let s = document.createElement('p');
            s.innerHTML = `
                <p class="s">Status: <span>${dataEval[i].status}</span></p>    
            `;
            let src = document.createElement('p');
            if (dataEval[i].src === null) {
                src.innerHTML = `
                <p class="src">Source Codes: <span>Unavailable</span></p>    
            `;
            } else {
                src.innerHTML = `
                 <p class="src">Source Codes: <a href="${dataEval[i].src}">${dataEval[i].src}</a></p>   
            `;
            }

            let d = document.createElement('p');
            if (dataEval[i].dateStarted === dataEval[i].dateEnded) {
                d.innerHTML = `
                <p class="d">Date: <span>${dataEval[i].dateStarted}</span></p>    
            `;
            } else {
                d.innerHTML = `
                <p class="d">Date: <span>${dataEval[i].dateStarted}&mdash;${dataEval[i].dateEnded}</span></p>    
            `;
            }
            if (dataEval[i].updates !== null) {
                u = document.createElement('p');
                u.innerHTML = `
                    <p class="u">Updates:</p>    
                `;

                us = document.createElement('ul');
                for (let j = 0; j < dataEval[i].updates.length; j++) {
                    let li = document.createElement('li');
                    li.innerHTML = `
                        ${dataEval[i].updates[j].version} ${dataEval[i].updates[j].dateFinished}
                    `;
                    us.append(li);
                }
            }

            if (dataEval[i].updates === null) targetDiv.append(n, desc, descl, s, src, d);
            else targetDiv.append(n, desc, descl, s, src, d, u, us);
            targetDiv.append(document.createElement('br'));
        }
        change_theme();
    }).catch(err => {
        console.log(err);
    });
}

function bestProjects() {
    let targetDiv = document.querySelector('#contents article section.b-projects');

    fetch('./wwwroot/database/proj-best-data.json').then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(dataEval => {
        for (let i = 0; i < dataEval.length; i++) {
            let u = null;
            let us = null;

            let n = document.createElement('p');
            n.innerHTML = `
                <p class="n">${dataEval[i].name} <span>(${dataEval[i].version})</span></p>    
            `;
            let desc = document.createElement('p');
            desc.innerHTML = `
                <p class="desc">Description:</p>    
            `;
            let descl = document.createElement('ul');
            let descli = document.createElement('li');
            descli.innerHTML = `${dataEval[i].description}`;
            descl.append(descli);

            let s = document.createElement('p');
            s.innerHTML = `
                <p class="s">Status: <span>${dataEval[i].status}</span></p>    
            `;
            let src = document.createElement('p');
            if (dataEval[i].src === null) {
                src.innerHTML = `
                <p class="src">Source Codes: <span>Unavailable</span></p>    
            `;
            } else {
                src.innerHTML = `
                <p class="src">Source Codes: <a href="${dataEval[i].src}">${dataEval[i].src}</a></p>    
            `;
            }
            let d = document.createElement('p');
            if (dataEval[i].dateStarted === dataEval[i].dateEnded) {
                d.innerHTML = `
                <p class="d">Date: <span>${dataEval[i].dateStarted}</span></p>    
            `;
            } else {
                d.innerHTML = `
                <p class="d">Date: <span>${dataEval[i].dateStarted}&mdash;${dataEval[i].dateEnded}</span></p>    
            `;
            }

            if (dataEval[i].updates !== null) {
                u = document.createElement('p');
                u.innerHTML = `
                    <p class="u">Updates:</p>    
                `;

                us = document.createElement('ul');
                for (let j = 0; j < dataEval[i].updates.length; j++) {
                    let li = document.createElement('li');
                    li.innerHTML = `
                        ${dataEval[i].updates[j].version} ${dataEval[i].updates[j].dateFinished}
                    `;
                    us.append(li);
                }
            }

            if (dataEval[i].updates === null) targetDiv.append(n, desc, descl, s, src, d);
            else targetDiv.append(n, desc, descl, s, src, d, u, us);
            targetDiv.append(document.createElement('br'));
        }
        change_theme();
    }).catch(err => {
        console.log(err);
    });
}