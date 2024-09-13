import '../index.css';

function SpendType() {
    const spendTypes = ['식비', '교통비', '오락비'];

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