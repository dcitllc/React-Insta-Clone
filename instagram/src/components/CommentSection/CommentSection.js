import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments, // This brings in only the comments from dummy data
      comment: "", // this is a new state where we will push our new comments into
      like: 0
    };
  }

  commentHandler = event => {
    // This is an event hander. This will handle the input of the comment.
    this.setState({ comment: event.target.value }); // Here we will update state of comment and not comments.
  };

  likeHandler = event => {
    this.setState({ like: this.state.like + 1 });
  };

  addComment = event => {
    // Here we update the state of comment
    event.preventDefault(); // This prevents the page from reloading thus loosing the input data.
    const newComment = { text: this.state.comment, username: "dchamorro" }; // Hew we create a const to hold our new comment as well as set the username default.
    const comments = this.state.comments.slice(); // this will make a copy of the comments array
    comments.push(newComment); // Now we push the newComment into our newly created comments array.
    this.setState({ comments, comment: "" }); // Finally we set the state.
  };

  render() {
    // We are deconstructing the props here. This way we dont have to always call props.
    const { comments } = this.state;
    return (
      <div>
        <div className="likes-area">
          <i onClick={this.likeHandler} className="fa fa-heart fa-2x" />
          <i className="fa fa-comment fa-2x" />
        </div>
        <span className="like-count">{this.state.like} likes</span>

        {comments.map((comment, i) => (
          <Comment username={comment.username} text={comment.text} key={i} /> // Mapping over the comments then rendering them.
        ))}

        <form onSubmit={this.addComment}>
          <input
            type="text"
            placeholder=" Add a Comment ..."
            onChange={this.commentHandler} // This handles changing the state.
            value={this.state.comment} // This sets the value to the input.
            className="comment-input"
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default CommentSection;
