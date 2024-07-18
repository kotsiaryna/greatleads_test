import React from 'react'
import {Input, Select, SelectItem, CheckboxGroup, Checkbox} from "@nextui-org/react";


export const animals = [
  {key: "cat", label: "Cat"},
  {key: "dog", label: "Dog"},
  {key: "elephant", label: "Elephant"},
  {key: "lion", label: "Lion"},
  {key: "tiger", label: "Tiger"},
];

function Form() {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <h2 className='font-sans text-orange-700 text-center'> Form</h2>
       <Input
        type="email" 
        label="Email" 
        placeholder="Enter your email" 
        isRequired
        isClearable
        variant='underlined'
        classNames={{
          base: 'w-1/2',
          innerWrapper:'bg-orange-100' 
          }}/>

       <Input 
        type="password" 
        label="Password" 
        placeholder="Enter your password" 
        isRequired 
        isClearable 
        variant='underlined'
        classNames={{
           base: 'w-1/2',
           innerWrapper:'bg-orange-100',
          }} />

       <Select 
        label="Select animals" 
        selectionMode="multiple"
        variant='underlined'
        labelPlacement='outside'
        classNames={{
          base: 'w-1/2',
          label:'underline decoration-orange-600 font-sans',
          value: 'underline text-lg',
          innerWrapper: 'bg-orange-50' 
        }} 

      >
        {animals.map((animal) => (
          <SelectItem key={animal.key} variant='bordered' classNames={{base: 'border-yellow-800 border-1'}}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>

      <CheckboxGroup
        label="Select cities"
        orientation="horizontal"
        defaultValue={["buenos-aires", "london"]}
        color='warning'
        classNames={{
          base: 'bg-orange-50 rounded-lg p-5',
          wrapper:'border-yellow-800'
        }}
      >
      <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
      <Checkbox value="sydney">Sydney</Checkbox>
      <Checkbox value="san-francisco">San Francisco</Checkbox>
      <Checkbox value="london">London</Checkbox>
      <Checkbox value="tokyo">Tokyo</Checkbox>
    </CheckboxGroup>


    </div>
  )
}

export default Form