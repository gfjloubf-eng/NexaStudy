import { NavLink, useParams } from 'react-router-dom'
import { Button } from '../../shared/ui/Button'
import { Input } from '../../shared/ui/Input'
import '../../styles/tokens.css'

type LessonStatus = 'لم يبدأ' | 'قيد التقدم' | 'مكتمل'

type Lesson = {
  id: number
  title: string
  duration: string
  status: LessonStatus
}

export function CourseDetailsPage() {
  const { id } = useParams<{ id: string }>()

  const lessons: Lesson[] = [
    { id: 1, title: 'الدرس 1: المدخل إلى البرمجة', duration: '10:30', status: 'قيد التقدم' },
    { id: 2, title: 'الدرس 2: المتغيرات والتحكم', duration: '08:45', status: 'لم يبدأ' },
    { id: 3, title: 'الدرس 3: الدوال والمنطق', duration: '12:10', status: 'لم يبدأ' },
    { id: 4, title: 'الدرس 4: التراكيب والبيانات', duration: '09:55', status: 'لم يبدأ' },
    { id: 5, title: 'الدرس 5: مشروع التطبيق البسيط', duration: '11:25', status: 'لم يبدأ' },
  ]

  const stats = [
    { label: 'عدد الدروس', value: String(lessons.length) },
    { label: 'المدة الإجمالية', value: '52:45' },
    { label: 'المستوى', value: 'متوسط' },
    { label: 'نسبة التقدم', value: '40%' },
  ]

  const progress = 40

  return (
    <div className="course-shell" dir="rtl" lang="ar">
      <style>{`
        .course-shell { min-height: 100vh; background: var(--auth-bg); color: var(--auth-text); padding: 24px; box-sizing: border-box; }
        .course-hero { display: grid; grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr); gap: 24px; margin-bottom: 24px; }
        .hero-content { display: grid; gap: 16px; }
        .hero-badge { width: fit-content; padding: 10px 14px; border-radius: 999px; background: color-mix(in srgb, var(--auth-accent) 12%, transparent); color: var(--auth-accent); font-weight: 900; }
        .hero-title { margin: 0; font-size: clamp(2rem, 2.5vw, 2.6rem); line-height: 1.05; }
        .hero-copy { margin: 0; color: var(--auth-muted); line-height: 1.9; max-width: 720px; }
        .hero-tags { display: flex; flex-wrap: wrap; gap: 12px; }
        .hero-tag { padding: 10px 14px; border-radius: 999px; background: var(--color-surface); border: 1px solid var(--auth-border); color: var(--auth-muted); font-weight: 700; }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }

        .hero-card { background: linear-gradient(180deg, rgba(79, 70, 229, 0.08), rgba(255, 255, 255, 0.96)); border: 1px solid var(--auth-border); border-radius: var(--radius-xl); padding: 24px; display: grid; gap: 20px; }
        .hero-card h3 { margin: 0; }
        .hero-card p { margin: 0; color: var(--auth-muted); line-height: 1.75; }
        .hero-card-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .hero-card-item { padding: 16px; border-radius: var(--radius-md); background: var(--color-surface); border: 1px solid var(--auth-border); }
        .hero-card-item span { display: block; color: var(--auth-muted); font-size: 0.9rem; margin-bottom: 8px; }
        .hero-card-item strong { color: var(--auth-text); font-size: 1.2rem; }

        .course-layout { max-width: 1320px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 1.1fr) 340px; gap: 24px; align-items: start; }
        .course-main { display: grid; gap: 24px; }
        .course-sidebar { background: var(--auth-surface); border: 1px solid var(--auth-border); border-radius: var(--radius-xl); box-shadow: var(--auth-shadow); backdrop-filter: blur(16px); padding: 18px; display: grid; gap: 18px; }

        .course-banner { padding: 24px; border-radius: var(--radius-xl); background: linear-gradient(180deg, rgba(79, 70, 229, 0.06), rgba(255, 255, 255, 0.98)); border: 1px solid var(--auth-border); }
        .course-banner h2 { margin: 0; font-size: 1.35rem; }
        .course-banner p { margin: 12px 0 0; color: var(--auth-muted); line-height: 1.8; }
        .course-overview { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; margin-top: 22px; }
        .overview-card { padding: 16px; border-radius: var(--radius-md); background: var(--color-surface); border: 1px solid var(--auth-border); }
        .overview-card strong { display: block; margin-top: 10px; color: var(--auth-text); font-size: 1.15rem; }

        .lesson-list-card { padding: 20px; border-radius: var(--radius-xl); background: var(--auth-surface); border: 1px solid var(--auth-border); }
        .lessons-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 18px; }
        .lessons-header h2 { margin: 0; color: var(--auth-text); font-size: 1.25rem; }

        .lessons-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
        .lesson-card { padding: 18px; border-radius: var(--radius-md); background: var(--color-surface); border: 1px solid var(--auth-border); display: grid; gap: 12px; text-align: right; }
        .lesson-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
        .lesson-title { margin: 0; font-weight: 900; }
        .lesson-meta { margin: 0; color: var(--auth-muted); font-size: 0.95rem; }

        .pill { padding: 6px 12px; border-radius: 999px; border: 1px solid var(--auth-border); font-weight: 800; font-size: 0.9rem; width: fit-content; }
        .pill--started { color: var(--auth-accent); background: color-mix(in srgb, var(--auth-accent) 10%, transparent); border-color: color-mix(in srgb, var(--auth-accent) 30%, var(--auth-border) 70%); }
        .pill--not-started { color: var(--auth-muted); background: var(--color-surface-muted); }
        .pill--done { color: #0b7a4a; background: color-mix(in srgb, #10b981 12%, transparent); border-color: color-mix(in srgb, #10b981 35%, var(--auth-border) 65%); }

        .lesson-actions { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
        .lesson-actions span { color: var(--auth-muted); font-weight: 700; }

        .sidebar-highlight { display: grid; gap: 14px; }
        .sidebar-highlight h3 { margin: 0; }
        .sidebar-highlight p { margin: 0; color: var(--auth-muted); line-height: 1.75; }

        .instructor { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .instructor-left { display: flex; align-items: center; gap: 12px; }
        .avatar { width: 44px; height: 44px; border-radius: 14px; background: color-mix(in srgb, var(--auth-accent) 20%, var(--color-surface) 80%); border: 1px solid var(--auth-border); display: grid; place-items: center; font-weight: 900; color: var(--auth-accent); }
        .instructor-name { margin: 0; font-weight: 800; }
        .instructor-role { margin: 2px 0 0; color: var(--auth-muted); font-size: 0.95rem; }

        .progress-wrap { display: grid; gap: 10px; }
        .progress-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
        .progress-row strong { color: var(--auth-text); }
        .track { width: 100%; height: 10px; background: var(--color-surface-muted); border-radius: 999px; overflow: hidden; }

        @media (max-width: 1024px) {
          .course-layout { grid-template-columns: 1fr; }
          .course-hero { grid-template-columns: 1fr; }
          .hero-card-grid { grid-template-columns: 1fr; }
          .course-overview { grid-template-columns: 1fr; }
          .lessons-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .course-shell { padding: 14px; }
          .course-sidebar { padding: 16px; }
          .hero-actions { flex-direction: column; align-items: stretch; }
        }
      `}</style>

      <div className="course-hero">
        <div className="hero-content">
          <span className="hero-badge">مسار تعليمي جديد</span>
          <h1 className="hero-title">مقدمة في البرمجة</h1>
          <p className="hero-copy">
            دورة منظمة تضعك على الطريق الصحيح لبناء أساس قوي في البرمجة، مع دروس قصيرة ومباشرة تساعدك على التقدّم بثقة.
          </p>
          <div className="hero-tags">
            <span className="hero-tag">مبتدئ إلى متوسط</span>
            <span className="hero-tag">5 دروس</span>
            <span className="hero-tag">تقدّم مرئي</span>
          </div>
          <div className="hero-actions">
            <Button>مواصلة التعلم</Button>
            <Button variant="secondary">عرض الخطة</Button>
          </div>
        </div>

        <div className="hero-card">
          <div>
            <h3>لمحة عن الدورة</h3>
            <p>واجهة مخصصة لتتبع التقدم والانتقال بين الدروس بسرعة مع تصميم متناسق واحترافي.</p>
          </div>
          <div className="hero-card-grid">
            {stats.map((item) => (
              <div key={item.label} className="hero-card-item">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="course-layout">
        <main className="course-main">
          <section className="course-banner">
            <h2>رحلة تعلم واضحة</h2>
            <p>
              استكشف دورة مع محتوى مصمم للتركيز وتقدّم مدعوم ببطاقة تعليمية مرتبة. هذه الصفحة UI فقط، بدون ربط خلفي.
            </p>
            <div className="course-overview">
              <div className="overview-card">
                <span>المستوى</span>
                <strong>متوسط</strong>
              </div>
              <div className="overview-card">
                <span>التقدّم</span>
                <strong>{progress}%</strong>
              </div>
              <div className="overview-card">
                <span>عدد الدروس</span>
                <strong>5</strong>
              </div>
              <div className="overview-card">
                <span>المدرّب</span>
                <strong>سارة أحمد</strong>
              </div>
            </div>
          </section>

          <section className="lesson-list-card">
            <div className="lessons-header">
              <h2>قائمة الدروس</h2>
              <Button variant="secondary">تصفية الحالة</Button>
            </div>
            <div className="lessons-grid">
              {lessons.map((lesson) => {
                const pillClass =
                  lesson.status === 'قيد التقدم'
                    ? 'pill pill--started'
                    : lesson.status === 'مكتمل'
                    ? 'pill pill--done'
                    : 'pill pill--not-started'

                return (
                  <article key={lesson.id} className="lesson-card">
                    <div className="lesson-card-top">
                      <div>
                        <p className="lesson-title">{lesson.title}</p>
                        <p className="lesson-meta">المدة: {lesson.duration}</p>
                      </div>
                      <div className={pillClass}>{lesson.status}</div>
                    </div>
                    <div className="lesson-actions">
                      <NavLink to={`/course/${id ?? '1'}/lesson/${lesson.id}`} style={{ textDecoration: 'none' }}>
                        <Button>فتح الدرس</Button>
                      </NavLink>
                      <span className="muted">انتقال سريع</span>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        </main>

        <aside className="course-sidebar">
          <div className="card sidebar-highlight">
            <h3>بطاقة المدرّب</h3>
            <div className="instructor">
              <div className="instructor-left">
                <div className="avatar">SA</div>
                <div>
                  <p className="instructor-name">سارة أحمد</p>
                  <p className="instructor-role">خبيرة تدريب وتطوير برامج</p>
                </div>
              </div>
            </div>
            <p>مدرّبة متخصصة في تعليم البرمجة عبر مسارات واضحة وتجارب وحدات دراسية مرنة.</p>
          </div>

          <div className="card sidebar-highlight">
            <h3>التقدم الحالي</h3>
            <div className="progress-wrap">
              <div className="progress-row">
                <span className="muted">أكملت</span>
                <strong>{progress}%</strong>
              </div>
              <div className="track" aria-label="شريط تقدم الدورة">
                <div className="fill" style={{ width: `${progress}%` }} />
              </div>
            </div>
            <p className="muted">تقدّم ثابت نحو الهدف مع كل درس تكمله.</p>
          </div>

          <div className="card sidebar-highlight">
            <h3>ملخص الدورة</h3>
            <div className="stats-grid">
              {stats.map((item) => (
                <div key={item.label} className="stat">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="card sidebar-highlight">
            <h3>بحث داخل الدورة</h3>
            <Input placeholder="ابحث عن درس أو موضوع" />
            <Button variant="secondary">بحث</Button>
          </div>
        </aside>
      </div>
    </div>
  )
}

