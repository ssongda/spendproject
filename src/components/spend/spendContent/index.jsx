import { useGetSpend } from '../hooks/useGetSpend';
import './index.css';
import SpendForm from './spendForm';
import SpendList from './spendList';
import DailyTotal from './spendTotal';
import { useEffect, useState } from 'react';

function SpendContent({ selectedDate }) {

    const indexArray = selectedDate.toLocaleDateString();
    const [spendContent, setSpendContent] = useState([])
    const { selectedSpend, handleInsertItem } = useGetSpend({ selectedDate });


    useEffect(() => {
        const savedContent = localStorage.getItem('key', JSON.stringify(spendContent));
        if (savedContent) {
            setSpendContent(JSON.parse(savedContent));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('key', JSON.stringify(spendContent));
    }, [spendContent]);

    console.log(selectedSpend)

    return (
        <div className="spendContent" >
            <SpendForm selectedDate={selectedDate} onInsertItem={handleInsertItem} />
            <SpendList selectedDate={selectedDate} spendContent={selectedSpend} setSpendContent={setSpendContent} />
            <DailyTotal spendContent={spendContent} />
        </div>)


}

export default SpendContent;