import { useState } from 'react';
import './App.css'
import { CoreConcepts } from './Components/Layout/CoreCocepts';
import { Header } from './Components/Layout/Header/Header';
import { TabButton } from './Components/Layout/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './Data/data';

const App = () => {

  const [selectedTopic, setSelectedTopic] = useState<string | null | undefined>(null)

  const handleSelection = (tab: string) => {
    setSelectedTopic(tab);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept: any) => {
              return (<CoreConcepts key={concept.title} {...concept} />);
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelection('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelection('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelection('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelection('state')}>State</TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic && <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>
              {EXAMPLES[selectedTopic].description}
            </p>
            <pre>
              {EXAMPLES[selectedTopic].code}
            </pre>
          </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
