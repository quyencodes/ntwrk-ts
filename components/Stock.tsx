interface Props {
  inStock: boolean;
  setInStock: (prev: boolean) => void;
}

export default function Stock({ inStock, setInStock }: Props) {
  const toggleStockButton = () => {
    setInStock((prev: boolean) => !prev);
  };

  return (
    <div className="mb-4">
      {inStock ? (
        <button
          onClick={toggleStockButton}
          className="border-b-[1px] border-b-sky-400 text-sky-400"
        >
          Show in Stock
        </button>
      ) : (
        <button
          onClick={toggleStockButton}
          className="border-b-[1px] border-b-sky-400 text-sky-400"
        >
          Show All
        </button>
      )}
    </div>
  );
}
