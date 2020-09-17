import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const pessoaIcon = "https://icon-icons.com/icons2/806/PNG/48/chat-53_icon-icons.com_65955.png";

	return (
		<div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={pessoaIcon} alt="avatar" />
                </a>
            </div>
            <div className="comment">
                <a href="/" className="author">
                    Sissy Spacek
                </a>
                <div className="metadata">
                    <span className="date">Today at 6PM</span>
                </div>
            </div>
            <div className="text">
                I like it very much. Keep up the good work!
            </div>
        </div>
	);
};

ReactDOM.render( <App />, document.querySelector('#root'));
