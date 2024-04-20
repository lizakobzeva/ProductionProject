type ModsType = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: ModsType,
  additional: string[]
): string {
  const className = [
    cls,
    ...additional,
    Object.entries(mods).filter(([key, value]) => {
      Boolean(value);
    }),
  ];

  return className.join(" ");
}
