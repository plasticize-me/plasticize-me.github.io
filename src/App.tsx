import { landingUrl, startHref } from './links';

/** The old public site now only points visitors to the new landing page and the app. */
export function App() {
  return (
    <main className="moved">
      <span className="moved__glow" aria-hidden="true" />
      <p className="moved__brand">پلاستیسایز</p>
      <h1>سایت پلاستیسایز به خانه‌ی تازه رفته است</h1>
      <p>بازی آرام، تمرین فکر. صفحه‌ی تازه را ببینید یا مستقیم بازی را شروع کنید.</p>
      <div className="moved__actions">
        <a className="btn btn--amber" href={landingUrl}>
          رفتن به سایت تازه
        </a>
        <a className="btn btn--ghost" href={startHref()}>
          شروع رایگان بازی
        </a>
      </div>
      <p className="moved__en" lang="en" dir="ltr">
        Plasticize has moved. <a href={`${landingUrl.replace(/\/?$/, '/')}en/`}>Visit the new site</a>.
      </p>
    </main>
  );
}
