import { useMemo } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Button } from '../../shared/ui/Button'
import '../../styles/tokens.css'

type Objective = {
  id: string
  text: string
}

type LessonData = {
  title: string
  description: string
  objectives: Objective[]
  duration: string
}

export function LessonViewerPage() {
  const { id, lessonId } = useParams<{ id: string; lessonId: string }>()

  const numericLessonId = Number(lessonId ?? NaN)
  const totalLessons = 5

  const lesson = useMemo<LessonData>(() => {
    const lessonIndex = Number.isFinite(numericLessonId) ? numericLessonId : 1

    const base: Record<number, LessonData> = {
      1: {
        title: 'الدرس 1: أساسيات البرمجة',
        description:
          'في هذا الدرس سنغطي المفاهيم الأساسية للبرمجة، وكيف نفكر بطريقة منطقية لحل المشاكل.',
        objectives: [
          { id: 'o1', text: 'فهم الفرق بين المشكلة والخوارزمية' },
          { id: 'o2', text: 'التعرّف على مبادئ المتغيرات والتحكم' },
          { id: 'o3', text: 'قراءة مثال بسيط خطوة بخطوة' },
        ],
        duration: '10:30',
      },
      2: {
        title: 'الدرس 2: الهياكل والبيانات',
        description:
          'سنفهم كيف تمثل البيانات داخل البرامج باستخدام الهياكل المناسبة، ولماذا يهم ذلك في الأداء والقابلية للصيانة.',
        objectives: [
          { id: 'o1', text: 'تصميم تمثيل بيانات مناسب' },
          { id: 'o2', text: 'استخدام القوائم/المصفوفات بكفاءة' },
          { id: 'o3', text: 'التحقق من المدخلات وتوقع الحالات' },
        ],
        duration: '08:45',
      },
      3: {
        title: 'الدرس 3: الدوال والمنطق',
        description:
          'سنحوّل الأفكار إلى دوال قابلة لإعادة الاستخدام، ونبني منطقًا واضحًا عبر تقسيم المهام.',
        objectives: [
          { id: 'o1', text: 'كتابة دالة تُحل مهمة واحدة' },
          { id: 'o2', text: 'استخدام المدخلات والمخرجات بشكل صحيح' },
          { id: 'o3', text: 'تحسين قابلية الاختبار وإعادة الاستخدام' },
        ],
        duration: '12:10',
      },
      4: {
        title: 'الدرس 4: التحكم والتفرعات',
        description:
          'تعلمنا سابقًا الأساسيات الآن سنبني على ذلك من خلال التفرعات والحلقات لتوجيه تدفق التنفيذ.',
        objectives: [
          { id: 'o1', text: 'استخدام الشروط لاتخاذ القرار' },
          { id: 'o2', text: 'التمييز بين الحالات وتوقع النتائج' },
          { id: 'o3', text: 'بناء حلقات للمهام المتكررة' },
        ],
        duration: '09:55',
      },
      5: {
        title: 'الدرس 5: مشروع مصغّر',
        description:
          'سنطبق ما تعلمناه في الدروس السابقة عبر مشروع مصغّر، مع التركيز على تنظيم الكود وتتبّع الخطوات.',
        objectives: [
          { id: 'o1', text: 'تجميع المفاهيم في حل متكامل' },
          { id: 'o2', text: 'تنظيم الكود إلى أجزاء واضحة' },
          { id: 'o3', text: 'مراجعة النتيجة واستخلاص الدروس' },
        ],
        duration: '11:25',
      },
    }

    return base[lessonIndex] ?? base[1]
  }, [numericLessonId])

  const lessonNumber = Number.isFinite(numericLessonId) ? numericLessonId : 1

  const previousLesson = lessonNumber > 1 ? lessonNumber - 1 : null
  const nextLesson = lessonNumber < totalLessons ? lessonNumber + 1 : null

  const progress = Math.round((Math.min(Math.max(lessonNumber, 1), totalLessons) / totalLessons) * 100)

  return (
    <div className="lesson-shell" dir="rtl" lang="ar">
      <style>{`
        .lesson-shell { min-height: 100vh; background: var(--auth-bg); color: var(--auth-text); padding: 24px; box-sizing: border-box; }
        .lesson-layout { max-width: 1320px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 340px) minmax(0, 1fr); gap: 24px; }

        .sidebar { background: var(--auth-surface); border: 1px solid var(--auth-border); border-radius: var(--radius-xl); box-shadow: var(--auth-shadow); backdrop-filter: blur(16px); padding: 18px; display: grid; gap: 14px; align-content: start; min-width: 0; }
        .main { display: grid; gap: 18px; align-content: start; min-width: 0; }

        .page-title { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; flex-wrap: wrap; min-width: 0; }
        .page-title h1 { margin: 0; font-size: 1.55rem; overflow-wrap: anywhere; word-break: normal; }
        .page-title p { margin: 0; color: var(--auth-muted); line-height: 1.75; overflow-wrap: anywhere; word-break: normal; }

        .card { background: var(--color-surface); border: 1px solid var(--auth-border); border-radius: var(--radius-md); padding: 16px; display: grid; gap: 12px; min-width: 0; }
        .card h2, .card h3 { margin: 0; color: var(--auth-text); }

        .video-placeholder { border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--auth-border); background: linear-gradient(135deg, color-mix(in srgb, var(--auth-accent) 15%, transparent), var(--color-surface-muted)); min-height: 280px; display: grid; place-items: center; position: relative; }

        .video-inner { display: grid; gap: 10px; text-align: center; padding: 20px; }
        .video-inner .chip { width: fit-content; margin: 0 auto; padding: 6px 10px; border-radius: 999px; background: color-mix(in srgb, var(--auth-accent) 12%, transparent); border: 1px solid color-mix(in srgb, var(--auth-accent) 30%, var(--auth-border)); color: var(--auth-accent); font-weight: 900; }
        .video-inner strong { color: var(--auth-text); font-size: 1.1rem; }
        .video-inner span { color: var(--auth-muted); line-height: 1.7; }

        .progress-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
        .track { width: 100%; height: 10px; background: var(--color-surface-muted); border-radius: 999px; overflow: hidden; }
        .fill { height: 100%; background: linear-gradient(90deg, var(--auth-accent), var(--auth-accent-strong)); }

        .objectives { margin: 0; padding-right: 18px; display: grid; gap: 8px; }
        .objectives li { color: var(--auth-muted); font-weight: 700; line-height: 1.7; overflow-wrap: anywhere; }

        .nav-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
        .nav-row .btn-wrap { display: flex; gap: 10px; align-items: center; min-width: 0; }

        .meta-grid { display: grid; gap: 10px; }
        .meta-item { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 12px; border-radius: var(--radius-sm); background: var(--color-surface-muted); border: 1px solid var(--auth-border); min-width: 0; }
        .meta-item span { color: var(--auth-muted); font-weight: 800; overflow-wrap: anywhere; }
        .meta-item strong { color: var(--auth-text); }

        .lesson-index { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; min-width: 0; }
        .lesson-index strong { color: var(--auth-text); font-size: 1.1rem; }

        @media (max-width: 1024px) {
          .lesson-layout { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .lesson-shell { padding: 14px; }
          .nav-row .btn-wrap { flex: 1 1 140px; }
        }
      `}</style>

      <div className="lesson-layout">
        <aside className="sidebar" aria-label="لوحة الدرس الجانبية">
          <div className="lesson-index">
            <div>
              <h3 style={{ margin: 0 }}>تقدم الدرس</h3>
              <p style={{ margin: '6px 0 0', color: 'var(--auth-muted)', lineHeight: 1.7, overflowWrap: 'anywhere' }}>
                درس {lessonNumber} من {totalLessons}
              </p>
            </div>

            <div className="track" aria-label="شريط التقدم">
              <div className="fill" style={{ width: `${progress}%` }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--auth-muted)', fontWeight: 800 }}>{progress}%</span>
              <span style={{ color: 'var(--auth-muted)', fontWeight: 800, overflowWrap: 'anywhere' }}>المدة: {lesson.duration}</span>
            </div>
          </div>


          <div className="card" style={{ padding: 16 }}>
            <h3 style={{ margin: 0 }}>أهداف هذا الدرس</h3>
            <ul className="objectives">
              {lesson.objectives.map((o) => (
                <li key={o.id}>{o.text}</li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <h3 style={{ margin: 0 }}>الملاحظات</h3>
            <p style={{ margin: 0, color: 'var(--auth-muted)', lineHeight: 1.75 }}>
              مساحة لتدوين الملاحظات أثناء المتابعة. هذه مجرد واجهة تصميم.
            </p>
          </div>

          <div className="card" style={{ padding: 16 }}>
            <h3 style={{ margin: 0 }}>الموارد</h3>
            <div className="meta-grid">
              <div className="meta-item">
                <span>عرض الملخص</span>
                <strong>PDF</strong>
              </div>
              <div className="meta-item">
                <span>ورقة عمل</span>
                <strong>تنزيل</strong>
              </div>
            </div>
          </div>
        </aside>

        <main className="main">
          <div className="page-title">
            <div>
              <h1>{lesson.title}</h1>
              <p>{lesson.description}</p>
            </div>
            <div style={{ color: 'var(--auth-muted)', fontWeight: 800 }}>القسم: {id ?? '—'}</div>
          </div>

          <section className="card">
            <div className="video-placeholder" aria-label="معاينة الفيديو">
              <div className="video-inner">
                <div className="chip">فيديو الدرس</div>
                <strong>قيد التحميل</strong>
                <span>هذه واجهة تصميم فقط.</span>
              </div>
            </div>
          </section>

          <section className="card">
            <div className="progress-row">
              <strong>المسار التعليمي</strong>
              <span>{progress}% مكتمل</span>
            </div>
            <div className="track" aria-label="شريط التقدم العام للدرس">
              <div className="fill" style={{ width: `${progress}%` }} />
            </div>
          </section>

          <section className="card">
            <h2 style={{ margin: 0 }}>التنقل بين الدروس</h2>
            <div className="nav-row">
              <div className="btn-wrap">
                {previousLesson ? (
                  <NavLink to={`/course/${id ?? '1'}/lesson/${previousLesson}`} style={{ textDecoration: 'none' }}>
                    <Button>الدرس السابق</Button>
                  </NavLink>
                ) : (
                  <Button disabled>الدرس السابق</Button>
                )}
              </div>
              <div className="btn-wrap">
                {nextLesson ? (
                  <NavLink to={`/course/${id ?? '1'}/lesson/${nextLesson}`} style={{ textDecoration: 'none' }}>
                    <Button>الدرس التالي</Button>
                  </NavLink>
                ) : (
                  <Button disabled>الدرس التالي</Button>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

