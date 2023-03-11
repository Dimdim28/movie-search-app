import { Container } from "@mui/system";
import React from "react";
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
  const next = (current: number) => {
    if (current < total) {
      setCurrent(++current);
      setIsActive(true);
    }
  };

  const prev = (current: number) => {
    if (current > 1) {
      setCurrent(--current);
      setIsActive(true);
    }
  };

  const setPage = (page: number) => {
    setCurrent(page);
    setIsActive(true);
  };
  return (
    <Container>
      <div className={styles.wrapper}>
        <div
          className={styles.button}
          onClick={() => {
            prev(current);
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
            1
          </div>
        )}
        {current > 2 && (
          <div
            className={styles.button}
            onClick={() => {
              setPage(2);
            }}
          >
            2
          </div>
        )}

        {total === current && (
          <div
            className={styles.button}
            onClick={() => {
              setPage(total - 4);
            }}
          >
            {total - 4}
          </div>
        )}

        {[total - 1, total].includes(current) && (
          <div
            className={styles.button}
            onClick={() => {
              setPage(total - 3);
            }}
          >
            {total - 3}
          </div>
        )}

        {[total - 2, total - 1, total].includes(current) && (
          <div
            className={styles.button}
            onClick={() => {
              setPage(total - 2);
            }}
          >
            {total - 2}
          </div>
        )}

        {current > 3 && (
          <div
            className={styles.button}
            onClick={() => {
              prev(current);
            }}
          >
            {current - 1}
          </div>
        )}
        <div className={styles.currentButton}> {current}</div>
        {current < total - 2 && (
          <div
            className={styles.button}
            onClick={() => {
              next(current);
            }}
          >
            {current + 1}
          </div>
        )}

        {[1, 2, 3].includes(current) && (
          <div
            className={styles.button}
            onClick={() => {
              setPage(current + 2);
            }}
          >
            {current + 2}
          </div>
        )}

        {[1, 2].includes(current) && (
          <div
            className={styles.button}
            onClick={() => {
              setPage(current + 3);
            }}
          >
            {current + 3}
          </div>
        )}

        {1 === current && (
          <div
            className={styles.button}
            onClick={() => {
              setPage(current + 4);
            }}
          >
            {current + 4}
          </div>
        )}

        {current < total - 1 && (
          <div
            className={styles.button}
            onClick={() => {
              setPage(total - 1);
            }}
          >
            {total - 1}
          </div>
        )}
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
          className={styles.button}
          onClick={() => {
            next(current);
          }}
        >
          {">"}
        </div>
      </div>
    </Container>
  );
};

export default Navigation;
