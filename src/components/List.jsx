import {Listbox, ListboxItem} from "@nextui-org/react";



function List() {
  return (
    <div className="w-1/2 mx-auto">
    <Listbox
    variant="bordered"
    color="success"
    topContent='This is an item list'
    classNames={{base:"text-green-600 font-extrabold bg-lime-50"}}
    itemClasses={{base:"italic"}}
    aria-label="Listbox"
    >
      <ListboxItem key="item1" description="This is the first Item" showDivider='true'>Item 1</ListboxItem>
      <ListboxItem key="item2"  description="This is the second Item" showDivider='true'>Item 2</ListboxItem>
      <ListboxItem key="item3"  description="This is the third Item" showDivider='true'>Item 3</ListboxItem>
      <ListboxItem key="item4"  description="This is the fourth Item" showDivider='true'> Item 4 </ListboxItem>
    </Listbox>
    </div>

);
}

export default List