import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "@/hooks/appHooks";
import {
  setSearchValue,
  setCurrentPage as setPage,
} from "@/redux/movies/slice";

interface IProps {
  search: string;
  setIsActive: (arg: boolean) => void;
  setSearch: (arg: string) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const CustomizedInputBase: React.FC<IProps> = ({
  search,
  setIsActive,
  setSearch,
  setCurrentPage,
}) => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    setIsActive(true);
    setCurrentPage(1);
    dispatch(setPage(1));
    dispatch(setSearchValue(search));
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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setIsActive(true);
            setCurrentPage(1);
            dispatch(setPage(1));
            dispatch(setSearchValue(search));
          }
        }}
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
