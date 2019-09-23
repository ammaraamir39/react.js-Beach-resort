import React, { Component } from 'react'
import Title from './SecTitle';
import {FaCocktail,FaHiking,FaBeer,FaShuttleVan} from 'react-icons/fa';


export default class Section extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktail",
                info:"Have some free cocktail in this amazing season"

            },
            {
                icon:<FaHiking/>,
                title:"endless Hiking",
                info:"Endless Hiking towards the horizon"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"Shuttle services for free to roam around this beautiful city"

            },
            {
                icon:<FaBeer/>,
                title:"Strong Beer",
                info:"We have got some exciting and refreshing beers here!!"
            }
        ]
    }    ;
    render() {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return (<article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                        </article>);
                    })}
                </div>
                
            </section>
        )
    }
}
