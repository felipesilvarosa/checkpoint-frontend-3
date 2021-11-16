import './style.scss'
export default function Header(){
    return(
        <header>
            <nav>
                <h1>Felipe Rosa</h1>
                <div className="nav-items">
                    <a href="#banner">Ínicio</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#contato">Contato</a>
                </div>
            </nav>
        </header>
    )
}