import '../index.css';
import SpendButton from './SpendButton';
import SpendInput from './SpendInput';
import SpendType from './SpendType';

function SpendForm({ selectedDate, onInsertItem }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        onInsertItem({ selectedDate, type: e.target[0].value, amount: e.target[1].value });
    }

    return (
        <div className="spendForm">
            <form onSubmit={handleSubmit}>
                <SpendType />
                <SpendInput />
                <SpendButton />
            </form>
        </div>


    );
}

export default SpendForm;