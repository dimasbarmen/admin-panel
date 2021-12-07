export function ArrowIcon({ color = 'white', direction = 'down'}) {
  let className = color === 'blue' ? 'icon__light-blue' : 'icon__white';
  switch (direction) {
    case 'down':
      className += ' arrow-down';
      break;
    case 'up':
      className += ' arrow-up';
      break;
    default:break;
  }

  return (
    <svg className={`arrow_icon ${className}`} viewBox="0 0 16 16" fill="#8055FF" stroke="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z"/>
    </svg>
  );
}
