import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {

    // const pessoaIcon = "https://icon-icons.com/icons2/806/PNG/48/chat-53_icon-icons.com_65955.png";

	return (
		<div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar" />
                </a>
            </div>
            <div className="comment">
                <a href="/" className="author">
                    {faker.name.firstName()} {faker.name.lastName()}
                </a>
                <div className="metadata">
                    <span className="date">{faker.date.recent().toLocaleString()}</span>
                </div>
            </div>
            <div className="text">
                {faker.hacker.phrase()}
            </div>
        </div>
	);
};

ReactDOM.render( <App />, document.querySelector('#root'));
