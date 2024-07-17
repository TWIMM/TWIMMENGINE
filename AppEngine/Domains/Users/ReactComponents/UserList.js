'use strict';

const e = React.createElement;
const { useState } = React;

function LikeButton() {
    const [liked, setLiked] = useState(false);

    if (liked) {
        return 'You liked this.';
    }

    return e(
        <button onClick={() => setLiked(true)}>
            Like
        </button>
    );
}

const domContainer = document.querySelector('#home_component');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
