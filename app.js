const topics=[
['الصحة','الصحة النفسية وكيفية الاهتمام بها'],['الصحة','أضرار التدخين على الفرد والأسرة'],['الصحة','أهمية ممارسة الرياضة للصحة'],['الصحة','التعامل مع التوتر والضغوط'],['الصحة','أثر الإفراط في استخدام الهاتف على الصحة'],['الصحة','أهمية الفحص الطبي الدوري'],
    ['التعليم','دور التعليم في بناء المستقبل'],['التعليم','أهمية القراءة في تنمية المعرفة'],['التعليم','التعليم عن بُعد: الفرص والتحديات'],['التعليم','دور المعلم في حياة الطلاب'],['التعليم','أهمية تعلّم اللغات'],['التعليم','التعلّم المستمر بعد التخرج'],['التعليم','استخدام التكنولوجيا في التعليم'],['التعليم','التعاون بين المدرسة والأسرة'],['التعليم','تنمية مهارات التفكير النقدي'],['التعليم','أسباب التسرب من التعليم وطرق الحد منه'],
    ['الرياضة','الرياضة وأثرها على الصحة النفسية'],['الرياضة','أهمية الرياضة الجماعية'],['الرياضة','الروح الرياضية وتقبّل الفوز والخسارة'],['الرياضة','دور الرياضة في بناء شخصية الشباب'],['الرياضة','تشجيع الأطفال على ممارسة الرياضة'],['الرياضة','كرة القدم وتأثيرها في المجتمع'],['الرياضة','المرأة والرياضة'],['الرياضة','تنظيم البطولات الرياضية'],['الرياضة','الرياضة كوسيلة للتقارب بين الشعوب'],['الرياضة','مخاطر المنشطات في الرياضة'],
    ['الثقافة والإعلام','دور القراءة في توسيع مدارك الإنسان'],['الثقافة والإعلام','أهمية الحفاظ على التراث'],['الثقافة والإعلام','تأثير الأفلام والمسلسلات على المجتمع'],['الثقافة والإعلام','دور الإعلام في نشر الوعي'],['الثقافة والإعلام','الأخبار الكاذبة وكيفية التحقق منها'],['الثقافة والإعلام','أهمية الحوار بين الثقافات'],['الثقافة والإعلام','الفنون ودورها في التعبير عن المجتمع'],['الثقافة والإعلام','المتاحف وأهميتها للأجيال الجديدة'],['الثقافة والإعلام','تأثير الموسيقى في الحالة النفسية'],['الثقافة والإعلام','الهوية الثقافية في عصر العولمة'],
    ['البيئة والتطور','مسؤولية الفرد في الحفاظ على البيئة'],['البيئة والتطور','ترشيد استهلاك الماء والكهرباء'],['البيئة والتطور','إعادة التدوير وتقليل النفايات'],['البيئة والتطور','التغير المناخي وتأثيره على حياتنا'],['البيئة والتطور','أهمية المساحات الخضراء في المدن'],['البيئة والتطور','الطاقة المتجددة ومستقبل العالم'],['البيئة والتطور','الذكاء الاصطناعي في حياتنا اليومية'],['البيئة والتطور','فوائد التكنولوجيا ومخاطرها'],['البيئة والتطور','المدن الذكية وتسهيل حياة السكان'],['البيئة والتطور','وسائل النقل الحديثة وتقليل الازدحام'],
    ['التنمية البشرية','إدارة الوقت وتحقيق الأهداف'],['التنمية البشرية','الثقة بالنفس وأثرها في النجاح'],['التنمية البشرية','التعامل مع الفشل والتعلّم منه'],['التنمية البشرية','مهارة اتخاذ القرار'],['التنمية البشرية','أهمية العمل الجماعي'],['التنمية البشرية','كيف نطوّر مهارات التواصل؟'],['التنمية البشرية','وضع أهداف واقعية للمستقبل'],['التنمية البشرية','التوازن بين العمل والحياة'],['التنمية البشرية','قوة العادات اليومية الصغيرة'],['التنمية البشرية','التفكير الإيجابي ومواجهة التحديات'],
    ['الدين والقيم','التسامح وأثره في استقرار المجتمع'],['الدين والقيم','الصدق وأهميته في التعامل بين الناس'],['الدين والقيم','احترام الاختلاف في الرأي'],['الدين والقيم','مساعدة المحتاجين وقيمة التكافل'],['الدين والقيم','الرحمة في التعامل مع الآخرين'],['الدين والقيم','الأمانة في العمل والدراسة'],['الدين والقيم','برّ الوالدين ورعاية الأسرة'],['الدين والقيم','أثر القيم الدينية في السلوك اليومي'],['الدين والقيم','العفو والتسامح عند الخلاف'],['الدين والقيم','المسؤولية الفردية تجاه المجتمع'],
    ['الاقتصاد والعمل','أهمية الادخار والتخطيط للمستقبل'],['الاقتصاد والعمل','تنظيم المصروف الشخصي'],['الاقتصاد والعمل','ريادة الأعمال ودورها في توفير فرص العمل'],['الاقتصاد والعمل','أهمية التدريب قبل دخول سوق العمل'],['الاقتصاد والعمل','العمل من المنزل: المزايا والتحديات'],['الاقتصاد والعمل','دور المرأة في سوق العمل'],['الاقتصاد والعمل','البطالة وتأثيرها على الشباب'],['الاقتصاد والعمل','أخلاقيات العمل واحترام الزملاء'],['الاقتصاد والعمل','المهن التي يحتاج إليها المستقبل'],['الاقتصاد والعمل','أهمية المشروعات الصغيرة للمجتمع']
  ];

const totalSeconds = 120;
let pool = [], current = null, remaining = totalSeconds, interval = null, paused = false, started = false;
let seen = 0, round = 1, history = [], spinning = false, spinToken = 0, audioCtx = null;

const $ = id => document.getElementById(id);
const intro = $('intro'), screen = $('topicScreen'), challenge = $('challenge'), roundLabel = $('roundLabel');
const preview = $('drawPreview'), categoryText = $('categoryText'), spinBtn = $('spinBtn');
const clock = $('clock'), fill = $('fill'), status = $('status'), progress = $('progress');
const beginBtn = $('beginBtn'), pauseBtn = $('pauseBtn'), previousBtn = $('previousBtn'), restartBtn = $('restartBtn');

function shuffle(items) { for (let i = items.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [items[i], items[j]] = [items[j], items[i]]; } return items; }
function clockText(s) { return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); }
function stopTimer() { clearInterval(interval); interval = null; started = false; paused = false; }
function updateProgress() { progress.textContent = seen ? 'موضوعات مكشوفة: ' + seen : 'اضغط «اسحب موضوعًا عشوائيًا» للبدء'; }

function paint() {
  clock.textContent = clockText(remaining);
  fill.style.width = Math.max(0, remaining / totalSeconds * 100) + '%';
  const urgent = remaining <= 15 && started;
  clock.classList.toggle('urgent', urgent); fill.classList.toggle('urgent', urgent);
  clock.setAttribute('aria-label', 'الوقت المتبقي ' + clockText(remaining));
}

// صوت "تكّة" خفيف أثناء سحب الموضوع (لو المتصفح ما يدعمش الصوت، السحب يشتغل عادي)
function playDrawTick(p = 0) {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    if (!audioCtx) audioCtx = new AC();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const now = audioCtx.currentTime, osc = audioCtx.createOscillator(), gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(1050 - p * 280, now);
    osc.frequency.exponentialRampToValueAtTime(620 - p * 120, now + 0.025);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.075, now + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(now); osc.stop(now + 0.04);
  } catch (e) {}
}

function resetChallengeControls(beginLabel) {
  remaining = totalSeconds; stopTimer();
  beginBtn.hidden = false; beginBtn.disabled = false; beginBtn.textContent = beginLabel || 'ابدأ التحدّي ▶';
  pauseBtn.textContent = 'إيقاف مؤقت'; pauseBtn.disabled = true;
  paint();
}

function showCurrent() {
  preview.textContent = current.text;
  categoryText.textContent = 'التصنيف: ' + current.category;
  categoryText.hidden = false;
  challenge.hidden = false;
  spinBtn.textContent = 'اسحب موضوعًا آخر ←';
  previousBtn.disabled = history.length === 0;
  updateProgress();
}

function spinTopic() {
  if (spinning) return;
  stopTimer();
  if (current) history.push({ item: current, remaining });
  if (!pool.length) { pool = shuffle([...topics]); round++; roundLabel.textContent = 'الموضوعات — الجولة ' + round; }
  const raw = pool.pop(), token = ++spinToken;
  spinning = true; spinBtn.disabled = true; previousBtn.disabled = true;
  challenge.hidden = true; categoryText.hidden = true;
  $('drawWindow').classList.add('spinning');
  const start = performance.now(), duration = 2800;
  let lastSwap = 0;
  function animate(now) {
    if (token !== spinToken) return; // تم الرجوع للرئيسية أثناء السحب
    const elapsed = now - start, t = Math.min(1, elapsed / duration);
    if (elapsed - lastSwap >= 45 + Math.pow(t, 2) * 230) {
      preview.textContent = topics[Math.floor(Math.random() * topics.length)][1];
      playDrawTick(t); lastSwap = elapsed;
    }
    if (t < 1) { requestAnimationFrame(animate); return; }
    spinning = false; spinBtn.disabled = false;
    $('drawWindow').classList.remove('spinning');
    current = { category: raw[0], text: raw[1] };
    seen++;
    resetChallengeControls();
    showCurrent();
    status.textContent = 'تم اختيار موضوعك! اضغط «ابدأ التحدّي» ليبدأ عدّ الدقيقتين.';
    beginBtn.focus({ preventScroll: true });
  }
  requestAnimationFrame(animate);
}

function beginChallenge() {
  if (!current || started || spinning) return;
  if (remaining <= 0) { remaining = totalSeconds; }
  started = true; paused = false; beginBtn.hidden = true; pauseBtn.disabled = false;
  status.textContent = 'بدأ الوقت — قدّم ترجمتك الآن';
  paint();
  clearInterval(interval); interval = setInterval(tick, 1000);
}

function tick() {
  if (paused || !started) return;
  if (remaining > 0) { remaining--; paint(); }
  if (remaining === 0) {
    stopTimer(); pauseBtn.disabled = true;
    beginBtn.hidden = false; beginBtn.textContent = 'ابدأ التحدّي من جديد ↻';
    status.textContent = 'انتهى الوقت — ناقشوا الإجابة، أو ابدأ من جديد، أو اسحب موضوعًا آخر.';
    paint();
    spinBtn.focus({ preventScroll: true });
  }
}

function togglePause() {
  if (!current || !started || remaining === 0) return;
  paused = !paused;
  pauseBtn.textContent = paused ? 'استئناف' : 'إيقاف مؤقت';
  status.textContent = paused ? 'الوقت متوقف مؤقتًا' : 'بدأ الوقت — قدّم ترجمتك الآن';
}

function restartChallenge() {
  if (!current || spinning) return;
  resetChallengeControls();
  status.textContent = 'تمت إعادة الوقت. اضغط «ابدأ التحدّي» عندما تكون مستعدًا.';
}

function goPrevious() {
  if (spinning || !history.length) return;
  const last = history.pop();
  current = last.item;
  resetChallengeControls('استكمال التحدّي ▶');
  remaining = last.remaining; paint();
  showCurrent();
  status.textContent = 'رجعنا للموضوع السابق. اضغط على الزر لاستكماله.';
}

function openTopics() {
  stopTimer(); spinToken++; spinning = false;
  current = null; history = []; seen = 0; round = 1; pool = shuffle([...topics]);
  preview.textContent = 'اضغط الزر لسحب موضوع عشوائي';
  $('drawWindow').classList.remove('spinning');
  categoryText.hidden = true; challenge.hidden = true;
  spinBtn.disabled = false; spinBtn.textContent = 'اسحب موضوعًا عشوائيًا';
  roundLabel.textContent = 'سحب موضوع عشوائي'; roundLabel.hidden = false;
  intro.hidden = true; screen.hidden = false;
  updateProgress();
  spinBtn.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function goHome() {
  stopTimer(); spinToken++; spinning = false;
  $('drawWindow').classList.remove('spinning');
  screen.hidden = true; intro.hidden = false; roundLabel.hidden = true;
  progress.textContent = 'اضغط على «تحدّي الموضوعات» للبدء';
  $('startTopics').focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

$('startTopics').addEventListener('click', openTopics);
$('backBtn').addEventListener('click', goHome);
spinBtn.addEventListener('click', spinTopic);
beginBtn.addEventListener('click', beginChallenge);
pauseBtn.addEventListener('click', togglePause);
restartBtn.addEventListener('click', restartChallenge);
previousBtn.addEventListener('click', goPrevious);

document.addEventListener('keydown', e => {
  if (screen.hidden || e.ctrlKey || e.metaKey || e.altKey) return;
  const onButton = e.target.closest && e.target.closest('button');
  if (e.code === 'Space' && !onButton && current && !spinning) { e.preventDefault(); if (!started) beginChallenge(); else togglePause(); }
  else if (e.key === 'n' || e.key === 'N') spinTopic();
  else if (e.key === 'p' || e.key === 'P') goPrevious();
  else if (e.key === 'Escape') goHome();
});

// ---- شاشة الترحيب: تظهر 40 ثانية مع Loading ثم يفتح المشروع ----
const SPLASH_SECONDS = 5;
(function runSplash() {
  const splash = $('splash'), app = $('app'), fillEl = $('splashFill'), pct = $('splashPct');
  const t0 = performance.now();
  const timer = setInterval(() => {
    const p = Math.min(1, (performance.now() - t0) / (SPLASH_SECONDS * 1000));
    fillEl.style.width = (p * 100) + '%'; pct.textContent = Math.floor(p * 100) + '%';
    if (p >= 1) {
      clearInterval(timer);
      app.inert = false; app.removeAttribute('inert');
      splash.classList.add('done');
      setTimeout(() => { splash.remove(); $('startTopics').focus({ preventScroll: true }); }, 650);
    }
  }, 250);
})();
