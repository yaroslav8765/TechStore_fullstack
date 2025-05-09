import { useEffect, useState } from 'react'
import GoodsCard from './Components/GoodsCard'

function App() {
  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/goods/Smartphones")
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Error fetching product:", err));
  }, []);

  console.log(product);

  return ( 
    <>
    <div className='flex flex-wrap gap-4'>
      {product && product.map((noteItem, index) => {
          return (
            <div key={index}>
              <GoodsCard 
              img="https://pm1.aminoapps.com/7954/ed76c65c9eadc327e24b378f3b65aa4fa4fc2749r1-479-512v2_00.jpg"
              producName={noteItem.name}
              price={noteItem.price}
              rating={5}
              voted={10}
              />
            </div>
          );
          
        })}
    </div>
    </>
  )
}

export default App
