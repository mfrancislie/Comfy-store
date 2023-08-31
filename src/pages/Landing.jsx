/* eslint-disable react-refresh/only-export-components */
import { Hero } from '../components';
import { customFetch } from '../utils/customFetch';

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
    </div>
  );
};
export default Landing;
