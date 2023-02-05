export const CreateCommentForm = ({
    comment,
    onChangeHandler,
    submitHandler,
  }) => {
    return (
      <form onSubmit={(e) => submitHandler(e)}>
        Post Comment:
        <br />
        <textarea class="form-control" id="exampleFormControlTextarea1"
          rows="5"
          cols="50"
          required
          type="text"
          value={comment.body}
          onChange={(e) => onChangeHandler(e)}
        />
        <br />
        <button type="submit">Add comment</button>
      </form>
    );
  };