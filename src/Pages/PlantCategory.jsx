import React, { useContext } from 'react'
import './CSS/PlantCategory.css'
import { PlantContext } from '../Context/PlantContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const PlantCategory = (props) => {
  const {all_product} = useContext(PlantContext)
  return (
    <div className='plant-category'>
      {/* from this in each section banner showing like indoor, outdoor, gift */}
      <img className='plantcategory-banner' src={props.banner} alt="" />
      <div className="plantcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="plantcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="plantcategory-products">
        {all_product.map((item, i) =>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="plantcategory-loadmore">
        Explore more
      </div>
    </div>
  )
}

export default PlantCategory
