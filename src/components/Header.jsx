import reactImage from "../assets/react-core-concepts.png";
const reactDescription = ["Fundemental", "Crucial", "Core"];

export function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description =
    reactDescription[genRandomInt(reactDescription.length - 1)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>My React Essentials App</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
