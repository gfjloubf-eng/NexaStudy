


import { Button } from '../../shared/ui/Button'
import { Input } from '../../shared/ui/Input'

export function LoginPage() {
  return (
    <section className="auth-shell" dir="rtl" aria-label="تسجيل الدخول">
      <div className="auth-card">
        <div className="auth-panel" aria-hidden="true">
          <h2 className="auth-title">تسجيل الدخول</h2>
          <p className="auth-copy">أدخل بياناتك للوصول إلى حسابك.</p>
        </div>

        <div className="auth-form-card">
          <div className="auth-header">
            <h2 className="auth-title">تسجيل الدخول</h2>
            <p className="auth-copy">أدخل بياناتك للوصول إلى حسابك.</p>
          </div>

          <div className="auth-form-grid">
            <Input label="البريد الإلكتروني" placeholder="name@example.com" type="email" />
            <Input label="كلمة المرور" placeholder="••••••••" type="password" />
          </div>

          <div className="auth-footer-links" style={{ marginTop: '4px' }}>
            <Button variant="primary">دخول</Button>
            <Button variant="secondary">هل نسيت كلمة المرور؟</Button>
          </div>

          <div className="auth-footer-links" style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px dashed var(--auth-border)' }}>
            <p style={{ color: 'var(--auth-muted)', margin: 0, fontSize: 'var(--font-size-2)' }}>ليس لديك حساب؟</p>
            <Button variant="secondary">إنشاء حساب</Button>
          </div>
        </div>
      </div>
    </section>
  )
}



