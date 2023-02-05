export const EditGalleryForm = ({
    onChange,
    submitHandler,
    addURLHandler,
    removeURLHandler,
    URLChangeHandler,
    gallery,
  }) => {
    return (
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <br />
        <input
          required
          minLength={2}
          maxLength={255}
          type="text"
          value={gallery.name}
          name="name"
          onChange={(e) => onChange({ ...gallery, brand: e.target.value })}
        />
        <br />
        <label>Description</label>
        <br />
        <input
          maxLength={1000}
          type="text"
          value={gallery.description}
          name="description"
          onChange={(e) => onChange({ ...gallery, brand: e.target.value })}
        />
        <br />
        <label>Image URL</label>
        <br />
        {gallery &&
          gallery.url.map((imageURL, index) => {
            return (
              <div key={index} className="box">
                <input
                  name="url"
                  placeholder="Enter Image URL"
                  value={imageURL}
                  onChange={(e) => onChange({ ...gallery, brand: e.target.value })}
                  />
                <div className="btn-box">
                  {gallery.url.length !== 1 && (
                    <button
                      type="button"
                      className="mr10"
                      onClick={() => removeURLHandler(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        <br />
        <button type="button" onClick={addURLHandler}>
          Add another URL
        </button>
        <br />
        <button type="submit">Edit</button>
      </form>
    );
  };
  