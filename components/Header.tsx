import { SortingOptions } from '@/utils/types';

interface Props {
  companyName: string;
  header: string;
  sortingOptions: SortingOptions;
}

export default function Header({ companyName, header, sortingOptions }: Props) {
  return (
    <section className="mb-2">
      <h1 className="text-2xl font-bold mb-2">{companyName}</h1>
      <div className="flex flex-row justify-between">
        <h2 className="text-xl font-medium mb-2">{header}</h2>
        {/* <p>
          Currently displaying:{' '}
          {
            Object.keys(sortingOptions).filter(
              (option) => sortingOptions[option]
            )[0]
          }
        </p> */}
      </div>
    </section>
  );
}
