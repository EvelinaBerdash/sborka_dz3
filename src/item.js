export function drawGalleryItem(item) {
    const itemEl = document.createElement('div')
    itemEl.classList = "gallery__item"

    const resourceWrapEl = document.createElement('div')
    resourceWrapEl.classList = "gallery__item__resource"

    if (item.type === "img") {
        const imgEl = document.createElement("img")
        imgEl.classList = "gallery__item__image"
        imgEl.src = item.resource

        itemEl.appendChild(imgEl)
    } else if (item.type === "audio") {
        const audioEl = document.createElement('audio')
        audioEl.classList = "gallery__item__audio"
        audioEl.src = item.resource
        audioEl.controls = true

        itemEl.appendChild(audioEl)
    }


    const titleEl = document.createElement('span')
    titleEl.classList = "gallery__item__title"
    titleEl.textContent = item.title

    itemEl.appendChild(resourceWrapEl)
    itemEl.appendChild(titleEl)

    return itemEl
}