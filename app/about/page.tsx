import Image from "next/image";
import PageHeader from "../components/PageHeader";
import { ClientTeam } from "../components/Team";

export default function About() {
  return (
    <main>
      <PageHeader
        headerImage="/images/topbanner.jpeg"
        headerSubTitle="know all about us"
        headerTitle="About Us"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 px-7.5">
        <div className="w-full h-full relative">
          <div className="relative h-96 mb-8">
            <Image
              src="/images/wedding-planner.jpg"
              alt="About Us"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-xl !font-cormorant !text-gold tracking-wider italic">
              Big or Small, We Plan It All !
            </h2>
          </div>
        </div>
        <div className="w-full h-full">
          <h2 className="tracking-wider uppercase text-xl mb-4">Our Story</h2>
          <h3 className="text-xl !font-cormorant !text-gold tracking-wider italic">
            We would love to meet up and chat about how we can make your dream
            wedding happen!
          </h3>
          <p className="text-gray-600 mt-4">
            The Perfect Date is a premier event management company dedicated to
            crafting unforgettable experiences for every milestone. With
            extensive expertise in planning and managing a diverse range of
            events—from opulent weddings, corporate galas, and receptions to
            intimate birthday celebrations, proposals, and ring ceremonies—we
            bring modern elegance together with traditional Indian charm. Our
            team of seasoned professionals collaborates closely with clients,
            ensuring every detail is meticulously planned and flawlessly
            executed, making your dream event a reality.</p>
          <p className="text-gray-600 mt-4"> At The Perfect Date, we
            believe every celebration is a unique story waiting to be told. Our
            personalized approach, innovative design concepts, and in-depth
            understanding of India’s rich cultural tapestry enable us to create
            events that not only meet but exceed expectations. Whether you’re
            envisioning a grand festival or an intimate gathering, our
            commitment to excellence, creativity, and impeccable service ensures
            that each event is a perfect reflection of your vision and style.
          </p>
        </div>
      </div>
      <ClientTeam />
    </main>
  );
}
