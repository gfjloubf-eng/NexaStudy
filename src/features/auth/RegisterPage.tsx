

import { Button } from '../../shared/ui/Button'
import { Input } from '../../shared/ui/Input'

export function RegisterPage() {
  return (
    <section className="auth-shell" dir="rtl" aria-label="تسجيل حساب">
      <div className="auth-card">
        <div className="auth-panel" aria-hidden="true">
          <h2 className="auth-title">إنشاء حساب</h2>
          <p className="auth-copy">أدخل بياناتك لإنشاء حساب جديد.</p>
        </div>

        <div className="auth-form-card">
          <div className="auth-header">
            <h2 className="auth-title">إنشاء حساب</h2>
            <p className="auth-copy">أدخل بياناتك لإنشاء حساب جديد.</p>
          </div>

          <div className="auth-form-grid">
            <Input label="الاسم" placeholder="مثال: أحمد" />
            <Input label="البريد الإلكتروني" placeholder="name@example.com" type="email" />
            <Input label="كلمة المرور" placeholder="••••••••" type="password" />
            <Input label="تأكيد كلمة المرور" placeholder="••••••••" type="password" />
          </div>

          <div className="auth-footer-links" style={{ marginTop: '4px' }}>
            <Button variant="primary">تسجيل</Button>
            <Button variant="secondary">لدي حساب بالفعل</Button>
          </div>

          <div
            className="auth-footer-links"
            style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px dashed var(--auth-border)' }}
          >
            <p style={{ color: 'var(--auth-muted)', margin: 0, fontSize: 'var(--font-size-2)' }}>
              بالضغط على تسجيل، لا يتم تنفيذ أي إجراء (واجهة فقط).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


