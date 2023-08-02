import classes from './Paginator.module.css';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

export const Paginator = ({currentPage, pageSize, totalCount, onSetCurrentPage, portionSize = 10}) => {

  const pagesCount = Math.ceil(totalCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [currentPortionNumber, setCurrentPortionNumber] = useState(1);
  const leftPortionPageNumber = (currentPortionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = currentPortionNumber * portionSize;

  const onClickPrevButton = () => {
    setCurrentPortionNumber(currentPortionNumber - 1);
  };

  const onClickNextButton = () => {
    setCurrentPortionNumber(currentPortionNumber + 1);
  };

  useEffect(() => {
    setCurrentPortionNumber(Math.ceil(currentPage/portionSize))
  }, [currentPage]);

  return (
    <div className={classes.paginator}>
      {currentPortionNumber > 1 && <button onClick={onClickPrevButton}>Prev</button>}
      {
        pages
          .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
          .map((page, index) => {
            return (
              <span
                className={classNames({[classes.selectedPage]: page === currentPage}, classes.pageNumber)}
                key={index}
                onClick={onSetCurrentPage(page)}>
                {page}
              </span>
            )
          })
      }
      {portionCount > currentPortionNumber && <button onClick={onClickNextButton}>Next</button>}
    </div>
  )
};
