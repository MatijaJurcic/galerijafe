import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AppLogin } from "./auth/AppLogin";
import { AppLogout } from "./auth/AppLogout";
import { AppRegister} from "./auth/AppRegister"
import { CreateGallery } from "./pages/CreateGalleryPage";
import { GalleriesPage } from "./pages/GalleriesPage";
import { EditGallery } from "./pages/EditGalleryPage";
// import { Gallery } from "./pages/GalleryPage";

import GuardedRoute from "./components/common/GuardedRoute";
import GuestRoute from "./components/common/GuestRoute";
import { NavBar } from "./common/NavBar"; // promeniti posle da bude u components

const Router = () => {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Switch>
        <GuardedRoute component={CreateGallery} path="/add" />
        <GuardedRoute component={AppLogout} path="/logout" />
        <GuardedRoute component={GalleriesPage} path="/galleries" />
        <GuardedRoute component={EditGallery} path="/edit-gallery/:id" />
        <GuestRoute component={AppLogin} path="/login" />
        <GuestRoute component={AppRegister} path="/register" />
      </Switch>
    </BrowserRouter>
  );
};


export default Router;
