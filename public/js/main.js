var CommentBox = React.createClass({
  render: function() {
    return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.props.data} />
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

var data = [
  {author: "Jameela Huq", text: "This is *LAAAAAAAME*"},
  {author: "Nobody in Particular", text: "And this is no *comment* in particular"}
];


React.render(
  <CommentBox data={data} />,
    document.getElementById('content')
);
