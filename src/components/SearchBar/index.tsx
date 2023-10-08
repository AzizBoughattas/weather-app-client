import { Input } from "antd";

interface ResponseProps {
  onSearchTemp: any;
}

const SearchBar = ({ onSearchTemp }: ResponseProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Input.Search
        style={{ width: "50%", padding: "10px", marginTop: 32 }}
        placeholder="Search By City"
        allowClear
        onSearch={onSearchTemp}
      />
    </div>
  );
};

export default SearchBar;
