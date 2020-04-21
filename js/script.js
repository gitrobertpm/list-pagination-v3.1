/**
New FSJS project 2 - List Pagination and Filter - v2 - Data version
*/

"use strict";

const dataList = data;
const studentContainer = document.querySelector('.student-list');
const linkContainer = document.querySelector('.link-list');
const searchContainer = document.querySelector('.header');

const perPage = 9;


/**
 Show page function - shows the selected page of students
 @param list - List of students to be paginated
 @param page - Page number to be shown
*/
const showPage = (list, page) => {

   // Empty student container
   studentContainer.innerHTML = '';

   // Start and end page items
   const pageStart = (page * perPage) - perPage;
   const pageEnd = page * perPage;

   // Loop over list parameter and show items between page start and page end indexes
   for (let i = 0, j = list.length; i < j; i++) {

      // If list item falls in the desired range
      if (i >= pageStart && i < pageEnd) {

         // Format date for list item
         const formattedDate = formatDate(list[i].registered.date);

         // HTML template to add to DOM
         const studentTemplate = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${formattedDate}</span>
               </div>
            </li>
         `;

         // Add with insertAdjacentHTML - faster than innerHTML
         studentContainer.insertAdjacentHTML('beforeend', studentTemplate);
      } 
   }
};

showPage(dataList, 1);


/**
 Append page links function - Create and append pagination links for list
 @param list - List of students to be paginated
*/
const appendPageLinks = (list) => {

   // Empty link container
   linkContainer.innerHTML = '';

   // Number of page links - List parameter length divided by perPage variable, rounded up
   const linkCount = Math.ceil(list.length / perPage); 

   // Loop to add links
   for (let i = 0; i < linkCount; i++) {
      
      // Add with insertAdjacentHTML - faster than innerHTML
      linkContainer.insertAdjacentHTML('beforeend', `<li><button type="button">${i + 1}</button</li>`);
   }
   
   // Set first link to active
   linkContainer.firstElementChild.firstElementChild.classList.add('active');

   // Add click handler to links with event delegation on the link container
   linkContainer.addEventListener('click', (e) => {

      // if event occurred on anchor element
      if (e.target.tagName === 'BUTTON') {
         // Pagination links
         const buttons = document.querySelectorAll('.link-list button');

         // Link that was clicked
         const clickedLink = e.target;

         // Remove active class from all links
         [...buttons].forEach(link => link.className = '');

         // Set active class on current link
         clickedLink.classList.add('active');

         // Call showPage on the list parameter and use the clicked link's text as the page number to show
         showPage(list, clickedLink.innerHTML);
      }
   });
};

appendPageLinks(dataList);


// Search div template
const searchMarkup = `
   <label for="search" class="student-search">
      <input id="search" placeholder="Search for students...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
`;

// Add search div to DOM
searchContainer.insertAdjacentHTML('beforeend', searchMarkup);

// Search input and button elements
const searchInput = document.querySelector('.student-search input');
const searchBtn = document.querySelector('.student-search button');

/**
 Search function - Display and paginate search matches
*/
const search = () => {

   // Student name and search value
   const studentName = (studentObj) => `${studentObj.name.first} ${studentObj.name.last}`.toLowerCase();
   const searchValue = searchInput.value.toLocaleLowerCase();

   // Array of matches
   const matches = dataList.filter(studentObj => studentName(studentObj).includes(searchValue));

   // Display search results or no results message
   if (matches.length) {
      showPage(matches, 1);
      appendPageLinks(matches);   
   } else {
      linkContainer.innerHTML = '';
      studentContainer.innerHTML = `<li class="no-results">Sorry, no results when searching for &ldquo;${searchInput.value}&rdquo;</li`;
   }
}

// Keyup and click listeners for search
searchInput.addEventListener('keyup', search);
searchBtn.addEventListener('click', search);
