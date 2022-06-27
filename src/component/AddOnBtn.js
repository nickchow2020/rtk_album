import { Button } from "antd";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDefaultDisplay } from "../features/performSlice";

const App = () => {
  const [addOn, setAddOn] = useState(20);

  const { results } = useSelector((data) => data.init);

  const dispatch = useDispatch();

  useEffect(() => {
    const performData = results.slice(0, addOn);
    dispatch(getDefaultDisplay(performData));
  }, [addOn, dispatch, results]);

  const handleClick = () => {
    setAddOn(addOn + 10);
  };

  return (
    <>
      <Button onClick={handleClick} type="primary">
        Add More
      </Button>
    </>
  );
};

export default App;
