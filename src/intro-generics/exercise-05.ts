export class Component<T extends Record<string, any>> {
  private props: T;

  constructor(props: T) {
    this.props = props;
  }

  getProps = (): T => this.props;
}

const component = new Component({ a: 1, b: 2, c: 3 });

const props = component.getProps();
