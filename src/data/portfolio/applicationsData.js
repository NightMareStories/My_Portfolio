const arrData = [
    {
        id : 'p1a',
        dataId : 'a1',
        title : 'Sport-Shop',
        category : 'Site',
        year : '2021',
        devTools : 'HTML5, JavaScriptES6, SCSS, JQuery, Gulp, Swiper-Slider',
        description : <><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p></>,
        gitLink : 'https://github.com/NightMareStories/Sport-shop',
        imagePng : './img/sport-shop-img.png',
        imageWebp : './img/sport-shop-img.webp',
        altText : 'sport-shop-img'
    },
    {
        id : 'p2a',
        dataId : 'a2',
        title : 'Cart-of-Goods',
        category : 'App',
        year : '2021',
        devTools : 'HTML5, SCSS, JavaScriptES6, ReactJS, React-Redux',
        description : 
            <>
                <p>
                    Cart of Goods - is an application written in ReactJS and JavaScriptES6. In this application, it is implemented and divided into components - a catalog of goods to be added to the cart and the cart of goods added to it.
                </p>

                <p>
                    The application logic is as follows, all goods data is in one object, the goods catalog receives goods data from this object and renders it on the page, each product on the page has a button to add this product to the cart. The cart itself saves data on the goods added to it and renders them on the page in its block below the catalog. At the bottom of the cart there is a calculation of the amount of added items and their quantity. Also in the cart it is possible to reduce the quantity of a specific product and completely delete its position.
                </p>

                <p>
                    In order to implement this logic, I used the react modules: redux, react-redux and reduxjs-toolkit. For the cart and the catalog of goods, their own storages-slices, reducers, containers and components for rendering on the page were created. To style the application, I used the SCSS preprocessor.
                </p>
            </>,
        gitLink : 'https://github.com/NightMareStories/Cart-of-Goods',
        imagePng : './img/cart-of-goods-img.png',
        imageWebp : './img/cart-of-goods-img.webp',
        altText : 'cart-of-goods-img'
    },
    {
        id : 'p3a',
        dataId : 'a3',
        title : 'Notes-on-ReactJS',
        category : 'App',
        year : '2021',
        devTools : 'HTML5, JavaScriptES6, SCSS, ReactJS, NodeJS, OpenServer',
        description :
            <>
                <p>
                    "Notes on ReactJS" is an application written in "ReactJS", "NodeJS" and using the server-side development environment "OpenServer", the application also makes extensive use of routing for SPA, but there are also redirection functions with page.
                </p>

                <p>
                    The work of the application is to create notes or messages by the user and view the already created notes or messages for review. Each note when created has its own unique ID-hash, which can be copied and pasted on the search page, thereby familiarizing yourself with its contents.
                </p>

                <p>
                    Thanks to the interaction between the "backend" and "frontend" via the API, as well as the application for creating and working with sql tables "PhpMyAdmin" in the server environment "OpenServer" - the Notes on ReactJS application creates and saves notes on the server, and gets the generated notes when requested from the client.
                </p>

                <p>
                    Try it, from the main page you can go directly to creating or viewing notes (you need a note ID to view). After creation, you can follow the link directly to the created note, or by clicking on the field with the note ID to copy it. Now you can go to "NOTES" to paste the copied note by clicking in the search field, if the note is found, then all its contents will be shown, if not, then you made a mistake with the spelling and received an error notification.
                </p>
            </>,
        gitLink : 'https://github.com/NightMareStories/Notes-on-ReactJS',
        imagePng : './img/notes-on-reactjs-img.png',
        imageWebp : './img/notes-on-reactjs-img.webp',
        altText : 'notes-on-reactjs-img'
    },
    {
        id : 'p4a',
        dataId : 'a4',
        title : 'Exchange-Rates',
        category : 'Site',
        year : '2021',
        devTools : 'HTML5, JavaScriptES6, SCSS, JQuery, Gulp, Swiper-Slider',
        description : <><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p></>,
        gitLink : 'https://github.com/NightMareStories/Sport-shop',
        imagePng : './img/sport-shop-img.png',
        imageWebp : './img/sport-shop-img.webp',
        altText : 'sport-shop-img'
    },
    {
        id : 'p5a',
        dataId : 'a5',
        title : 'Sport-Shop',
        category : 'Site',
        year : '2021',
        devTools : 'HTML5, JavaScriptES6, SCSS, JQuery, Gulp, Swiper-Slider',
        description : <><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p></>,
        gitLink : 'https://github.com/NightMareStories/Sport-shop',
        imagePng : './img/sport-shop-img.png',
        imageWebp : './img/sport-shop-img.webp',
        altText : 'sport-shop-img'
    },
    {
        id : 'p6a',
        dataId : 'a6',
        title : 'Exchange-Rates',
        category : 'Site',
        year : '2021',
        devTools : 'HTML5, JavaScriptES6, SCSS, JQuery, Gulp, Swiper-Slider',
        description : <><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p></>,
        gitLink : 'https://github.com/NightMareStories/Sport-shop',
        imagePng : './img/sport-shop-img.png',
        imageWebp : './img/sport-shop-img.webp',
        altText : 'sport-shop-img'
    },
    {
        id : 'p7a',
        dataId : 'a7',
        title : 'Sport-Shop',
        category : 'Site',
        year : '2021',
        devTools : 'HTML5, JavaScriptES6, SCSS, JQuery, Gulp, Swiper-Slider',
        description : <><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p></>,
        gitLink : 'https://github.com/NightMareStories/Sport-shop',
        imagePng : './img/sport-shop-img.png',
        imageWebp : './img/sport-shop-img.webp',
        altText : 'sport-shop-img'
    },
    {
        id : 'p8a',
        dataId : 'a8',
        title : 'Exchange-Rates',
        category : 'Site',
        year : '2021',
        devTools : 'HTML5, JavaScriptES6, SCSS, JQuery, Gulp, Swiper-Slider',
        description : <><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p></>,
        gitLink : 'https://github.com/NightMareStories/Sport-shop',
        imagePng : './img/sport-shop-img.png',
        imageWebp : './img/sport-shop-img.webp',
        altText : 'sport-shop-img'
    },
    {
        id : 'p9a',
        dataId : 'a9',
        title : 'Exchange-Rates',
        category : 'Site',
        year : '2021',
        devTools : 'HTML5, JavaScriptES6, SCSS, JQuery, Gulp, Swiper-Slider',
        description : <><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente consequatur veritatis sequi, quod, ab aspernatur architecto dolorem, nobis blanditiis repudiandae quisquam! Ratione esse illo nemo porro! Quia deserunt totam eligendi.</p></>,
        gitLink : 'https://github.com/NightMareStories/Sport-shop',
        imagePng : './img/sport-shop-img.png',
        imageWebp : './img/sport-shop-img.webp',
        altText : 'sport-shop-img'
    },
]

export default arrData;