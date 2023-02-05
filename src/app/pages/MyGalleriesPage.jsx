import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectAuthor } from "../store/authors/selector";
import { GalleriesDetails } from "../components/GalleriesDetails";
import { getUserGalleries } from "../store/authors/slice";
import { userService } from "../services/UserService";

export const MyGalleries = () => {
  const dispatch = useDispatch();
  const galleries = useSelector(makeSelectAuthor);
  const userId = window.localStorage.getItem("user");
  const [next_page, setNext_page] = useState(1);
  const [loadMoreActive, setLoadMoreActive] = useState(1);
  const [pagination, setPagination] = useState([
    { id: 0, url: [""], user: { id: 0 } },
  ]);

  useEffect(() => {
    if (userId) {
      dispatch(getUserGalleries(userId));
    }
  }, [userId]);

  useEffect(()=>{
    setPagination(galleries.data);
  },[galleries])

  const updatePagination = async (page) => {
    const { data } = await userService.get(userId, page);
    setNext_page(next_page + 1);
    setPagination([...pagination, ...data]);
    if (next_page == galleries.last_page) {
      setLoadMoreActive(0);
    }
  };

  return (
    <div>
      {pagination &&
      <ul id="remove">
        {pagination.map((gallery) => (
          <li key={gallery.id}>
            <GalleriesDetails gallery={gallery} />
          </li>
        ))}
      </ul>}
    </div>
  );
};
