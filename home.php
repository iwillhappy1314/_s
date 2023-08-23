<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link    https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package _s
 */

get_header();
?>
    <div class="container mt-8">

        <div class="grid grid-cols-2 gap-8">

            <section>
                <h2 class="mb-4 text-2xl">Tooltip</h2>

                <button class="rs-button" data-tippy-content='Tooltip'>Text</button>
                <button class="rs-button" data-tippy-content='Another Tooltip'>Text</button>
            </section>

            <section>
                <h2 class="mb-4 text-2xl">Popover</h2>

                <button type='button' class='rs-button rs-button--primary rs-popover'
                        data-bs-toggle='popover' data-bs-placement='right'
                        data-bs-custom-class='custom-popover'
                        data-bs-title='Custom popover'
                        data-bs-content='This popover is themed via CSS variables.'>
                    Custom popover
                </button>
            </section>

            <section>
                <h2 class="mb-4 text-2xl">Accordion</h2>

                <div class='rs-accordion-container'>
                    <div class='ac'>
                        <h2 class='ac-header'>
                            <button type='button' class='ac-trigger'>Why Like Us Our Happy Customer?</button>
                        </h2>
                        <div class='ac-panel'>
                            <p class='ac-text'>
                            <div>Quo ea euismod consetetur. Posse integre an sea, ea sea diam consectetuer. Wisi constituto constituam ius ea, an amet etiam vel, summo reprehendunt ne vix. Pri vide invidunt cu, id eos nusquam copiosae. Ea sea latine placerat, malis iuvaret lobortis te pri. Nisl ocurreret in pro, melius
                                 sanctus
                                 elaboraret usu no. Etiam euripidis pro ei.
                            </div>
                        </div>
                    </div>

                    <div class='ac'>
                        <h2 class='ac-header'>
                            <button type='button' class='ac-trigger'>Why Like Us Our Happy Customer?</button>
                        </h2>
                        <div class='ac-panel'>
                            <div class='ac-text'>
                                <div>Quo ea euismod consetetur. Posse integre an sea, ea sea diam consectetuer. Wisi constituto constituam ius ea, an amet etiam vel, summo reprehendunt ne vix. Pri vide invidunt cu, id eos nusquam copiosae. Ea sea latine placerat, malis iuvaret lobortis te pri. Nisl ocurreret in pro,
                                     melius sanctus
                                     elaboraret usu no. Etiam euripidis pro ei.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section
            ">
            <h2 class="mb-4 text-2xl">Dropdown</h2>

            <div class="dropdown">
                <button class="rs-button btn-secondary rs-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>

                <ul class="dropdown-menu py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" class="dropdown-item">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="dropdown-item">Settings</a>
                    </li>
                    <li>
                        <a href="#" class="dropdown-item">Earnings</a>
                    </li>
                    <li>
                        <a href="#" class="dropdown-item">Sign out</a>
                    </li>
                </ul>
            </div>
            </section>


            <section>
                <h2 class="mb-4 text-2xl">Micro modal</h2>

                <button data-micromodal-trigger="modal-consent" class="rs-button">我同意</button>

                <div id="modal-consent" class="rs-modal micromodal-slide modal" aria-hidden="true">
                    <div class="modal__overlay" tabindex="-1" data-micromodal-close="">
                        <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
                            <header class="modal__header">
                                <h2 class="modal__title p-0" id="modal-consent-title">Modal标题</h2>
                                <button class="modal__close" aria-label="Close modal" data-micromodal-close=""></button>
                            </header>
                            <div class="modal__content my-4 text-base" id="modal-consent-content">
                                这是里Modal内容
                            </div>
                            <footer class="modal__footer">
                                <button class="modal__btn" data-micromodal-close="" aria-label="Close this dialog window">关闭</button>
                            </footer>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <h2 class="mb-4 text-2xl">Wow js</h2>

                <div class='grid grid-cols-4 gap-6 mt-8'>

                    <div class='row wow fadeInUp' data-wow-duration='0s'>
                        <div class='span3 center'>
                            <img src='https://c.wpzhiku.com/img/800.png' height='200' class='wow'>
                        </div>
                    </div>

                    <div class='row wow fadeInUp' data-wow-duration='0.2s'>
                        <div class='span3 center'>
                            <img src='https://c.wpzhiku.com/img/800.png' height='200'>
                        </div>
                    </div>

                    <div class='row wow fadeInUp' data-wow-duration='0.4s'>
                        <div class='span3 center'>
                            <img src='https://c.wpzhiku.com/img/800.png' height='200'>
                        </div>
                    </div>

                    <div class='row wow fadeInUp' data-wow-duration='0.6s'>
                        <div class='span3 center'>
                            <img src='https://c.wpzhiku.com/img/800.png' height='200'>
                        </div>
                    </div>

                </div>
            </section>

        </div>

    </div>


<?php get_footer();
