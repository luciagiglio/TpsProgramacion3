let API = "./json/infoOda.json";

export let data;
import { loadInfo } from "./info.js";

export const loadApi = async () => {
    const response = await fetch(API);
    data = await response.json();
    await document.getElementById('loader').classList.add('loader-hidden');
    loadInfo();
}