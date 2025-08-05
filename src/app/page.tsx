import Carousel from '@/components/Home/Carousel';
import CategoryCarousel from '@/components/Home/CategoryCarousel';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mb-8">
      <Carousel />
      <CategoryCarousel />
    </div>
  );
}
