let radon = [];
radon.session = {}

function analyze(text, mode) {
    let count = {};
    const words = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace( /[\r\n]+/gm, "" ).trim().split(' ');
    const letters = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace( /[\r\n]+/gm, "" ).trim().split('');
    radon.session.splitting = Date.now()
    console.log('RADON:   Completed splitting (' + (radon.session.splitting - radon.session.clear) + ' miliseconds)')
    console.log('RADON:   Analyzing ' + words.length + ' words, with ' + letters.length + ' letters');
    let list;
    if (mode === undefined) { mode = false; }
    switch(mode) {
        case true:
            list = words;
            break;

        case false:
            list = letters;
            break;
    }

    for (let i = 0; i < list.length; i++) {
        const obj = list[i];
        if (obj in count) {
            count[obj]++;
        }
        else {
            count[obj] = 1;
        };
    };
    radon.session.analyze = Date.now();
    console.log('RADON:   Completed analyzing (' + (radon.session.analyze - radon.session.splitting) + ' miliseconds)')
    return count;
}