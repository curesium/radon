function print(input) {
    const separateObject = obj => {
        const keys = Object.keys(obj);
        const result = [];
        for(let i = 0; i < keys.length; i++){
            result.push({
                'character': keys[i],
                'frequency': obj[keys[i]]
            });
       };
       return result;  
    };
    const characters = separateObject(input)
    
    for (let i = 0; i < characters.length; i++) {
        let character = characters[i].character;
        const frequency = characters[i].frequency;
        if (character === ' ') { character = 'space'; }
        const content = '<tr>' + '<td>' + character + '</td>' + '<td>' + frequency + '</td>' + '</tr>';
        document.querySelector('#print').innerHTML += content;
    };
};

function sort() {
    var table, rows, switching, i, x, y, shouldSwitch;
  table = document.querySelector('#print');
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function run(text, graph) {
    const startTime = Date.now()
    print(analyze(text))
    if (graph === true) { plotData(analyze(text)) }
    sort()
    console.log('Finished in ' + (Date.now() - startTime) + ' miliseconds')
}