import React, { useState, useEffect, useCallback } from "react";
import { getRandomAnimalImage } from "./animalImageService";
import "./AnimalImageCard.css";

/**
 * AnimalImageCard
 * 
 * A reusable component that fetches and displays cute animal images.
 * 
 * Features:
 * - Fetches one image on mount
 * - Fetches a new image when clicked or on Enter/Space key
 * - Shows a loading skeleton during initial load
 * - Shows a subtle transition state when refreshing
 * - Handles API errors gracefully with a retry button
 * - Accessible: keyboard navigation, meaningful alt text, aria-busy state
 * 
 * Props:
 * - provider: string (optional, default "dog") - which API provider to use
 * - className: string (optional) - additional CSS classes for the card
 */
function AnimalImageCard({ provider = "dog", className = "" }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [altText, setAltText] = useState("Cute animal image");
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Fetch an animal image.
   * If isRefresh is true, we're replacing an existing image (lighter loading state).
   * If false, it's the first load (show skeleton).
   * 
   * useCallback ensures this function is memoized and only changes when provider changes.
   */
  const fetchImage = useCallback(
    async (isRefresh = false) => {
      try {
        if (isRefresh) {
          setIsRefreshing(true);
        }
        setError(null);

        const { imageUrl: url, alt } = await getRandomAnimalImage(provider);
        setImageUrl(url);
        setAltText(alt);
      } catch (err) {
        setError(err.message || "Failed to load image. Please try again.");
        console.error("AnimalImageCard error:", err);
      } finally {
        if (isRefresh) {
          setIsRefreshing(false);
        } else {
          setIsInitialLoading(false);
        }
      }
    },
    [provider]
  );

  /**
   * Fetch the initial image on component mount.
   * Dependencies: [fetchImage] ensures we refetch if provider changes.
   * fetchImage is memoized via useCallback, so it only changes when provider changes.
   */
  useEffect(() => {
    fetchImage(false);
  }, [fetchImage]);

  /**
   * Handle click or keyboard (Enter/Space) to fetch the next image.
   */
  const handleRefresh = (e) => {
    if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") {
      return;
    }
    if (e.type === "keydown") {
      e.preventDefault();
    }
    fetchImage(true);
  };

  return (
    <div className={`animal-image-card ${className}`}>

      {/* Loading Skeleton */}
      {isInitialLoading && (
        <div className="animal-image-card__skeleton">
          <div className="skeleton-shimmer"></div>
          <p className="animal-image-card__loading-text">Loading something cute...</p>
        </div>
      )}

      {/* Error State */}
      {error && !isInitialLoading && (
        <div className="animal-image-card__error">
          <p>{error}</p>
          <button
            className="animal-image-card__retry-button"
            onClick={() => fetchImage(true)}
          >
            Retry
          </button>
        </div>
      )}

      {/* Image Container (shown only when we have a URL and not in initial loading) */}
      {imageUrl && !isInitialLoading && (
        <div
          className={`animal-image-card__image-wrapper ${isRefreshing ? "refreshing" : ""}`}
          onClick={handleRefresh}
          onKeyDown={handleRefresh}
          tabIndex={0}
          role="button"
          aria-busy={isRefreshing}
          aria-label={`Animal image: ${altText}. Press Enter or click to load another image.`}
        >
          <img
            src={imageUrl}
            alt={altText}
            className="animal-image-card__image"
          />
          {!isRefreshing && (
            <div className="animal-image-card__overlay">
              <span className="animal-image-card__hint">Click for another</span>
            </div>
          )}
          {isRefreshing && (
            <div className="animal-image-card__refresh-indicator">
              <div className="spinner"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AnimalImageCard;
