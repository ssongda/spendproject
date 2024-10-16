import '../index.css';


function SpendList({ selectedDate, spendContent, setSpendContent }) {

    const formattedDate = selectedDate
        .toLocaleDateString()
        .split('/')
        .map((item) => item.padStart(2, '0'))
        .join('');

    console.log(spendContent)
    console.log(spendContent[formattedDate])

    const handleClick = (spendId) => {

        setSpendContent((prevContent) => {
            const dateSpend = prevContent[formattedDate] || [];
            const filteredSpend = dateSpend.filter(item => item.id !== spendId);

            console.log(filteredSpend)
            return {
                ...prevContent,
                [formattedDate]: filteredSpend,
            };
        });
    }

    return (
        <div className="spendList">

            <table>
                <thead className="contentTag">
                    <tr>
                        <th className='contentTh'>支出項目</th>
                        <th className='contentTh'>支出額</th>
                    </tr>
                </thead>
                <tbody className="content">
                    {
                        spendContent[formattedDate] ? spendContent[formattedDate].map((item, index) => (
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
                        )) : null


                    }
                </tbody>
            </table>
            {spendContent.length === 0 &&
                <div className="nothing">Nothing</div>
            }

        </div>


    );
}

export default SpendList;