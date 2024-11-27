import SwiperWithRoutes from '../../components/SwiperWithRoutes';
import { slides } from '@/components/slides';

export default function Page3() {
  return (
    <div>
      <SwiperWithRoutes slides={slides} />
    </div>
  );
}
