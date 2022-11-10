const item_types = {
    img: drawImg,
    audio: drawAudio,
    video: drawVideo
}

function drawImg(item) {
    const imgEl = document.createElement("img")
    imgEl.classList = "gallery__item__image"
    imgEl.src = item.resource

    return imgEl
}

function drawAudio(item) {
    const audioEl = document.createElement('audio')
    audioEl.classList = "gallery__item__audio"
    audioEl.src = item.resource
    audioEl.controls = true

    return audioEl
}
function drawVideo(item) {
    const videoEl = document.createElement('video')
    videoEl.classList = "gallery__item__video"
    videoEl.src = item.resource
    videoEl.controls = true

    return videoEl
}
export function drawGalleryItem(item) {
    const itemEl = document.createElement('div')
    itemEl.classList = "gallery__item"

    const resourceWrapEl = document.createElement('div')
    resourceWrapEl.classList = "gallery__item__resource"

    const drawerForType = item_types[item.type]
    resourceWrapEl.appendChild(drawerForType(item))

    const titleEl = document.createElement('span')
    titleEl.classList = "gallery__item__title"
    titleEl.textContent = item.title

    itemEl.appendChild(resourceWrapEl)
    itemEl.appendChild(titleEl)

    return itemEl
}