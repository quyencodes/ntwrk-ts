interface Props {
  companyName: string;
  header: string;
}

export default function Header({ companyName, header }: Props) {
  return (
    <section className="mb-2">
      <h1 className="text-2xl font-bold mb-2">{companyName}</h1>
      <h2 className="text-xl font-medium mb-2">{header}</h2>
    </section>
  );
}
