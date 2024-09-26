
document.addEventListener('DOMContentLoaded', function () {
    const table = document.querySelector('table')
    const uusirivi = document.querySelector('button')
    const uusilukum = document.querySelector('p')
    let riviluku = 0

    uusirivi.addEventListener('click', arvonta)

    function arvonta() {
        const row = table.insertRow()
        for (let i = 0; i < 7; i++) {
            const cell = row.insertCell()
            const randomNumber = Math.floor(Math.random() * 10)
            cell.textContent = randomNumber
        }
        
        riviluku++
        uusilukum.textContent = `Arvottuja rivejä: ${riviluku}`
    }
})