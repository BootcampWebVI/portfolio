export function setMenu() {
    let arrayMenuItems = document.querySelectorAll('.main-header a')
    let arraySections = document.querySelectorAll('section')
    let objectMenuMobile = document.querySelector('.header-mobile i')
    let objectMenuNav = document.querySelector('.main-header nav')
    let objectMenuMobileClose = document.querySelector('.main-header nav .fa-times')
    let arrayOffsets = []

    initNavigation()
    window.addEventListener('scroll', changeMenuStyle)
    objectMenuMobile.addEventListener('click', showMenu)
    objectMenuMobileClose.addEventListener('click', closeMenu)

    function initNavigation() {
        arraySections.forEach(
            item => arrayOffsets[`#${item.id}`] = item.offsetTop
        )

        arrayMenuItems.forEach(
            item => item.addEventListener('click', evt => {
                evt.preventDefault()
                let section = document.querySelector(item.attributes.href.value)
                section.scrollIntoView({behavior: 'smooth', block: 'start'})
            })
        )
    }

    function changeMenuStyle() {
        let pageOffset = window.pageYOffset
        let menuItem = 0

        if (pageOffset >= arrayOffsets['#home'] && pageOffset < arrayOffsets['#introduce']) {
            menuItem = 0
        } else if (pageOffset >= arrayOffsets['#introduce'] && pageOffset < arrayOffsets['#studies']) {
            menuItem = 1
        } else if (pageOffset >= arrayOffsets['#studies'] && pageOffset < arrayOffsets['#experience']) {
            menuItem = 2
        } else if (pageOffset >= arrayOffsets['#experience'] && pageOffset < arrayOffsets['#about']) {
            menuItem = 3
        } else if (pageOffset >= arrayOffsets['#about'] && pageOffset < arrayOffsets['#contact']) {
            menuItem = 4
        } else {
            menuItem = 5
        }

        arrayMenuItems.forEach(
            item => item.classList.remove('active')
        )
        arrayMenuItems[menuItem].classList.add('active')
    }

    function showMenu() {
        objectMenuNav.classList.add('active')
    }

    function closeMenu() {
        objectMenuNav.classList.remove('active')
    }
}
