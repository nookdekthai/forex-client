
import  from "./components/HomeNew/Home";


export const metadata = {
  
  openGraph: {
    title: 'สอนเทรด ข่าวเเละเทคนิค Forex โดยอาจารย์เนส',
    description: 'สอนเทรดข่าวฟอเร็ก คอร์สเทรด Forex',
    url: 'https://forextradebycoachnet',
    
    siteName: 'CoachNest',
    images: [
      {
        url: 'https://www.startrader.com/th/wp-content/uploads/sites/3/2023/04/What-is-Forex-20230426.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'th-TH',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'สอนเทรด Forex โดยอาจารย์เนส',
    description: 'สอนเทรดข่าวฟอเร็ก คอร์สเทรด Forex',
    images: ['https://www.startrader.com/th/wp-content/uploads/sites/3/2023/04/What-is-Forex-20230426.jpg'],
  },
}


export const revalidate = 180

// http://localhost:8000/api/v1/get-layout/Banner
const Page = async () => {
  console.log('porcess env =>',process.env.NEXT_PUBLIC_SERVER_URI);
  
  const pmBanner = fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Banner`, {})
  const pmCategory = fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-layout/Categories`, {})
  const [resBanner, resCategory] = await Promise.all([pmBanner, pmCategory])
  const banner = await resBanner.json()
  const category = await resCategory.json()


  const webInfo = {
    banner: banner?.layout?.banner || {},
    category: category?.layout?.categories || []
  }

  return (
    <Home webInfo={webInfo} />
  );
};

export default Page;
