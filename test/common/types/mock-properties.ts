export type MockProperties<Entity> = {
  [P in keyof Entity]?: P extends 'toString' ? unknown : boolean;
};
