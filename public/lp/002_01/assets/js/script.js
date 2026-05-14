document.addEventListener('DOMContentLoaded', function() {
    // ハンバーガーメニューの制御
    const hamburgerBtn = document.getElementById('js-hamburger-btn');
    const hamburgerCloseBtn = document.getElementById('js-hamburger-close');
    const hamburgerMenu = document.getElementById('js-hamburger-menu');

    if (hamburgerBtn && hamburgerMenu) {
        hamburgerBtn.addEventListener('click', function() {
            hamburgerMenu.classList.add('is-active');
            document.body.style.overflow = 'hidden';
        });

        const closeMenu = () => {
            hamburgerMenu.classList.remove('is-active');
            document.body.style.overflow = '';
        };

        if (hamburgerCloseBtn) {
            hamburgerCloseBtn.addEventListener('click', closeMenu);
        }

        // メニュー内のリンクをクリックした時に閉じる
        const allMenuLinks = hamburgerMenu.querySelectorAll('a');
        allMenuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = 70; // ヘッダーの高さ
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 追従CTAボタンの表示制御（100vhスクロール後に表示）
    const floatingCta = document.getElementById('js-floating-cta');
    if (floatingCta) {
        window.addEventListener('scroll', function() {
            const scrollThreshold = window.innerHeight; // 100vh
            if (window.pageYOffset > scrollThreshold) {
                floatingCta.classList.add('is-visible');
            } else {
                floatingCta.classList.remove('is-visible');
            }
        });
    }
});
