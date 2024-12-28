function js_responsibilities() {
    downloadResumeAnimation();
    toggleTheme();
    cloudsAnimation();
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
    var cloud_three = document.querySelector('.cloud.three');
    var cloud_four = document.querySelector('.cloud.four');
    var cloud_five = document.querySelector('.cloud.five');
    var cloud_six = document.querySelector('.cloud.six');

    if (cloud_two !== null) {
        window.setInterval(() => {
            cloud_two.classList.remove('later');

            if (cloud_three !== null) {
                window.setInterval(() => {
                    cloud_three.classList.remove('later');

                    if (cloud_four !== null) {
                        window.setInterval(() => {
                            cloud_four.classList.remove('later');

                            if (cloud_five !== null) {
                                window.setInterval(() => {
                                    cloud_five.classList.remove('later');

                                    if (cloud_six !== null) {
                                        window.setInterval(() => {
                                            cloud_six.classList.remove('later');
                                        }, 4000);
                                    }
                                }, 4000);
                            }
                        }, 4000);
                    }
                }, 4000);
            }
        }, 4000);
    }
}