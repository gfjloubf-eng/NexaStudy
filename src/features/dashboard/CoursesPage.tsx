import { NavLink } from 'react-router-dom'
import { Button } from '../../shared/ui/Button'
import { Input } from '../../shared/ui/Input'
import '../../styles/tokens.css'

const menuItems = [
  { label: 'الرئيسية', to: '/dashboard' },
  { label: 'الدورات', to: '/courses' },
  { label: 'الاختبارات', to: '/exams' },
  { label: 'الواجبات', to: '/assignments' },
  { label: 'الإعدادات', to: '/settings' },
]

type Course = {
  title: string
  description: string
  instructor: string
  progress: number
  lessonsCount: number
}

const courses: Course[] = [
  {
    title: 'مقدمة في البرمجة',
    description: 'أساسيات واضحة مع خطوات قصيرة ومباشرة.',
    instructor: 'أ. سارة أحمد',
    progress: 72,
    lessonsCount: 10,
  },
  {
    title: 'الذكاء الاصطناعي',
    description: 'مفاهيم مدخلية مع تطبيقات UI فقط.',
    instructor: 'د. خالد محمد',
    progress: 54,
    lessonsCount: 12,
  },
  {
    title: 'تصميم واجهات',
    description: 'مبادئ UX/UI وتناسق بصري عبر بطاقات مرتبة.',
    instructor: 'أ. لينا ناصر',
    progress: 88,
    lessonsCount: 8,
  },
  {
    title: 'تحليل البيانات',
    description: 'قراءة واستنتاجات مع أمثلة توضيحية.',
    instructor: 'د. مروان سالم',
    progress: 41,
    lessonsCount: 9,
  },
  {
    title: 'إدارة المشاريع',
    description: 'تنظيم الخطوات وإدارة التقدم بصورة مرئية.',
    instructor: 'أ. ريم علي',
    progress: 67,
    lessonsCount: 11,
  },
  {
    title: 'اللغة العربية',
    description: 'مسار تدريبي لتقوية المهارات الأساسية.',
    instructor: 'أ. محمد ياسين',
    progress: 91,
    lessonsCount: 7,
  },
]

const categories = ['الكل', 'تطوير البرمجيات', 'البيانات', 'التصميم', 'الذكاء الاصطناعي']

export function CoursesPage() {
  return (
    <div className="dashboard-shell" dir="rtl" lang="ar">
      <style>{`
        .dashboard-shell { min-height: 100vh; background: var(--auth-bg); color: var(--auth-text); padding: 24px; box-sizing: border-box; }

        .dashboard-container { max-width: 1320px; margin: 0 auto; display: grid; gap: 24px; }

        .dashboard-layout { display: grid; grid-template-columns: 260px minmax(0, 1fr); gap: 24px; align-items: start; }

        .dashboard-sidebar, .dashboard-main {
          background: var(--auth-surface);
          border: 1px solid var(--auth-border);
          border-radius: var(--radius-xl);
          box-shadow: var(--auth-shadow);
          backdrop-filter: blur(16px);
        }

        .dashboard-sidebar { padding: 22px 18px; display: flex; flex-direction: column; gap: 18px; min-width: 0; }
        .dashboard-brand { display: flex; align-items: center; gap: 12px; font-weight: 800; font-size: 1rem; }
        .dashboard-brand-badge { width: 44px; height: 44px; display: grid; place-items: center; border-radius: var(--radius-sm); background: linear-gradient(135deg, var(--auth-accent), var(--auth-accent-strong)); color: var(--color-surface); }

        .dashboard-menu { display: grid; gap: 8px; }
        .dashboard-menu-item { display: block; padding: 12px 14px; border-radius: 12px; color: var(--auth-muted); font-weight: 700; text-decoration: none; overflow-wrap: anywhere; }
        .dashboard-menu-item.active { color: var(--auth-accent); background: color-mix(in srgb, var(--auth-accent) 10%, transparent); }

        .dashboard-main { padding: 24px; display: grid; gap: 20px; min-width: 0; }

        .dashboard-topbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .dashboard-search { min-width: 240px; }
        .dashboard-notification { padding: 10px 14px; border-radius: 999px; background: color-mix(in srgb, var(--auth-accent) 10%, transparent); color: var(--auth-accent); font-weight: 700; }

        .page-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
        .page-header h1 { margin: 0; color: var(--auth-text); font-size: 1.5rem; }
        .page-header p { margin: 0; color: var(--auth-muted); }

        .filters { display: grid; gap: 12px; }
        .search-row { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        .category-row { display: flex; gap: 10px; flex-wrap: wrap; }

        .chip { padding: 8px 12px; border-radius: 999px; background: var(--color-surface); border: 1px solid var(--auth-border); font-weight: 800; color: var(--auth-muted); }
        .chip.active { color: var(--auth-accent); background: color-mix(in srgb, var(--auth-accent) 10%, transparent); border-color: color-mix(in srgb, var(--auth-accent) 30%, var(--auth-border) 70%); }

        .courses-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }

        .course-card { padding: 18px; border-radius: var(--radius-md); background: var(--color-surface); border: 1px solid var(--auth-border); display: grid; gap: 12px; min-width: 0; }

        .course-media { border-radius: var(--radius-sm); border: 1px solid var(--auth-border); background: linear-gradient(135deg, color-mix(in srgb, var(--auth-accent) 14%, transparent), var(--color-surface-muted)); min-height: 92px; display: grid; place-items: center; color: var(--auth-muted); font-weight: 900; }

        .course-card h3 { margin: 0; color: var(--auth-text); font-size: 1rem; overflow-wrap: anywhere; }
        .course-desc { margin: 0; color: var(--auth-muted); line-height: 1.7; }
        .course-meta { margin: 0; color: var(--auth-muted); font-size: 0.95rem; }

        .progress-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .progress-track { width: 100%; height: 10px; background: var(--color-surface-muted); border-radius: 999px; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, var(--auth-accent), var(--auth-accent-strong)); }

        @media (max-width: 1024px) {
          .dashboard-layout { grid-template-columns: 1fr; }
          .courses-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .dashboard-sidebar { flex-direction: row; justify-content: space-between; }
          .dashboard-menu { grid-auto-flow: column; grid-auto-columns: max-content; overflow-x: auto; }
        }

        @media (max-width: 640px) {
          .dashboard-shell { padding: 14px; }
          .dashboard-main, .dashboard-sidebar { padding: 16px; }
          .courses-grid { grid-template-columns: 1fr; }
          .dashboard-topbar { align-items: flex-start; }
          .dashboard-search { width: 100%; }
          .dashboard-brand { font-size: 0.95rem; }
        }
      `}</style>

      <div className="dashboard-container">
        <div className="dashboard-layout">
          <aside className="dashboard-sidebar">
            <div className="dashboard-brand">
              <span className="dashboard-brand-badge">N</span>
              <span>NexaStudy</span>
            </div>

            <nav className="dashboard-menu" aria-label="القائمة الجانبية">
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `dashboard-menu-item${isActive ? ' active' : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </aside>

          <main className="dashboard-main">
            <header className="dashboard-topbar">
              <div className="dashboard-search">
                <Input placeholder="بحث عن دورة" />
              </div>
              <div className="dashboard-notification">إشعارات</div>
            </header>

            <section className="page-header" aria-label="رأس صفحة الدورات">
              <div>
                <h1>الدورات</h1>
                <p>تابع تقدمك في الدورات الحالية</p>
              </div>
              <Button variant="secondary">تصفية</Button>
            </section>

            <section className="filters" aria-label="فلاتر الدورات">
              <div className="search-row">
                <div style={{ flex: '1 1 240px', minWidth: 0 }}>
                  <Input placeholder="ابحث بالاسم أو المعلم" />
                </div>
              </div>
              <div className="category-row" role="group" aria-label="تصنيفات الدورات">
                {categories.map((c, idx) => (
                  <span key={c} className={`chip${idx === 0 ? ' active' : ''}`} aria-label={`التصنيف: ${c}`}>
                    {c}
                  </span>
                ))}
              </div>
            </section>

            <section className="courses-grid" aria-label="قائمة الدورات">
              {courses.map((course) => (
                <article key={course.title} className="course-card">
                  <div className="course-media" aria-label="صورة الدورة">
                    صورة الدورة
                  </div>

                  <h3>{course.title}</h3>
                  <p className="course-desc">{course.description}</p>
                  <p className="course-meta">المعلم: {course.instructor}</p>

                  <div className="progress-row">
                    <span style={{ color: 'var(--auth-muted)', fontWeight: 900 }}>{course.progress}%</span>
                    <span style={{ color: 'var(--auth-muted)', fontWeight: 900 }}>{course.lessonsCount} دروس</span>
                  </div>

                  <div className="progress-track" aria-label="شريط تقدم الدورة">
                    <div className="progress-fill" style={{ width: `${course.progress}%` }} />
                  </div>

                  <Button>متابعة</Button>
                </article>
              ))}
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

