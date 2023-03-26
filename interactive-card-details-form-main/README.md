# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Used to practice basic javascript.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

Desktop View of Card details Form
![](./Screenshots/desktop.png)

Form Validation phase-1
![](./Screenshots/validation1.png)

Form validation phase-2
![](./Screenshots/validation2.png)

Thank you component after submmiting the form
![](./Screenshots/thankyou.png)


### Links

- Solution URL: [click here 🤓](https://github.com/sampath-ops/FrontEndMentor_Challenges/tree/master/interactive-card-details-form-main)

## My process

### Built with

- HTML5
- CSS & SCSS
- JavaScript

### What I learned
In this project I learned how the `position:absolute` property was working and I used it to position card images and contents inside the images. absolute positioned element moves corresponding to the parent position property, if the parent is not having any position property then our absolute positoned element moves corresponding to the body element.

Then We can't use linear-gradient as a value to `border-color`, in order to use linear-gradient in the border color we have to use another property called `border-image` . 

Linear-gradient border were not affected by border-radius property, for that we have to various approach to attain border-radius in linear-gradient border. For example [click here](https://stackoverflow.com/questions/5706963/possible-to-use-border-radius-together-with-a-border-image-which-has-a-gradient)

The below piece of code used to add and remove the error message in the field when the input value is not satisfied specified condtions

```js
// add and remove error message
const add_err = (input_el,errmsg_el,txt)=>{
    input_el.classList.add("error_el");
    errmsg_el.textContent = txt;
    errmsg_el.classList.add("msgerr");
}

const remove_err = (input_el,errmsg_el)=>{
    input_el.classList.remove("error_el");
    errmsg_el.textContent="";
    errmsg_el.classList.remove("msgerr");
}
```

### Continued development

- User Interface should be scalable to More breakpoints to resize the components smoothly based on the device width
- Input element border should use linear-gradient color with radius
- Pixels should be replaced with rem values.

## Author
- Frontend Mentor - [@sampath-ops](https://www.frontendmentor.io/profile/sampath-ops).
- Twitter - [@SampthKumar04](https://twitter.com/SampthKumar04).