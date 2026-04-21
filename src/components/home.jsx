import style from './home.module.css';
//images
import motto from './assets/motto.jpg';
import day from './assets/day.jpg';

export default function Home() {
    return (<section className={ style.home }>
        <div className={ style.mainDiv }>
            <h2 className={ style.mainDivText }>Shop With <br />The Professionals</h2>
        </div>
        <div className={ style.textDiv }>
            <p>Clothes don't just have to cover<br />your body. They can connect to<br />your soul and we help you do just that.</p>
        </div>
        <div className={ style.mottoDiv }>
            <img src={ motto } alt="Our Motto" />
            <button>Explore</button>
        </div>
        <div className={ style.storesDiv }>
            <img src={ day } alt="Our Collection" />
            <button>Explore</button>
        </div>
        <div className={ style.textDiv } >
            <p>We have a variety of clothes<br />to suit your style and preferences.<br />With us there is something for everyone.</p>
        </div>
    </section>);
}