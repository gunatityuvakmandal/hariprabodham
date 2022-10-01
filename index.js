/**
 * Assumes 'data' array to be populated, 
 * like data = [{"id": "<ID>", "title": "<TITLE>", "text": "<TEXT>"}] 
 */

window.onload = loadAllPrasangsAndAddToTable

function loadAllPrasangsAndAddToTable() {
    let prasangTable = document.getElementById("prasang-table").getElementsByTagName("tbody")[0];
    
    data.forEach(prasang => {
        prasangTable.innerHTML += 
            `<tr>
                <td>${prasang.id}</td>
                <td><a href="./prasang/prasang.html?id=${prasang.id}">${prasang.title}</a></td>
            </tr>`;
    });
}