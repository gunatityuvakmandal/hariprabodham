window.onload = loadAllPrasangsAndAddToTable

function loadAllPrasangsAndAddToTable() {
    let prasangTable = document.getElementById("prasang-table").getElementsByTagName("tbody")[0];
    
    let categoryId = parseInt(getQueryParam("categoryId"));
    let prasangs = getPrasangsWithCategoryId(categoryId);
    var i = 1

    prasangs.forEach(prasang => {
        tags = ""
        prasang.tags.forEach(tag => tags += `<span class="badge bg-danger">${tag}</span><span class="px-1"></span>`)

        prasangTable.innerHTML += 
            `<tr>
                <td>${i++}</td>
                <td><a href="./prasang.html?id=${prasang.id}">${prasang.title}</a></td>
                <td>${tags}</td>
            </tr>`;
    });

    addTagsToDropDown(prasangs)
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

function addTagsToDropDown(prasangs) {
    tagMap = {}
    prasangs.forEach(prasang => {
        prasang.tags.forEach(tag => {
            tagMap[tag] = (tagMap[tag] || 0) + 1
        })
    })

    tagsDropdown = document.getElementById("tags-dropdown")
    for(tag in tagMap) {
        tagsDropdown.innerHTML += 
            `
            <li>
                <span class="px-1"></span>
                <input class="form-check-input" type="checkbox" onclick="filterByTags()" id="tag-${tag}"/> 
                ${tag} <span class="badge badge-pill bg-secondary">${tagMap[tag]}</span><span class="px-1"></span>
            </li>
            `
    }
}

function filterByTags() {
    tagsDropdown = document.getElementById("tags-dropdown")
    checkboxes = tagsDropdown.getElementsByTagName("input")

    tagsRequired = []
    for(var i=0; i<checkboxes.length; i++) {
        if(checkboxes[i].checked)
            tagsRequired.push(checkboxes[i].id.slice(4))
    }
    
    if(tagsRequired.length == 0) {

    }

    table = document.getElementById("prasang-table");
    tbody = table.getElementsByTagName("tbody")[0]
    tr = tbody.getElementsByTagName("tr");
    for(var i=0; i<tr.length; i++) {
        tags = tr[i].getElementsByTagName("td")[2].getElementsByClassName("badge")
        var matched = false
        for(var j=0; j<tags.length; j++) {
            if(tagsRequired.indexOf(tags[j].innerText) >= 0)
                matched = true
        }
        if((!matched) && (tagsRequired.length!=0)){
            tr[i].style.display = "none"
        } else {
            tr[i].style.display = ""
        }
    }
}