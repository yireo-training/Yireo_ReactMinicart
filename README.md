# React minicart for Magento 2 Knockout-based frontend
This module offers a React-based minicart to replace the existing minicart of Magento itself. Please note that this is an experiment to show how easy it is to build React components. It could be used on live sites, but comes without warranties.

### Installation
Before you install this module, make sure to install the [Yireo_React](https://github.com/yireo-training/Yireo_React) module first.

Use the following commands to install this module into Magento 2:

    composer config repositories.yireo-react vcs git@github.com:yireo-training/Yireo_ReactMinicart.git
    composer require yireo/magento2-react-minicart:dev-master
    
    ./bin/magento module:enable Yireo_ReactMinicart
    ./bin/magento setup:upgrade

### Usage
This module adds an additional minicart to the Magento 2 frontend.