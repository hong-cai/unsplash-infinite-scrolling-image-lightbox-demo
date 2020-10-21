# Test Unsplash API For Photo Search Application

### Created with

- React JS - functional components
- React Hooks (useState,useContext,useRef...)
- Unsplash.js
- Material UI
- Axios
- InteresectionObserver API
- React Unlimited Scrolling Component
- React Image Lightbox
  

Demo: [https://hong-cai.github.io/](https://hong-cai.github.io/)

### Main functionality and targets at the moment:

 - Initial stage: use Unsplash API to fetch images by keywords 
 - Image Unlimited scrolling with InteresectionObserver API or React Unlimited Scrolling Component
 - Image Lightbox for browsing large images
 - Redirecting to the photogragher's profile page *



### Workflow:

1. Create react project:
   1. `npx create-react-app demo-unsplash`
   2. `git init` (create repo, commit, remote, create and push branch)
   3. Github (create repo, connect to local repo, pull request and merge)
   4. Deployment (Github Pages)
2. Understand how Unsplash API works:
    1.Register on https://unsplash.com/oauth/ and request Unsplash API credentials
    2. `npm install unsplash-js`
    create instance of Unslash:
    `const unsplash = new Unsplash({
    accessKey: "Access_Key",
    });`
    3.use search method `search.photos(keyword, page, per_page, filters)`to get images

3.Change to Axios for further implimentation when Unsplash.js is not in use
4. Use Material UI for main display purpose
5. * A test of Image Lightbox( Meet challenges in data sharing between functional components)
6. * Testing InteresectionObserver API in images unlimited scrolling

   