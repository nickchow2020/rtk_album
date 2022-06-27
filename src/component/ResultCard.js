import { Card } from "antd";
const { Meta } = Card;

const App = ({ title, imageURL, description }) => (
  <Card
    hoverable
    style={{
      width: 200,
      marginBottom: 20,
      marginRight: 10,
    }}
    cover={<img alt="example" src={imageURL} />}
  >
    <Meta title={title} description={description} />
  </Card>
);

export default App;
