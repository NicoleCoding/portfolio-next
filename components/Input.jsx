export default function Input({ label, type = "text", name, value, onChange, placeholder, rows, ...props}) {
    return (
        <div className="max-w-md mx-auto p-4">
            {label && <label className="text-gray-700 text-sm font-bold max-w-md mx-auto" htmlFor={name}>{label}</label>}
            {type === "textarea" ? (
                <textarea
                    name={name.toLowerCase()}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows={rows}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    {...props}
                />
            ) : (
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                {...props}
            />
            )}
        </div>
    );

}