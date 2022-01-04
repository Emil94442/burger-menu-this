const BurgerMenu = document.querySelector('.burger-menu')
console.log(BurgerMenu)

const HeaderMenu = document.querySelector('.header-menu')
console.log(HeaderMenu)

const BodyNewClass = document.querySelector('body')

let HelpBurgerMenu = false
BurgerMenu.addEventListener('click' , () => {
    if (HelpBurgerMenu === false) {
        HelpBurgerMenu = true
    } else {
        HelpBurgerMenu = false
    }
})

console.log(HelpBurgerMenu)




BurgerMenu.addEventListener('click', () => {
    if (HelpBurgerMenu === true) {
        HeaderMenu.classList.add('this')
        BurgerMenu.classList.add('this')
        BodyNewClass.classList.add('this')
    } else if (HelpBurgerMenu === false) {
        HeaderMenu.classList.remove('this')
        BurgerMenu.classList.remove('this')
        BodyNewClass.classList.remove('this')
    }
})


























