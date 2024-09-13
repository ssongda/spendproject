import { useCallback, useEffect, useState } from "react";

export const useGetSpend = ({ selectedDate }) => {
    const [obj, setObj] = useState({});


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
        const test = localStorage.getItem('test');
        const formattedDate = selectedDate
            .toLocaleDateString()
            .split('/')
            .map((item) => item.padStart(2, '0'))
            .join('');

        //songdasongda
        //locallocal
        //hey
        //MASTER SAYS!!!

        if (test) {
            setObj(JSON.parse(test));
        }

        if (!selectedDate) return;

        setObj((prevObj) => ({
            ...prevObj,
            ...{ ...prevObj, [formattedDate]: [] },
        }));
    }, [selectedDate]);

    useEffect(() => {
        localStorage.setItem('key', JSON.stringify(obj));
    }, [obj]);

    return {
        selectedSpend: obj,
        handleInsertItem
    };
};


