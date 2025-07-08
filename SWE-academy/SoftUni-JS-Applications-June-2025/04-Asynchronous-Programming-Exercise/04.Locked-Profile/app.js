async function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const mainContainer = document.getElementById('main');

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Could not fetch profiles.');
        const profilesData = await response.json();

        mainContainer.innerHTML = '';
        let userCount = 0;
        Object.values(profilesData).forEach(profile => {
            userCount++;
            const profileElement = createProfileCard(profile, userCount);
            mainContainer.appendChild(profileElement);
        });

    } catch (error) {
        mainContainer.innerHTML = 'Error loading profiles.';
        console.error(error);
    }

    function createProfileCard(user, userNumber) {
        const isLocked = true;

        const radioGroupName = `user${userNumber}Locked`;
        const hiddenDivClassName = `user${userNumber}Username`;

        const hiddenFieldsDiv = e('div', { className: hiddenDivClassName },
            e('hr'),
            e('label', {}, 'Email:'),
            e('input', { type: 'email', name: `user${userNumber}Email`, value: user.email, disabled: true, readonly: true }),
            e('label', {}, 'Age:'),
            e('input', { type: 'number', name: `user${userNumber}Age`, value: user.age, disabled: true, readonly: true })
        );

        hiddenFieldsDiv.style.display = 'none';

        const profileDiv = e('div', { className: 'profile' },
            e('img', { src: './iconProfile2.png', className: 'userIcon' }),
            e('label', {}, 'Lock'),
            e('input', { type: 'radio', name: radioGroupName, value: 'lock', checked: isLocked }),
            e('label', {}, 'Unlock'),
            e('input', { type: 'radio', name: radioGroupName, value: 'unlock' }),
            e('hr'),
            e('label', {}, 'Username'),
            e('input', { type: 'text', name: `user${userNumber}Username`, value: user.username, disabled: true, readonly: true }),
            hiddenFieldsDiv,
            e('button', { onClick: onToggle }, 'Show more')
        );

        return profileDiv;
    }

    function onToggle(event) {
        // This is the event handler for the "Show more" / "Hide it" button
        const button = event.target;
        const profileDiv = button.parentElement;

        // Find the "unlock" radio button within this specific profile
        const unlockRadio = profileDiv.querySelector('input[value="unlock"]');

        // Check if the profile is unlocked. If not, do nothing.
        if (!unlockRadio.checked) {
            return;
        }

        const hiddenFields = profileDiv.querySelector('div'); // The first div inside is the hidden one

        // Toggle the display and button text
        if (hiddenFields.style.display === 'none') {
            hiddenFields.style.display = 'block';
            button.textContent = 'Hide it';
        } else {
            hiddenFields.style.display = 'none';
            button.textContent = 'Show more';
        }
    }

    function e(type, attributes, ...content) {
        const result = document.createElement(type);
        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) === 'on') {
                result.addEventListener(attr.substring(2).toLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }
        content.forEach(c => {
            if (typeof c === 'string' || typeof c === 'number') {
                result.appendChild(document.createTextNode(c));
            } else {
                result.appendChild(c);
            }
        });
        return result;
    }
}
