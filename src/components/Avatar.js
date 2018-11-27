import React from 'react'
import ReactAvatar from 'react-avatar';

const genSizeRatio = (username) => {
    if(username.split(" ").length > 1) {
        return 1.8;
    }
    return 2.4;
};

const Avatar = ({ children, size }) => {
    return <ReactAvatar name={children} round={true} size={size} textSizeRatio={genSizeRatio(children)} />;
};

export default Avatar;