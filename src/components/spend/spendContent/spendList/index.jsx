import '../index.css';

function SpendList({ selectedDate, spendContent, handleDeleteItem }) {
    const formattedDate = selectedDate
        .toLocaleDateString()
        .split('/')
        .map((item) => item.padStart(2, '0'))
        .join('');

    const handleClick = (spendId) => {
        handleDeleteItem(selectedDate, spendId);
    };

    return (
        <div className="spendList">
            <table>
                <thead className="contentTag">
                    <tr>
                        <th className='contentTh'>支出項目</th>
                        <th className='contentTh'>支出額</th>
                        {/* <th className='contentTh'>操作</th> */}
                    </tr>
                </thead>
                <tbody className="content">
                    {
                        spendContent[formattedDate] ? spendContent[formattedDate].map((item) => (
                            <tr key={item.id}>
                                <td className="contentTd">{item.type}</td>
                                <td className="contentTd">{item.amount}</td>
                                <td>
                                    <button
                                        className="contentDeleteBtn"
                                        onClick={() => handleClick(item.id)}
                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        )) : <tr><td colSpan="3" className="nothing">Nothing</td></tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default SpendList;
