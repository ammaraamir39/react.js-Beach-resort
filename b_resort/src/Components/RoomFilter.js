import React from 'react'
import { useContext} from 'react';
import { RoomContext } from '../Context';
import Title from '../Components/SecTitle';

//getting the unique values

const getUnique = (items,value)=>{
    
    return[...new Set(items.map(item=>item[value]))];
};

export default function RoomFilter({room}) {
    const context = useContext(RoomContext)
    //console.log(context)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    }=context;
    //get unique types
    let types=getUnique(room,'type');
    //add all
    types=['all',...types];
    //map to jsx
    types=types.map((item,index)=>{
        return (
            <option value={item} key={index}>
                    {item}
            </option>
        )
    })

    let people=getUnique(room,'capacity');

    people=people.map((item,index)=>{
        return(
            <option key={index} value={item} >
                    {item}
            </option>
        )
    })

    return (
        <section className="filter-container">
            <Title title="Search rooms" />
            <form className="filter-form">
                {/* Select Type */}
                    <div className="form-group">
                        <label htmlFor="type">
                            room Type
                        </label>
                        <select name="type" 
                        id="type" 
                        value={type} 
                        className="form-control" 
                        onChange={handleChange}>
                            {types}
                        </select>
                    </div>
                {/* End Of Select Type */}
            
            
                {/* Select Guests */}
                <div className="form-group">
                    <label htmlFor="capacity">
                        Guests
                        </label>
                    <select name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* End Of Select Guests */}
            
            {/* start Of Price */}
            
                <div className="form-group">
                    <label htmlFor="price">
                        rooms Price ${price}
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice}
                        id="price" value={price} onChange={handleChange}
                        className="form-control"/>
                </div>
            {/*End of Price */}
                {/* start Of size */}

                <div className="form-group">
                    <label htmlFor="size">
                        room size
                    </label>
                   <div className="size-inputs">
                       <input type="number" id="size" name="minSize" value={minSize} onChange={handleChange} 
                       className="size-input"/>
                        <input type="number" id="size" name="maxSize" value={maxSize} onChange={handleChange}
                        className="size-input" />
                    </div>
                </div>
                {/*End of size */}
                {/*start of extras */}
                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="breakfast" id="breakfast"
                             checked={breakfast} onChange={handleChange}  />
                        <label htmlFor="breakfast">Breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input type="checkbox" name="pets" id="pets"
                                checked={pets} onChange={handleChange} />
                            <label htmlFor="pets">pets</label>
                        </div>
                    </div>

            </form>
        </section>
    )
}
