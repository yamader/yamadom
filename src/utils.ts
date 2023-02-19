export const isClass = (v: any) =>
  !!(Object.getOwnPropertyDescriptor(v, "prototype")?.writable === false)

export const notEmpty = <T>(v?: T | null): v is T => !!v
