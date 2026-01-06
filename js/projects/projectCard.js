export class projectCard {
    constructor({ title, image, info, tags = [], link, gtLink }) {
        this.title = title;
        this.image = image;
        this.info = info;
        this.link = link;
        this.gtLink = gtLink;
        this.tags = tags;
    }

    render(){
        const proCard = document.createElement('div');
        proCard.className = 'projectCard';

        proCard.innerHTML = `
        <img class="projectImg" src="${this.image}" alt="${this.title}">
        <div class="projectContent">
            <h3> ${this.title} </h3>
            <p> ${this.info} </p>
            <a href ="${this.link}" target="_blank">Link to the project</a>
            <a href ="${this.gtLink}" target="_blank">Link to Github repository</a>
            <div class="projectTags"> ${this.tags.map(tag => `<span>${tag}</span>`).join(', ')}
            </div>
        </div>
        `;

        return proCard;
    }
}

