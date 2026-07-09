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

const upcomingExams = [
  { title: 'اختبار البرمجة', date: '2026-06-24', time: '09:00 ص' },
  { title: 'اختبار الرياضيات', date: '2026-06-27', time: '11:00 ص' },
]

const completedExams = [
  { title: 'اختبار اللغة الإنجليزية', score: '92%' },
  { title: 'اختبار التصميم', score: '88%' },
]

export function ExamsPage() {
  return (
    <div className="dashboard-shell" dir="rtl" lang="ar">
      <style>{`
        .dashboard-shell { min-height: 100vh; background: var(--auth-bg); color: var(--auth-text); padding: 24px; box-sizing: border-box; }
        .dashboard-layout { max-width: 1320px; margin: 0 auto; display: grid; grid-template-columns: 260px minmax(0, 1fr); gap: 24px; }
        .dashboard-sidebar, .dashboard-main { background: var(--auth-surface); border: 1px solid var(--auth-border); border-radius: var(--radius-xl); box-shadow: var(--auth-shadow); backdrop-filter: blur(16px); }
        .dashboard-sidebar { padding: 22px 18px; display: flex; flex-direction: column; gap: 18px; }
        .dashboard-brand { display: flex; align-items: center; gap: 12px; font-weight: 800; font-size: 1rem; }
        .dashboard-brand-badge { width: 44px; height: 44px; display: grid; place-items: center; border-radius: var(--radius-sm); background: linear-gradient(135deg, var(--auth-accent), var(--auth-accent-strong)); color: var(--color-surface); }
        .dashboard-menu { display: grid; gap: 8px; }
        .dashboard-menu-item { display: block; padding: 12px 14px; border-radius: 12px; color: var(--auth-muted); font-weight: 700; text-decoration: none; }
        .dashboard-menu-item.active { color: var(--auth-accent); background: color-mix(in srgb, var(--auth-accent) 10%, transparent); }
        .dashboard-main { padding: 24px; display: grid; gap: 20px; }
        .dashboard-topbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .dashboard-search { min-width: 240px; }
        .dashboard-notification { padding: 10px 14px; border-radius: 999px; background: color-mix(in srgb, var(--auth-accent) 10%, transparent); color: var(--auth-accent); font-weight: 700; }
        .page-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
        .page-header h1 { margin: 0; color: var(--auth-text); font-size: 1.5rem; }
        .page-header p { margin: 0; color: var(--auth-muted); }
        .section-card { padding: 18px; border-radius: var(--radius-md); background: var(--color-surface); border: 1px solid var(--auth-border); display: grid; gap: 12px; }
        .section-card h2 { margin: 0; color: var(--auth-text); font-size: 1.1rem; }
        .card-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .exam-card { padding: 16px; border-radius: var(--radius-sm); background: var(--color-surface-muted); display: grid; gap: 8px; }
        .exam-card strong { color: var(--auth-text); }
        .exam-card span { color: var(--auth-muted); }
        @media (max-width: 1024px) { .dashboard-layout { grid-template-columns: 1fr; } .card-grid { grid-template-columns: 1fr; } }
        @media (max-width: 640px) { .dashboard-shell { padding: 14px; } .dashboard-main, .dashboard-sidebar { padding: 16px; } .dashboard-topbar { align-items: flex-start; } .dashboard-search { width: 100%; } }
      `}</style>

      <div className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <div className="dashboard-brand">
            <span className="dashboard-brand-badge">N</span>
            <span>NexaStudy</span>
          </div>
          <nav className="dashboard-menu" aria-label="القائمة الجانبية">
            {menuItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `dashboard-menu-item${isActive ? ' active' : ''}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="dashboard-main">
          <header className="dashboard-topbar">
            <div className="dashboard-search">
              <Input placeholder="بحث عن اختبار" />
            </div>
            <div className="dashboard-notification">إشعارات</div>
          </header>

          <section className="page-header">
            <div>
              <h1>الاختبارات</h1>
              <p>تابع الاختبارات القادمة والمكتملة</p>
            </div>
            <Button variant="secondary">جدول الاختبارات</Button>
          </section>

          <section className="section-card">
            <h2>الاختبارات القادمة</h2>
            <div className="card-grid">
              {upcomingExams.map((exam) => (
                <article key={exam.title} className="exam-card">
                  <strong>{exam.title}</strong>
                  <span>{exam.date}</span>
                  <span>{exam.time}</span>
                  <Button>ابدأ الآن</Button>
                </article>
              ))}
            </div>
          </section>

          <section className="section-card">
            <h2>الاختبارات المكتملة</h2>
            <div className="card-grid">
              {completedExams.map((exam) => (
                <article key={exam.title} className="exam-card">
                  <strong>{exam.title}</strong>
                  <span>النتيجة: {exam.score}</span>
                  <Button variant="secondary">عرض التفاصيل</Button>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
