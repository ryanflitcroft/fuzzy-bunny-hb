import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout, 
    createFamily
} from '../fetch-utils.js';

const bunnyForm = document.querySelector('.bunny-form');
const familyForm = document.querySelector('.family-form');
const logoutButton = document.getElementById('logout');

bunnyForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(bunnyForm);
    const name = data.get('bunny-name');
    const familyId = data.get('family-id');

    await createBunny({
        name,
        family_id: familyId
    });

    bunnyForm.reset();
});

familyForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(familyForm);
    const name = data.get('family-name');

    await createFamily({ name });
    familyForm.reset();
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
