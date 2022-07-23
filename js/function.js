let total = document.querySelector('#total').addEventListener('click', show)
let co1 = document.querySelector('#member-size')

function show (e) {

    let goodTotal = document.querySelector('#member-size').value
    let websitParkage = document.querySelector('#websit-parkage').value
    let mobileApp = document.querySelector('#mobileapp').value
    
    console.log(typeof Number(goodTotal))
    let allAmount = Number(goodTotal) + Number(websitParkage) + Number(mobileApp)

    document.querySelector('#totalNum').innerHTML = allAmount  //Number(goodTotal)

    e.preventDefault()
}


document.querySelector('.chg').addEventListener('click', function (e) {
    document.querySelector('.hidn').classList.replace('hidnDropdown', 'showDropdown')
})

document.querySelector('.chg1').addEventListener('click', function (e) {
    document.querySelector('.hidn').classList.add('hidnDropdown')
})

document.querySelector('.chg2').addEventListener('click', function (e) {
    document.querySelector('.hidn2').classList.replace('hidnDropdown', 'showDropdown')
})

document.querySelector('.chg3').addEventListener('click', function (e) {
    document.querySelector('.hidn2').classList.add('hidnDropdown')
})


   