import SelectOptions from './SelectOptions';

export default function ToField({ to, dispatch }) {
  return (
    <div>
      <label>To</label>
      <select
        className="field"
        value={to}
        onChange={e => dispatch({ type: 'setTo', payload: e.target.value })}
      >
        <SelectOptions />
      </select>
    </div>
  );
}
