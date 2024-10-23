interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer P>
  ? P
  : never;

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;
type ExtractedPoint = GetPoint<Example>;
