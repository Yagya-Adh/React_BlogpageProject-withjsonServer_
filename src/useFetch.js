import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          // now we can update setBlogs() by passing data  from jsonserver as below.
          setData(data);
          setIsPading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          }
          // console.log(err.message);
          setIsPading(false);
          setError(err.message);
        });
    }, 1000);

    return () => {
      abortCont.abort();
    };
  }, [url]);

  // useEffect dependencies  as syntax::  useEffect(function , [dependencies])

  return { data, isPending, error };
};

export default useFetch;
