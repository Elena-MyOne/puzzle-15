export class Item {
  constructor(number, alt, title, text, iconImg, iconAlt) {
    this.number = number
    this.alt = alt
    this.title = title
    this.text = text
    this.iconImg = iconImg
    this.iconAlt = iconAlt
  }
  makeItem(order) {
    return `
    <div class="pets-slide__item item${this.number}" style="order:${order}">
      <div class="pets-slide__image"><img src="assets/images/pets/${this.number}.jpg" alt="${this.alt}"></div>
        <div class="pets-slide__content">
          <div class="pets-slide__info">
            <h5 class="pets-slide__title">${this.title}</h5>
          <div class="pets-slide__text">${this.text}</div>
        </div>
      <div class="pets-slide__icon"><img src="assets/images/pets/${this.iconImg}.png" alt="${this.iconAlt}"></div>
    </div>
  </div>
  `
  }
}