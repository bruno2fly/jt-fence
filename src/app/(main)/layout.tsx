import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <StickyCallButton />
    </>
  );
}
