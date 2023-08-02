import React, { Component } from "react";

export default class Modal extends Component {
    render() {
        const imgUrl = "./src/assets/";

        return (
            <div id="modal" className="modal-overlay">
                <div className="modal-window">
                    <div className="modal-content">
                        {this.props.t.elem.type === "image" ? <img src={imgUrl + this.props.t.elem.url} /> : <p>{this.props.t.elem.text}</p>}
                    </div>
                    <button className="modal-button" onClick={this.props.action}>CHIUDI</button>
                </div>
            </div>
        )
    }
}

// this.props.t.elem.type