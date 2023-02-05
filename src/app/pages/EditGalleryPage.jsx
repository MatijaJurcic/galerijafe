import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { EditGalleryForm } from "../components/EditGalleryForm";
import { galleryService } from "../services/GalleryService";

export const EditGallery = () => {
  const { id } = useParams();

  const [gallery, setGallery] = useState({
    name: "",
    description: "",
    url: [""],
  });

  const handleGetGallery = async (id) => {
    const { data } = await galleryService.get(Number(id));
    setGallery(data);
  };

  useEffect(() => {
    handleGetGallery(id);
  }, [id]);

  const handleRemoveURL = (index) => {
    const { url } = gallery;
    url.splice(index, 1);
    setGallery({ ...gallery, url: url });
  };

  const handleURLChange = (e, index) => {
    const { value } = e.target;
    const { url } = gallery;
    url[index] = value;
    setGallery({ ...gallery, url: url });
  };

  const handleOnChange = (e) => {
    setGallery({ ...gallery, [e.target.name]: e.target.value });
  };

  const handleAddURL = () => {
    setGallery({ ...gallery, url: [...gallery.url, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await galleryService.edit(gallery);

    window.location.replace("/");
  };

  return (
    <EditGalleryForm
      gallery={gallery}
      onChange={handleOnChange}
      removeURLHandler={handleRemoveURL}
      addURLHandler={handleAddURL}
      submitHandler={handleSubmit}
      URLChangeHandler={handleURLChange}
    />
  );
};
