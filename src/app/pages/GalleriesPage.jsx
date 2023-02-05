import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectGalleries } from "../store/galleries/selector";
import { getAllGalleries } from "../store/galleries/slice";
import { GalleriesDetails } from "../components/GalleriesDetails";

export const GalleriesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGalleries());
  }, []);

  const galleries = useSelector(makeSelectGalleries);

  return (
    <div>
      {galleries.map((gallery) => (
        <GalleriesDetails key={gallery.id} gallery={gallery} />
      ))}
    </div>
  );
};
