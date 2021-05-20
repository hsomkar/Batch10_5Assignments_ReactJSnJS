import { Card } from "react-bootstrap";

function App() {
  const cardInfo = [
    {
      image:
        "https://media.istockphoto.com/photos/cherry-blossoms-white-background-picture-id1206367536?b=1&k=6&m=1206367536&s=170667a&w=0&h=fb_BrfhxmcDhHY0u1WghcAfu_1A6k2YSx2DrzafJSzI=",
      title: "rose",
      text: " This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    },
    {
      image:
        "https://media.istockphoto.com/photos/pink-cherry-blossom-sakura-tree-flowers-on-branches-in-foreground-in-picture-id1255043219?b=1&k=6&m=1255043219&s=170667a&w=0&h=e6baX2_Zx8wHP1tR9cTdSOcQqkZ1Jtbzqw_niAuL0o0=",
      title: "Lilly",
      text: "Only a flower with true roots, nurtured by a loving mother earth may bloom, for only then can they drink from the rain. To admire the bloom and ignore the need for roots is to accept the death of all flowers, to walk into a world where flowers are only paper-thin works of paint and easel.      ",
    },
    {
      image:
        "https://media.istockphoto.com/photos/pink-flowers-on-blue-wooden-background-picture-id1200525666?b=1&k=6&m=1200525666&s=170667a&w=0&h=AV7bn9BkmwSomp5tHgeqTvKcWTSObOYu86KNdPVTZpc=",
      title: "Jasmin",
      text: "The flowers came as dreams of the earth that were born into reality come the spring light",
    },
    {
      image:
        "https://media.istockphoto.com/photos/blooming-tree-in-spring-with-flowers-picture-id1131796091?b=1&k=6&m=1131796091&s=170667a&w=0&h=vtYCVzoJnYzCJFag4osHtPPeLIvR6QF4hIdRiEwaHY0=",
      title: "Sunflower",
      text: "The flowers were a dancing rainbow, as if light and music had found a new way to blossom together.",
    },
    {
      image:
        "https://media.istockphoto.com/photos/lovely-daisies-isolated-including-clipping-path-without-shade-picture-id1059625096?b=1&k=6&m=1059625096&s=170667a&w=0&h=_2CxCuuUGQGTGb90S76UsTt-TJMLWQXZGXe7FyOlXQo=",
      title: "Lilly",
      text: " This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    },
    {
      image:
        "https://media.istockphoto.com/photos/flora-of-gran-canaria-flowering-marguerite-daisy-picture-id1072462590?b=1&k=6&m=1072462590&s=170667a&w=0&h=w5ABpatogbWvu8UVF-Huoon8z8b8CnkLuSH3o_6KMcM=",
      title: "Alex Caruso",
      text: "Where once were lawns, wild flowers grow - rainbow freckles to adorn the green. It started out as free honey when folks converted their grass to native species, anything to help the bees... but then it became a trend, a really good one",
    },
    {
      image:
        "https://media.istockphoto.com/photos/flowers-composition-pattern-made-of-eucalyptus-branches-and-rose-on-picture-id1248549298?b=1&k=6&m=1248549298&s=170667a&w=0&h=pX9SiFucfu7rubfSpD03QO_Byru7nX2SlvUgzOeMQiQ=",
      title: "Steph Curry",
      text: "Where once were lawns, wild flowers grow - rainbow freckles to adorn the green. It started out as free honey when folks converted their grass to native species, anything to help the bees... but then it became a trend, a really good one",
    },
    {
      image:
        "https://media.istockphoto.com/photos/blooming-spring-lilac-flowers-on-a-white-wooden-background-picture-id1202671766?b=1&k=6&m=1202671766&s=170667a&w=0&h=lbJmF6g8IVTmAj5vM3gJQ-n6SYC5qQoQF0zxz94EsDw=",
      title: "Michael Jordan",
      text: "Where once were lawns, wild flowers grow - rainbow freckles to adorn the green. It started out as free honey when folks converted their grass to native species, anything to help the bees... but then it became a trend, a really good one",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
}

export default App;
