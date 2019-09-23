import React, { Component } from 'react'
import Items from './data'

const RoomContext = React.createContext();

 class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false

    }

    componentDidMount(){
        let rooms=this.formatData(Items)
        let featuredRooms=rooms.filter(room=>room.featured===true);
        let maxPrice= Math.max(...rooms.map(item=>item.price));
        let maxSize= Math.max(...rooms.map(item=>item.size));

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false, 
            price:maxPrice,
            maxPrice,
            maxSize
        })
    }
    formatData(items){
        let tempItems=items.map(item=>{
            let id= item.sys.id
            let images=item.fields.images.map(image=>
                image.fields.file.url
            );
            let room = {...item.fields,images,id}
            return room;
        })
        return tempItems;
    }


    getRoom=(slug)=>{
        let tempRoom=[...this.state.rooms];
        let rooms=tempRoom.find(room=> room.slug===slug)

        return rooms;
    }

    handleChange=(event)=>{
        const target=event.target;
        const value= target.type === 'checkbox' ? target.checked : target.value
        const name=event.target.name;
       // console.log(target,value,name)
        this.setState({
        
            [name]:value
            
        },this.roomFilter);
        
    };

    roomFilter=()=>{
        let{rooms,
        type,
        capacity,
        minSize,
        maxSize,
        breakfast,
        pets,price
    }=this.state
    // all the rooms
    let tempRooms=[...rooms];
    //Parsing string into integer
    capacity=parseInt(capacity);

    //checking by type
    if(type !== 'all'){
        tempRooms=tempRooms.filter(room=>room.type===type)
    }
    //checking by capacity
    if(capacity !== 1){
        tempRooms=tempRooms.filter(room=>room.capacity===capacity)
    }
    //checking by price
    tempRooms = tempRooms.filter(room=>room.price <= price )
    //checking by size
    tempRooms=tempRooms.filter(room=>room.size >= minSize && room.size <= maxSize)
    //checking by breakfast
    if(breakfast){
        tempRooms=tempRooms.filter(room=>room.breakfast===true)
    }
    //checking by pets
    if(pets){
        tempRooms=tempRooms.filter(room=>room.pets===true)
    }
    this.setState({
        sortedRooms:tempRooms
    })



    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state,
                getRoom:this.getRoom,
                handleChange:this.handleChange
            }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer=RoomContext.Consumer;

//higher order Component
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value=>
                <Component {...props} context={value}/>
            }
        </RoomConsumer>
    }
}



export {RoomConsumer,RoomProvider,RoomContext  }