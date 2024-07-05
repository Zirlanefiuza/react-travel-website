import ProductCard from "./studentCard/productCard/ProductCard";
import StudentCard from "./studentCard/StudentCard";

function App() {
  return (
    <>
      <header>
        <h1>REACT - Props e condicionais</h1>
      </header>
      <section>
        <StudentCard name="Zirlane Fiuza" grade={9} average={8.5} />
        <StudentCard name="Gustavo Fiuza" grade={5} average={4.0} />
      </section>
      <section>
        <ProductCard
          name="Ps5 Slim "
          unitPrice={4399}
          discount={14}
        />
        <ProductCard name="Controle" unitPrice={150} discount={0} />
      </section>
    </>
  );
}

export default App;
