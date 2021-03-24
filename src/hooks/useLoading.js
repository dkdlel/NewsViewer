import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { finishLoading, startLoading } from "../store/loading";

const useLoading = () => {
    const reduxDispatch = useDispatch();
    const onLoading = useCallback((type) => reduxDispatch(startLoading(type)), [reduxDispatch]);
    const offLoading = useCallback((type) => reduxDispatch(finishLoading(type)), [reduxDispatch]);
    return [onLoading, offLoading];
};

export default useLoading;