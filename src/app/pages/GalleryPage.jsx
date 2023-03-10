import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { makeSelectGallery } from "../store/galleries/selector";
import { getSingleGallery } from "../store/galleries/slice";
import { GalleryDetails } from "../components/GalleryDetail";

export const Gallery = () => {
  const [index, setIndex] = useState(0);

  const selectHandler = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getSingleGallery(id));
    }
  }, [id]);

  const gallery = useSelector(makeSelectGallery);

  return (
    <div>
      <GalleryDetails
        gallery={gallery}
        user={gallery.user}
       comments={gallery.comments}
        handleSelect={selectHandler}
        index={index}
      />
    </div>
  );
};
