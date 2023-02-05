import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AppLogin } from "./auth/AppLogin";
import { AppLogout } from "./auth/AppLogout";
import { AppRegister} from "./auth/AppRegister"
import { CreateGallery } from "./pages/CreateGalleryPage";
import { EditGallery } from "./pages/EditGalleryPage";
import { Gallery } from "./pages/GalleryPage";
import { GalleriesPage } from "./pages/GalleriesPage";
import { MyGalleries } from "./pages/MyGalleriesPage";
import GuardedRoute from "./components/common/GuardedRoute";
import GuestRoute from "./components/common/GuestRoute";
import { NavBar } from "./common/NavBar"; 

const Router = () => {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Switch>
        <GuardedRoute component={CreateGallery} path="/create" />
        <GuardedRoute component={AppLogout} path="/logout" />
        <GuardedRoute component={EditGallery} path="/edit-gallery/:id" />
        <GuardedRoute component={MyGalleries} path="/my-galleries" />
        <Route component={Gallery} path="/galleries/:id" />
        <Route component={GalleriesPage} exact path="/" />
        <GuestRoute component={AppLogin} path="/login" />
        <GuestRoute component={AppRegister} path="/register" />
      </Switch>
    </BrowserRouter>
  );
};


export default Router;
