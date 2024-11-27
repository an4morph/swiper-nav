import { slides } from '@/components/slides';
import SwiperWithRoutes from '../../components/SwiperWithRoutes';

export default function Page1() {
  return (
    <div>
      <SwiperWithRoutes slides={slides} />
    </div>
  );
}
