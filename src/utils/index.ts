type PayloadFunction<T> = (t: T) => { payload: T };

export function withPayloadType<T>(): PayloadFunction<T> {
  return (t: T) => ({ payload: t });
}
