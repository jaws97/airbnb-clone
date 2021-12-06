import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';

export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Arokia's Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Banner />

      <main className="max-w-5xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item,index)=>(
              <SmallCard img={item.img}
              key={index}
              distance={item.distance}
              location={item.location} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-x-scroll overflow-y-hidden scrollbar-hide
          p-3 -ml-3">
            {cardsData?.map((card)=>(
              <MediumCard key={card.img}
              img={card.img}
              title={card.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
    </div>
  )
}


export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp').
  then(res => res.json());

  const cardsData = await fetch("https://links.papareact.com/zp1").
  then((res)=> res.json());
  console.log(cardsData)
  return {
    props : {
      exploreData,
      cardsData
    } 
  }
}