function task_15(columns,rows){
    let table = document.createElement("table");
    table.style.width = "50%";
    table.style.border = "1px solid black";

    for(let i=0 ; i<rows; i++){
        let tr = document.createElement("tr")
        
        for(let j =0;j<columns;j++){
            let td = document.createElement("td")
            td.textContent = `˶ᵔ ᵕ ᵔ˶`;
            tr.append(td);
        }
        table.append(tr);

    }
    document.body.appendChild(table);
}

task_15(4,4)