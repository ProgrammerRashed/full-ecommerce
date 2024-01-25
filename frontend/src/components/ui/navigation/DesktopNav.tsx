import { Button } from "../button"

const DesktopNav = () => {
  return (
    
      <nav className="flex justify-between max-w-[1240px] mx-auto"> 
        <div className="logo flex justify-center items-center">
            <h1>ZossGadget</h1>
        </div>
        <ul className="flex gap-3 justify-center items-center">
        <li>Home</li>
        <li>Shop</li>
        <li><Button>Login</Button></li>
        </ul>
      </nav>

  )
}

export default DesktopNav
