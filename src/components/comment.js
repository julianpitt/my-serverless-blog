import React from "react";
import * as dateformat from "dateformat";

const Comment = ({ comment }) => {
    const { content, timestamp } = comment;
    return (
        <div style={{ borderLeft: '2px solid #ddd', marginBottom: 10, paddingLeft: 5 }}>
            <q>
                {content}
            </q>
            <small> at {dateformat(timestamp, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}</small>
        </div>
    )
}

export default Comment;