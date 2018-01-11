import jQuery from 'jquery';

window.jQuery = jQuery;

const display = () => {
    console.log('display');
    console.log(jQuery(document));
}

export default display
