import { 
    checkAuth, 
    deleteBunny,
    getFamilies, 
    logout,
} from '../fetch-utils.js';
import { renderBunny } from '../render-utils.js';

checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayFamilies(families) {
    familiesEl.textContent = '';
    for (let family of families) {

        const familyEl = document.createElement('div');
        const nameEl = document.createElement('h2');
        const bunniesEl = document.createElement('div');

        familyEl.classList.add('family');
        bunniesEl.classList.add('bunnies');

        nameEl.textContent = `${family.name}`;

        for (let bunny of family.fuzzy_bunnies) {
            const bunnyEl = renderBunny(bunny);
            bunnyEl.addEventListener('click', async() => {
                // await deleteBunny(bunny.id);
                // const families = await getFamilies();
                // await displayFamilies(families);
                
            });

            bunniesEl.append(bunnyEl);
        }  

        familyEl.append(nameEl, bunniesEl);
        familiesEl.append(familyEl);
    }
}

window.addEventListener('load', async() => {
    const families = await getFamilies();

    displayFamilies(families);
});