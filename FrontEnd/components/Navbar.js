import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="flex ">
            <div id="logo" className="logo">
                <img src="https://assets-global.website-files.com/5e3177cecf36f6591e4e38cb/5ea2a86505e63bdd814cf868_Logo.png"></img>
            </div>
            <div id="Link1">
            <Link href="/"><a className="action" >Home</a></Link>
            <Link href="/tracking"><a>Tracking</a></Link>
            <Link href="/about"><a>About</a></Link>
            </div>

        </nav>
      );

}
 
export default Navbar;