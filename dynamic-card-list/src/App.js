import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

function App() {
  const cardInfo = [
    {
      text: " This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    },
    {
      text: "Only a flower with true roots, nurtured by a loving mother earth may bloom, for only then can they drink from the rain. To admire the bloom and ignore the need for roots is to accept the death of all flowers, to walk into a world where flowers are only paper-thin works of paint and easel.      ",
    },
    {
      text: "The flowers came as dreams of the earth that were born into reality come the spring light",
    },
    {
      text: "The flowers were a dancing rainbow, as if light and music had found a new way to blossom together.",
    },
    {
      text: " This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    },
    {
      text: "Where once were lawns, wild flowers grow - rainbow freckles to adorn the green. It started out as free honey when folks converted their grass to native species, anything to help the bees... but then it became a trend, a really good one",
    },
    {
      text: "Where once were lawns, wild flowers grow - rainbow freckles to adorn the green. It started out as free honey when folks converted their grass to native species, anything to help the bees... but then it became a trend, a really good one",
    },
    {
      text: "Where once were lawns, wild flowers grow - rainbow freckles to adorn the green. It started out as free honey when folks converted their grass to native species, anything to help the bees... but then it became a trend, a really good one",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>cardInfo.text</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
}

export default App;
