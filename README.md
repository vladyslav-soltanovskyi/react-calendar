# React Calendar

This project is a clone of Google calendar with simplified functionality. Implemented without any third-party libraries, for example, working with date and time (moment.js, day.js) or ready-made UI components

[Project](https://wonderful-raindrop-0d23f3.netlify.app/)

When you enter the site, you get to the week of the current day, you can create an event by clicking on the area in which you are interested, then a window with the selected time will appear

![demo-pt-1](https://user-images.githubusercontent.com/91286167/214460218-bdadaf45-b463-48fa-9499-27c584e1d062.gif)

In the month mode, you can change the month when scrolling the wheel

![demo-pt-2](https://user-images.githubusercontent.com/91286167/214460699-ada78fb0-368a-4c23-a3e4-1a57c538bd14.gif)

![demo-pt-3](https://user-images.githubusercontent.com/91286167/214461427-23b9cf5c-f02b-4a8e-8218-0d9e82e9fab5.gif)

![demo-pt-4](https://user-images.githubusercontent.com/91286167/214461539-5137c659-d9be-4776-ba91-9159c92d5cb8.gif)

# How to start

1. Run `npm install` at the root folder
2. Start: `npm run start`
3. Build: `npm run build`


# Tech stack

1. HTML5
2. CSS3
3. Typescript
4. mockApi
5. fetch
6. SCSS-modules 
7. BEM methodology
8. React, hooks
9. js Date api

#
Custom implementations can be found in this repository:

> There may be bugs or flaws. I just wanted to try and implement my own variations of web solutions.


- **Fetch Api Class** (src/gateway/api) - class for working with rest api, uses fetch
- **Hooks**
  - **useForm** (src/hooks/useForm) - a hook for convenient work with the state of the form
  - **useValidator** (sdk/hooks/useValidator) - a hook for convenient work with field validation
  - **useCalendar** (src/hooks/useCalendar.ts) - hooks for convenient work with date and time using the js date api
- **SCSS MODULES + Adaptive** - css modules were used + fully adaptive was made
- **Components/UI kit**
 - **TextField** (src/components/common/forms-elements/text-field) - a simple implementation of the field as in google calendar
  - **DatePicker** (src/components/common/forms-elements/date-picker) - custom implementation of datepicker with simple support for all languages (this means that the date formatting does not fully match to how it should be written in the selected language) and you can change the state using the keyboard

  ![Date-picker-pt-1](https://user-images.githubusercontent.com/91286167/214438707-c4a765ca-4e8f-44fe-92de-e19cb916eb11.gif)

  ![Date-picker-pt-2](https://user-images.githubusercontent.com/91286167/214438869-89c58d98-ae2b-452c-ac85-c350aca41a2a.gif)
  - **TimePicker** (src/components/common/forms-elements/time-picker)- The timepicker is simple for all languages, the hint shows the time difference between two dates and appears when the dates correspond to each other (that is, the same day is selected) and you can change the state using the keyboard

  ![Time-picker](https://user-images.githubusercontent.com/91286167/214439024-68e96fad-1cd2-4de5-af6e-3dfc42e3d4d4.gif)

Author **Vladyslav Soltanovskyi**