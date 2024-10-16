import { useCallback, useEffect, useState } from "react";

export const useGetSpend = ({ selectedDate }) => {
    const [obj, setObj] = useState({});

    console.log(obj);


    const handleInsertItem = useCallback(({ selectedDate, type, amount }) => {

        const date = selectedDate
            .toLocaleDateString()
            .split('/')
            .map((item) => item.padStart(2, '0'))
            .join('');

        setObj((prevObj) => ({
            ...prevObj,
            [date]: [
                ...(prevObj[date] || []),
                { id: Date.now(), type, amount }
            ]
        }));
    }, []);

    useEffect(() => {
        const test = localStorage.getItem('spend');
        const formattedDate = selectedDate
            .toLocaleDateString()
            .split('/')
            .map((item) => item.padStart(2, '0'))
            .join('');

        if (test) {
            setObj(JSON.parse(test));
        }

        if (!selectedDate) return;

        setObj((prevObj) => ({
            ...prevObj,
            [formattedDate]: prevObj[formattedDate] || [],
        }));
    }, [selectedDate]);

    useEffect(() => {
        localStorage.setItem('spend', JSON.stringify(obj));
    }, [obj]);

    return {
        selectedSpend: obj,
        handleInsertItem
    };
};


