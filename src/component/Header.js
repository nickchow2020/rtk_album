import { PageHeader } from "antd";
import HeaderSearch from "./HeaderSearchForm";

const Header = () => {
  return (
    <PageHeader
      style={{
        backgroundColor: "rgba(255,99,71,.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "5rem",
      }}
    >
      <HeaderSearch />
    </PageHeader>
  );
};

export default Header;
