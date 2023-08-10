export default function FormInput({ amount, dispatch }) {
  return (
    <div>
      <label>Amount</label>
      <input
        type="number"
        min={1}
        max={999000000000}
        value={amount}
        onChange={e =>
          dispatch({
            type: 'setAmount',
            payload: +e.target.value.slice(0, 12),
          })
        }
        className="field"
      />
    </div>
  );
}
