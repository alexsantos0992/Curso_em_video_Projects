function verificar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível realizar contagem.'
        window.alert('[ERRO] - Complete os campos antes de iniciar.')
    } else {
        res.innerHTML += `Contando:`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Valor de "Passo" inválido')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` \u{27A1} ${c}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` \u{27A1} ${c}`
            }
        }
        res.innerHTML += ` \u{1F3C1} <br>`
    }
}