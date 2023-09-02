import { SortingOptions } from '@utils/types';

interface Props {
  sortingOptions: SortingOptions;
  setSortingOptions: (cb: (prev: SortingOptions) => void) => void;
}

export default function Sorting({ sortingOptions, setSortingOptions }: Props) {
  const cycleSortingOptions = () => {
    if (sortingOptions.orderDefault) {
      console.log('Default to A-Z');
      setSortingOptions((prev) => ({
        ...prev,
        orderDefault: false,
        orderAtoZ: true,
      }));
    } else if (sortingOptions.orderAtoZ) {
      console.log('A-Z to Z-A');
      setSortingOptions((prev) => ({
        ...prev,
        orderAtoZ: false,
        orderZtoA: true,
      }));
    } else if (sortingOptions.orderZtoA) {
      console.log('Z-A to Default');
      setSortingOptions((prev) => ({
        ...prev,
        orderZtoA: false,
        orderDefault: true,
      }));
    }
  };

  const displaySortingOptions = (option) => {
    if (option == 'orderDefault') {
      return 'default';
    } else if (option == 'orderAtoZ') {
      return 'A -> Z';
    } else if (option == 'orderZtoA') {
      return 'Z -> A';
    }
  };

  return (
    <div className="">
      <button
        onClick={cycleSortingOptions}
        className="border-b-[1px] border-b-sky-400 text-sky-400"
      >
        Order by{' '}
        {displaySortingOptions(
          Object.keys(sortingOptions).filter(
            (option) => sortingOptions[option]
          )[0]
        )}
      </button>
    </div>
  );
}
