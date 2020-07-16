import clz from "classnames";

export default function FARIcon({ name }) {
  return <i aria-hidden className={clz("far", `fa-${name}`)} />;
}
