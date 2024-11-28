import { useState } from "react";
import { TabButton } from "./TabButton";
import { EXAMPLES } from "../Data/data";
import { Section } from "./Section";
import { Tabs } from "./Tabs";

export const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState<string | null | undefined>(null)

  const handleSelection = (tab: string) => {
    setSelectedTopic(tab);
  }
    return (
        <Section title="Examples" id="examples">
          <Tabs
            buttons={
              <>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelection('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelection('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelection('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelection('state')}>State</TabButton>
              </>
            } 
          >
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
          </Tabs>
        </Section>
    )
}