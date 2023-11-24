
import Styles from "./page.module.css";


export default function NoticiaPage() {
    return (
        <>
          
            <div className={Styles.main}>
                <img className={Styles.img} src="https://www.minecraft.net/content/dam/games/dungeons/key-art/md25-header.jpg.transform/minecraft-image-medium/image.jpg" alt="Imagem do Minecraft"/>

                <div className={Styles.news}>
                    <p>News</p>
                </div>
                <div className={Styles.text}>
                    <h1>MINECRAFT </h1>
                    <h1>DUNGEONS: 25 </h1>
                    <h1>MILLION PLAYERS AND</h1>
                    <h1>COUNTING</h1>

                    <p className={Styles.description}>A heartfelt ‘Thank you!’!</p>
                </div>

                <div className={Styles.text2}>
                    <p className={Styles.description2}>Time flies when you’re having fun. Before you know it, your game is all grown up and walking around on their own little legs. Today, on the day of Minecraft Dungeons announcement five years ago, we’re proud to share that our little game has hit a milestone and passed 25 million unique players! </p>
                    <p className={Styles.description2}>Not only is that a number even the brightest people at Mojang Studios can’t count to – it's also very humbling to see that so many heroes have picked up the mantle to rid the Overworld of the influence of the Orb of Dominance. This journey has been nothing short of amazing, and we invite you to look back at it together with us. </p>
                </div>

                <div>
                    <a href="https://www.youtube.com/watch?v=M3V-NMwaPiM"><img src="https://i.ytimg.com/vi/M3V-NMwaPiM/maxresdefault.jpg" alt="" /></a>
                    
                </div>
                <div>
                    <p >Minecraft Dungeons began as a passion project, inspired by our love of classic dungeon crawler games and reimagined as a completely new Minecraft experience. But it was the love of our players that made it grow and thrive, allowing us to continue the adventure and venture further into the Nether, the End, and eventually the mysterious Tower. It exceeded our wildest dreams, and it makes us both proud and grateful for having had the pleasure of building a game together with a community like this one.</p>
                </div>

            </div>
         
        </>
    );
}