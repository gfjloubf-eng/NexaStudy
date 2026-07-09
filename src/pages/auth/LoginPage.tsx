import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import "../../styles/tokens.css";

export default function LoginPage() {
  return (
    <div className="auth-shell" dir="rtl" lang="ar">
      <div className="auth-card">
        <aside className="auth-panel">
          <span className="auth-badge">NexaStudy</span>
          <h1 className="auth-title">مرحباً بك مرة أخرى</h1>
          <p className="auth-copy">
            تابع رحلتك التعليمية من مكان واحد مع تجربة تجمع بين البساطة والاحترافية.
          </p>
          <ul className="auth-highlights">
            <li>تنظيم خطط دراسية ذكية</li>
            <li>متابعة التقدم في الوقت الفعلي</li>
            <li>مشاركة مريحة مع الفرق والأصدقاء</li>
          </ul>
        </aside>

        <div className="auth-form-card">
          <div className="auth-header">
            <h2>تسجيل الدخول</h2>
            <p>أدخل بياناتك للوصول إلى حسابك</p>
          </div>

          <form className="auth-form-grid" onSubmit={(event) => event.preventDefault()}>
            <label className="auth-field">
              <span>البريد الإلكتروني</span>
              <Input type="email" placeholder="name@example.com" />
            </label>

            <label className="auth-field">
              <span>كلمة المرور</span>
              <Input type="password" placeholder="••••••••" />
            </label>

            <div className="auth-inline-row">
              <label className="auth-check-row">
                <input type="checkbox" />
                <span>تذكرني</span>
              </label>
              <Link className="auth-link" to="/forgot-password">
                نسيت كلمة المرور؟
              </Link>
            </div>

            <Button type="submit">تسجيل الدخول</Button>
          </form>

          <div className="auth-footer-links">
            <p>
              ليس لديك حساب؟ <Link className="auth-link" to="/register">إنشاء حساب</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
