import React, { Component } from 'react';

import './modal.scss';

class Modal extends Component {
    state = {
        id: '',
        date: '',
        startTime: '',
        finishTime: '',
        title: '',
        description: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }


    onSubmit = event => {
        debugger;
        event.preventDefault();
        this.props.handleSubmit(this.state);
    };

    render() {
        const { hideModalHandler } = this.props;

        return (
            <div className="modal overlay">
                <div className="modal__content">
                    <div className="create-event">
                        <button className="create-event__close-btn" onClick={hideModalHandler}>+</button>
                        <form className="event-form" onSubmit={this.onSubmit}>
                            <input type="text" name="title" placeholder="Title" className="event-form__field" onChange={this.handleChange} />
                            <div className="event-form__time">
                                <input type="date" name="date" className="event-form__field" onChange={this.handleChange} />
                                <input type="time" name="startTime" className="event-form__field" onChange={this.handleChange} />
                                <span>-</span>
                                <input type="time" name="endTime" className="event-form__field" onChange={this.handleChange} />
                            </div>
                            <textarea name="description" placeholder="Description" className="event-form__field" onChange={this.handleChange}></textarea>
                            <button type="submit" className="event-form__submit-btn">Create</button>
                        </form>
                    </div>
                </div>
            </div>)
    }
}

export default Modal;