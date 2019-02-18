import React, { Component } from 'react';
import { HobbyItem } from './Cartitem';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hobbies: [
                'Reading',
                'Sport',
                'Music',
                'Chess',
                'Cooking'
            ],
            deleted: false
        }
    }

    addHobby(event) {
        let currentHobbies = this.state.hobbies;
        let textBox = event.target.previousElementSibling;

        if (textBox.value) {
            currentHobbies.push(textBox.value);
            textBox.value = '';

            this.setState({
                hobbies: currentHobbies
            });
        }
    }

    removeHobby(event) {
        let currentHobby = event.target.textContent;
        let updatedHobbies = this.state.hobbies.filter((hobby) => {
            return currentHobby !== hobby;
        });

        this.setState({
            hobbies: updatedHobbies
        });

        !this.state.deleted && this.setState({
            deleted: true
        });
    }

    render() {
        let cssHobbyItem = 'hobby-item';
        let cssCounter = 'more-three';
        let hobbyItems = this.state.hobbies.map((hobby, i) => {
            return <li onClick={this.removeHobby.bind(this)}
                className={cssHobbyItem}
                key={cssHobbyItem + i}>{hobby}</li>;
        });
        let hobbiesLength = this.state.hobbies.length;

        if (hobbiesLength < 3) {
            cssCounter = 'less-three';
        } else if (hobbiesLength === 3) {
            cssCounter = 'equal-three';
        }

        return (
            <div className="hobbies-list">
                <nav className="nav-add">
                    <input type="text" id="input-add" />
                    <button id="new-hobby"
                        onClick={this.addHobby.bind(this)}>New Hobby</button>
                </nav>
                <p>{this.state.deleted && 'Hobby Deleted!'}</p>
                <p className={cssCounter} ><b>Count of Hobbies:
                </b> {this.state.hobbies.length}</p>
                <ul>
                    {hobbyItems}
                </ul>
            </div>
        );
    }
}

export default Cart;
