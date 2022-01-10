import { 
    checkAuth, 
    deleteBunny, 
    getFamilies, 
    logout,
} from '../fetch-utils.js';

checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayFamilies(families) {
    // fetch families from supabase
    // clear out the familiesEl
    familiesEl.textContent = '';
    for (let family of families) {
        // create three elements for each family, one for the whole family, one to hold the name, and one to hold the bunnies
        const familyEl = document.createElement('div');
        const nameEl = document.createElement('h2');
        const bunniesEl = document.createElement('div');
        // add the bunnies css class to the bunnies el, and family css class to the family el
        familyEl.classList.add('family');
        bunniesEl.classList.add('bunnies');
        // put the family name in the name element
        nameEl.textContent = `${family.name}`;

        // for each of this family's bunnies
        for (let bunny of family.bunnies) {
            const bunnyEl = document.createElement('span');
            // make an element with the css class 'bunny', and put the bunny's name in the text content
            bunnyEl.classList.add('bunny');
            bunnyEl.textContent = `${bunny.name}`;
        
            // add an event listener to the bunny el. On click, delete the bunny, then refetch and redisplay all families.
            bunnyEl.addEventListener('click', async() => {
                await deleteBunny();
                await displayFamilies();
            });

            // append this bunnyEl to the bunniesEl
            bunniesEl.append(bunnyEl);
        }  
        // append the bunniesEl and nameEl to the familyEl
        familyEl.append(nameEl, bunniesEl);
        // append the familyEl to the familiesEl
        familiesEl.append(familyEl);
    }
}

window.addEventListener('load', async() => {
    const families = await getFamilies();

    displayFamilies(families);
});