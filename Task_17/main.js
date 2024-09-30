function task_15(columns,rows){
    let table = document.createElement("table");
    table.style.padding = "15px"; 
    table.style.margin = "15px"; 
    table.style.border = "5px solid black"; 
    table.style.backgroundColor = "lightblue"; 
    table.style.height = "80px"; 
    table.style.width = "500px "; 
    table.style.borderCollapse = "separate"; 
    table.style.borderSpacing = "3px"; 
    table.style.borderColor = "green"; 
    for(let i=0 ; i<rows; i++){
        let tr = document.createElement("tr")
        
        for(let j =0;j<columns;j++){
            let td = document.createElement("td")
            td.textContent = `Row ${i + 1},Col ${i+1}`;
            tr.append(td);
        }
        table.append(tr);

    }
    document.body.appendChild(table);
}

task_15(4,4)