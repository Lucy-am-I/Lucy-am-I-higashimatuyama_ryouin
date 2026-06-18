document.addEventListener('DOMContentLoaded', () => {
    
    // 店舗データの定義 (name: 店名, comment: 簡潔な説明, imgId: 元のIMG番号(参考用))
    const shopData = [
        { name: "恵比須屋食堂", comment: "定食・食堂", imgId: "2418" },
        { name: "更科", comment: "そば・うどん", imgId: "2419" },
        { name: "あすなろ", comment: "カフェ・喫茶", imgId: "2420" },
        { name: "レストランペア", comment: "カラオケパブ", imgId: null },
        { name: "居酒屋うな天", comment: "居酒屋・うなぎ", imgId: "2421" },
        { name: "かどや食堂", comment: "定食・食堂", imgId: "2422" },
        { name: "こいち", comment: "和食", imgId: "2423" },
        { name: "もつ煮のまつい", comment: "もつ煮定食", imgId: "2424" },
        { name: "そば屋敷花月庵", comment: "そば・うどん", imgId: "2425" },
        { name: "海鮮番屋 旬", comment: "海鮮料理", imgId: null },
        { name: "球磨っこ", comment: "郷土料理・居酒屋", imgId: "2427" },
        { name: "康和商店", comment: "寿司", imgId: null },
        { name: "くりはら", comment: "和食", imgId: "2428" },
        { name: "川田寿司", comment: "寿司", imgId: "2429" },
        { name: "つるや", comment: "焼き鳥", imgId: "2430" },
        { name: "つるや", comment: "そば屋", imgId: null },
        { name: "串串亭", comment: "焼き鳥", imgId: "2431" },
        { name: "旬彩 食庵", comment: "和食", imgId: "2432" },
        { name: "あずま家", comment: "うどん", imgId: null },
        { name: "クロッシュ", comment: "バー", imgId: "2433" },
        { name: "坂本屋", comment: "和食・定食", imgId: "2434" },
        { name: "松月庵", comment: "そば・和食", imgId: "001.png" },
        { name: "紫雲閣", comment: "和食・宴会", imgId: "2436" },
        { name: "花巻", comment: "海鮮居酒屋", imgId: "002.png" },
        { name: "居酒屋 歌流多", comment: "居酒屋", imgId: "2437" },
        { name: "魚浜 別館", comment: "懐石・割烹", imgId: "003.png" },
        { name: "中華厨房 紅豚", comment: "中華料理", imgId: "2438" },
        { name: "松喜脂", comment: "肉料理・焼肉", imgId: "2447.jpg" },
        { name: "月見屋", comment: "和食・甘味", imgId: "2448" },
        { name: "魚処ばななや", comment: "鮮魚・海鮮料理", imgId: "2449" },
        { name: "居酒屋たなか", comment: "居酒屋", imgId: "004.jpeg" },
        { name: "満つ乃", comment: "日本料理", imgId: "005.jpeg" },
        { name: "竹寿し", comment: "寿司", imgId: "2452" },
        { name: "季節料理いし井", comment: "創作和食", imgId: "2453" },
        { name: "和食 藤川", comment: "和食", imgId: "2454" },
        { name: "花寿司", comment: "寿司", imgId: "2455" },
        { name: "燕屋商店", comment: "乾物・食材", imgId: "2456" },
        { name: "ニュー北味", comment: "定食・食堂", imgId: "2458" },
        { name: "しろふぉん", comment: "カフェ", imgId: "2459" },
        { name: "えもり食堂", comment: "定食・ラーメン", imgId: "2460" },
        { name: "飛龍", comment: "やきとり", imgId: "006.jpeg" },
        { name: "やきとりのぶよし", comment: "やきとり", imgId: "007.jpeg" },
        { name: "君塚商店", comment: "やきとり", imgId: "008.jpeg" },
        { name: "そうま", comment: "和食", imgId: "2463" },
        { name: "五蘊", comment: "和モダン料理", imgId: "2464" },
        { name: "助六", comment: "日本料理", imgId: "2465" },
        { name: "茶房 さが", comment: "カフェ・喫茶", imgId: "2466" },
        { name: "茂寿司", comment: "寿司", imgId: "2467" },
        { name: "Y&Y", comment: "まかない料理・居酒屋", imgId: "009.jpeg" },
        { name: "つかもと", comment: "和食", imgId: "010.png" },
        { name: "日の出家", comment: "定食・食堂", imgId: "011.png" },
        { name: "やきとりごめん", comment: "焼き鳥", imgId: "012.jpeg" },
        { name: "居酒屋なべちゃん", comment: "居酒屋", imgId: "013.jpeg" },
        { name: "朝日屋", comment: "そば・うどん", imgId: "014.png" },
        { name: "高よし", comment: "和食・割烹", imgId: "015.jpeg" },
        { name: "居酒屋きむら", comment: "居酒屋", imgId: "016.jpeg" },
        { name: "愛郷", comment: "カラオケバー", imgId: "017.jpeg" },
        { name: "ISAMI", comment: "ラーメン屋", imgId: "018.png" }
    ];

    const shopGrid = document.getElementById('shopGrid');

    if (shopGrid) {
        shopData.forEach((shop, index) => {
            let imgSrc = "";
            
            // 特別に手動指定された画像マッピング
            if (shop.name === "レストランペア") {
                imgSrc = "assets/karaoke_pub.png";
            } else if (shop.name === "康和商店") {
                imgSrc = "assets/sushi_temaki.png";
            } else if (shop.name === "海鮮番屋 旬") {
                imgSrc = "assets/sushi_only.png";
            } else if (shop.name === "あずま家") {
                imgSrc = "assets/azumaya_food.png";
            } else if (shop.name === "つるや" && shop.comment === "そば屋") {
                imgSrc = "assets/tsuruya_soba.jpg";
            } else if (index <= 4) {
                // 0〜4番目までは生成済みの画像を使用
                imgSrc = `assets/shop_${index}.png`;
            } else if (shop.imgId) {
                // 5番目以降でimgIdがある場合は、ご提供いただいた写真(IMG_XXXX.JPGなど)を使用
                if (shop.imgId.includes('.')) {
                    imgSrc = `assets/IMG_${shop.imgId}`;
                } else {
                    imgSrc = `assets/IMG_${shop.imgId}.JPG`;
                }
            } else {
                // 写真がない店舗のみ、仮の画像を表示
                imgSrc = (index % 2 === 0) ? "assets/shop_exterior.png" : "assets/shop_food.png";
            }

            const cardHtml = `
                <div class="shop-card">
                    <div class="shop-img-container">
                        <div class="shop-img" style="background-image: url('${imgSrc}');"></div>
                    </div>
                    <div class="shop-info">
                        <h4 class="shop-name">${shop.name}</h4>
                        <p class="shop-comment">${shop.comment}</p>
                    </div>
                </div>
            `;
            shopGrid.insertAdjacentHTML('beforeend', cardHtml);
        });
    }

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                const nav = document.querySelector('.global-nav');
                if (nav) nav.classList.remove('active');
            }
        });
    });

    // モバイルメニュー
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.global-nav');
    if (hamburger) {
        hamburger.addEventListener('click', () => { nav.classList.toggle('active'); });
    }

    // フェードイン
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('is-visible'); }
        });
    }, { threshold: 0, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.fade-in-section').forEach(section => { observer.observe(section); });

    // ヘッダーとヒーロー演出
    const bgHeader = document.querySelector('.global-header');
    const heroBg = document.querySelector('.hero-bg');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (bgHeader) {
            bgHeader.style.boxShadow = scrollY > 50 ? "0 4px 20px rgba(0,0,0,0.1)" : "0 2px 10px rgba(0,0,0,0.05)";
        }
        if (heroBg && scrollY <= window.innerHeight) {
            heroBg.style.transform = `scale(1.05) translateY(${scrollY * 0.3}px)`;
        }
    });

    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) heroContent.style.opacity = '1';
    }, 100);
});
