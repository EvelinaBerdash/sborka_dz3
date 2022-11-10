export function drawGalleryItem(item) {
    const itemEl = document.createElement('div')
    itemEl.classList = "gallery-item"


    const imgEl = document.createElement("img")
    imgEl.classList = "gallery-item__image"
    imgEl.src = item.resource

    const titleEl = document.createElement('span')
    titleEl.classList = "gallery-item__title"
    titleEl.textContent = item.title

    itemEl.appendChild(imgEl)
    itemEl.appendChild(titleEl)

    return itemEl
}