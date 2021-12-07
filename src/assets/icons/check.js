export function CheckIcon({className}) {
  return (
    <svg
      className={className ? className : 'icon__white'}
      viewBox="0 0 16 16"
      fill="#8055FF"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" stroke="none"/>
    </svg>
  );
}
