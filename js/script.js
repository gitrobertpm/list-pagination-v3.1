/**
New FSJS project 2 - List Pagination and Filter - v2 - Data version
*/

"use strict";

// IMPORTANT NOTE:
   // The comments below are something of a jumping off point for the new instructions and/or project walk-through
   // Comments in parens are notes to Mods and SSSs who are testing this out.

// Variable to hold list data - (this variable will be provided for student, I think)
const dataList = data;

// Need to create some variables here to:
   // target '.student-list' element
   // target '.link-list' element
   // target '.header' element - if going for exceeds and adding search

   // set the max items per page, which is 9 for this project


/**
 Show page function - shows the selected page of students
 @param list - List of students to be paginated
 @param page - Page number to be shown
*/

// The showPage function needs to:
   // accept two parameters: list, page - (provided `dataList` variable above will get passed in for list arg when showPage is called)
   // empty the student list element - (can set innerHTML to '')
   // set the pageStart and pageEnd values - (we'll probably still provide these to students)
      // const pageStart = (page * perPage) - perPage;
      // const pageEnd = page * perPage;
   // loop over students
      // use template below to create DOM elements for the students that should show on the page
      // use data from list argument to add student info to DOM elements
      // format date - (the data.js file has a formatDate() function that can be used for this)
      // use insertAdjacentHTML method with 'beforeend' option to insert elements into list container
   
      // DOM TEMPLATE for list items - (Not sure if we should provide this for students or not)

         /* 
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
         */


// Call showPage(dataList, 1) and test it


/**
 Append page links function - Create and append pagination links for list
 @param list - List of students to be paginated
*/

// The appendPageLinks function needs to:
   // accept one parameter: list - (provided `dataList` variable above will get passed in for list arg when appendPageLinks is called)
   // empty the link list element - (can set innerHTML to '')
   // create variable for the number of links - (Math.ceil(list.length / perPage))
   // create loop that iterates once for each link - (let i = 0; i < linkCount; i++)
      // use insertAdjacentHTML method with 'beforeend' option to insert link template below into link container
      // DOM TEMPLATE for page link - `<li><button type="button">${i + 1}</button</li>`
   // after loop, give first page link the active className
   // add click handler to link container
      // use event delegation to make only BUTTONS trigger click handler
      // create variable to target '.link-list button' elements
      // loop over buttons to remove active className from all buttons
      // after loop add active className to clicked button
      // call showPage passing in list parameter and textContent of clicked button


// Call appendPageLinks(dataList) and test it

// (Example markup for search element is in index.html file if anyone wants to try for the exceeds :) )
