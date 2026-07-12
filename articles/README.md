# مقالات الدكتور ميشال الشمّاعي
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>المقالات - الدكتور ميشال الشمّاعي</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cairo:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root{
    --ink-navy:#0a1128;
    --ink-navy-2:#101b3a;
    --cedar-green:#2f4a3d;
    --cedar-green-light:#3f6152;
    --brass-gold:#c9a227;
    --brass-gold-soft:#e6c96a;
    --paper:#f5f1e8;
    --ink-text:#eef1f7;
    --ink-text-dim:#a9b2c9;
    --line:#26325a;
  }
  *{box-sizing:border-box;}
  body{
    margin:0;
    background:radial-gradient(ellipse at top, var(--ink-navy-2), var(--ink-navy) 60%);
    color:var(--ink-text);
    font-family:'Cairo',Tahoma,Arial,sans-serif;
    min-height:100vh;
  }
  a{color:inherit;}
  .top-bar{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:22px 6vw;
    border-bottom:1px solid var(--line);
  }
  .top-bar .back-link{
    font-size:14px;
    color:var(--ink-text-dim);
    text-decoration:none;
    display:flex;
    align-items:center;
    gap:6px;
  }
  .top-bar .back-link:hover{color:var(--brass-gold-soft);}
  .brand{
    font-family:'Amiri',serif;
    font-size:18px;
    color:var(--brass-gold-soft);
  }
  header.hero{
    padding:56px 6vw 30px;
    max-width:1100px;
    margin:0 auto;
  }
  .eyebrow{
    font-size:13px;
    letter-spacing:.04em;
    color:var(--brass-gold);
    margin-bottom:14px;
    display:flex;
    align-items:center;
    gap:10px;
  }
  .eyebrow::before{
    content:"";
    width:28px;
    height:1px;
    background:var(--brass-gold);
    display:inline-block;
  }
  h1{
    font-family:'Amiri',serif;
    font-weight:700;
    font-size:clamp(30px,4vw,46px);
    margin:0 0 10px;
    line-height:1.35;
  }
  .sub{
    color:var(--ink-text-dim);
    font-size:16px;
    max-width:60ch;
    line-height:1.9;
  }

  /* Dossier tabs for categories */
  nav.tabs{
    max-width:1100px;
    margin:8px auto 0;
    padding:0 6vw;
    display:flex;
    flex-wrap:wrap;
    gap:8px;
  }
  nav.tabs button{
    font-family:'Cairo',sans-serif;
    font-size:14px;
    font-weight:600;
    color:var(--ink-text-dim);
    background:rgba(255,255,255,0.03);
    border:1px solid var(--line);
    border-bottom:none;
    padding:10px 20px 12px;
    border-radius:8px 8px 0 0;
    cursor:pointer;
    position:relative;
    top:1px;
    transition:color .15s ease, background .15s ease;
  }
  nav.tabs button:hover{color:var(--ink-text);}
  nav.tabs button.active{
    color:var(--ink-navy);
    background:var(--brass-gold-soft);
    border-color:var(--brass-gold-soft);
  }
  .tabs-rule{
    max-width:1100px;
    margin:0 auto;
    padding:0 6vw;
  }
  .tabs-rule .line{
    border-top:1px solid var(--line);
  }

  main{
    max-width:1100px;
    margin:0 auto;
    padding:36px 6vw 90px;
  }
  .grid{
    display:grid;
    grid-template-columns:repeat(auto-fill, minmax(280px,1fr));
    gap:22px;
  }
  .card{
    display:flex;
    flex-direction:column;
    background:rgba(255,255,255,0.03);
    border:1px solid var(--line);
    border-radius:10px;
    overflow:hidden;
    text-decoration:none;
    color:inherit;
    transition:transform .18s ease, border-color .18s ease;
  }
  .card:hover{
    transform:translateY(-3px);
    border-color:var(--brass-gold);
  }
  .card img{
    width:100%;
    height:160px;
    object-fit:cover;
    display:block;
    border-bottom:1px solid var(--line);
  }
  .card-body{
    padding:18px 20px 22px;
    display:flex;
    flex-direction:column;
    gap:10px;
    flex:1;
  }
  .card-cat{
    align-self:flex-start;
    font-size:12px;
    color:var(--brass-gold-soft);
    border:1px solid var(--brass-gold);
    padding:3px 12px;
    border-radius:20px;
  }
  .card h3{
    font-family:'Amiri',serif;
    font-size:21px;
    line-height:1.5;
    margin:0;
  }
  .card .excerpt{
    color:var(--ink-text-dim);
    font-size:14.5px;
    line-height:1.8;
    flex:1;
  }
  .card .date{
    color:var(--ink-text-dim);
    font-size:13px;
    border-top:1px solid var(--line);
    padding-top:10px;
    margin-top:4px;
  }
  .empty{
    text-align:center;
    color:var(--ink-text-dim);
    padding:80px 20px;
    font-size:15px;
  }
  @media (max-width:560px){
    .top-bar{padding:18px 5vw;}
    header.hero{padding:40px 5vw 20px;}
    nav.tabs{padding:0 5vw;}
    main{padding:28px 5vw 70px;}
  }
</style>
</head>
<body>

  <div class="top-bar">
    <a class="back-link" href="index.html">→ العودة إلى الصفحة الرئيسية</a>
    <div class="brand">د. ميشال الشمّاعي</div>
  </div>

  <header class="hero">
    <div class="eyebrow">أرشيف الكتابة</div>
    <h1>المقالات</h1>
    <p class="sub">تحليلات وقراءات في السياسة والفكر والأدب والثقافة والفن، منشورة أولاً بأول.</p>
  </header>

  <nav class="tabs" id="tabs">
    <button data-cat="all" class="active">الكل</button>
    <button data-cat="سياسة">سياسة</button>
    <button data-cat="فكر">فكر</button>
    <button data-cat="أدب">أدب</button>
    <button data-cat="ثقافة">ثقافة</button>
    <button data-cat="فن">فن</button>
  </nav>
  <div class="tabs-rule"><div class="line"></div></div>

  <main>
    <div id="articles-list">
      <div class="empty">جارٍ تحميل المقالات...</div>
    </div>
  </main>

<script>
const MONTHS_AR = ["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"];
function formatArabicDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return ${d.getDate()} ${MONTHS_AR[d.getMonth()]} ${d.getFullYear()};
}

let allArticles = [];
let activeCategory = 'all';

function render() {
  const list = document.getElementById('articles-list');
  const filtered = activeCategory === 'all'
    ? allArticles
    : allArticles.filter(a => a.category === activeCategory);

  if (filtered.length === 0) {
    list.innerHTML = '<div class="empty">لا توجد مقالات في هذا القسم بعد.</div>';
    return;
  }

  list.innerHTML = `<div class="grid">${filtered.map(article => `
    <a class="card" href="article.html?slug=${encodeURIComponent(article.slug)}">
      ${article.image ? <img src="${article.image}" alt=""> : ''}
      <div class="card-body">
        ${article.category ? <span class="card-cat">${article.category}</span> : ''}
        <h3>${article.title}</h3>
        ${article.excerpt ? <div class="excerpt">${article.excerpt}</div> : ''}
        <div class="date">${formatArabicDate(article.date)}</div>
      </div>
    </a>
  ).join('')}</div>;
}

document.getElementById('tabs').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-cat]');
  if (!btn) return;
  document.querySelectorAll('#tabs button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeCategory = btn.dataset.cat;
  render();
});

fetch('content/articles.json?t=' + Date.now())
  .then(res => res.json())
  .then(data => {
    allArticles = (data.articles || []).slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    if (allArticles.length === 0) {
      document.getElementById('articles-list').innerHTML = '<div class="empty">لا توجد مقالات منشورة بعد.</div>';
      return;
    }
    render();
  })
  .catch(err => {
    document.getElementById('articles-list').innerHTML =
      '<div class="empty">تعذّر تحميل المقالات حاليًا. حاول لاحقًا.</div>';
    console.error(err);
  });
</script>
</body>
</html>
