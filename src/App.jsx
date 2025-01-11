import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Template from './Components/Template';
import data from './Components/data';

function App() {
  const templateElements = data.map((template) => {
    return(
      <Template 
        key={template.id}
        {...template}
      />
    );
  });

  return (
    <>
      <Navbar />
      <main className="">
        {templateElements}
      </main>
      <Footer />
    </>
  );
}

export default App;
