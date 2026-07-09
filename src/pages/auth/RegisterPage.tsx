import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import "../../styles/tokens.css";

export default function RegisterPage() {
  return (
    <div className="auth-shell" dir="rtl" lang="ar">
      <div className="auth-card">
        <aside className="auth-panel">
          <span className="auth-badge">NexaStudy</span>
          <h1 className="auth-title">ابدأ رحلتك مع منصة احترافية</h1>
          <p className="auth-copy">
            أنشئ حسابك الآن وابدأ في إدارة مهامك الدراسية أو العملية بطريقة منظمة ومريحة.
          </p>
          <ul className="auth-highlights">
            <li>إعداد ملف شخصي احترافي</li>
            <li>تنظيم المهام والجدول الزمني</li>
            <li>الوصول إلى أدوات التعاون</li>
          </ul>
        </aside>

        <div className="auth-form-card">
          <div className="auth-header">
            <h2>إنشاء حساب</h2>
            <p>املأ البيانات أدناه وسيكون حسابك جاهزاً خلال دقائق</p>
          </div>

          <form className="auth-form-grid" onSubmit={(event) => event.preventDefault()}>
            <label className="auth-field">
              <span>الاسم الكامل</span>
              <Input type="text" placeholder="مثال: محمد علي" />
            </label>

            <label className="auth-field">
              <span>البريد الإلكتروني</span>
              <Input type="email" placeholder="name@example.com" />
            </label>

            <label className="auth-field">
              <span>كلمة المرور</span>
              <Input type="password" placeholder="••••••••" />
            </label>

            <Button type="submit">إنشاء الحساب</Button>
          </form>

          <div className="auth-footer-links">
            <p>
              لديك حساب بالفعل؟ <Link className="auth-link" to="/login">تسجيل الدخول</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
