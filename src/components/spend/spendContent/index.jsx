import { useGetSpend } from '../hooks/useGetSpend';
import './index.css';
import SpendForm from './spendForm';
import SpendList from './spendList';
import DailyTotal from './spendTotal';
import { useEffect, useState } from 'react';

function SpendContent({ selectedDate }) {
    const { selectedSpend, handleInsertItem, handleDeleteItem } = useGetSpend({ selectedDate });
    const [spendContent, setSpendContent] = useState({});

    // 로컬 스토리지에서 데이터 불러오기
    useEffect(() => {
        const savedContent = localStorage.getItem('spend');
        if (savedContent) {
            setSpendContent(JSON.parse(savedContent));
        }
    }, []);

    // 상태가 변경될 때마다 로컬 스토리지에 저장
    useEffect(() => {
        localStorage.setItem('spend', JSON.stringify(spendContent));
    }, [spendContent]);

    // selectedSpend가 변경될 때 spendContent 업데이트
    useEffect(() => {
        setSpendContent(selectedSpend);
    }, [selectedSpend]);

    return (
        <div className="spendContent">
            <SpendForm selectedDate={selectedDate} onInsertItem={handleInsertItem} />
            <SpendList
                selectedDate={selectedDate}
                spendContent={spendContent}
                handleDeleteItem={handleDeleteItem} // 삭제 핸들러 전달
            />
            <DailyTotal selectedDate={selectedDate} spendContent={spendContent} />
        </div>
    );
}

export default SpendContent;
