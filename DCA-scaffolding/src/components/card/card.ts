export enum AttributeCard {
    "animal"="animal",
    "celebrity"="celebrity",
    "carrer"="carrer",
    "movie"="movie",
    "music"="music",
}

class Card extends HTMLElement {
    animal: string = "";
    celebrity: string = "";
    carrer: string = "";
    movie: string="";
    music: string="";

    static get observedAttributes() {
        const attrs: Record<AttributeCard, null> = {
            animal: null,
            celebrity: null,
            carrer: null,
            movie:null,
            music:null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeCard,
        _: unknown,
        newValue: string
    ) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: `open` });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <section class= "card">
        <section class= "info">
        <p>animal:${this.animal}</p>
        <p>celebrity:${this.celebrity}</p>
        <p>carrer:${this.carrer}</p>
        <p>movie:${this.movie}</p>
        <p>music:${this.music}</p>
        </section>
        </section>
        `;

        const container = this.ownerDocument.createElement(`section`);
        const button=this.ownerDocument.createElement('button');
        container.appendChild(button);

        this.shadowRoot?.appendChild(container);
       

    }

}

customElements.define('app-card', Card)
export default Card;

