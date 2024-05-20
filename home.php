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
    <div class="container my-8">

        <div class="grid gird-cols-1 lg:grid-cols-2 gap-8">

            <section>
                <h2 class="mb-4 text-2xl">Tooltip</h2>

                <button class="rs-button" data-tippy-content='Tooltip'>Text</button>
                <button class="rs-button" data-tippy-content='Another Tooltip'>Text</button>
            </section>

            <section>
                <h2 class="mb-4 text-2xl">Bootstrap Popover</h2>

                <button type='button'
                        class='rs-button rs-button--primary rs-popover'
                        data-bs-toggle='popover'
                        data-bs-placement='right'
                        data-bs-custom-class='custom-popover'
                        data-bs-title='Custom popover'
                        data-bs-content='This popover is themed via CSS variables.'>
                    Custom popover
                </button>

                <div class="rs-popover__wrapper">
                    <a class="rs-button" href="#">Hover me</a>
                    <div class="rs-popover__content">
                        <div>
                            这是 CSS Popover 的内容
                        </div>
                        <div class="rs-popover__placeholder"></div>
                    </div>
                </div>

            </section>


            <section>
                <h2 class="mb-4 text-2xl">Scroll to top</h2>

                <p>效果参见右下角</p>

                <div class="cursor-pointer rs-back-to-top fixed hidden right-6 bottom-6 z-50 border border-solid border-gray-300 hover:border-primary hover:bg-primary group" data-offset="300" data-speed="300" data-easing="swing" data-mobile="true">
                    <div class="h-10 w-10 inline-flex justify-center items-center">
                        <i class="icomoon icon-arrow-up text-gray-300 text-2xl group-hover:text-white"></i>
                    </div>
                </div>
            </section>


            <section>
                <h2 class="mb-4 text-2xl">Splide Slider</h2>

                <div id="rs-news-slider" class="splide rs-news-slider">
                    <div class="splide__track">
                        <ul class="splide__list">
                            <li class="splide__slide">
                                <div>
                                    <a href="#">
                                        <div class="flex aspect-w-3 aspect-h-2">
                                            <img width="584" height="381" src="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_s.jpg" class="object-cover wp-post-image" alt="" decoding="async" />
                                        </div>
                                    </a>

                                    <div class="rs-news-slider__title">
                                        <a href="#">一只正在休息的大老虎</a>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div>
                                    <a href="#">
                                        <div class="flex aspect-w-3 aspect-h-2">
                                            <img width="584" height="381" src="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_s.jpg" class="object-cover wp-post-image" alt="" decoding="async" />
                                        </div>
                                    </a>

                                    <div class="rs-news-slider__title">
                                        <a href="#">两只正在跳舞的天鹅</a>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div>
                                    <a href="http://qx.pr.wpcio.com/news/bao-hu-sheng-tai-huan-jing-ling-lue-gao-yuan-mei-li-can/">
                                        <div class="flex aspect-w-3 aspect-h-2">
                                            <img width="584" height="381" src="http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_s.jpg" class="object-cover wp-post-image" alt="" decoding="async" />
                                        </div>
                                    </a>

                                    <div class="rs-news-slider__title">
                                        <a href="#">几只正在玩耍的熊</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            <section class="container sc-corps">
                <h2 class="text-2xl">合作伙伴</h2>


                <div class="mt-6">
                    <div class="rsp-tabs">
                        <ul class="resp-tabs-list hor_1 flex">
                            <li><span>合作银行</span></li>
                            <li><span>合作机构</span></li>
                        </ul>
                        <div class="resp-tabs-container hor_1">

                            <div>
                                <div class="grid grid-cols-2 gap-4">

                                    <a href="https://www.icbc.com.cn/" target="_blank">
                                        <div class="overflow-hidden border h-[61px] border-solid border-gray-300 bg-gray-200 flex items-center hover:bg-gray-300 hover:border-gray-400 cursor-pointer">
                                            <div class="text-center  text-sm flex items-center">
                                                <img width="171" height="56" src="https://placehold.co/171x56" class="attachment-full size-full wp-post-image" alt="" decoding="async" /></div>
                                        </div>
                                    </a>
                                    <a href="https://www.boc.cn/" target="_blank">
                                        <div class="overflow-hidden border h-[61px] border-solid border-gray-300 bg-gray-200 flex items-center hover:bg-gray-300 hover:border-gray-400 cursor-pointer">
                                            <div class="text-center  text-sm flex items-center">
                                                <img width="171" height="56" src="https://placehold.co/171x56" class="attachment-full size-full wp-post-image" alt="" decoding="async" /></div>
                                        </div>
                                    </a>
                                    <a href="http://www.ccb.com/" target="_blank">
                                        <div class="overflow-hidden border h-[61px] border-solid border-gray-300 bg-gray-200 flex items-center hover:bg-gray-300 hover:border-gray-400 cursor-pointer">
                                            <div class="text-center  text-sm flex items-center">
                                                <img width="171" height="56" src="https://placehold.co/252x61" class="attachment-full size-full wp-post-image" alt="" decoding="async" /></div>
                                        </div>
                                    </a>
                                </div>
                            </div>


                            <div>
                                <div class="grid grid-cols-2 gap-4">

                                    <a href="/member/qing-hai-xin-bao-xiao-wei-rong-zi-dan-bao/" target="_blank">
                                        <div class="overflow-hidden border h-[61px] border-solid border-gray-300 bg-gray-200 flex items-center hover:bg-gray-300 hover:border-gray-400 cursor-pointer">
                                            <div class="text-center  text-sm flex items-center px-6 line-clamp-2">
                                                青海信保小微融资担保有限公司
                                            </div>
                                        </div>
                                    </a>
                                    <a href="http://qhnmdb.com/" target="_blank">
                                        <div class="overflow-hidden border h-[61px] border-solid border-gray-300 bg-gray-200 flex items-center hover:bg-gray-300 hover:border-gray-400 cursor-pointer">
                                            <div class="text-center  text-sm flex items-center px-6 line-clamp-2">
                                                青海省农牧业信贷担保有限责任公司
                                            </div>
                                        </div>
                                    </a>
                                    <div class="overflow-hidden border h-[61px] border-solid border-gray-300 bg-gray-200 flex items-center hover:bg-gray-300 hover:border-gray-400 cursor-pointer">
                                        <div class="text-center  text-sm flex items-center px-6 line-clamp-2">
                                            西宁产业融资担保集团有限公司
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section class="container my-8">
                <h2 class="text-2xl">Shuffle</h2>

                <ul class="flex flex-wrap lg:flex-nowrap gap-2 rsi-filters rs-shuffle__filter mt-6 mb-8">
                    <li class="rsi-filters_item active" data-filter="all"><a href="#">All</a></li>
                    <li class="rsi-filters_item" data-filter="cat-91"><a href="#">Cat1</a></li>
                    <li class="rsi-filters_item" data-filter="cat-389"><a href="#">Cat2</a></li>
                    <li class="rsi-filters_item" data-filter="cat-396"><a href="#">Cat3</a></li>
                    <li class="rsi-filters_item" data-filter="cat-88"><a href="#">Cat4</a></li>
                </ul>

                <div class="rs-shuffle__container grid lg:grid-cols-2 gap-6 lg:gap-8">

                    <div class="rs-shuffle__item" data-groups='["cat-91"]'>
                        <div class="bz-card relative border border-solid border-gray-300 group hover:shadow-md hover:bg-gray-200 hover:border-b-0 transition-all rounded overflow-hidden">
                            <div class="flex">
                                <a class="block flex-shrink-0" href="#">
                                    <div class="flex">
                                        <img width="171" height="162" src="https://placehold.co/400x300" class="object-cover wp-post-image" alt="" decoding="async" /></div>
                                </a>
                                <div class="px-4 flex flex-col flex-nowrap justify-center w-full">
                                    <h3 class="text-lg text-gray-900 w-full">
                                        <a class="block leading-none" href="#">银担“总对总”批量担保业务</a>
                                    </h3>

                                    <div class="text-gray-700 w-full mt-3 text-sm">
                                        <p class="bz-card__desc">
                                            国家融资担保基金与法人银行总部共同确定合作业务政策和操作流程，直接办理担保贷款的地方银…
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="rs-shuffle__item" data-groups='["cat-91"]'>
                        <div class="bz-card relative border border-solid border-gray-300 group hover:shadow-md hover:bg-gray-200 hover:border-b-0 transition-all rounded overflow-hidden">
                            <div class="flex">
                                <a class="block flex-shrink-0" href="#">
                                    <div class="flex">
                                        <img width="172" height="162" src="https://placehold.co/400x300" class="object-cover wp-post-image" alt="" decoding="async" /></div>
                                </a>
                                <div class="px-4 flex flex-col flex-nowrap justify-center w-full">
                                    <h3 class="text-lg text-gray-900 w-full">
                                        <a class="block leading-none" href="#">青海省再国担非专项业务</a>
                                    </h3>

                                    <div class="text-gray-700 w-full mt-3 text-sm">
                                        <p class="bz-card__desc">
                                            对符合条件的体系内融资担保机构针对小微企业、“三农”和创业创新等市场主体，以及符合条件的…
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="rs-shuffle__item" data-groups='["cat-389"]'>
                        <div class="bz-card relative border border-solid border-gray-300 group hover:shadow-md hover:bg-gray-200 hover:border-b-0 transition-all rounded overflow-hidden">
                            <div class="flex">
                                <a class="block flex-shrink-0" href="#">
                                    <div class="flex">
                                        <img width="171" height="162" src="https://placehold.co/400x300" class="object-cover wp-post-image" alt="" decoding="async" /></div>
                                </a>
                                <div class="px-4 flex flex-col flex-nowrap justify-center w-full">
                                    <h3 class="text-lg text-gray-900 w-full">
                                        <a class="block leading-none" href="#">政采保</a>
                                    </h3>

                                    <div class="text-gray-700 w-full mt-3 text-sm">
                                        <p class="bz-card__desc">
                                            支持小微企业发展，满足小微企业承揽政府采购项目时的融资需求，进一步降低小微企业融资成本,…
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-1/2 rs-shuffle__sizer"></div>
                </div>
            </section>


            <section>
                <h2 class="mb-4 text-2xl">
                    <a target=_blank href="https://dimsemenov.com/plugins/magnific-popup/">Magnific Popup</a>
                </h2>

                <div class="my-4">
                    <a class='rs-popup rs-popup-video' href='http://www.youtube.com/watch?v=0O2aH4XLbto'>Open YouTube video</a>
                </div>

                <div class="my-4">
                    <a class='rs-popup rs-popup-image' href='http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg' title='The Cleaner'>
                        <img src='http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_s.jpg' width='75' height='75'>
                    </a>
                </div>

                <div class='rs-popup rs-popup-gallery flex gap-4 my-4'>
                    <a href='http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg' title='The Cleaner'>
                        <img src='http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_s.jpg' width='75' height='75'>
                    </a>
                    <a href='http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_b.jpg' title='Winter Dance'>
                        <img src='http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_s.jpg' width='75' height='75'>
                    </a>
                    <a href='http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_b.jpg' title="Who's that, mommy?">
                        <img src='http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_s.jpg' width='75' height='75'>
                    </a>
                </div>
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


            <section>
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

            <section>
                <h2 class="mb-4 text-2xl">Lazy Youtube</h2>
                <div class="lazyYT rs-lazyYT" data-youtube-id="_oEA18Y8gM0" data-ratio="16:9">loading...</div>
            </section>

            <section>
                <h2 class="mb-4 text-2xl">Mean menu</h2>

                <p>请在移动端查看效果。</p>

                <div class='f-mean-nav'>
                </div>

                <nav class="rs-mean-menu" style="display: block;">
                    <ul>
                        <li><a href="#">Top Level Link</a>
                            <ul>
                                <li><a href="#">Second Level Link</a>
                                    <ul>
                                        <li><a href="#">Third Level Link</a></li>
                                        <li><a href="#">Third Level Link</a></li>
                                        <li><a href="#">Third Level Link</a>
                                            <ul>
                                                <li><a href="#">Fourth Level Link</a></li>
                                                <li><a href="#">Fourth Level Link</a></li>
                                                <li><a href="#">Fourth Level Link with extra long name so it wraps</a>
                                                    <ul>
                                                        <li><a href="#">Fifth Level Link</a></li>
                                                        <li><a href="#">Fifth Level Link</a></li>
                                                        <li><a href="#">Fifth Level Link</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#">Second Level Link</a></li>
                                <li><a href="#">Second Level Link</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Top Level Link</a></li>
                        <li><a href="#">Top Level Link</a></li>
                        <li><a href="#">Top Level Link</a></li>
                    </ul>
                </nav>
            </section>

            <div>
                <h2 class="mb-4 text-2xl">Simple scroll spy</h2>

                <style>
                    .rs-scroll-section{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                </style>

                <div class="menu rs-scroll-nav" id="main-menu">
                    <a class="menu-item active" href="#hero">Hero</a>
                    <a class="menu-item" href="#section-1">Section 1</a>
                    <a class="menu-item" href="#section-2">Section 2</a>
                    <a class="menu-item" href="#section-3">Section 3</a>
                    <a class="menu-item" href="#section-4">Section 4</a>
                </div>

                <div class="rs-scroll-container" style="height: 399px; overflow: auto">
                    <section class="section scrollspy rs-scroll-section" style="height: 400px; background: #ccc;" id="hero">Hero</section>
                    <section class="section scrollspy rs-scroll-section" style="height: 400px; background: #cc5;" id="section-1">Section 1</section>
                    <section class="section scrollspy rs-scroll-section" style="height: 400px; background: #ccc;" id="section-2">Section 2</section>
                    <section class="section scrollspy rs-scroll-section" style="height: 400px; background: #cc5;" id="section-3">Section 3</section>
                    <section class="section scrollspy rs-scroll-section" style="height: 400px; background: #ccc;" id="section-4">Section 4</section>
                </div>

            </div>

            <section>
                <h2 class="mb-4 text-2xl">Count up</h2>

                <div class="grid grid-cols-2 lg:grid-cols-4 my-4">
                    <div class="rs-count-up mb-4 lg:mb-0">
                        <span>公司成立于</span>
                        <div><strong id="rscp-1">2013</strong><span>年</span></div>
                    </div>

                    <div class="rs-count-up mb-4 lg:mb-0">
                        <span>注册资本</span>
                        <div><strong id="rscp-2"> 32</strong><span>亿</span></div>
                    </div>

                    <div class="rs-count-up">
                        <span>现有员工</span>
                        <div><strong id="rscp-3">100</strong><span>+</span></div>
                    </div>

                    <div class="rs-count-up">
                        <span>集团子公司</span>
                        <div><strong id="rscp-4">5</strong><span>家</span></div>
                    </div>
                </div>
            </section>

        </div>

    </div>

    <script type='text/javascript' src='http://starter.test/wp-content/themes/_s/frontend/dist/scripts/demo.js?ver=1.1.2' id='_s-demo-js'></script>

<?php get_footer();
