import { getBunny } from '../fetch-utils.js';
import {
    renderDetails
} from '../render-utils.js';

const bunnyDetailsEl = document.querySelector('#bunny-details');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const bunny = await getBunny(id);

    const bunnyEl = renderDetails(bunny);
    bunnyDetailsEl.append(bunnyEl);
});