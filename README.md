# React Slick Carousel

React Slick is a carousel component built with React. It is a React port of the slick carousel, providing an easy way to add carousels/sliders to your React projects.

## Get Started

Follow these instructions to set up and use React Slick in your project.

---

### Installation

#### Using npm:
```bash
npm install react-slick --save
```

#### Using Yarn:
```bash
yarn add react-slick
```

#### Using pnpm:
```bash
pnpm add react-slick
```

---

### Include CSS

You can include the required CSS for this library in two ways:

#### 1. Import CSS into your slider component:
First, install the `slick-carousel` package:

##### Using npm:
```bash
npm install slick-carousel --save
```

##### Using Yarn:
```bash
yarn add slick-carousel
```

##### Using pnpm:
```bash
pnpm add slick-carousel
```

Then, import the CSS files in your React component:

```javascript
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
```

#### 2. Add CDN links in your HTML:
Add the following `<link>` tags to your HTML file:

```html
<link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
```

---

### Usage

Here’s an example of how to use React Slick:

```javascript
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
```

---

### Key Features
- Fully customizable settings for dots, infinite scrolling, speed, slides to show, and slides to scroll.
- Supports multiple slides and themes.

For more details, visit the [React Slick Documentation](https://react-slick.neostack.com/).

![Screenshot 2024-12-25 235209](https://github.com/user-attachments/assets/41d2219b-3bb5-41a2-bdc2-439b1a3bc59f)


#AASHUTOSH SINGH
