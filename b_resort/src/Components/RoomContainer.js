import React from 'react'
import RoomList from '../Components/RoomList';
import RoomFilter from '../Components/RoomFilter';
import {withRoomConsumer} from '../Context';
import Loading from './loading';

function RoomContainer({context}){
    const {loading , sortedRooms, rooms}=context;

                    if(loading){
                        return <Loading/>
                    }

                    return(
                        <div>
                            <RoomFilter room={rooms}/>
                            <RoomList room={sortedRooms}/>
                        </div>
                    )
}

export default withRoomConsumer(RoomContainer);











// import React from 'react'
// import RoomList from '../Components/RoomList';
// import RoomFilter from '../Components/RoomFilter';
// import {RoomConsumer} from '../Context';
// import Loading from './loading';


// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 value=>{
//                     const {loading, sortedRooms, rooms} = value
                    
//                     if(loading){
//                         return <Loading/>
//                     }
                    
//                     return(
//                         <div>
//                             <RoomFilter room={rooms}/>
//                             <RoomList room={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }
