import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import "../../styles/tokens.css";

export default function ForgotPasswordPage() {
  return (
    <div className="auth-shell" dir="rtl" lang="ar">
      <div className="auth-card">
        <aside className="auth-panel">
          <span className="auth-badge">NexaStudy</span>
          <h1 className="auth-title">استعادة الوصول إلى حسابك</h1>
          <p className="auth-copy">
            سنرسل لك تعليمات لإعادة تعيين كلمة المرور بسرعة وأمان.
          </p>
          <ul className="auth-highlights">
            <li>إعادة تعيين آمنة وسريعة</li>
            <li>دعم فني متاح على مدار الساعة</li>
            <li>التوجيه خطوة بخطوة</li>
          </ul>
        </aside>

        <div className="auth-form-card">
          <div className="auth-header">
            <h2>نسيت كلمة المرور</h2>
            <p>أدخل بريدك الإلكتروني وسنرسل لك رابط الاستعادة</p>
          </div>

          <form className="auth-form-grid" onSubmit={(event) => event.preventDefault()}>
            <label className="auth-field">
              <span>البريد الإلكتروني</span>
              <Input type="email" placeholder="name@example.com" />
            </label>

            <Button type="submit">إرسال رابط الاستعادة</Button>
          </form>

          <div className="auth-footer-links">
            <p>
              تذكرت كلمة المرور؟ <Link className="auth-link" to="/login">تسجيل الدخول</Link>
            </p>
            <p>
              لا تملك حساباً؟ <Link className="auth-link" to="/register">إنشاء حساب</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
