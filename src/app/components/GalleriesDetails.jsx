import { Link } from "react-router-dom";

export const GalleriesDetails = ({ gallery }) => {
  return (
    <div>
      <Link to={`galleries/${gallery.id}`}>{gallery.name}</Link>
      <br />
      <a target="_blank" href={gallery.url[0]}>
        <img src={gallery.url[0]} width="400px" height="300px" />
      </a>
      <br />
      Created at: {gallery.created_at}
      <br />
      Created by:{" "}
      <Link to={`authors/${gallery.user_id}`}>
        {gallery.user?.first_name} {gallery.user?.last_name}
      </Link>
      <br />
      <br />
    </div>
  );
};
