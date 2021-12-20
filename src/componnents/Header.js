

const Header = () => {
        function clickHandler()
        {
                console.log('Clicked')
        }
    return (
        <div className ="Header">
            <div className="brand"><h1>CD</h1></div>
                    <div className="right">
                            <li onClick={clickHandler} className="contact">Nous Contacter</li>
                            <li onClick={clickHandler} className="about">Qui sommes nous?</li>
                            <li onClick={clickHandler} className="galerie">Galeries</li>
                            <li onClick={clickHandler} className="boutique">Boutique</li>
                    </div>
                      
            </div>
                
    )
}

export default Header
