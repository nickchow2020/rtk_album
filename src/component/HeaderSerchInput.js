import { Input, Space } from "antd";
import { useState } from "react";
import { getInitData } from "../features/getInitDataSlice";
import { useDispatch } from "react-redux";
const { Search } = Input;

const App = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (value) => {
    dispatch(getInitData(value));
    setValue("");
  };

  return (
    <Space direction="vertical">
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        value={value}
        onChange={handleChange}
        style={{ width: "50vw" }}
      />
    </Space>
  );
};

export default App;
