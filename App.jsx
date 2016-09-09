import React from 'react';
import ReactDOM from 'react-dom';

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <p className="comment-header">{this.props.author}</p>
                <p className="comment-body">
                    {this.props.body}
                </p>
                <div className="comment-footer">
                    <a href="#" className="comment-footer-delete">
                        Delete Comment
                    </a>
                </div>
            </div>
        );
    }
}
export default Comment;

class CommentForm extends React.Component {
    render() {
        return (
            <div>
                <h1>hello world</h1>
               <form>
                 <input placeholder="Name:" ref={(input) => this._author = input} />
                 <textarea placeholder="Comment:" ref={(comment) => this._body = comment}/>
                   <button type="button" className="btn btn-primary btn-block" onClick={this._handleSubmit.bind(this)}>Submit</button>
                 </form>
            </div>
        );
    }

    _handleSubmit(event){
        event.preventDefault();

        let author = this._author;
        let body = this._body;

        this.props.addComment(author.value,body.value);
     }
}
export default CommentForm;


class CommentBox extends React.Component {

    constructor(){
        super();

        this.state = {
            showComments : false,
            commentList : [
                {id:1, author:'Ezhil1', body:'Hello world1'},
                {id:2, author:'Vakeesan1', body:'You are my world1!'}
            ]
        };
    }

    render() {
        const comments = this._getComments();
        let commentNodes;
        let buttonText =  "Show Comments";

        if(this.state.showComments){
            commentNodes =  <div className="comment-list">{comments}</div>;
            buttonText = "Hide Comments";
        }
        
        return (
            <div className="comment-box">
               <CommentForm addComment={this._addComment.bind(this)}/>
                <h3>Comments</h3>
                <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
                <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
                {commentNodes}
            </div>
        );
    }

    _handleClick(event){
        event.preventDefault();
        this.setState({
            showComments : !this.state.showComments
        });

    }

    _getComments(){
        const commentList = this.state.commentList;
        return commentList.map((comment) => {
            return (<Comment author={comment.author} body={comment.body} key={comment.id}/>);
        });
    }
    _getCommentsTitle(commentCount){
        if(commentCount === 0){
            return "No comments yet";
        } else if (commentCount === 1){
            return "1 Comment";
        } else if (commentCount > 1){
            return `${commentCount} comments`;
        }
    }

    _addComment(author, body){
        const comment = {
            id: this.state.commentList.length + 1,
            author,
            body
        }

        this.setState({commentList: this.state.commentList.concat([comment]) });
    }

}
export default CommentBox;


