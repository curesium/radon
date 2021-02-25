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
       radon.session.seperate = Date.now();
       console.log('RADON:   Completed seperation objects (' + (radon.session.seperate - radon.session.analyze) + ' miliseconds)')
       return result;  
    };
    const characters = separateObject(input)
    let printable = "<tr><th>Letter</th><th>Frequency</th></tr>"
    
    for (let i = 0; i < characters.length; i++) {
        let character = characters[i].character;
        const frequency = characters[i].frequency;
        if (character === ' ') { character = 'space'; }
        const content = '<tr>' + '<td>' + character + '</td>' + '<td>' + frequency + '</td>' + '</tr>';
        printable += content;
    };
    document.querySelector('#print').innerHTML = printable;
    radon.session.print = Date.now();
    console.log('RADON:   Completed printing objects (' + (radon.session.print - radon.session.seperate) + ' miliseconds)')
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
  radon.session.sort = Date.now();
  console.log('RADON:   Completed sorting objects (' + (radon.session.sort - radon.session.print) + ' miliseconds)')
}

function clear() {
  table = document.querySelector('#print');
  if (table.innerHTML !== '') { table.innerHTML = ""; }
  radon.session.clear = Date.now();
  console.log('RADON:   Completed clearing output (' + (radon.session.clear - radon.session.start) + ' miliseconds)')
}

function run(text, graph) {
  if (text === '') { throw new Error('No input given')}
    radon.session.start = Date.now()
    clear();
    const analasis = analyze(text, true);
    print(analasis);
    if (graph === true) { plotData(analasis) };
    sort();
    radon.session.end = Date.now();
    console.log('RADON:   Finished in ' + (radon.session.end - radon.session.start) + ' miliseconds');
};