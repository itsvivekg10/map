export const getRoute = async (start, end) => {
  const res = await fetch(`https://api.openrouteservice.org/v2/directions/foot-walking?api_key=YOUR_KEY&start=${start}&end=${end}`);
  const data = await res.json();
  return data.features[0].geometry.coordinates;
};
