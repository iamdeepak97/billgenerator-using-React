import React from 'react'

export default function MainDetails({data}) {
    const {name,address}=data;
    
    
  return (
    <>
      <section className="flex flex-col items-end justify-end">
          <h2 className="text-xl uppercase">{name}</h2>
          <p>{address}</p>
        </section>
    </>
  )
}
