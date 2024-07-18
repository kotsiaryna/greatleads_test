import {
  Link,
  Navbar, 
  NavbarContent, 
  NavbarItem, 
} from "@nextui-org/react";


function Header() {
  return (
    <div className="flex justify-between items-center w-10/12 mx-auto mt-6">
      <Link href="#" underline="hover" isBlock className="text-orange-700 italic bg-amber-100 rounded-lg h-8">LOGO</Link>
      <Navbar classNames={{
        base: 'w-fit bg-amber-50 h-8', 
        item: [
          "flex",
          "relative",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[3px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-warning",
        ],}} >
        <NavbarContent justify="center">
        <NavbarItem>
          <Link href="#" color="warning" className="tracking-wider font-extrabold">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" color="warning" className="tracking-wider font-extrabold" >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="warning" className="tracking-wider font-extrabold">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      </Navbar>

    </div>
  )
}

export default Header