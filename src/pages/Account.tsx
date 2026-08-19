import { useSettings } from "../hooks/useSettings";
import { useTranslation } from "../i18n";
import profileImage1 from "../assets/profile1.jpg";

export default function Account() {
  const { language, setLanguage } = useSettings();
  const { t } = useTranslation();

  const account = t.account;

  return (
    <div className="mx-auto w-full max-w-5xl py-14">
      <div className="mb-10">
        <h1 className="text-4xl font-medium tracking-[-1px] text-black">
          {account.pageTitle}
        </h1>
        <p className="mt-2 text-sm text-[var(--text-light)]">
          {account.pageSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr]">
        <nav className="sticky top-6 hidden h-fit flex-col gap-1 md:flex">
          <a
            href="#profile"
            className="rounded-md border-l-2 border-[var(--light-green)] bg-[rgba(1,190,94,0.06)] px-4 py-2 text-xs font-medium text-black"
          >
            {account.nav.profile}
          </a>
          <a
            href="#personal-info"
            className="rounded-md border-l-2 border-transparent px-4 py-2 text-xs text-[var(--text-light)] transition-colors hover:bg-neutral-50"
          >
            {account.nav.personalInfo}
          </a>
          <a
            href="#security"
            className="rounded-md border-l-2 border-transparent px-4 py-2 text-xs text-[var(--text-light)] transition-colors hover:bg-neutral-50"
          >
            {account.nav.security}
          </a>
          <a
            href="#preferences"
            className="rounded-md border-l-2 border-transparent px-4 py-2 text-xs text-[var(--text-light)] transition-colors hover:bg-neutral-50"
          >
            {account.nav.preferences}
          </a>
          <a
            href="#notifications"
            className="rounded-md border-l-2 border-transparent px-4 py-2 text-xs text-[var(--text-light)] transition-colors hover:bg-neutral-50"
          >
            {account.nav.notifications}
          </a>
          <a
            href="#danger-zone"
            className="rounded-md border-l-2 border-transparent px-4 py-2 text-xs text-red-500 transition-colors hover:bg-red-50"
          >
            {account.nav.dangerZone}
          </a>
        </nav>

        <div className="flex flex-col gap-8">
          <section
            id="profile"
            className="scroll-mt-6 rounded-md border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-sm font-semibold text-black">
              {account.profile.title}
            </h2>
            <p className="mt-1 text-xs text-[var(--text-light)]">
              {account.profile.description}
            </p>

            <div className="mt-5 flex items-center gap-5">
              <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-white shadow-md">
                <img
                  src={profileImage1}
                  alt="Profile"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  className="rounded-full border-2 border-solid border-[var(--light-green)] bg-[var(--light-green)] px-6 py-2 text-xs font-medium text-white transition-all duration-200 ease-out hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,255,140,0.25)] active:translate-y-0 active:opacity-70"
                >
                  {account.profile.upload}
                </button>
                <button
                  type="button"
                  className="rounded-full border-2 border-solid border-neutral-200 px-6 py-2 text-xs font-medium text-[var(--text-light)] transition-all duration-200 ease-out hover:-translate-y-[1px] active:translate-y-0 active:opacity-70"
                >
                  {account.profile.remove}
                </button>
              </div>
            </div>
          </section>

          <section
            id="personal-info"
            className="scroll-mt-6 rounded-md border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-sm font-semibold text-black">
              {account.personalInfo.title}
            </h2>
            <p className="mt-1 text-xs text-[var(--text-light)]">
              {account.personalInfo.description}
            </p>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="fullName"
                  className="text-[11px] font-medium text-neutral-500"
                >
                  {account.personalInfo.fullName}
                </label>
                <input
                  id="fullName"
                  type="text"
                  defaultValue="Alexandra Ionescu"
                  className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition-colors focus:border-[var(--light-green)]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="title"
                  className="text-[11px] font-medium text-neutral-500"
                >
                  {account.personalInfo.professionalTitle}
                </label>
                <input
                  id="title"
                  type="text"
                  defaultValue="Product Designer"
                  className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition-colors focus:border-[var(--light-green)]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-[11px] font-medium text-neutral-500"
                >
                  {account.personalInfo.email}
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue="alexandra.ionescu@email.com"
                  className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition-colors focus:border-[var(--light-green)]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="text-[11px] font-medium text-neutral-500"
                >
                  {account.personalInfo.phone}
                </label>
                <input
                  id="phone"
                  type="tel"
                  defaultValue="+40 712 345 678"
                  className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition-colors focus:border-[var(--light-green)]"
                />
              </div>

              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label
                  htmlFor="location"
                  className="text-[11px] font-medium text-neutral-500"
                >
                  {account.personalInfo.location}
                </label>
                <input
                  id="location"
                  type="text"
                  defaultValue="Brașov, Romania"
                  className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition-colors focus:border-[var(--light-green)]"
                />
              </div>
            </div>
          </section>

          <section
            id="security"
            className="scroll-mt-6 rounded-md border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-sm font-semibold text-black">
              {account.security.title}
            </h2>
            <p className="mt-1 text-xs text-[var(--text-light)]">
              {account.security.description}
            </p>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label
                  htmlFor="currentPassword"
                  className="text-[11px] font-medium text-neutral-500"
                >
                  {account.security.currentPassword}
                </label>
                <input
                  id="currentPassword"
                  type="password"
                  defaultValue="••••••••"
                  className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition-colors focus:border-[var(--light-green)]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="newPassword"
                  className="text-[11px] font-medium text-neutral-500"
                >
                  {account.security.newPassword}
                </label>
                <input
                  id="newPassword"
                  type="password"
                  placeholder={account.security.newPasswordPlaceholder}
                  className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition-colors placeholder:text-neutral-400 focus:border-[var(--light-green)]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="confirmPassword"
                  className="text-[11px] font-medium text-neutral-500"
                >
                  {account.security.confirmPassword}
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder={account.security.confirmPasswordPlaceholder}
                  className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition-colors placeholder:text-neutral-400 focus:border-[var(--light-green)]"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-5">
              <div>
                <p className="text-xs font-medium text-black">
                  {account.security.twoFactor}
                </p>
                <p className="mt-0.5 text-[11px] text-[var(--text-light)]">
                  {account.security.twoFactorDescription}
                </p>
              </div>
              <label className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" />
                <span className="absolute inset-0 rounded-full bg-neutral-200 transition-colors duration-200 peer-checked:bg-[var(--light-green)]" />
                <span className="absolute left-1 h-4 w-4 rounded-full bg-white transition-transform duration-200 peer-checked:translate-x-5" />
              </label>
            </div>
          </section>

          <section
            id="preferences"
            className="scroll-mt-6 rounded-md border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-sm font-semibold text-black">
              {account.preferences.title}
            </h2>
            <p className="mt-1 text-xs text-[var(--text-light)]">
              {account.preferences.description}
            </p>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="language"
                  className="text-[11px] font-medium text-neutral-500"
                >
                  {account.preferences.language}
                </label>
                <select
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="cursor-pointer rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition-colors focus:border-[var(--light-green)]"
                >
                  <option value="en">{account.preferences.languages.en}</option>
                  <option value="ro">{account.preferences.languages.ro}</option>
                  <option value="de">{account.preferences.languages.de}</option>
                  <option value="fr">{account.preferences.languages.fr}</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="timezone"
                  className="text-[11px] font-medium text-neutral-500"
                >
                  {account.preferences.timezone}
                </label>
                <select
                  id="timezone"
                  defaultValue="eet"
                  className="cursor-pointer rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition-colors focus:border-[var(--light-green)]"
                >
                  <option value="eet">
                    {account.preferences.timezones.eet}
                  </option>
                  <option value="cet">
                    {account.preferences.timezones.cet}
                  </option>
                  <option value="gmt">
                    {account.preferences.timezones.gmt}
                  </option>
                  <option value="est">
                    {account.preferences.timezones.est}
                  </option>
                </select>
              </div>
            </div>
          </section>

          <section
            id="notifications"
            className="scroll-mt-6 rounded-md border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-sm font-semibold text-black">
              {account.notifications.title}
            </h2>
            <p className="mt-1 text-xs text-[var(--text-light)]">
              {account.notifications.description}
            </p>

            <div className="mt-5 flex flex-col divide-y divide-neutral-100">
              <div className="flex items-center justify-between py-3.5">
                <div>
                  <p className="text-xs font-medium text-black">
                    {account.notifications.jobAlerts.title}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[var(--text-light)]">
                    {account.notifications.jobAlerts.description}
                  </p>
                </div>
                <label className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="peer sr-only"
                  />
                  <span className="absolute inset-0 rounded-full bg-neutral-200 transition-colors duration-200 peer-checked:bg-[var(--light-green)]" />
                  <span className="absolute left-1 h-4 w-4 rounded-full bg-white transition-transform duration-200 peer-checked:translate-x-5" />
                </label>
              </div>

              <div className="flex items-center justify-between py-3.5">
                <div>
                  <p className="text-xs font-medium text-black">
                    {account.notifications.applicationUpdates.title}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[var(--text-light)]">
                    {account.notifications.applicationUpdates.description}
                  </p>
                </div>
                <label className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="peer sr-only"
                  />
                  <span className="absolute inset-0 rounded-full bg-neutral-200 transition-colors duration-200 peer-checked:bg-[var(--light-green)]" />
                  <span className="absolute left-1 h-4 w-4 rounded-full bg-white transition-transform duration-200 peer-checked:translate-x-5" />
                </label>
              </div>

              <div className="flex items-center justify-between py-3.5">
                <div>
                  <p className="text-xs font-medium text-black">
                    {account.notifications.sms.title}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[var(--text-light)]">
                    {account.notifications.sms.description}
                  </p>
                </div>
                <label className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" />
                  <span className="absolute inset-0 rounded-full bg-neutral-200 transition-colors duration-200 peer-checked:bg-[var(--light-green)]" />
                  <span className="absolute left-1 h-4 w-4 rounded-full bg-white transition-transform duration-200 peer-checked:translate-x-5" />
                </label>
              </div>

              <div className="flex items-center justify-between py-3.5">
                <div>
                  <p className="text-xs font-medium text-black">
                    {account.notifications.marketing.title}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[var(--text-light)]">
                    {account.notifications.marketing.description}
                  </p>
                </div>
                <label className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" />
                  <span className="absolute inset-0 rounded-full bg-neutral-200 transition-colors duration-200 peer-checked:bg-[var(--light-green)]" />
                  <span className="absolute left-1 h-4 w-4 rounded-full bg-white transition-transform duration-200 peer-checked:translate-x-5" />
                </label>
              </div>
            </div>
          </section>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="rounded-full border-2 border-solid border-neutral-200 px-7 py-2 text-xs font-medium text-[var(--text-light)] transition-all duration-200 ease-out hover:-translate-y-[1px] active:translate-y-0 active:opacity-70"
            >
              {account.actions.cancel}
            </button>
            <button
              type="button"
              className="rounded-full border-2 border-solid border-[var(--light-green)] bg-[var(--light-green)] px-7 py-2 text-xs font-medium text-white transition-all duration-200 ease-out hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,255,140,0.25)] active:translate-y-0 active:opacity-70"
            >
              {account.actions.save}
            </button>
          </div>

          <section
            id="danger-zone"
            className="scroll-mt-6 rounded-md border border-red-100 bg-red-50/40 p-6"
          >
            <h2 className="text-sm font-semibold text-red-600">
              {account.dangerZone.title}
            </h2>
            <p className="mt-1 text-xs text-[var(--text-light)]">
              {account.dangerZone.description}
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium text-black">
                  {account.dangerZone.deactivate.title}
                </p>
                <p className="mt-0.5 text-[11px] text-[var(--text-light)]">
                  {account.dangerZone.deactivate.description}
                </p>
              </div>
              <button
                type="button"
                className="rounded-full border-2 border-solid border-neutral-300 px-6 py-2 text-xs font-medium text-neutral-700 transition-all duration-200 ease-out hover:-translate-y-[1px] active:translate-y-0 active:opacity-70"
              >
                {account.dangerZone.deactivate.button}
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-red-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium text-black">
                  {account.dangerZone.delete.title}
                </p>
                <p className="mt-0.5 text-[11px] text-[var(--text-light)]">
                  {account.dangerZone.delete.description}
                </p>
              </div>
              <button
                type="button"
                className="rounded-full border-2 border-solid border-red-500 px-6 py-2 text-xs font-medium text-red-500 transition-all duration-200 ease-out hover:-translate-y-[1px] hover:bg-red-500 hover:text-white active:translate-y-0 active:opacity-70"
              >
                {account.dangerZone.delete.button}
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
