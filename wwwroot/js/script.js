function js_responsibilities() {
    content_extractor();
    cloudsAnimation();
    downloadResumeAnimation();
    toggleTheme();
}

js_responsibilities();

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

function cloudsAnimation() {
    var cloud_two = document.querySelector('.cloud.two');
    setTimeout(() => { }, 4000);
    if (cloud_two != null) cloud_two.classList.remove('later');

    var cloud_three = document.querySelector('.cloud.three');
    setTimeout(() => { }, 4000);
    if (cloud_three != null) cloud_three.classList.remove('later');

    var cloud_four = document.querySelector('.cloud.four');
    setTimeout(() => { }, 4000);
    if (cloud_four != null) cloud_four.classList.remove('later');

    var cloud_five = document.querySelector('.cloud.five');
    setTimeout(() => { }, 4000);
    if (cloud_five != null) cloud_five.classList.remove('later');

    var cloud_six = document.querySelector('.cloud.six');
    setTimeout(() => { }, 4000);
    if (cloud_six != null) cloud_six.classList.remove('later');
}

function content_extractor() {
    var header = document.querySelector('header');
    fetch('./home.html')
        .then(res => {
            if (res.ok) {
                return res.text();
            }
        })
        .then(htmlSnippet => {
            header.insertAdjacentHTML('afterend', htmlSnippet);
        });
}