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
import CareersLayout from "./pages/CareersLayout";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />}
            loader={careersLoader}/>
    
      <Route path=":id" element={<CareerData />}
      loader={careerDataLoader}
      />
      </Route> */}
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
