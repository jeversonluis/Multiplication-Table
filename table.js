function gerar(){
    let txnum = document.querySelector('input#txnum')
    let tab = document.querySelector('select#seltab')

    if (txnum.value.length == 0) {
        alert('Please enter a number!')
    } else {
        let num = Number(txnum.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}

