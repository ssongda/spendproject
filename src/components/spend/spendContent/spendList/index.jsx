import { useEffect, useState } from 'react';
import '../index.css';


function SpendList({ selectedDate, spendContent, setSpendContent }) {


    const [formattedDate, setFormattedDate] = useState('')

    useEffect(() => {
        setFormattedDate(selectedDate
            .toLocaleDateString()
            .split('/')
            .map((item) => item.padStart(2, '0'))
            .join(''))
    }, [])


    const handleClick = (spendId) => {

        setSpendContent(spendContent.filter(filter => filter.id !== spendId))
    }

    return (
        <div className="spendList">

            <table>
                <thead className="contentTag">
                    <tr>
                        <th className='contentTh'>지출항목</th>
                        <th className='contentTh'>지출액</th>
                    </tr>
                </thead>
                <tbody className="content">
                    {
                        spendContent[formattedDate] ? spendContent[formattedDate].map((item, key) => (
                            <tr key={key}>
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