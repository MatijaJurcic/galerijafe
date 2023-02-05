export const CreateGalleryForm = ({
  gallery,
  onChangeHandler,
  submitHandler,
  addURLHandler,
  removeURLHandler,
  URLChangeHandler,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <label>Title</label>
      <br />
      <input class="form-control form-control-lg" aria-label=".form-control-lg example"
        required
        minLength={2}
        maxLength={255}
        type="text"
        value={gallery.name}
        name="name"
        onChange={(e) => onChangeHandler(e)}
      />
      <br />
      <label>Description</label>
      <br />
      <textarea
        rows="11"
        cols="100"
        maxLength={1000}
        type="text"
        value={gallery.description}
        name="description"
        onChange={(e) => onChangeHandler(e)}
      />
      <br />
      <label>Image URL</label>
      <br />
      {gallery &&
        gallery.url.map((imageURL, index) => {
          return (
            <div key={index} className="box">
              {index === 0 ? (
                <input
                  required
                  name="url"
                  type="url"
                  placeholder="Enter Image URL"
                  value={imageURL}
                  onChange={(e) => URLChangeHandler(e, index)}
                />
              ) : (
                <input
                  name="url"
                  type="url"
                  placeholder="Enter Image URL"
                  value={imageURL}
                  onChange={(e) => URLChangeHandler(e, index)}
                />
              )}{" "}
    
            </div>
          );
        })}
      <br />
      <button type="button" onClick={addURLHandler}>
        Add another URL
      </button>
      <br />
      <button type="submit" class="btn btn-primary">Submit</button>{" "}
      <button
        type="button"
        onClick={() => window.location.replace("/my-galleries")}
      >
        Cancel
      </button>
    </form>
  );
};
