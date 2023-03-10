import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

interface IProps {
  search: string;
  setIsActive: (arg: boolean) => void;
  setSearch: (arg: string) => void;
}

const CustomizedInputBase: React.FC<IProps> = ({
  search,
  setIsActive,
  setSearch,
}) => {
  const onClick = () => {
    setIsActive(true);
  };

  const onChange = React.useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) =>
      setSearch(target.value),
    [setSearch]
  );

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Your Movie"
        value={search}
        onChange={onChange}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={onClick}
        disabled={search === ""}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default CustomizedInputBase;
