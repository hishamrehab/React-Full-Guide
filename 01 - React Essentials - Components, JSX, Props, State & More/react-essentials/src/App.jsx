import { useState } from "react";
import { CORE_CONCEPTS } from './data';
import Header from './components/header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';


function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');
 
  
    function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log("Selected Topic:", selectedTopic);
    } 
 
  console.log("APP COMPONENT RENDERED");

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
        <h2>Time to get started!</h2>
          <CoreConcept 
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
        
         <CoreConcept 
           {...CORE_CONCEPTS[0]}
          />   
         
          <CoreConcept 
           {...CORE_CONCEPTS[1]}
          />   

           <CoreConcept 
           {...CORE_CONCEPTS[2]}
          />   
           <CoreConcept 
           {...CORE_CONCEPTS[3]}
          />   
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
              <TabButton onSelect={
                () =>handleSelect('components')
              }>
                Components
              </TabButton>
               <TabButton onSelect={() => handleSelect('jsx')}>
                JSX
              </TabButton>
              <TabButton onSelect={() => handleSelect('props')}>
                Props
              </TabButton>
              <TabButton onSelect={() => handleSelect('state')}>
                State
              </TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;