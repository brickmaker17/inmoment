import React, { Component } from 'react';
import './DropDown.css';

import SVGIcon from "./SVGIcon";

export default class DropDown extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: 'Create a React Component',
            listOpen: true,
            list: [
                {
                   id: 0,
                   title: '1. Make this dropdown a React component.' 
                },
                {
                    id: 1,
                    title: '2. Demo the component in Framer X.'
                },
                {
                    id: 2,
                    title: `3. Don't use any libraries.`
                },
                {
                    id: 3,
                    title: `4. Final deliverable should be a Framer X file.`
                },
                {
                    id: 4,
                    title: `Bonus: Add changable props in the Framer X interface.`
                },
            ]
        }
      }

      toggleList = () => {
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
      }

      selectItem = (item) => {
          this.setState(()=> ({
              listOpen: false,
              text: item.title,
          }))
      }

    render(){
        const { list, listOpen } = this.state;
        const arrow = listOpen === true? 'dd-arrow' : null;
        return(
            <div className='dd-wrapper'>
                <div className='dd-header' onClick={this.toggleList}>
                    <p>{this.state.text}</p>
                    <div className={arrow}>
                        {listOpen === false? 
                            <SVGIcon name="single_arrow_down" height={10} width={35} /> 
                            : <SVGIcon name="single_arrow_up" height={10} width={35} />
                        }
                    </div>
                </div>
                {listOpen && <ul className='drop-down'>
                {list.map((item) => (
                    <li onClick={() => this.selectItem(item)} key={item.id} >{item.title}</li>
                ))}
                </ul>}
            </div>
        )
    }
} 