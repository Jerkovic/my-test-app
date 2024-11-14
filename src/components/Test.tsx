import usePatrik from '$src/hooks/usePatrik.ts';
import { User } from '$src/models/user.ts';

type TestProps = {
  user: User;
  name: string;
};
export const Test = (props: TestProps) => {
  usePatrik();
  const { name } = props;
  return <div>hej {name}</div>;
};
