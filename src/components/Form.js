export default function Form({ amount, setAmount, setFrom, setTo, from, to }) {
  return (
    <form className="form">
      <div>
        <label>Amount</label>
        <input
          type="number"
          min={0}
          value={amount}
          onChange={e => setAmount(+e.target.value.slice(0, 12))}
          className="field"
        />
      </div>

      <div>
        <label>From</label>
        <select
          className="field"
          value={from}
          onChange={e => setFrom(e.target.value)}
        >
          <option value="AUD">Australian Dollar</option>
          <option value="BGN">Bulgarian Lev</option>
          <option value="BRL">Brazilian Real</option>
          <option value="CAD">Canadian Dollar</option>
          <option value="CHF">Swiss Franc</option>
          <option value="CNY">Chinese Renminbi Yuan</option>
          <option value="CZK">Czech Koruna</option>
          <option value="DKK">Danish Krone</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Pound</option>
          <option value="HKD">Hong Kong Dollar</option>
          <option value="HUF">Hungarian Forint</option>
          <option value="IDR">Indonesian Rupiah</option>
          <option value="ILS">Israeli New Sheqel</option>
          <option value="INR">Indian Rupee</option>
          <option value="ISK">Icelandic Króna</option>
          <option value="JPY">Japanese Yen</option>
          <option value="KRW">South Korean Won</option>
          <option value="MXN">Mexican Peso</option>
          <option value="MYR">Malaysian Ringgit</option>
          <option value="NOK">Norwegian Krone</option>
          <option value="NZD">New Zealand Dollar</option>
          <option value="PHP">Philippine Peso</option>
          <option value="PLN">Polish Złoty</option>
          <option value="RON">Romanian Leu</option>
          <option value="SEK">Swedish Krona</option>
          <option value="SGD">Singapore Dollar</option>
          <option value="THB">Thai Baht</option>
          <option value="TRY">Turkish Lira</option>
          <option value="USD">United States Dollar</option>
          <option value="ZAR">South African Rand</option>
        </select>
      </div>
      <div>
        <label>To</label>
        <select
          className="field"
          value={to}
          onChange={e => setTo(e.target.value)}
        >
          <option value="AUD">Australian Dollar</option>
          <option value="BGN">Bulgarian Lev</option>
          <option value="BRL">Brazilian Real</option>
          <option value="CAD">Canadian Dollar</option>
          <option value="CHF">Swiss Franc</option>
          <option value="CNY">Chinese Renminbi Yuan</option>
          <option value="CZK">Czech Koruna</option>
          <option value="DKK">Danish Krone</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Pound</option>
          <option value="HKD">Hong Kong Dollar</option>
          <option value="HUF">Hungarian Forint</option>
          <option value="IDR">Indonesian Rupiah</option>
          <option value="ILS">Israeli New Sheqel</option>
          <option value="INR">Indian Rupee</option>
          <option value="ISK">Icelandic Króna</option>
          <option value="JPY">Japanese Yen</option>
          <option value="KRW">South Korean Won</option>
          <option value="MXN">Mexican Peso</option>
          <option value="MYR">Malaysian Ringgit</option>
          <option value="NOK">Norwegian Krone</option>
          <option value="NZD">New Zealand Dollar</option>
          <option value="PHP">Philippine Peso</option>
          <option value="PLN">Polish Złoty</option>
          <option value="RON">Romanian Leu</option>
          <option value="SEK">Swedish Krona</option>
          <option value="SGD">Singapore Dollar</option>
          <option value="THB">Thai Baht</option>
          <option value="TRY">Turkish Lira</option>
          <option value="USD">United States Dollar</option>
          <option value="ZAR">South African Rand</option>
        </select>
      </div>
    </form>
  );
}
