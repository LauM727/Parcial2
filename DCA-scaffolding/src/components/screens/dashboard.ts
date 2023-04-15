import { AttributeCard } from "../card/card";
import { get_api } from "../services/data";

class Dashboard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback(){
        const urljokes = await get_api();
        this.render(urljokes)
        console.log({urljokes})
    }

    render(urljokes:any){
        if(this.shadowRoot) this.shadowRoot.innerHTML=``;
        urljokes?.forEach((e:any) => {
            const card = this.ownerDocument.createElement(`app-card`);
            card.setAttribute(AttributeCard.animal,e.animal);
            card.setAttribute(AttributeCard.carrer,e.carrer);
            card.setAttribute(AttributeCard.celebrity,e.celebrity);
            card.setAttribute(AttributeCard.movie,e.movie);
            card.setAttribute(AttributeCard.music,e.music);
            this.shadowRoot?.appendChild(card);

        })        
    }
}

customElements.define("app-dashboard",Dashboard);