document.addEventListener('DOMContentLoaded', () => {
    
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const logo = document.querySelector('#logo');
    const topicsTab = document.querySelector('#topics_tab');
    const subNavBar = document.querySelector('#sub_nav_bar');
    const subNavBlocks = document.querySelectorAll('#sub_nav_blocks')
    const profileBlocks = document.querySelectorAll('.profile_blocks');
    const profileSubNav = document.querySelector('#profile_sub_nav');
    
    /* Logo Hover Sub-Menu Display */
        logo.addEventListener('mouseover', (e) => {
            subNavBar.style.display = 'block';
        });
        topicsTab.addEventListener('mouseover', (e) => {
            subNavBar.style.display = 'block';
        });
        subNavBar.addEventListener('mouseover', (e) => {
            subNavBar.style.display = 'block';
        });
        subNavBlocks.forEach(block => {     
            block.addEventListener('mouseover', (e) => {
                subNavBar.style.display = 'block';
            });
        });
        main.addEventListener('mouseover', (e) => {
            subNavBar.style.display = 'none';
        });


     
    // /* BLOG ARTICLE SCROLLING */
    // const blogScroll = document.querySelector('#blog_scroll');
    // const blogButtonLeft = document.querySelector('#blog_button_left');
    // const blogButtonRight = document.querySelector('#blog_button_right');
    // const blog1 = document.querySelector('#blog_1');
    // const blog2 = document.querySelector('#blog_2');
    // const blog3 = document.querySelector('#blog_3');
    // const blog4 = document.querySelector('#blog_4');
    // const blog5 = document.querySelector('#blog_5');


    //     blogScroll.addEventListener('click', (e) => {
    //         e.preventDefault();
            
    //         if (e.target == blogButtonRight){
    //             blog1.style.display = 'none';
    //         }
    //         if (e.target == blogButtonRight && blog1.style.display == 'none'){
    //             blog2.style.display = 'none';
    //         }
    //         if (e.target == blogButtonLeft){
    //             e.preventDefault();
    //             if (blog2.style.display = 'none'){
    //                 blog2.style.display = 'block';
    //             }
    //             if (blog2.style.display = 'block' && blog1.style.display == 'none'){
    //                 blog1.style.display = 'block';
    //             }
    //         }
    //     })

});