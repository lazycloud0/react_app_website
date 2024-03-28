This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

// cleaned out boiler plate codes
// reset CSS in global.css
// created src folder
// moved over components one by one
// test it along the way
// commit every component
// images imported into public

// create the new page

- top level
  // create a folder with page name ✅
  // create .js and .css file ✅
  // return <h1>Founders</h1> ✅
  // check if "http://localhost:<PORT>/founders" is running ✅
  // create a link to the founders page in the home-page ✅

- review comoponent
  // create a folder with component name✅
  // create children component✅
  // insert on page.js✅
  // create button function✅
  // define useStates✅
  // create use Effect to fetch data from API✅
  // create click handler function✅
  // return 3 buttons✅
  // return conditions of buttons✅
  // return reviews when present✅

Objectives:
• Users should see a link on the home page saying "Book Consultation", they should not see the phone number anymore.
// —> update the main page ✅
• Users should be able to click the link and go to a "Design Booking" page ("/booking")
// —> create booking page
// —> create link on main page ✅
• When a user reaches the "Design Booking" page they should see a simple form that matches the designs you've been given.
//— > create a FORM component ✅
//—> create form elements
—> create input and labels
// —> import to design booking page ✅
// —> CSS design ref for form ✅
• When a user submits the form it should validate that no fields are empty. 
//—> useState for each input ✅
// —> handler function: connect inputs to handler ✅
// —> onSubmit handler ✅
—> validation of the input fields
// —> return criteria ✅
• If there is an empty form field show an error.
// —> error handling ✅
• If there is no error then console log the form data 🙂 (don't worry about posting the data anywhere).
// —> getting values from input ✅
// —> console.log the data ✅

### Hackathon 0327

## User Story:

As a user when I submit the form it should  show me that it is submitting.
As a user I should not be able to submit again while it is submitting.
As a user when I submit the form in a correct way (passes validation) I should see the form replaced with a simple success message.
As a user when I submit the form in an incorrect way I should see that the form is no longer submitting and that there are errors.
As a user who has incorrectly submitted the form I should see an error under each field that has failed validation. The error should be specific to the field ("Not a valid phone number", "No bookings outside of England, Wales or Scotland").

## Objective:

- have the state in reducer ✅

- use the state into dispatch actions ✅

- Validate emails and phone numbers ✅

- Validation area codes (Eng, Wales, Scotland) with API ✅

- onSubmit - Loading state ✅

- Validation passes ✅

- Hide form ✅

- Show message: "successfully submitted" ✅

- Validation fails - cancel loading ✅

- show specific errors (at specific fields) ✅

“Use client”

# Plan:

// —> Refactor existing useState codes to reducer function
// —> Create state object
// —> Create reducer function
// —> update handleChange
// —> update variables in JSX
// —> check if everything works

// —> add new features
// —> add validation
// —> loading state { loading: false }
// —> new action “SUBMIT_STARTED"
// —> use new state property to show/hide different button text

## MVPs

# MVP 1:

- refactor existing useStates to reducer function
- implement dispatch
- check if it works

# MVP 2:

- validation : input types and formats
- validation of postcodes : with external API
- loading state

# MVP 3:

- on success: hide form and success
  —> dreamer room: success message
- on fail: cancel loading and error messages

# MVP 4:

- stretch goals: polish site
- completing other components: founders page
- dreamer room
