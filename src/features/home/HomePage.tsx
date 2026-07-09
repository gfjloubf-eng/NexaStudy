

import { Link } from 'react-router-dom'


import { Button } from '../../shared/ui/Button'

export function HomePage() {

  return (
    <div className="home-shell" dir="rtl" lang="ar">
      <style>{`
        .home-shell { min-height: 100vh; background: var(--auth-bg); color: var(--auth-text); padding: 24px; box-sizing: border-box; }

        .home-container { max-width: 1320px; margin: 0 auto; display: grid; gap: 28px; }

        .hero { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); gap: 24px; align-items: center; }
        .hero-content { display: grid; gap: 16px; }

        .hero-badge { width: fit-content; padding: 10px 14px; border-radius: 999px; background: color-mix(in srgb, var(--auth-accent) 12%, transparent); border: 1px solid color-mix(in srgb, var(--auth-accent) 30%, var(--auth-border) 70%); color: var(--auth-accent); font-weight: 900; }
        .hero-title { margin: 0; font-size: clamp(2rem, 3vw, 3rem); line-height: 1.05; }
        .hero-copy { margin: 0; color: var(--auth-muted); line-height: 1.9; max-width: 680px; }

        .hero-cta { display: flex; gap: 12px; flex-wrap: wrap; }

        .hero-card { background: linear-gradient(180deg, rgba(79, 70, 229, 0.08), rgba(255, 255, 255, 0.96)); border: 1px solid var(--auth-border); border-radius: var(--radius-xl); padding: 22px; display: grid; gap: 14px; }
        .hero-card h3 { margin: 0; }
        .hero-card p { margin: 0; color: var(--auth-muted); line-height: 1.75; }

        .feature-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
        .feature { padding: 18px; border-radius: var(--radius-md); background: var(--auth-surface); border: 1px solid var(--auth-border); box-shadow: var(--auth-shadow); backdrop-filter: blur(10px); display: grid; gap: 10px; }
        .feature h4 { margin: 0; font-size: 1.05rem; }
        .feature p { margin: 0; color: var(--auth-muted); line-height: 1.7; }

        .stats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
        .stat { padding: 18px; border-radius: var(--radius-md); background: var(--color-surface); border: 1px solid var(--auth-border); }
        .stat span { color: var(--auth-muted); font-weight: 800; }
        .stat strong { display: block; margin-top: 10px; color: var(--auth-text); font-size: 1.35rem; }

        .cta-band { padding: 22px; border-radius: var(--radius-xl); border: 1px solid var(--auth-border); background: linear-gradient(180deg, rgba(79, 70, 229, 0.06), rgba(255, 255, 255, 0.98)); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .cta-band h2 { margin: 0; font-size: 1.6rem; }
        .cta-band p { margin: 0; color: var(--auth-muted); line-height: 1.75; }

        @media (max-width: 1024px) {
          .hero { grid-template-columns: 1fr; }
          .feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 640px) {
          .home-shell { padding: 14px; }
          .home-container { gap: 20px; }
          .feature-grid, .stats { grid-template-columns: 1fr; }
          .cta-band { padding: 18px; }
        }
      `}</style>

      <div className="home-container">
        <section className="hero" aria-label="البطاقة الرئيسية">
          <div className="hero-content">
            <span className="hero-badge">NexaStudy</span>
            <h1 className="hero-title">تعلم أسرع. فهم أعمق. تقدم واضح.</h1>
            <p className="hero-copy">
              منصة تعليمية UI فقط تعرض تجربة تعليم منظمة مع تتبع تقدم، وإدارة مسارات، ومساحة عمل للدراسة—مصممة لتكون
              سريعة ومتناسقة على جميع الأجهزة.
            </p>
            <div className="hero-cta">
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button>ابدأ الآن</Button>
              </Link>
              <Link to="/courses" style={{ textDecoration: 'none' }}>
                <Button variant="secondary">استعرض الدورات</Button>
              </Link>
            </div>
          </div>

          <div className="hero-card" aria-label="مزايا سريعة">
            <h3>نمط SaaS تعليمي</h3>
            <p>واجهات عربية RTL، بطاقات دورات احترافية، وشكل متسق يعزز الاعتماد والوضوح.</p>
            <p>— هذه واجهة تصميم فقط دون ربط خلفي.</p>
          </div>
        </section>

        <section aria-label="مزايا المنصة">
          <div className="feature-grid">
            <article className="feature">
              <h4>Smart Learning</h4>
              <p>ترتيب المحتوى لتقليل التشتيت وزيادة الفهم.</p>
            </article>
            <article className="feature">
              <h4>Progress Tracking</h4>
              <p>مؤشرات تقدم واضحة ومتابعة سلسة.</p>
            </article>
            <article className="feature">
              <h4>Course Management</h4>
              <p>تنظيم الدورات والمسارات داخل لوحة واحدة.</p>
            </article>
            <article className="feature">
              <h4>Study Workspace</h4>
              <p>واجهة دراسة مركّزة مع أهداف وملاحظات.</p>
            </article>
          </div>
        </section>

        <section aria-label="إحصائيات المنصة">
          <div className="stats">
            <div className="stat">
              <span>Courses</span>
              <strong>24</strong>
            </div>
            <div className="stat">
              <span>Lessons</span>
              <strong>128</strong>
            </div>
            <div className="stat">
              <span>Students</span>
              <strong>3,500</strong>
            </div>
            <div className="stat">
              <span>Completion Rate</span>
              <strong>62%</strong>
            </div>
          </div>
        </section>

        <section className="cta-band" aria-label="دعوة لاتخاذ إجراء">
          <div>
            <h2>ابدأ رحلتك التعليمية اليوم</h2>
            <p>واجهة UI جاهزة للاستخدام—مصممة للسرعة والاستجابة والوضوح.</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button>إنشاء حساب</Button>
            </Link>

            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="secondary">تسجيل الدخول</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}


