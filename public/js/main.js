var CommentBox = React.createClass({
  render: function() {
    return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList />
          <CommentForm />
        </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
        React.createElement('div', {className: "commentList"},
            <div className="commentList">
              <Comment author="Jameela Huq">This is the most amazing comment</Comment>
              <Comment author="Giant Monster">Eat *me* and my *brother*</Comment>
            </div>)
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
        React.createElement('div', {className: "commentForm"},
        "Hello, world! I am a CommentForm.")
    );
  }
});

var Comment = React.createClass({
  rawMarkup: function () {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return {__html: rawMarkup}
  },

  render: function() {
    return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          <span dangerouslySetInnerHTML={this.rawMarkup()}/>
        </div>
    )
  }
});

React.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);
