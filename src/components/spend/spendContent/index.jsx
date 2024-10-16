import { useGetSpend } from '../hooks/useGetSpend';
import './index.css';
import SpendForm from './spendForm';
import SpendList from './spendList';
import DailyTotal from './spendTotal';
import { useEffect, useState } from 'react';

function SpendContent({ selectedDate }) {

    const [spendContent, setSpendContent] = useState([])
    const { selectedSpend, handleInsertItem } = useGetSpend({ selectedDate });


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
        <div className="spendContent" >
            <SpendForm selectedDate={selectedDate} onInsertItem={handleInsertItem} />
            <SpendList selectedDate={selectedDate} spendContent={spendContent} setSpendContent={setSpendContent} />
            <DailyTotal selectedDate={selectedDate} spendContent={spendContent} />
        </div>)


}

export default SpendContent;