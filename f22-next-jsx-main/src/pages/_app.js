import "@/styles/globals.css";

// Import Swiper styles
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Layouts from "@/layouts";

export default function App({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
