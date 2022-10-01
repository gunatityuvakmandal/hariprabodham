/**
 * Assumes 'data' array to be populated, 
 * like data = [{"id": "<ID>", "title": "<TITLE>", "text": "<TEXT>"}] 
 */

window.onload = loadPrasangById

function loadPrasangById() {
    let id = parseInt(getQueryParam("id"));
    let prasang = getPrasangWithId(id);

    titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = prasang.title;

    prasangTitleElement = document.getElementById("prasang-title")
    prasangTitleElement.innerHTML = prasang.title

    prasangTextElement = document.getElementById("prasang-text")
    prasangTextElement.innerHTML = prasang.text;
}

function getQueryParam(name) {
    let params = (new URL(document.location)).searchParams;
    return params.get(name);
}

function getPrasangWithId(id) {
    for (var i=0; i<data.length; i++) {
        if (data[i].id === id) {
            return data[i];
        }
    }
}