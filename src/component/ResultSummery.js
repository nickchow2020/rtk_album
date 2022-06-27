import { Alert, Button } from "antd";

const App = ({ resultCount, reachKey }) => {
  return (
    <>
      <Alert
        style={{
          textAlign: "center",
          fontWeight: "bolder",
          marginBottom: "1.5rem",
        }}
        message={`search key "${reachKey}", found ${resultCount} results`}
        type="success"
        showIcon
        action={
          <Button size="small" type="text">
            Close
          </Button>
        }
        closable
      />
    </>
  );
};

export default App;
