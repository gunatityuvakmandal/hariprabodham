/**
 * Assumes 'data' array to be populated, 
 * like data = [{"id": "<ID>", "title": "<TITLE>", "text": "<TEXT>"}] 
 */

window.onload = loadAllGunatitPurushoCategory

function loadAllGunatitPurushoCategory() {
    let gunatitPurushoTable = document.getElementById("gunatit-purusho-table").getElementsByTagName("tbody")[0];

    categories.forEach(category => {
        gunatitPurushoTable.innerHTML += 
        `<tr>
            <td>${category.id}</td>
            <td><a href="./prasang/home.html?categoryId=${category.id}">${category.name}</a></td>
        </tr>`;
    })
}

