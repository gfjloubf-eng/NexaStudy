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

export function SettingsPage() {
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
        .dashboard-notification { padding: 10px 14px; border-radius: 999px; background: color-mix(in srgb, var(--auth-accent) 10%, transparent); color: var(--auth-accent); font-weight: 700; }
        .page-header h1 { margin: 0; color: var(--auth-text); font-size: 1.5rem; }
        .page-header p { margin: 0; color: var(--auth-muted); }
        .settings-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 16px; }
        .section-card { padding: 18px; border-radius: var(--radius-md); background: var(--color-surface); border: 1px solid var(--auth-border); display: grid; gap: 14px; }
        .section-card h2 { margin: 0; color: var(--auth-text); font-size: 1.1rem; }
        .fields-grid { display: grid; gap: 12px; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .toggle-list { display: grid; gap: 10px; }
        .toggle-item { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 12px 0; border-bottom: 1px solid var(--auth-border); }
        .toggle-item:last-child { border-bottom: none; }
        @media (max-width: 1024px) { .dashboard-layout { grid-template-columns: 1fr; } .settings-grid { grid-template-columns: 1fr; } }
        @media (max-width: 640px) { .dashboard-shell { padding: 14px; } .dashboard-main, .dashboard-sidebar { padding: 16px; } .field-row { grid-template-columns: 1fr; } }
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
            <div />
            <div className="dashboard-notification">إشعارات</div>
          </header>

          <section className="page-header">
            <div>
              <h1>الإعدادات</h1>
              <p>إدارة ملفك الشخصي وتفضيلاتك</p>
            </div>
          </section>

          <section className="settings-grid">
            <div className="section-card">
              <h2>معلومات الملف الشخصي</h2>
              <div className="fields-grid">
                <div className="field-row">
                  <Input label="الاسم الكامل" placeholder="عمار محمد" />
                  <Input label="البريد الإلكتروني" placeholder="ammar@example.com" />
                </div>
                <div className="field-row">
                  <Input label="المهنة" placeholder="طالب" />
                  <Input label="المدينة" placeholder="الرياض" />
                </div>
                <Button>حفظ التغييرات</Button>
              </div>
            </div>

            <div className="section-card">
              <h2>اللغة</h2>
              <div className="fields-grid">
                <Input label="اللغة الحالية" placeholder="العربية" />
                <Button variant="secondary">تغيير اللغة</Button>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>الإشعارات</h2>
            <div className="toggle-list">
              <div className="toggle-item">
                <span>الإشعارات عبر البريد</span>
                <Button variant="secondary">تفعيل</Button>
              </div>
              <div className="toggle-item">
                <span>تذكير بالواجبات</span>
                <Button variant="secondary">تفعيل</Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
