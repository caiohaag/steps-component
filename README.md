# React Native Steps Component
A basic React Native step component, very useful for multistep forms.

![example](https://i.ibb.co/3s71YRf/steps-example-1.jpg)

# How to install

Paste the `src/components/Steps` folder into your own project components folder.  
Also, copy the 3 images to your image folder.

# How to use

```
  import React from 'react';
  import Steps from '../../components/Steps';
  
  const YourComponent = () => {
    return (
      <Steps step={1} totalSteps={5}/>
    )
   }

  export default YourComponent;
```

Call the component with the syntax `<Steps step={1} totalSteps={5}/>` where `step` is your current step, and `totalSteps` is the amount of steps in your component.

# Examples
![example-1](https://i.ibb.co/c6hN6Ch/steps-example-2.jpg)  
`<Steps step={1} totalSteps={5}/>`

![example-2](https://i.ibb.co/3s71YRf/steps-example-1.jpg)  
`<Steps step={3} totalSteps={6}/>`

# Styling
You can set up the colors by changing this 3 variables inside the `index.js`: 
```
const bgColor = "#0069FF";
const lineNext = "#FFF";
const lineDone = "#004FC0";
```

Also, you can create your own status icons, and place them inside the images folder, with the names:
```
stepcurrent.png
stepdone.png
stepnext.png
```
