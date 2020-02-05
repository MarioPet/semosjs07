import React from "react";
import UserInfo from "./UserInfo";
import CommentInfo from "./CommentInfo";

class Comment extends React.Component {
    render() {
        return(
            <div className="comment">
                <UserInfo />
                <CommentInfo />
            </div>
        )
    }
}

export default Comment;