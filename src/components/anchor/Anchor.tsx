import type { Link } from '$types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Anchor({
  target,
  classes: style,
  textContent,
  icon
}: Link) {
  return (
    <a
      href={target.href}
      target={target.openInNewTab ? '_blank' : '_self'}
      className={style?.anchorClass}
    >
      {textContent?.prefix && (
        <span className={style?.prefixClass}>{textContent.prefix}</span>
      )}
      {textContent?.text}
      {icon && <FontAwesomeIcon icon={icon} className={style?.iconClass} />}
    </a>
  );
}
