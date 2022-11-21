function carregar() {
    const div1 = window.document.getElementById('div1')
    const img = window.document.getElementById('imagem')

    const data = new Date()
    const hour = data.getHours()

    const data2 = new Date()
    const min = data2.getMinutes()

    const data3 = new Date()
    const sec = data2.getSeconds()

    div1.innerHTML = `Agora é ${hour} horas, ${min} minutos e ${sec} segundos.`
    if (hour >= 6 && hour < 12) {
        img.src = '../hora_do_dia/images/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hour >= 12 && hour < 18) {
        img.src = '../hora_do_dia/images/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = '../hora_do_dia/images/noite.png'
        document.body.style.background = '#515154'
    }
} 
