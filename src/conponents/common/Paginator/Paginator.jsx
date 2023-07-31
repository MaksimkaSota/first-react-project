import classes from './Paginator.module.css';

export const Paginator = ({page, count, totalCount, onSetCurrentPage}) => {

  const pagesCount = Math.ceil(totalCount / count);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let slicedPages;
  let curPage = page;
  if (curPage - 3 < 0) {
    slicedPages = pages.slice(0, 5);
  } else {
    slicedPages = pages.slice(curPage - 3, curPage + 2);
  }

  return (
    <div>
      {slicedPages.map((slicedPage, index) => {
        return (
          <span
            className={slicedPage === page ? classes.selectedPage : ''}
            key={index}
            onClick={onSetCurrentPage(slicedPage)}>
              {slicedPage}
            </span>
        )
      })}
    </div>
  )
};
