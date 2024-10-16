import '../index.css';

function SpendType() {
    const spendTypes = ['食費', '交通費', 'レーザー費'];

    return (
        <>
            <select className="spendType">
                {spendTypes.map((item, key) =>
                    <option value={item} key={key}>{item}</option>
                )}
            </select>
        </>
    );
}

export default SpendType;