export const idInjector = <T>(data: T[]) =>
  data?.map((el: T, idx: number) =>
    Object.assign({ customId: Object.values(el).join() + idx }, el)
  ) ?? null;
