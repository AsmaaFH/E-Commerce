import { useRouter } from 'next/router';
const productDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>{id}</div>;
};

export default productDetails;
