import {  createBrowserRouter, 
          Route, 
          createRoutesFromElements, 
          RouterProvider } from "react-router-dom";
//pages
import Home from './pages/Home'
import About from "./pages/About";

//layouts
import RootLayout from "./pages/RootLayout";
import HelpLayout from "./pages/HelpLayout";
import Contact, { contactAction } from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import NotFound from "./pages/NotFound";
import CareersLayout from "./pages/CareersLayout";
import Careers, { careersLoader } from "./pages/Careers";
import CareerDetails, { careerDetailsLoader } from "./pages/CareerDetails";
import CareersError from "./pages/CareersError";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action = {contactAction} />
      </Route>

      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}  >
        <Route index element={<Careers />} loader={careersLoader}  />
        <Route path=":id" element={<CareerDetails />} 
        loader={careerDetailsLoader}
         />

      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Route>
)
  )

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
