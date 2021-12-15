import {useDispatch, useSelector} from 'react-redux';
import {Actions, Selectors} from '../../../../store';
import {useMemo} from 'react';
import {Button} from '../../../Button';

function range(start, end) {
  let length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}

export function Pagination() {
  const dispatch = useDispatch();
  const isLoading = useSelector(Selectors.isLoading);
  const { page, pageCount } = useSelector(Selectors.getPaginationData);
  const paginationRange = useMemo(() => {
    if (isLoading || pageCount < 2) return null;

    if (pageCount <= 5) return range(1, pageCount);

    const leftSiblingIndex = Math.max(page - 1, 1);
    const rightSiblingIndex = Math.min(page + 1, pageCount);
    const shouldShowLeftDots = leftSiblingIndex > 1;
    const shouldShowRightDots = rightSiblingIndex < pageCount;

    if (shouldShowLeftDots && shouldShowRightDots) {
      return [1, 'DOTS', ...range(leftSiblingIndex, rightSiblingIndex), 'DOTS', pageCount];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      return [1, 'DOTS', ...range(pageCount - 2, pageCount)];
    }

    return [...range(1, 3), 'DOTS', pageCount];
  }, [isLoading, page, pageCount]);
  const onClick = (number) => dispatch(Actions.setPage(number));

  return (
    <div className="table__footer-pagination">
      {paginationRange && (
        <>
          {paginationRange.map((number, index) => {
            const isActive = number === page;
            return number === 'DOTS' ? (
              <span
                key={`${number}_${index}`}
                className="table__footer-pagination-dots"
              >
                  ...
                </span>
            ) : (
              <Button
                appearance={isActive ? 'contained' : 'text'}
                disabled={isActive}
                key={`${number}_${index}`}
                className='button_page'
                onClick={() => onClick(number)}
              >
                {number}
              </Button>)
          })}
          <Button
            appearance={page === 'all' ? 'contained' : 'text'}
            className='button_page button_all-page'
            onClick={() => onClick('all')}
          >
            #
          </Button>
        </>
      )}
    </div>
  );
}
