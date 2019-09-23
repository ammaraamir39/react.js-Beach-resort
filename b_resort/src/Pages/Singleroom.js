import React, { Component } from 'react';
import defaultBkg from '../images/room-1.jpeg';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';
import StyledHero from '../Components/StyledHero';

export default class Singleroom extends Component {
    
    constructor(props){
        super(props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBkg
        }     
    }
    
    static contextType=RoomContext;
    // componentDidMount(){

    // }
    
    render() {
        const { getRoom } = this.context;
        const room= getRoom(this.state.slug);

        if(!room){
            return (<div className="error">
                <h4>No such rooms exist </h4>
                <Link to="/rooms" className="btn-primary">
                    Back to rooms
                </Link>
            </div>
            );
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images}=room


        return (
           <>
                <StyledHero image={images[1] || this.state.defaultBkg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            Back to Rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {images.map((item,index)=>{
                            return(
                                <img src={item} key={index} alt="room"/>
                            )
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : {size} SQFT</h6>
                            <h6>
                                max capacity : {
                                    capacity > 1 ? `${capacity} people` : `${capacity} person`
                                }
                            </h6>
                            <h6>
                                {pets ? "Pets allowed " : "Pets not allowed"}
                            </h6>
                            <h6>
                                {breakfast ? "Free Breakfast" : "No breakfast included"}
                            </h6>
                        </article>

                    </div>

                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {extras.map((item,index)=>{
                            return (
                                <li key={index}>
                                    -{item}
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </>
        )
    }
}
