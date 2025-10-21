document.addEventListener('DOMContentLoaded', () => {
  const spa = document.getElementById('spa');
  const prog = document.getElementById('progbar');
  const heroTitle = document.getElementById('heroTitle');
  const promoPribadi = document.getElementById('promo-pribadi');
  const horizontalWrapper = document.getElementById('horizontal-wrapper');
  const header = document.querySelector('header');

  /* Header height → CSS var */
  const setHeaderH = () => {
    document.documentElement.style.setProperty('--header-h', (header?.offsetHeight || 64) + 'px');
  };
  setHeaderH();
  window.addEventListener('resize', setHeaderH);

  /* Footer min height adaptif: ≥ viewport - header, min 1000px */
  function setFooterMin(){
    const headerH = header ? header.offsetHeight : 0;
    const need = Math.max(window.innerHeight - headerH, 1000);
    document.documentElement.style.setProperty('--footer-min', need + 'px');
  }
  setFooterMin();
  window.addEventListener('resize', setFooterMin);

  // INISIALISASI HERO: Tampilkan Hero setelah DOM siap
  if (heroTitle) heroTitle.classList.add('in-view');

  let vh = window.innerHeight || 1;
  let smY = 0;
  let contentAnimated=false;

  /* Util: absolute top relative ke scroll-container (#spa) */
  function absTopWithinSpa(el){
    let y = 0; let node = el;
    while (node && node !== spa){ y += node.offsetTop || 0; node = node.offsetParent; }
    return y;
  }

  /* ===== Section 2: Inisialisasi posisi asset dari inline CSS variables ===== */
  const parallaxAssets = document.querySelectorAll('.parallax-asset');
  
  parallaxAssets.forEach(asset => {
    const style = asset.style;
    const width = style.getPropertyValue('--w') || '45rem';
    const leftX = style.getPropertyValue('--lx') || '50%';
    const topY = style.getPropertyValue('--ty') || '2rem';
    
    asset.style.width = width;
    asset.style.left = leftX;
    
    // Simpan BASE transform (horizontal center + vertical offset) di data-attribute.
    const baseTransform = `translate(-50%, ${topY})`;
    asset.setAttribute('data-base-transform', baseTransform);
    asset.style.transform = baseTransform;
  });

  function applyAssetTransforms(p){
      const parallaxX = -p * 800; // Parallax horizontal scroll effect
      parallaxAssets.forEach(asset=>{
          const base = asset.getAttribute('data-base-transform') || 'translate(-50%, 2rem)';
          // Gabungkan base transform (center Y + offset Y) dengan Parallax X
          asset.style.transform = `${base} translateX(${parallaxX}px) translateZ(0)`;
      });
  }
  /* ************************************************************************* */


  /* ===== Loyal Royal (manual parallax + center pick) ===== */
  const section = document.getElementById('go-loyal-royal');
  const sticky = document.getElementById('royal-sticky-wrapper');
  const bg = document.getElementById('reward-bg-container');
  const textBlocks = Array.from(document.querySelectorAll('.reward-text-block'));
  const triggers = Array.from(document.querySelectorAll('#royal-scroll-content .reward-trigger-space'));
  const headerH = header ? header.offsetHeight : 0;

  function updateRoyal(){
    if (!section || !sticky || !bg) return;
    const sectionTop = absTopWithinSpa(section);
    const stickyHeight = sticky.offsetHeight;
    const totalScrollable = Math.max(1, section.offsetHeight - stickyHeight);
    const progress = Math.min(1, Math.max(0, (smY - sectionTop) / totalScrollable));
    bg.style.transform = `translateY(${-50 * progress}%)`;

    const visualCenter = smY + headerH + (vh - headerH)/2;
    let bestI = 0, bestD = Infinity;
    triggers.forEach((t,i)=>{
      const top = absTopWithinSpa(t);
      const cy = top + t.offsetHeight/2;
      const d = Math.abs(cy - visualCenter);
      if (d < bestD){bestD = d; bestI = i;}
    });
    textBlocks.forEach((b,i)=> b.classList.toggle('active', i===bestI));
  }

  /* ===== Footer Parallax ===== */
  const footerSec = document.getElementById('footer');
  function footerParallax(){
    if(!footerSec) return;
    const top = absTopWithinSpa(footerSec);
    const h   = footerSec.offsetHeight || 1;
    const p = Math.max(0, Math.min(1, (smY - top) / h)); 

    // Watermark (persen → lambat)
    const giantDepth = Number(getComputedStyle(document.documentElement)
                       .getPropertyValue('--footer-parallax-depth-giant')) || 34;
    const giantShift = (10 - p * giantDepth);
    document.documentElement.style.setProperty('--fgY', giantShift + '%');

    // Konten (px → sedikit)
    const contentDepth = Number(getComputedStyle(document.documentElement)
                         .getPropertyValue('--footer-parallax-depth-content')) || 140;
    const contentShift = -(p * contentDepth);
    document.documentElement.style.setProperty('--fiY', contentShift + 'px');
  }

  /* Reveal-on-view umum (viewport IO) */
  (() => {
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const el = entry.target;
          const d = el.dataset.delay || el.style.getPropertyValue('--d') || 0;
          if(d) el.style.setProperty('--d', typeof d==='string'? d : d+'s');
          el.classList.add('in-view');
          io.unobserve(el);
        }
      })
    },{root: null, threshold:0.2});
    document.querySelectorAll('.anim').forEach(el=> io.observe(el));
  })();

  /* Rank rotator */
  (() => {
    const sec = document.getElementById('promo-peringkat');
    if (!sec) return;
    const rankItems = sec.querySelectorAll('.peringkat-item');
    const imageCards = sec.querySelectorAll('.image-card');
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          const id = e.target.dataset.imageTarget;
          const img = document.querySelector(id);
          if (img){ imageCards.forEach(c=>c.classList.remove('active')); img.classList.add('active'); }
          e.target.querySelectorAll('.anim').forEach(el => el.classList.add('in-view'));
        }
      });
    }, { root:null, rootMargin:'-30% 0px -30% 0px', threshold:0.1 });
    document.getElementById('img-gold')?.classList.add('active');
    rankItems.forEach(i=>obs.observe(i));
  })();

  /* Cursor & magnet & kinetic & Countdown */
  // ... (Kode untuk UI kecil tidak diubah) ...
  const cur = document.getElementById('cursor');
  if(cur){
    let cx=innerWidth/2, cy=innerHeight/2, tx=cx, ty=cy;
    addEventListener('pointermove',e=>{tx=e.clientX; ty=e.clientY});
    (function tick(){ cx+=(tx-cx)*0.12; cy+=(ty-cy)*0.12; cur.style.transform=`translate(${cx}px,${cy}px)`; requestAnimationFrame(tick)})();
  }
  document.querySelectorAll('.magnet').forEach(el=>{
    const str=12;
    el.addEventListener('pointermove',e=>{
      const b=el.getBoundingClientRect(); const x=(e.clientX-(b.left+b.width/2))/b.width; const y=(e.clientY-(b.top+b.height/2))/b.height;
      el.style.transform=`translate(${x*str}px,${y*str}px)`;
    });
    el.addEventListener('pointerleave',()=>{el.style.transform='translate(0,0)'});
  });
  document.querySelectorAll('h1').forEach(container=>{
    if (container.classList.contains('kinetic')) return;
    let newHtml='';
    [...container.childNodes].forEach(node=>{
      if (node.nodeType===Node.TEXT_NODE){
        newHtml += [...node.textContent].map(ch=>`<span>${ch===' ' ? '&nbsp;' : ch}</span>`).join('');
      } else if (node.nodeType===Node.ELEMENT_NODE){
        let inner=[...node.textContent].map(ch=>`<span class="${node.className}">${ch===' ' ? '&nbsp;' : ch}</span>`).join('');
        newHtml += inner;
      }
    });
    container.innerHTML=newHtml;
    container.classList.add('kinetic');
  });
  (()=>{
    const spans=document.querySelectorAll('.kinetic span'); if(!spans.length)return;
    const MAX=100,LIFT=12,PUSH=0.05,ROT=0.25,LERP=0.2;
    let mx=innerWidth/2,my=innerHeight/2;
    addEventListener('pointermove',e=>{mx=e.clientX; my=e.clientY});
    const ds=[...spans].map(el=>({el,cx:0,cy:0}));
    (function loop(){
      ds.forEach(d=>{
        const r=d.el.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2;
        const dx=mx-cx, dy=my-cy, dist=Math.hypot(dx,dy);
        let tx=0, ty=0;
        if(dist<MAX){const i=1-(dist/MAX); tx=-dx*PUSH*i; ty=-LIFT*i;}
        d.cx+=(tx-d.cx)*LERP; d.cy+=(ty-d.cy)*LERP;
        d.el.style.transform=`translate(${d.cx}px,${d.cy}px) rotate(${d.cx*ROT}deg)`;
      });
      requestAnimationFrame(loop);
    })();
  })();
  (()=>{
    const d=document.getElementById('cd-days'), h=document.getElementById('cd-hours'), m=document.getElementById('cd-min'), s=document.getElementById('cd-sec');
    if(!d||!h||!m||!s) return;
    const target=new Date('2026-08-31T23:59:59+07:00');
    const pad=(n,len=2)=>String(Math.max(0,n)).padStart(len,'0');
    function tick(){
      const diff=Math.max(0, target - new Date());
      s.textContent=pad(Math.floor(diff/1000)%60);
      m.textContent=pad(Math.floor(diff/60000)%60);
      h.textContent=pad(Math.floor(diff/3600000)%24);
      d.textContent=pad(Math.floor(diff/86400000),3);
    }
    tick(); setInterval(tick,1000);
  })();


  /* RAF loop */
  function raf(){
    const targetY = spa ? spa.scrollTop : 0;
    smY += (targetY - smY) * 0.15;

    // progress bar
    if (spa && prog){
      const max = spa.scrollHeight - spa.clientHeight;
      prog.style.width = (max>0 ? (smY/max)*100 : 0) + '%';
    }

    // hero lift
    if (heroTitle){
      const t = Math.min(Math.max(smY / vh, 0), 1);
      heroTitle.style.setProperty('--py', `${-40 * t}px`);
    }

    // SECTION 2 horizontal
    if (promoPribadi && horizontalWrapper){
      const range = (horizontalWrapper.offsetHeight - vh);
      const start = horizontalWrapper.offsetTop;
      if (range > 0){
        if (smY >= start && smY <= start+range){
          if (!contentAnimated){
            document.querySelector('#promo-pinning h2')?.classList.add('in-view');
            document.querySelectorAll('#promo-pribadi .anim').forEach(el => el.classList.add('in-view'));
            contentAnimated = true;
          }
          const p = (smY - start) / range;
          const tx = -p * (promoPribadi.scrollWidth - window.innerWidth);
          promoPribadi.style.transform = `translateX(${tx}px)`;
          
          applyAssetTransforms(p);

        } else if (smY < start) {
          promoPribadi.style.transform = `translateX(0px)`; contentAnimated=false;
          applyAssetTransforms(0); 
        } else {
          promoPribadi.style.transform = `translateX(-${promoPribadi.scrollWidth - window.innerWidth}px)`; contentAnimated=false;
          applyAssetTransforms(1);
        }
      }
    }

    // Loyal Royal (parallax + pilih teks)
    updateRoyal();

    // Footer Parallax
    footerParallax();

    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
});

// PERBAIKAN AKHIR: Paksa scroll ke Hero setelah semua dimuat
window.onload = () => {
    const hero = document.getElementById('hero');
    const spa = document.getElementById('spa');
    
    if (hero && spa) {
        // Nonaktifkan sementara smooth scroll
        spa.style.scrollBehavior = 'auto'; 
        
        // Paksa gulir ke #hero
        hero.scrollIntoView({ behavior: 'instant' }); 
        
        // Kembalikan smooth scroll setelah jeda sangat singkat
        setTimeout(() => {
            spa.style.scrollBehavior = 'smooth'; 
        }, 50); 
    }
};
