
import { Button } from '../../shared/ui/Button';
import { Input } from '../../shared/ui/Input';
import '../../styles/tokens.css';

const stats = [
  { label: 'عدد الدورات', value: '12' },
  { label: 'عدد الاختبارات', value: '8' },
  { label: 'عدد الواجبات', value: '5' },
  { label: 'نسبة التقدم', value: '78%' },
];

const menuItems = ['الرئيسية', 'الدورات', 'الاختبارات', 'الواجبات', 'الإعدادات'];
const activities = ['تم إضافة دورة جديدة', 'تم رفع واجب', 'تم إكمال اختبار'];

export function DashboardPage() {
  return (
    <div className="dashboard-shell" dir="rtl" lang="ar">
      <style>{`
        .dashboard-shell {
          min-height: 100vh;
          background: var(--auth-bg);
          color: var(--auth-text);
          padding: 24px;
          box-sizing: border-box;
        }

        .dashboard-layout {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 260px minmax(0, 1fr);
          gap: 24px;
        }

        .dashboard-sidebar,
        .dashboard-main {
          background: var(--auth-surface);
          border: 1px solid var(--auth-border);
          border-radius: var(--radius-xl);
          box-shadow: var(--auth-shadow);
          backdrop-filter: blur(16px);
        }

        .dashboard-sidebar {
          padding: 22px 18px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .dashboard-brand {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
          font-weight: 800;
          font-size: 1rem;
        }

        .dashboard-brand-badge {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, var(--auth-accent), var(--auth-accent-strong));
          color: var(--color-surface);
        }

        .dashboard-menu {
          display: grid;
          gap: 8px;
        }

        .dashboard-menu-item {
          padding: 12px 14px;
          border-radius: 12px;
          color: var(--auth-muted);
          font-weight: 700;
          background: transparent;
        }

        .dashboard-menu-item.active {
          color: var(--auth-accent);
          background: color-mix(in srgb, var(--auth-accent) 10%, transparent);
        }

        .dashboard-main {
          padding: 24px;
          display: grid;
          gap: 20px;
        }

        .dashboard-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .dashboard-search {
          min-width: 240px;
        }

        .dashboard-notification {
          padding: 10px 14px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--auth-accent) 10%, transparent);
          color: var(--auth-accent);
          font-weight: 700;
        }

        .dashboard-welcome {
          display: grid;
          gap: 8px;
          padding: 22px;
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-background-alt) 100%);
          border: 1px solid var(--auth-border);
        }

        .dashboard-welcome h2 {
          margin: 0;
          color: var(--auth-text);
          font-size: 1.4rem;
        }

        .dashboard-welcome p {
          margin: 0;
          color: var(--auth-muted);
          line-height: 1.8;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .stat-card {
          padding: 18px;
          border-radius: var(--radius-md);
          background: linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-muted) 100%);
          border: 1px solid var(--auth-border);
          display: grid;
          gap: 8px;
        }

        .stat-card span {
          color: var(--auth-muted);
          font-size: 0.95rem;
        }

        .stat-card strong {
          color: var(--auth-text);
          font-size: 1.6rem;
        }

        .dashboard-section-card {
          padding: 18px;
          border-radius: var(--radius-md);
          background: var(--color-surface);
          border: 1px solid var(--auth-border);
        }

        .dashboard-section-card h3 {
          margin: 0 0 12px;
          color: var(--auth-text);
        }

        .quick-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .activity-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 10px;
        }

        .activity-list li {
          padding: 12px 14px;
          border-radius: var(--radius-sm);
          background: var(--color-surface-muted);
          color: var(--auth-muted);
        }

        @media (max-width: 1024px) {
          .dashboard-layout {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .dashboard-shell {
            padding: 14px;
          }

          .dashboard-main,
          .dashboard-sidebar {
            padding: 16px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .dashboard-topbar {
            align-items: flex-start;
          }

          .dashboard-search {
            width: 100%;
          }
        }
      `}</style>

      <div className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <div className="dashboard-brand">
            <span className="dashboard-brand-badge">N</span>
            <span>NexaStudy</span>
          </div>

          <nav className="dashboard-menu" aria-label="القائمة الجانبية">
            {menuItems.map((item, index) => (
              <div key={item} className={`dashboard-menu-item${index === 0 ? ' active' : ''}`}>
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <main className="dashboard-main">
          <header className="dashboard-topbar">
            <div className="dashboard-search">
              <Input placeholder="بحث سريع" />
            </div>
            <div className="dashboard-notification">إشعارات</div>
          </header>

          <section className="dashboard-welcome">
            <h2>مرحبا عمار</h2>
            <p>إليك نظرة عامة محدثة على رحلتك التعليمية اليوم.</p>
          </section>

          <section className="stats-grid" aria-label="إحصائيات سريعة">
            {stats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </article>
            ))}
          </section>

          <section className="dashboard-section-card">
            <h3>إجراءات سريعة</h3>
            <div className="quick-actions">
              <Button>بدء اختبار</Button>
              <Button variant="secondary">مشاهدة الدورات</Button>
              <Button variant="secondary">رفع واجب</Button>
            </div>
          </section>

          <section className="dashboard-section-card">
            <h3>النشاط الأخير</h3>
            <ul className="activity-list">
              {activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

