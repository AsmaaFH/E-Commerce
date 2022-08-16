import Product from '../components/Product';

const index = ({ products }) => {
  return (
    <>
      <main className="container products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </main>
    </>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return {
    props: { products },
  };
}
