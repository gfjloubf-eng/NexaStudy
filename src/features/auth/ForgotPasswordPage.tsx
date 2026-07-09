

import { Button } from '../../shared/ui/Button'
import { Input } from '../../shared/ui/Input'

export function ForgotPasswordPage() {
  return (
    <section className="bbx-auth" dir="rtl" aria-label="استعادة كلمة المرور">
      <div className="bbx-auth__card">
        <h1 className="bbx-auth__title">استعادة كلمة المرور</h1>
        <p className="bbx-auth__subtitle">أدخل بريدك الإلكتروني وسنعرض واجهة لخطوة الاستعادة.</p>

        <div className="bbx-auth__form">
          <Input label="البريد الإلكتروني" placeholder="name@example.com" type="email" />

          <div className="bbx-auth__actions">
            <Button variant="primary">إرسال رابط الاستعادة</Button>
            <Button variant="secondary" className="bbx-auth__linkButton">
              العودة إلى تسجيل الدخول
            </Button>
          </div>
        </div>

        <div className="bbx-auth__footer">
          <span className="bbx-auth__hint">هذه صفحة واجهة فقط ولا يوجد أي إرسال فعلي.</span>
        </div>
      </div>

      <style>
        {`
          .bbx-auth {
            width: 100%;
            display: grid;
            place-items: center;
            padding: var(--space-7);
            box-sizing: border-box;
          }

          .bbx-auth__card {
            width: 100%;
            max-width: 460px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-2);
            padding: var(--space-7);
            box-sizing: border-box;
            box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02);
            text-align: right;
          }

          .bbx-auth__title {
            margin: 0 0 var(--space-3) 0;
            font-size: var(--font-size-5);
            font-weight: var(--font-weight-semibold);
            line-height: var(--line-height-2);
          }

          .bbx-auth__subtitle {
            margin: 0 0 var(--space-6) 0;
            color: var(--color-text-secondary);
            font-size: var(--font-size-3);
            line-height: var(--line-height-3);
          }

          .bbx-auth__form {
            display: flex;
            flex-direction: column;
            gap: var(--space-4);
          }

          .bbx-auth__actions {
            display: flex;
            flex-direction: column;
            gap: var(--space-3);
            margin-top: var(--space-2);
          }

          .bbx-auth__linkButton {
            justify-content: center;
          }

          .bbx-auth__footer {
            margin-top: var(--space-5);
            padding-top: var(--space-4);
            border-top: 1px dashed var(--color-border);
          }

          .bbx-auth__hint {
            color: var(--color-text-secondary);
            font-size: var(--font-size-2);
          }

          @media (max-width: 640px) {
            .bbx-auth {
              padding: var(--space-5);
            }

            .bbx-auth__card {
              padding: var(--space-5);
            }
          }
        `}
      </style>
    </section>
  )
}

