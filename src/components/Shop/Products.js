import ProductItem from './ProductItem';

const PRODUCT_LISTS = [
  { 
    id:'product1',
    title: "Coffee Mug",
    price: 20,
    description: "Coffee Mug for Coffe Lover"
  },
  { 
    id:'product2',
    title: "Tea Mug",
    price: 10,
    description: "Tea Mug for Tea Lover"
  },
  { 
    id:'product3',
    title: "Water Glass",
    price: 30,
    description: "WaterGlass for Water Lover"
  }
]
const  Products = (props) => {
  console.log(PRODUCT_LISTS);
  return (
    <section className='products'>
      <h2>Buy your favorite products</h2>
      <ul>
      {PRODUCT_LISTS.map((product) => (
        <ProductItem 
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
      </ul>
    </section>
  );
};

export default Products;
