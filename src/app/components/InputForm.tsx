export type InputFormProps = {
  id: string;
  type: string;
  label: string;
  placeholder: string;
};
export const InputForm: React.FC<InputFormProps> = ({
  id,
  type,
  label,
  placeholder,
}) => {
  return (
    <div className='flex flex-col space-y-1'>
      <label htmlFor={id} className='text-sm font-semibold'>
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className='rounded-lg border-gray-600 bg-gray-100 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-500'
      />
    </div>
  );
};
