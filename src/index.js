import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {

    // const pessoaIcon = "https://icon-icons.com/icons2/806/PNG/48/chat-53_icon-icons.com_65955.png";

	return (
		<div className="ui container comments">
            <CommentDetail 
                author={getFakeName()}
                avatar={getFakeAvatar()}
                date={getFakeDateAsString()}
                phrase={getFakePhrase()}
                />
            <CommentDetail 
                author={getFakeName()}
                avatar={getFakeAvatar()}
                date={getFakeDateAsString()}
                phrase={getFakePhrase()}
                />
            <CommentDetail 
                author={getFakeName()}
                avatar={getFakeAvatar()}
                date={getFakeDateAsString()}
                phrase={getFakePhrase()}
                />        
        </div>
	);
};

function getFakeName() {
    return faker.name.firstName() + ' ' + faker.name.lastName();
}

function getFakeAvatar() {
    return faker.image.avatar();
}

function getFakeDateAsString() {
    return faker.date.recent().toLocaleString();
}

function getFakePhrase() {
    return faker.hacker.phrase();
}

ReactDOM.render( <App />, document.querySelector('#root'));
