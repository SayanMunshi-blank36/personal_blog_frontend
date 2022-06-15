import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps, categories }) {
  return (
    <>
      <Header categories={categories} />
      <Component {...pageProps} />
      <div className="mx-auto w-11/12 lg:w-[58rem]">
        <hr className="w-full border-none h-[1px] text-primary bg-primary mb-8" />
      </div>
      <Footer />
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  let json;
  let headers = {
    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
  };
  try {
    const res = await fetch(`${process.env.API_URL}api/categories?populate=*`, {
      headers: headers,
    });
    json = await res.json();
  } catch (error) {
    throw new Error(error);
  }
  return { categories: json.data };
};

export default MyApp;
