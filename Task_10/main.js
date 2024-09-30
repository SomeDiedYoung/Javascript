function task_5(a, b, c, d, e,f,g) {
    document.write('<div>' +
        '<table style="padding: ' + a + 
        'px; margin: ' + b + 
        'px; border: 5px solid black;' +
        'background-color: ' + c + ';' +
        'height: ' + d + 'px;' +
        'width: ' + e + 'px;' +
        'border-collapse: separate;'+
        'border-spacing: '+f+'px;'+
        'border-color: '+g+';">'+
        '<tr style="border: 1px solid black;">' +
        '<th style="border: 1px solid black;">Company</th>' +
        '<th style="border: 1px solid black;">Uksusi</th>' +
        '</tr>' +
        '<tr style="border: 1px solid black;">' +
        '<th style="border: 1px solid black;">ARAJANI</th>' +
        '<th style="border: 1px solid black;">DEADBIRD</th>' +
        '</tr>' +
        '</table>' +
        '</div>');
}

task_5(50, 50, "red", 200, 700,10,"green");
