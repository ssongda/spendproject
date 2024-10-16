import { useGetSpend } from '../hooks/useGetSpend';
import './index.css';
import SpendForm from './spendForm';
import SpendList from './spendList';
import DailyTotal from './spendTotal';
import { useEffect, useState } from 'react';

function SpendContent({ selectedDate }) {
    const { selectedSpend, handleInsertItem, handleDeleteItem } = useGetSpend({ selectedDate });
    const [spendContent, setSpendContent] = useState({});

    useEffect(() => {
        const savedContent = localStorage.getItem('spend');
        if (savedContent) {
            setSpendContent(JSON.parse(savedContent));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('spend', JSON.stringify(spendContent));
    }, [spendContent]);

    useEffect(() => {
        setSpendContent(selectedSpend);
    }, [selectedSpend]);

    return (
        <div className="spendContent">
            <SpendForm selectedDate={selectedDate} onInsertItem={handleInsertItem} />
            <SpendList
                selectedDate={selectedDate}
                spendContent={spendContent}
                handleDeleteItem={handleDeleteItem}
            />
            <DailyTotal selectedDate={selectedDate} spendContent={spendContent} />
        </div>
    );
}

export default SpendContent;
