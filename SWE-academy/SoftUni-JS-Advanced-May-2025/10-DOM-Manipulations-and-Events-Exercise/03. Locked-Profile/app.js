function lockedProfile() {

    let profiles = document.querySelectorAll('.profile');

    for (const profile of profiles) {
        let showMoreBtn = profile.querySelector('button');

        showMoreBtn.addEventListener('click', () => {
            let userInfo = profile.querySelector('div');

            if (!profile.querySelector('input[value=lock]').checked && showMoreBtn.textContent == 'Show more') {
                userInfo.style.display = 'block';
                showMoreBtn.textContent = 'Hide it';
            } else if (!profile.querySelector('input[value=lock]').checked && showMoreBtn.textContent == 'Hide it') {
                showMoreBtn.textContent = 'Show more';
                userInfo.style.display = 'none';
            };
        });
    }
}