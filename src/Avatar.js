import React,{Component} from 'react';
import Avatarlist from './Avatarlist';
import 'tachyons';
import './Avatar.css';

class Avatar extends Component{
    constructor(){
        super();
        this.state = {name:"Welcome to avatar world"}
    }
    namechange(){
        this.setState({
            name:"Subscribe to the channel"
        })
    }

    render(){
        const avatarlistarray=[
            {
                id:1,
                name:"Ishank",
                work:"Web Developer"
            },
            {
                id:2,
                name:"Rohan",
                work:"Web Developer"
            },
            {
                id:3,
                name:"Muskan",
                work:"Web Developer"
            },
            {
                id:4,
                name:"Vikas",
                work:"Web Developer"
            },
        ]
    
        const arrayavatarcard = avatarlistarray.map((Avatarcard,i) =>{
            return <Avatarlist key={i} id={avatarlistarray[i].name} name={avatarlistarray[i].name} work={avatarlistarray[i].work}/>
        })
    
        return(
            <div className ="mainpage">
                <h1>{this.state.name}</h1>
                {/* <Avatarlist id={avatarlistarray[1].name} name={avatarlistarray[1].name} work={avatarlistarray[1].work}/>
                <Avatarlist id={avatarlistarray[2].name} name={avatarlistarray[2].name} work={avatarlistarray[2].work}/>
                <Avatarlist id={avatarlistarray[3].name} name={avatarlistarray[3].name} work={avatarlistarray[3].work}/>
                <Avatarlist id={avatarlistarray[0].name} name={avatarlistarray[0].name} work={avatarlistarray[0].work}/> */}
                {arrayavatarcard}
                <button onClick={()=>this.namechange()}>Subscribe</button>
            </div>
        )
    }
}
    

export default Avatar;