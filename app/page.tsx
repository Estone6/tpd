import ClientHero from './components/Hero/ClientHero';
import ClientServices from './components/Services/ClientServices';
import ClientBlog from './components/Blog/ClientBlog';
import ClientClients from './components/Clients/ClientClients';
import Testimonials from './components/Testimonials/Testimonials';

export default function Home() {
  return (
    <main>
      <ClientHero />
      <ClientServices />
      <Testimonials />
      <ClientBlog />
      <ClientClients />
    </main>
  );
}
