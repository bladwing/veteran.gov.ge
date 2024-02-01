import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import TopBar from "./components/topBar/TopBar";
import Menu from "./components/menu/Menu";

import Slideshow from "./components/slideshow/SlideShow";

import "./App.scss";
import Footer from "./components/footer/Footer";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";

function App() {
  return (
    <div className="App">
      <TopBar />
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/public-information" element={<PublicInformation />} />
          PublicInformation
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

const Home = () => {
  return (
    <div>
      <Slideshow />
    </div>
  );
};

const Organization = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <>
        <Breadcrumb pathnames={pathnames} />
      <p>lorem</p>
    </>
  );
};
const PublicInformation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <>
      <Breadcrumb pathnames={pathnames} />
      <p>
      საჯარო ინფორმაცია ღიაა და ყველას აქვს უფლება მოითხოვოს საჯარო ინფორმაცია
      (თუ ის არ შეიცავს პერსონალურ მონაცემებს, სახელმწიფო ან კომერციულ
      საიდუმლოებას) მისი ფიზიკური ფორმისა და შენახვის მდგომარეობის მიუხედავად,
      აირჩიოს საჯარო ინფორმაციის მიღების ფორმა (ასლი, ამობეჭდილი ან ელექტრონული
      ვერსია), აგრეთვე გაეცნოს ინფორმაციას დედანში. სამსახურის საჯარო
      ინფორმაციის ხელმისაწვდომობის უზრუნველყოფაზე პასუხისმგებელი პირი:
      სამართლებრივი უზრუნველყოფის დეპარტამენტის სამართლებრივი აქტების მომზადების
      განყოფილების უფროსი ირაკლი ჭანტურიძე ელ. ფოსტა:
      i.chanturidze@veterans.gov.ge სამსახურის საჯარო ინფორმაციის ელექტრონული
      ფორმით გაცემასა და პროაქტიულ გამოქვეყნებაზე პასუხისმგებელი პირი:
      სამსახურის ადმინისტრაციული დეპარტამენტის უფროსი მალხაზ თოფურია ელ ფოსტა:
      m.topuria@veterans.gov.ge ტელეფონი: 032 2 48 16 26 მისამართი: ვახტანგ
      გორგასლის შესახვევი N 12 ა 0114, თბილისი, საქართველო
    </p>
    </>


    
  );
};

const Contact = () => {
  return <h1>Contact</h1>;
};
