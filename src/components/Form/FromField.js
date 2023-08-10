import SelectOptions from './SelectOptions';

export default function FromField({ from, dispatch }) {
  return (
    <div>
      <label>From</label>
      <select
        className="field"
        value={from}
        onChange={e => dispatch({ type: 'setFrom', payload: e.target.value })}
      >
        <SelectOptions />
      </select>
    </div>
  );
}
