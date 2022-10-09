window.onload = loadAllPrasangsAndAddToTable

function loadAllPrasangsAndAddToTable() {
    let prasangTable = document.getElementById("prasang-table").getElementsByTagName("tbody")[0];
    
    let categoryId = parseInt(getQueryParam("categoryId"));
    let prasang = getPrasangsWithCategoryId(categoryId);

    prasangs.forEach(prasang => {
        tags = ""
        prasang.tags.forEach(tag => tags += `<span class="badge bg-danger">${tag}</span><span class="px-1"></span>`)

        prasangTable.innerHTML += 
            `<tr>
                <td>${prasang.id}</td>
                <td><a href="./prasang.html?id=${prasang.id}">${prasang.title}</a></td>
                <td>${tags}</td>
            </tr>`;
    });
}

function getQueryParam(name) {
    let params = (new URL(document.location)).searchParams;
    return params.get(name);
}

function getPrasangsWithCategoryId(id) {
    prasangs = []
    for (var i=0; i<data.length; i++) {
        if (data[i].categoryId === id) {
            prasangs.push(data[i])
        }
    }
    return prasangs
}