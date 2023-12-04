import Styles from "./page.module.css";

export default function Feedback() {
    return (
        
        <div className={Styles.main}>
        
            <section className={Styles.section}>
                <div className={Styles.feedback}>
                <h1 className={Styles.title}>Feedback</h1>
                <p className={Styles.description}>Deixe sua avaliação ou sugestão</p>
                    <input type="text" placeholder="Nome" className={Styles.input} />
                    <input type="text" placeholder="Email" className={Styles.input} />
                    <input type="text" placeholder="Assunto" className={Styles.input} />
                    <textarea placeholder="Mensagem" className={Styles.textarea} />
                    <button type="submit" className={Styles.button}>Enviar</button>
                </div>
            </section>
            <img src="https://www.minecraft.net/content/dam/franchise/component-library/parallaxa/sceneb/day/desktop/D_L_Focus_Day.png" alt="" className={Styles.img} />
        </div>
    );
}