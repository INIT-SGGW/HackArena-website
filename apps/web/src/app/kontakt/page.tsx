export default function Page() {
  return (
    <div className={'maindiv'}>
      <h1 className="text-4xl russo-one text-primary">Kontakt</h1>

      <div className="w-[1270px] h-[714px] grid grid-cols-2 gap-[56px] justify-self-center">
        <div
          className={
            'col-span-2 h-[300px] bg-(--color-primary) cut-opposite-corners '
          }
        ></div>
        <div
          className={'col-span-1 h-[358px] bg-(--color-secondary-300)'}
        ></div>
        <div
          className={'col-span-1 h-[358px] bg-(--color-secondary-300)'}
        ></div>
      </div>
    </div>
  );
}
