import { Component } from "react";
import "../character-cards.css";

export class CharacterCard extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className="card" key={item.name}>
        <div className="card-titles">
          <h3>{item.name}</h3>
          <h4>{item.nickName}</h4>
        </div>
        <img src={item.imageUrl} alt="profile img" />
        <p>{item.background}</p>
      </div>
    );
  }
}
