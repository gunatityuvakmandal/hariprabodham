window.onload = loadAllPrasangsAndAddToTable

function loadAllPrasangsAndAddToTable() {
    let prasangTable = document.getElementById("prasang-table").getElementsByTagName("tbody")[0];
    
    prasangs.forEach(prasang => {
        prasangTable.innerHTML += 
            `<tr>
                <td>${prasang.id}</td>
                <td><a href="./template/template.html?id=${prasang.id}">${prasang.title}</a></td>
            </tr>`;
    });
}