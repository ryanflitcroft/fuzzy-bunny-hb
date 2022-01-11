import { deleteBunny } from './fetch-utils.js';

export function renderBunny(bunny) {
    const bunnyEl = document.createElement('a');
    bunnyEl.href = `../details/?id=${bunny.id}`;
    bunnyEl.classList.add('bunny');
    bunnyEl.textContent = `${bunny.name}`;

    return bunnyEl;
}

export function renderDetails(bunny) {
    const bunnyDetailsEl = document.createElement('div');
    const bunnyNameEl = document.createElement('h1');
    const deleteBunnyEl = document.createElement('button');


    deleteBunnyEl.textContent = `Delete ${bunny.name} / (•︿•) \\`;
    deleteBunnyEl.addEventListener('click', async() => {
        await deleteBunny(bunny.id);
        window.location.href = '../';
    });

    bunnyNameEl.textContent = `${bunny.name}`;

    bunnyDetailsEl.append(bunnyNameEl, deleteBunnyEl);

    return bunnyDetailsEl;
}