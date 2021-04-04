import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default (shouldTrack, callback) => {
  const [error, setError] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  useEffect(() => {
    const startWatching = async () => {
      setError(null);
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setError("Please enable location services");
        return;
      }
      const sub = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
      setSubscriber(sub);
    };
    
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }

    return () => {
      subscriber && subscriber.remove();
    };
  }, [shouldTrack, callback]);

  

  return [error];
};
