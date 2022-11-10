export function drawGalleryItem(item) {
    const itemEl = document.createElement('div')
    itemEl.classList = "gallery__item"


    const imgEl = document.createElement("img")
    imgEl.classList = "gallery__item__image"
    imgEl.src = item.resource

    const titleEl = document.createElement('span')
    titleEl.classList = "gallery__item__title"
    titleEl.textContent = item.title

    itemEl.appendChild(imgEl)
    itemEl.appendChild(titleEl)

    return itemEl
}