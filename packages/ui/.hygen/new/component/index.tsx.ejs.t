---
to: <%= absPath %>/<%= component_name %>.tsx
---

export type <%= component_name %>Props = {
  title?: string;
};

export const <%= component_name %> = ({ title = 'Hello Horarioz' }: <%= component_name %>Props) => {
  return <div>{title}</div>;
};
