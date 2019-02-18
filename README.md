# React minicart for Magento 2 Knockout-based frontend
This module offers a React-based minicart to replace the existing minicart of Magento itself. Please note that this is an experiment to show how easy it is to build React components. It could be used on live sites, but comes without warranties.

### Installation
Before you install this module, make sure to install the [Yireo_React](https://github.com/yireo-training/Yireo_React) module first. An install via `composer` should pick this up right away.

Use the following commands to install this module into Magento 2:

    composer config repositories.yireo-react vcs git@github.com:yireo-training/Yireo_React.git
    composer config repositories.yireo-react-minicart vcs git@github.com:yireo-training/Yireo_ReactMinicart.git
    composer require yireo/magento2-react-minicart:dev-master
    
    bin/magento module:enable Yireo_React Yireo_ReactMinicart
    bin/magento setup:upgrade

Make sure to read the **Usage** section below as well.

### Usage
This module adds an additional minicart to the Magento 2 frontend, based upon ReactJS, and it removes the old code. This requires the source to be compiled into generic AMD code that works with RequireJS. To compile the source, enter the `view/frontend/` folder from a shell. Next, install all packages listed in `package.json`:

    npm install
    
After this, you should be able to modify the files `view/frontend/source` and compile them to browser code using Gulp:

    gulp build

If you want to develop this code yourself, you can also run:

    gulp watch

### Notes
Gulp is instead of Webpack, because you need most of the cool stuff that Webpack runs with: The webserver is not going be to Node-based, but is the Magento webserver instead. Because of this, hot module reloading can not be used.

### Todo / Ideas
- Move Gulp to root of Magento so that it is able to compile React code in any Magento module (`app` or `vendor`).
- Create a generic React component with KO observables (like `customerData`) so you can use this as a HOC wrapper for obtaining things like the `cart`, `customer` or `messages`.
- When `setState()` is called within a React component (and thus that component re-renders), have a callback back to a KO observable, so UiComponents can respond to React rerenders.
- Connect multiple React root-components together with React Portals.
- Swap React with Preact for performance
