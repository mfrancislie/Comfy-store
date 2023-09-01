/* eslint-disable react-refresh/only-export-components */
import { Hero } from '../components';
import FeaturedProducts from '../components/FeaturedProducts';
import { customFetch } from '../utils';

const url = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(url);
  console.log(response);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};
export default Landing;
