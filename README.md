# Image Performance Sample

Code sample for the blog post [Angular: optimize images to improve performance](https://www.usefuldev.com/Angular:%20optimize%20images%20to%20improve%20performance)

## Getting started

```bash
git clone https://github.com/JayChase/image-performance-sample.git
npm i
ng s
```

## Content

There are four components that relates to the post.To see each one just comment/un-comment it in **app.component.html**.

- **app-bad-image** loads an up-optimized image using an **img** element
- **app-using-picture** moving to using the **picture** element
- **app-picture** a basic Angular approach to creating the picture sources
- **app-using-ngx-picture** using the **ngx-picture** library to render optimized images
