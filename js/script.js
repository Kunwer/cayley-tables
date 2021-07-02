mtable = ()=>{
    document.getElementById('mtable').style.display = ''
    let mod = document.getElementById('modulus').value
    modulus = parseInt(modulus)
    let op = document.getElementById('operator').value
    let set = document.getElementById('set').value
    let tbody = document.getElementById('table-body')
    document.getElementById('h-row').innerHTML = ''
    tbody.innerHTML = ''
    if(op == 'x' || op == '*'){
        document.getElementById('h-row').innerHTML = `<th scope="col">x<sub>${mod}</sub></th>`
    }else if(op == '+'){
        document.getElementById('h-row').innerHTML = `<th scope="col">+<sub>${mod}</sub></th>`
    }
    var setarr = set.split(',').map(function(item) {
        return parseInt(item, 10);
    });
    setarr.sort((a, b) => a - b)
    let elements = setarr.length
    for(let i=0;i<elements;i++){
        hrow = document.getElementById('h-row')
        let th = document.createElement('th')
        th.setAttribute('scope','col')
        th.append(setarr[i]);
        hrow.append(th)
        let tr = document.createElement('tr')
        let trh = document.createElement('th')
        trh.setAttribute('scope','row')
        trh.append(setarr[i])
        tr.append(trh)
        for(let j=0;j<elements;j++){
            let td = document.createElement('td')
            if(op == 'x' || op == '*'){
                td.append((setarr[i]*setarr[j])%mod)
            }else if(op == '+'){
                td.append((setarr[i]+setarr[j])%mod)
            }
            tr.append(td)
            tbody.append(tr)
        }
    }
}
