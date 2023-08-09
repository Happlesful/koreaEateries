const paginationContainer = document.getElementById("pagination-container");

function createPagination(currentPage) {
  //paginationPage = 0 will have a range of 1 to 5
  const paginationPage = Math.floor((currentPage - 1) / 5);
  const pager = document.createElement("div");
  const pagePrevious = document.createElement("a");
  const pageFirst = document.createElement("a");
  const pageSecond = document.createElement("a");
  const pageThird = document.createElement("a");
  const pageFourth = document.createElement("a");
  const pageFifth = document.createElement("a");
  const pageNext = document.createElement("a");

  pager.setAttribute("class", "pagination");
  pager.setAttribute("id", "pagination");

  pagePrevious.setAttribute("id", "previousButton");
  pagePrevious.setAttribute("href", "#");
  pagePrevious.innerHTML = "&laquo;";

  const pageIndex = [pageFirst, pageSecond, pageThird, pageFourth, pageFifth];

  for (let i = 0; i < pageIndex.length; i++) {
    const page = paginationPage * 5 + i + 1;
    pageIndex[i].innerHTML = page;
    pageIndex[i].setAttribute("href", "#");
    pageIndex[i].setAttribute("id", `page${i + 1}`);
    pageIndex[i].setAttribute("class", "page");
    if (page === currentPage) {
      pageIndex[i].classList.add("active");
    } else {
      pageIndex[i].classList.remove("active");
    }
  }

  pageNext.setAttribute("id", "nextButton");
  pageNext.setAttribute("href", "#");
  pageNext.innerHTML = "&raquo;";

  pager.append(
    pagePrevious,
    pageFirst,
    pageSecond,
    pageThird,
    pageFourth,
    pageFifth,
    pageNext
  );

  paginationContainer.innerHTML = "";
  paginationContainer.append(pager);
}

function formatPagination(currentPage) {
  //paginationPage = 0 will have a range of 1 to 5
  const paginationPage = Math.floor((currentPage - 1) / 5);

  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const page3 = document.getElementById("page3");
  const page4 = document.getElementById("page4");
  const page5 = document.getElementById("page5");
  const pageIndex = [page1, page2, page3, page4, page5];

  for (let i = 0; i < pageIndex.length; i++) {
    const page = paginationPage * 5 + i + 1;
    pageIndex[i].innerHTML = page;
    pageIndex[i].setAttribute("href", "#");
    pageIndex[i].setAttribute("id", `page${i + 1}`);
    pageIndex[i].setAttribute("class", "page");
    if (page === currentPage) {
      pageIndex[i].classList.add("active");
    } else {
      pageIndex[i].classList.remove("active");
    }
  }
}

{
  /* <div class="pagination" id="pagination">
  <a id="previousButton">
    &laquo;
  </a>
  <a>1</a>
  <a class="active">
    2
  </a>
  <a>3</a>
  <a>4</a>
  <a>5</a>
  <a id="nextButton">
    &raquo;
  </a>
</div>; */
}
