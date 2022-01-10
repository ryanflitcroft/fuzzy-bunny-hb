import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get('bunny-name');
    const familyId = data.get('family-id');

    await createBunny({
        name,
        family_id: familyId
    });

    form.reset();
});

window.addEventListener('load', async() => {
    const selectEl = document.querySelector('select');

    const families = await getFamilies();

    for (let family of families) {
        const optionEl = document.createElement('option');
        optionEl.value = family.id;
        optionEl.textContent = family.name;
        selectEl.append(optionEl);
    }
});

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
