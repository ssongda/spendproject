import { useCallback, useEffect, useState } from "react";

export const useGetSpend = ({ selectedDate }) => {
    const [obj, setObj] = useState({});

    const handleInsertItem = useCallback(({ selectedDate, type, amount }) => {
        const date = selectedDate
            .toLocaleDateString()
            .split('/')
            .map((item) => item.padStart(2, '0'))
            .join('');

        const newItem = { id: Date.now(), type, amount };

        setObj((prevObj) => {
            const updatedObj = {
                ...prevObj,
                [date]: [...(prevObj[date] || []), newItem],
            };
            localStorage.setItem('spend', JSON.stringify(updatedObj));
            return updatedObj;
        });
    }, []);

    useEffect(() => {
        const storedData = localStorage.getItem('spend');
        if (storedData) {
            setObj(JSON.parse(storedData));
        }
    }, []);

    const handleDeleteItem = useCallback((selectedDate, spendId) => {
        const date = selectedDate
            .toLocaleDateString()
            .split('/')
            .map((item) => item.padStart(2, '0'))
            .join('');

        setObj(prevObj => {
            const dateSpend = prevObj[date] || [];
            const filteredSpend = dateSpend.filter(item => item.id !== spendId);

            const updatedObj = {
                ...prevObj,
                [date]: filteredSpend.length > 0 ? filteredSpend : undefined,
            };
            localStorage.setItem('spend', JSON.stringify(updatedObj));
            return updatedObj;
        });
    }, []);

    return {
        selectedSpend: obj,
        handleInsertItem,
        handleDeleteItem,
    };
};
