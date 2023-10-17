
import Home from "./components/HomeNew/Home";

export const revalidate = 3600

// http://localhost:8000/api/v1/get-layout/Banner
const Page = async () => {
  const pmBanner = fetch('http://localhost:8000/api/v1/get-layout/Banner', {})
  const pmCategory = fetch('http://localhost:8000/api/v1/get-layout/Categories', {})
  const [resBanner, resCategory] = await Promise.all([pmBanner, pmCategory])
  const banner = await resBanner.json()
  const category = await resCategory.json()


  const webInfo = {
    banner: banner?.layout?.banner || {},
    category: category?.layout?.categories || []
  }
  console.log("🚀 ~ file: page.tsx:17 ~ Page ~ webInfo:", webInfo)

  return (
    <Home webInfo={webInfo} />
  );
};

export default Page;
