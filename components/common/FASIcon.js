import clz from "classnames";

export default function FASIcon({ name }) {
  return <i aria-hidden className={clz("fas", `fa-${name}`)} />;
}
