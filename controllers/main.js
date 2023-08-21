renderTabs("ao", ao)
renderTabs("quan", quan)
renderTabs("giay", giay)
renderTabs("tui", tui)
renderTabs("day-chuyen", dayChuyen)
renderTabs("toc", toc)
renderTabs("nen", nen)

let listChosen = new ListChosen()

function tryCloth(img, imgFolder, blockId) {
    listChosen[blockId].url = `../assets/images/${imgFolder}/${img}`
    listChosen[blockId].id = blockId
    renderTry()
}