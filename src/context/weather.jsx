import React, { createContext, useContext, useState, useMemo, useCallback } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
    const [data, setData] = useState(undefined);
    const [searchCity, setSearchCity] = useState(undefined);
    const [locationFetched, setLocationFetched] = useState(false);

    const fetchData = useCallback(async () => {
        const response = await getWeatherDataForCity(searchCity);
        setData(response);
    }, [searchCity]);

    const fetchCurrentUserLocationData = useCallback(() => {
        if (locationFetched) return;

        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            getWeatherDataForLocation(latitude, longitude).then((data) => {
                setData(data);
                setLocationFetched(true);
            });
        });
    }, [locationFetched]);

    const contextValue = useMemo(() => ({
        searchCity,
        data,
        setSearchCity,
        fetchData,
        fetchCurrentUserLocationData
    }), [searchCity, data, fetchData, fetchCurrentUserLocationData]);

    return (
        <WeatherContext.Provider value={contextValue}>
            {props.children}
        </WeatherContext.Provider>
    );
};
