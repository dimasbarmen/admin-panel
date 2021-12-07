export function Filter({title, children}) {
  return (
    <div className="filters__item">
      {title && <div className="filters__item-title">{title}</div>}
      <div className="filters__item-content">
        {children}
      </div>
    </div>
  );
}
