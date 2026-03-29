/**
 * animalImageService.js
 * 
 * Provides a simple, extensible interface for fetching cute animal images
 * from various free public APIs.
 * 
 * Currently supports: "dog" provider
 * Can be extended to add other providers (cat, bunny, etc.)
 */

const providers = {
  dog: {
    endpoint: "https://dog.ceo/api/breeds/image/random",
    normalize: (data) => ({
      imageUrl: data.message,
      alt: "A cute dog image",
    }),
  },
};

/**
 * Fetch a random animal image from the specified provider.
 * 
 * @param {string} provider - Provider name (e.g., "dog"). Defaults to "dog".
 * @returns {Promise<{imageUrl: string, alt: string}>} Normalized image data
 * @throws {Error} If the provider is unknown or the API call fails
 */
export const getRandomAnimalImage = async (provider = "dog") => {
  if (!providers[provider]) {
    throw new Error(`Unknown provider: "${provider}". Available: ${Object.keys(providers).join(", ")}`);
  }

  const config = providers[provider];

  try {
    const response = await fetch(config.endpoint);
    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }
    const data = await response.json();
    return config.normalize(data);
  } catch (error) {
    throw new Error(`Failed to fetch image from ${provider}: ${error.message}`);
  }
};

export default getRandomAnimalImage;
