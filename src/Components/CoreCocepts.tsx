import { CoreConcept } from './CoreConcept';
import { CORE_CONCEPTS } from '../Data/data';

export const CoreConcepts = () => {
    return (
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept: any) => {
              return (<CoreConcept key={concept.title} {...concept} />);
            })}
          </ul>
        </section>
    );
}
