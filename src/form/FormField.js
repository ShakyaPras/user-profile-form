import "./formField.css";

const FormField = ({ data, index, register }) => {
  const label = data.name.charAt(0).toUpperCase() + data.name.slice(1);
  switch (data.element) {
    case "INPUT":
      return (
        <div className="formRow" key={index}>
          <label htmlFor={data.name}>{label}</label>
          <input
            id={data.name}
            type={data.type}
            {...register(data.name, { required: true })}
          />
        </div>
      );

    case "SELECT":
      return (
        <div className="formRow" key={index}>
          <label htmlFor={data.name}>{label}</label>
          <select
            id={data.name}
            {...register(data.name, {
              required: true,
            })}
          >
            <option value={""}>{`Select ${data.name}`}</option>
            {Array.isArray(data.options) &&
              data.options.map((data, index) => {
                if (typeof data === "string")
                  return (
                    <option key={index} value={data}>
                      {data}
                    </option>
                  );
                return (
                  <option key={index} value={data.name}>
                    {data.abbreviation}
                  </option>
                );
              })}
          </select>
        </div>
      );
    default:
      return null;
  }
};

export default FormField;
