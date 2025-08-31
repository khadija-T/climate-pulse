const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: "Chittagong", // Major city and district in Bangladesh
    latitude: 22.356851,
    longitude: 91.783182,
  },
  {
    location: "Sylhet", // District in Bangladesh known for tea gardens
    latitude: 24.894937,
    longitude: 91.868707,
  },
  {
    location: "Cox's Bazar", // Famous tourist spot in Bangladesh with the longest sea beach
    latitude: 21.4272,
    longitude: 92.0058,
  },
  {
    location: "Sundarbans", // UNESCO World Heritage Site and tourist spot in Bangladesh
    latitude: 21.9497,
    longitude: 89.1833,
  },
  {
    location: "Paris", // Famous country (France) capital
    latitude: 48.856614,
    longitude: 2.352222,
  },
  {
    location: "Tokyo", // Famous country (Japan) capital
    latitude: 35.6762,
    longitude: 139.6503,
  },
  {
    location: "Sydney", // Famous city and tourist spot in Australia
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    location: "Grand Canyon", // Famous tourist spot in the USA
    latitude: 36.1069,
    longitude: -112.1129,
  },
  {
    location: "Jaflong", // Tourist spot in Bangladesh known for its natural beauty
    latitude: 25.1436,
    longitude: 92.0094,
  },
  {
    location: "Sajek Valley", // Popular tourist spot in Bangladesh
    latitude: 23.3895,
    longitude: 92.3498,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const found = data.find(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );

  return found || {};
}

export { getLocationByName, getLocations };
