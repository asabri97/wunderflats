import React, { useState, useEffect, useRef, useCallback } from "react";
import Listing from "./components/Listing";
import ErrorMessage from "./components/ErrorMessage";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollPosition = useRef(0);

  const fetchListings = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://wunderflats-frontend-challenge-api.glitch.me/listings"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      setListings(data.listings);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchListings();

    const handleScroll = () => {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition > lastScrollPosition.current) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      lastScrollPosition.current = Math.max(currentScrollPosition, 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchListings]);

  return (
    <div className="App">
      <header className={`App-header ${headerVisible ? "" : "hidden"}`}>
        <div className="header-content">
          <img
            src={`${process.env.PUBLIC_URL}/wunderflats_logo.svg`}
            alt="Wunderflats Logo"
            className="logo"
          />
          <div className="profile-circle">A</div>
        </div>
      </header>
      {loading && <Loading />}
      {error && <ErrorMessage onRetry={fetchListings} />}
      {!loading && !error && (
        <div className="content">
          <h1>Homes in Berlin</h1>
          <p>More than 200 homes found</p>
          <button onClick={fetchListings}>Reload results</button>
          <div className="listings">
            {listings.map((listing) => (
              <Listing key={listing._id} listing={listing} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
