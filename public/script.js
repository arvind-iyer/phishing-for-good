$(document).ready(function() {
  $('#comment-form').submit(function() {
    var name = $('#name').val();
    var comment = $('#comment').val();

    $('#name').val('');
    $('#comment').val('');

    addComment({
      name: name,
      comment: comment
    });

    return false;

  });

  function addComment(comment) {
    $('<div class="comment">')
              .append('<div class="author">Posted by: ' + comment.name + '</div>')
              .append('<p>' + comment.comment + '</p>')
              .appendTo('#comments');
  }

  function loadComments() {
    dpd.comments.get(function(comments, error) {
      $('#comments').empty();
      comments.forEach(function(comment) {
        addComment(comment);
      })
    })
  }
  loadComments();
});
