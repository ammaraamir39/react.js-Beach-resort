import React, { Component } from 'react'
import {RoomContext} from '../Context';
import Title from '../Components/SecTitle';
import Loading from './loading';
import Room from './Room';


export default class Featured extends Component {
    static contextType=RoomContext;
    render() {
        let {loading,featuredRooms : rooms} =this.context;
        rooms=rooms.map(room=>{
                return <Room key={room.id} room={room}/>
        })
        
        return (
            <section className="featured-rooms">
               <Title title="Featured Rooms"/>
               <div className="featured-rooms-center">
                    {loading?<Loading/>:rooms}
               </div>
            
               
            </section>
        )
    }
}
