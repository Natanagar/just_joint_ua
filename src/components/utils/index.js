// fuction which we can serialize object
export const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};


// data from geolocation

export const Position = {
  lat: 49.98081,
  lng: 36.25272,
};
// REST & XYZ HUB API/CLI

export const Apikey = {
  id: 'YfwmqoRcneAJFYW59N2x',
  code: '-93RIEiqz9M1RqyfJIlONQ',
};
