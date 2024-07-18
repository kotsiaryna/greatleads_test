import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

function Menu() {
  return (
    <Dropdown classNames={{content:'border-2 border-green-700 bg-lime-50' }}>
      <DropdownTrigger>
        <Button 
          variant="shadow"
          color="success" 
          className="text-slate-50 font-semibold mt-20"
           >
          Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" variant="faded" color="success" classNames={{base: 'font-bold text-red-900'}}>
        <DropdownItem key="1" description='This is the 1st Variant' classNames={{base: 'font-semibold'}}>Variant 1</DropdownItem>
        <DropdownItem key="2" description='This is the 2nd Variant'>Variant 2</DropdownItem>
        <DropdownItem key="3" description='This is the 3rd Variant'>Variant 3</DropdownItem>
        <DropdownItem key="4" description='This is the 4th Variant'>Variant 4</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default Menu