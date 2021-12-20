import './Navbars.css';
import React, {useState, useEffect} from "react";

const Navbars = () => {    
    function clickHandler (){
        console.log('Merci de votre reponse') 
    }
    const [count, setCount] = useState (0);
    //using effect in this projects:
    useEffect(() => {
        //Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        });
    return (
        <div className="navbars">
        <div className="gauche">
        <div className="gauche photo"><p className="gauche photo paragraphe">Vendredi, 13 nov 2021 --- Auteur: Pascal Machumu</p>
        <h4>Genealoogie du peuple Lega </h4>
        <p>comprendre pour apprenre</p></div>
        <div className="contenue">
            <h4 > 1. Descendance</h4>
                <p>Avant la mort de lega Nsamba il avait donne naissance a ITONGWA, LENGOLA, MITUKU et NZABALEGA.</p>
                <p>Signalons maintenant que Lega Itongwa avait plusieurs ascendants et les plus connus sont KATIMA, MUMBERE, NZENGA, MWENGE, KABUMBU, MPEGELE, TEREKESE, KITINDIRI, NKULONGO, NKANYEMA,  et KANTU.</p>
                <p>Lega Itongwa avait engendre aussi plusieurs enfants et parmi ces enfants citions : Panga peuple de Pangi, au maniema. Apres Panga vient Lega Itongwa qui avait engendre une fille nommee Kebonda dont ses descendances vivent dans le territoire de Shabunda su sud Kivu. 
                L'un de ses fils epousera une fille de Banyanga pour onner naissance a WALIEIKAGA au Nord-Kivu  qui est l'actuel territoire de WALIKALE au Nord-Kivu.</p>
                <p>Le troisieme fils d'ITONGWA fut nomme MWENGA, les balegas de la souche MWENGA forment le territoire de Mwenga au Sud-Kivu avec ramification avec ramification chez les babembes dans le territoire de Fizi au sud-kivu. la dislocation de balega dans 3 territoires 
                particuliers et trois provinces, les baegas fornment un seul peuple, c'est pourquoi ils s'appelent MULEGA MUTU MUZI c'est a dire que les balegas se reconnaissent en tant que Bana Beitongwa</p>
                
            <h4>2. Panga</h4>
            <p>Panga qui est le premier fils d'Itongwa engendrea plusieurs enfants qui sont a l'origine de 4 collectiites, son fils aine c'est KABANGU KABITA, celui-ci fut un guerrier redutable il fondera aussi la collectiite de de KABANGU2</p>
                <p>Kabangu engendrea aussi le fondateur de Beya KAIMA  EBENA qui est le pere de la collectivite de BABENE, Babene donnera naissance a Kagela, Mpelele, MUNWA, TOBA, NZENGU, et KEPUPA</p>
                <p>KEPUPA  engendra a son tour engendra MPEGO, celui-ci fut un guerrieux que les balegas n'avaient jamais eu, lors d'une batailles il fut porte disparu. Les balegas n'ont jamais cru a sa mort </p>
        </div>
        <div className="gauche prochain"><p>Samedi, 16 nov 2021  --- Auteur: Richad</p>
        <a>Prochain:</a><h4>Mbiza et ses premiers dirigeants</h4>  
        <p>comment ce village fut prospere au moyen age?</p></div>
        
    <div className="vote"><p>Ce contenue vous a-t-il ete utile? </p> <button><p>{count}</p> <button onClick={() => setCount(count + 1)}> OUI</button></button> <button><p>{count}</p> <button onClick={() => setCount(count + 1)}> NON</button></button></div>
       </div>
        <div className="droite">
            <h3 className="titre">A lire aussi :</h3>
            <div>
            <h4>les methodes israeliennes</h4>
            <p>Date:12/12/2021</p></div>
            <div><h4>L'afrique sous le joug etranger</h4>
            <p>Date:12/12/2021</p></div>
            <div><h4>la guerre de cent ans </h4>
            <p>Date:12/12/2021</p></div>
            <div><h4>Les monarques absolues</h4>
            <p>Date:12/12/2021</p></div>
            <div><h4>la fille milliardaire</h4>
            <p>Date:12/12/2021</p></div>
            <div><h4>les intrants populaires</h4>
            <p>Date:12/12/2021</p></div>
            <div className="contribution"><h4>Vous voulez participer a ce projet?</h4>
            <form>
            <input className="identite" type="text" placeholder="Votre identite" required></input>
             <input className="mail" type="mail" placeholder="Votre mail" required></input>
            <input className="commentaire" type="text" placeholder="Decrivez en trois mots votre apport" required></input>
            <input className="submit" type="submit" value="Envoyer"></input>
            </form>
            </div>
            </div>
            
    

        </div>
    )
}


export default Navbars
