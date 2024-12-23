import reactImage from '../../assets/react-core-concepts.png';
import './Header.css';

export const Header = () => {
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

  function genRandomInt(max: number) {
    return Math.floor(Math.random() * (max + 1));
  }
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}