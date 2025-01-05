import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import Cable from "../Cable/Cable";

const GadgetsCards = () => {
    const data = useLoaderData();
    const {category} = useParams()
    const [gadgets, setGadgets] =useState([])
    useEffect(()=>{
        if(category){
            const filterByCategory = data.filter(gadget => gadget.category.includes(category))
        setGadgets(filterByCategory)
        }
        else{
            setGadgets(data.slice(0, 6))
        }
    },[category, data])
    // console.log(data)
 console.log(gadgets)
    return (
        <div>
        {
  gadgets.length === 0 ? (
    <Cable />
  ) : (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-6 ">{
        gadgets.map(gadget => (
      <Card key={gadget.product_id} gadget={gadget} />
    ))
}</div>
  )
}

        </div>
    );
};

export default GadgetsCards;