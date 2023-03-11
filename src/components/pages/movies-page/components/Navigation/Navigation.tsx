import { useAppDispatch } from "@/hooks/appHooks";
import { setCurrentPage } from "@/redux/movies/slice";
import { Container } from "@mui/system";
import React, { useCallback } from "react";
import styles from "./Navigation.module.scss";
interface NavigationProps {
  current: number;
  total: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({
  current,
  total,
  setCurrent,
  setIsActive,
}) => {
  const dispatch = useAppDispatch();
  const setPage = useCallback(
    (page: number) => {
      setCurrent(page);
      setIsActive(true);
      dispatch(setCurrentPage(page));
    },
    [dispatch, setCurrent, setIsActive]
  );

  return (
    <Container>
      <div className={styles.wrapper}>
        <div
          className={current > 1 ? styles.button : styles.disabledButton}
          onClick={() => {
            const newNumber = --current;
            setPage(newNumber);
          }}
        >
          {"<"}
        </div>

        {current > 1 && (
          <div
            className={styles.button}
            onClick={() => {
              setPage(1);
            }}
          >
            {1}
          </div>
        )}

        <div className={styles.currentButton}> {current}</div>

        {current < total && (
          <div
            className={styles.button}
            onClick={() => {
              setPage(total);
            }}
          >
            {total}
          </div>
        )}

        <div
          className={current < total ? styles.button : styles.disabledButton}
          onClick={() => {
            const newNumber = ++current;
            setPage(newNumber);
          }}
        >
          {">"}
        </div>
      </div>
    </Container>
  );
};

export default Navigation;
