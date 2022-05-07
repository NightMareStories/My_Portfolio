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
        category : 'App',
        year : '2021',
        devTools : 'HTML5, JavaScriptES6, ReactJS, SCSS, Gulp',
        description : 
            <>
                <p>
                    "Exchange Rates" is an application written in "ReactJS" using "Class" to create components, made available in "JavaScript ES6". The work of the application is to receive the exchange rate from the API service, and the ability to exchange a specific currency into the euro currency.
                </p>
                <p>
                    When the page is loaded, the application sends a request to the service for issuing a currency value, receives data on currencies, converts and displays this data on the page. Also, data on currencies is sent to the currency calculator, where the user can calculate the amount of any selected currency in euros.
                </p>
                <p>
                    Try it yourself. Enter the amount you need, select a currency from the list, and click on the button. Below you will see the result in Euro currency. The application is adapted for mobile devices.
                </p>
            </>,
        gitLink : 'https://github.com/NightMareStories/Exchange-Rates',
        imagePng : './img/exchange-rates-img.png',
        imageWebp : './img/exchange-rates-img.webp',
        altText : 'exchange-rates-img'
    },
    {
        id : 'p5a',
        dataId : 'a5',
        title : 'Cabinet-on-JavaScript',
        category : 'App',
        year : '2020',
        devTools : 'HTML5, JavaScriptES6, PHP, Materialize, OpenServer, Gulp',
        description : 
            <>
                <p>
                    "Cabinet on JavaScript" is an application written in "JavaScript ES6" and "Php" that uses the server-side development environment "OpenServer" and the "Materialize" framework to style the application. . It is an opportunity for a user to register in the system or log in and enter his personal account. In his personal account, he can always change his personal data or log out of it.
                </p>
                <p>
                    This application has a "front-end" and "back-end" part and works through "ajax requests". The operation of the application looks like this: the user enters his data into the form, confirms the entered data, the data is sent to the server in the database, and with further authorization, the user enters his personal account.
                </p>
                <p>
                    In the personal account for an authorized user, his personal data are loaded from the database and displayed in the appropriate fields. When the user's personal data changes, the updated data is also sent to the server in the database, and when you re-enter your personal account, the new personal data of the user that he changed is loaded.
                </p>
                <p>
                    Also, the user can log out from the personal account and then the username and password will have to be entered again. This application actively used "cookies" to interact with the personal account, as well as to update its data.
                </p> 
            </>,
        gitLink : 'https://github.com/NightMareStories/Cabinet-on-JavaScript',
        imagePng : './img/cabinet-on-javascript-img.png',
        imageWebp : './img/cabinet-on-javascript-img.webp',
        altText : 'cabinet-on-javascript-img'
    },
    {
        id : 'p6a',
        dataId : 'a6',
        title : 'Cart-of-Watches',
        category : 'App',
        year : '2021',
        devTools : 'HTML5, JavaScriptES6, SCSS, OOP, Gulp, LocalStorage',
        description : 
            <>
                <p>
                    "Cart of watches" is an application written in "JavaScript" using "LocalStorage" browser and using "Classes" made available in "ES6" edition. This application using "OOP" allows you to add items to the cart, increase, decrease or remove them from the cart, while counting their amount and quantity.
                </p>
                <p>
                    How it works? In the catalog of goods you choose the watch you like, add it to the basket. At the same time, an object with the goods that you added to the cart is created in the user's browser, in the local storage. The cart itself retrieves your items and quantities from the browser's local storage and displays them on the page.
                </p>
                <p>
                    As a result, by going to the basket, you will see all the products that you have added and you can increase or decrease their quantity or remove them from the basket.
                </p>
                <p>
                    In the project, I used the "SCSS" preprocessor using the "BEM" CSS-class methodology and the "Gulp" project builder. Also, the project is fully adapted for mobile devices.
                </p>
            </>,
        gitLink : 'https://github.com/NightMareStories/Cart-of-watches',
        imagePng : './img/cart-of-watches-img.png',
        imageWebp : './img/cart-of-watches-img.webp',
        altText : 'cart-of-watches-img'
    },
    {
        id : 'p7a',
        dataId : 'a7',
        title : 'Daisy_IT-Company',
        category : 'Site',
        year : '2022',
        devTools : 'HTML5, LESS, JavaScriptES6, jQuery, MixItUp',
        description : 
            <>
                <p>
                    Daisy is a one-page business card site for a web development company that provides services for creating their multifunctional site.
                </p>
                <p>
                    The site consists of several sections: logo and navigation; proposals for the client; descriptions of the work process in steps; company Services; portfolio of works using content filtering; contacts for communication with employees of the company.
                </p>
                <p>
                    This website was developed using the latest versions of "HTML5" and "CSS3". The site was visualized through the "LESS" preprocessor, and "JavaScript" - the "jQuery" library - is responsible for the work of filtering the content on the page.
                </p>
                <p> 
                    To display some icons, "Font Awesome" was added to the project. This site is valid and supports mobile devices.
                </p>
            </>,
        gitLink : 'https://github.com/NightMareStories/Daisy_IT-Company',
        imagePng : './img/Daisy_IT-Company-img.png',
        imageWebp : './img/Daisy_IT-Company-img.webp',
        altText : 'Daisy_IT-Company-img'
    },
    {
        id : 'p8a',
        dataId : 'a8',
        title : 'Web Solutions EM',
        category : 'Site',
        year : '2022',
        devTools : 'HTML5, CSS3, Bootstrap 5, JavaScriptES6, jQuery, Slick Slider',
        description : 
            <>
                <p>
                    Web-Solutions-EM is a website for a company that designs and develops applications and websites for clients in various business areas.
                </p>
                <p>
                    This site consists of several sections and blocks with content and information: the title section with navigation and a burger for mobile devices; section with information about the company and its capabilities; section with company services; portfolio section with content filtering; section with tariff plans; section with employees of the company; news blog section; and a section with company contacts and feedback.
                </p>
                <p>
                    This website was developed using the latest versions of "HTML5" and "CSS3". The site was visualized through the "Bootstrap" library, and "JavaScript" - the "jQuery" library and a third-party slider "Slick Slider" are responsible for the work of the content slider on the page. There is also content filtering on the site. 
                </p>
                <p> 
                    Since the site is written in "Bootstrap" it is fully mobile friendly and displays correctly in all browsers.
                </p>
            </>,
        gitLink : 'https://github.com/NightMareStories/Web_Solutions_EM',
        imagePng : './img/web-solutions-em-img.png',
        imageWebp : './img/web-solutions-em-img.webp',
        altText : 'web-solutions-em-img'
    },
]

export default arrData;