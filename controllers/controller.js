// Tạo các tab quần, áo, dép, tóc,...
function renderTabs(tabId, list) {
    let contentHtml = ""
    list.forEach(item => {
        contentHtml += /*html*/`
                <div class="col-md-4 mb-5">
                    <div class="d-flex flex-column align-items-center">
                        <img src="../assets/images/${item.imgFolder}/${item.img}" alt="" />
                        <h5>${item.title}</h5>
                        <button class="btn btn-warning" onclick="tryCloth('${item.imgTry}', '${item.imgFolder}', '${item.blockId}')">Thử đồ</button>
                    </div>
                </div>
        `
    })

    contentHtml = `
        <div class="row pt-5">
            ${contentHtml}
        </div>
    `
    document.getElementById(tabId).innerHTML = contentHtml
}

// Tạo bộ đồ cho búp bê
function renderTry() {
    for (var i in listChosen) {
        if (listChosen[i].url !== undefined) {
            document.getElementsByClassName(listChosen[i].id)[0].innerHTML = /*html*/`
                <div class="cloth-container">
                    <img src=${listChosen[i].url} alt="" />
                </div>
            `
        }
    }
}