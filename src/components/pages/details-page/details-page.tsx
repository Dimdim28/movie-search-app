import { useAppDispatch, useAppSelector } from "@/hooks/appHooks";
import { fetchDetails } from "@/redux/details/asyncActions";
import { selectDetails } from "@/redux/details/selectors";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const DetailsPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const details = useAppSelector(selectDetails);
  const { asPath, isReady } = router;

  useEffect(() => {
    if (isReady) {
      dispatch(fetchDetails({ id: asPath.replace("/details/", "") }));
    }
  }, [asPath]);

  return <div></div>;
};

export default DetailsPage;
